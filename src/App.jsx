import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiX,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiCloud,
  FiDatabase,
  FiServer,
} from "react-icons/fi";

import portrait from "./thatsme2program.webp";

/* ============================================================
   Data — sourced from the user's CV
   ============================================================ */

const profile = {
  name: "Ivan Carpinteiro Salazar",
  role: "Computer Systems Engineer",
  subRole: "Cloud Engineer Junior",
  phone: "+52 221 118 1132",
  email: "carpinteirosalazari@gmail.com",
  location: "Puebla, Pue. — México",
  github: "https://github.com/AskewToe6174",
  linkedin: "https://www.linkedin.com/in/ivan-carpinteiro-salazar-ab1915311",
  summary:
    "Ingeniero en sistemas computacionales, apasionado por la tecnología y el trabajo en equipo. Disfruto colaborar en equipos diversos para aportar y, a la vez, aprender de la experiencia de los demás. Estoy en constante búsqueda de profundizar en distintas áreas de mi carrera, especialmente en el ecosistema cloud, donde me interesa diseñar soluciones escalables, seguras y bien automatizadas.",
};

const softSkills = [
  "Pensamiento lógico",
  "Responsabilidad",
  "Visión estratégica",
  "Liderazgo",
  "Autodidacta",
  "Pensamiento crítico",
];

const techGroups = [
  {
    label: "Lenguajes",
    icon: <FiCode className="text-accent" />,
    items: [
      { name: "Python", level: "Intermedio-Alto" },
      { name: "Java", level: "Intermedio" },
      { name: "C / C++", level: "Intermedio" },
      { name: "HTML", level: "Avanzado" },
      { name: "JavaScript", level: "Básico" },
      { name: "Node.js", level: "Avanzado" },
    ],
  },
  {
    label: "Cloud & Web",
    icon: <FiCloud className="text-accent" />,
    items: [
      { name: "AWS (EC2, EKS, ECS, IAM, VPC, RDS, S3)", level: "Intermedio" },
      { name: "Azure", level: "Básico" },
      { name: "Terraform (IaC)", level: "Básico" },
    ],
  },
  {
    label: "Bases de datos",
    icon: <FiDatabase className="text-accent" />,
    items: [
      { name: "SQL Server", level: "Avanzado" },
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "MongoDB", level: "Básico" },
    ],
  },
  {
    label: "DevOps & SO",
    icon: <FiServer className="text-accent" />,
    items: [
      { name: "GitHub Actions / CI-CD", level: "Avanzado" },
      { name: "Linux (Ubuntu / Debian / RHEL)", level: "Intermedio" },
      { name: "Windows Server", level: "Intermedio" },
      { name: "NGINX, Apache, Docker", level: "Intermedio" },
    ],
  },
];

const education = [
  {
    school: "Universidad Politécnica Metropolitana de Puebla",
    degree: "Ingeniería en Sistemas Computacionales",
    period: "2020 — 2024",
    detail:
      "Formación con enfoque en ingeniería de software, redes, bases de datos y administración de sistemas.",
  },
];

