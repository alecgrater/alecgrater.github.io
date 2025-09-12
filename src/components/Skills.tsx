import React from 'react';
import { Code, Database, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Programming & Data',
      skills: ['Python', 'Pandas', 'SQL']
    },
    {
      icon: <Database className="text-blue-600" size={24} />,
      title: 'Big Data & Analytics',
      skills: ['Splunk/SPL', 'Impala', 'Trino']
    },
    {
      icon: <Cloud className="text-blue-600" size={24} />,
      title: 'DevOps & Infrastructure',
      skills: ['CI/CD orchestration', 'Kubernetes', 'Docker']
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: 'Collaboration & Leadership',
      skills: ['Cross-team collaboration', 'Influencing stakeholders', 'Customer-focused problem solving']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Skills & Abilities
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                style={{ minHeight: '280px' }}
              >
                <div className="flex items-center gap-3 h-16 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-2 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {skill}
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

export default Skills;