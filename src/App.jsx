import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import thatsmivancs from './thatsme2program.png';
import thatsme2program from './thatsmeivancs.png';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSequelize,
  SiNestjs,
  SiAwsamplify,
  SiAmazonaws,
} from 'react-icons/si';

import LogoSVG from './LogoSVG';

// --- Datos y secciones ---
const sections = [
  {
    id: 'about',
    title: 'Sobre Mí',
    content:
      `Mi verdadera pasión es la nube y todo el ecosistema que la rodea. Creo firmemente que la computación en la nube es el futuro de muchas industrias, 
      ya que permite escalar aplicaciones y servicios de forma eficiente, flexible y segura. Mi objetivo es crear soluciones innovadoras que ayuden a las empresas a 
      transformarse digitalmente y a ser más competitivas mediante arquitecturas cloud bien diseñadas y automatización. Estoy convencido de que el aprendizaje continuo y la colaboración 
      son clave para avanzar en esta área que evoluciona constantemente.`,
    image: thatsme2program,
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'experience',
    title: 'Experiencia',
    content:
      'He trabajado como Desarrollador Backend y DevOps en empresas como Invercratos y Lawyers DSB, donde lideré tareas de automatización, despliegue, infraestructura en AWS y desarrollo con tecnologías como Node.js y GraphQL. También cuento con experiencia en soporte técnico y desarrollo web.',
    image: thatsmivancs,
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
    image: null,
    bgColor: 'bg-background dark:bg-background-dark',
  },
  {
    id: 'contact',
    title: 'Contacto',
    content: 'Puedes escribirme a carpinteirosalazari@gmail.com o contactarme por LinkedIn y GitHub. Estoy disponible para colaborar o trabajar en nuevos proyectos.',
    image: null,
    component: <LogoSVG color="#00f0ff" size={180} />,
    bgColor: 'bg-background dark:bg-background-dark',
  },
];

