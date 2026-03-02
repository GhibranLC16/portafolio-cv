import { projects, personal } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-700/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <Button href={project.github} variant="outline" className="w-full justify-center">
          <GitHubIcon />
          Ver código
        </Button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <SectionTitle subtitle="Proyectos en GitHub">Proyectos</SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href={personal.contact.github} variant="ghost">
          <GitHubIcon />
          Ver todos los repositorios
        </Button>
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
