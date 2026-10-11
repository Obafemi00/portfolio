export type Phase = {
  num: string;
  title: string;
  p1: string;
  p2: string;
  deliverables: string[];
  summaryItems: string[];
};

export const phases: Phase[] = [
  {
    num: '01',
    title: 'Discover',
    p1: 'We start by understanding the business before touching the screen: what the site needs to do, who it serves, and what is already in place.',
    p2: 'We audit the current site, talk to the people who use it, and scope the technical work so the estimate reflects reality.',
    deliverables: ['Goals', 'Audits', 'Stakeholder interviews', 'Technical scoping'],
    summaryItems: ['Project brief', 'Site audit', 'Technical scope'],
  },
  {
    num: '02',
    title: 'Define',
    p1: 'Findings become a plan. We map the structure of the site, decide what content it needs, and write down the technical requirements.',
    p2: 'We agree on how success will be measured before design starts, so every later decision has a reference point.',
    deliverables: ['Information architecture', 'Content strategy', 'Technical requirements', 'Success metrics'],
    summaryItems: ['Sitemap', 'Content plan', 'Requirements document', 'Success metrics'],
  },
  {
    num: '03',
    title: 'Design',
    p1: 'Wireframes settle structure first. Visual direction follows, built on the brand and tested against real content.',
    p2: 'We prototype key interactions so you can click through the experience before any production code is written.',
    deliverables: ['Wireframes', 'Visual direction', 'Interaction design', 'Prototypes'],
    summaryItems: ['Wireframes', 'Visual design', 'Clickable prototype'],
  },
  {
    num: '04',
    title: 'Develop',
    p1: 'We build in short cycles with regular reviews, so you see progress every week and feedback lands while it is cheap to act on.',
    p2: 'Every build goes through QA, performance, and accessibility passes before it is considered done.',
    deliverables: ['Build', 'Review cycles', 'QA', 'Performance and accessibility passes'],
    summaryItems: ['Production build', 'QA report', 'Performance and accessibility report'],
  },
  {
    num: '05',
    title: 'Deploy',
    p1: 'Launch is planned, not improvised. We prepare DNS, SSL, redirects, and analytics ahead of the switch.',
    p2: 'After launch we hand over credentials, documentation, and a walkthrough so your team knows how everything works.',
    deliverables: ['Launch preparation', 'DNS', 'SSL', 'Analytics', 'Handover'],
    summaryItems: ['Live site', 'Analytics setup', 'Handover documentation'],
  },
  {
    num: '06',
    title: 'Manage',
    p1: 'A site needs care after launch. We handle maintenance, security updates, and performance monitoring on an ongoing basis.',
    p2: 'Content updates and small improvements run on retainer, so the site keeps pace with the business.',
    deliverables: ['Ongoing maintenance', 'Security', 'Performance monitoring', 'Content updates'],
    summaryItems: ['Monthly maintenance', 'Uptime and security monitoring', 'Content updates'],
  },
];
