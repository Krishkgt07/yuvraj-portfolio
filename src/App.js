import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Cpu, Code, Database,
  Layers, Zap, Trophy, Camera, Music, Plane, Volleyball, ChevronRight, Shield,
  Star, CheckCircle, Send, Gamepad2, Terminal, Crosshair, Target, Swords,
  Scroll, Gem, Crown, Flame, Sword, Skull, ShieldAlert, Eye, Fingerprint
} from 'lucide-react';

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.unobserve(el); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── DATA ─── */
const NAV = [
  { id: 'hero', label: 'WARRIOR', icon: Skull },
  { id: 'about', label: 'LEGEND', icon: Sword },
  { id: 'skills', label: 'ARSENAL', icon: Crosshair },
  { id: 'projects', label: 'CAMPAIGNS', icon: Swords },
  { id: 'achievements', label: 'RELICS', icon: Crown },
  { id: 'contact', label: 'ALLIANCE', icon: ShieldAlert },
];

const EDU = [
  { period: '2024 — 2028', title: 'B.Tech. CSE (AI & ML)', org: 'Acropolis Institute of Technology and Research, Indore', detail: 'Affiliated to RGPV Bhopal  •  Average CGPA: 6.5', level: 'TIER IV' },
  { period: '2024', title: 'HSC — Science Stream', org: 'Jayant Public H.S. School (MP Board)', detail: 'Grade: 72%', level: 'TIER I' },
  { period: '2022', title: 'SSC — General Education', org: 'Govt. H.S. School (MP Board)', detail: 'Grade: 80%', level: 'INITIATE' },
];

const SKILLS = [
  { cat: 'Combat Arts', items: ['Python', 'JavaScript'], icon: Code, color: '#c41e3a', power: 92 },
  { cat: 'Interface', items: ['HTML', 'CSS'], icon: Layers, color: '#00f0ff', power: 88 },
  { cat: 'War Engine', items: ['Flask', 'FastAPI', 'REST APIs'], icon: Cpu, color: '#c41e3a', power: 85 },
  { cat: 'Archive', items: ['MySQL'], icon: Database, color: '#00f0ff', power: 80 },
  { cat: 'Neural Runes', items: ['Pandas', 'NumPy', 'Matplotlib', 'PyTorch'], icon: Zap, color: '#c41e3a', power: 90 },
  { cat: 'Artifacts', items: ['Git', 'GitHub'], icon: Terminal, color: '#00f0ff', power: 87 },
];

const PROJECTS = [{
  title: 'Smart Object Removal',
  tag: 'Software Development (AI/ML Lead)',
  difficulty: 'MYTHIC',
  desc: 'An AI-powered computer vision system that dynamically detects and removes undesired objects, markers, or people from image layers and video frames using OpenCV inpainting, edge-detection, and deep segmentation methods.',
  tech: ['Python', 'OpenCV', 'Computer Vision', 'NumPy'],
  github: 'https://github.com/Krishkgt07',
  demo: 'https://github.com/Krishkgt07',
}];

const CERTS = [
  { title: 'Data Structures and Algorithms using Java', issuer: 'NPTEL, IIT Kharagpur', id: 'YSJ-CERT-101' },
  { title: 'Data Science Foundation', issuer: 'Infosys Springboard, Infosys Limited', id: 'YSJ-CERT-102' },
];

const ACHIEVEMENTS = [
  { title: 'IIFF Winner', desc: 'Two-time Winner at the prestigious Indore International Film Festival.', icon: Crown, rarity: 'GODLIKE', color: '#c9a227' },
  { title: 'Official Editor', desc: 'Official Video Editor for the College Farewell Event, managing complex post-production.', icon: Star, rarity: 'LEGENDARY', color: '#ff2a6d' },
  { title: 'Film Director', desc: 'Director & Editor for the official AI Nexus Club promotional movies.', icon: Target, rarity: 'EPIC', color: '#00f0ff' },
];

