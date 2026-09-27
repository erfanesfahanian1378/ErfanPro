// Your CV as data, in English (en), Italian (it) and Persian (fa).
// The home page shows the main roles and the /cv/ page shows everything.
// Newest first within each list: the order here is the order on the site.
import type { Localized, MaybeLocalized } from '../i18n/config';

export interface Role {
  title: Localized;
  org: MaybeLocalized;
  /** Extra context shown next to the location, e.g. team or contract type. */
  note?: Localized;
  location: Localized;
  /** Remote / Hybrid; leave out for on-site roles. */
  mode?: Localized;
  /** Year and month, e.g. "2025-07". */
  start: string;
  /** Year and month, or "present". */
  end: string;
  highlights: Localized[];
}

export interface Degree {
  degree: Localized;
  detail?: Localized;
  school: Localized;
  location: Localized;
  period: string;
  notes: Localized[];
}

const MILAN: Localized = { en: 'Milan, Italy', it: 'Milano, Italia', fa: 'میلان، ایتالیا' };
const TEHRAN: Localized = { en: 'Tehran, Iran', it: 'Teheran, Iran', fa: 'تهران، ایران' };
const NEW_YORK: Localized = { en: 'New York, United States', it: 'New York, Stati Uniti', fa: 'نیویورک، ایالات متحده' };
const REMOTE: Localized = { en: 'Remote', it: 'Da remoto', fa: 'دورکاری' };
const HYBRID: Localized = { en: 'Hybrid', it: 'Ibrido', fa: 'ترکیبی' };
const PART_TIME: Localized = { en: 'Part-time', it: 'Part-time', fa: 'پاره‌وقت' };
const UPWORK_CONTRACT: Localized = { en: 'Upwork · Contract', it: 'Upwork · Contratto', fa: 'Upwork · قراردادی' };

export const PROFILE: Localized[] = [
  {
    en: 'Software engineer with production experience since 2019, currently a back-end engineer at MotorK in Milan working in Python and PHP. Much of my work has been TypeScript and Node.js on the server with React or React Native on the client, backed by PostgreSQL, MongoDB and Redis.',
    it: 'Software engineer con esperienza in produzione dal 2019, oggi back-end engineer in MotorK a Milano, dove lavoro con Python e PHP. Ho lavorato soprattutto con TypeScript e Node.js lato server e React o React Native lato client, con PostgreSQL, MongoDB e Redis.',
    fa: 'مهندس نرم‌افزار با تجربهٔ کار روی سیستم‌های عملیاتی از سال ۲۰۱۹؛ در حال حاضر مهندس بک‌اند در MotorK در میلان و مشغول کار با Python و PHP. بیشتر کارم با TypeScript و Node.js در سمت سرور و React یا React Native در سمت کاربر بوده، همراه با PostgreSQL، MongoDB و Redis.',
  },
  {
    en: 'I design systems for load, with queues, caches and load balancers (Kafka, RabbitMQ, Redis), and I have built and owned internal platform tooling: scraping and RPA pipelines, CI/CD, Grafana dashboards and alerting. I am comfortable being the engineer other teams depend on rather than the one shipping the front page. MSc in Computer Science, Università degli Studi di Milano, completed July 2026.',
    it: 'Progetto sistemi pensati per reggere il carico, con code, cache e load balancer (Kafka, RabbitMQ, Redis), e ho realizzato e gestito strumenti interni di piattaforma: pipeline di scraping e RPA, CI/CD, dashboard e alert su Grafana. Mi trovo a mio agio come punto di riferimento per gli altri team più che come chi sviluppa la home page. Laurea magistrale in Informatica, Università degli Studi di Milano, conseguita a luglio 2026.',
    fa: 'سیستم‌هایی طراحی می‌کنم که زیر بار سنگین پایدار بمانند، با صف‌ها، کش‌ها و load balancerها (Kafka، RabbitMQ، Redis)، و ابزارهای داخلی زیرساخت را ساخته و مسئولیتشان را بر عهده داشته‌ام: پایپ‌لاین‌های اسکرپینگ و RPA، CI/CD، داشبوردها و هشدارهای Grafana. ترجیح می‌دهم مهندسی باشم که تیم‌های دیگر به او تکیه می‌کنند تا کسی که صفحهٔ اول سایت را می‌سازد. کارشناسی ارشد علوم کامپیوتر از دانشگاه میلان (Università degli Studi di Milano)، فارغ‌التحصیل ژوئیهٔ ۲۰۲۶.',
  },
];

