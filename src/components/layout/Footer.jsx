import { personal } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {personal.name} · Hecho con React + Tailwind
      </p>
      <a
        href={personal.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
      >
        GitHub
      </a>
    </footer>
  );
}
