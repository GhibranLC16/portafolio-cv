import { personal } from '../../data/portfolio';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Avatar placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-4xl font-bold text-gray-950 shadow-xl shadow-emerald-500/20">
            GL
          </div>
        </div>

        <p className="text-emerald-400 font-mono text-sm tracking-widest mb-3 uppercase">
          Disponible para proyectos
        </p>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
          {personal.name}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-2 font-medium">
          {personal.title}
        </p>

        <p className="text-emerald-400 text-lg font-semibold mb-6">
          {personal.subtitle}
        </p>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {personal.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="#projects">Ver proyectos</Button>
          <Button href="#contact" variant="outline">Contactar</Button>
          <Button href={personal.contact.github} variant="ghost">
            <GitHubIcon />
            GitHub
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
