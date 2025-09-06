import React from 'react';
import { ChevronDown, Download, Mail, Linkedin, Calendar, MapPin } from 'lucide-react';
import { generateResumePDF } from '../utils/generateResume';

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Alec Grater
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 mb-8 font-light">
              Software Engineer & Problem Solver
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Enthusiastic and results-driven Software Engineer with a proven track record of 
              building large-scale systems, automating workflows, and reducing operational costs. 
              Skilled at leveraging data, automation, and AI/LLM technologies to improve processes 
              and deliver measurable business impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-soft hover:shadow-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-800">Experience</h3>
                </div>
                <p className="text-slate-600">5+ Years</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-soft hover:shadow-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-800">Location</h3>
                </div>
                <p className="text-slate-600">San Francisco, CA</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-soft hover:shadow-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-800">Email</h3>
                </div>
                <a
                  href="mailto:AlecGrater@gmail.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                >
                  AlecGrater@gmail.com
                </a>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-soft hover:shadow-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Linkedin size={16} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                </div>
                <a
                  href="https://www.linkedin.com/in/alecgrater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToExperience}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium"
              >
                View Experience
              </button>
              <button
                onClick={generateResumePDF}
                className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105 font-medium flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-[538px] h-[538px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-xl animate-float">
              <div className="w-[450px] h-[450px] rounded-full overflow-hidden shadow-inner">
                <img
                  src="/professional-headshot.jpg"
                  alt="Alec Grater - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToExperience} className="text-slate-400 hover:text-blue-600 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;