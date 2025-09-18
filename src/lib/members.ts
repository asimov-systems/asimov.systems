const teamMembers = [
  {
    name: 'Talal Thabet',
    role: 'Commercial Founder',
    bio: 'Serial entrepreneur and strategic operator with nine startups under his belt, including five successful exits across multiple industries. Brings deep expertise in economics, go-to-market strategy, perception management, strategic investment, FDI, and high-performance team design.',
    quote:
      '“I’ve seen how noise and hype derail great ideas. For me, commercial success isn’t just about big vision - but about turning it into real-world, trusted, actionable clarity and credibility.”',
    image: '/team/img_tt.jpg',
    links: {
      twitter: 'https://x.com/TalalThabet',
      linkedin: 'https://linkedin.com/in/talalmsthabet'
    },
    highlights: [
      'CEO of a New York–based consultancy, advised governments, royalty, and Fortune 500 leaders',
      'Successfully navigated the 2008/09 financial crisis during four-year expansion',
      'Featured speaker at Blockchain Expo Europe',
      "Featured on Dubai Eye 103.8 FM's Business Breakfast"
    ]
  },
  {
    name: 'Arto Bendiken',
    role: 'Tech Founder',
    bio: 'Cypherpunk, open-source advocate, and knowledge graph pioneer with over 25 years in cryptography, decentralized systems, and structured data. Creator of The Unlicense and co-founder of Aurora Labs, helping launch Ethereum compatibility on NEAR.',
    image: '/team/img_ab.jpg',
    quote:
      "“For 25 years, I've built systems that respect knowledge, privacy, and agency. I'm building ASIMOV because intelligence without provenance is propaganda.”",
    links: {
      twitter: 'https://x.com/bendiken',
      linkedin: 'https://linkedin.com/in/arto',
      website: 'https://ar.to/',
      github: 'https://github.com/artob'
    },
    highlights: [
      'Creator of The Unlicense - radical open-source licensing model',
      'Built three successful startups: Datagraph, Aurora Labs, Haltia.AI',
      'Worked on mission-critical software for European Space Agency and U.S. Navy',
      "Co-led launch of NEAR's EVM with 20× lower execution costs"
    ]
  },
  {
    name: 'Renan Khoury',
    role: 'Head of Human Resources & Talent Acquisition',
    bio: 'Global talent strategist with experience scaling organizations in high-growth environments. Formerly Head of Talent Acquisition at Pando Group, supporting 700+ FTEs across multiple geographies with clients including Solana, FTX, and BAI YUE Entertainment.',
    quote:
      '“I believe teams thrive when every person’s skill and story are valued. I’m here so the next wave of AI is built with human purpose, not just code.”',
    image: '/team/img_rk.jpg',
    links: {
      twitter: 'https://x.com/renankhoury',
      linkedin: 'https://linkedin.com/in/renankhoury'
    },
    highlights: [
      'SHRM-SCP certified with expertise in high-volume technical hiring',
      'Experience spans UAE, LATAM, USA, and Europe',
      'Featured Speaker at Blockchain Economy Summit',
      'Advocates for integrating AI into recruitment processes'
    ]
  },
  {
    name: 'Matt Hamilton',
    role: 'Head of Developer Growth & Engineering',
    bio: 'Veteran DevRel leader and engineer with 20+ years of experience in software development, blockchain, and AI/ML. Has built and led global developer communities for major protocols including Arbitrum, Bittensor, Protocol Labs, and Ripple.',
    image: '/team/img_mh.jpeg',
    links: {
      twitter: 'https://x.com/hammertoe',
      linkedin: 'https://linkedin.com/in/matthamilton77'
    },
    highlights: [
      "Launched and scaled XRP Ledger's developer program",
      "Worked on Filecoin's Virtual Machine (FVM) and Interplanetary Consensus (IPC)",
      'Led developer onboarding for Arbitrum L2/L3 solutions',
      'Pioneer in decentralized compute and storage solutions'
    ]
  },
  {
    name: 'Emma Rymer',
    role: 'Head of Comms',
    bio: 'Veteran communications strategist with 30+ years of experience building communication teams and growing market presence for multinationals, blue-chip brands, and high-growth startups. Cross-sector career spans technology, finance, oil & gas, luxury retail, and more.',
    quote:
      '“I’ve shaped stories across three continents and dozens of industries - if people can’t understand it or trust it, it doesn’t matter how clever your tech is.”',
    image: '/team/img_er.jpeg',
    links: {
      twitter: 'https://x.com/emmarymer',
      linkedin: 'https://linkedin.com/in/emma-rymer-68864384'
    },
    highlights: [
      'Produced 22 original articles in 10 months at Haltia.AI',
      'Secured coverage in top-tier international tech and business media',
      'Expert in translating complex technology into compelling narratives',
      'Experience across Europe, Middle East, and Asia'
    ]
  },
  {
    name: 'Reid Fletcher',
    role: 'Head of Community',
    bio: 'Growth-focused community strategist with proven track record in scaling engaged ecosystems for blockchain, gaming, and emerging technology ventures. Experience at Morph, Gate.io, and Combat Waffle Studios.',
    quote:
      '“Community is more than a KPI; it’s how ideas are stress-tested, improved, and made inclusive. That’s how real adoption happens.”',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    links: {
      twitter: 'https://x.com/LxKus',
      linkedin: 'https://linkedin.com/in/reid-fletcher'
    },
    highlights: [
      'Built scalable programs boosting user adoption and retention',
      'Expert in developer relations and ambassador programs',
      'People-first approach with operational precision',
      'Specialist in hackathons and educational campaigns'
    ]
  },
  {
    name: 'Stephen Cobb',
    role: 'Senior AI Ethicist & Business Analyst',
    bio: 'Senior AI ethicist and business analyst with 20 years of international experience across business, diplomatic, academic, and non-profit sectors. Spent two decades at major aerospace corporation in arms control and corporate education.',
    quote:
      "“My career in safety and governance taught me: if you can't explain and defend a system, it will never serve everyone fairly.”",
    image: '/team/img_sk.jpeg',
    links: {
      twitter: 'https://x.com/simplulo',
      linkedin: 'https://linkedin.com/in/stephencobbpmp'
    },
    highlights: [
      'Original organizer of the Free State Project (FSP)',
      'Treasurer and parliamentarian at Center for Election Science',
      'Vocal advocate for the "Right to Compute"',
      'Expert in voting theory and AI ethics'
    ]
  }
];

