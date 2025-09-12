import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
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

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <TrendingUp size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;