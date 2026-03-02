import { skills } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Tecnologías y herramientas que manejo">Stack Tecnológico</SectionTitle>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skills.map((group) => (
            <Card key={group.category} className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-emerald-600 hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