/** Main roles, shown on the home page and first on the CV. */
export const EXPERIENCE: Role[] = [
  {
    title: { en: 'Software Engineer', it: 'Software Engineer', fa: 'مهندس نرم‌افزار' },
    org: 'MotorK Italia',
    note: { en: 'Leadspark team', it: 'Team Leadspark', fa: 'تیم Leadspark' },
    location: MILAN,
    mode: HYBRID,
    start: '2025-07',
    end: 'present',
    highlights: [
      {
        en: "Back-end engineer on Leadspark, MotorK's automotive lead-management product, building the PHP and Python services behind its CRM integrations for European dealer groups.",
        it: 'Back-end engineer su Leadspark, il prodotto di lead management di MotorK per il settore automotive: sviluppo i servizi PHP e Python alla base delle integrazioni CRM per i gruppi di concessionari europei.',
        fa: 'مهندس بک‌اند در Leadspark، محصول مدیریت سرنخ‌های فروش MotorK در صنعت خودرو؛ ساخت سرویس‌های PHP و Python پشت یکپارچه‌سازی‌های CRM برای گروه‌های نمایندگی خودرو در اروپا.',
      },
      {
        en: 'Build and operate the integration layer that pushes and reconciles leads with third-party dealer CRMs through their APIs, handling partial failures, retries and idempotent replays.',
        it: 'Sviluppo e gestisco il livello di integrazione che invia e riconcilia i lead con i CRM dei concessionari tramite le loro API, gestendo errori parziali, retry e replay idempotenti.',
        fa: 'ساخت و نگهداری لایهٔ یکپارچه‌سازی که سرنخ‌ها را از طریق API به CRMهای نمایندگی‌ها می‌فرستد و با آن‌ها همگام می‌کند، با مدیریت خطاهای جزئی، تلاش مجدد (retry) و بازپخش idempotent.',
      },
      {
        en: 'Use Redis for caching and shared state between the PHP and Python services, keeping the integration and scraping workloads fast under load.',
        it: 'Uso Redis per la cache e lo stato condiviso tra i servizi PHP e Python, così i carichi di integrazione e scraping restano veloci anche sotto carico.',
        fa: 'استفاده از Redis برای کش و وضعیت مشترک بین سرویس‌های PHP و Python تا بارهای کاری یکپارچه‌سازی و اسکرپینگ زیر فشار هم سریع بمانند.',
      },
      {
        en: 'Own the Python web-scraping and RPA automation stack (Playwright, Robocorp) that extracts, cleans and normalises listing and dealer data at scale.',
        it: 'Sono responsabile dello stack Python di web scraping e automazione RPA (Playwright, Robocorp) che estrae, pulisce e normalizza su larga scala i dati di annunci e concessionari.',
        fa: 'مسئول زیرساخت Python برای وب‌اسکرپینگ و اتوماسیون RPA (Playwright، Robocorp) که داده‌های آگهی‌ها و نمایندگی‌ها را در مقیاس بالا استخراج، پاک‌سازی و نرمال‌سازی می‌کند.',
      },
      {
        en: 'Run containerised services on Kubernetes and AWS, monitor them with Grafana dashboards and alerts, and take part in production triage.',
        it: 'Gestisco servizi containerizzati su Kubernetes e AWS, li monitoro con dashboard e alert su Grafana e partecipo al triage in produzione.',
        fa: 'اجرای سرویس‌های کانتینری روی Kubernetes و AWS، پایش آن‌ها با داشبوردها و هشدارهای Grafana و مشارکت در رفع مشکلات محیط production.',
      },
    ],
  },
  {
    title: {
      en: 'System Architect & Back-end Developer',
      it: 'System Architect e Sviluppatore Back-end',
      fa: 'معمار سیستم و توسعه‌دهندهٔ بک‌اند',
    },
    org: 'Wormpost',
    location: NEW_YORK,
    mode: REMOTE,
    start: '2024-10',
    end: '2025-06',
    highlights: [
      {
        en: 'Designed the system architecture and built the back end of an AI customer-service product, splitting the platform into microservices behind a Kong API gateway.',
        it: "Ho progettato l'architettura di sistema e sviluppato il back end di un prodotto di customer service basato sull'IA, suddividendo la piattaforma in microservizi dietro un API gateway Kong.",
        fa: 'طراحی معماری سیستم و ساخت بک‌اند یک محصول پشتیبانی مشتری مبتنی بر هوش مصنوعی و تقسیم پلتفرم به میکروسرویس‌ها پشت Kong API gateway.',
      },
      {
        en: 'Balanced the load across services with load balancers, Kafka for event streaming and queueing, Redis for caching and rate limiting, and PostgreSQL and MongoDB as the databases.',
        it: "Ho bilanciato il carico tra i servizi con load balancer, Kafka per l'event streaming e le code, Redis per cache e rate limiting, e PostgreSQL e MongoDB come database.",
        fa: 'توزیع بار بین سرویس‌ها با load balancerها، Kafka برای event streaming و صف‌ها، Redis برای کش و محدودسازی نرخ درخواست (rate limiting)، و PostgreSQL و MongoDB به‌عنوان پایگاه داده.',
      },
      {
        en: 'Wrote services in Go, Express.js and Django, and built the AI agent pipeline that handled customer conversations, including retrieval and tool-calling paths.',
        it: "Ho scritto servizi in Go, Express.js e Django e ho sviluppato la pipeline dell'agente IA che gestiva le conversazioni con i clienti, inclusi i percorsi di retrieval e tool calling.",
        fa: 'نوشتن سرویس‌ها با Go، Express.js و Django و ساخت پایپ‌لاین ایجنت هوش مصنوعی برای مدیریت گفتگو با مشتریان، شامل مسیرهای retrieval و tool calling.',
      },
      {
        en: 'Extended the architecture to Worm, a second product line on the same gateway and event-streaming layer, and documented the integration contracts for downstream teams.',
        it: "Ho esteso l'architettura a Worm, una seconda linea di prodotto sullo stesso gateway e livello di event streaming, e ho documentato i contratti di integrazione per i team a valle.",
        fa: 'گسترش معماری به Worm، خط محصول دوم روی همان gateway و لایهٔ event streaming، و مستندسازی قراردادهای یکپارچه‌سازی برای تیم‌های دیگر.',
      },
    ],
  },
  {
    title: {
      en: 'System Designer & Full-stack Developer',
      it: 'System Designer e Sviluppatore Full-stack',
      fa: 'طراح سیستم و توسعه‌دهندهٔ فول‌استک',
    },
    org: 'Zistel (Zist Pardazesh Nasir)',
    location: TEHRAN,
    start: '2021-01',
    end: '2023-06',
    highlights: [
      {
        en: 'Designed the system architecture for a subscription telecardiology service and built its back end in Go and Express.js.',
        it: "Ho progettato l'architettura di sistema di un servizio di telecardiologia in abbonamento e ne ho sviluppato il back end in Go ed Express.js.",
        fa: 'طراحی معماری سیستم یک سرویس اشتراکی تله‌کاردیولوژی (پایش قلب از راه دور) و ساخت بک‌اند آن با Go و Express.js.',
      },
      {
        en: "Ingested readings from the company's heart-analysis device, ran the research team's formulas over them and routed the results to a cardiologist, cutting the manual review load per patient.",
        it: "Acquisivo le letture del dispositivo di analisi cardiaca dell'azienda, vi applicavo le formule del team di ricerca e inoltravo i risultati a un cardiologo, riducendo il carico di revisione manuale per paziente.",
        fa: 'دریافت داده‌های دستگاه تحلیل قلب شرکت، اجرای فرمول‌های تیم پژوهشی روی آن‌ها و ارسال نتایج به متخصص قلب، که حجم بررسی دستی برای هر بیمار را کاهش داد.',
      },
      {
        en: 'Full-stack work on the ECG analysis platform: Express.js services on PostgreSQL with Angular and Vue front ends, including clinician-facing review tooling with role-based access to patient records.',
        it: 'Sviluppo full-stack sulla piattaforma di analisi ECG: servizi Express.js su PostgreSQL con front end Angular e Vue, inclusi strumenti di revisione per i medici con accesso basato sui ruoli alle cartelle dei pazienti.',
        fa: 'توسعهٔ فول‌استک پلتفرم تحلیل نوار قلب (ECG): سرویس‌های Express.js روی PostgreSQL با فرانت‌اندهای Angular و Vue، از جمله ابزارهای بررسی برای پزشکان با دسترسی نقش‌محور به پرونده‌های بیماران.',
      },
      {
        en: 'Used RabbitMQ for asynchronous processing and MongoDB for storage, and built the scheduling flow for follow-up calls, meetings and chat.',
        it: "Ho usato RabbitMQ per l'elaborazione asincrona e MongoDB per lo storage, e ho sviluppato il flusso di pianificazione per chiamate di follow-up, incontri e chat.",
        fa: 'استفاده از RabbitMQ برای پردازش ناهمگام و MongoDB برای ذخیره‌سازی، و ساخت فرایند زمان‌بندی تماس‌های پیگیری، جلسات و چت.',
      },
    ],
  },
  {
    title: { en: 'Full-stack Developer', it: 'Sviluppatore Full-stack', fa: 'توسعه‌دهندهٔ فول‌استک' },
    org: 'Iranian Khodro',
    location: TEHRAN,
    start: '2019-03',
    end: '2023-04',
    highlights: [
      {
        en: 'Full-stack development on internal applications for a large car manufacturer: Angular front ends backed by C# and Go services.',
        it: 'Sviluppo full-stack di applicazioni interne per una grande casa automobilistica: front end Angular con servizi in C# e Go.',
        fa: 'توسعهٔ فول‌استک اپلیکیشن‌های داخلی برای یک خودروساز بزرگ: فرانت‌اند Angular با سرویس‌های C# و Go.',
      },
      {
        en: 'Built the Angular (Nebular) employee application for Modiran Khodro, covering task management, assignment and insurance-policy integration, plus workflow screens used daily by operational staff.',
        it: "Ho sviluppato in Angular (Nebular) l'applicazione per i dipendenti di Modiran Khodro, con gestione e assegnazione delle attività e integrazione delle polizze assicurative, oltre a schermate di workflow usate ogni giorno dal personale operativo.",
        fa: 'ساخت اپلیکیشن کارکنان Modiran Khodro با Angular (Nebular) شامل مدیریت و تخصیص وظایف و یکپارچه‌سازی بیمه‌نامه‌ها، به‌علاوهٔ صفحه‌های گردش کار که کارکنان عملیاتی هر روز از آن‌ها استفاده می‌کردند.',
      },
      {
        en: 'Implemented the used-car trade-in flow with instalment payment options, coordinated across several back-end services.',
        it: 'Ho implementato il flusso di permuta delle auto usate con pagamento rateale, coordinato tra diversi servizi back-end.',
        fa: 'پیاده‌سازی فرایند معاوضهٔ خودروی کارکرده با امکان پرداخت اقساطی، هماهنگ بین چند سرویس بک‌اند.',
      },
    ],
  },
  {
    title: {
      en: 'System Architect & Back-end Engineer',
      it: 'System Architect e Back-end Engineer',
      fa: 'معمار سیستم و مهندس بک‌اند',
    },
    org: 'Meghyas (Rasad Bazar)',
    location: TEHRAN,
    start: '2019-02',
    end: '2021-05',
    highlights: [
      {
        en: 'Designed the architecture and built the back end of a stock-market analysis platform for the Tehran exchange that turned Telegram signal channels into buy/sell recommendations, designed to handle 10,000 users at the same time.',
        it: "Ho progettato l'architettura e sviluppato il back end di una piattaforma di analisi per la Borsa di Teheran che trasformava i canali di segnali di Telegram in raccomandazioni di acquisto e vendita, progettata per gestire 10.000 utenti in contemporanea.",
        fa: 'طراحی معماری و ساخت بک‌اند یک پلتفرم تحلیل بورس تهران که سیگنال‌های کانال‌های تلگرامی را به پیشنهاد خرید و فروش تبدیل می‌کرد و برای پاسخ‌گویی هم‌زمان به ۱۰٬۰۰۰ کاربر طراحی شده بود.',
      },
      {
        en: 'Ran a fleet of Telegram bots that recorded every message and forwarded it to a sentiment-analysis service, which scored each stock.',
        it: 'Gestivo una flotta di bot Telegram che registravano ogni messaggio e lo inoltravano a un servizio di sentiment analysis che assegnava un punteggio a ogni titolo.',
        fa: 'راه‌اندازی مجموعه‌ای از ربات‌های تلگرام که همهٔ پیام‌ها را ثبت و برای سرویس تحلیل احساسات ارسال می‌کردند تا به هر سهم امتیاز بدهد.',
      },
      {
        en: "Used Kong as the API gateway with RabbitMQ, Kafka and Redis for message flow and caching, and maintained the ingestion and API layers of the company's market-data services.",
        it: "Ho usato Kong come API gateway con RabbitMQ, Kafka e Redis per il flusso dei messaggi e la cache, e ho mantenuto i livelli di ingestion e API dei servizi di dati di mercato dell'azienda.",
        fa: 'استفاده از Kong به‌عنوان API gateway همراه با RabbitMQ، Kafka و Redis برای جریان پیام‌ها و کش، و نگهداری لایه‌های دریافت داده و API سرویس‌های دادهٔ بازار شرکت.',
      },
    ],
  },
];

