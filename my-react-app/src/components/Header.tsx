import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="brand">
            <a href="#hero" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-blue-600">E</span>G{' '}
                <span className="text-blue-600">K</span>Madhusanka
              </h1>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="block font-medium text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;