const advisors = [
  {
    name: 'Joshua J. Bouw',
    role: 'Blackcoin, NEAR',
    title: '"Godfather of Proof-of-Stake"',
    bio: 'Known as the "Godfather of Proof-of-Stake" for co-founding Blackcoin, the first PoS blockchain. Core contributor on NEAR Protocol\'s EVM team and headed Aurora\'s development.',
    image: '/advisors/joshua-bouw.jpg',
    links: {
      twitter: 'https://x.com/JoshuaJBouw',
      linkedin: 'https://linkedin.com/in/joshuajbouw'
    }
  },
  {
    name: 'Alex Ye',
    role: 'Republic Crypto',
    title: 'Hokage',
    bio: 'Seasoned expert in blockchain economics serving as Hokage at Republic Crypto. Leads early-stage research, investments, and economic design.',
    image: '/advisors/alex-ye.jpg',
    links: {
      twitter: 'https://x.com/laoganpapi',
      linkedin: 'https://linkedin.com/in/laoganpapi'
    }
  },
  {
    name: 'Azeem Khan',
    role: 'Miden, Morph, Gitcoin',
    title: '"2023 Face of Crypto Philanthropy"',
    bio: 'Recognized as one of the "2023 Faces of Crypto Philanthropy." Co-Founder of Miden, a privacy-first blockchain protocol backed by $25M seed round co-led by a16z crypto.',
    image: '/advisors/azeem-khan.jpg',
    links: {
      twitter: 'https://x.com/azeemk_',
      linkedin: 'https://linkedin.com/in/theazeemkhan'
    }
  },
  {
    name: 'Matt Henderson',
    role: 'Aurora',
    title: 'Co-founder',
    bio: 'Seasoned innovator with background spanning over two decades at intersection of innovation, technology, and design. Co-founded Aurora EVM blockchain built on NEAR Protocol.',
    image: '/advisors/matt-henderson.jpg',
    links: {
      twitter: 'https://x.com/dafacto',
      linkedin: 'https://linkedin.com/in/dafacto'
    }
  },
  {
    name: 'Arturo Rodriguez',
    role: 'AusDeFi, NotCentralized',
    title: 'Co-founder',
    bio: 'Co-founder of NotCentralised and Australian DeFi Association with over 20 years of experience in tech, capital markets, and data science.',
    image: '/advisors/arturo-rodriguez.jpg',
    links: {
      twitter: 'https://x.com/NumbersDeFi',
      linkedin: 'https://linkedin.com/in/ar-code'
    }
  },
  {
    name: 'Mark Monfort',
    role: 'Sike, AusDeFi',
    title: 'Co-founder & President',
    bio: 'Co-founder of NotCentralised and president of Australian DeFi Association. Board member of Data Science and AI Association of Australia.',
    image: '/advisors/mark-monfort.jpg',
    links: {
      twitter: 'https://x.com/CaptDeFi',
      linkedin: 'https://linkedin.com/in/markmonfort'
    }
  }
];

export { teamMembers, advisors };
