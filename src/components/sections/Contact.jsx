import { personal } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: personal.contact.email,
    href: `mailto:${personal.contact.email}`,
  },
  {
    icon: '📱',
    label: 'Teléfono',
    value: personal.contact.phone,
    href: `tel:${personal.contact.phone.replace(/\D/g, '')}`,
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: personal.location,
    href: null,
  },
];

export default function Contact() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-gray-900/30">
      <div className="max-w-2xl mx-auto">
        <SectionTitle subtitle="¿Tienes un proyecto o propuesta? Hablemos">Contacto</SectionTitle>

        <div
          ref={ref}
          className={`space-y-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactItems.map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center gap-4 hover:border-emerald-700/40 transition-colors"
            >
              <span className="text-2xl w-10 text-center shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-emerald-400 font-medium mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-gray-200 text-sm hover:text-emerald-400 transition-colors truncate block"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-200 text-sm truncate">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <Button href={`mailto:${personal.contact.email}`}>
              Enviar correo
            </Button>
            <Button href={personal.contact.github} variant="outline">
              <GitHubIcon />
              GitHub
            </Button>
          </div>
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
