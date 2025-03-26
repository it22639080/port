import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const ProjectsSection = () => {
  const projects = [{
    title: 'Gym Management System',
    description: 'A comprehensive MERN stack application for gym operations management, featuring user authentication, notification system, and admin dashboard.',
    image: 'https://www.cutehr.io/wp-content/uploads/2020/04/Employee-Management-affilate-page-1184x800.png',
    link: 'https://github.com/it22639080/Gym-management-system.git',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
    type: 'Full Stack Application'
  }, {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.',
    image: 'https://contentstatic.techgig.com/photo/77927333/become-a-full-stack-developer-by-building-and-practising-these-application-projects.jpg?58060',
    link: 'https://github.com/it22639080/e-commerce.git',
    tech: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    type: 'Web Application'
  }, {
    title: 'Online Order System',
    description: 'University-focused order management system with robust user authentication and order tracking capabilities.',
    image: 'https://otrs.com/wp-content/uploads/IT-Service-Desk-Featured-Image.jpg',
    link: 'https://github.com/it22639080/Hotel-management-system-using-java.git',
    tech: ['Java', 'JSP', 'JDBC', 'Bootstrap', 'Apache Tomcat'],
    type: 'Web Application'
  }, {
    title: 'Live Chat Integration',
    description: 'Interactive web platform featuring real-time chat functionality for enhanced user engagement.',
    image: 'https://www.livechatagent.com.au/blog/wp-content/uploads/2021/11/Live-Chat.png',
    link: 'https://github.com/it22639080/Web-page-with-live-chat.git',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    type: 'Frontend Development'
  }];
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my most significant works showcasing my technical
            expertise and problem-solving abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Project <ExternalLinkIcon size={18} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;