/** Freelance, contract, side and part-time work, shown after the main roles on the CV. */
export const OTHER_EXPERIENCE: Role[] = [
  {
    title: { en: 'Full Stack Engineer', it: 'Full Stack Engineer', fa: 'مهندس فول‌استک' },
    org: { en: 'GetSpoused dating app', it: 'App di incontri GetSpoused', fa: 'اپلیکیشن همسریابی GetSpoused' },
    note: UPWORK_CONTRACT,
    location: MILAN,
    mode: REMOTE,
    start: '2024-04',
    end: '2025-10',
    highlights: [
      {
        en: 'Sole engineer on a production dating app, delivered end to end: React Native clients for iOS and Android plus a React marketing site.',
        it: "Unico sviluppatore di un'app di incontri in produzione, realizzata da cima a fondo: client React Native per iOS e Android più un sito di marketing in React.",
        fa: 'تنها مهندس یک اپلیکیشن همسریابی در حال اجرا که آن را از ابتدا تا انتها ساختم: کلاینت‌های React Native برای iOS و Android و یک سایت معرفی با React.',
      },
      {
        en: 'Built the Express.js back end on MongoDB with Redis caching and RabbitMQ for matching, notifications and media processing.',
        it: "Ho sviluppato il back end Express.js su MongoDB con cache Redis e RabbitMQ per matching, notifiche ed elaborazione dei media.",
        fa: 'ساخت بک‌اند Express.js روی MongoDB با کش Redis و RabbitMQ برای تطبیق کاربران، اعلان‌ها و پردازش رسانه.',
      },
      {
        en: 'Designed the matching and messaging data model and shipped the whole product on roughly 20 hours a week.',
        it: "Ho progettato il modello dati di matching e messaggistica e ho rilasciato l'intero prodotto lavorando circa 20 ore a settimana.",
        fa: 'طراحی مدل دادهٔ تطبیق و پیام‌رسانی و تحویل کل محصول با حدود ۲۰ ساعت کار در هفته.',
      },
    ],
  },
  {
    title: { en: 'Freelance Developer', it: 'Sviluppatore freelance', fa: 'توسعه‌دهندهٔ فریلنسر' },
    org: 'Upwork',
    note: PART_TIME,
    location: MILAN,
    mode: REMOTE,
    start: '2024-08',
    end: '2025-01',
    highlights: [
      {
        en: 'MERN-stack delivery work for several clients: MongoDB, Express.js, React and Node.js.',
        it: 'Progetti MERN per diversi clienti: MongoDB, Express.js, React e Node.js.',
        fa: 'انجام پروژه‌های MERN برای چند مشتری: MongoDB، Express.js، React و Node.js.',
      },
      {
        en: 'Took briefs from specification to deployment, including schema design, REST APIs and hosting.',
        it: 'Ho seguito i progetti dalla specifica al rilascio, inclusi progettazione dello schema, API REST e hosting.',
        fa: 'پیشبرد پروژه‌ها از تعریف نیازمندی تا استقرار، شامل طراحی اسکیمای داده، REST API و میزبانی.',
      },
    ],
  },
  {
    title: { en: 'Co-Founder', it: 'Co-founder', fa: 'هم‌بنیان‌گذار' },
    org: 'Protein Team',
    note: { en: 'Self-employed', it: 'Lavoro autonomo', fa: 'خوداشتغال' },
    location: MILAN,
    start: '2023-12',
    end: '2024-10',
    highlights: [
      {
        en: 'Co-founded a small product studio and led its technical direction across two shipped products.',
        it: 'Ho cofondato un piccolo studio di prodotto e ne ho guidato la direzione tecnica su due prodotti rilasciati.',
        fa: 'هم‌بنیان‌گذاری یک استودیوی کوچک محصول و هدایت فنی آن در دو محصول منتشرشده.',
      },
      {
        en: 'Chose the stack, set up CI/CD and infrastructure, and wrote a large share of the back-end code myself.',
        it: 'Ho scelto lo stack, configurato CI/CD e infrastruttura e scritto io stesso gran parte del codice back-end.',
        fa: 'انتخاب استک فنی، راه‌اندازی CI/CD و زیرساخت، و نوشتن بخش بزرگی از کد بک‌اند.',
      },
    ],
  },
  {
    title: { en: 'Full Stack Engineer', it: 'Full Stack Engineer', fa: 'مهندس فول‌استک' },
    org: { en: 'Solana wallet analytics', it: 'Analisi di wallet Solana', fa: 'تحلیل کیف‌پول‌های Solana' },
    note: UPWORK_CONTRACT,
    location: MILAN,
    mode: REMOTE,
    start: '2024-03',
    end: '2024-05',
    highlights: [
      {
        en: 'Built a crawler that analysed over 10,000 Solana wallets for win rate and realised profit, then ranked them as copy-trading candidates.',
        it: 'Ho sviluppato un crawler che ha analizzato oltre 10.000 wallet Solana per win rate e profitto realizzato, classificandoli come candidati per il copy trading.',
        fa: 'ساخت خزنده‌ای (crawler) که بیش از ۱۰٬۰۰۰ کیف‌پول Solana را از نظر نرخ برد و سود محقق‌شده تحلیل و برای کپی‌تریدینگ رتبه‌بندی می‌کرد.',
      },
      {
        en: 'Worked around strict third-party API rate limits by sharding the workload across 40+ parallel workers on Kubernetes with back-off and checkpointing.',
        it: 'Ho aggirato i rigidi limiti di rate delle API di terze parti distribuendo il lavoro su oltre 40 worker paralleli su Kubernetes, con back-off e checkpointing.',
        fa: 'دور زدن محدودیت‌های سخت‌گیرانهٔ نرخ درخواست APIهای ثالث با تقسیم کار بین بیش از ۴۰ worker موازی روی Kubernetes، همراه با back-off و checkpointing.',
      },
      {
        en: 'Persisted and de-duplicated results so repeated runs were incremental rather than full re-crawls.',
        it: 'Ho salvato e deduplicato i risultati, così le esecuzioni successive erano incrementali invece di ripartire da zero.',
        fa: 'ذخیره و حذف نتایج تکراری تا اجراهای بعدی به‌صورت افزایشی انجام شوند نه از صفر.',
      },
    ],
  },
  {
    title: { en: 'Software Engineer', it: 'Software Engineer', fa: 'مهندس نرم‌افزار' },
    org: 'English Bot',
    note: { en: 'Protein Team', it: 'Protein Team', fa: 'Protein Team' },
    location: MILAN,
    start: '2023-07',
    end: '2024-03',
    highlights: [
      {
        en: 'Built a Telegram-based English tutoring platform that first matched learners of equal level and fell back to an LLM conversation partner.',
        it: 'Ho sviluppato una piattaforma di tutoraggio di inglese su Telegram che abbinava studenti dello stesso livello e, in mancanza, li faceva conversare con un LLM.',
        fa: 'ساخت یک پلتفرم آموزش زبان انگلیسی روی تلگرام که ابتدا زبان‌آموزان هم‌سطح را با هم جفت می‌کرد و در غیر این صورت یک مدل زبانی (LLM) هم‌صحبتشان می‌شد.',
      },
      {
        en: 'Self-hosted a 14B model on Ollama instead of paying per-token for OpenAI, cutting inference cost to infrastructure cost.',
        it: "Ho ospitato in autonomia un modello da 14B su Ollama invece di pagare OpenAI a token, riducendo il costo di inferenza al solo costo dell'infrastruttura.",
        fa: 'میزبانی یک مدل ۱۴ میلیارد پارامتری روی Ollama به‌جای پرداخت به‌ازای هر توکن به OpenAI، که هزینهٔ استنتاج را به هزینهٔ زیرساخت محدود کرد.',
      },
      {
        en: 'Wrote the matching engine in C++ for throughput and integrated it with the rest of the system through API gateways in a microservice layout.',
        it: "Ho scritto il motore di matching in C++ per massimizzare il throughput e l'ho integrato con il resto del sistema tramite API gateway in un'architettura a microservizi.",
        fa: 'نوشتن موتور تطبیق با C++ برای توان عملیاتی بالا و اتصال آن به بقیهٔ سیستم از طریق API gatewayها در معماری میکروسرویس.',
      },
      {
        en: 'Used Redis and Kafka for load balancing and queueing across the conversation and matching services.',
        it: 'Ho usato Redis e Kafka per il bilanciamento del carico e le code tra i servizi di conversazione e matching.',
        fa: 'استفاده از Redis و Kafka برای توزیع بار و صف‌بندی بین سرویس‌های گفتگو و تطبیق.',
      },
    ],
  },
  {
    title: { en: 'Developer', it: 'Sviluppatore', fa: 'توسعه‌دهنده' },
    org: 'Kian Tejarat Sharif Co.',
    note: PART_TIME,
    location: TEHRAN,
    start: '2019-07',
    end: '2020-01',
    highlights: [
      {
        en: 'Built and maintained internal web tooling for a trading business.',
        it: "Ho sviluppato e mantenuto strumenti web interni per un'azienda commerciale.",
        fa: 'ساخت و نگهداری ابزارهای وب داخلی برای یک شرکت بازرگانی.',
      },
      {
        en: 'Handled data integration between internal systems and external providers.',
        it: "Ho gestito l'integrazione dei dati tra i sistemi interni e i fornitori esterni.",
        fa: 'مدیریت یکپارچه‌سازی داده بین سیستم‌های داخلی و تأمین‌کنندگان خارجی.',
      },
    ],
  },
];

