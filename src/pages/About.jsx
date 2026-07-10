import Navbar from '../components/Navbar';
import MainFooter from '../components/MainFooter';
import ciocon from '../assets/images/ciocon1.jpg'
import arrow from '../assets/images/diagonal-arrow.png'
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const about = {
    about_header: "ABOUT ME",
    about_img_addr: ciocon,
    about_text: "Hi, my name is Lorenz Nicolas Ciocon. I'm currently a fourth-year Computer Science student in Bacolod City, Philippines. I began learning frontend development through online resources and have since expanded into full-stack web and mobile development using React, Flutter, Laravel, Firebase, and SQL. During my software development internship, I built real-world systems that streamlined scheduling and farm management workflows. I enjoy creating software that solves practical problems while continuously learning new technologies.",
  };

  const skills = [
    { id: 1, skill_name: "Full-Stack Web & Mobile Development", skill_desc: "Experienced in developing full-stack web and mobile applications using using modern web and mobile development frameworks. Skilled in building responsive interfaces, integrating databases, implementing authentication, and developing scalable solutions. Delivered real-world systems for two clients that streamlined scheduling, farm management, and business workflows." },
    { id: 2, skill_name: "Game Development", skill_desc: "Proficient in designing and developing interactive 2D and 3D games using Unity Engine and C#. Experienced in game mechanics, level design, and implementing gameplay logic. Developed a 2D rhythm-based platformer and a 3D adventure game as part of team projects" },
  ];

  const frontendTech = [
    { id: 1, tech: "HTML" },
    { id: 2, tech: "CSS" },
    { id: 3, tech: "JavaScript" },
    { id: 4, tech: "React" },
    { id: 5, tech: "Flutter" },
    { id: 6, tech: "Tailwind" },
    { id: 7, tech: "Bootstrap" },
  ];

  const backendTech = [
    { id: 1, tech: "Laravel" },
    { id: 2, tech: "PHP" },
    { id: 3, tech: "Firebase" },
    { id: 4, tech: "MySQL" },
    { id: 5, tech: "SQLite" },
    { id: 6, tech: "Java" },
    { id: 7, tech: "C#" },
  ];

  return (
    <>
      <Navbar name="Lorenz Ciocon" />

      <main className='font-poppins'>
        {/* About */}
        <section className="animate-fadeUpBlur">
          <div className="container mx-auto w-[90%] md:w-4/5 md:max-w-350">
            <h1 className="mt-16 mb-4 text-[2em] text-[#a8a8a8] font-medium">{about.about_header}</h1>
            <img
              src={about.about_img_addr}
              alt="About"
              className="w-1/4 max-w-35 max-h-50 rounded-[20px] mb-8 object-cover"
            />
            <p className="lg:text-[1.75em] text-2xl mb-16"> 
              Hi, my name is <span className='font-semibold'>Lorenz Nicolas Ciocon</span>. I'm currently a fourth-year Computer Science student in Bacolod City, Philippines. I began learning frontend development through online resources and have since expanded into full-stack web and mobile development using React, Flutter, Laravel, Firebase, and SQL. During my software development internship, I built real-world systems that streamlined scheduling and farm management workflows. I enjoy creating software that solves practical problems while continuously learning new technologies.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="container md:max-w-350 mx-auto w-[90%] md:grid md:grid-cols-2 md:gap-7.5 md:w-4/5">
            {skills.map((skill, i) => {
              const delays = ['[animation-delay:0.25s]', '[animation-delay:0.35s]'];
              return (
                <div
                  key={skill.id}
                  className={`mb-4 opacity-0 animate-fadeUpBlur ${delays[i] ?? ''}`}
                >
                  <h3 className="text-[#1A461E] font-semibold text-[1.5em]">{skill.skill_name}</h3>
                  <p className='text-[1em]'>{skill.skill_desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="md:flex items-center container md:max-w-350 mx-auto w-[90%] md:w-4/5 gap-2.5">
          {/* Tech Stack */}
          <section className="mb-5 md:mb-16 opacity-0 animate-fadeUpBlur [animation-delay:0.5s] md:w-1/2">
            <div className="border border-[#808080] rounded-[20px] p-4 md:h-45">
              <h3 className="font-semibold text-[#1A461E] text-lg">Tech Stack</h3>

              <h5 className="text-[#808080] font-medium mt-2">Frontend</h5>
              <ul className="flex flex-wrap gap-3 list-none">
                {frontendTech.map((t) => (
                  <li key={t.id}>{t.tech}</li>
                ))}
              </ul>

              <h5 className="text-[#808080] font-medium mt-3">Backend</h5>
              <ul className="flex flex-wrap gap-3 list-none">
                {backendTech.map((t) => (
                  <li key={t.id}>{t.tech}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contacts */}
          <section className="mb-16 opacity-0 animate-fadeUpBlur [animation-delay:0.75s] md:w-1/2">
            <div className="bg-[#f2f2f2] rounded-[20px] p-4 md:h-45 md:grid grid-cols-2">

              <div className="">
                <h5 className="text-[#808080] font-medium mt-2">Email</h5>

                <a target="blank" href="mailto:cioconlorenz@gmail.com" className='flex items-center gap-1'>cioconlorenz@gmail.com <span><img src={arrow} className='w-4.5' /></span></a>
              </div>
              
              <div className="">
                <h5 className="text-[#808080] font-medium mt-3">LinkedIn</h5>

                <a target="blank" href="https://www.linkedin.com/in/lorenz-ciocon-7a094b278/" className='flex items-center gap-1'>
                  Lorenz Ciocon <span><img src={arrow} className='w-4.5' /></span>
                </a>
              </div>
              
              <div className="">
                <h5 className="text-[#808080] font-medium mt-3">Location</h5>
                <p>Bacolod City, Philippines</p>
              </div>
              
              <div className="">
                <h5 className="text-[#808080] font-medium mt-3">Phone</h5>
                <p>(+63) 927 422 4944</p>
              </div>

            </div>
          </section>

        </div>
      </main>

      <MainFooter />
    </>
  );
}