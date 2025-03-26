import React from 'react';
import { DownloadIcon, GraduationCapIcon, BriefcaseIcon, AwardIcon } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCapIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">
                    BSc (Hons) in Information Technology at SLIIT
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BriefcaseIcon size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-gray-600">
                    Full Stack Developer with hands-on project experience in web
                    development and software engineering
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <AwardIcon size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Passion</h3>
                  <p className="text-gray-600">
                    Dedicated to creating innovative solutions and continuously
                    learning new technologies
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/EVISg9KPtyFDuoMTgi7PuUsB7flP9iuqw7mGvUZ0qp9GHQ?e=XIX2ra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Download Resume <DownloadIcon size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              {/* <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Kavindu Madhusanka" className="w-full h-auto" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;