"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M4.93 4.93l14.14 14.14" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    title: "Leads esfriando",
    text: "Leads entrando e sumindo sem resposta rápida — cada minuto custa uma venda.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth={2} />
        <path d="M15 6H9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        <path d="M8 10l3 3 5-5" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "WhatsApp caótico",
    text: "Equipe usando WhatsApp pessoal sem controle — conversas perdidas e histórico zero.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={2} />
        <path d="M18 8l4-4m0 0l-4-4m4 4H14" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Clientes esquecidos",
    text: "Clientes antigos que nunca mais voltaram a te procurar — ouro parado na base.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth={2} />
        <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth={1.5} />
        <path d="M13 13l4 4m0-4l-4 4" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    title: "Funil invisível",
    text: "Zero organização: quem estava negociando o quê? Qual vendedor fechou mais?",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth={2} />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <path d="M10 15l2 2 4-4" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d="M10 14l4 4m0-4l-4 4" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    title: "Agenda no escuro",
    text: "Agendamentos perdidos por falta de lembrete automático — test drives que nunca acontecem.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <path d="M2 12h2m16 0h2M12 2v2m0 16v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.3" />
        <path d="M8 16l8-8" stroke="#E8001D" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    title: "Tráfego cego",
    text: "Tráfego pago rodando sem saber o que realmente converte em vendas de veículos.",
  },
];

export function Problems() {
  return (
    <section className="relative py-[110px]" id="problemas">
      {/* Subtle background car image */}
      <div className="absolute inset-0 opacity-[0.025]">
        <Image
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=60"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mb-14">
            <div className="section-label mb-[18px] font-display">O diagnóstico</div>
            <h2 className="max-w-[580px] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Reconhece algum desses{" "}
              <em className="not-italic text-brand-red">sintomas</em> na sua loja?
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.08} inView>
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(232, 0, 29, 0.08)"
                spotlightSize={300}
              >
                <div className="flex items-start gap-[18px] p-[24px_26px]">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-brand-red/[0.07] text-brand-red transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {p.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="mb-1 font-display text-[0.92rem] font-bold text-brand-red/80">
                      {p.title}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.55] text-gray-300">
                      {p.text}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.6} inView>
          <div className="mt-12 rounded-r-xl border-l-[3px] border-brand-red bg-brand-red/[0.03] px-7 py-6">
            <p className="text-[1.05rem] italic leading-[1.6] text-gray-300">
              <strong className="not-italic text-brand-red">Enquanto você lê isso,</strong>{" "}
              leads estão esfriando no WhatsApp de alguém da sua equipe.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
