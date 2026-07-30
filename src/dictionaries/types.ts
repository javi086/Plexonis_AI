export type Language = "en" | "es";

export interface Dictionary {
  nav: {
    services: string;
    methodology: string;
    whyUs: string;
    useCases: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    headlineStart: string;
    headlineGradient: string;
    headlineEnd: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      speed: string;
      speedLabel: string;
      consults: string;
      consultsLabel: string;
      availability: string;
      availabilityLabel: string;
    };
    dashboardCard: {
      title: string;
      status: string;
      version: string;
      crmSync: string;
      qualifierEngine: string;
      workflowExec: string;
      workflowDesc: string;
      sla: string;
      uptime: string;
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      leadAgents: {
        title: string;
        desc: string;
        tags: string[];
        badge: string;
      };
      workflows: {
        title: string;
        desc: string;
        tags: string[];
      };
      knowledgeBase: {
        title: string;
        desc: string;
        tags: string[];
      };
      webDesign: {
        title: string;
        desc: string;
        tags: string[];
      };
      integrations: {
        title: string;
        desc: string;
        tags: string[];
      };
    };
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      stat1: string;
      label1: string;
      stat2: string;
      label2: string;
    };
    benefits: Array<{
      title: string;
      desc: string;
    }>;
  };
  useCases: {
    badge: string;
    title: string;
    subtitle: string;
    outcomeLabel: string;
    problemLabel: string;
    solutionLabel: string;
    cta: string;
    cases: Array<{
      id: string;
      tabTitle: string;
      title: string;
      problem: string;
      solution: string;
      metric: string;
      impact: string[];
    }>;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    chatbotTitle: string;
    chatbotDesc: string;
    chatbotBtn: string;
    emailTitle: string;
    emailDesc: string;
    form: {
      name: string;
      email: string;
      company: string;
      goal: string;
      overview: string;
      overviewPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successDesc: string;
      sendAnother: string;
      dropdownOptions: {
        leadAgents: string;
        workflows: string;
        webDesign: string;
        knowledgeBase: string;
        integrations: string;
      };
    };
  };
}
