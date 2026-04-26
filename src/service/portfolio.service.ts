// src/service/portfolio.service.ts
import type { BlogPost } from "../types/portfolio-data.types";

const portfolioService = {
  getPortfolioData: () => ({
    personal: {
      name: "Demir Danış",
      firstName: "Demir",
      lastName: "Danış",
      title: "Software Engineering Manager",
      location: "İzmir, Turkey",
      age: "31 Years",
      phone: "+90 506 107 84 77",
      email: "danis.demir@gmail.com",
      linkedin: "https://www.linkedin.com/in/demir-danis/",
      github: "https://github.com/demirdanis",
      bio: "Full-stack software architect & engineering manager with 15+ years delivering scalable systems. I lead high-performing teams and actively integrate AI-augmented workflows — from AI-assisted code review to LLM-driven architecture decisions — to ship faster without sacrificing quality.",
      longBio:
        "With over 15 years of hands-on experience spanning the full software lifecycle, I architect and deliver complex, high-scale systems from the ground up — bridging React, Next.js, and Angular frontends with robust NestJS, .NET, and cloud-native backends. As an Engineering Manager, I build and grow cross-functional teams where technical rigour and human development are treated as equally strategic priorities. I cultivate environments built on psychological safety, clear ownership, and a culture of continuous improvement. A core part of my leadership philosophy is the deliberate integration of AI across every phase of the SDLC: leveraging GitHub Copilot and LLMs to accelerate development cycles, automating code review and documentation pipelines, and applying AI-driven forecasting to sprint planning and capacity modelling. The outcome is consistently faster delivery, measurably higher code quality, reduced operational overhead, and — most importantly — engineering teams that grow stronger with every release.",
      profileImage:
        "data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2364748b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)'/%3E%3Ctext x='200' y='230' font-family='Arial, sans-serif' font-size='120' font-weight='bold' text-anchor='middle' fill='white'%3EDD%3C/text%3E%3C/svg%3E",
    },
    navigation: ["Home", "About", "Resume", "Portfolio", "Blog"],
    socialMedia: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/demir-danis/",
        icon: "linkedin" as const,
      },
      {
        name: "GitHub",
        url: "https://github.com/demirdanis",
        icon: "github" as const,
      },
      {
        name: "Email",
        url: "mailto:danis.demir@gmail.com",
        icon: "mail" as const,
      },
    ],
  skills: [
    // 1. Leadership & Strategic Management (En Kritik: Yönetim Gücü)
    { name: "Engineering Management", category: "Leadership & Management" },
    { name: "Mentoring & Coaching", category: "Leadership & Management" },
    { name: "Agile / Scrum", category: "Leadership & Management" },
    { name: "Cross-functional Collaboration", category: "Leadership & Management" },
    { name: "Team Leadership", category: "Leadership & Management" },

    // 2. AI-Augmented Engineering (Fark Yaratan: Modern İş Akışı)
    { name: "LLM Integration (OpenAI / Claude / Groq)", category: "AI-Augmented Engineering" },
    { name: "RAG (Retrieval-Augmented Generation)", category: "AI-Augmented Engineering" }, // Eklendi: Kurumsal AI bilgisi
    { name: "AI-Assisted Code Review", category: "AI-Augmented Engineering" },
    { name: "Prompt Engineering", category: "AI-Augmented Engineering" },
    { name: "Claude Code, GitHub Copilot", category: "AI-Augmented Engineering" },
    { name: "AI-Powered Test Generation", category: "AI-Augmented Engineering" },
    { name: "AI-Driven Documentation", category: "AI-Augmented Engineering" },


     // 4. Backend (Core Competency)
    { name: "Node.js & NestJS", category: "Backend" },
    { name: "Go", category: "Backend" },
    { name: "C# / .NET", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "WebRTC / Real-Time", category: "Backend" },

    // 5. Frontend (Modern Interface)
    { name: "Next.js & React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Micro Frontend", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" }, // Eklendi: Modern UI standardı
    { name: "Playwright / Cypress (E2E Testing)", category: "Frontend" }, // Eklendi: Kalite güvencesi
    { name: "Progressive Web Apps", category: "Frontend" },
    { name: "Angular / Vue.js", category: "Frontend" }, // Sona itildi: Alternatif yetkinlik


    // 3. Architecture & Infrastructure (Teknik Derinlik: Sistem Tasarımı)
    { name: "System Design & Scalability", category: "Infrastructure & DevOps" }, // Eklendi: Architect seviyesi
    { name: "Microservices & Event-Driven Architecture", category: "Infrastructure & DevOps" },
    { name: "Docker & Kubernetes", category: "Infrastructure & DevOps" },
    { name: "CI/CD & DevOps Automation", category: "Infrastructure & DevOps" },
    { name: "AWS / Azure", category: "Infrastructure & DevOps" },
    { name: "Kafka", category: "Infrastructure & DevOps" },
    { name: "Observability (Grafana / Prometheus)", category: "Infrastructure & DevOps" }, // Eklendi: Sistem izleme

     // 6. Databases (Persistence)
    { name: "PostgreSQL", category: "Databases" },
    { name: "Redis", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "Elasticsearch", category: "Databases" },
    { name: "Vector Databases (Pinecone / Milvus)", category: "Databases" }, // Eklendi: AI projeleri için şart

    ],
    services: [
      {
        icon: "users" as const,
        title: "Team Leadership",
        description:
          "Leading high-performing engineering teams, mentoring developers, and fostering collaborative environments.",
      },
      {
        icon: "code" as const,
        title: "Full-Stack Development",
        description:
          "Building scalable web applications using React, Node.js, and modern cloud technologies.",
      },
      {
        icon: "target" as const,
        title: "System Architecture",
        description:
          "Designing microservices architectures and implementing best practices for scalable systems.",
      },
      {
        icon: "briefcase" as const,
        title: "Project Management",
        description:
          "Managing complex projects using Agile methodologies and ensuring timely delivery.",
      },
    ],
    experience: [
      {
        id: 1,
        year: "2021 - Continuing",
        title: "Software Engineering Team Lead",
        company: "Brew Interactive",
        location: "İzmir - Remote",
        description:
          "Leading a high-performing team of 5–6 engineers, delivering scalable solutions for global-scale projects using Agile methodologies. Transitioned to full-stack leadership role managing both frontend and backend responsibilities.",
        technologies: [
          "React",
          "Next.js",
          "Angular",
          "Node.js",
          "NestJS",
          ".NET",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "AWS",
          "Azure",
          "Elasticsearch",
          "GraphQL",
          "Microservices",
          "CI/CD",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        id: 2,
        year: "2016 - 2021",
        title: "Senior FullStack Software Engineer",
        company: "Veriyaz Yazılım",
        location: "İzmir - Remote",
        description:
          "Contributed to end-to-end development of large-scale projects including B2B marketplace platforms, real-time communication systems, and location-based services.",
        technologies: [
          "Angular",
          "Go",
          "C#",
          ".NET",
          "Icelink",
          "WebRTC",
          "CouchBaseDB",
          "AWS",
          "Azure",
          "Redis",
          "Elasticsearch",
          "CI/CD",
          "Nginx",
          "Kubernetes",
        ],
      },
      {
        id: 3,
        year: "2015 - 2016",
        title: "Team Leader & FullStack Developer",
        company: "Alangoya Bilgi Teknolojileri",
        location: "Ankara",
        description:
          "Led end-to-end development of Turkish Sugar Corporation's comprehensive data tracking and analysis system serving over 1,000 companies.",
        technologies: ["C#", ".NET", "Angular", "MSSQL", "Redis"],
      },
      {
        id: 4,
        year: "2013 - 2015",
        title: "Software Developer",
        company: "Akıllı Sistemler Bilişim",
        location: "İzmir",
        description:
          "Worked on cutting-edge R&D projects funded by TÜBİTAK, focusing on audio/image processing, document crawling, and custom search engine development.",
        technologies: ["JQuery", "HTML", "CSS", ".NET", "C#", "NoSQL DBs"],
      },
      {
        id: 5,
        year: "2011 - 2013",
        title: "Software Developer",
        company: "İdeal Web Tasarım",
        location: "İzmir",
        description:
          "In this role, I was the sole developer in the company, responsible for building and maintaining dynamic, content-driven corporate websites and admin panels. My responsibilities spanned both the frontend and backend, and I also designed the UI/UX for each project myself.",
        technologies: [
          "JQuery",
          "JavaScript",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DBs",
        ],
      },
    ],
    education: [
      {
        year: "2011",
        degree: "Computer Engineering",
        school: "Ege University",
        location: "İzmir, Turkey",
        description:
          "Bachelor's degree in Computer Engineering with focus on software development and system design.",
      },
    ],
    projects: [
     
      {
        id: 2,
        title: "villasepeti.com",
        category: "E-commerce",
        description:
          "Modern e-commerce platform with advanced search capabilities and real-time inventory management.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/villasepeti.webp",
        technologies: [
          "React",
          "Next.js",
          "MUI",
          "Hasura",
          "GraphQL",
          "NestJS",
        ],
        link: "https://villasepeti.com",
      },

      
    
      {
        id: 4,
        title: "Enuygun Finans",
        category: "Fintech",
        description:
          "Credit and loan management system for Turkey's leading travel platform.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/enuygun.webp",
        technologies: ["React", "Next.js", "Strapi", "GraphQL"],
        link: "https://www.enuygunfinans.com/kredi",
      },

      {
        id: 9,
        title: "dod.com.tr",
        category: "Web Application",
        description:
          "dod.com.tr developed with Vue.js and Ant Design, documented with Storybook.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/dod.webp",
        technologies: ["Vue.js", "Ant Design", "Storybook"],
        link: "https://dod.com.tr/",
      },
      {
        id: 10,
        title: "Sensat Component Library",
        category: "Web Application",
        description:
          "sensat.com developed with Vue.js and Ant Design, documented with Storybook.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sensat.webp",
        technologies: ["Vue.js", "Ant Design", "Storybook"],
        link: "https://sensat.com/",
      },
        {
        id: 3,
        title: "TomorrowID",
        category: "AI/ML",
        description:
          "Advanced authentication system with facial recognition and biometric security features.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/tmrwme.webp",
        technologies: [
          "React",
          "Next.js",
          "Hasura",
          "GraphQL",
          "OpenCV",
          "TensorFlow",
        ],
        link: null,
      },

       {
        id: 1,
        title: "Onlayer",
        category: "Website and Application",
        description:
          "Business Risk & Performance Management",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/onlayer.webp",
        technologies: [
          "Next.js",
          "ShadcnUI",         
          "Directus CMS",         
        "GraphQL",
        "Docker"
        ],
        link: null,
      },
       {
        id: 1,
        title: "Nesy (Aras Kargo)",
        category: "Enterprise Platform",
        description:
          "Enterprise logistics platform with microservices architecture serving millions of users.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/nesy.webp",
        technologies: [
          "Angular",
          "PrimeNG",
          "Ionic",
          ".NET",
          "Kafka",
          "MongoDB",
        ],
        link: null,
      },

      {
        id: 5,
        title: "KocSistem Web Application",
        category: "Enterprise Web",
        description:
          "A web application for kocsistem.com.tr where dynamic pages can be created from the CMS using a custom component library.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/koc.webp",
        technologies: ["RemixJS", "Decap CMS", "PostgreSQL"],
        link: "https://www.kocsistem.com.tr/",
      },
      
      {
        id: 11,
        title: "Kordon Madya",
        category: "Web Site / Android / IOS Apps",
        description:
          "An integrated application that publishes the corporate website for radio broadcasting owned by Kordon Media and their Android and iOS apps.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/kordon.webp",
        technologies: ["React", "Next.js", "Github Pages"],
        link: null,
      },
      {
        id: 12,
        title: "Tezmaksan Web Platform",
        category: "Corporate Website",
        description:
          "A corporate web platform for tezmaksan.com.tr developed using React, Next.js, MUI, and Squdex CMS.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/tezmaksan.webp",
        technologies: ["React", "Next.js", "MUI", "Sqdex CMS"],
        link: "https://tezmaksan.com/tr",
      },
      {
        id: 13,
        title: "Sestek Chatbot Component Library",
        category: "Component Library",
        description:
          "A React-based component library project for the Sestek chatbot. Customizable React components were developed for different chatbot interfaces.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sestek.webp",
        technologies: ["React", "Storybook"],
        link: null,
      },
      {
        id: 14,
        title: "Led Taxi Admin Panel",
        category: "Admin Panel",
        description:
          "A comprehensive admin panel for managing vehicles, devices, batteries, stations, clients, users, campaigns, and reservations. The main product enables the management of ads to be played on LED panels mounted on taxis.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/ledtaxi.webp",
        technologies: ["React", "Next.js", "MUI", "Storybook"],
        link: null,
      },
      {
        id: 15,
        title: "Merak Haritası",
        category: "Interactive Map",
        description:
          "A website where comments and information about locations entered from the CMS are displayed. While navigating to a point of interest, users can also see nearby charging stations along their route based on their location.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/merak.webp",
        technologies: ["React", "Next.js", "MUI", "Storybook", "Strapi"],
        link: null,
      },

      {
        id: 16,
        title: "PTTTrade B2B Platform",
        category: "B2B Platform",
        description:
          "A large-scale B2B project for ptttrade.com, similar to Alibaba.com. Developed as a comprehensive system for business-to-business commerce.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/ptttrade.webp",
        technologies: [
          "Angular",
          "Go",
          "Elasticsearch",
          "CouchbaseDB",
          "Redis",
          "Kubernetes",
          "WebRTC",
          "Nginx",
        ],
        link: "https://www.ptttrade.com/",
      },
      {
        id: 17,
        title: "SesliDünya Voice & Video Chat Rooms",
        category: "Real-Time Communication",
        description:
          "A system for voice and video chat rooms (web.seslidunya.com) with Android and iOS mobile apps named 'seslidunya'.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/sesli.webp",
        technologies: ["Angular", "WebRTC", "Jitsi", "Redis", "MongoDB", "Go"],
        link: "https://web.seslidunya.com/",
      },
      {
        id: 18,
        title: "DIMAR (Tubitak R&D Project)",
        category: "Audio & Image Processing",
        description:
          "Fullstack project for audio and image processing as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 19,
        title: "HADIARA (Tubitak R&D Project)",
        category: "Search Engine & Crawler",
        description:
          "Fullstack project for document search engine and crawler (doc, pdf, txt...) as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 20,
        title: "HADIARA SOCIAL MEDIA (Tubitak R&D Project)",
        category: "Social Media Search Engine",
        description:
          "Fullstack project for social media search engine and crawler (tweets, facebook messages...) as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 21,
        title: "ASAR (Tubitak R&D Project)",
        category: "Search Engine",
        description:
          "Fullstack search engine project as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 22,
        title: "PIRAKS (Tubitak R&D Project)",
        category: "Address Quality Improvement",
        description:
          "Fullstack address quality improvement project as part of a Tubitak R&D initiative.",
        image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/R&D1.webp",
        technologies: [
          "JQuery",
          "HTML",
          "CSS",
          ".NET",
          "C#",
          "NoSQL DB (Oracle)",
        ],
        link: null,
      },
      {
        id: 23,
        title: "Turkish Sugar Corporation Document & Analysis System",
        category: "Enterprise Data Platform",
        description:
          "In this role, I was responsible for the end-to-end development of the project, acting both as the team lead and a fullstack developer. Initially hired as a backend developer, I was offered full ownership of the project after demonstrating initiative and presenting technical solutions during early meetings. I accepted the leadership role and successfully delivered the project over the course of one year. The system is a comprehensive platform where daily, weekly, monthly, and annual data from Turkish Sugar Corporation factories, export unions, and around 1,000 companies involved in sugar import, export, production, and sales is entered. It generates dynamic reports based on this input, enabling efficient tracking and analysis.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/software-1.webp",
        technologies: [
          "IIS",
          "C# .NET Rest Service",
          "MSSQL",
          "Redis Cache",
          "Angular",
          "Cades Digital Signature",
          "Mobile Signature",
          "Integrations with Ministry Services",
        ],
        link: null,
      },
      {
        id: 24,
        title: "Corporate Websites & SaaS Order Management (Solo Developer)",
        category: "Web & SaaS Solutions",
        description:
          "As the sole developer, I built and maintained dynamic, content-driven corporate websites and admin panels, handling both frontend and backend as well as UI/UX design. Delivered performant, SEO-friendly, multilingual sites tailored to corporate clients. Also designed and launched a custom SaaS order management system for real-time order businesses (e.g., pizzerias, fast food). Features included live order tracking, real-time notifications, product catalog management, and an admin dashboard. All projects were delivered end-to-end, from design to deployment. Example sites: www.modaadresi.com, www.hcmdemiral.com.tr, www.realdogaltas.com, www.idealwebtasarim.com, www.numanpide.com, www.ozaydinpide.com, www.arzupidesalonlari.com, www.buketpastanesi.com.tr, www.savoybalik.com.tr.",
        image:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/software-1.webp",
        technologies: [".NET", "HTML", "CSS", "JQuery", "MSSQL"],
        link: null,
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        position: "CTO at TechCorp",
        content:
          "Demir's leadership transformed our development team. His technical expertise combined with excellent communication skills made him invaluable to our organization.",
        rating: 5,
      },
      {
        id: 2,
        name: "Michael Chen",
        position: "Senior Developer",
        content:
          "Working under Demir's leadership was a game-changer for my career. He's not just a great manager but also a mentor who genuinely cares about team growth.",
        rating: 5,
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        position: "Product Manager",
        content:
          "Demir has an exceptional ability to bridge the gap between technical complexity and business requirements. His architectural decisions always consider scalability and maintainability.",
        rating: 5,
      },
    ],
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "7+", label: "Team Members Led" },
    ],
    blogs: ([
      {
        id: 1,
        slug: "have-we-become-slaves-to-ai",
        title: "Have We Become Slaves to AI?",
        shortDesc:
          "AI is transforming how we write software — but are we trading long-term engineering quality for short-term velocity? A candid look at what we're getting wrong, and how to course-correct.",
        coverImage:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") +
          "/img/1770047325042.jpeg",
        tags: ["AI", "Engineering", "Best Practices"],
        date: "March 04, 2026",
        readTime: "9 min",
        author: "Demir Danış",
        sections: [
          {
            type: "paragraph",
            content:
              "AI adoption in software teams has accelerated at a pace few anticipated. When used with intention and discipline, the productivity gains are undeniable — generating code, refactoring, writing tests, producing documentation. Tasks that once consumed hours now take minutes. But alongside this remarkable capability sits a far less discussed downside. And if we're being honest, it's worth a serious conversation.",
          },
          {
            type: "heading",
            content: "The Core Problem: Moving Without Understanding",
          },
          {
            type: "paragraph",
            content:
              "The most fundamental issue with uncritical AI adoption is deceptively simple: we are shipping code we don't fully understand. In the short term, this goes unnoticed. The code compiles. The tests pass — when they exist. The feature is marked done. But look beneath the surface and the picture is far less encouraging.",
          },
          {
            type: "paragraph",
            content: "AI-generated code tends to be:",
          },
          {
            type: "list",
            content: [
              "Fragmented and inconsistent — solving the same problem in multiple ways across the same codebase",
              "Misaligned with team or company coding standards",
              "Difficult to maintain and extend over time",
              "Written for the happy path, with edge cases left as an exercise for production",
              "Architecturally shallow — optimised for the immediate task, blind to the surrounding system",
            ],
          },
          {
            type: "heading",
            content: "\"Works Fine\" — Until It Doesn't",
          },
          {
            type: "paragraph",
            content:
              "Perhaps the more insidious risk is that AI-generated code frequently appears to work. Happy-path scenarios pass. Demos go smoothly. Sprints close on time. But production is not a demo. Real systems must handle the full spectrum of conditions:",
          },
          {
            type: "list",
            content: [
              "Unexpected or malformed inputs",
              "Null and undefined states across async boundaries",
              "Race conditions and concurrency edge cases",
              "Network failures and partial responses",
              "State inconsistencies in long-running sessions",
              "Security edge cases that only appear under adversarial conditions",
            ],
          },
          {
            type: "paragraph",
            content:
              "In a realistic scenario with ten distinct failure paths, a typical AI-generated implementation handles two or three. The rest surface in production — at the worst possible moment. It is worth noting that a significant part of this is a prompting problem. Providing AI with full context, constraints, and edge cases dramatically improves output quality. But that level of specification is itself a time investment, which partly undermines the velocity argument.",
          },
          {
            type: "heading",
            content: "The Code Review Wake-Up Call",
          },
          {
            type: "paragraph",
            content:
              "The consequences become most visible during code review. A question that is now heard regularly across engineering teams: \"Why was this implemented this way?\" The answer, with increasing frequency, is some variation of: \"The AI suggested it.\" This represents a quiet but profound shift. The developer is no longer the author of the code — they are its gatekeeper. And a permissive one at that.",
          },
          {
            type: "paragraph",
            content:
              "Engineering, properly understood, is not the act of producing code. It is the act of making deliberate decisions — understanding the trade-offs, evaluating alternatives, and owning the outcome. When AI-generated output is merged without this scrutiny, we are not engineering. We are transcribing.",
          },
          {
            type: "heading",
            content: "Short-Term Gain, Long-Term Pain",
          },
          {
            type: "paragraph",
            content:
              "The five minutes saved by letting AI write a function uncritically are repaid many times over in the weeks and months that follow: through hard-to-read code that slows onboarding, unmaintainable components that resist change, debugging sessions that stretch into days, and bug fixes that introduce new regressions. This is not a new problem in software engineering — it is the classic tension between speed and correctness. What AI does is amplify both the temptation and the cost. Technical debt generated at AI velocity accrues at AI velocity too.",
          },
          {
            type: "heading",
            content: "What AI Should Actually Be",
          },
          {
            type: "paragraph",
            content:
              "AI is a powerful amplifier. Used well, it multiplies the output of a thoughtful engineer. Used poorly, it multiplies the output of careless decisions. The key distinction is positioning: AI as a tool in the engineer's hands, not a replacement for the engineer's judgment.",
          },
          {
            type: "paragraph",
            content: "AI does certain things exceptionally well:",
          },
          {
            type: "list",
            content: [
              "Rapid generation of boilerplate and scaffolding",
              "Surfacing alternative approaches the engineer can evaluate",
              "Accelerating documentation and test stubs",
              "Explaining unfamiliar code or APIs quickly",
              "Handling well-defined, low-risk tasks at speed",
            ],
          },
          {
            type: "paragraph",
            content:
              "What it cannot do reliably: understand the long-term architectural trajectory of your system, anticipate how today's shortcut will constrain tomorrow's feature, or take ownership when something breaks in production.",
          },
          {
            type: "heading",
            content: "A More Sustainable Approach",
          },
          {
            type: "paragraph",
            content:
              "Rather than handing the keyboard to the model, a more sustainable posture looks like this:",
          },
          {
            type: "list",
            content: [
              "Establish and enforce clear coding standards and architectural principles before AI enters the workflow",
              "Treat AI output with the same scrutiny you would apply to an external PR from an unknown contributor",
              "Require engineers to be able to explain every line of AI-generated code they merge, as if they wrote it themselves",
              "Use AI strategically — for acceleration in well-understood domains, not as a substitute for design thinking in complex ones",
              "Build team habits around prompting with full context: constraints, edge cases, performance requirements, security considerations",
            ],
          },
          {
            type: "paragraph",
            content:
              "Perhaps the most important mindset shift is this: move from \"if the AI wrote it, it must be correct\" to \"if the AI wrote it, I should look more carefully.\"",
          },
          {
            type: "heading",
            content: "Closing Thoughts",
          },
          {
            type: "paragraph",
            content:
              "Velocity matters. Shipping matters. But long-term maintainability and engineering quality — especially in large, complex systems — matter more. AI is leverage. Leverage that is not managed becomes a liability. The engineers and teams who will win in the AI era are not those who use it the most. They are those who use it the most wisely.",
          },
          {
            type: "paragraph",
            content:
              "Don't become a servant to the tool. Make the tool serve you.",
          },
        ],
      },
      {
        id: 2,
        slug: "the-kind-of-team-leader-i-am",
        title: "The Kind of Team Leader I Am",
        shortDesc:
          "Effective leadership isn't about having all the answers — it's about asking the right questions. Here's the philosophy that shapes how I lead engineering teams.",
        coverImage:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") +
          "/img/1766170393686.jpeg",
        tags: ["Leadership", "Engineering Management", "Team Culture"],
        date: "June 18, 2025",
        readTime: "7 min",
        author: "Demir Danış",
        sections: [
          {
            type: "paragraph",
            content:
              "One of the things I find myself doing most frequently as a team lead — even when I already have a solution in mind — is bringing the problem to the team. Not to delegate the thinking, but to think together. Because the best engineers aren't just the ones who write clean, correct code. They're the ones who can reason clearly, decompose a problem, offer multiple perspectives, take ownership, and do all of this as part of a team rather than in isolation. Building that culture is one of my core responsibilities as a leader.",
          },
          {
            type: "heading",
            content: "Don't Give Answers. Teach the Process.",
          },
          {
            type: "paragraph",
            content:
              "There's a Confucian principle I keep returning to: \"Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.\" This idea sits at the center of how I approach leadership. When a team member comes to me with a problem, my instinct is never to say \"here's how you fix it.\" Instead, I say: \"Let's look at it together.\" The goal isn't the solution — it's developing the judgment to find solutions independently.",
          },
          {
            type: "heading",
            content: "Step One: Define the Problem Precisely",
          },
          {
            type: "paragraph",
            content:
              "Before any solution can be sound, the problem must be clearly understood. I guide team members through the diagnostic phase with questions designed to sharpen their thinking rather than shortcut it:",
          },
          {
            type: "list",
            content: [
              "What changed most recently that could have introduced this problem?",
              "Is this behaviour appearing in all environments, or only in specific scenarios?",
              "Can we reliably reproduce the issue?",
              "Are we observing the actual error, or only a downstream symptom?",
            ],
          },
          {
            type: "paragraph",
            content:
              "These aren't just debugging questions. They're a framework for rigorous thinking — one I want to become second nature for every engineer on the team.",
          },
          {
            type: "heading",
            content: "Step Two: Decompose Before You Solve",
          },
          {
            type: "paragraph",
            content:
              "Once the problem is well-defined, I encourage the team to break it down systematically before jumping to solutions:",
          },
          {
            type: "list",
            content: [
              "What are the distinct steps in this flow?",
              "Which component or service is responsible for each step?",
              "Which layers can be eliminated as the source?",
              "What do the logs, metrics, and error outputs actually tell us?",
            ],
          },
          {
            type: "heading",
            content: "Step Three: Evaluate Solutions, Don't Just Pick One",
          },
          {
            type: "paragraph",
            content:
              "When we reach the solution phase, I resist the pull to give the answer directly. Instead, I push the team to think in trade-offs:",
          },
          {
            type: "list",
            content: [
              "Could there be more than one valid solution here?",
              "Are we choosing something fast and risky, or slow and durable?",
              "Could this fix introduce a different problem downstream?",
              "If this issue recurs, how would we catch it earlier?",
            ],
          },
          {
            type: "paragraph",
            content:
              "This phase is where real engineering judgment develops. Anyone can implement a fix. The skill lies in understanding why one approach is better than another in a specific context — and owning that decision.",
          },
          {
            type: "heading",
            content: "The Compounding Return on Investment",
          },
          {
            type: "paragraph",
            content:
              "The time I spend on this process looks like a cost in the short term. It's slower than just giving the answer. But it compounds. Engineers who go through this process repeatedly develop a problem-solving reflex — they start thinking analytically by default, they take ownership of outcomes, and they begin challenging each other the same way I challenged them. The team becomes self-improving.",
          },
          {
            type: "paragraph",
            content:
              "The way I think about it: one unit of my time invested today returns ten units of team capacity over time. That's not an abstract idea — I've seen it play out concretely. Engineers who joined as juniors have grown into developers who can reason through and build end-to-end systems entirely independently. That progression is the real measure of a team leader's effectiveness.",
          },
          {
            type: "heading",
            content: "What I'm Actually Building",
          },
          {
            type: "paragraph",
            content:
              "My goal as a leader has never been simply to ship today's work. It's to develop engineers who can make their own decisions, design their own systems, and lead others when the moment calls for it. Every problem we debug together, every architecture discussion we have, every mistake we make and correct as a team — these are the building blocks of that outcome.",
          },
          {
            type: "paragraph",
            content:
              "I believe the greatest success a leader can achieve is creating a team that no longer needs them to function at its best. And I'm proud to say that's exactly the kind of team I've been building.",
          },
        ],
      },
      {
        id: 3,
        slug: "should-we-build-microservices",
        title: "Should We Actually Build Microservices?",
        shortDesc:
          "Microservices have become a near-reflex architectural choice. But are we adopting them because they solve our problems — or because everyone else is?",
        coverImage:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") +
          "/img/1766079638702.jpeg",
        tags: ["Architecture", "Microservices", "Engineering"],
        date: "April 28, 2025",
        readTime: "7 min",
        author: "Demir Danış",
        sections: [
          {
            type: "paragraph",
            content:
              "At the start of nearly every new project these days, the same question surfaces almost instinctively: \"Should we build this as microservices?\" The question itself isn't wrong. What's often missing is the follow-up: \"Why? What problem would that actually solve?\" Too frequently, the choice is driven by trend, peer pressure, or a vague sense of obligation rather than a clear engineering rationale.",
          },
          {
            type: "heading",
            content: "Why Microservices Existed in the First Place",
          },
          {
            type: "paragraph",
            content:
              "Microservices emerged as a direct response to real, painful problems that large monolithic systems produce at scale:",
          },
          {
            type: "list",
            content: [
              "Deployments in large monoliths became slow, risky, and increasingly difficult to coordinate",
              "One team's change could silently break another team's production environment",
              "Scaling a single hot component meant scaling the entire application alongside it",
            ],
          },
          {
            type: "paragraph",
            content:
              "The promise of microservices was specific: independent deployability, team-level ownership with clear service boundaries, and the ability to scale individual components in isolation. The goal was never to decompose for the sake of decomposition. It was to gain autonomy.",
          },
          {
            type: "heading",
            content: "What We Often Build Instead",
          },
          {
            type: "paragraph",
            content:
              "In practice, the picture frequently looks quite different. Consider a scenario that will be familiar to many engineers: a single team maintaining 10 to 15 microservices, with every engineer committing to every service. The services are nominally independent but deployed together as a unit. Kubernetes exists in theory but runs a single instance of each service with no horizontal scaling per service. There is no event-driven communication — services call each other synchronously in chains.",
          },
          {
            type: "paragraph",
            content:
              "At this point, it's worth asking honestly: where is the microservices architecture we set out to build? If we weren't going to use independent deployment, team ownership, or elastic scaling — why did we absorb all of the operational overhead that comes with this approach?",
          },
          {
            type: "heading",
            content: "The Questions We Should Ask First",
          },
          {
            type: "paragraph",
            content:
              "Before choosing microservices — or any architectural pattern, technology, or framework — the right discipline is to work through these questions explicitly:",
          },
          {
            type: "list",
            content: [
              "What specific problem are we solving with this choice?",
              "Do we have independent teams who need autonomous deployment pipelines?",
              "Are there components with genuinely different scaling profiles?",
              "Do we have the operational maturity to run a distributed system — observability, service discovery, failure handling?",
              "What is the real cost of this approach versus a simpler alternative?",
            ],
          },
          {
            type: "paragraph",
            content:
              "If the honest answers don't justify the complexity, that's a signal worth taking seriously.",
          },
          {
            type: "heading",
            content: "The Case for a Well-Designed Monolith",
          },
          {
            type: "paragraph",
            content:
              "A well-structured monolith with clear domain boundaries will, in many contexts, outperform a poorly conceived microservices architecture on every dimension that matters: development velocity, operational simplicity, debuggability, and long-term maintainability. Microservices chosen at the wrong moment and for the wrong reasons don't reduce complexity — they redistribute it into the infrastructure, into inter-service contracts, and into the cognitive load of every engineer on the team.",
          },
          {
            type: "paragraph",
            content:
              "This isn't an argument against microservices. Engineers working in this space should understand them deeply — both the theory and the practice. At the right scale and organisational maturity, microservices deliver exactly what they promise. The point is that the pattern must be earned by the problem, not assumed by default.",
          },
          {
            type: "heading",
            content: "Engineering Is Optimisation Under Constraints",
          },
          {
            type: "paragraph",
            content:
              "Engineering is the discipline of solving problems with the resources available — no more, no less. A solution that introduces unnecessary complexity isn't clever; it's a liability. Sometimes the most sophisticated thing an engineering team can do is choose the simpler path deliberately, with a clear understanding of what they're trading off and why.",
          },
          {
            type: "paragraph",
            content:
              "What we often need isn't more services. It's clearer boundaries, better-defined domains, and the discipline to resist complexity for its own sake.",
          },
        ],
      },
      {
        id: 4,
        slug: "respectful-and-results-oriented-interview-process",
        title: "Through the Eyes of a Team Lead: A Respectful and Results-Oriented Interview Process",
        shortDesc:
          "Hiring processes stuck in the early 2000s, meaningless case studies, and AI as a litmus test for seniority — a candid take on what modern recruitment should actually look like.",
        coverImage:
          (process.env.NEXT_PUBLIC_BASE_PATH || "") +
          "/img/mulakat.webp",
        tags: ["Leadership", "Recruitment", "AI", "Engineering Management"],
        date: "April 26, 2026",
        readTime: "7 min",
        author: "Demir Danış",
        sections: [
          {
            type: "paragraph",
            content:
              "Roles in the software world are changing, technologies are evolving every day; however, our hiring processes are unfortunately still stuck in the early 2000s, filled with \"brain teasers\" or exploitative \"one-week case studies.\" These meaningless processes, presented under the name of \"screening stages\" by companies that seem to be looking not for a teammate but for a modern-day slave, continue to exhaust the industry. As a Software Team Lead, when I look for a new teammate, I am not just searching for someone who writes good code; I am looking for individuals with whom I can share a culture and vision, and who can provide real value both to the team and the company.",
          },
          {
            type: "paragraph",
            content:
              "So, how does an interview process that passes through my filter work? From technical details to character analysis, the human-centered and result-oriented methods I apply are actually based on a single question: \"Is this person a good fit for our team?\" Regardless of whether they are Junior, Mid-Level, or Senior, the first thing I look at is the candidate's character; are they open to sharing, do they enjoy learning and teaching, are they persistent and disciplined? Since methods are constantly changing today, adaptability has even surpassed technical knowledge.",
          },
          {
            type: "paragraph",
            content:
              "Especially for Junior candidates with limited experience, a GitHub profile is the biggest showcase that can set them apart. While reviewing their projects, I look not only at whether the code works, but also at code quality, readability, and how well fundamental software principles (best practices) are applied. Recently, one of my biggest criteria has been AI usage. Using AI is a major advantage in my eyes; in fact, if the candidate includes the documentation and prompts they used in the process within the project, it helps me understand how they manage this technology. The critical point here is this: Are they letting AI do all the work, or are they managing it like an \"architect\"? Did they create an ERD diagram before starting to code, did they document the workflow? Did they progress by guiding AI properly, or did they just \"copy-paste\"? Once you examine the code a bit, it becomes quite easy to understand this.",
          },
          {
            type: "paragraph",
            content:
              "When it comes to case studies; if there are too many applicants, a case study may be necessary to measure technical level, but my red line here has always been \"time.\" It should not be forgotten that a job seeker applies to many places and their time is valuable. If the candidate is experienced, I always prefer a conversational technical interview instead of a case stage. When a case study is unavoidable, I prepare scenarios that can be completed within a maximum of 2–3 hours, appearing simple but containing \"subtle details.\" I evaluate whether the candidate uses the right approach in these details, whether they engage in over-engineering, and their problem-solving mindset. Like many companies do, I absolutely do not find those week-long processes—essentially outsourcing internal work for free—appropriate.",
          },
          {
            type: "paragraph",
            content:
              "I see technical interviews not as an exam, but as a collaboration session. Turning the interview from a cold interrogation room atmosphere into a 15-minute coffee conversation allows me to see the candidate's true potential. Do they seek support from me while solving a technical problem, do they exchange ideas? A character who is not afraid to say \"I don't know,\" is open to learning, collaborative, and disciplined will always take priority over someone who writes very good code but is closed off. For Senior and Mid-Level candidates, we focus on visionary topics. By allowing them to guide the conversation, we talk about what they would want to build if circumstances were different, and I observe their leadership qualities within this natural flow.",
          },
          {
            type: "paragraph",
            content:
              "Finally, speed is everything in modern software processes, but one should not get lost within that speed. Listening to how a candidate integrates AI into their processes and whether they can turn this technology into an advantage is one of the greatest indicators of seniority today. Unfortunately, 90% of the industry is still wasting time with meaningless brain teasers and demotivating candidates with fake job postings created just to give the impression of \"we are growing.\" This disrespectful approach, which forgets that candidates also have the right to choose a job, causes companies to lose their future talent.",
          },
          {
            type: "paragraph",
            content:
              "In conclusion; technical skills improve over time, and gaps can somehow be filled. Because I and my team are always ready to provide this support to everyone who joins us. However, character, perseverance, and discipline cannot be bought. Instead of highly skilled but \"solo\" players who do not contribute to the team, building a collaborative, \"good human\"-focused team with whom we can find the right path together has always been my priority.",
          },
        ],
      },
    ] as BlogPost[]),
  }),
};

export default portfolioService;
