// Your CV as data. The home page shows the most recent roles and the /cv/ page shows everything.
// Newest first: the order here is the order on the site.

export interface Role {
  title: string;
  org: string;
  /** Extra context shown next to the organisation, e.g. team or contract type. */
  note?: string;
  location: string;
  /** Remote / Hybrid; leave out for on-site roles. */
  mode?: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface Degree {
  degree: string;
  detail?: string;
  school: string;
  location: string;
  period: string;
  notes: string[];
}

export const PROFILE = [
  'Software engineer with production experience since 2019, currently a back-end engineer at MotorK in Milan. Much of my work has been TypeScript and Node.js on the server with React or React Native on the client, backed by PostgreSQL, MongoDB and Redis.',
  'I have built and owned internal platform tooling (scraping and RPA pipelines, CI/CD, Grafana dashboards and alerting) and I am comfortable being the engineer other teams depend on rather than the one shipping the front page. MSc in Computer Science, Università degli Studi di Milano, completed July 2026.',
];

export const EXPERIENCE: Role[] = [
  {
    title: 'Software Engineer',
    org: 'MotorK Italia',
    note: 'Leadspark team',
    location: 'Milan, Italy',
    mode: 'Hybrid',
    start: 'Jul 2025',
    end: 'Present',
    highlights: [
      "Back-end engineer on Leadspark, MotorK's automotive lead-management product: PHP and Python services behind CRM integrations for European dealer groups.",
      'Build and operate the integration layer that pushes and reconciles leads with third-party dealer CRMs, handling partial failures, retries and idempotent replays.',
      'Own the web-scraping and RPA automation stack (Playwright, Robocorp) that extracts, cleans and normalises listing and dealer data at scale.',
      'Run services on Kubernetes and AWS; instrument them with Grafana dashboards and alerting, and take part in production triage.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    org: 'GetSpoused dating app',
    note: 'Upwork · Contract',
    location: 'Milan, Italy',
    mode: 'Remote',
    start: 'Apr 2024',
    end: 'Oct 2025',
    highlights: [
      'Sole engineer on a production dating app, delivered end to end: React Native clients for iOS and Android plus a React marketing site.',
      'Built the Express.js back end on MongoDB with Redis caching and RabbitMQ for matching, notifications and media processing.',
      'Designed the matching and messaging data model and shipped the whole product on roughly 20 hours a week.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Wormpost',
    location: 'New York, United States',
    mode: 'Remote',
    start: 'Oct 2024',
    end: 'Apr 2025',
    highlights: [
      'System architecture and back end for an AI customer-service product: decomposed the platform into microservices behind a Kong API gateway.',
      'Wrote services in Go, Express.js and Django; used Kafka for event streaming, Redis for caching and rate limiting, PostgreSQL and MongoDB for storage.',
      'Built the AI agent pipeline that handled customer conversations, including retrieval and tool-calling paths.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Worm',
    note: 'Part-time',
    location: 'New York, United States',
    mode: 'Remote',
    start: 'Dec 2024',
    end: 'Mar 2025',
    highlights: [
      "Extended the Wormpost platform's service architecture for a second product line, reusing the gateway and event-streaming layer.",
      'Implemented back-end services and internal APIs, and documented the integration contracts for downstream teams.',
    ],
  },
  {
    title: 'Freelance Developer',
    org: 'Upwork',
    note: 'Part-time',
    location: 'Milan, Italy',
    mode: 'Remote',
    start: 'Aug 2024',
    end: 'Jan 2025',
    highlights: [
      'MERN-stack delivery work for several clients: MongoDB, Express.js, React and Node.js.',
      'Took briefs from specification to deployment, including schema design, REST APIs and hosting.',
    ],
  },
  {
    title: 'Co-Founder',
    org: 'Protein Team',
    note: 'Self-employed',
    location: 'Milan, Italy',
    start: 'Dec 2023',
    end: 'Oct 2024',
    highlights: [
      'Co-founded a small product studio and led its technical direction across two shipped products.',
      'Chose the stack, set up CI/CD and infrastructure, and wrote a large share of the back-end code myself.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    org: 'Solana wallet analytics',
    note: 'Upwork · Contract',
    location: 'Milan, Italy',
    mode: 'Remote',
    start: 'Mar 2024',
    end: 'May 2024',
    highlights: [
      'Built a crawler that analysed over 10,000 Solana wallets for win rate and realised profit, then ranked them as copy-trading candidates.',
      'Worked around strict third-party API rate limits by sharding the workload across 40+ parallel workers on Kubernetes with back-off and checkpointing.',
      'Persisted and de-duplicated results so repeated runs were incremental rather than full re-crawls.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'English Bot',
    note: 'Protein Team',
    location: 'Milan, Italy',
    start: 'Jul 2023',
    end: 'Mar 2024',
    highlights: [
      'Built a Telegram-based English tutoring platform that first matched learners of equal level and fell back to an LLM conversation partner.',
      'Self-hosted a 14B model on Ollama instead of paying per-token for OpenAI, cutting inference cost to infrastructure cost.',
      'Wrote the matching engine in C++ for throughput and integrated it with the rest of the system through API gateways in a microservice layout.',
      'Used Redis and Kafka for load balancing and queueing across the conversation and matching services.',
    ],
  },
  {
    title: 'Full-stack Developer',
    org: 'Zistel',
    note: 'Full-time',
    location: 'Tehran, Iran',
    start: 'Jul 2022',
    end: 'Jun 2023',
    highlights: [
      'Full-stack work on an ECG analysis platform: Express.js services on PostgreSQL, with Angular and Vue front ends.',
      'Built clinician-facing review tooling and the APIs behind it, including role-based access to patient records.',
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'Iranian Khodro',
    note: 'Full-time',
    location: 'Tehran, Iran',
    mode: 'Remote',
    start: 'May 2021',
    end: 'Apr 2023',
    highlights: [
      'Front-end development on internal applications for a large car manufacturer, in Angular.',
      'Built task-management and workflow screens used daily by operational staff.',
    ],
  },
  {
    title: 'Back End Developer & System Designer',
    org: 'Zist Pardazesh Nasir',
    location: 'Tehran, Iran',
    start: 'Jan 2021',
    end: 'Dec 2022',
    highlights: [
      'Designed the system architecture for a subscription telecardiology service and implemented its back end in Go and Express.js.',
      "Ingested readings from the company's heart-analysis device, ran the research team's formulas over them, and routed the results to a cardiologist, cutting the manual review load per patient.",
      'Used RabbitMQ for asynchronous processing and MongoDB for storage; built the scheduling flow for follow-up calls, meetings and chat.',
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'Iranian Khodro (Modiran Khodro)',
    location: 'Tehran, Iran',
    start: 'Mar 2019',
    end: 'Jul 2021',
    highlights: [
      'Built the Angular (Nebular) front end of an employee application covering task management, assignment and insurance-policy integration.',
      'Implemented the used-car trade-in flow with instalment payment options, coordinated across several back-end services.',
    ],
  },
  {
    title: 'Back End Developer',
    org: 'Meghyas',
    note: 'Part-time',
    location: 'Tehran, Iran',
    start: 'Dec 2020',
    end: 'May 2021',
    highlights: [
      "Back-end development and maintenance on the company's market-data services.",
      'Worked on ingestion and API layers used by the client applications.',
    ],
  },
  {
    title: 'Developer',
    org: 'Kian Tejarat Sharif Co.',
    note: 'Part-time',
    location: 'Tehran, Iran',
    start: 'Jul 2019',
    end: 'Jan 2020',
    highlights: [
      'Built and maintained internal web tooling for a trading business.',
      'Handled data integration between internal systems and external providers.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Meghyas (Rasad Bazar)',
    location: 'Tehran, Iran',
    start: 'Feb 2019',
    end: 'Dec 2019',
    highlights: [
      'Built a stock-market analysis platform for the Tehran exchange that turned Telegram signal channels into buy/sell recommendations.',
      'Ran a fleet of Telegram bots that recorded every message and forwarded it to a sentiment-analysis service, which scored each stock.',
      'Used Kong as the API gateway with RabbitMQ, Kafka and Redis for message flow and caching.',
    ],
  },
];

export const EDUCATION: Degree[] = [
  {
    degree: 'MSc Computer Science',
    detail: 'Laurea Magistrale, LM-18',
    school: 'Università degli Studi di Milano',
    location: 'Milan, Italy',
    period: '2023 – 2026',
    notes: ['Graduated July 2026', 'Thesis: trust management with negative requirements'],
  },
  {
    degree: 'BSc Computer Engineering',
    school: 'K. N. Toosi University of Technology',
    location: 'Tehran, Iran',
    period: '2018 – 2023',
    notes: [],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Go', 'Python', 'TypeScript/JavaScript', 'PHP', 'Java', 'C++'] },
  { group: 'Back end', items: ['Express.js', 'Django', 'Spring Boot', 'Symfony/PHP', 'REST APIs'] },
  { group: 'Front end', items: ['React', 'React Native', 'Angular', 'Vue'] },
  { group: 'Infrastructure', items: ['Kubernetes', 'Docker', 'AWS', 'Grafana', 'CI/CD', 'Linux'] },
  {
    group: 'Messaging & data',
    items: ['Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    group: 'Automation',
    items: ['Playwright', 'Robocorp', 'Web scraping', 'RPA', 'Data extraction'],
  },
];

export const LANGUAGES = [
  { name: 'English', level: 'C1, working language' },
  { name: 'Persian', level: 'Native' },
  { name: 'Italian', level: 'Basic (A1)' },
];
