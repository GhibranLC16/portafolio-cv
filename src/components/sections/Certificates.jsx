import { certificates } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function CertCard({ cert, index }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-emerald-700/50 transition-all duration-300 hover:-translate-y-1 flex gap-4 items-start ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 70}ms`, transitionDuration: '500ms' }}
    >
      <span className="text-3xl shrink-0">{cert.icon}</span>
      <div>
        <h3 className="text-white font-semibold text-sm leading-tight mb-1">{cert.name}</h3>
        <p className="text-emerald-400 text-xs font-medium">{cert.issuer}</p>
        <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <SectionTitle subtitle="Formación continua y certificaciones obtenidas">Certificados</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
