/* ---------- IMPORTACIONES COMPLETAS (actualizadas) ---------- */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiNodedotjs,
  SiSequelize,
  SiMongodb,
  SiNestjs,
  SiTailwindcss,
  SiAmazonaws,
  SiAwsamplify,
} from "react-icons/si";

import { Card } from "@nextui-org/react";

import thatsmivancs from "./thatsme2program.png";
import thatsme2program from "./thatsmeivancs.png";
import LogoSVG from "./LogoSVG";

/* Componente MotionCard basado en Card de NextUI */
const MotionCard = motion(Card);
/* ------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                             DATOS Y SECCIONES                              */
/* -------------------------------------------------------------------------- */

const sections = [
  {
    id: "about",
    title: "Sobre Mí",
    content: `Mi verdadera pasión es la nube y todo el ecosistema que la rodea. Creo firmemente que la computación en la nube es el futuro de muchas industrias, 
ya que permite escalar aplicaciones y servicios de forma eficiente, flexible y segura. Mi objetivo es crear soluciones innovadoras que ayuden a las empresas a 
transformarse digitalmente y a ser más competitivas mediante arquitecturas cloud bien diseñadas y automatización. Estoy convencido de que el aprendizaje continuo y la colaboración 
son clave para avanzar en esta área que evoluciona constantemente.`,
    image: thatsme2program,
    bgColor: "bg-background dark:bg-background-dark",
  },
  {
    id: "experience",
    title: "Experiencia",
    content:
      "He trabajado como Desarrollador Backend y DevOps en empresas como Invercratos y Lawyers DSB, donde lideré tareas de automatización, despliegue, infraestructura en AWS y desarrollo con tecnologías como Node.js y GraphQL. También cuento con experiencia en soporte técnico y desarrollo web.",
    image: thatsmivancs,
    bgColor: "bg-background dark:bg-background-dark",
  },
  {
    id: "skills",
    title: "Habilidades",
    content: "",
    image: null,
    bgColor: "bg-background dark:bg-background-dark",
  },
  {
    id: "projects",
    title: "Proyectos",
    image: null,
    bgColor: "bg-background dark:bg-background-dark",
  },
  {
    id: "contact",
    title: "Contacto",
    content:
      "Puedes escribirme a carpinteirosalazari@gmail.com o contactarme por LinkedIn y GitHub. Estoy disponible para colaborar o trabajar en nuevos proyectos.",
    image: null,
    component: <LogoSVG color="#00f0ff" size={180} />,
    bgColor: "bg-background dark:bg-background-dark",
  },
];

/* -------------------------------------------------------------------------- */
/*                          PROYECTOS DESTACADOS                              */
/* -------------------------------------------------------------------------- */