// --- Proyecto destacado con detalle técnico ---
const projectList = [
  {
    id: 'api-rest-node',
    title: 'API REST Full con Node.js',
    shortDesc:
      'API con base de datos relacional usando Node.js. Implementada con queries directas mediante Sequelize para optimizar tiempos y evitar crear modelos complejos.',
    detailedDesc:
      '1. API REST full con base de datos relacional usando Node.js. En este proyecto se realizó usando queries mediante Sequelize, por los requerimientos de tiempo se optó por ello debido a que daba mayor agilización y evitaba la creación de modelos.\n\n' +
      'Tecnologías usadas: Node.js, Sequelize, MySQL.\n' +
      'Plataforma: Servidor Linux.\n' +
      'Despliegue: VPS con PM2 y Nginx proxy reverso.\n\n',
    tech: ['Node.js', 'Sequelize', 'MySQL'],
    techDetails: [
      { name: 'Node.js', icon: <SiNodedotjs size={20} color="#3c873a" /> },
      { name: 'Sequelize', icon: <SiSequelize size={20} color="#52B0E7" /> },
      { name: 'MySQL', icon: <SiMongodb size={20} color="#4479A1" /> }, // No hay icono oficial MySQL, usé MongoDB icon como placeholder
    ],
  },
  {
    id: 'api-nestjs',
    title: 'Migración API a NestJS',
    shortDesc:
      'Migración completa de API REST a NestJS, utilizando mejores prácticas y métodos ORM, sin usar queries directas.',
    detailedDesc:
      '2. Migración a API con NestJS sin queries: La migración completa de la API REST full Node.js a NestJS usando las mejores prácticas. Todos los endpoints fueron traducidos a su versión con métodos de modelos (find, delete, etc.).\n\n' +
      'Tecnologías usadas: NestJS, TypeORM, PostgreSQL.\n' +
      'Plataforma: Contenedores Docker.\n' +
      'Despliegue: Kubernetes (EKS) en AWS.\n\n',
    tech: ['NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'Kubernetes'],
    techDetails: [
      { name: 'NestJS', icon: <SiNestjs size={20} color="#E0234E" /> },
      { name: 'PostgreSQL', icon: <SiMongodb size={20} color="#336791" /> }, // Uso icono Mongo como placeholder
      { name: 'Docker', icon: <SiTailwindcss size={20} color="#2496ED" /> }, // Uso Tailwind icon por falta de Docker oficial en react-icons
      { name: 'Kubernetes', icon: <SiAmazonaws size={20} color="#3C99D3" /> }, // Uso AWS icon para Kubernetes placeholder
    ],
  },
  {
    id: 'aws-optimization',
    title: 'Optimización de Recursos en AWS',
    shortDesc:
      'Optimización de recursos y costos en AWS, implementando buenas prácticas para escalabilidad y eficiencia.',
    detailedDesc:
      '3. Optimización de recursos en AWS respetando buenas prácticas para mejorar rendimiento y costo sin comprometer la infraestructura.\n\n' +
      'Tecnologías usadas: AWS EC2, S3, Lambda, CloudWatch, IAM.\n' +
      'Estrategias: Automatización de escalado, monitoreo continuo, auditoría de permisos y optimización de almacenamiento.\n' +
      'Despliegue: Infraestructura como código con AWS CloudFormation y Terraform.\n\n',
    tech: ['AWS', 'CloudFormation', 'Terraform', 'Lambda', 'EC2'],
    techDetails: [
      { name: 'AWS', icon: <SiAmazonaws size={20} color="#FF9900" /> },
      { name: 'CloudFormation', icon: <SiAwsamplify size={20} color="#FF9900" /> },
      { name: 'Terraform', icon: <SiAwsamplify size={20} color="#6F42C1" /> }, // Uso icono AWS Amplify como placeholder para Terraform
      { name: 'Lambda', icon: <SiAmazonaws size={20} color="#FF9900" /> },
      { name: 'EC2', icon: <SiAmazonaws size={20} color="#FF9900" /> },
    ],
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
            className={`w-5 h-5 rounded-sm border border-borderLight dark:border-borderLight-dark ${i < filledBlocks ? 'bg-primary dark:bg-primary-dark' : 'bg-transparent'
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
            <pre className="mb-4 whitespace-pre-wrap text-textSecondary dark:text-textSecondary-dark" style={{ whiteSpace: 'pre-wrap' }}>
              {project.detailedDesc}
            </pre>
            <div className="mb-4">
              <strong className="text-textPrimary dark:text-textPrimary-dark">Tecnologías y plataformas:</strong>
              <ul className="flex flex-wrap gap-3 mt-2">
                {project.techDetails.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 bg-primary dark:bg-primary-dark px-3 py-1 rounded text-white text-sm font-semibold shadow"
                  >
                    {icon} {name}
                  </li>
                ))}
              </ul>
            </div>
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
      setShot({ x: pos.x, y: pos.y - 20 });
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

  useEffect(() => {
    if (!shot) return;
    let animationFrame;
    const speed = 0.1;

    function animate() {
      setShot((s) => {
        if (!s) return null;
        if (s.y < 0) return null;
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
        <rect x="6" y="10" width="12" height="6" className="invader-body" rx="1" ry="1" />
        <rect x="4" y="12" width="4" height="2" className="invader-body" rx="1" ry="1" />
        <rect x="16" y="12" width="4" height="2" className="invader-body" rx="1" ry="1" />
        <rect x="9" y="6" width="6" height="6" className="invader-body" rx="1" ry="1" />
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
        <div className="flex items-center bg-glass dark:bg-glass-dark backdrop-blur-xs rounded-full px-4 py-3 shadow-glass dark:shadow-glass-dark border border-borderLight dark:border-borderLight-dark overflow-x-auto no-scrollbar gap-4 sm:gap-8 whitespace-nowrap">
          <div className="flex items-center flex-shrink-0 mr-4">
            <LogoSVG color={isDark ? '#00f0ff' : '#005f7f'} size={40} />
            <span className="ml-3 text-primary dark:text-primary-dark font-bold text-sm sm:text-xl font-press-start">
              IVAN CLOUD ENGINEER
            </span>
          </div>

          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' })}
              className={`text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-full transition ${active === sec.id
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
            {sec.image && typeof sec.image === 'string' && (
              <motion.div
                key={sec.id + '-image'}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 max-w-sm"
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full max-w-sm object-contain" // opcional: ajusta tamaño
                  style={{ border: 'none', boxShadow: 'none' }} // 🔥 aquí eliminamos el borde/sombra
                  loading="lazy"
                />

              </motion.div>
            )}

            <motion.div
              key={sec.id + '-content'}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 max-w-xl"
            >
<h2 className="text-4xl font-press-start glitch mb-6 text-textPrimary dark:text-textPrimary-dark">
  {sec.title}
</h2>
              {sec.content && (
                <p className="mb-6 text-textSecondary dark:text-textSecondary-dark whitespace-pre-line">
                  {sec.content}
                </p>
              )}

              {/* Skills section */}
              {sec.id === 'skills' && (
                <>
                  {skills.map((skill, idx) => (
                    <SkillBar key={idx} skill={skill} />
                  ))}
                </>
              )}

              {/* Experience section */}
              {sec.id === 'experience' && <Timeline />}

              {/* Projects section */}
              {sec.id === 'projects' && (
                <>
                  <p className="mb-6 text-textSecondary dark:text-textSecondary-dark">{sec.content}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 max-w-xl mx-auto">
                    {projectList.map((project) => (
                      <motion.div
                        key={project.id}
                        className="bg-cardBg dark:bg-cardBg-dark rounded-lg p-6 shadow-lg cursor-pointer border border-borderLight dark:border-borderLight-dark"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setModalProject(project)}
                      >
                        <h3 className="text-2xl font-press-start text-textPrimary dark:text-textPrimary-dark mb-2">{project.title}</h3>
                        <p className="text-textSecondary dark:text-textSecondary-dark mb-4">{project.shortDesc}</p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary dark:bg-primary-dark rounded text-white text-xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* Contact section */}
              {sec.id === 'contact' && (
                <div className="mt-6 flex flex-col items-center space-y-4">
                  <div className="flex gap-6">
                    <a
                      href="mailto:carpinteirosalazari@gmail.com"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
                      aria-label="Email"
                    >
                      <FiMail />
                    </a>
                    <a
                      href="https://github.com/AskewToe6174"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ivan-carpinteiro-salazar-ab1915311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                  {sec.component}
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-glass dark:bg-glass-dark backdrop-blur-xs border-t border-borderLight dark:border-borderLight-dark flex justify-center gap-10 py-3 shadow-glass dark:shadow-glass-dark z-40">
        <a
          href="https://github.com/AskewToe6174"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub className="text-textPrimary dark:text-white text-2xl hover:text-secondary dark:hover:text-secondary-dark transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-carpinteiro-salazar-ab1915311"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="text-textPrimary dark:text-white text-2xl hover:text-secondary dark:hover:text-secondary-dark transition" />
        </a>
        <a
          href="mailto:carpinteirosalazari@gmail.com"
          aria-label="Email"
        >
          <FiMail className="text-textPrimary dark:text-white text-2xl hover:text-secondary dark:hover:text-secondary-dark transition" />
        </a>
      </footer>

      <Modal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}
