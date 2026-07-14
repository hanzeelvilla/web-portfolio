import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-slate-200 px-4 pt-8">
      <div className="flex items-center justify-center gap-3">
        <a
          href="mailto:hanzeelvilla0@gmail.com"
          aria-label="Email"
          className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transform transition-transform duration-150 hover:scale-110 active:scale-95 hover:text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          <AiOutlineMail className="h-5 w-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/hanzeelvilla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transform transition-transform duration-150 hover:scale-110 active:scale-95 hover:text-blue-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <AiFillLinkedin className="h-5 w-5" />
        </a>

        <a
          href="https://github.com/hanzeelvilla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transform transition-transform duration-150 hover:scale-110 active:scale-95 hover:text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          <AiFillGithub className="h-5 w-5" />
        </a>

        <a
          href="https://instagram.com/hanzeelabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transform transition-transform duration-150 hover:scale-110 active:scale-95 hover:text-pink-400 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"
        >
          <AiFillInstagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};
