import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  TrendingUp,
  BarChart3,
  PieChart,
  Globe,
  Phone
} from 'lucide-react';

import profileImg from './assets/hero.png';
import './index.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="loader-logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        M. PHAM
      </motion.div>
      <div className="loader-bar-bg">
        <motion.div 
          className="loader-bar-fill" 
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="loader-number">{progress}%</div>
    </motion.div>
  );
};

const ExperienceCard = ({ company, role, location, date, descs }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="exp-card"
  >
    <div className="exp-date">
      {date}
      <br />
      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{location}</span>
    </div>
    <div className="exp-info">
      <h3>{company}</h3>
      <div className="exp-role">{role}</div>
      <div className="exp-desc">
        <ul>
          {descs.map((desc: string, i: number) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, badge }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="crystal-panel card-3d"
  >
    <span className="badge">{badge}</span>
    <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', marginBottom: '30px', flex: 1 }}>{description}</p>
    <motion.a 
      href="#"
      whileHover={{ x: 10 }}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}
    >
      View Case Study <ArrowRight size={14} />
    </motion.a>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-main">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="mesh-gradient" />
      
      <motion.div 
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '2px', 
          background: 'var(--accent-primary)', 
          zIndex: 2000,
          transformOrigin: '0%' 
        }} 
      />

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span className="serif" style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-1px' }}>M. PHAM</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#skills">Capabilities</a></li>
            </ul>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="mailto:np66@fordham.edu" style={{ color: 'white' }}><Globe size={18} /></a>
              <a href="#" style={{ color: 'white' }}><Globe size={18} /></a>
            </div>
          </nav>

          <main>
            <section className="hero">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="hero-subtitle">Fordham University • Finance</span>
                <h1 className="hero-title">
                  Nguyen Trong <br />
                  <span className="gradient-text">Minh Pham</span>
                </h1>
                
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '600px', fontWeight: 300, lineHeight: '1.8' }}>
                  Strategic analyst focused on <span style={{ color: 'white' }}>Investment Banking</span> and <span style={{ color: 'white' }}>Capital Markets</span>. 
                  Leveraging rigorous financial modeling to drive value in high-stakes environments.
                </p>

                <div style={{ display: 'flex', gap: '30px' }}>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ background: 'var(--accent-primary)', color: 'black', padding: '18px 40px', border: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}
                  >
                    View Portfolio
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{ background: 'transparent', padding: '18px 40px', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}
                  >
                    Download CV
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                <div className="main-img-wrapper">
                  <div className="photo-badge">GPA 3.75 / 4.0</div>
                  <img src={profileImg} alt="Minh Pham" className="main-img" />
                </div>
              </motion.div>
            </section>

            <section id="about" style={{ borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
                <div>
                  <h2 className="section-title">The Foundation</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '2', marginBottom: '30px' }}>
                    My journey into finance was sparked by the 2008 financial crisis—a pivotal moment that revealed the complexities of global systems and the critical importance of capital allocation.
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '2' }}>
                    Today, I combine technical proficiency in 3-statement modeling and DCF valuation with a strategic mindset developed through auditing and equity research. I am driven by the intersection of rigorous data analysis and high-impact decision making.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  {[
                    { icon: TrendingUp, label: 'Modeling', val: 'DCF / LBO' },
                    { icon: BarChart3, label: 'Analytics', val: 'Equity Research' },
                    { icon: PieChart, label: 'Assets', val: 'Multi-Family/Real Estate' },
                    { icon: Globe, label: 'Markets', val: 'Global Macros' }
                  ].map((item, i) => (
                    <div key={i} className="crystal-panel" style={{ padding: '30px', textAlign: 'center' }}>
                      <item.icon size={24} color="var(--accent-primary)" style={{ marginBottom: '15px' }} />
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                      <div style={{ fontWeight: 600, marginTop: '5px' }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="experience">
              <h2 className="section-title">Professional Tenure</h2>
              <div style={{ marginTop: '40px' }}>
                <ExperienceCard 
                  company="FinBudAI"
                  role="Financial Analyst Intern"
                  location="Chicago, IL"
                  date="Aug 2025 — Present"
                  descs={[
                    "Performed equity valuation on Tesla, Goldman Sachs, and Blackstone using DCF and Comps.",
                    "Analyzed 10+ macroeconomic indicators identifying key valuation drivers.",
                    "Produced data-driven investment pitch decks influencing internal portfolio strategy."
                  ]}
                />
                <ExperienceCard 
                  company="Capital Auditing Consultancy (CACC)"
                  role="Accounting Intern"
                  location="Hanoi, Vietnam"
                  date="May 2024 — June 2024"
                  descs={[
                    "Supported audit procedures across 10+ client engagements including data validation.",
                    "Reconciled 500+ financial data entries improving reporting reliability.",
                    "Verified compliance with international accounting standards."
                  ]}
                />
                <ExperienceCard 
                  company="ASEAN Fintech Research"
                  role="Finance Research Assistant"
                  location="ResearchGate / SSRN"
                  date="Sep 2024 — Dec 2024"
                  descs={[
                    "Analyzed 20+ academic papers on fintech adoption across ASEAN markets.",
                    "Identified positive correlation between financial literacy and fintech usage."
                  ]}
                />
              </div>
            </section>

            <section id="projects">
              <h2 className="section-title">Strategic Projects</h2>
              <div className="project-grid">
                <ProjectCard 
                  badge="Real Estate Private Equity"
                  title="BlackStone Portfolio Valuation"
                  description="Built an integrated financial model for a $100M+ multi-family portfolio (567 units), projecting 10-year DCF cash flows and analyzing cap rate sensitivities."
                />
                <ProjectCard 
                  badge="Equity Research"
                  title="AMD Financial Analysis"
                  description="Conducted 3-statement analysis identifying 12.3% QoQ growth and operating income expansion. Synthesized SWOT and regulatory risks into a thesis."
                />
              </div>
            </section>

            <section id="skills">
              <h2 className="section-title">Capabilities</h2>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Valuation & Analysis</h4>
                  <ul className="skill-list">
                    <li>DCF / LBO Modeling</li>
                    <li>Trading Comparables</li>
                    <li>Statement Consolidation</li>
                    <li>Ratio & Margin Analysis</li>
                    <li>Equity Research</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Technical Stack</h4>
                  <ul className="skill-list">
                    <li>Expert Excel (VLOOKUP, Pivots)</li>
                    <li>Advanced PowerPoint (Pitch Decks)</li>
                    <li>Python (NumPy, Pandas)</li>
                    <li>Financial Data Structuring</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Leadership</h4>
                  <ul className="skill-list">
                    <li>Fordham Alternative Investment Club</li>
                    <li>Global Markets Student Organization</li>
                    <li>Public Speaking & Presentation</li>
                    <li>Multi-Cultural Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact" style={{ paddingBottom: '150px' }}>
              <div className="crystal-panel" style={{ padding: '100px 50px', textAlign: 'center', border: '1px solid var(--accent-primary)' }}>
                <span className="hero-subtitle">Available for Opportunities</span>
                <h2 style={{ fontSize: '4rem', marginBottom: '30px' }}>Let's Connect.</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 50px auto' }}>
                  Currently seeking opportunities in Investment Banking and Corporate Finance where I can contribute to high-impact transactions.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                  <a href="mailto:np66@fordham.edu" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 600 }}>
                    <Globe size={20} color="var(--accent-primary)" /> np66@fordham.edu
                  </a>
                  <span style={{ color: 'var(--glass-border)' }}>|</span>
                  <a href="tel:+13474316033" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 600 }}>
                    <Phone size={20} color="var(--accent-primary)" /> +1 (347) 431-6033
                  </a>
                </div>
              </div>
            </section>
            
            <footer style={{ padding: '50px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              © 2026 NGUYEN TRONG MINH PHAM • FORDHAM UNIVERSITY
            </footer>
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
