import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const navigationLinks = [
  { label: "About Me", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Stack", href: "#" },
  { label: "Education", href: "#" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="mx-auto w-full max-w-6xl border-b border-slate-200 pb-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold tracking-tight">Hanzeel Villa</p>

        <div className="hidden items-center gap-5 font-medium md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              className="text-slate-600 underline decoration-transparent underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-current"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          type="button"
        >
          {isMenuOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "flex" : "hidden"} mt-4 flex-col gap-4 md:hidden`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            className="w-fit text-slate-600 underline decoration-transparent underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-current"
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
