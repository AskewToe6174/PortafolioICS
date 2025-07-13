import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// --- Datos y secciones originales ---
const sections = [
  {
    id: 'about',
    title: 'Sobre Mí',
    content:
      'Soy Iván Carpinteiro, Ingeniero en Sistemas Computacionales con enfoque en desarrollo backend, DevOps y administración en la nube (AWS). Me apasiona la tecnología, el trabajo en equipo y crear soluciones eficientes y escalables que generen impacto.',
image: '../assets/thatsmeivancs.PNG',
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'experience',
    title: 'Experiencia',
    content:
      'He trabajado como Desarrollador Backend y DevOps en empresas como Invercratos y Lawyers DSB, donde lideré tareas de automatización, despliegue, infraestructura en AWS y desarrollo con tecnologías como Node.js y GraphQL. También cuento con experiencia en soporte técnico y desarrollo web.',
image: '../assets/thatsme2program.PNG',
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'skills',
    title: 'Habilidades',
    content: '',
    image: null,
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'projects',
    title: 'Proyectos',
    content: 'Estos son algunos de mis proyectos destacados. Haz click en cada tarjeta para más detalles.',
    image: null,
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'contact',
    title: 'Contacto',
    content: 'Puedes escribirme a carpinteirosalazari@gmail.com o contactarme por LinkedIn y GitHub. Estoy disponible para colaborar o trabajar en nuevos proyectos.',
    image: 'https://i.imgur.com/GGmjQph.png',
    bgColor: 'bg-background dark:bg-background-dark',
  },
];


// --- Proyectos ---
const projectList = [
  {
    id: 'task-manager',
    title: 'Gestor de Tareas',
    shortDesc: 'Aplicación fullstack para gestionar tareas, con React y Node.js.',
    detailedDesc:
      'Proyecto completo con autenticación, CRUD de tareas, filtros por usuario, fechas y estados. Usé MongoDB, Express y React con diseño responsivo y animaciones.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    link: 'https://github.com/ivancarpi/task-manager',
  },
  {
    id: 'pos-android-windows',
    title: 'Punto de Venta Android/Windows',
    shortDesc: 'Sistema multiplataforma para gestionar órdenes y facturación.',
    detailedDesc:
      'App Android para crear órdenes sincronizadas con app Windows que imprime tickets. Comunicación en tiempo real, diseño intuitivo y rendimiento optimizado.',
    tech: ['React Native', 'Electron', 'Socket.io', 'Node.js'],
    link: 'https://github.com/ivancarpi/pos-android-windows',
  },
  {
    id: 'chatbot-ai',
    title: 'Chatbot IA',
    shortDesc: 'Chatbot inteligente para atención al cliente con NLP.',
    detailedDesc:
      'Sistema basado en NLP y ML para responder consultas frecuentes, integrado con WhatsApp y sitio web. Mejora continua con feedback de usuarios.',
    tech: ['Python', 'TensorFlow', 'Node.js', 'React'],
    link: 'https://github.com/ivancarpi/chatbot-ai',
  },
];

// --- Habilidades ---
const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'NestJS', level: 80 },
  { name: 'GraphQL', level: 70 },
  { name: 'Python', level: 75 },
  { name: 'C/C++', level: 70 },
  { name: 'SQL Server', level: 85 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'MongoDB', level: 60 },
  { name: 'AWS (EC2, EKS, RDS, IAM...)', level: 75 },
  { name: 'Linux', level: 80 },
  { name: 'Docker/Kubernetes', level: 70 },

];


