import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com/valorant", icon: <FaDiscord /> },
  { href: "https://twitter.com/valorant", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@valorant", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Valorant© 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-center text-sm font-light md:text-right">
            Made by {' '}
            <a
          href="https://www.arjundeshmukh.me"
          target="_blank" rel="noopener noreferrer"
          className="text-center text-sm font-light underline hover:font-medium md:text-right"
        >
          Arjun Deshmukh
        </a>
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
