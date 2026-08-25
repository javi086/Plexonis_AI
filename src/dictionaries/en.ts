import { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    services: "Solutions",
    methodology: "How We Work",
    whyUs: "Why Choose Us",
    useCases: "Case Studies",
    getStarted: "Get Started",
  },
  hero: {
    badge: "Practical Automation for Growing Businesses",
    headlineStart: "Stop Losing Time on Manual Tasks. ",
    headlineGradient: "Start Grow Your Business.",
    headlineEnd: "",
    subheadline:
      "We connect your business with intelligent systems that respond to every lead in seconds, 24 hours a day. Increase your booked appointments without overloading your team.",
    ctaPrimary: "Book a Discovery Call",
    ctaSecondary: "View Solutions",
    metrics: {
      speed: "< 60s",
      speedLabel: "Response Time",
      consults: "+30%",
      consultsLabel: "Booked Consultations",
      availability: "24/7",
      availabilityLabel: "Continuous Support",
    },
    dashboardCard: {
      title: "Automation Dashboard",
      status: "24/7 Service Active",
      version: "Plexonis v2.4",
      crmSync: "Automatic Lead Logging",
      qualifierEngine: "Instant Qualification",
      workflowExec: "Appointment Booked on Calendar",
      workflowDesc: "Lead greeted, qualified, and appointment confirmed in under 30 seconds.",
      sla: "Service Guarantee",
      uptime: "Availability: 99.9%",
    },
  },
  services: {
    badge: "Our Solutions",
    title: "Systems Designed to Save Time and Multiply Sales",
    subtitle:
      "We design practical tools that prevent lost leads and help your business handle more inquiries without hiring additional staff.",
    items: {
      leadAgents: {
        title: "Instant Response and Lead Qualification",
        desc: "Virtual assistants on WhatsApp and Web that reply in under 60 seconds, answer questions, and schedule meetings directly on your calendar 24/7.",
        tags: ["WhatsApp Support", "Sub-Minute Replies", "Automated Booking"],
        badge: "Highest Return",
      },
      workflows: {
        title: "Repetitive Task Automation",
        desc: "Say goodbye to manual data entry. We connect your forms, emails, and tools so customer information updates automatically across your business.",
        tags: ["Zero Manual Entry", "Instant Alerts", "Time Savings"],
      },
      knowledgeBase: {
        title: "Internal Search and FAQ Assistants",
        desc: "Turn your guides, price sheets, and internal documents into a digital assistant that answers client or team questions instantly with total accuracy.",
        tags: ["Fast Lookup", "Accurate Answers", "100% Secure Data"],
      },
      webDesign: {
        title: "Websites Built to Convert",
        desc: "We create fast, modern, and mobile-friendly websites designed specifically to capture and convert interested prospects into paying clients.",
        tags: ["Lightning Fast", "Mobile-Optimized", "Conversion-Focused"],
      },
      integrations: {
        title: "Seamless Tool Integration",
        desc: "We connect your everyday tools—email, WhatsApp, calendars, and sales systems—so they work together seamlessly without losing records.",
        tags: ["Secure Sync", "Zero Lost Data", "All in One Place"],
      },
    },
  },
  process: {
    badge: "Our Methodology",
    title: "A Simple Path to Modernizing Your Business",
    subtitle:
      "No technical headaches or complicated software. We handle the entire design, setup, and configuration from start to finish.",
    steps: [
      {
        num: "01",
        title: "1. Workflow Discovery",
        desc: "We review your daily operations to pinpoint which manual tasks are costing you the most time and lost revenue.",
      },
      {
        num: "02",
        title: "2. Tailored Action Plan",
        desc: "We design a clear, simple blueprint showing you exactly how the solution will improve your speed and sales.",
      },
      {
        num: "03",
        title: "3. Build and Rigorous Testing",
        desc: "We set up and test your system in a safe environment to guarantee complete accuracy before going live.",
      },
      {
        num: "04",
        title: "4. Launch and Ongoing Support",
        desc: "We launch your automations, monitor daily performance, and provide continuous support so everything runs smoothly.",
      },
    ],
  },
  whyUs: {
    badge: "Why Choose Plexonis",
    title: "Practical Technology That Delivers Real Results",
    subtitle:
      "We avoid overly complex systems no one uses. We build practical tools that fit naturally into your day-to-day operations from day one.",
    stats: {
      stat1: "< 60s",
      label1: "Lead Response Time",
      stat2: "24/7",
      label2: "Continuous Support",
    },
    benefits: [
      {
        title: "Measurable Revenue Impact",
        desc: "Every system has a clear goal: cut wait times, free up team capacity, and help you close more deals.",
      },
      {
        title: "Built for Your Business",
        desc: "No generic templates or rigid bots; we adapt every tool to your company's actual workflow.",
      },
      {
        title: "Simple and Dependable",
        desc: "We focus on stable, secure tools that work reliably while keeping your customer data private.",
      },
      {
        title: "Long-Term Partnership",
        desc: "As your company grows, we maintain and optimize your tools so they continue running without issues.",
      },
    ],
  },
  useCases: {
    badge: "Real Applications",
    title: "Practical Solutions in Action",
    subtitle: "See how we help businesses solve common daily bottlenecks.",
    outcomeLabel: "Key Outcome",
    problemLabel: "The Challenge",
    solutionLabel: "Our Solution",
    cta: "Build this for my business",
    cases: [
      {
        id: "sales",
        tabTitle: "Lead Response",
        title: "Instant Response and Qualification",
        problem:
          "Online inquiries wait hours or days for a response, and many prospects end up buying from faster competitors.",
        solution:
          "An assistant that replies under 60 seconds, answers product questions, evaluates leads and books consultations directly into your sales calendar.",
        metric: "< 60s Instant Response",
        impact: [
          "24/7 replies",
          "Automatic contact logging",
          "Filters out unqualified spam",
        ],
      },
      {
        id: "docs",
        tabTitle: "Document Capture",
        title: "Automated Data Extraction and Invoicing",
        problem:
          "Staff spend hours manually retyping numbers and line items from PDF receipts, invoices, or work orders into internal software.",
        solution:
          "An intelligent workflow that reads uploaded files or receipts, extracts key information, and saves it directly into your accounting or inventory software.",
        metric: "90% Faster Data Capture",
        impact: [
          "Zero manual typing errors",
          "Files processed in seconds",
          "Direct connection to accounting tools",
        ],
      },
      {
        id: "support",
        tabTitle: "24/7 Support",
        title: "Customer Inquiries and FAQ Assistant",
        problem:
          "Inboxes get flooded with repetitive questions, pulling your team away from higher-value work.",
        solution:
          "A virtual assistant trained on your company guides and FAQs that answers common questions instantly and escalates special cases to your team.",
        metric: "65% Workload Reduction",
        impact: [
          "Helpful answers day and night",
          "Frees up your support team",
          "Matches your exact brand tone",
        ],
      },
      {
        id: "analytics",
        tabTitle: "Instant Reports",
        title: "On-Demand Business Insights",
        problem:
          "Business owners wait days for staff to manually assemble spreadsheet summaries and sales reports.",
        solution:
          "A query assistant where you can ask questions in plain language (e.g., 'What were our top 3 revenue sources this month?') and see instant visual summaries.",
        metric: "Instant Performance Reports",
        impact: [
          "Plain-language questions",
          "Instant charts and summaries",
          "100% private and confidential data",
        ],
      },
      {
        id: "workflow",
        tabTitle: "System Sync",
        title: "Cross-Platform Data Sync",
        problem:
          "Email, WhatsApp, and customer lists are disconnected, requiring your team to copy data back and forth between apps.",
        solution:
          "We link your tools so that when a new customer reaches out or completes an order, everything updates across all your platforms automatically.",
        metric: "+ Time Saved Monthly",
        impact: [
          "Zero lost customer records",
          "Instant team notifications",
          "Effortless weekly summaries",
        ],
      },
    ],
  },
  contact: {
    badge: "Get Started",
    title: "Let's Modernize Your Business",
    subtitle:
      "Ready to save time and reply faster to every customer? Complete the form or schedule a short call with our team.",
    chatbotTitle: "Chat with Plexonis",
    chatbotDesc: "Tell us about your needs and get instant answers from our assistant.",
    chatbotBtn: "Start Chat Now",
    emailTitle: "Email Us Directly",
    emailDesc: "Send your project requirements or any questions directly to our inbox.",
    form: {
      name: "Your Name",
      email: "Work Email",
      company: "Company Name",
      goal: "What would you like to improve?",
      overview: "Tell us about your business",
      overviewPlaceholder:
        "Describe the repetitive task, bottleneck, or tool you want to improve...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successTitle: "Message Received!",
      successDesc:
        "Thank you for reaching out. A member of our team will get back to you within 24 hours.",
      sendAnother: "Send another message",
      dropdownOptions: {
        leadAgents: "Instant Response and WhatsApp Qualification",
        workflows: "Repetitive Task Automation",
        webDesign: "Conversion-Focused Website",
        knowledgeBase: "Internal FAQ and Search Assistant",
        integrations: "Connecting My Existing Tools",
      },
    },
  },
};