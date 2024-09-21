import React from 'react';
import { LayoutGrid, CheckCircle, Users, Zap, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const LandingPage: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <CheckCircle className="h-12 w-12 text-teal-500" />,
      title: "Visual Task Management",
      description: "Organize tasks into customizable columns for clear progress tracking."
    },
    {
      icon: <Users className="h-12 w-12 text-teal-500" />,
      title: "Team Collaboration",
      description: "Share boards, assign tasks, and communicate effectively with your team."
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-500" />,
      title: "Productivity Boost",
      description: "Streamline workflows and increase efficiency with powerful automation tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LayoutGrid className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TaskFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition duration-300">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition duration-300">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition duration-300">Contact</a>
              <Link href={'/signIn'} className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition duration-300 transform hover:scale-105">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="h-screen flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-fade-in-down">
            Streamline Your Workflow with TaskFlow
          </h1>
          <p className="text-xl sm:text-2xl text-teal-100 mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Boost productivity and collaborate seamlessly with our intuitive Kanban-based task management solution.
          </p>
          <Link href={'/signUp'} className="bg-white text-teal-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-100 transition duration-300 transform hover:scale-105 shadow-lg">
            Get Started Free
          </Link>
          <div className="mt-16 animate-bounce">
            <a href="#features" className="text-white hover:text-teal-200 transition duration-300">
              <ChevronDown className="h-10 w-10 mx-auto" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section id="features" className="mb-32">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mb-32">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Simple Pricing</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Start Free, Upgrade When You Need</h3>
            <ul className="text-gray-600 mb-10 space-y-4">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-4" /> Unlimited personal boards</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-4" /> Collaborative team boards</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-4" /> Advanced features for power users</li>
            </ul>
            <div className="text-center">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition duration-300 transform hover:scale-105 shadow-lg">
                View Pricing Plans
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center bg-gray-100 py-24 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Have questions? We&apos;re here to help!</p>
          <a href="" className="text-teal-600 hover:text-teal-800 text-lg font-semibold transition duration-300">
            support@taskflow.com
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <LayoutGrid className="h-8 w-8 text-teal-400 mr-2" />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-teal-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;