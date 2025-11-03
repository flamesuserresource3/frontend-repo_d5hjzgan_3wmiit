import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Step = ({ title, text, position, delay, accent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: position.x * 40, y: position.y * 40, rotate: position.r }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: position.r / 4 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-sm p-5 md:p-6 bg-[#0b0b0b]/70 backdrop-blur border border-white/5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
      style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}
    >
      <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
      <h3 className="font-bold tracking-wide uppercase text-white text-sm mb-2" style={{ letterSpacing: '0.12em' }}>{title}</h3>
      <p className="font-mono text-white/80 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
};

const ProcessConstellation = () => {
  const { scrollYProgress } = useScroll();
  const driftX = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const driftY = useTransform(scrollYProgress, [0, 1], ['-2%', '4%']);

  return (
    <section className="relative bg-[#0A0A0A] text-white py-32 md:py-44 overflow-hidden">
      {/* Parallax background lines */}
      <motion.div className="pointer-events-none absolute inset-0 opacity-20" style={{ x: driftX, y: driftY }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pg" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2C0E37" />
              <stop offset="100%" stopColor="#E84A0E" />
            </linearGradient>
          </defs>
          {[...Array(16)].map((_, i) => (
            <path key={i} d={`M 0 ${i * 60} Q ${i % 2 === 0 ? 35 : 65} ${i * 60 + 30}, 100 ${i * 60}`} stroke="url(#pg)" strokeWidth="0.6" fill="none" opacity={i % 3 === 0 ? 0.7 : 0.3} />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 sm:px-10">
        <div className="mb-14 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">Como Funciona — A Desconstrução do Processo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5 space-y-10">
            <Step
              title="Passo 1: A Faísca (High Concept)"
              text="Sua Ideia. Bruta. Sem Filtros. Apenas a essência da sua história."
              delay={0.1}
              accent="#E84A0E"
              position={{ x: -1, y: 0.5, r: -6 }}
            />
            <Step
              title="Passo 2: A Mente Multiplicada (Diretores de IA)"
              text="Escolha uma perspectiva. Nossa IA não apenas escreve, ela interpreta. O roteiro nasce com um ponto de vista."
              delay={0.2}
              accent="#A53BD8"
              position={{ x: 1, y: -0.4, r: 4 }}
            />
          </div>

          {/* Curved connective path with orbits */}
          <div className="md:col-span-2 hidden md:block">
            <div className="relative h-[520px]">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="orb" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E84A0E" stopOpacity="1" />
                    <stop offset="100%" stopColor="#E84A0E" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path d="M 10 60 C 100 120, 20 260, 110 320 S 30 460, 100 520" stroke="#E84A0E" strokeOpacity="0.35" strokeWidth="1" fill="none" />
                {[60, 200, 340, 500].map((y, i) => (
                  <circle key={i} cx={i % 2 === 0 ? 20 : 100} cy={y} r="5" fill="#E84A0E" opacity="0.6" />
                ))}
              </svg>
            </div>
          </div>

          <div className="md:col-span-5 space-y-10">
            <Step
              title="Passo 3: A Persistência da Memória (Personagens Consistentes)"
              text="O fim da inconsistência. Criamos personagens com memória visual. Eles evoluem, mas nunca se perdem."
              delay={0.3}
              accent="#7B1FA2"
              position={{ x: -0.6, y: 0.2, r: -3 }}
            />
            <Step
              title="Passo 4: A Síntese Final (Vídeo Completo)"
              text="Narração. Edição. Efeitos. O produto final não é um conjunto de assets, é um vídeo coeso, pronto para impactar."
              delay={0.4}
              accent="#E84A0E"
              position={{ x: 0.8, y: -0.2, r: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessConstellation;