const experience = [
  {
    role: "Head of Information Technology Department",
    company: "Lawyers DSB",
    companyDesc:
      "Despacho jurídico con clientes nacionales e internacionales.",
    period: "Nov 2025 — Actual",
    bullets: [
      "Dirección del área de tecnología: planeación, presupuesto y roadmap.",
      "Definición de estándares de seguridad, infraestructura y operación.",
      "Coordinación de equipo técnico y proveedores externos.",
    ],
  },
  {
    role: "Backend & DevOps Developer",
    company: "Lawyers DSB",
    companyDesc:
      "Despacho jurídico con clientes nacionales e internacionales.",
    period: "2024 — 2025",
    bullets: [
      "Desarrollo de aplicaciones backend con Node.js, NestJS y GraphQL, optimizando lógica de servidor y eficiencia.",
      "Administración de infraestructuras AWS, implementando CI/CD, automatización y despliegues escalables.",
      "Administración de MySQL: mantenimiento, tuning y disponibilidad.",
      "Coordinación de despliegues a producción cuidando estabilidad y experiencia de usuario.",
    ],
  },
  {
    role: "Desarrollador Full Stack",
    company: "EXSIM — Microsip",
    companyDesc:
      "Distribuidor del ERP Microsip, suite contable y administrativa para empresas en México.",
    period: "Oct — Nov 2024",
    bullets: [
      "Programación de aplicaciones de escritorio en Delphi.",
      "Desarrollo de APIs para módulos especializados de Microsip.",
    ],
  },
  {
    role: "DevOps Developer",
    company: "Inguz MX · Invercratos S.A.P.I.",
    companyDesc:
      "Corporativo bancario / fintech mexicano, hoy parte del grupo PayPal.",
    period: "2023 — 2024",
    bullets: [
      "Parte del equipo de desarrollo en el área de DevOps.",
      "Administración cloud principalmente sobre AWS.",
      "Gestión de contenedores con Kubernetes y operación continua.",
    ],
  },
  {
    role: "Soporte Técnico & Desarrollo Web",
    company: "Euromaquinados Hermanos S.A. de C.V.",
    companyDesc:
      "Empresa dedicada a la fabricación y diseño industrial.",
    period: "2020 — 2021",
    bullets: [
      "Soporte presencial sobre incidencias en equipos de cómputo.",
      "Desarrollo de aplicaciones web internas.",
      "Instalación de componentes para automatización de procesos.",
    ],
  },
];

const projects = [
  {
    id: "api-rest-node",
    title: "API REST con Node.js",
    summary:
      "API REST sobre base de datos relacional construida con Node.js y Sequelize, priorizando agilidad de entrega y rendimiento.",
    stack: ["Node.js", "Sequelize", "MySQL", "PM2", "NGINX"],
    detail:
      "API REST completa con base de datos relacional implementada en Node.js. Se trabajó con queries directas mediante Sequelize por requerimientos de tiempo, evitando el sobre-modelado. Plataforma: servidor Linux. Despliegue: VPS con PM2 y proxy reverso NGINX.",
  },
  {
    id: "api-nestjs",
    title: "Migración a NestJS",
    summary:
      "Migración completa de una API Node.js a NestJS, traduciendo cada endpoint a métodos ORM y estructurándola en módulos.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Docker", "Kubernetes (EKS)"],
    detail:
      "Migración total de la API REST de Node.js a NestJS aplicando buenas prácticas: módulos, DTOs, validaciones, ORM (find, delete, etc.) en lugar de queries directas. Contenedorización con Docker y despliegue a Kubernetes (EKS) en AWS.",
  },
  {
    id: "aws-optimization",
    title: "Optimización de recursos en AWS",
    summary:
      "Auditoría y optimización de costos e infraestructura en AWS aplicando buenas prácticas sin comprometer disponibilidad.",
    stack: ["AWS EC2", "S3", "Lambda", "CloudWatch", "IAM", "Terraform"],
    detail:
      "Optimización de recursos y costos en AWS: automatización de escalado, monitoreo continuo, auditoría de permisos IAM y optimización de almacenamiento. Infraestructura como código con CloudFormation y Terraform.",
  },
  {
    id: "cre-volumetricos",
    title: "Extracción de datos CRE (Volumétricos)",
    summary:
      "Pipeline en Python que convierte años de reportes de la CRE de PDF a MySQL, sanitizando ruido de headers, footers y timestamps.",
    stack: ["Python", "PDF parsing", "Regex sanitization", "MySQL"],
    detail:
      "Reto: la empresa contaba con varios años de reportes volumétricos de la Comisión Reguladora de Energía (CRE) únicamente en PDF; volver a descargarlos y re-acomodarlos uno por uno era inviable. Solución: construí un pipeline en Python que lee cada PDF, ejecuta una función de sanitización para limpiar el ruido inyectado por el visor (headers, footers y timestamps añadidos al imprimir/guardar), normaliza el contenido a un esquema relacional y lo carga a MySQL. Resultado: los datos históricos quedaron consultables y consumibles por reporting sin necesidad de volver a tocar los archivos originales.",
  },
  {
    id: "newsletter-gas",
    title: "Newsletter — Gas Natural",
    summary:
      "Plataforma de suscripción a boletines especializados en gas natural, diseñada con foco UX para usuarios mayores de edad.",
    stack: ["UX/UI", "Formularios accesibles", "Diseño centrado en el usuario"],
    detail:
      "Plataforma donde el usuario se da de alta para recibir noticias y boletines sobre gas natural. La principal complejidad no fue técnica sino de experiencia: el público objetivo eran personas mayores, tanto al consumir el contenido como al llenar el alta. Trabajé jerarquía visual, tipografía amplia, formularios cortos, copy claro y feedback evidente en cada paso, con el objetivo de que los suscriptores se sintieran cómodos y en confianza durante todo el flujo.",
  },
  {
    id: "rhel-metrics",
    title: "Automatización de métricas — Red Hat",
    summary:
      "Automatización en Node.js que se conecta vía SSH a servidores Red Hat, recolecta métricas y las entrega con el formato que esperan las herramientas de visualización.",
    stack: ["Node.js", "ssh2", "Red Hat / Linux", "Observabilidad"],
    detail:
      "Construí un proceso en Node.js apoyado en la librería ssh2 para conectarse a múltiples servidores Red Hat, ejecutar comandos de sistema y recolectar métricas clave (CPU, memoria, disco, estado de servicios). Los datos se transforman al formato exacto que esperan las herramientas de visualización del stack interno, eliminando la recolección manual y dejando los dashboards al día sin intervención humana.",
  },
];

