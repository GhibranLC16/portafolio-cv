export const personal = {
  name: 'Ghibran López Calva',
  title: 'Ing. en Sistemas Computacionales',
  subtitle: 'Full Stack Developer',
  bio: 'Ingeniero en Sistemas Computacionales apasionado por los nuevos retos, siempre buscando aplicar y expandir mis conocimientos. Formación sólida en desarrollo de software, redes y bases de datos. Me motiva el trabajo en equipo y la resolución de problemas mediante soluciones tecnológicas innovadoras.',
  age: 22,
  nationality: 'Mexicana',
  birthdate: '16 de junio del 2003',
  location: 'Tulancingo de Bravo, Hidalgo, México',
  contact: {
    phone: '(52) 7751893754',
    email: 'ghibranlpez16@hotmail.com',
    github: 'https://github.com/GhibranLC16',
    facebook: 'Ghibran Lopez',
  },
};

export const skills = [
  {
    category: 'Frontend',
    icon: '🖥️',
    items: ['React', 'Angular', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Spring Boot', 'Laravel', '.NET', 'Scala / Play Framework', 'Java'],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    category: 'DevOps & Herramientas',
    icon: '🛠️',
    items: ['Docker', 'Git', 'GitHub', 'GitLab', 'Linux', 'Cisco Networking'],
  },
  {
    category: 'Otros',
    icon: '📦',
    items: ['Python', 'Office Suite', 'Cybersecurity basics', 'Data Science'],
  },
];

export const experience = [
  {
    company: 'QRSOF Software',
    role: 'Desarrollador Full Stack',
    period: '2024 – Presente',
    description:
      'Desarrollo y mantenimiento de soluciones web (hosting & mail). Implementación de APIs, manejo de bases de datos y despliegue de aplicaciones.',
    tags: ['Full Stack', 'Web', 'APIs'],
  },
  {
    company: 'PROYECTO ERP ABAK',
    role: 'Desarrollador Web',
    period: '2023 – 2024',
    description:
      'Desarrollo integral de aplicaciones web para un sistema ERP. Participación en el ciclo completo: análisis, diseño, desarrollo y pruebas.',
    tags: ['ERP', 'Web App', 'Team'],
  },
];

export const education = [
  {
    institution: 'Universidad Politécnica de Tulancingo',
    degree: 'Licenciatura en Ingeniería en Sistemas Computacionales',
    period: '2021 – 2024',
    status: 'En proceso de titulación',
  },
];

export const projects = [
  {
    name: 'API Scala Libros',
    description:
      'API REST para gestión de libros desarrollada con Scala y Play Framework. Arquitectura funcional con endpoints CRUD completos.',
    tags: ['Scala', 'Play Framework', 'REST API'],
    github: 'https://github.com/GhibranLC16/Api-Scala.Libros',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Control Libros',
    description:
      'Sistema de control y gestión de libros. Manejo de inventario con operaciones de alta, baja y consulta.',
    tags: ['Java', 'CRUD', 'Backend'],
    github: 'https://github.com/GhibranLC16/Control-Libros',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'TarkerBooking',
    description:
      'Aplicación de reservas y booking. Sistema completo para gestión de reservaciones con interfaz de usuario.',
    tags: ['Web App', 'Booking', 'Full Stack'],
    github: 'https://github.com/GhibranLC16/TarkerBooking',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'CRUD API',
    description:
      'API con operaciones CRUD completas. Implementación de endpoints RESTful con manejo de base de datos.',
    tags: ['REST API', 'CRUD', 'Backend'],
    github: 'https://github.com/GhibranLC16/CrudAPI',
    color: 'from-emerald-500 to-teal-500',
  },
];

export const certificates = [
  {
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco',
    date: 'Junio 2024',
    icon: '🌐',
  },
  {
    name: 'CCNAv7: Switching, Routing & Wireless Essentials',
    issuer: 'Cisco',
    date: 'Agosto 2024',
    icon: '🔗',
  },
  {
    name: 'CCNAv7: Enterprise Networking, Security & Automation',
    issuer: 'Cisco',
    date: 'Agosto 2024',
    icon: '🔒',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Septiembre 2024',
    icon: '🛡️',
  },
  {
    name: 'Data Science',
    issuer: 'Santander – Open Academy',
    date: 'Junio 2024',
    icon: '📊',
  },
  {
    name: 'React.JS Crash Course: The Complete Course for Beginners',
    issuer: 'Udemy',
    date: 'Junio 2025',
    icon: '⚛️',
  },
];

export const softSkills = [
  'Adaptabilidad',
  'Trabajo en equipo',
  'Mente abierta',
  'Resolución de problemas',
  'Empatía',
  'Actitud positiva',
];

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Certificados', href: '#certificates' },
  { label: 'Contacto', href: '#contact' },
];
