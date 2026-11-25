
import React from 'react';
import './App.css';

const services = [
  {
    number: '01',
    title: 'Tourism',
    description:
      'Discover destinations, travel experiences and opportunities to explore the world.',
    link: '#tourism',
  },
  {
    number: '02',
    title: 'Careers',
    description:
      'Connect with employment opportunities, professional growth and global talent.',
    link: '#careers',
  },
  {
    number: '03',
    title: 'Conferences',
    description:
      'Discover events, industry gatherings and opportunities for global networking.',
    link: '#conferences',
  },
  {
    number: '04',
    title: 'Digital Services',
    description:
      'Explore digital solutions designed to connect people, businesses and ideas.',
    link: '#digital-services',
  },
  {
    number: '05',
    title: 'Partnerships & Innovation',
    description:
      'Build meaningful collaborations and develop ideas with global potential.',
    link: '#partnerships',
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="GlobiaWorld home">
        <span className="brand-mark">G</span>
        <span>GLOBIA<span className="brand-light">WORLD</span></span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#ecosystem">Our Ecosystem</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-link" href="#ecosystem">
        Explore Globia <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          CONNECTING THE WORLD
        </span>

        <h1>
          One World.
          <br />
          One Platform.
          <br />
          <span>Infinite Connections.</span>
        </h1>

        <p>
          Connecting people, businesses and opportunities
          through a growing global digital ecosystem.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#ecosystem">
            Explore our ecosystem <span>→</span>
          </a>
          <a className="button-secondary" href="#about">
            Discover Globia
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>
        <div className="visual-center">
          <span>G</span>
          <small>GLOBAL CONNECTIONS</small>
        </div>
        <span className="visual-point point-one"></span>
        <span className="visual-point point-two"></span>
        <span className="visual-point point-three"></span>
      </div>

      <div className="hero-footer">
        <span>CONNECTING POSSIBILITIES</span>
        <span>PEOPLE · IDEAS · OPPORTUNITIES</span>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="ecosystem section" id="ecosystem">
      <div className="section-heading">
        <span className="eyebrow">WHAT WE DO</span>
        <h2>One ecosystem. Multiple possibilities.</h2>
        <p>
          A connected platform bringing essential services
          and opportunities together.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} aria-label={`Explore ${service.title}`}>
              Explore <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section" id="about">
      <div>
        <span className="eyebrow">OUR VISION</span>
        <h2>A world without unnecessary barriers to opportunity.</h2>
      </div>

      <p>
        GlobiaWorld is being developed as an interconnected
        digital ecosystem where individuals, organizations
        and businesses can discover opportunities, build
        relationships and access useful services.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <span className="eyebrow">LET'S CONNECT</span>
      <h2>Build something global with us.</h2>
      <p>
        Have an idea, partnership proposal or business enquiry?
        We would like to hear from you.
      </p>
      <a className="button-primary" href="mailto:info@globiaworld.com">
        Contact Globia <span>→</span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">G</span>
        <span>GLOBIA<span className="brand-light">WORLD</span></span>
      </a>

      <p>One World. One Platform. Infinite Connections.</p>

      <span>© {new Date().getFullYear()} GlobiaWorld. All rights reserved.</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
        }
