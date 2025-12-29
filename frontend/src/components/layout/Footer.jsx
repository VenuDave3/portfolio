import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo, navigationLinks } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_hire-me-dev-3/artifacts/w90y4hl5_IMG_1127.jpg"
                alt="Venu Dave"
                className="w-8 h-8 rounded-full object-cover border-2 border-slate-200"
              />
              <span className="text-lg font-semibold text-slate-900 tracking-tight">
                Venu Dave
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Software Engineer focused on building reliable, 
              production-grade AI systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
