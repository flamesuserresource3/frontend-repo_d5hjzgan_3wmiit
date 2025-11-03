import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // reveal after user has likely passed features section
      setVisible(y > window.innerHeight * 1.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative bg-black">
      {/* spacer to allow floating layering */}
      <div className="h-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.98 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-40 right-6 bottom-6 sm:right-10 sm:bottom-10"
      >
        <a
          href="#"
          className="group relative inline-flex items-center"
          aria-label="A Criação Evoluiu. Você Está Pronto? Entrar no Futuro (Acesso Antecipado)"
        >
          {/* pulsing distorted outline */}
          <span className="absolute -inset-1 rounded-[14px] bg-gradient-to-br from-[#E84A0E] to-[#2C0E37] opacity-60 blur-md group-hover:opacity-80 transition-opacity" />
          <span className="relative px-5 py-4 rounded-[14px] bg-black text-white border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden">
            <span className="block text-left">
              <span className="block text-xs uppercase tracking-[0.2em] text-white/70">A Criação Evoluiu</span>
              <span className="block font-extrabold text-lg leading-tight">Você Está Pronto?</span>
            </span>
            {/* button with glitchy call-to-action */}
            <span className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-[#E84A0E]">
              ENTRAR NO FUTURO (Acesso Antecipado)
            </span>
            {/* glitch layers */}
            <span className="pointer-events-none absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute -inset-1 bg-[#E84A0E]/15 animate-pulse" />
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E84A0E] to-transparent" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E84A0E] to-transparent" />
            </span>
          </span>
        </a>
      </motion.div>

      {/* Abrupt black transition block to occasionally reveal CTA */}
      <div className="h-[60vh] w-full bg-gradient-to-b from-transparent to-black/90" />
    </div>
  );
};

export default FloatingCTA;
