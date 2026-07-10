import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";

import { projects } from "../data/projectsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import arrow from '../assets/images/diagonal-arrow.png'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

export default function ProjectShowcase() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar name="Lorenz Ciocon" />

        <main className="font-poppins">
          <div className="container mx-auto w-[90%] md:w-4/5 md:max-w-270 py-40 text-center">
            <h1 className="text-5xl font-semibold mb-5">
              Project Not Found
            </h1>

            <Link
              to="/projects"
              className="text-[#1A461E] font-medium"
            >
              ← Back to Projects
            </Link>
          </div>
        </main>

        <MainFooter />
      </>
    );
  }

  return (
    <>
      <Navbar name="Lorenz Ciocon" />

      <main className="font-poppins pb-30">

        {/* HERO */}

        <section className="container mx-auto w-[90%] md:w-4/5 md:max-w-270 mt-16 opacity-0 animate-fadeUpBlur">

          <Link
            to="/projects"
            className="text-[#1A461E] font-medium hover:underline"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-5xl md:text-6xl font-semibold mt-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-500 mt-4 max-w-4xl mb-8">
            {project.subtitle}
          </p>

          <div className="opacity-0 animate-fadeUpBlur [animation-delay:0.2s]">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {project.hero.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            className="rounded-3xl w-full border border-[#808080]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
          

          <p className="lg:text-[1.75em] md:text-2xl text-xl mt-12 opacity-0 animate-fadeUpBlur [animation-delay:0.4s]">{project.about}</p>

        </section>

        {/* FEATURES */}
        <section className="my-12">
          <div className="container md:max-w-270 mx-auto w-[90%] md:grid md:grid-cols-2 md:gap-7.5 md:w-4/5">
            {project.features.map((feature, i) => {
              const delays = ['[animation-delay:0.7s]', '[animation-delay:0.8s]','[animation-delay:0.9s]', '[animation-delay:1s]'];
              return (
                <div
                  key={feature.id}
                  className={`mb-4 opacity-0 animate-fadeUpBlur ${delays[i] ?? ''}`}
                >
                  <h3 className="text-[#1A461E] font-semibold text-[1.5em]">{feature.featureName}</h3>
                  <p className='text-[1em]'>{feature.featureDesc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SNAPSHOT */}

        <section className="container mx-auto w-[90%] md:w-4/5 md:max-w-270 opacity-0 animate-fadeUpBlur [animation-delay:1.1s]">

          <div className="border border-[#808080] rounded-3xl p-8 grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-gray-500">Client</p>
              <p className="font-medium">{project.client}</p>
            </div>

            <div>
              <p className="text-gray-500">Role</p>
              <p className="font-medium">{project.role}</p>
            </div>

            <div>
              <p className="text-gray-500">Duration</p>
              <p className="font-medium">{project.duration}</p>
            </div>

            <div>
              <p className="text-gray-500">Team</p>
              <p className="font-medium">{project.team}</p>
            </div>

            <div>
              <p className="text-gray-500">Repository</p>
              {project.repository == "Public" && (
                <a href={project.github} target="blank" className="font-medium flex items-center gap-1">
                  {project.repository}<span><img src={arrow} className='w-4.5' /></span>
                </a>
              )}
              {project.repository == "Private" && (
                <p className="font-medium flex items-center gap-1">
                  {project.repository}
                 </p>
              )}
              
            </div>

            <div>
              <p className="text-gray-500">Tech Stack</p>
              <p className="font-mediu flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="py-1 px-3 text-sm rounded-full bg-[#f2f2f2]"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>

          </div>

        </section>

      </main>

      <MainFooter />
    </>
  );
}

function Section({ title, body }) {
  return (
    <section className="container mx-auto w-[90%] md:w-4/5 md:max-w-270 mt-24 animate-fadeUpBlur">

      <h2 className="text-3xl font-semibold mb-6">
        {title}
      </h2>

      <p className="leading-9 text-lg whitespace-pre-line">
        {body}
      </p>

    </section>
  );
}