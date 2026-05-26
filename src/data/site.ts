export const site = {
  name: "ISI",
  shortName: "ISI",
  legalName: "ISI - Ingenieros de Soluciones Inteligentes",
  tagline: "Ingeniería inteligente para infraestructura, software y conectividad empresarial.",
  email: "contacto@isi.com.co",
  phone: "+57 300 000 0000",
  location: "Medellín, Colombia",
  schedule: "Lunes a viernes, 08:00 a 18:00",
  linkedin: "https://www.linkedin.com/"
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Contacto", href: "/contacto/" }
];

export const media = {
  logo: "/images/logo.png",
  brandSystem: "/images/brand-system.jpg",
  teamEngineering: "/images/team-engineering.jpg",
  aboutLab: "/images/about-lab.jpg",
  circuitBoard: "/images/circuit-board.jpg",
  collaboration: "/images/collaboration.jpg",
  networkNodes: "/images/network-nodes.jpg",
  digitalLab: "/images/digital-lab.jpg",
  contactCity: "/images/contact-city.jpg"
};

export const values = [
  {
    title: "Conectividad",
    icon: "network",
    text: "Conectamos ideas, personas y tecnología para crear ecosistemas robustos, seguros y escalables."
  },
  {
    title: "Innovación",
    icon: "spark",
    text: "Diseñamos soluciones eficientes que convierten la complejidad técnica en ventaja competitiva."
  },
  {
    title: "Inteligencia",
    icon: "brain",
    text: "Aplicamos datos, automatización y criterio de ingeniería para generar decisiones de largo plazo."
  }
];

export const services = [
  {
    title: "Ingeniería impulsada por IA",
    icon: "cpu",
    tag: "Automatización",
    text: "Modelos, flujos y asistentes inteligentes para acelerar operaciones críticas sin perder control técnico.",
    details: [
      "Asistentes inteligentes integrados a flujos de trabajo existentes",
      "Automatización de procesos repetitivos con validación humana",
      "Análisis predictivo para toma de decisiones operativas",
      "Fine-tuning de modelos sobre datos propios del negocio"
    ]
  },
  {
    title: "Infraestructura inteligente",
    icon: "cloud",
    tag: "Cloud & Edge",
    text: "Arquitecturas híbridas, observabilidad y despliegues preparados para escalar con resiliencia.",
    details: [
      "Diseño de arquitecturas multi-cloud y edge computing",
      "Observabilidad completa con alertas inteligentes",
      "CI/CD automatizado con rollback seguro",
      "Optimización continua de costos y rendimiento"
    ]
  },
  {
    title: "Conectividad global",
    icon: "network",
    tag: "Redes",
    text: "Integración segura entre sedes, dispositivos, servicios y plataformas empresariales.",
    details: [
      "SD-WAN y redes definidas por software",
      "Conexión segura entre sedes remotas y cloud",
      "IoT industrial con protocolos especializados",
      "Monitoreo de red en tiempo real con análisis de tráfico"
    ]
  },
  {
    title: "Gemelos digitales",
    icon: "scan",
    tag: "Simulación",
    text: "Representaciones virtuales para probar escenarios, anticipar riesgo y optimizar decisiones antes del despliegue.",
    details: [
      "Modelado 3D de infraestructuras físicas",
      "Simulación de escenarios con datos en tiempo real",
      "Análisis de impacto antes de cambios en producción",
      "Dashboards interactivos para toma de decisiones"
    ]
  },
  {
    title: "Ciberseguridad aplicada",
    icon: "shield",
    tag: "Seguridad",
    text: "Controles, hardening y continuidad para sistemas que no pueden permitirse improvisar.",
    details: [
      "Auditorías de seguridad y pentesting continuo",
      "Hardening de infraestructura y aplicaciones",
      "Plan de respuesta a incidentes y recuperación",
      "Cumplimiento normativo (ISO 27001, NIST)"
    ]
  },
  {
    title: "Arquitectura de software",
    icon: "layers",
    tag: "Software",
    text: "Sistemas modulares, APIs y plataformas internas listas para crecer con el negocio.",
    details: [
      "Diseño de microservicios y APIs escalables",
      "Plataformas internas de desarrollo (IDP)",
      "Migración de legacy systems con cero downtime",
      "Documentación técnica y gobernanza de código"
    ]
  }
];

export const metrics = [
  { value: "200+", label: "proyectos entregados", icon: "layers" },
  { value: "99.9%", label: "uptime garantizado", icon: "shield" },
  { value: "<15 min", label: "tiempo de respuesta", icon: "spark" }
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CTO",
    company: "TechFin Solutions",
    text: "ISI transformó nuestra arquitectura legacy en una plataforma cloud-native escalable. Redujimos tiempos de deployment de semanas a horas y mejoramos la disponibilidad al 99.99%.",
    service: "Infraestructura inteligente",
    rating: 5,
    date: "Marzo 2024"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Operaciones",
    company: "IndustriaAndes",
    text: "La solución de IA y automatización que implementó ISI redujo nuestros costos operativos en un 35% mientras mejoraba la precisión de nuestros procesos críticos.",
    service: "IA y automatización útil",
    rating: 5,
    date: "Enero 2024"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "VP de Tecnología",
    company: "GlobalConnect Corp",
    text: "Gracias a la arquitectura de software diseñada por ISI, pudimos escalar nuestra plataforma para soportar 10x más usuarios sin problemas de rendimiento.",
    service: "Arquitectura de software",
    rating: 4,
    date: "Noviembre 2023"
  },
  {
    id: 4,
    name: "Jaime López",
    role: "Gerente de TI",
    company: "SaludPlus EPS",
    text: "ISI nos ayudó a implementar una solución de conectibilidad segura entre nuestras sedes que cumplió con todos los requisitos de regulación médica.",
    service: "Conectividad global",
    rating: 5,
    date: "Septiembre 2023"
  }
];