const projectList = [
  {
    id: "api-rest-node",
    title: "API REST Full con Node.js",
    shortDesc:
      "API con base de datos relacional usando Node.js. Implementada con queries directas mediante Sequelize para optimizar tiempos y evitar crear modelos complejos.",
    tech: ["Node.js", "Sequelize", "MySQL"],
    detailedDesc:
      "1. API REST full con base de datos relacional usando Node.js. En este proyecto se realizó usando queries mediante Sequelize, por los requerimientos de tiempo se optó por ello debido a que daba mayor agilización y evitaba la creación de modelos.\n\n" +
      "Tecnologías usadas: Node.js, Sequelize, MySQL.\n" +
      "Plataforma: Servidor Linux.\n" +
      "Despliegue: VPS con PM2 y Nginx proxy reverso.\n\n",
    techDetails: [
      { name: "Node.js", icon: <SiNodedotjs size={20} color="#3c873a" /> },
      { name: "Sequelize", icon: <SiSequelize size={20} color="#52B0E7" /> },
      { name: "MySQL", icon: <SiMongodb size={20} color="#4479A1" /> },
    ],
  },
  {
    id: "api-nestjs",
    title: "Migración API a NestJS",
    shortDesc:
      "Migración completa de API REST a NestJS, utilizando mejores prácticas y métodos ORM, sin usar queries directas.",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "Docker", "Kubernetes"],
    detailedDesc:
      "2. Migración a API con NestJS sin queries: La migración completa de la API REST full Node.js a NestJS usando las mejores prácticas. Todos los endpoints fueron traducidos a su versión con métodos de modelos (find, delete, etc.).\n\n" +
      "Tecnologías usadas: NestJS, TypeORM, PostgreSQL.\n" +
      "Plataforma: Contenedores Docker.\n" +
      "Despliegue: Kubernetes (EKS) en AWS.\n\n",
    techDetails: [
      { name: "NestJS", icon: <SiNestjs size={20} color="#E0234E" /> },
      { name: "PostgreSQL", icon: <SiMongodb size={20} color="#336791" /> },
      { name: "Docker", icon: <SiTailwindcss size={20} color="#2496ED" /> },
      { name: "Kubernetes", icon: <SiAmazonaws size={20} color="#3C99D3" /> },
    ],
  },
  {
    id: "aws-optimization",
    title: "Optimización de Recursos en AWS",
    shortDesc:
      "Optimización de recursos y costos en AWS, implementando buenas prácticas para escalabilidad y eficiencia.",
    tech: ["AWS", "CloudFormation", "Terraform", "Lambda", "EC2"],
    detailedDesc:
      "3. Optimización de recursos en AWS respetando buenas prácticas para mejorar rendimiento y costo sin comprometer la infraestructura.\n\n" +
      "Tecnologías usadas: AWS EC2, S3, Lambda, CloudWatch, IAM.\n" +
      "Estrategias: Automatización de escalado, monitoreo continuo, auditoría de permisos y optimización de almacenamiento.\n" +
      "Despliegue: Infraestructura como código con AWS CloudFormation y Terraform.\n\n",
    techDetails: [
      { name: "AWS", icon: <SiAmazonaws size={20} color="#FF9900" /> },
      { name: "CloudFormation", icon: <SiAwsamplify size={20} color="#FF9900" /> },
      { name: "Terraform", icon: <SiAwsamplify size={20} color="#6F42C1" /> },
      { name: "Lambda", icon: <SiAmazonaws size={20} color="#FF9900" /> },
      { name: "EC2", icon: <SiAmazonaws size={20} color="#FF9900" /> },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                HABILIDADES                                 */
/* -------------------------------------------------------------------------- */

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "NestJS", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "Python", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "SQL Server", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 60 },
  { name: "AWS (EC2, EKS, RDS, IAM…)", level: 75 },
  { name: "Linux", level: 80 },
  { name: "Docker/Kubernetes", level: 70 },
];

/* -------------------------------------------------------------------------- */
/*                               COMPONENTES                                  */
/* -------------------------------------------------------------------------- */