const INTERESTS = [
  { name: 'Photography', icon: Camera }, { name: 'Videography', icon: VideoIcon },
  { name: 'Travelling', icon: Plane }, { name: 'Playing Guitar', icon: Music },
  { name: 'Volleyball', icon: Volleyball },
];

function VideoIcon(props) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

/* ─── STAT BAR ─── */
function StatBar({ label, value, color, delay }) {
  const [width, setWidth] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => { if (visible) setTimeout(() => setWidth(value), delay); }, [visible, value, delay]);
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-xs uppercase tracking-widest mb-1.5 font-orbitron">
        <span className="text-white/40">{label}</span>
        <span style={{ color, textShadow: `0 0 8px ${color}` }}>{width}%</span>
      </div>
      <div className="h-2.5 bg-white/5 overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)' }}>
        <div className="stat-fill h-full relative" style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}30, ${color})`, boxShadow: `0 0 15px ${color}50` }}>
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white/60" />
        </div>
      </div>
    </div>
  );
}

/* ─── SECTION HEADER ─── */
function SectionHeader({ label, title, icon: Icon, number }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`flex items-center gap-5 mb-16 ${visible ? 'reveal visible' : 'reveal'}`}>
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 border border-blood/30 bg-blood/5 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
          <Icon className="w-6 h-6 text-blood" style={{ filter: 'drop-shadow(0 0 6px rgba(196,30,58,0.5))' }} />
        </div>
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-orbitron text-blood/40">{number}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs uppercase tracking-[0.3em] font-orbitron text-blood/50 mb-1">{label}</div>
        <h2 className="text-2xl md:text-4xl font-cinzel font-black uppercase tracking-wider text-white/90" style={{ textShadow: '0 0 30px rgba(196,30,58,0.2)' }}>
          {title}
        </h2>
      </div>
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-blood/30 to-transparent max-w-xs" />
    </div>
  );
}

/* ─── RUNE BUTTON ─── */
function RuneButton({ children, variant = 'blood', href, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isBlood = variant === 'blood';
  const color = isBlood ? '#c41e3a' : '#00f0ff';
  const inner = (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`btn-sweep relative inline-flex items-center gap-2.5 px-6 py-3 font-orbitron font-bold tracking-widest uppercase text-xs transition-all duration-300 border ${isBlood ? 'border-blood/40 text-blood/80 hover:border-blood hover:text-blood hover:bg-blood/10 hover:shadow-[0_0_20px_rgba(196,30,58,0.3)]' : 'border-cyan/40 text-cyan/80 hover:border-cyan hover:text-cyan hover:bg-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]'}`}
      style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
    >
      {children}
    </span>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
}

/* ─── QUEST CARD ─── */
function QuestCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`}>
      <div className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`absolute inset-0 border transition-all duration-500 ${hovered ? 'border-blood/50 shadow-[0_0_30px_rgba(196,30,58,0.15)]' : 'border-white/10'}`}
          style={{ clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)' }} />
        <div className="relative p-8 md:p-10 bg-gradient-to-br from-blood/5 via-transparent to-cyan/5"
          style={{ clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)' }}>

          <div className="absolute top-5 right-5">
            <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 border font-orbitron font-bold"
              style={{ borderColor: 'rgba(196,30,58,0.4)', color: '#c41e3a', textShadow: '0 0 8px rgba(196,30,58,0.5)' }}>
              {project.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2.5 mb-4">
            <Flame className="w-4 h-4 text-blood" style={{ filter: 'drop-shadow(0 0 5px rgba(196,30,58,0.5))' }} />
            <span className="text-xs uppercase tracking-widest font-orbitron text-blood/60">Active Campaign</span>
          </div>

          <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase tracking-wider mb-2 text-white/90"
            style={{ textShadow: '0 0 20px rgba(196,30,58,0.2)' }}>
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-widest font-orbitron text-cyan/60 mb-5">{project.tag}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-8">{project.desc}</p>

          <div className="mb-8">
            <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-3">Loadout / Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1.5 text-xs border border-white/10 bg-white/5 text-white/60 uppercase tracking-wider font-orbitron hover:border-blood/40 hover:text-blood/80 transition-all duration-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <RuneButton variant="blood" href={project.github}>
              <Sword className="w-4 h-4" /> Accept Quest
            </RuneButton>
            <RuneButton variant="cyan" href={project.demo}>
              <Eye className="w-4 h-4" /> View Intel
            </RuneButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── TROPHY CARD ─── */
function TrophyCard({ ach, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal();
  const Icon = ach.icon;
  return (
    <div ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: `${index * 0.15}s` }}>
      <div className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`absolute inset-0 border transition-all duration-500 ${hovered ? 'shadow-[0_0_25px_' + ach.color + '20]' : ''}`}
          style={{ borderColor: hovered ? ach.color + '50' : 'rgba(255,255,255,0.1)', clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }} />
        <div className="relative p-7 transition-all duration-500"
          style={{ background: hovered ? `linear-gradient(135deg, ${ach.color}08, transparent)` : 'transparent', clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border transition-all duration-500"
              style={{ borderColor: hovered ? ach.color + '50' : ach.color + '25', background: hovered ? ach.color + '12' : ach.color + '05', clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)', boxShadow: hovered ? `0 0 20px ${ach.color}30` : 'none' }}>
              <Icon className="w-6 h-6 transition-all duration-500" style={{ color: ach.color, filter: hovered ? `drop-shadow(0 0 8px ${ach.color})` : 'none' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 border font-orbitron font-bold"
                  style={{ borderColor: ach.color + '30', color: ach.color }}>
                  {ach.rarity}
                </span>
              </div>
              <h3 className="text-lg font-cinzel font-black uppercase tracking-wide mb-1.5 truncate"
                style={{ color: ach.color, textShadow: `0 0 15px ${ach.color}30` }}>
                {ach.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{ach.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PERK NODE ─── */
function PerkNode({ cert, index }) {
  const [active, setActive] = useState(false);
  const [ref, visible] = useReveal();
  useEffect(() => { if (visible) setTimeout(() => setActive(true), index * 300); }, [visible, index]);
  return (
    <div ref={ref} className={`relative transition-all duration-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
      <div className={`absolute inset-0 border transition-all duration-500 ${active ? 'border-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'border-white/5'}`}
        style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }} />
      <div className="relative p-7 text-center bg-cyan/5" style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
        <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center border-2 rounded-full transition-all duration-500 ${active ? 'border-cyan/50 bg-cyan/15 scale-110' : 'border-cyan/20 bg-cyan/5'}`}
          style={{ boxShadow: active ? '0 0 15px rgba(0,240,255,0.3)' : 'none' }}>
          <CheckCircle className={`w-5 h-5 transition-all duration-500 ${active ? 'text-cyan' : 'text-cyan/40'}`}
            style={{ filter: active ? 'drop-shadow(0 0 6px rgba(0,240,255,0.8))' : 'none' }} />
        </div>
        <div className="text-[10px] uppercase tracking-widest font-orbitron text-cyan/40 mb-1.5">Unlocked Perk {index + 1}</div>
        <h3 className="text-sm font-cinzel font-black uppercase tracking-wide mb-1.5 text-white/90">{cert.title}</h3>
        <p className="text-xs text-white/40 mb-1.5">{cert.issuer}</p>
        <div className="text-[10px] uppercase tracking-wider font-orbitron text-cyan/25">ID: {cert.id}</div>
        <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-orbitron text-green-400/70">
          <Shield className="w-3 h-3" /> Verified
        </div>
      </div>
    </div>
  );
}

/* ─── SKILL CARD ─── */
function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal();
  const Icon = skill.icon;
  return (
    <div ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`absolute inset-0 border transition-all duration-500 ${hovered ? 'border-blood/40 shadow-[0_0_20px_rgba(196,30,58,0.12)]' : 'border-white/10'}`}
          style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }} />
        <div className="relative p-6 bg-white/[0.02] transition-all duration-500 group-hover:bg-blood/5"
          style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-11 h-11 flex items-center justify-center border-2 transition-all duration-500 ${hovered ? 'scale-110' : ''}`}
              style={{ borderColor: hovered ? skill.color : skill.color + '25', background: hovered ? skill.color + '12' : skill.color + '05', clipPath: 'polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)', boxShadow: hovered ? `0 0 15px ${skill.color}30` : 'none' }}>
              <Icon className="w-5 h-5 transition-all duration-500" style={{ color: skill.color, filter: hovered ? `drop-shadow(0 0 6px ${skill.color})` : 'none' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-0.5">Category</div>
              <h3 className="text-sm font-cinzel font-black uppercase tracking-wide text-white/90">{skill.cat}</h3>
            </div>
            <div className="text-right">
              <div className="text-xl font-orbitron font-black" style={{ color: skill.color, textShadow: `0 0 12px ${skill.color}50` }}>{skill.power}</div>
              <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25">PWR</div>
            </div>
          </div>
          <div className="h-1.5 bg-white/5 mb-4 overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 0 100%)' }}>
            <div className="stat-fill h-full" style={{ width: `${skill.power}%`, background: `linear-gradient(90deg, ${skill.color}30, ${skill.color})`, boxShadow: `0 0 8px ${skill.color}40` }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map(item => (
              <span key={item} className="px-2.5 py-1 text-xs border uppercase tracking-wider font-orbitron hover:scale-105 transition-transform duration-300"
                style={{ borderColor: skill.color + '15', color: skill.color + '80', background: skill.color + '05' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV.map(item => item.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) { const rect = el.getBoundingClientRect(); if (rect.top <= 200) { setActiveSection(id); break; } }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setTimeout(() => setHeroLoaded(true), 400); }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const handleSubmit = (e) => { e.preventDefault(); setFormSent(true); setTimeout(() => setFormSent(false), 4000); };

  return (
    <div className="min-h-screen bg-dark text-white/90 overflow-x-hidden font-rajdhani">

      {/* Subtle ambient glow - static, no animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blood/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-[80px]" />
      </div>

      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.6) 100%)' }} />

      {/* ─── NAVBAR ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 border border-blood/30 rotate-45 group-hover:border-blood transition-all duration-300" />
                <div className="absolute inset-1 border border-blood/15 rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-blood font-orbitron font-black text-[10px]">YSJ</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-[9px] uppercase tracking-[0.3em] font-orbitron text-blood/40">Player One</div>
                <div className="text-xs font-cinzel font-black uppercase tracking-widest text-white/70">Yuvraj</div>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-0.5">
              {NAV.map(item => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button key={item.id} onClick={() => scrollTo(item.id)}
                    className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-orbitron transition-all duration-300 flex items-center gap-2 group ${isActive ? 'text-blood' : 'text-white/30 hover:text-white/70'}`}>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blood shadow-[0_0_8px_rgba(196,30,58,0.5)]" />
                    )}
                    <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-blood' : 'group-hover:text-blood/50'}`} />
                    <span className="relative">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2.5 border border-white/10 hover:border-blood/30 transition-all duration-300">
              <div className="w-5 space-y-1">
                <div className="h-0.5 bg-white/70 transition-all duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
                <div className="h-0.5 bg-white/70 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
                <div className="h-0.5 bg-white/70 transition-all duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none', width: menuOpen ? '20px' : '12px' }} />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-dark/98 backdrop-blur-xl border-t border-white/5">
            {NAV.map((item, i) => {
              const Icon = item.icon;
              return (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="w-full px-6 py-3.5 text-left text-sm uppercase tracking-widest font-orbitron text-white/50 hover:text-blood hover:bg-blood/5 flex items-center gap-4 border-b border-white/5 transition-all duration-300">
                  <Icon className="w-4 h-4" />{item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Decorative rings - right side, subtle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 border border-blood/20 rounded-full animate-pulse-slow" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-8 border border-cyan/15 rounded-full animate-pulse-slow" style={{ animationDuration: '12s' }} />
            <div className="absolute inset-16 border border-blood/10 rounded-full animate-pulse-slow" style={{ animationDuration: '16s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Fingerprint className="w-24 h-24 text-blood/10" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Character Card - FIXED sizing */}
            <div className={`relative transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
              <div className="rune-border">
                <div className="relative p-8 md:p-10 bg-gradient-to-br from-blood/3 via-transparent to-cyan/3">

                  {/* Tier badge */}
                  <div className={`absolute -top-3 -right-3 transition-all duration-700 delay-500 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-2 border-blood/40 rotate-45" />
                      <div className="absolute inset-1 border border-blood/20 rotate-45" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[8px] uppercase tracking-widest font-orbitron text-blood/50">Tier</span>
                        <span className="text-lg font-cinzel font-black text-blood" style={{ textShadow: '0 0 15px rgba(196,30,58,0.4)' }}>II</span>
                      </div>
                    </div>
                  </div>

                  <div className={`mb-6 transition-all duration-700 delay-200 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-xs uppercase tracking-[0.3em] font-orbitron text-blood/40 mb-2 flex items-center gap-3">
                      <span className="w-6 h-px bg-blood/30" />Character Select<span className="w-6 h-px bg-blood/30" />
                    </div>
                    {/* FIXED: Name now fits properly with responsive sizing */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black uppercase tracking-tight leading-none">
                      <span className="block text-white/90" style={{ textShadow: '0 0 40px rgba(196,30,58,0.15)' }}>Yuvraj</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blood via-pink-500 to-cyan mt-1" style={{ filter: 'drop-shadow(0 0 20px rgba(196,30,58,0.2))' }}>Singh Jadav</span>
                    </h1>
                  </div>

                  <div className={`mb-8 transition-all duration-700 delay-400 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-blood/25 bg-blood/5 mb-5">
                      <Sword className="w-4 h-4 text-blood" style={{ filter: 'drop-shadow(0 0 4px rgba(196,30,58,0.4))' }} />
                      <span className="text-xs uppercase tracking-[0.2em] font-orbitron text-blood/70">Class: AI/ML Engineer</span>
                    </div>
                    <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                      Building intelligent software, computer vision tools, and modern high-fidelity web experiences. Blending technology with digital storytelling.
                    </p>
                  </div>

                  <div className={`grid grid-cols-2 gap-3 mb-8 transition-all duration-700 delay-600 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="border border-white/10 bg-white/[0.02] p-3.5 group hover:border-blood/25 transition-all duration-300">
                      <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-1">Specialization</div>
                      <div className="text-sm font-cinzel font-bold text-blood/70 group-hover:text-blood transition-colors">AI & Deep Learning</div>
                    </div>
                    <div className="border border-white/10 bg-white/[0.02] p-3.5 group hover:border-cyan/25 transition-all duration-300">
                      <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-1">Base</div>
                      <div className="text-sm font-cinzel font-bold text-cyan/70 group-hover:text-cyan transition-colors">Indore, MP</div>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-700 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <RuneButton variant="blood" onClick={() => scrollTo('projects')}>
                      <ChevronRight className="w-4 h-4" /> Begin Campaign
                    </RuneButton>
                    <RuneButton variant="cyan" href="/resume.pdf">
                      <Scroll className="w-4 h-4" /> Load Codex
                    </RuneButton>
                  </div>

                  <div className={`flex items-center gap-5 mt-8 pt-6 border-t border-white/10 transition-all duration-700 delay-800 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="https://github.com/Krishkgt07" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-blood transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-cyan transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:yuvrajsinghyadav994@gmail.com" className="text-white/25 hover:text-blood transition-all duration-300 hover:scale-110">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* YOUR PHOTO - Right side */}
            <div className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
              <div className="relative w-[350px] h-[450px]">

                {/* Octagonal frame */}
                <div className="absolute inset-0 border-2 border-blood/20"
                  style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)' }} />
                <div className="absolute inset-2 border border-blood/10"
                  style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)' }} />

                {/* YOUR PHOTO */}
                <div className="absolute inset-4 overflow-hidden"
                  style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)' }}>
                  <img
                    src="/profile.png"
                    alt="Yuvraj Singh Jadav"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-dark/20" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blood/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/40" />

              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[10px] uppercase tracking-[0.3em] font-orbitron text-white/20">Descend</span>
          <div className="w-px h-10 bg-gradient-to-b from-blood/40 to-transparent" />
        </div>
      </section>

      {/* ─── ABOUT / LEGEND ─── */}
      <section id="about" className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Warrior Profile" title="The Legend" icon={Sword} number="01" />

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="rune-border">
                <div className="relative p-8 md:p-10 bg-gradient-to-br from-blood/3 via-transparent to-transparent">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2.5 h-2.5 bg-blood rounded-full animate-pulse shadow-[0_0_10px_rgba(196,30,58,0.8)]" />
                    <span className="text-xs uppercase tracking-[0.3em] font-orbitron text-blood/50">Status: Active</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-blood/15 to-transparent" />
                  </div>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                    Yuvraj Singh Jadav is a passionate AI & Machine Learning student pursuing B.Tech at Acropolis Institute of Technology and Research, Indore. He enjoys building intelligent software, exploring Artificial Intelligence, computer vision, backend development, and creating visually engaging digital experiences through videography and editing.
                  </p>
                  <div className="space-y-4">
                    <StatBar label="Artificial Intelligence" value={85} color="#c41e3a" delay={0} />
                    <StatBar label="Computer Vision" value={80} color="#00f0ff" delay={150} />
                    <StatBar label="Backend Development" value={75} color="#c41e3a" delay={300} />
                    <StatBar label="Video Editing" value={90} color="#00f0ff" delay={450} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {[
                { label: 'Education', value: 'B.Tech CSE (AI & ML)', sub: 'Acropolis Institute, Indore, 2024-2028', icon: Scroll, color: '#c41e3a' },
                { label: 'Specialization', value: 'AI & Deep Learning, Computer Vision, Neural Nets & APIs', sub: '', icon: Crosshair, color: '#00f0ff' },
                { label: 'Development', value: 'Full-Stack & APIs, Python, Flask, FastAPI, MySQL & React', sub: '', icon: Code, color: '#c41e3a' },
                { label: 'Storytelling', value: 'Video Editing & Direction, Official College Editor, IIFF Winner', sub: '', icon: Star, color: '#00f0ff' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                const [ref, visible] = useReveal();
                return (
                  <div key={i} ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                    <div className="rune-border group">
                      <div className="relative p-5 bg-white/[0.02] group-hover:bg-blood/5 transition-all duration-500">
                        <div className="flex items-start gap-3.5">
                          <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                            style={{ borderColor: stat.color + '25', background: stat.color + '06', clipPath: 'polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)' }}>
                            <Icon className="w-4 h-4" style={{ color: stat.color, filter: `drop-shadow(0 0 4px ${stat.color}40)` }} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-0.5">{stat.label}</div>
                            <div className="text-sm font-cinzel font-bold text-white/80 leading-tight">{stat.value}</div>
                            {stat.sub && <div className="text-xs text-white/30 mt-1">{stat.sub}</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION / PROGRESSION ─── */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Progression Path" title="The Journey" icon={MapPin} number="02" />

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-gradient-to-b from-blood/40 via-cyan/20 to-transparent" />

            <div className="space-y-16">
              {EDU.map((edu, i) => {
                const [ref, visible] = useReveal();
                return (
                  <div key={i} ref={ref} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                        <div className={`w-5 h-5 border-2 rotate-45 ${i === 0 ? 'border-blood bg-blood shadow-[0_0_15px_rgba(196,30,58,0.5)]' : 'border-white/20 bg-dark'}`} />
                      </div>
                    </div>
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: `${i * 0.2}s` }}>
                        <div className="rune-border group">
                          <div className="relative p-6 bg-white/[0.02] group-hover:from-blood/3 transition-all duration-500">
                            <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <span className="text-xs uppercase tracking-widest font-orbitron text-blood/50">{edu.period}</span>
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-blood/15 font-orbitron text-blood/40">{edu.level}</span>
                            </div>
                            <h3 className="text-lg font-cinzel font-black uppercase tracking-wide mb-1 text-white/90" style={{ textShadow: '0 0 15px rgba(196,30,58,0.15)' }}>{edu.title}</h3>
                            <p className="text-sm text-white/45 mb-1">{edu.org}</p>
                            <p className="text-xs text-white/25">{edu.detail}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS / ARSENAL ─── */}
      <section id="skills" className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Arsenal" title="Weapons & Abilities" icon={Crosshair} number="03" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((skill, i) => <SkillCard key={i} skill={skill} index={i} />)}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS / CAMPAIGNS ─── */}
      <section id="projects" className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Campaigns" title="Active Missions" icon={Swords} number="04" />
          <div className="max-w-4xl mx-auto">
            <QuestCard project={PROJECTS[0]} />
          </div>
        </div>
      </section>

      {/* ─── CERTS / SKILL TREE ─── */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Skill Tree" title="Unlocked Perks" icon={Gem} number="05" />
          <div className="flex flex-wrap justify-center gap-8">
            {CERTS.map((cert, i) => <PerkNode key={i} cert={cert} index={i} />)}
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS / RELICS ─── */}
      <section id="achievements" className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Relic Chamber" title="Artifacts Obtained" icon={Crown} number="06" />
          <div className="grid md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, i) => <TrophyCard key={i} ach={ach} index={i} />)}
          </div>
        </div>
      </section>

      {/* ─── INTERESTS / SIDE QUESTS ─── */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Side Quests" title="Hobbies & Pursuits" icon={Gamepad2} number="07" />
          <div className="flex flex-wrap justify-center gap-5">
            {INTERESTS.map((interest, i) => {
              const Icon = interest.icon;
              const [ref, visible] = useReveal();
              return (
                <div key={i} ref={ref} className={`${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="relative group">
                    <div className="absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-blood/25 group-hover:shadow-[0_0_20px_rgba(196,30,58,0.1)]"
                      style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }} />
                    <div className="relative w-28 h-28 flex flex-col items-center justify-center bg-white/[0.02] group-hover:bg-blood/5 transition-all duration-500"
                      style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
                      <Icon className="w-6 h-6 mb-2 text-white/25 group-hover:text-blood transition-all duration-500 group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 6px rgba(196,30,58,0.3))' }} />
                      <span className="text-[10px] uppercase tracking-widest font-orbitron text-white/35 group-hover:text-white/70 transition-all duration-500 text-center px-2">{interest.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / ALLIANCE ─── */}
      <section id="contact" className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Alliance" title="Forge Alliance" icon={ShieldAlert} number="08" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="rune-border mb-8">
                <div className="relative p-8 md:p-10 bg-gradient-to-br from-blood/3 to-transparent">
                  <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase tracking-wider mb-8 text-white/90"
                    style={{ textShadow: '0 0 25px rgba(196,30,58,0.2)' }}>
                    Contact Intel
                  </h3>

                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: 'Comms Channel', value: '(+91) 9589536912', href: 'tel:+919589536912', color: '#c41e3a' },
                      { icon: Mail, label: 'Data Link', value: 'yuvrajsinghyadav994@gmail.com', href: 'mailto:yuvrajsinghyadav994@gmail.com', color: '#00f0ff' },
                      { icon: MapPin, label: 'Base Location', value: 'Indore, Madhya Pradesh', href: null, color: '#c41e3a' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-11 h-11 flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                          style={{ borderColor: item.color + '25', background: item.color + '06', clipPath: 'polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)' }}>
                          <item.icon className="w-4 h-4" style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.color}40)` }} />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-0.5">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-cinzel font-bold text-white/65 hover:text-blood transition-colors">{item.value}</a>
                          ) : (
                            <span className="text-sm font-cinzel font-bold text-white/65">{item.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mt-8 pt-6 border-t border-white/10">
                    <a href="https://github.com/Krishkgt07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs uppercase tracking-widest font-orbitron text-white/30 hover:text-blood transition-all duration-300 hover:scale-105">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs uppercase tracking-widest font-orbitron text-white/30 hover:text-cyan transition-all duration-300 hover:scale-105">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="rune-border group">
                <a href="https://maps.google.com/?q=Indore,MadhyaPradesh" target="_blank" rel="noopener noreferrer" className="relative block p-5 bg-white/[0.02] group-hover:bg-cyan/5 transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-blood/8 to-cyan/8 flex items-center justify-center border border-dashed border-white/8 group-hover:border-cyan/15 transition-all duration-500">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-blood/30 mx-auto mb-2 group-hover:text-blood/50 transition-all duration-500 group-hover:scale-110" />
                      <span className="text-xs uppercase tracking-widest font-orbitron text-white/25 group-hover:text-cyan/40 transition-all duration-500">View on Map →</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rune-border">
              <div className="relative p-8 md:p-10 bg-gradient-to-br from-cyan/3 to-transparent">
                <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase tracking-wider mb-8 text-white/90"
                  style={{ textShadow: '0 0 25px rgba(0,240,255,0.15)' }}>
                  Transmit Message
                </h3>

                {formSent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-5 border-2 border-green-400/40 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-400" style={{ filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.4))' }} />
                    </div>
                    <h4 className="text-lg font-cinzel font-black uppercase tracking-wider text-green-400/80 mb-2">Transmission Complete</h4>
                    <p className="text-sm text-white/40">Message received. Awaiting response.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: 'Operator Name', key: 'name', type: 'text', placeholder: 'Enter your callsign' },
                      { label: 'Data Link (Email)', key: 'email', type: 'email', placeholder: 'your@email.com' },
                      { label: 'Mission Subject', key: 'subject', type: 'text', placeholder: 'Mission objective' },
                    ].map(field => (
                      <div key={field.key}>
                        <label className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-1.5 block">{field.label}</label>
                        <input type={field.type} required value={formData[field.key]} onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/15 focus:border-cyan/30 focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 hover:border-white/15 font-rajdhani"
                          style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                          placeholder={field.placeholder} />
                      </div>
                    ))}
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-orbitron text-white/25 mb-1.5 block">Transmission Content</label>
                      <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/15 focus:border-cyan/30 focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 hover:border-white/15 resize-none font-rajdhani"
                        style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                        placeholder="Enter transmission data..." />
                    </div>
                    <button type="submit"
                      className="w-full btn-sweep relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-orbitron font-bold tracking-widest uppercase text-xs transition-all duration-300 bg-blood/8 border border-blood/30 text-blood/70 hover:bg-blood/15 hover:border-blood/50 hover:text-blood hover:shadow-[0_0_20px_rgba(196,30,58,0.2)]"
                      style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                      <Send className="w-4 h-4" /> Transmit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <Skull className="w-4 h-4 text-blood/30" />
            <p className="text-sm text-white/25 font-cinzel">
              Made with <span className="text-blood/50">blood</span> and <span className="text-cyan/50">code</span> by <span className="text-white/40">Yuvraj Singh Jadav</span>
            </p>
          </div>
          <p className="text-[10px] text-white/15 uppercase tracking-[0.3em] font-orbitron">© 2025 — All Systems Operational</p>
        </div>
      </footer>
    </div>
  );
}
