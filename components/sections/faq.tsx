"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    q: "Quanto tempo leva pra começar a usar?",
    a: "Setup completo em até 48h. A gente faz o diagnóstico, treina a IA com o tom da sua equipe, integra os canais e entrega tudo pronto pra rodar.",
  },
  {
    q: "Preciso trocar meu sistema atual?",
    a: "Não. O AIOS funciona em paralelo ao que você já usa — DMS, planilhas, ferramentas de marketing. Conectamos pelo WhatsApp e canais existentes.",
  },
  {
    q: "Funciona com WhatsApp Business ou só API oficial?",
    a: "Usamos a API oficial do WhatsApp (Meta), o que dá segurança, evita banimento e libera funcionalidades como disparos segmentados e templates aprovados.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento depende do tamanho da operação e do volume de leads. No diagnóstico gratuito apresentamos o plano sob medida — sem surpresa, sem letra miúda.",
  },
  {
    q: "Tem fidelidade ou multa?",
    a: "Nenhuma. Sem fidelidade, sem multa de cancelamento. Se não entregar resultado, você sai.",
  },
  {
    q: "A IA atende como humano ou parece robô?",
    a: "A IA é treinada com o tom de voz da sua equipe e o seu catálogo. O time de vendas dos parceiros costuma elogiar justamente isso: ela extrai todas as informações certas e a conversa flui natural.",
  },
  {
    q: "Vocês treinam minha equipe?",
    a: "Sim. Onboarding completo no setup, manual de uso, e gestor dedicado pra acompanhar a operação continuamente.",
  },
  {
    q: "E se eu já uso outro CRM?",
    a: "A maioria dos parceiros chegou usando outro CRM ou planilha. Migramos seus dados e mantemos o que funcionava — o AIOS substitui o que estava custando vendas.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[110px]" id="faq">
      <div className="mx-auto max-w-[980px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Dúvidas frequentes
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Tudo que você quer saber antes de começar
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <BlurFade key={item.q} delay={0.05 + i * 0.04} inView>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-2xl border bg-white/[0.02] p-5 text-left transition-all duration-400 hover:border-white/[0.12] hover:bg-white/[0.04] ${
                    isOpen ? "border-brand-blue/30 bg-white/[0.04]" : "border-white/[0.06]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-[1rem] font-semibold leading-snug tracking-[-0.005em] text-white">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-brand-blue/40 bg-brand-blue/15 text-brand-blue"
                          : "border-white/15 text-gray-400"
                      }`}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-[0.9rem] leading-[1.65] text-gray-400">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
