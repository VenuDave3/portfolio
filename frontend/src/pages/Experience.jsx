import React from 'react';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { experience } from '../data/mock';
import Layout from '../components/layout/Layout';

const ExperienceCard = ({ exp, isFirst }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 md:left-1/2 top-8 w-3 h-3 rounded-full border-2 border-blue-500 bg-white md:-translate-x-1/2 ${isFirst ? 'ring-4 ring-blue-100' : ''}`} />

      <Card className="bg-white border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md ml-4 md:ml-0">
        <CardContent className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  className={`${
                    exp.company === 'Amazon' 
                      ? 'bg-amber-100 text-amber-800 border-amber-200' 
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {exp.company}
                </Badge>
                <Badge variant="outline" className="text-slate-500 border-slate-200">
                  {exp.type}
                </Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                {exp.role}
              </h3>
            </div>

            <div className="flex flex-col gap-1 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {exp.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-slate-600 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>

          {/* Tech Used */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {exp.techUsed.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Experience = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Briefcase size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Experience
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            My professional journey building production systems, from data science 
            foundations to shipping AI-powered features at Amazon.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} isFirst={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono">3</div>
              <div className="text-sm text-slate-600 mt-1">Professional Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono">1+</div>
              <div className="text-sm text-slate-600 mt-1">Year Industry Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono">90%</div>
              <div className="text-sm text-slate-600 mt-1">Time Saved (Amazon)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono">60%</div>
              <div className="text-sm text-slate-600 mt-1">Reliability Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Want to learn more about my work?</h2>
          <p className="mt-2 text-slate-600">Check out my projects or reach out directly.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="gap-2 border-slate-300">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800">
                Get In Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
