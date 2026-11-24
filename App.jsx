import React, { useMemo, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Globe2, Search, Menu, X, BriefcaseBusiness,
  GraduationCap, Headset, Calculator, Code2, Users, PenTool, CheckCircle2,
  Star, MapPin, Clock3, ChevronDown, Building2, Sparkles, ShieldCheck,
  MessageCircle, Mail, Linkedin, Instagram, Facebook, MoveRight, SlidersHorizontal,
  Laptop, Target, BadgeCheck, Send, HeartHandshake
} from 'lucide-react';

const categories = [
  { icon: Headset, title: 'Virtual Assistance', detail: 'Admin, data entry & customer support', count: '120+ services', color: 'mint' },
  { icon: Calculator, title: 'Business & Finance', detail: 'Bookkeeping, analysis & business support', count: '85+ services', color: 'peach' },
  { icon: Code2, title: 'Digital & Technology', detail: 'Web, software, IT & digital solutions', count: '210+ services', color: 'blue' },
  { icon: GraduationCap, title: 'Training & Education', detail: 'Skills development and professional learning', count: '95+ services', color: 'lavender' },
  { icon: Users, title: 'HR & Recruitment', detail: 'Talent sourcing and people operations', count: '60+ services', color: 'yellow' },
  { icon: PenTool, title: 'Creative & Marketing', detail: 'Design, content and brand growth', count: '140+ services', color: 'pink' }
];

const experts = [
  { initials: 'AM', name: 'Amara Mensah', role: 'Virtual Assistant', country: 'Ghana', rating: '4.9', reviews: 38, price: '$12', skills: ['Data entry', 'Admin support'], tone: 'avatar-mint', featured: true },
  { initials: 'DK', name: 'Daniel Kimani', role: 'Web Developer', country: 'Kenya', rating: '5.0', reviews: 24, price: '$25', skills: ['React', 'WordPress'], tone: 'avatar-blue', featured: true },
  { initials: 'SR', name: 'Sofia Rahman', role: 'Bookkeeping Specialist', country: 'UAE', rating: '4.8', reviews: 51, price: '$18', skills: ['QuickBooks', 'Reports'], tone: 'avatar-peach', featured: false }
];

const jobs = [
  { type: 'REMOTE · PART-TIME', title: 'Virtual Administrative Assistant', company: 'Northstar Consulting', location: 'Remote · Global', pay: '$500–700 / month', tag: 'Entry level', icon: Headset },
  { type: 'REMOTE · CONTRACT', title: 'Junior Data Entry Associate', company: 'BrightPath Solutions', location: 'Remote · Africa / MENA', pay: '$8–12 / hour', tag: 'Beginner friendly', icon: Laptop },
  { type: 'REMOTE · FULL-TIME', title: 'Customer Support Coordinator', company: 'Cloudline Services', location: 'Remote · Worldwide', pay: '$900–1,200 / month', tag: 'Full-time', icon: MessageCircle }
];

const navItems = ['Explore services', 'Find experts', 'Remote jobs', 'Training', 'Business solutions'];

function Logo() {
  return <a className="logo" href="#home" aria-label="GLOBIAWorld home">
    <span className="logo-mark"><Globe2 size={25} strokeWidth={1.8}/><i /></span>
    <span className="logo-word">GLOBIA<span>WORLD</span></span>
  </a>;
}