const navSections = [
  { id: "perfil", label: "Perfil" },
  { id: "formacion", label: "Formación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

/* ============================================================
   Hooks
   ============================================================ */

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/* ============================================================
   UI Building blocks
   ============================================================ */

function SectionHeading({ kicker, title }) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-wider2 text-mutedSoft mb-3">
        {kicker}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-ink heading-rule">
        {title}
      </h2>
    </div>
  );
}

function ContactRow({ icon, label, href, copyValue }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!copyValue) return;
    navigator.clipboard?.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  const content = (
    <span className="flex items-center gap-3 text-[13px] text-mutedOnDark hover:text-paper transition group">
      <span className="text-accent flex-shrink-0">{icon}</span>
      <span className="break-all">{copied ? "¡Copiado!" : label}</span>
    </span>
  );
  if (href) {
    return (
      <a href={href} className="block py-1.5">
        {content}
      </a>
    );
  }
  return (
    <button onClick={handleCopy} className="block py-1.5 text-left w-full">
      {content}
    </button>
  );
}

function Sidebar({ activeId, onNavigate }) {
  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[340px] xl:w-[360px] w-full bg-sidebar text-paper flex flex-col">
      <div className="sidebar-scroll overflow-y-auto flex-1 px-7 py-10 lg:py-12">
        {/* Portrait */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-44 h-56 sm:w-48 sm:h-60 overflow-hidden rounded-arch shadow-photo border border-dividerOnDark"
              aria-hidden="true"
            >
              <img
                src={portrait}
                alt={`Retrato de ${profile.name}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-9">
          <ContactRow
            icon={<FiPhone size={14} />}
            label={profile.phone}
            copyValue={profile.phone}
          />
          <ContactRow
            icon={<FiMail size={14} />}
            label={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactRow
            icon={<FiMapPin size={14} />}
            label={profile.location}
          />
        </div>

        {/* Soft skills */}
        <div className="mb-9">
          <h3 className="font-display text-lg text-paper mb-4 tracking-wide">
            Habilidades
          </h3>
          <ul className="space-y-1.5">
            {softSkills.map((s) => (
              <li
                key={s}
                className="text-[13px] text-mutedOnDark flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical skills */}
        <div className="mb-9">
          <h3 className="font-display text-lg text-paper mb-4 tracking-wide">
            Stack técnico
          </h3>
          <div className="space-y-5">
            {techGroups.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px]">{group.icon}</span>
                  <span className="text-[11px] uppercase tracking-wider2 text-paper/70">
                    {group.label}
                  </span>
                </div>
                <ul className="space-y-1 pl-5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-[12.5px] text-mutedOnDark flex justify-between gap-3"
                    >
                      <span className="truncate">{item.name}</span>
                      <span className="text-[11px] text-paper/55 flex-shrink-0">
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="pt-6 border-t border-dividerOnDark flex items-center justify-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-paper/80 hover:text-accent transition"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-paper/80 hover:text-accent transition"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-paper/80 hover:text-accent transition"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}

function TopNav({ activeId, onNavigate }) {
  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-divider no-print">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-4 flex items-center justify-between gap-6">
        <span className="hidden sm:block text-[11px] uppercase tracking-wider2 text-mutedSoft">
          Portafolio · 2026
        </span>
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[12px] uppercase tracking-wider2 transition ${
                activeId === s.id
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroHeader() {
  return (
    <header className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-14 lg:pt-20 pb-12 border-b border-divider">
      <p className="text-xs uppercase tracking-wider2 text-mutedSoft mb-4">
        Perfil profesional
      </p>
      <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl text-ink leading-[1.05]">
        {profile.name.split(" ").slice(0, 2).join(" ")}
        <br />
        <span className="text-muted">
          {profile.name.split(" ").slice(2).join(" ")}
        </span>
      </h1>
      <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl">
        {profile.role} · <span className="text-accentDark">{profile.subRole}</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm rounded-full hover:bg-sidebarSoft transition"
        >
          Contáctame <FiArrowUpRight size={15} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ink/25 text-ink px-5 py-2.5 text-sm rounded-full hover:bg-ink hover:text-paper transition"
        >
          LinkedIn <FiLinkedin size={14} />
        </a>
      </div>
    </header>
  );
}

function ProfileSection() {
  return (
    <section
      id="perfil"
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24"
    >
      <SectionHeading kicker="01 — Quién soy" title="Perfil personal" />
      <p className="text-base sm:text-lg leading-relaxed text-muted max-w-3xl">
        {profile.summary}
      </p>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      id="formacion"
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 bg-paperSoft/40 border-y border-divider"
    >
      <SectionHeading kicker="02 — Formación" title="Trayectoria académica" />
      <div className="space-y-8">
        {education.map((ed) => (
          <article
            key={ed.school}
            className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8"
          >
            <div className="flex sm:flex-col gap-3 sm:gap-1 items-baseline">
              <FiBookOpen className="text-accent hidden sm:block" />
              <p className="text-sm tracking-wider2 uppercase text-mutedSoft">
                {ed.period}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink mb-1">
                {ed.school}
              </h3>
              <p className="text-sm text-accentDark mb-2">{ed.degree}</p>
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                {ed.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ item, idx }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 pb-10 border-b border-divider last:border-0 last:pb-0"
    >
      <div className="flex sm:flex-col gap-3 sm:gap-1 items-baseline">
        <FiBriefcase className="text-accent hidden sm:block" />
        <p className="text-sm tracking-wider2 uppercase text-mutedSoft">
          {item.period}
        </p>
      </div>
      <div>
        <h3 className="font-display text-xl text-ink mb-1">{item.role}</h3>
        <p className="text-sm text-accentDark">{item.company}</p>
        {item.companyDesc && (
          <p className="text-xs italic text-mutedSoft mb-3 max-w-xl">
            {item.companyDesc}
          </p>
        )}
        <ul className="space-y-2 max-w-2xl mt-3">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-muted leading-relaxed flex gap-3"
            >
              <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24"
    >
      <SectionHeading kicker="03 — Experiencia" title="Trayectoria profesional" />
      <div className="space-y-10">
        {experience.map((item, i) => (
          <ExperienceItem key={item.role + item.company} item={item} idx={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="text-left bg-paper border border-divider hover:border-ink/30 rounded-lg p-6 shadow-card transition group flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-[11px] tracking-wider2 uppercase text-mutedSoft">
          Proyecto
        </span>
        <FiArrowUpRight
          className="text-mutedSoft group-hover:text-ink transition"
          size={18}
        />
      </div>
      <h3 className="font-display text-xl text-ink mb-3 leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-grow mb-5">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-[11px] tracking-wide text-muted bg-paperSoft border border-divider rounded-full px-2.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-ink/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 no-print"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-paper rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-soft border border-divider"
          >
            <div className="p-8 pb-6">
              <div className="flex items-start justify-between mb-5">
                <span className="text-[11px] tracking-wider2 uppercase text-mutedSoft">
                  Proyecto destacado
                </span>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="text-muted hover:text-ink transition"
                >
                  <FiX size={20} />
                </button>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.detail}
              </p>
              <p className="text-[11px] uppercase tracking-wider2 text-mutedSoft mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted bg-paperSoft border border-divider rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectsSection({ onOpenProject }) {
  return (
    <section
      id="proyectos"
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 bg-paperSoft/40 border-y border-divider"
    >
      <SectionHeading kicker="04 — Proyectos" title="Trabajo seleccionado" />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contacto"
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24"
    >
      <SectionHeading kicker="05 — Hablemos" title="Contacto" />
      <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mb-10">
        Estoy abierto a colaborar en proyectos cloud, oportunidades de DevOps
        y consultorías de arquitectura. Escríbeme y respondo en menos de 24 h.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
        <a
          href={`mailto:${profile.email}`}
          className="group border border-divider rounded-lg p-5 hover:border-ink/30 transition"
        >
          <FiMail className="text-accent mb-3" size={20} />
          <p className="text-[11px] uppercase tracking-wider2 text-mutedSoft mb-1">
            Email
          </p>
          <p className="text-sm text-ink break-all">{profile.email}</p>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-divider rounded-lg p-5 hover:border-ink/30 transition"
        >
          <FiLinkedin className="text-accent mb-3" size={20} />
          <p className="text-[11px] uppercase tracking-wider2 text-mutedSoft mb-1">
            LinkedIn
          </p>
          <p className="text-sm text-ink">/in/ivan-carpinteiro-salazar</p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-divider rounded-lg p-5 hover:border-ink/30 transition"
        >
          <FiGithub className="text-accent mb-3" size={20} />
          <p className="text-[11px] uppercase tracking-wider2 text-mutedSoft mb-1">
            GitHub
          </p>
          <p className="text-sm text-ink">@AskewToe6174</p>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 xl:px-24 py-8 border-t border-divider flex flex-col sm:flex-row justify-between gap-4 text-xs text-mutedSoft">
      <span>
        © {new Date().getFullYear()} {profile.name}. Hecho con cuidado.
      </span>
      <span className="tracking-wider2 uppercase">
        Computer Systems Engineer · Cloud Engineer Junior
      </span>
    </footer>
  );
}

/* ============================================================
   Root
   ============================================================ */

export default function App() {
  const [modalProject, setModalProject] = useState(null);
  const sectionIds = useRef(navSections.map((s) => s.id)).current;
  const activeId = useActiveSection(sectionIds);

  const handleNavigate = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-paper text-ink">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />

      <div className="flex-1 lg:ml-[340px] xl:ml-[360px] paper-grain">
        <TopNav activeId={activeId} onNavigate={handleNavigate} />
        <HeroHeader />
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection onOpenProject={setModalProject} />
        <ContactSection />
        <Footer />
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