function SkillBar({ skill }) {
  const blocksCount = 20;
  const filledBlocks = Math.round((skill.level / 100) * blocksCount);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-textPrimary dark:text-textPrimary-dark">
          {skill.name}
        </span>
        <span className="text-textSecondary dark:text-textSecondary-dark">
          {skill.level}%
        </span>
      </div>
      <div className="flex space-x-1">
        {[...Array(blocksCount)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-5 h-5 rounded-sm border border-borderLight dark:border-borderLight-dark ${
              i < filledBlocks
                ? "bg-primary dark:bg-primary-dark"
                : "bg-transparent"
            }`}
            whileHover={{
              scale: i < filledBlocks ? 1.2 : 1,
              rotate: i < filledBlocks ? [0, 10, -10, 0] : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
}

function useActiveSection(setActive) {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sectionRefs.current.forEach((s) => s && observer.observe(s));
    return () => sectionRefs.current.forEach((s) => s && observer.unobserve(s));
  }, [setActive]);

  return sectionRefs;
}

/* --------------------------- Modal de proyectos --------------------------- */

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
            <pre className="mb-4 whitespace-pre-wrap text-textSecondary dark:text-textSecondary-dark">
              {project.detailedDesc}
            </pre>
            <strong className="text-textPrimary dark:text-textPrimary-dark">
              Tecnologías y plataformas:
            </strong>
            <ul className="flex flex-wrap gap-3 mt-2">
              {project.techDetails.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 bg-primary dark:bg-primary-dark px-3 py-1 rounded text-white text-sm font-semibold shadow"
                >
                  {icon}
                  {name}
                </li>
              ))}
            </ul>
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

/* -------------------------- Timeline de experiencia ----------------------- */

const experienceItems = [
  {
    title: "Backend & DevOps Developer",
    company: "LAWYERS DSB",
    period: "2024 – 2025",
    description:
      "Desarrollé APIs con Node.js y NestJS, gestioné infraestructuras en AWS, CI/CD y bases de datos MySQL para sistemas robustos y escalables.",
  },
  {
    title: "Desarrollador Full Stack",
    company: "EXSIM",
    period: "Oct – Nov 2024",
    description:
      "Programé aplicaciones de escritorio en Delphi y desarrollé APIs para módulos especializados de Microsip.",
  },
  {
    title: "Desarrollador DevOps",
    company: "Invercratos S.A.P.I.",
    period: "2023 – 2024",
    description:
      "Administré servicios en AWS y contenedores con Kubernetes, automatizando despliegues y monitoreo continuo.",
  },
  {
    title: "Soporte Técnico & Desarrollo Web",
    company: "Euromaquinados Hnos.",
    period: "2020 – 2021",
    description:
      "Mantenimiento de equipos de cómputo, desarrollo de aplicaciones internas y soporte en automatización de procesos.",
  },
];

function Timeline() {
  return (
    <div className="relative border-l-4 border-primary dark:border-primary-dark ml-6 pl-6 space-y-10">
      {experienceItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: i * 0.3 }}
          className="relative"
        >
          <span className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-primary dark:bg-primary-dark border-2 border-background dark:border-background-dark" />
          <h3 className="text-xl font-bold text-textPrimary dark:text-textPrimary-dark">
            {item.title}
          </h3>
          <span className="block text-sm italic text-textSecondary dark:text-textSecondary-dark mb-2">
            {item.company} — {item.period}
          </span>
          <p className="text-textSecondary dark:text-textSecondary-dark">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------- Cursor personalizado -------------------------- */

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [shot, setShot] = useState(null);

  useEffect(() => {
    const mv = (e) => setPos({ x: e.clientX, y: e.clientY });
    const md = () => setShot({ x: pos.x, y: pos.y - 20 });
    window.addEventListener("mousemove", mv);
    window.addEventListener("mousedown", md);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("mousedown", md);
    };
  }, [pos]);

  useEffect(() => {
    if (!shot) return;
    let raf;
    const animate = () => {
      setShot((s) => (s && s.y > -20 ? { ...s, y: s.y - 0.1 } : null));
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [shot]);

  return (
    <>
      <style>
        {`
          .pixelated{image-rendering:pixelated;shape-rendering:crispEdges}
          .invader-body{fill:#00f0ff;stroke:#005f7f;stroke-width:1}
          .invader-eye{fill:#ff0000}
          .laser{fill:#ff3300;filter:drop-shadow(0 0 6px #ff3300)}
        `}
      </style>

      {shot && (
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          style={{
            position: "fixed",
            top: shot.y,
            left: shot.x,
            pointerEvents: "none",
            transform: "translate(-50%,-100%)",
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
          position: "fixed",
          top: pos.y,
          left: pos.x,
          pointerEvents: "none",
          transform: "translate(-50%,-50%)",
          zIndex: 9999,
          cursor: "none",
        }}
        className="pixelated"
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

/* -------------------------------------------------------------------------- */
/*                               APP PRINCIPAL                                */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [active, setActive] = useState(sections[0].id);
  const [modalProject, setModalProject] = useState(null);
  const sectionRefs = useActiveSection(setActive);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    mq.addEventListener("change", (e) => setIsDark(e.matches));
    return () => mq.removeEventListener("change", () => null);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div>
      <CustomCursor />

      {/* ----------------------------- NAVBAR ----------------------------- */}
      <nav className="fixed top-4 inset-x-0 mx-auto w-full max-w-screen px-4 sm:px-8 z-50">
        <div className="flex flex-wrap items-center bg-glass dark:bg-glass-dark backdrop-blur-xs rounded-full px-4 py-3 shadow-glass dark:shadow-glass-dark border border-borderLight dark:border-borderLight-dark gap-3 sm:gap-6">
          <div className="flex items-center flex-shrink-0">
            <LogoSVG color={isDark ? "#00f0ff" : "#005f7f"} size={40} />
            <span className="ml-3 font-bold font-press-start text-primary dark:text-primary-dark text-sm sm:text-lg">
              IVAN CLOUD ENGINEER
            </span>
          </div>
          <div className="flex flex-wrap justify-center flex-grow gap-2 sm:gap-4">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() =>
                  document.getElementById(sec.id).scrollIntoView({ behavior: "smooth" })
                }
                className={`text-xs sm:text-sm font-bold uppercase px-3 py-1 sm:px-4 sm:py-2 rounded-full transition ${
                  active === sec.id
                    ? "bg-primary dark:bg-primary-dark text-white shadow"
                    : "text-textPrimary dark:text-textPrimary-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-white"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ----------------------------- SECCIONES ----------------------------- */}
      <main>
        {sections.map((sec, i) => (
          <section
            id={sec.id}
            key={sec.id}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={`${sec.bgColor} min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-32 gap-10 lg:gap-20`}
          >
            {/* Imagen */}
            {sec.image && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full max-w-xs sm:max-w-sm lg:max-w-md"
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            )}

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 w-full max-w-xl"
            >
              <h2 className="text-3xl sm:text-4xl mb-6 font-press-start glitch text-textPrimary dark:text-textPrimary-dark">
                {sec.title}
              </h2>
              {sec.content && (
                <p className="mb-6 text-textSecondary dark:text-textSecondary-dark whitespace-pre-line">
                  {sec.content}
                </p>
              )}

              {sec.id === "skills" &&
                skills.map((skill, idx) => <SkillBar key={idx} skill={skill} />)}

              {sec.id === "experience" && <Timeline />}

              {/* ------------------- PROYECTOS ------------------- */}
              {sec.id === "projects" && (
                <div
                  className="grid gap-6 w-full"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  }}
                >
                  {projectList.map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-cardBg dark:bg-cardBg-dark rounded-lg p-6 shadow-lg cursor-pointer border border-borderLight dark:border-borderLight-dark flex flex-col h-full overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setModalProject(project)}
                    >
                      <h3 className="text-lg sm:text-xl font-press-start text-textPrimary dark:text-textPrimary-dark mb-2 truncate">
                        {project.title}
                      </h3>
                      <p className="text-textSecondary dark:text-textSecondary-dark mb-4 overflow-hidden text-ellipsis line-clamp-3 flex-grow">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
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
              )}

              {/* ------------------- CONTACTO ------------------- */}
              {sec.id === "contact" && (
                <div className="mt-6 flex flex-col items-center space-y-6">
                  <div className="flex gap-6">
                    <a
                      href="mailto:carpinteirosalazari@gmail.com"
                      aria-label="Email"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
                    >
                      <FiMail />
                    </a>
                    <a
                      href="https://github.com/AskewToe6174"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ivan-carpinteiro-salazar-ab1915311"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-primary dark:text-primary-dark text-3xl hover:text-secondary dark:hover:text-secondary-dark transition"
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

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="fixed bottom-0 inset-x-0 bg-glass dark:bg-glass-dark backdrop-blur-xs border-t border-borderLight dark:border-borderLight-dark flex justify-center gap-10 py-3 shadow-glass dark:shadow-glass-dark z-40">
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
        <a href="mailto:carpinteirosalazari@gmail.com" aria-label="Email">
          <FiMail className="text-textPrimary dark:text-white text-2xl hover:text-secondary dark:hover:text-secondary-dark transition" />
        </a>
      </footer>

      {/* ------------------------------ MODAL ------------------------------ */}
      <Modal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}
