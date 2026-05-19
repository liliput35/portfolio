import fbIcon from '../assets/images/icons8-facebook-24.png';
import githubIcon from '../assets/images/icons8-github-24.png';
import emailIcon from '../assets/images/icons8-mail-24.png';

export default function Footer() {
  const socials = [
    { href: "https://www.facebook.com/Ensssso", img: fbIcon, alt: "Facebook" },
    { href: "https://github.com/liliput35",     img: githubIcon, alt: "GitHub" },
    { href: "mailto:cioconlorenz@gmail.com",    img: emailIcon, alt: "Email" },
  ];

  return (
    <footer className="bg-[#f2f2f2] py-5 font-poppins">
      <div className="container md:max-w-350 mx-auto w-[90%] flex items-center justify-between md:w-4/5 mb-4">
        <p className="font-bold text-[1.25em]">Lorenz Ciocon.</p>

        <ul className="flex items-center gap-2 list-none mb-0">
          {socials.map((s) => (
            <li key={s.alt}>
              <a href={s.href} target="_blank" rel="noreferrer">
                <img src={s.img} alt={s.alt} className="w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}