export const EDUCATION: Degree[] = [
  {
    degree: {
      en: 'MSc Computer Science',
      it: 'Laurea Magistrale in Informatica',
      fa: 'کارشناسی ارشد علوم کامپیوتر',
    },
    detail: { en: 'Laurea Magistrale, LM-18', it: 'LM-18', fa: 'Laurea Magistrale، LM-18' },
    school: {
      en: 'Università degli Studi di Milano',
      it: 'Università degli Studi di Milano',
      fa: 'دانشگاه میلان (Università degli Studi di Milano)',
    },
    location: MILAN,
    period: '2023 – 2026',
    notes: [
      { en: 'Graduated July 2026', it: 'Laureato a luglio 2026', fa: 'فارغ‌التحصیل ژوئیهٔ ۲۰۲۶' },
      {
        en: 'Thesis: trust management with negative requirements',
        it: 'Tesi: trust management con requisiti negativi',
        fa: 'پایان‌نامه: مدیریت اعتماد با نیازمندی‌های منفی',
      },
    ],
  },
  {
    degree: { en: 'BSc Computer Engineering', it: 'Laurea in Ingegneria Informatica', fa: 'کارشناسی مهندسی کامپیوتر' },
    school: {
      en: 'K. N. Toosi University of Technology',
      it: 'K. N. Toosi University of Technology',
      fa: 'دانشگاه صنعتی خواجه نصیرالدین طوسی',
    },
    location: TEHRAN,
    period: '2018 – 2023',
    notes: [],
  },
];

