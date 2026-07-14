import profileImage from "../../assets/images/profile.png";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export const Hero = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4">
      <div className="mb-8 flex items-center justify-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          About Me
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-2xl font-bold tracking-tight">Hanzeel Villa</p>
          <p className="font-medium text-slate-600">Software Engineer</p>
          <p className="text-center md:text-left max-w-2xl">
            Software Engineer bridging the gap between digital systems and the
            physical world. I specialize in crafting robust, high-performance
            web applications powered by TypeScript and the MERN stack. Driven by
            curiosity, I extend my code into tangible innovations by developing
            IoT devices and fabricating custom 3D models. Explore my projects
            below!
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
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
        </div>
        <img
          src={profileImage}
          alt="Foto de Hanzeel Villa"
          loading="lazy"
          className="rounded-full border-4 border-slate-200 object-cover w-48 h-48 md:w-56 md:h-56 shadow-lg"
        />
      </div>
    </section>
  );
};