function SectionHeading({ eyebrow, title, description, link, href = '#' }) {
  return <div className="section-heading">
    <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>
    {link && <a className="text-link" href={href}>{link}<ArrowUpRight size={17}/></a>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('Services');
  const [notice, setNotice] = useState('');
  const [jobFilter, setJobFilter] = useState('All opportunities');
  const [email, setEmail] = useState('');

  const filteredJobs = useMemo(() => {
    if (jobFilter === 'All opportunities') return jobs;
    return jobs.filter(job => job.type.toLowerCase().includes(jobFilter.toLowerCase()));
  }, [jobFilter]);

  const doSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (!query) { setNotice('Enter a skill, service or role to start exploring.'); return; }
    setNotice(`Demo search: showing ${searchType.toLowerCase()} related to “${query}”. Connect a backend later to make search live.`);
    document.getElementById(searchType === 'Jobs' ? 'jobs' : 'services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showDemo = (message) => setNotice(message);

  return <div id="home">
    <div className="announcement"><Sparkles size={14}/> A world of services, skills and opportunities — connected in one place. <a href="#about">Discover GLOBIAWorld <ArrowRight size={13}/></a></div>
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item, i) => <a key={item} href={['#services','#experts','#jobs','#training','#business'][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="mobile-only" href="#about" onClick={() => setMenuOpen(false)}>About us</a>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#join">Log in</a>
          <a className="btn btn-dark btn-small" href="#join">Join GLOBIA <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse"></span> YOUR WORLD OF POSSIBILITIES</div>
            <h1>Great work has<br/> <span>no borders.</span></h1>
            <p className="hero-lead">Discover trusted services, connect with skilled professionals and find remote opportunities — all in one global community.</p>
            <form className="search-box" onSubmit={doSearch}>
              <div className="search-select"><Globe2 size={17}/><select value={searchType} onChange={e => setSearchType(e.target.value)} aria-label="Search category"><option>Services</option><option>Experts</option><option>Jobs</option></select><ChevronDown size={14}/></div>
              <div className="search-input"><Search size={18}/><input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="What are you looking for?" aria-label="Search"/></div>
              <button type="submit" className="btn btn-mint">Explore <ArrowRight size={16}/></button>
            </form>
            <div className="popular"><span>Popular:</span><button onClick={() => {setSearchTerm('Data entry');setSearchType('Services')}}>Data entry</button><button onClick={() => {setSearchTerm('Virtual assistant');setSearchType('Services')}}>Virtual assistant</button><button onClick={() => {setSearchTerm('Web design');setSearchType('Services')}}>Web design</button></div>
            {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss"><X size={14}/></button></div>}
            <div className="hero-proof"><div className="proof-avatars"><span>AM</span><span>DK</span><span>SR</span><b>+</b></div><div><strong>Skills meet opportunity.</strong><small>Built for a connected world.</small></div><div className="proof-divider"></div><div className="proof-stat"><strong>One platform</strong><small>Infinite connections</small></div></div>
          </div>
          <div className="hero-art">
            <div className="art-backdrop"></div>
            <div className="world-card">
              <div className="world-card-top"><span className="live-dot"></span> THE WORLD IS OPEN</div>
              <div className="globe-illustration"><div className="globe-grid"></div><div className="globe-shape"><span className="land land-a"></span><span className="land land-b"></span><span className="land land-c"></span></div><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><span className="pin pin-a"></span><span className="pin pin-b"></span><span className="pin pin-c"></span></div>
              <div className="world-card-bottom"><div><strong>Connect beyond borders</strong><small>People · Skills · Possibilities</small></div><span className="arrow-circle"><ArrowUpRight size={18}/></span></div>
            </div>
            <div className="float-card float-expert"><div className="float-icon"><BadgeCheck size={19}/></div><div><strong>Skilled professionals</strong><small>Ready to work with you</small></div></div>
            <div className="float-card float-jobs"><div className="float-icon orange"><BriefcaseBusiness size={18}/></div><div><strong>Remote opportunities</strong><small>Work from anywhere</small></div></div>
            <div className="art-caption"><span></span> A global network, made practical.</div>
          </div>
        </div>
        <div className="container trust-row"><span>BUILT TO BRING THE WORLD CLOSER</span><div><Globe2/> Global reach</div><div><ShieldCheck/> Trust & quality</div><div><HeartHandshake/> Meaningful connections</div><div><Laptop/> Work without borders</div></div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <SectionHeading eyebrow="EXPLORE THE ECOSYSTEM" title="Find the right help for your next move." description="From everyday business support to specialist digital skills, discover services that help you move forward." link="Explore all services" href="#join"/>
          <div className="category-grid">
            {categories.map((cat, i) => {const Icon = cat.icon; return <a className="category-card" href="#join" key={cat.title} onClick={() => showDemo(`${cat.title}: category selected. Service listings will become searchable when the platform backend is connected.`)}>
              <div className={`category-icon ${cat.color}`}><Icon size={23}/></div><div className="category-arrow"><ArrowUpRight size={17}/></div><h3>{cat.title}</h3><p>{cat.detail}</p><div className="category-foot"><span>{cat.count}</span><MoveRight size={16}/></div>
            </a>})}
          </div>
          <div className="wide-banner"><div className="banner-icon"><Sparkles size={22}/></div><div><strong>Have a skill the world needs?</strong><p>Turn what you know into services people can discover and hire.</p></div><a className="btn btn-outline-light" href="#join">Become an expert <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section className="section experts-section" id="experts">
        <div className="container">
          <SectionHeading eyebrow="MEET THE PEOPLE BEHIND THE SKILLS" title="Talent is everywhere." description="Connect with independent professionals who bring experience, ideas and energy to every project." link="Discover all experts" href="#join"/>
          <div className="expert-grid">
            {experts.map((person, i) => <article className="expert-card" key={person.name}>
              <div className="expert-top"><div className={`avatar ${person.tone}`}>{person.initials}</div><button className="save-btn" aria-label={`Save ${person.name}`} onClick={() => showDemo(`${person.name} saved to your demo shortlist.`)}><HeartHandshake size={17}/></button></div>
              <div className="expert-name-row"><h3>{person.name}</h3>{person.featured && <span className="verified"><CheckCircle2 size={13}/> Featured</span>}</div>
              <p className="expert-role">{person.role}</p><div className="expert-meta"><span><MapPin size={14}/>{person.country}</span><span><Star size={14} fill="currentColor"/>{person.rating} ({person.reviews})</span></div>
              <div className="skill-tags">{person.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              <div className="expert-bottom"><span>Starting at <strong>{person.price}</strong><small> / hour</small></span><button onClick={() => showDemo(`Profile preview for ${person.name} — profile pages will be enabled in a later release.`)}>View profile <ArrowUpRight size={15}/></button></div>
            </article>)}
          </div>
          <div className="center-cta"><a className="btn btn-dark" href="#join">Find your expert <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="section jobs-section" id="jobs">
        <div className="container">
          <div className="jobs-head"><SectionHeading eyebrow="YOUR NEXT OPPORTUNITY" title="Work can happen anywhere." description="Explore remote roles and flexible contracts from organisations looking for capable people."/><div className="job-filter"><SlidersHorizontal size={16}/><select value={jobFilter} onChange={e => setJobFilter(e.target.value)} aria-label="Filter jobs"><option>All opportunities</option><option>Part-time</option><option>Contract</option><option>Full-time</option></select><ChevronDown size={14}/></div></div>
          <div className="jobs-layout"><div className="job-list">
            {filteredJobs.map((job, i) => {const Icon=job.icon; return <article className="job-card" key={job.title}><div className="job-company-icon"><Icon size={22}/></div><div className="job-info"><div className="job-type">{job.type}</div><h3>{job.title}</h3><p>{job.company}</p><div className="job-details"><span><MapPin size={13}/>{job.location}</span><span><Clock3 size={13}/>{job.tag}</span></div></div><div className="job-pay"><strong>{job.pay}</strong><button onClick={() => showDemo(`You selected “${job.title}”. Applications will be activated when employer accounts are connected.`)}>View role <ArrowUpRight size={15}/></button></div></article>})}
            {filteredJobs.length === 0 && <div className="empty-state">No sample roles in this category yet. Choose another filter.</div>}
          </div><aside className="job-aside"><div className="aside-decoration"><div className="aside-orbit"></div><div className="aside-icon"><BriefcaseBusiness size={28}/></div></div><div className="eyebrow">FOR EMPLOYERS</div><h3>Meet your next great hire.</h3><p>Reach capable professionals across borders. Share a role and find the skills your team needs.</p><a className="btn btn-dark btn-full" href="#join">Post a job <ArrowRight size={16}/></a><div className="aside-note"><ShieldCheck size={15}/> Designed for transparent opportunities</div></aside></div>
          <div className="center-cta"><a className="text-link" href="#join">Browse all remote opportunities <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="section training-section" id="training">
        <div className="container training-grid">
          <div className="training-visual"><div className="training-panel"><div className="panel-top"><span>LEARNING PATHWAY</span><span className="panel-status">● OPEN</span></div><div className="learning-steps"><div className="learning-step done"><span><CheckCircle2 size={16}/></span><div><b>Build your foundation</b><small>Core skills and confidence</small></div></div><div className="step-line"></div><div className="learning-step active"><span><GraduationCap size={17}/></span><div><b>Develop practical skills</b><small>Learn by doing</small></div></div><div className="step-line"></div><div className="learning-step"><span><Target size={16}/></span><div><b>Put your skills to work</b><small>Connect with opportunities</small></div></div></div><div className="panel-footer"><span>PROGRESS IS A JOURNEY</span><div className="progress"><i></i></div></div></div><div className="training-sticker"><GraduationCap size={20}/><span>Learn<br/>and grow</span></div></div>
          <div className="training-copy"><div className="eyebrow">LEARN. GROW. CONNECT.</div><h2>Build skills that<br/><span>open doors.</span></h2><p>Access learning pathways, practical training and professional development designed to help people and teams stay ready for what comes next.</p><ul><li><CheckCircle2 size={17}/> Professional and workplace skills</li><li><CheckCircle2 size={17}/> Staff training and development</li><li><CheckCircle2 size={17}/> Practical, career-focused learning</li></ul><a className="btn btn-dark" href="#join">Explore training <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="section business-section" id="business">
        <div className="container business-box"><div className="business-copy"><div className="eyebrow">FOR ORGANISATIONS</div><h2>Good partnerships<br/>create <span>more possibility.</span></h2><p>Whether you need skilled support, a stronger team or a new way to reach customers, GLOBIAWorld is built to help organisations make useful connections.</p><a className="btn btn-mint" href="#join">Explore business solutions <ArrowRight size={16}/></a></div><div className="business-features"><div className="business-feature"><div><Building2 size={21}/></div><span><b>Business support</b><small>Find services that move work forward.</small></span><ArrowUpRight size={17}/></div><div className="business-feature"><div><Users size={21}/></div><span><b>Talent connections</b><small>Connect with people and specialist skills.</small></span><ArrowUpRight size={17}/></div><div className="business-feature"><div><GraduationCap size={21}/></div><span><b>Team development</b><small>Build capability through training.</small></span><ArrowUpRight size={17}/></div><div className="business-feature"><div><Globe2 size={21}/></div><span><b>Global partnerships</b><small>Discover new ways to collaborate.</small></span><ArrowUpRight size={17}/></div></div></div>
      </section>

      <section className="section join-section" id="join"><div className="container"><div className="join-card"><div className="join-decoration"><div></div><div></div><div></div></div><div className="join-content"><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>One world.<br/><span>Infinite connections.</span></h2><p>Join a growing ecosystem of professionals, businesses and opportunity seekers.</p><div className="join-actions"><button className="btn btn-mint" onClick={() => showDemo('Welcome! Account registration will be added when authentication is connected.')}>Create your account <ArrowRight size={16}/></button><a className="btn btn-ghost-light" href="#about">Learn about us</a></div></div><div className="join-side"><div className="join-stat"><strong>01</strong><span>Global community</span></div><div className="join-stat"><strong>∞</strong><span>Ways to connect</span></div><div className="join-stat"><strong>YOU</strong><span>Belong here</span></div></div></div></div></section>

      <section className="newsletter"><div className="container newsletter-inner"><div><div className="eyebrow">STAY IN THE LOOP</div><h2>Ideas, opportunities and updates.</h2><p>Get occasional updates from the GLOBIAWorld ecosystem.</p></div><form onSubmit={e => {e.preventDefault(); if(email.includes('@')) {showDemo(`Thanks! ${email} has been added to this demo newsletter list.`);setEmail('')} else showDemo('Please enter a valid email address.')}}><Mail size={18}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address" aria-label="Your email address" required/><button aria-label="Subscribe"><Send size={17}/></button></form></div></section>
    </main>

    <footer className="footer" id="about"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo/><p>Connecting people, skills and opportunities across the world.</p><div className="socials"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17}/></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={17}/></a></div></div><div className="footer-col"><b>Explore</b><a href="#services">Services</a><a href="#experts">Find experts</a><a href="#jobs">Remote jobs</a><a href="#training">Training</a></div><div className="footer-col"><b>For business</b><a href="#business">Business solutions</a><a href="#join">Post a job</a><a href="#join">Become an expert</a><a href="#join">Partnerships</a></div><div className="footer-col"><b>GLOBIAWorld</b><a href="#about">About us</a><a href="#join">Contact</a><a href="#join">Help centre</a><a href="#join">Privacy & terms</a></div><div className="footer-contact"><span>HAVE A QUESTION?</span><a href="mailto:info@globiaworld.com">info@globiaworld.com <ArrowUpRight size={15}/></a><small>One World. One Platform.<br/>Infinite Connections.</small></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GLOBIAWorld. All rights reserved.</span><span>Built for a world without borders.</span></div></div></footer>
    {notice && <div className="toast" role="status"><CheckCircle2 size={17}/><span>{notice}</span><button onClick={() => setNotice('')}><X size={15}/></button></div>}
    <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}><ArrowUpRight size={19}/></button>
  </div>;
}

export default App;
