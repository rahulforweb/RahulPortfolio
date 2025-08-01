import React from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Database, LineChart, Puzzle } from 'lucide-react';

interface AboutProps {
  id: string;
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ id, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                About Me
              </span>
            </h2>

            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  My Journey
                </h3>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-6 leading-relaxed`}
                >
                    After completing my degree in Electrical and Electronics Engineering, I took a dedicated break to explore the stock market, where I developed strong analytical thinking and real-time decision-making skills. While navigating the markets, I realized the need for automation and discovered Python as a tool to simplify and optimize trading processes — which sparked my interest in software development.
                </p>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-6 leading-relaxed`}
                >
                    I shifted my focus to building tools that support data-driven decision-making. Through internships, certifications, and freelance work, I gained hands-on experience in creating automation scripts, data dashboards, and application-level projects using Python, Selenium, and basic machine learning. I'm now looking to contribute to impactful projects, collaborate with experienced teams, and continue growing as a developer in a full-time role.
                </p>
              </div>

              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 order-1 md:order-2">
                <div
                  className={`${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-indigo-50 hover:bg-indigo-100'
                  } p-6 rounded-lg transition hover:shadow-md hover:-translate-y-1 duration-300 group`}
                >
                  <Code
                    size={36}
                    className={`${
                      isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                    } transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]`}
                  />
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}
                  >
                    Python Development
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Strong foundation in Python with experience in automation
                    and data analysis
                  </p>
                </div>

                <div
                  className={`${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-purple-50 hover:bg-purple-100'
                  } p-6 rounded-lg transition hover:shadow-md hover:-translate-y-1 duration-300 group`}
                >
                  <Database
                    size={36}
                    className={`${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    } transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]`}
                  />
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}
                  >
                    Data Analysis
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Worked with SQL, MongoDB, and Power BI for data analysis and
                    basic dashboard creation.
                  </p>
                </div>

                <div
                  className={`${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-blue-50 hover:bg-blue-100'
                  } p-6 rounded-lg transition hover:shadow-md hover:-translate-y-1 duration-300 group`}
                >
                  <LineChart
                    size={36}
                    className={`${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    } transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]`}
                  />
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}
                  >
                    Machine Learning
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Basic knowledge of ML algorithms and hands-on project
                    experience
                  </p>
                </div>

                <div
                  className={`${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-indigo-50 hover:bg-indigo-100'
                  } p-6 rounded-lg transition hover:shadow-md hover:-translate-y-1 duration-300 group`}
                >
                  <Puzzle
                    size={36}
                    className={`${
                      isDarkMode ? 'text-orange-400' : 'text-orange-600'
                    } transition-all duration-300 group-hover:animate-bounce group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]`}
                  />
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}
                  >
                    Problem Solving
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Strong analytical thinking developed through market analysis
                    and coding
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className={`px-6 py-3 ${
                  isDarkMode
                    ? 'bg-indigo-500 hover:bg-indigo-400'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                onClick={() => {
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
