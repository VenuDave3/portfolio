import React from 'react';
import { ArrowLeft, Mail, Linkedin, Github, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { personalInfo } from '../data/mock';
import Layout from '../components/layout/Layout';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venudave333@gmail.com',
      href: `mailto:venudave333@gmail.com`,
      description: 'Best for detailed inquiries'
    },
    {
      icon: Calendar,
      label: 'Schedule a Call',
      value: 'Book a 30-min chat',
      href: personalInfo.calendlyUrl,
      description: "Let's talk live"
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      description: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: personalInfo.github,
      description: 'Open source work'
    }
  ];

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

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Let's Connect</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Currently exploring SDE and ML/LLM Engineering roles. Whether you have an
            opportunity, question, or just want to chat about AI systems—I'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Main Content - Quick Contact (4 across) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                      <method.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">{method.label}</h3>
                      <p className="text-sm text-blue-600 font-medium mt-0.5">{method.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{method.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Resume Download - below the contacts */}
          <div className="mt-8">
            <Card className="bg-slate-900 border-slate-900">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">Download Resume</h3>
                  <p className="text-sm text-slate-400 mt-1">Get the complete picture</p>
                </div>
                <a href={personalInfo.resumeUrl} download>
                  <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
                    <Download size={16} />
                    PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Availability Banner */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-700">Currently Available</span>
              </div>
              <p className="text-slate-700">Actively exploring SDE and ML/LLM Engineering opportunities for Fall 2025.</p>
            </div>
            <div className="flex gap-3">
              <a href={personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">Schedule</Button>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-900 hover:bg-slate-800 gap-2">View Code</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
