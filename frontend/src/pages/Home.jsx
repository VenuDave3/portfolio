import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Database, Rocket, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, impactHighlights, projects } from '../data/mock';
import Layout from '../components/layout/Layout';

const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Database: Database,
  Rocket: Rocket
};

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-blue-700 font-medium">Open to SDE & ML/LLM roles</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Software Engineer Who Ships{' '}
                <span className="text-blue-600">Production-Grade AI Systems</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                Built an agentic NL-to-SQL assistant at <span className="font-semibold text-slate-800">Amazon</span> that 
                reduced data access time by <span className="font-semibold text-slate-800">90%</span>. 
                MS CS @ Northeastern | <span className="font-semibold text-slate-800">3.91 GPA</span>
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white gap-2">
                    View My Work
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-900">Amazon</span>
                  <span>SDE Intern</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-900">Northeastern</span>
                  <span>MS CS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-900">5+</span>
                  <span>Production Projects</span>
                </div>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl -rotate-6" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-blue-50 rounded-3xl rotate-3" />
                {/* Photo */}
                <div className="relative">
                  <img 
                    src={personalInfo.photo}
                    alt="Venu Dave"
                    className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-white"
                  />
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-900">3.91</span>
                      <span className="text-sm text-slate-500">GPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Impact at a Glance</h2>
            <p className="mt-2 text-slate-600">Quantified results from production systems</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <Card key={index} className="bg-slate-50 border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 mb-4">
                      <Icon size={20} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 font-mono">
                      {highlight.metric}
                    </div>
                    <p className="mt-2 text-sm text-slate-600 leading-snug">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Projects</h2>
              <p className="mt-2 text-slate-600">Production-grade systems with real impact</p>
            </div>
            <Link 
              to="/projects" 
              className="hidden md:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-white border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">
                          {project.company}
                        </Badge>
                        {project.isInternal && (
                          <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">
                            Internal
                          </Badge>
                        )}
                        <span className="text-sm text-slate-500">{project.period}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-slate-600 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-500 rounded-md">
                            +{project.techStack.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-3">
                      <Link to={`/projects#${project.id}`}>
                        <Button variant="outline" size="sm" className="gap-2 border-slate-300">
                          View Details
                          <ArrowRight size={14} />
                        </Button>
                      </Link>
                      {project.hasRepo && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                            <Github size={14} />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {project.impact.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Currently exploring SDE and ML/LLM Engineering roles at companies 
            building impactful, production-scale systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
                Contact Me
                <ArrowRight size={18} />
              </Button>
            </Link>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
