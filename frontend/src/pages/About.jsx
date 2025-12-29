import React from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, Code2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { skills, education, personalInfo } from '../data/mock';
import Layout from '../components/layout/Layout';

const About = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            About Me
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Software engineer passionate about building reliable, production-scale 
            AI systems. Currently pursuing my Master's at Northeastern while seeking 
            SDE and ML/LLM engineering opportunities.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm Venu Dave, a Computer Science graduate student at Northeastern University 
                  with a passion for solving complex problems through software and AI. My recent 
                  work at <span className="font-semibold">Amazon</span> involved building an 
                  agentic NL-to-SQL assistant that transformed how engineering teams access data—
                  reducing query turnaround from days to minutes.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  I specialize in building systems that are not just functional but 
                  <span className="font-semibold"> reliable at scale</span>. Whether it's 
                  implementing advanced prompt engineering techniques for 60% better LLM reliability, 
                  or designing modular agent architectures with proper error handling, I focus on 
                  the engineering rigor that separates demos from production systems.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  I'm currently exploring opportunities where I can continue building impactful 
                  AI-powered products while contributing to strong engineering cultures at 
                  companies like Google, Meta, Amazon, or innovative AI startups.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Code2 size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:border-blue-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{edu.institution}</h3>
                      <p className="text-slate-600 mt-1">{edu.degree}</p>
                      <p className="text-sm text-slate-500 mt-2">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-700 font-mono">
                        {edu.gpa}
                      </Badge>
                      <p className="text-sm text-slate-500 mt-2">{edu.period}</p>
                    </div>
                  </div>
                  {edu.highlight && (
                    <p className="mt-4 text-sm text-slate-600 border-t border-slate-200 pt-4">
                      {edu.highlight}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Want the Full Picture?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Download my resume for a complete overview of my experience, 
            skills, and qualifications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={personalInfo.resumeUrl} download>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white gap-2">
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

export default About;
