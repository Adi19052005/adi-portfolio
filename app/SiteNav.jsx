'use client';

import { useState } from 'react';

const links = [
  ['Work', '#work'],
  ['About', '#story'],
  ['Teaching', '#teaching'],
  ['Cloud', '#cloud'],
  ['LeetCode', '/leetcode'],
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return <header className="topbar" id="top">
    <a className="site-name" href="#top" onClick={() => setOpen(false)}>Aditya Solunke</a>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation" id="main-navigation">
      {links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <a className="availability" href="/connect">Let’s talk <span aria-hidden="true">↗</span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}>
      <span/><span/>
    </button>
  </header>;
}
