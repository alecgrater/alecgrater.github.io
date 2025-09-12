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
      'Spearheaded a cross-functional initiative across 20+ teams, reducing telemetry ingestion from 10PB to 5PB/week and cutting storage and compute costs by ~$25M annually.',
      'Architect and maintain CI/CD pipelines delivering daily over-the-air configuration updates to 2B+ devices worldwide.',
      'Designed and deployed an LLM-powered RAG bot for documentation retrieval, halving helpdesk ticket processing time and improving operational efficiency.'
    ]
  },
  {
    company: 'Apple Inc',
    role: 'Technical Expert',
    period: 'Nov 2018 – Jan 2020',
    location: 'Boston, MA',
    achievements: [
      'Delivered technical support and training on iOS, macOS, and Apple ecosystem devices, resolving 60+ customer issues per week with a 95%+ satisfaction rating.',
      'Translated complex technical concepts into clear, actionable solutions to improve customer confidence and satisfaction.',
      'Collaborated with retail and service teams to streamline customer experiences and support new product launches.'
    ]
  },
  {
    company: 'Hollister Co',
    role: 'Assistant Manager',
    period: 'Jan 2017 – Jan 2018',
    location: 'Boston, MA',
    achievements: [
      'Directed daily operations and cross-functional coordination to drive efficiency, compliance, and business results.',
      'Supervised, coached, and developed a team of 40+ associates, improving performance and building future leaders.',
      'Analyzed KPIs and operational metrics to inform strategic decisions, optimize resources, and reduce inefficiencies.'
    ]
  },
  {
    company: 'YouTube',
    role: 'Content Creator',
    period: 'Apr 2008 – 2012',
    location: 'Remote',
    achievements: [
      'Built and grew a digital audience through engaging instructional videos on technology and gaming, achieving 3M+ views and 2.7K subscribers.',
      'Leveraged content strategy, audience analytics, and monetization techniques to maximize reach and revenue potential.'
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
  doc.text('Skills & Abilities', 20, yPosition);
  
  yPosition += 5;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  // Programming & Data
  doc.setFont('helvetica', 'bold');
  doc.text('• Programming & Data:', 20, yPosition);
  yPosition += 3;
  doc.setFont('helvetica', 'normal');
  doc.text('  Python, Pandas, SQL', 20, yPosition);
  
  yPosition += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('• Big Data & Analytics:', 20, yPosition);
  yPosition += 3;
  doc.setFont('helvetica', 'normal');
  doc.text('  Splunk/SPL, Impala, Trino', 20, yPosition);
  
  yPosition += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('• DevOps & Infrastructure:', 20, yPosition);
  yPosition += 3;
  doc.setFont('helvetica', 'normal');
  doc.text('  CI/CD orchestration, Kubernetes, Docker', 20, yPosition);
  
  yPosition += 4;
  doc.setFont('helvetica', 'bold');
  doc.text('• Collaboration & Leadership:', 20, yPosition);
  yPosition += 3;
  doc.setFont('helvetica', 'normal');
  doc.text('  Cross-team collaboration, Influencing stakeholders, Customer-focused problem solving', 20, yPosition);

  // Education Section
  yPosition += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Education', 20, yPosition);

  yPosition += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Economics, Minor in Information Technology - University of Massachusetts Amherst', 20, yPosition);
  
  yPosition += 4;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('2016', 20, yPosition);

  yPosition += 4;
  doc.setFontSize(8);
  doc.text('• Led digital initiatives as Technical Lead, UMass Comedy League (website design & maintenance)', 25, yPosition);
  
  yPosition += 3;
  doc.text('• Elected Lieutenant Governor, Student Government – managed cross-campus projects and initiatives', 25, yPosition);

  // Save the PDF
  doc.save('Alec_Grater_Resume.pdf');
};