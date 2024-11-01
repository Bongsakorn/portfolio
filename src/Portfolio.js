import {
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Settings,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      period: "Apr 2024 - Aug 2024",
      company: "Purple Ventures Co., Ltd. (Robinhood)",
      position: "Software Engineer",
      highlight: "Led ride-hailing platform enhancement",
      projects: [
        {
          name: "Ride Hailing",
          details: [
            "Managed ride fares for two-wheeler vehicles through platform fee calculations",
            "Implemented wheel_type field for improved re-ordering functionalities",
            "Spearheaded booking API for two-wheeler ride bookings",
          ],
        },
        {
          name: "EV Rental Platform",
          details: [
            "Conducted research on Azure and Service Bus implementation",
            "Developed email invitation system",
            "Built backend for reservation overview page",
          ],
        },
      ],
    },
    {
      period: "Oct 2020 - Feb 2024",
      company: "Customix Co., Ltd.",
      position: "Sr. Software Engineer",
      highlight: "Architected multiple enterprise platforms",
      projects: [
        {
          name: "Thailife Insurance's e-Commerce Platform",
          details: [
            "Built e-Commerce platform using Pimcore and Next.js with microservice architecture on AWS Fargate",
          ],
        },
        {
          name: "e-KYC Platform",
          details: [
            "Designed and developed e-KYC platform using Node.js with OCR, DOPA verification, and facial comparison",
          ],
        },
      ],
    },
  ];

  const skills = {
    "Languages & Frameworks": {
      icon: <Code2 className="w-6 h-6" />,
      items: ["Golang + Fiber", "NestJs", "Java", "Node.js", "PHP", "Python"],
    },
    Cloud: {
      icon: <Cloud className="w-6 h-6" />,
      items: ["Azure", "GCP", "AWS"],
    },
    Tools: {
      icon: <Settings className="w-6 h-6" />,
      items: ["Jenkins", "GitLab", "Kubernetes"],
    },
    Databases: {
      icon: <Database className="w-6 h-6" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Animated Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1
              className={`transition-all duration-300 ${
                scrolled ? "text-2xl text-blue-600" : "text-3xl text-white"
              } font-bold`}
            >
              Pongsakorn Eiamrod
            </h1>
            <div className="flex gap-4">
              <a
                href="https://github.com/Bongsakorn"
                className="p-2 hover:bg-blue-100 rounded-full transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/pongsakorn-eiamrod-662a76128"
                className="p-2 hover:bg-blue-100 rounded-full transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in">
              Software Engineer
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Crafting robust solutions with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:e.pongsakorn@gmail.com"
                className="flex items-center px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                e.pongsakorn@gmail.com
              </a>
              <a
                href="tel:+66839275966"
                className="flex items-center px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                (+66)83-927-5966
              </a>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <MapPin className="w-4 h-4 mr-2" />
                Siracha, Chonburi, Thailand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-12">
          {["experience", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === section
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Experience Section */}
        <div
          className={`transition-opacity duration-300 ${
            activeSection === "experience" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-blue-600 text-lg">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  </div>
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                </div>
                <div className="space-y-6">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {project.name}
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="text-gray-600 flex items-start"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div
          className={`transition-opacity duration-300 ${
            activeSection === "skills" ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, { icon, items }]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category}
                  </h3>
                </div>
                <div className=" flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Pongsakorn Eiamrod
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
