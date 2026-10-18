const profile = 'https://leetcode.com/u/adityasolunke1905/';

export const metadata = {
  title: 'LeetCode — Aditya Solunke',
  description: 'Aditya Solunke’s LeetCode profile and contest rating.',
};

export default function LeetCodePage() {
  return <main className="subpage leetcode-page">
    <header className="subpage-nav"><a className="site-name" href="/">Aditya Solunke</a><a href="/">← Back to portfolio</a></header>
    <section className="subpage-hero">
      <p className="eyebrow"><span className="status-dot"/> PROBLEM SOLVING · LEETCODE</p>
      <p className="eyebrow chapter-index">01 / PRACTICE</p>
      <h1>Think it<br/><em>through.</em></h1>
      <p className="subpage-lede">A place for algorithmic practice, patterns, and steady problem solving.</p>
      <a className="button" href={profile} target="_blank" rel="noreferrer">Open my LeetCode profile <span>↗</span></a>
    </section>
    <section className="rating-panel">
      <div><p className="eyebrow">CONTEST RATING</p><h2>Your current rating<br/>lives on LeetCode.</h2><p>Open the profile to see the latest contest rating and problem-solving stats.</p></div>
      <a className="rating-link" href={profile} target="_blank" rel="noreferrer"><span>ADITYASOLUNKE1905</span><strong>View profile ↗</strong></a>
    </section>
    <footer className="subpage-footer"><span>ADITYA SOLUNKE</span><a href="/connect">Connect with me ↗</a><a href="/">Portfolio home ↑</a></footer>
  </main>;
}
