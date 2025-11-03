import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-[120vh] w-full bg-black overflow-hidden select-none">
      {/* Spline 3D scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="pointer-events-none absolute -inset-4 opacity-[0.06]" style={{
        backgroundImage:
          'radial-gradient(circle at 10% 10%, #2C0E37 0%, transparent 50%), radial-gradient(circle at 90% 40%, #E84A0E22 0%, transparent 35%), radial-gradient(circle at 50% 90%, #2C0E37 0%, transparent 45%)',
      }} />
      {/* subtle noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'.15\'/></svg>")',
      }} />

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto h-full px-6 sm:px-10">
          <div className="h-full flex flex-col justify-center">
            <motion.h1
              initial={{ y: 60, opacity: 0, rotate: -1.5 }}
              animate={{ y: 0, opacity: 1, rotate: -1.5 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] leading-none font-extrabold tracking-tight text-white uppercase -ml-2 sm:-ml-4"
              style={{ fontFamily: 'var(--font-ibm-plex-sans), system-ui' }}
            >
              <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(135deg, #fff, #E84A0E)',
              }}>O Futuro</span>
              <br />
              <span className="text-white/90">da Criação</span>
              <br />
              <span className="text-white">Não é Quadrado.</span>
            </motion.h1>

            <motion.h2
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-white/80 font-mono rotate-1 -skew-x-2 bg-black/30 inline-block p-4 pr-6 border-l-4 border-[#E84A0E] shadow-[0_0_0_1px_rgba(232,74,14,0.15)]"
            >
              Ideon: Transforme conceitos brutos em narrativas visuais completas. Roteiro. Personagens Consistentes. Edição. Tudo em uma única faísca de IA.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Broken grid accent lines */}
      <svg className="pointer-events-none absolute inset-0 opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#E84A0E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#E84A0E" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(9)].map((_, i) => (
          <line key={i} x1={(i + 1) * 10 + '%'} y1="0" x2={(i + 1) * 10 + '%'} y2={i % 2 === 0 ? '55%' : '35%'} stroke="url(#g1)" strokeWidth="1" />
        ))}
        <line x1="0" y1="80%" x2="45%" y2="80%" stroke="#E84A0E" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="70%" y1="92%" x2="100%" y2="92%" stroke="#E84A0E" strokeOpacity="0.25" strokeWidth="1" />
      </svg>
    </section>
  );
};

export default HeroSection;
