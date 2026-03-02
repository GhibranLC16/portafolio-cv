import { personal, softSkills, education } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <SectionTitle subtitle="Conoce un poco más sobre mí">Sobre mí</SectionTitle>

      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Info personal */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">{personal.bio}</p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Nombre', value: personal.name },
              { label: 'Edad', value: `${personal.age} años` },
              { label: 'Nacionalidad', value: personal.nationality },
              { label: 'Ubicación', value: 'Tulancingo, Hgo.' },
              { label: 'Correo', value: personal.contact.email },
              { label: 'Idioma', value: 'Español (nativo) · Inglés básico' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-3">
                <p className="text-xs text-emerald-400 font-medium mb-1">{label}</p>
                <p className="text-gray-200 text-sm truncate">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educación + soft skills */}
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🎓</span> Educación
            </h3>
            {education.map((ed) => (
              <div key={ed.degree} className="space-y-1">
                <p className="text-gray-200 font-medium text-sm">{ed.degree}</p>
                <p className="text-emerald-400 text-xs font-medium">{ed.institution}</p>
                <p className="text-gray-500 text-xs">{ed.period}</p>
                <span className="inline-block mt-1 text-xs bg-amber-900/40 text-amber-300 border border-amber-700/40 px-2 py-0.5 rounded-full">
                  {ed.status}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🧠</span> Habilidades blandas
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="gray">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
