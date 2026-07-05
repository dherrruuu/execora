import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-40 px-[8%] pb-12">

      <div className="glass rounded-[40px] p-10 md:p-14">

        <div className="grid gap-12 md:grid-cols-3">

          <div>

            <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-[0.28em]">
              EXECORA
            </h2>

            <p className="max-w-sm text-white/65 leading-8">
              Designing extraordinary spaces through architecture, atmosphere, and precision-led execution.
            </p>

          </div>

          <div>

            <h3 className="text-sm uppercase tracking-[0.32em] text-white/45 mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-lg">

              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>

            </div>

          </div>

          <div>

            <h3 className="text-sm uppercase tracking-[0.32em] text-white/45 mb-6">
              Contact
            </h3>

            <p className="text-white/65">
              hello@execora.com
            </p>

            <p className="text-white/65 mt-3">
              +91 9876543210
            </p>

          </div>

        </div>

      </div>

      <div className="text-center mt-8 text-white/40 text-sm uppercase tracking-[0.28em]">

        © 2026 EXECORA & CO.

      </div>

    </footer>
  );
}