import Navbar from '../components/Navbar';
import MainFooter from '../components/MainFooter';

import bitebookimg from '../assets/images/bitebook1.png';
import fluxtrackimg from '../assets/images/fluxtrack.png';
import gravelightimg from '../assets/images/gravelight1.png';
import hiddenappimg from '../assets/images/hiddenapp.png';
import babimg from '../assets/images/bab.png';
import togglimg from '../assets/images/toggl1.png';

import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar name="Lorenz Ciocon" />

      <main className='font-poppins pb-9'>
        <div className="container w-[90%] md:w-4/5 mx-auto md:max-w-350">
            <h2 className='text-5xl font-semibold mt-16 mb-4 animate-fadeUpBlur'>My Projects</h2>
            <h4 className='text-xl mb-8 animate-fadeUpBlur text-[#1a461e]'>Some of my recent projects mostly from school</h4>

            <div className="projs-container md:grid md:grid-cols-2 md:gap-8">
              {projects.map((project, i) => (
                <div
                  key={project.slug}
                  className="project bg-[#f2f2f2] p-8 mb-4 md:mb-0 rounded-3xl overflow-hidden opacity-0 animate-fadeUpBlur"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <h3 className="text-xl font-semibold mb-1 md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="text-md mb-3">
                      {project.subtitle}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="py-1 px-3 text-sm text-gray-500 rounded-full bg-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <img
                      src={project.cover}
                      alt={project.title}
                      className="transition-transform duration-500 group-hover:scale-115 mt-4 w-full scale-90 rounded-2xl"
                    />
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </main>

      <MainFooter />
    </>
  );
}