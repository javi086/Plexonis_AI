import { Dictionary } from "./types";

export const es: Dictionary = {
  nav: {
    services: "Soluciones",
    methodology: "Cómo Trabajamos",
    whyUs: "Por Qué Elegirnos",
    useCases: "Casos Practicos",
    getStarted: "Comenzar",
  },
  hero: {
    badge: "Automatización práctica para empresas",
    headlineStart: "Adiós tareas manuales. ",
    headlineGradient: "Hola crecimiento de ventas.",
    headlineEnd: "",
    subheadline:
      "Conectamos tu negocio con sistemas inteligentes que atienden a cada cliente en segundos, las 24 horas del día. Aumenta tus ventas sin sobrecargar a tu equipo.",
    ctaPrimary: "Agenda una reunión gratuita",
    ctaSecondary: "Ver soluciones",
    metrics: {
      speed: "< 60s",
      speedLabel: "Tiempo de respuesta",
      consults: "+30%",
      consultsLabel: "Citas agendadas",
      availability: "24/7",
      availabilityLabel: "Atención continua",
    },
    dashboardCard: {
      title: "Panel de automatización",
      status: "Atención 24/7 activa",
      version: "Plexonis v2.4",
      crmSync: "Registro automático de clientes",
      qualifierEngine: "Calificación inmediata",
      workflowExec: "Cita agendada en calendario",
      workflowDesc: "Cliente atendido, calificado y cita confirmada en menos de 30 segundos.",
      sla: "Garantía de servicio",
      uptime: "Disponibilidad: 99.9%",
    },
  },
  services: {
    badge: "Nuestras soluciones",
    title: "Sistemas diseñados para ahorrar tiempo y multiplicar ventas",
    subtitle:
      "Diseñamos herramientas prácticas que eliminan la pérdida de clientes y permiten que su empresa atienda más solicitudes sin contratar más personal.",
    items: {
      leadAgents: {
        title: "Atención inmediata y calificación de clientes",
        desc: "Asistentes virtuales en WhatsApp y Web que responden en menos de 60 segundos, aclaran dudas y agendan citas directamente en su calendario 24/7.",
        tags: ["Atención en WhatsApp", "Respuestas en segundos", "Citas automáticas"],
        badge: "Mayor retorno",
      },
      workflows: {
        title: "Automatización de tareas repetitivas",
        desc: "Dígale adiós a la captura manual de datos. Conectamos sus formularios, correos y sistemas para que todo se actualice solo.",
        tags: ["Cero trabajo manual", "Notificaciones inmediatas", "Ahorro de tiempo"],
      },
      knowledgeBase: {
        title: "Asistentes de consulta y preguntas frecuentes",
        desc: "Convierta sus manuales, cotizaciones y documentos en un asistente digital que responde dudas de clientes o empleados al instante con total precisión.",
        tags: ["Búsqueda Rápida", "Respuestas Precisas", "Datos 100% Seguros"],
      },
      webDesign: {
        title: "Páginas web diseñadas para vender",
        desc: "Creamos sitios web modernos y optimizados para móviles, pensados específicamente para capturar clientes interesados.",
        tags: ["Carga ultrarrápida", "Diseño para móviles", "Enfocado en conversión"],
      },
      integrations: {
        title: "Conexión total entre sus herramientas",
        desc: "Unimos sus plataformas actuales (WhatsApp, correo, calendarios y sistemas de ventas) para que trabajen en equipo sin perder información.",
        tags: ["Sincronización segura", "Cero pérdida de datos", "Todo en un solo lugar"],
      },
    },
  },
  process: {
    badge: "Nuestra metodología",
    title: "Un camino sencillo para modernizar su negocio",
    subtitle:
      "Sin complicaciones técnicas ni términos difíciles. Nosotros nos encargamos de todo el desarrollo y la configuración de principio a fin.",
    steps: [
      {
        num: "01",
        title: "1. Diagnóstico de procesos",
        desc: "Revisamos su forma de trabajar e identificamos qué tareas manuales le están costando más tiempo y dinero.",
      },
      {
        num: "02",
        title: "2. Plan de trabajo a la medida",
        desc: "Diseñamos un esquema claro y sencillo que le muestra exactamente cómo la solución mejorará sus tiempos y ventas.",
      },
      {
        num: "03",
        title: "3. Construcción y pruebas",
        desc: "Configuramos y probamos todo en un entorno seguro para garantizar que funcione perfectamente antes de lanzarlo.",
      },
      {
        num: "04",
        title: "4. Lanzamiento y acompañamiento",
        desc: "Ponemos el sistema en marcha y nos aseguramos de que opere sin interrupciones, brindándole soporte continuo.",
      },
    ],
  },
  whyUs: {
    badge: "Por qué elegir Plexonis",
    title: "Tecnología práctica que produce resultados reales",
    subtitle:
      "Evitamos sistemas complicados que nadie usa. Creamos soluciones prácticas que se adaptan a su operación diaria desde el primer día.",
    stats: {
      stat1: "< 60s",
      label1: "Respuesta a clientes",
      stat2: "24/7",
      label2: "Soporte continuo",
    },
    benefits: [
      {
        title: "Resultados que se reflejan en ventas",
        desc: "Cada desarrollo tiene un objetivo claro: reducir tiempos de espera, liberar horas de su equipo y conseguir más clientes.",
      },
      {
        title: "Soluciones adaptadas a su empresa",
        desc: "No usamos soluciones genéricas; adaptamos cada herramienta a las necesidades reales de su negocio.",
      },
      {
        title: "Simple y confiable",
        desc: "Nos enfocamos en herramientas estables y seguras que funcionan siempre, cuidando la privacidad de sus datos.",
      },
      {
        title: "Soporte y mejora continua",
        desc: "A medida que su negocio crece, nosotros cuidamos y actualizamos sus herramientas para que sigan funcionando sin fallas.",
      },
    ],
  },
  useCases: {
    badge: "Casos de aplicación",
    title: "Soluciones reales en acción",
    subtitle: "Vea cómo ayudamos a resolver los problemas diarios más comunes de las empresas.",
    outcomeLabel: "Beneficio clave",
    problemLabel: "El problema",
    solutionLabel: "Nuestra solución",
    cta: "Quiero implementar esto",
    cases: [
      {
        id: "sales",
        tabTitle: "Atención a clientes",
        title: "Respuesta inmediata y captación de clientes",
        problem:
          "Los clientes que piden información por internet esperan horas o días para recibir respuesta, y muchos terminan comprando con la competencia.",
        solution:
          "Un asistente que responde en menos de un minuto, evalua al lead, agenda la cita directamente con sus vendedores y guarda los datos al instante.",
        metric: "< 60s Respuesta inmediata",
        impact: [
          "Atención 24/7",
          "Datos guardados al instante",
          "Filtra consultas de personas no interesadas",
        ],
      },
      {
        id: "docs",
        tabTitle: "Lectura de documentos",
        title: "Extracción automática de datos y facturas",
        problem:
          "El personal pierde horas copiando a mano datos de facturas en PDF, recibos o notas de pedido hacia sus sistemas.",
        solution:
          "Un sistema que lee archivos o imágenes, extrae la información importante y la guarda automáticamente en su sistema contable o de inventario.",
        metric: "90% menos tiempo de captura",
        impact: [
          "Cero errores de escritura manual",
          "Procesamiento en segundos",
          "Conexión directa con su sistema contable",
        ],
      },
      {
        id: "support",
        tabTitle: "Soporte 24/7",
        title: "Asistente de consultas y preguntas frecuentes",
        problem:
          "El correo y el teléfono se saturan con las mismas dudas una y otra vez, quitándole tiempo valioso al personal.",
        solution:
          "Un asistente entrenado con la información de su empresa que resuelve dudas habituales al instante y pasa los casos especiales a una persona.",
        metric: "65% Menos carga de trabajo",
        impact: [
          "Respuestas amables y claras día y noche",
          "Más tiempo libre para su equipo",
          "Mismo tono y estilo de su marca",
        ],
      },
      {
        id: "analytics",
        tabTitle: "Reportes rápidos",
        title: "Consultas de negocio al instante",
        problem:
          "Los directores y gerentes pierden días esperando a que su equipo arme tablas de Excel o reportes de ventas.",
        solution:
          "Una herramienta donde puede preguntar en lenguaje cotidiano (ej. '¿Cuáles fueron los productos más vendidos este mes?') y ver el reporte al momento.",
        metric: "Reportes al instante",
        impact: [
          "Preguntas en lenguaje cotidiano",
          "Resúmenes y gráficas inmediatas",
          "Información 100% privada y confidencial",
        ],
      },
      {
        id: "workflow",
        tabTitle: "Sincronización total",
        title: "Conexión automática entre sistemas",
        problem:
          "El correo, WhatsApp y las listas de clientes están desconectados, obligando a su equipo a copiar datos de una aplicación a otra.",
        solution:
          "Conectamos sus programas para que cuando entre un cliente nuevo o se cierre una venta, todo se actualice automáticamente en todas partes.",
        metric: "Mas horas ahorradas al mes",
        impact: [
          "Cero registros perdidos",
          "Avisos automáticos a su equipo",
          "Resúmenes semanales sin esfuerzo",
        ],
      },
    ],
  },
  contact: {
    badge: "Empiece hoy",
    title: "Comencemos a automatizar su negocio",
    subtitle:
      "¿Listo para ahorrar tiempo y responder más rápido a sus clientes? Complete el formulario o agende una breve llamada con nosotros.",
    chatbotTitle: "Chatee con Plexonis",
    chatbotDesc: "Cuéntenos qué necesita y un asistente le ayudará al instante.",
    chatbotBtn: "Iniciar chat",
    emailTitle: "Escríbanos directamente",
    emailDesc: "Envíenos los detalles de su proyecto o cualquier pregunta que tenga.",
    form: {
      name: "Su nombre",
      email: "Correo electrónico",
      company: "Nombre de su empresa",
      goal: "¿Qué le gustaría resolver?",
      overview: "Platíquenos sobre su negocio",
      overviewPlaceholder: "Cuéntenos qué proceso, tarea manual o herramienta le gustaría mejorar...",
      submitBtn: "Enviar mensaje",
      submittingBtn: "Enviando...",
      successTitle: "¡Mensaje recibido!",
      successDesc: "Muchas gracias por contactarnos. Nos comunicaremos con usted en menos de 24 horas.",
      sendAnother: "Enviar otro mensaje",
      dropdownOptions: {
        leadAgents: "Atención Rápida y Calificación por WhatsApp",
        workflows: "Automatización de tareas repetitivas",
        webDesign: "Página web para conseguir clientes",
        knowledgeBase: "Asistente de consultas y preguntas frecuentes",
        integrations: "Conectar mis programas y herramientas",
      },
    },
  },
};