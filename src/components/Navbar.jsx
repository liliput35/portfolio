import { useState } from 'react';

import { Link } from 'react-router-dom';

import fbIcon from '../assets/images/icons8-facebook-24.png';
import githubIcon from '../assets/images/icons8-github-24.png';
import emailIcon from '../assets/images/icons8-mail-24.png';

const socials = [
  { href: "https://www.facebook.com/Ensssso", img: fbIcon,     alt: "Facebook" },
  { href: "https://github.com/liliput35",     img: githubIcon, alt: "GitHub"   },
  { href: "mailto:cioconlorenz@gmail.com",    img: emailIcon,  alt: "Email"    },
];

export default function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);  
  
  return (
    <nav className="bg-[#f2f2f2] font-poppins">
      <div className="container md:max-w-350 mx-auto lg:items-center lg:justify-between py-3 md:w-4/5 hidden lg:flex">
        <Link to="/" className="font-bold text-2xl text-[#1A461E]">
          {name ?? 'Default Name'}
        </Link>

        <ul className="flex gap-3 md:gap-6 mb-0 list-none">
          {['About', 'Projects', 'Experience'].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="relative text-black no-underline group">
                {item}
                <span className="absolute left-0 bottom-0 h-px w-full bg-black
                  scale-x-0 origin-center transition-transform duration-300
                  group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2 list-none mb-0">
          {socials.map((s) => (
            <li key={s.alt}>
              <a href={s.href} target="_blank" rel="noreferrer">
                <img src={s.img} alt={s.alt} className="object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`lg:hidden pt-3 overflow-hidden mx-auto w-[90%] transition-all duration-300 ${isOpen ? 'h-25' : 'h-13.5'}`}>
        <div className="flex justify-between items-center">

          <Link to="/" className="font-bold text-2xl text-[#1A461E]">
            {name ?? 'Default Name'}
          </Link>
          
          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className={`w-7.5 h-0.5 bg-black mb-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 translate-y-2' : ''}`} />
            <div className={`w-7.5 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-7.5 h-0.5 bg-black mb-1.5 transition-transform duration-300 ${isOpen ? 'rotate-45 -translate-y-2' : ''}`} />
          </div>

        </div>

        <ul className="flex gap-3 md:gap-6 mb-0 list-none mt-2">
          {['About', 'Projects', 'Experience'].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="relative text-black no-underline group">
                {item}
                <span className="absolute left-0 bottom-0 h-px w-full bg-black
                  scale-x-0 origin-center transition-transform duration-300
                  group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>
        
      </div>


    </nav>
  );
}