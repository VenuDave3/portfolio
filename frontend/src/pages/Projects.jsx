import React from 'react';
import { ArrowLeft, ArrowRight, Github, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/mock';
import Layout from '../components/layout/Layout';

const ProjectCard = ({ project, isExpanded }) => {
  return (
    <Card 
      id={project.id} 
      className="bg-white border-slate-200 scroll-mt-24"
    >
      <CardContent className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">
                {project.company}
              </Badge>
              {project.isInternal && (
                <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 gap-1">
                  <Lock size={12} />
                  Internal System
                </Badge>
              )}
              <span className="text-sm text-slate-500">{project.period}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {project.title}
            </h2>
          </div>

          <div className="flex gap-2">
            {project.hasRepo && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2 border-slate-300">
                  <Github size={14} />
                  {project.repoUrlBackend ? 'Frontend' : 'View Code'}
                </Button>
              </a>
            )}
            {project.repoUrlBackend && (
              <a href={project.repoUrlBackend} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2 border-slate-300">
                  <Github size={14} />
                  Backend
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Problem</h3>
          <p className="text-slate-700 leading-relaxed">{project.problem}</p>
        </div>

        {/* Approach */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Approach</h3>
          <p className="text-slate-700 leading-relaxed">{project.approach}</p>
        </div>

        {/* Architecture */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Architecture & Implementation</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {project.architecture.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Impact & Results</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.impact.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-slate-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3"
              >
                <span className="text-green-600 text-lg">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learnings */}
        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Learnings</h3>
          <p className="text-slate-600 italic leading-relaxed">"{project.learnings}"</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
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
            Projects
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            A collection of production-grade systems, ML pipelines, and full-stack applications.
            Each project emphasizes reliability, scalability, and measurable impact.
          </p>

          {/* Quick Navigation */}
          <div className="mt-8 flex flex-wrap gap-2">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={`#${project.id}`}
                className="px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                {project.title.split(' ').slice(0, 2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Interested in working together?</h2>
          <p className="mt-2 text-slate-600">Let's discuss how I can contribute to your team.</p>
          <div className="mt-6">
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

export default Projects;
