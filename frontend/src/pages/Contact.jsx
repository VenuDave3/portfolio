import React, { useState } from 'react';
import { ArrowLeft, Mail, Linkedin, Github, Calendar, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { personalInfo } from '../data/mock';
import Layout from '../components/layout/Layout';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        message: formData.message
      });
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.response?.data?.detail || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Best for detailed inquiries',
      primary: true
    },
    {
      icon: Calendar,
      label: 'Schedule a Call',
      value: 'Book a 30-min chat',
      href: personalInfo.calendlyUrl,
      description: 'Let\'s talk live',
      primary: true
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
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Let's Connect
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Currently exploring SDE and ML/LLM Engineering roles. 
            Whether you have an opportunity, question, or just want to chat about 
            AI systems—I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Contact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`group block ${
                      method.primary ? 'sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <Card className={`h-full border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md ${
                      method.primary ? 'bg-blue-50/50' : 'bg-white'
                    }`}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg ${
                            method.primary 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                          } transition-colors`}>
                            <method.icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-900">{method.label}</h3>
                            <p className="text-sm text-blue-600 font-medium mt-0.5">{method.value}</p>
                            <p className="text-xs text-slate-500 mt-1">{method.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <div className="mt-8">
                <Card className="bg-slate-900 border-slate-900">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h2>
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Message Sent!</h3>
                      <p className="text-slate-600 mt-2">
                        Thanks for reaching out. I'll get back to you within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Where do you work?"
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What would you like to discuss?"
                          rows={5}
                          required
                          className="border-slate-300 focus:border-blue-500 resize-none"
                        />
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          <AlertCircle size={16} />
                          {error}
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-slate-900 hover:bg-slate-800 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        I typically respond within 24-48 hours.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
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
              <p className="text-slate-700">
                Actively exploring SDE and ML/LLM Engineering opportunities for Fall 2025.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                  <Calendar size={16} />
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
