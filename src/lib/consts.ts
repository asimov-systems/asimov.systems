const socialLinks = {
  twitter: 'https://x.com/ASIMOV_Protocol',
  linkedin: 'https://www.linkedin.com/company/asimov-protocol',
  // discord: "https://discord.gg/asimov", // TODO: add Discord link when available
  github: 'https://github.com/asimov-platform',
  telegram: 'https://t.me/asimovprotocol'
};

const calendarLinks = {
  sfEvents: 'https://luma.com/asimov-sf'
};

/** Base URL for id.asimov.systems (account, dashboard, credits). */
const idAsimovSystemsUrl = 'https://id.asimov.systems';

/** Join waitlist (main / product / general). Source: mainpagewaitlist. */
const idJoinWaitlistUrl = `${idAsimovSystemsUrl}/join/mainpagewaitlist`;

/** Join as investor. Source: investorpage. Same join system, different end for attribution. */
const idJoinInvestorUrl = `${idAsimovSystemsUrl}/join/investorpage`;

export { socialLinks, calendarLinks, idAsimovSystemsUrl, idJoinWaitlistUrl, idJoinInvestorUrl };
