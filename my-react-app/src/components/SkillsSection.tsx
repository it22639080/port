import React from 'react';
import { CodeIcon, CheckCircleIcon, LayoutIcon, DatabaseIcon, BrainIcon, GitBranchIcon } from 'lucide-react';
const SkillsSection = () => {
  const skills = [{
    title: 'Frontend Development',
    icon: <CodeIcon size={24} className="text-blue-600" />,
    skills: ['React.js', 'Angular', 'HTML5/CSS3', 'JavaScript/TypeScript', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Backend Development',
    icon: <DatabaseIcon size={24} className="text-purple-600" />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs'],
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Quality Assurance',
    icon: <CheckCircleIcon size={24} className="text-green-600" />,
    skills: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Postman', 'Test Documentation'],
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'Project Management',
    icon: <LayoutIcon size={24} className="text-orange-600" />,
    skills: ['Agile/Scrum', 'Team Leadership', 'Time Management', 'Problem Solving', 'Communication'],
    color: 'from-orange-500 to-yellow-500'
  }, {
    title: 'Tools & Version Control',
    icon: <GitBranchIcon size={24} className="text-red-600" />,
    skills: ['Git/GitHub', 'VS Code', 'Jira', 'Figma', 'npm/yarn'],
    color: 'from-red-500 to-orange-500'
  }, {
    title: 'Soft Skills',
    icon: <BrainIcon size={24} className="text-indigo-600" />,
    skills: ['Problem Solving', 'Team Collaboration', 'Quick Learning', 'Adaptability', 'Communication'],
    color: 'from-indigo-500 to-purple-500'
  }];
  return <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of skills developed through academic
            excellence and hands-on project experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => <div key={index} className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.skills.map((item, idx) => <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;