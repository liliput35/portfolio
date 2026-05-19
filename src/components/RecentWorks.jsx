import { Link } from 'react-router-dom';

export default function RecentWorks({ works = [] }) {
  return (
    <section className="opacity-0 animate-fadeUpBlur [animation-delay:0.25s] font-poppins">
      <div className="container mx-auto w-[90%] md:w-4/5 md:max-w-350">
        <div className="flex items-center mb-8">
          <h1 className="text-[2.5em] sm:text-[3em] md:text-[3.5em]
            font-semibold mr-3"
          >
            Recent Works
          </h1>
          <div className="w-11.25 h-px bg-black mr-2.5 -rotate-45" />
          <Link to="/projects" className="font-light underline text-black">
            view all
          </Link>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-[95%] xl:w-[90%] h-0.5 bg-[#f2f2f2] mb-8" />

      <div className="container  md:max-w-350 mx-auto w-[90%] md:w-4/5
        md:flex md:items-start md:justify-end md:pb-16"
      >
        {works.map((work) => (
          <div
            key={work.id}
            className="mb-20 transition-transform duration-1000
              hover:-translate-y-16 md:text-right md:ml-15 md:w-[25%]"
          >
            <a href={work.link} target='blank'>
              <h2 className="text-[#1A461E] text-[3em] font-normal mb-1">
                0{work.id}
              </h2>
              <h3 className="text-[2em] font-semibold pb-1
                border-b-2 border-[#e5e5e5] md:border-none"
              >
                {work.name}
              </h3>
              <p>{work.description}</p>
              <p className="text-[#808080]">{work.tech_stack}</p>
              <img
                src={work.img_addr}
                alt={work.name}
                className="mt-4 w-full
                  shadow-[0_9px_15px_rgba(0,0,0,0.3)]"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}