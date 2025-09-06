import jsPDF from 'jspdf';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: 'Apple Inc',
    role: 'Software Engineer',
    period: 'Jan 2020 – Present',
    location: 'Cupertino, CA',
    achievements: [
      'Led cross-functional initiative with 20+ teams to cut telemetry ingestion from 10PB to 5PB/week, saving an estimated $25M annually in storage and compute costs',
      'Built CI/CD automation delivering daily OTA configuration updates to 700M+ devices, ensuring consistent telemetry during rapid release cycles',
      'Developed an LLM-powered RAG Helpdesk bot for documentation retrieval, reducing engineering process time by 75%'
    ]
  },
  {
    company: 'Apple Inc',
    role: 'Technical Expert',
    period: 'Nov 2018 – Jan 2020',
    location: 'Boston, MA',
    achievements: [
      'Troubleshot hardware and software issues across iPhone, iPad, Apple Watch, and Apple TV with a 95%+ NPS',
      'Performed complex repairs on iPhone components including displays, batteries, cameras, and taptic engines',
      'Mentored and onboarded new employees, accelerating ramp-up and improving team performance'
    ]
  },
  {
    company: 'Hollister Co',
    role: 'Assistant Manager',
    period: 'Jan 2017 – Jan 2018',
    location: 'Boston, MA',
    achievements: [
      'Supervised 40+ employees, managing scheduling, training, and daily operations',
      'Analyzed sales metrics to optimize staffing and drive revenue growth',
      'Recruited, hired, and developed new staff to improve customer service and team cohesion'
    ]
  },
  {
    company: 'YouTube',
    role: 'Content Creator',
    period: 'Apr 2008 – 2014',
    location: 'Remote',
    achievements: [
      'Produced and monetized technology and gaming tutorial videos, growing channel to 3M views and 2,700 subscribers',
      'Built and engaged an audience through consistent, high-quality content'
    ]
  }
];

export const generateResumePDF = () => {
  const doc = new jsPDF();
  let yPosition = 18;

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Alec Grater', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  doc.text('Software Engineer & Problem Solver', 20, yPosition);

  // Contact Information - Single line
  yPosition += 10;
  doc.setFontSize(9);
  doc.text('Email: AlecGrater@gmail.com | LinkedIn: linkedin.com/in/alecgrater | Location: San Francisco, CA', 20, yPosition);

  // Professional Summary
  yPosition += 12;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Professional Summary', 20, yPosition);
  
  yPosition += 6;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const summary = 'Enthusiastic and results-driven Software Engineer with a proven track record of building large-scale systems, automating workflows, and reducing operational costs. Skilled at leveraging data, automation, and AI/LLM technologies to improve processes and deliver measurable business impact.';
  const summaryLines = doc.splitTextToSize(summary, 170);
  doc.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 4;

  // Work Experience
  yPosition += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Work Experience', 20, yPosition);

  // Include all experiences with tighter spacing
  experiences.forEach((exp, index) => {
    yPosition += 8;

    // Company and Role
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${exp.role} - ${exp.company}`, 20, yPosition);
    
    yPosition += 4;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(`${exp.period} | ${exp.location}`, 20, yPosition);

    // Include all achievements with tighter spacing
    exp.achievements.forEach((achievement) => {
      yPosition += 4;
      
      const achievementLines = doc.splitTextToSize(`• ${achievement}`, 170);
      doc.text(achievementLines, 25, yPosition);
      yPosition += (achievementLines.length - 1) * 3;
    });
  });

  // Skills Section (after Work Experience)
  yPosition += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Technical Skills', 20, yPosition);
  
  yPosition += 5;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const skills = 'Python, SQL, ETL, Impala, Splunk/SPL, Trino, Tableau, Pandas, CI/CD Orchestration Systems, LLMs, RAG Systems, Kubernetes, Customer & Personal Service, Mentorship, Cross-Team Collaboration';
  const skillsLines = doc.splitTextToSize(skills, 170);
  doc.text(skillsLines, 20, yPosition);
  yPosition += skillsLines.length * 3;

  // Education Section
  yPosition += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Education', 20, yPosition);

  yPosition += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Economics - University of Massachusetts Amherst', 20, yPosition);
  
  yPosition += 4;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('2016', 20, yPosition);

  yPosition += 4;
  doc.setFontSize(8);
  doc.text('• Minor: Information Technology', 25, yPosition);
  
  yPosition += 3;
  doc.text('• Performer and Technical Leader (website design/maintenance), UMass Comedy League', 25, yPosition);
  
  yPosition += 3;
  doc.text('• Lieutenant Governor, Student Government', 25, yPosition);

  // Save the PDF
  doc.save('Alec_Grater_Resume.pdf');
};