import React from 'react';
import { motion } from 'framer-motion';

const LayerText = ({ title, text, align = 'left', index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay: 0.1 + index * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`relative ${align === 'left' ? 'text-left' : 'text-right'} max-w-xl`}
  >
    <h3 className="text-3xl md:text-5xl font-extrabold leading-[0.95] text-white">
      {title}
    </h3>
    <p className="mt-3 font-mono text-base md:text-lg text-white/80">{text}</p>
  </motion.div>
);

const FeaturesLayers = () => {
  return (
    <section className="relative bg-black text-white py-28 md:py-40 overflow-hidden">
      {/* subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(44,14,55,.25),transparent),radial-gradient(900px_500px_at_80%_70%,rgba(232,74,14,.12),transparent)]" />

      <div className="container mx-auto px-6 sm:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text layers */}
          <div className="space-y-[40vh] lg:space-y-[45vh]">
            <LayerText
              index={0}
              title={<>
                <span className="block">Chega de</span>
                <span className="block text-[#E84A0E]">Rostos Aleatórios.</span>
                <span className="block">Continuidade Visual Impecável.</span>
              </>}
              text="Personagens consistentes para narrativas que não se quebram."
            />

            <LayerText
              index={1}
              title={<>
                <span className="block">Direção de IA,</span>
                <span className="block">Controle Humano.</span>
                <span className="block text-[#E84A0E]">Roteiros com Personalidade.</span>
              </>}
              text="Escolha perspectivas. Misture estilos. O tom é seu."
            />

            <LayerText
              index={2}
              title={<>
                <span className="block">Produção Automatizada</span>
                <span className="block">Completa.</span>
                <span className="block text-[#E84A0E]">Da Ideia ao Vídeo.</span>
              </>}
              text="Do conceito à entrega com um fluxo contínuo e sem fricção."
            />
          </div>

          {/* Sticky visual area */}
          <div className="relative h-[140vh]">
            <div className="sticky top-28">
              {/* Layer 1: Character portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/5] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0E0E0E] to-[#1a1a1a] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,74,14,.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(44,14,55,.35),transparent_50%)]" />
                <div className="absolute left-6 top-6 text-xs font-mono tracking-widest text-white/70 uppercase">Personagem</div>
                <div className="absolute right-6 bottom-6 text-xs font-mono tracking-widest text-white/50 uppercase">Consistência</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white to-white/70 mix-blend-screen opacity-70" />
                </div>
              </motion.div>

              {/* Layer 2: Dissolve to new copy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="w-full h-full backdrop-blur-[1px] bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
              </motion.div>

              {/* Layer 3: Wireframe animation */}
              <motion.svg
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4, once: true }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.rect
                    key={i}
                    x={10 + i * 12}
                    y={10 + (i % 2) * 14}
                    width={80 - i * 8}
                    height={6 + (i % 3)}
                    rx="1"
                    ry="1"
                    stroke="#E84A0E"
                    strokeOpacity="0.5"
                    fill="none"
                    strokeWidth="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 1.2, ease: 'easeOut' }}
                  />
                ))}
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLayers;
