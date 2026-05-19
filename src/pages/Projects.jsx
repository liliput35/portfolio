import Navbar from '../components/Navbar';
import MainFooter from '../components/MainFooter';

import bitebookimg from '../assets/images/bitebook1.png';
import fluxtrackimg from '../assets/images/fluxtrack.png';
import gravelightimg from '../assets/images/gravelight1.png';
import hiddenappimg from '../assets/images/hiddenapp.png';
import babimg from '../assets/images/bab.png';
import togglimg from '../assets/images/toggl1.png';

export default function Projects() {
  const projects = [
    {
      id: 1, 
      proj_name: "BiteBook",
      proj_desc: "Catering Management Web App", 
      proj_img_addr: bitebookimg,  
      proj_link: "https://github.com/liliput35/bitebook",  
      proj_techstack: ["Laravel", "MySql", "Tailwind"]
    }, 
    {
      id: 2, 
      proj_name: "FluxTrack",
      proj_desc: "Incident Reporting Web App", 
      proj_img_addr: fluxtrackimg,  
      proj_link: "https://github.com/liliput35/FluxTrack",  
      proj_techstack: ["PHP", "MySql", "CSS", "JavaScript"]
    }, 
    {
      id: 3, 
      proj_name: "Gravelight",
      proj_desc: "3d Narrative Adventure Game", 
      proj_img_addr: gravelightimg,  
      proj_link: "https://github.com/liliput35/gravelight",  
      proj_techstack: ["Unity", "C#"]
    },
    {
      id: 4, 
      proj_name: "Hidden Apparitions",
      proj_desc: "Augmented Reality Based Mobile Game", 
      proj_img_addr: hiddenappimg,  
      proj_link: "https://github.com/liliput35/hidden-apparitions",  
      proj_techstack: ["Unity", "C#", "ARCore"]
    },
    {
      id: 5, 
      proj_name: "Bust-a-Beat",
      proj_desc: "2d Rhythm Based Platformer", 
      proj_img_addr: babimg,  
      proj_link: "https://github.com/liliput35/bust-a-beat",  
      proj_techstack: ["Unity", "C#"]
    },
    {
      id: 6, 
      proj_name: "Toggl",
      proj_desc: "Task Tracking Application", 
      proj_img_addr: togglimg,  
      proj_link: "https://github.com/liliput35/Toggl",  
      proj_techstack: ["Java"]
    },
  ] ;

  return (
    <>
      <Navbar name="Lorenz Ciocon" />

      <main className='font-poppins pb-9'>
        <div className="container w-[90%] md:w-4/5 mx-auto md:max-w-350">
            <h2 className='text-5xl font-semibold mt-16 mb-4 animate-fadeUpBlur'>My Projects</h2>
            <h4 className='text-xl mb-8 animate-fadeUpBlur text-[#1a461e]'>Some of my recent projects mostly from school</h4>

            <div className="projs-container md:grid md:grid-cols-2 md:gap-8">
              {projects.map((project, i) => (
                <div className="project bg-[#f2f2f2] p-8 mb-4 md:mb-0 rounded-3xl overflow-hidden opacity-0 animate-fadeUpBlur" key={project.id} style={{ animationDelay: `${ 0.3+ i * 0.1}s` }}>
                  <a href={project.proj_link} target='blank' className='group'>
                    <h3 className='text-xl font-semibold mb-1 md:text-2xl'>{project.proj_name}</h3>
                    <p className='text-md mb-2'>{project.proj_desc}</p>

                    {project.proj_techstack.map((tech) => (
                      <span className='mr-2 py-1 px-3 text-sm text-gray-500 rounded-full bg-white mb-2'>{tech}</span>
                    ))}

                    <img src={project.proj_img_addr} alt={project.proj_name} className='transition-transform duration-500 group-hover:scale-115 mt-4 w-full scale-90'/>
                  </a>

                </div>
              ))}
            </div>
        </div>
      </main>

      <MainFooter />
    </>
  );
}