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