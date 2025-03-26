import React from 'react';
import { PhoneIcon, MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-blue-600">info</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
              <PhoneIcon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+94 6660251</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
              <MailIcon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">kavindumadhusanka89@gmail.com</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
              <GithubIcon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a href="https://github.com/it22639080" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
              github.com/it22639080
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
              <LinkedinIcon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/kavindu-madushanka-551937288" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
              Kavindu Madhusanka
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;