// --- Barra de habilidades ---
function SkillBar({ skill }) {
  const blocksCount = 20;
  const filledBlocks = Math.round((skill.level / 100) * blocksCount);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-textPrimary dark:text-textPrimary-dark">{skill.name}</span>
        <span className="text-textSecondary dark:text-textSecondary-dark">{skill.level}%</span>
      </div>
      <div className="flex space-x-1">
        {[...Array(blocksCount)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-5 h-5 rounded-sm border border-borderLight dark:border-borderLight-dark ${
              i < filledBlocks
                ? 'bg-primary dark:bg-primary-dark'
                : 'bg-transparent'
            }`}
            whileHover={{ scale: i < filledBlocks ? 1.2 : 1, rotate: i < filledBlocks ? [0, 10, -10, 0] : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
}


// --- Hook para detectar sección activa en scroll ---
function useActiveSection(setActive) {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActive]);

  return sectionRefs;
}

// --- Modal para detalles de proyectos ---
function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-xs flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-cardBg dark:bg-cardBg-dark rounded-lg p-8 max-w-xl max-h-[90vh] overflow-auto shadow-glass dark:shadow-glass-dark border border-borderLight dark:border-borderLight-dark"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl mb-4 font-press-start text-textPrimary dark:text-textPrimary-dark">
              {project.title}
            </h3>
            <p className="mb-4 text-textSecondary dark:text-textSecondary-dark">{project.detailedDesc}</p>
            <div className="mb-4">
              <strong className="text-textPrimary dark:text-textPrimary-dark">Tecnologías:</strong>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="bg-primary dark:bg-primary-dark px-3 py-1 rounded text-sm text-white shadow"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary-dark underline font-semibold"
            >
              Ver repositorio
            </a>
            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 bg-primary dark:bg-primary-dark rounded text-white hover:bg-secondary dark:hover:bg-secondary-dark transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Nueva sección Timeline para experiencia ---
const experienceItems = [
  {
    title: 'Backend & DevOps Developer',
    company: 'LAWYERS DSB',
    period: '2024 - 2025',
    description:
      'Desarrollé APIs con Node.js y NestJS, gestioné infraestructuras en AWS, CI/CD y bases de datos MySQL para sistemas robustos y escalables.',
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'EXSIM',
    period: 'Octubre - Noviembre 2024',
    description:
      'Programé aplicaciones de escritorio en Delphi y desarrollé APIs para módulos especializados de Microsip.',
  },
  {
    title: 'Desarrollador DevOps',
    company: 'Invercratos S.A.P.I. de C.V.',
    period: '2023 - 2024',
    description:
      'Administré servicios en AWS y contenedores con Kubernetes, automatizando despliegues y monitoreo continuo.',
  },
  {
    title: 'Soporte Técnico & Desarrollo Web',
    company: 'Euromaquinados Hermanos S.A. de C.V.',
    period: '2020 - 2021',
    description:
      'Mantenimiento de equipos de cómputo, desarrollo de aplicaciones internas y soporte en automatización de procesos.',
  },
];


function Timeline() {
  return (
    <div className="relative border-l-4 border-primary dark:border-primary-dark ml-6 pl-6 space-y-10">
      {experienceItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          className="relative"
        >
          {/* Punto en la línea */}
          <span className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-primary dark:bg-primary-dark border-2 border-background dark:border-background-dark"></span>

          <h3 className="text-xl font-bold text-textPrimary dark:text-textPrimary-dark">
            {item.title}
          </h3>
          <span className="block text-sm italic text-textSecondary dark:text-textSecondary-dark mb-2">
            {item.company} — {item.period}
          </span>
          <p className="text-textSecondary dark:text-textSecondary-dark">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

// --- Cursor personalizado ---


function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [shot, setShot] = useState(null);

  useEffect(() => {
    const onMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onMouseDown = () => {
      setClicked(true);
      setShot({ x: pos.x, y: pos.y - 20 }); // posición inicial del disparo
    };
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [pos]);

  // Animar el disparo hacia arriba
  useEffect(() => {
    if (!shot) return;
    let animationFrame;
    const speed = 0.1;

    function animate() {
      setShot((s) => {
        if (!s) return null;
        if (s.y < 0) return null; // fuera de pantalla, eliminar disparo
        return { ...s, y: s.y - speed };
      });
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [shot]);

  return (
    <>
      <style>{`
        .pixelated {
          image-rendering: pixelated;
          shape-rendering: crispEdges;
        }
        .invader-body {
          fill: #00f0ff;
          stroke: #005f7f;
          stroke-width: 1;
        }
        .invader-eye {
          fill: #ff0000;
        }
        .laser {
          fill: #ff3300;
          filter: drop-shadow(0 0 6px #ff3300);
        }
      `}</style>

      {/* Disparo */}
      {shot && (
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          style={{
            position: 'fixed',
            top: shot.y,
            left: shot.x,
            pointerEvents: 'none',
            transform: 'translate(-50%, -100%)',
            zIndex: 10000,
          }}
          className="pixelated"
        >
          <rect className="laser" x="2" y="0" width="2" height="12" rx="1" ry="1" />
        </svg>
      )}

      {/* Navecita */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          cursor: 'none',
        }}
        className="pixelated"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cuerpo */}
        <rect x="6" y="10" width="12" height="6" className="invader-body" rx="1" ry="1" />
        {/* Alas */}
        <rect x="4" y="12" width="4" height="2" className="invader-body" rx="1" ry="1" />
        <rect x="16" y="12" width="4" height="2" className="invader-body" rx="1" ry="1" />
        {/* Cabeza */}
        <rect x="9" y="6" width="6" height="6" className="invader-body" rx="1" ry="1" />
        {/* Ojos */}
        <rect x="11" y="8" width="2" height="2" className="invader-eye" rx="0.5" ry="0.5" />
        <rect x="15" y="8" width="2" height="2" className="invader-eye" rx="0.5" ry="0.5" />
      </svg>
    </>
  );
}


// --- App principal ---
export default function App() {
  const [active, setActive] = useState(sections[0].id);
  const [modalProject, setModalProject] = useState(null);
  const sectionRefs = useActiveSection(setActive);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);

    const listener = (e) => setIsDark(e.matches);
    mq.addEventListener('change', listener);

    return () => mq.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div>
      <CustomCursor />

      {/* Navbar */}
      <nav className="fixed top-4 left-0 right-0 mx-auto w-full max-w-screen px-4 sm:px-8 z-50">
        <div className="flex items-center bg-glass dark:bg-glass-dark backdrop-blur-xs rounded-full px-4 py-3 shadow-glass dark:shadow-glass-dark border border-borderLight dark:border-borderLight-dark overflow-x-auto no-scrollbar space-x-4 sm:space-x-8">
          <div className="flex items-center flex-shrink-0 mr-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full border border-borderLight dark:border-borderLight-dark"
            />
            <span className="ml-3 text-primary dark:text-primary-dark font-bold text-lg sm:text-xl font-press-start whitespace-nowrap">
              IVAN CLOUD ENGINEER
            </span>
          </div>

          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' })}
              className={`text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-full transition whitespace-nowrap ${
                active === sec.id
                  ? 'bg-primary dark:bg-primary-dark text-white shadow'
                  : 'text-textPrimary dark:text-textPrimary-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-white'
              }`}
            >
              
              {sec.title}
            </button>
          ))}
          
        </div>
      </nav>

      {/* Sections */}
      <main>
        {sections.map((sec, i) => (
          <section
            id={sec.id}
            key={sec.id}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={`${sec.bgColor} min-h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-40 gap-10`}
          >
            {sec.image && (
              <motion.div
                key={sec.id + '-image'}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-lg rounded-lg overflow-hidden shadow-glass dark:shadow-glass-dark "
              >
                <img src={sec.image} alt={sec.title} className="w-full h-auto object-cover" />
              </motion.div>
            )}

            <motion.div
              key={sec.id + '-text'}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <h2 className="glitch text-5xl mb-6 font-press-start">
                {sec.title}
              </h2>

              {sec.id === 'skills' ? (
                <div>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              ) : sec.id === 'experience' ? (
                <Timeline />
              ) : (
                <p className="text-lg text-textSecondary dark:text-textSecondary-dark leading-relaxed">
                  {sec.content}
                </p>
              )}

              {sec.id === 'projects' && (
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
                      className="bg-cardBg dark:bg-cardBg-dark p-6 rounded-lg cursor-pointer border border-borderLight dark:border-borderLight-dark shadow-glass dark:shadow-glass-dark transition-shadow"
                      onClick={() => setModalProject(project)}
                    >
                      <h3 className="text-2xl font-semibold mb-3 text-textPrimary dark:text-textPrimary-dark">
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4 text-textSecondary dark:text-textSecondary-dark">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary dark:bg-primary-dark px-3 py-1 rounded text-white text-xs font-semibold shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-glass dark:bg-glass-dark backdrop-blur-xs border-t border-borderLight dark:border-borderLight-dark flex justify-center gap-10 py-3 shadow-glass dark:shadow-glass-dark z-40">
       <a
  href="https://github.com/AskewToe6174"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <FiGithub />
</a>
<a
  href="www.linkedin.com/in/ivan-carpinteiro-salazar-ab1915311"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FiLinkedin />
</a>
<a
  href="mailto:carpinteirosalazari@gmail.com"
  aria-label="Email"
>
  <FiMail />
</a>

      </footer>

      {/* Modal */}
      <Modal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}
