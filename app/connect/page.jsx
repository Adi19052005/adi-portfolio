const contacts = [
  { name: 'LinkedIn', handle: 'Professional profile and messages', href: 'https://www.linkedin.com/in/aditya-solunke/', mark: 'in' },
  { name: 'GitHub', handle: 'Code, repositories, and projects', href: 'https://github.com/Adi19052005', mark: 'GH' },
  { name: 'LeetCode', handle: 'Problem solving and contest rating', href: 'https://leetcode.com/u/adityasolunke1905/', mark: 'LC' },
  { name: 'Don’t Just Learn', handle: 'Technical learning and education', href: 'https://www.instagram.com/dontjustlearn.dev/', mark: '↗' },
];

export const metadata = {
  title: 'Connect — Aditya Solunke',
  description: 'Connect with Aditya Solunke on LinkedIn, GitHub, LeetCode, and Don’t Just Learn.',
};

export default function ConnectPage() {
  return <main className="subpage connect-page">
    <header className="subpage-nav"><a className="site-name" href="/">Aditya Solunke</a><a href="/">← Back to portfolio</a></header>
    <section className="connect-hero">
      <p className="eyebrow"><span className="status-dot"/> OPEN A CONVERSATION</p>
      <h1>Find me<br/><em>around the web.</em></h1>
      <p className="subpage-lede">Choose the place that works best for you.</p>
    </section>
    <section className="contact-links" aria-label="Ways to connect">
      {contacts.map((contact, index) => <a className="contact-link-card" href={contact.href} key={contact.name} target="_blank" rel="noreferrer">
        <span className="contact-index">0{index + 1}</span><span className="contact-mark" aria-hidden="true">{contact.mark}</span>
        <span className="contact-copy"><strong>{contact.name}</strong><small>{contact.handle}</small></span><span className="contact-arrow" aria-hidden="true">↗</span>
      </a>)}
    </section>
    <footer className="subpage-footer"><span>ADITYA SOLUNKE</span><a href="/leetcode">LeetCode page ↗</a><a href="/">Portfolio home ↑</a></footer>
  </main>;
}
