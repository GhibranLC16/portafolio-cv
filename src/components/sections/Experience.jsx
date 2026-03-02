import { experience } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function TimelineItem({ item, index, isLast }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-600 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-gray-800 mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-emerald-700/40 transition-colors">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-white font-bold">{item.role}</h3>
              <p className="text-emerald-400 text-sm font-medium">{item.company}</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full border border-gray-700 whitespace-nowrap">
              {item.period}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="gray">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 bg-gray-900/30">
      <div className="max-w-3xl mx-auto">
        <SectionTitle subtitle="Mi trayectoria profesional">Experiencia Laboral</SectionTitle>
        <div>
          {experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