export const SKILLS: { group: Localized; items: MaybeLocalized[] }[] = [
  {
    group: { en: 'Languages', it: 'Linguaggi', fa: 'زبان‌های برنامه‌نویسی' },
    items: ['Go', 'Python', 'TypeScript/JavaScript', 'PHP', 'Java', 'C++'],
  },
  {
    group: { en: 'Back end', it: 'Back end', fa: 'بک‌اند' },
    items: ['Express.js', 'Django', 'Spring Boot', 'Symfony/PHP', { en: 'REST APIs', it: 'API REST', fa: 'REST API' }],
  },
  {
    group: { en: 'Front end', it: 'Front end', fa: 'فرانت‌اند' },
    items: ['React', 'React Native', 'Angular', 'Vue'],
  },
  {
    group: { en: 'Infrastructure', it: 'Infrastruttura', fa: 'زیرساخت' },
    items: ['Kubernetes', 'Docker', 'AWS', 'Grafana', 'CI/CD', 'Linux'],
  },
  {
    group: { en: 'Messaging & data', it: 'Messaggistica e dati', fa: 'پیام‌رسانی و داده' },
    items: ['Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    group: { en: 'Automation', it: 'Automazione', fa: 'اتوماسیون' },
    items: [
      'Playwright',
      'Robocorp',
      { en: 'Web scraping', it: 'Web scraping', fa: 'وب‌اسکرپینگ' },
      'RPA',
      { en: 'Data extraction', it: 'Estrazione dati', fa: 'استخراج داده' },
    ],
  },
];

export const LANGUAGES: { name: Localized; level: Localized }[] = [
  {
    name: { en: 'English', it: 'Inglese', fa: 'انگلیسی' },
    level: { en: 'C1, working language', it: 'C1, lingua di lavoro', fa: 'C1، زبان کاری' },
  },
  {
    name: { en: 'Persian', it: 'Persiano', fa: 'فارسی' },
    level: { en: 'Native', it: 'Madrelingua', fa: 'زبان مادری' },
  },
  {
    name: { en: 'Italian', it: 'Italiano', fa: 'ایتالیایی' },
    level: { en: 'Basic (A1)', it: 'Base (A1)', fa: 'مقدماتی (A1)' },
  },
];
