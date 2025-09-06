import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Bachelor of Economics</h3>
                <h4 className="text-lg text-blue-600 font-semibold">University of Massachusetts Amherst</h4>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="text-sm font-medium">2016</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Award size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Minor:</strong> Information Technology
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Award size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-slate-700 leading-relaxed">
                  Performer and Technical Leader (website design/maintenance), UMass Comedy League
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Award size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-slate-700 leading-relaxed">
                  Lieutenant Governor, Student Government
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;