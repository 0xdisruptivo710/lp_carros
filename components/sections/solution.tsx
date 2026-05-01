"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BackgroundBeams } from "@/components/ui/background-beams";

const tags = [
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    label: "IA Integrada",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    label: "WhatsApp API",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    label: "LGPD Compliant",
  },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Setup em 48h" },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    label: "Suporte Dedicado",
  },
];

export function Solution() {
  return (
    <section
      className="relative bg-[#F8F9FF] py-[110px] text-deep"
      id="solucao"
    >
      {/* Top gradient bar */}
      <div className="absolute left-0 right-0 top-[-2px] h-[3px] bg-gradient-to-r from-brand-blue via-brand-pink to-brand-red" />

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Text */}
          <BlurFade delay={0.1} inView>
            <div>
              <div className="section-label mb-[18px] font-display">
                A solução
              </div>
              <h2 className="mb-[22px] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                O sistema que transforma WhatsApp em <span className="text-brand-blue">máquina de vendas</span>
              </h2>
              <p className="mb-7 text-[1.08rem] leading-[1.75] text-gray-600">
                A plataforma de gestão e automação de vendas feita para
                concessionárias e lojas de veículos que querem escalar sem perder
                a humanidade no atendimento.
              </p>

              {/* Showcase photo */}
              <div className="mb-7 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=700&q=80"
                  alt="Showroom moderno de veículos"
                  width={700}
                  height={400}
                  className="h-[200px] w-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/[0.06] px-[15px] py-[7px] text-[0.82rem] font-semibold text-brand-blue"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={tag.icon}
                      />
                    </svg>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Dashboard mockup */}
          <BlurFade delay={0.3} inView>
            <div className="relative">
              <div className="mockup">
                <div className="flex items-center gap-[7px] border-b border-white/[0.05] bg-white/[0.025] px-[18px] py-[13px]">
                  <div className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
                  <div className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
                  <div className="h-[9px] w-[9px] rounded-full bg-[#28CA41]" />
                  <span className="ml-auto font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/30">
                    AIOS CRM — Dashboard
                  </span>
                </div>

                {/* Stats row */}
                <div className="p-[18px]">
                  <div className="mb-4 grid grid-cols-3 gap-2.5">
                    {[
                      {
                        label: "Leads ativos",
                        value: "142",
                        color: "text-brand-blue",
                      },
                      {
                        label: "Conversão",
                        value: "34%",
                        color: "text-brand-green",
                      },
                      {
                        label: "Reativados",
                        value: "67",
                        color: "text-brand-pink",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[10px] border border-white/[0.04] bg-white/[0.025] p-3"
                      >
                        <div className="text-[0.58rem] uppercase tracking-[0.06em] text-white/35">
                          {stat.label}
                        </div>
                        <div
                          className={`font-display text-[1.1rem] font-bold ${stat.color}`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Kanban columns */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      {
                        name: "Novos",
                        count: "12",
                        cards: [
                          {
                            name: "João Silva",
                            sub: "Civic 2024 · Via Instagram",
                            color: "border-l-brand-blue",
                          },
                          {
                            name: "Ana Costa",
                            sub: "HRV · Via Google Ads",
                            color: "border-l-brand-red",
                          },
                          {
                            name: "Pedro Lima",
                            sub: "Corolla · Indicação",
                            color: "border-l-brand-blue",
                          },
                        ],
                      },
                      {
                        name: "Negociação",
                        count: "8",
                        cards: [
                          {
                            name: "Maria Souza",
                            sub: "Tracker · Test drive",
                            color: "border-l-brand-pink",
                          },
                          {
                            name: "Lucas Rocha",
                            sub: "Compass · Financiamento",
                            color: "border-l-brand-pink",
                          },
                        ],
                      },
                      {
                        name: "Fechamento",
                        count: "5",
                        cards: [
                          {
                            name: "Carlos Mendes",
                            sub: "T-Cross · R$ 124.900",
                            color: "border-l-brand-green",
                          },
                          {
                            name: "Fernanda Dias",
                            sub: "Onix Plus · R$ 89.900",
                            color: "border-l-brand-green",
                          },
                        ],
                      },
                    ].map((col) => (
                      <div
                        key={col.name}
                        className="rounded-[10px] border border-white/[0.035] bg-white/[0.015] p-2.5"
                      >
                        <div className="mb-2 flex items-center justify-between border-b border-white/[0.04] pb-[7px]">
                          <span className="text-[0.58rem] font-bold uppercase tracking-[0.06em] text-white/40">
                            {col.name}
                          </span>
                          <span className="rounded-full bg-brand-blue/[0.12] px-[7px] py-[2px] text-[0.55rem] font-bold text-brand-blue">
                            {col.count}
                          </span>
                        </div>
                        {col.cards.map((card) => (
                          <div
                            key={card.name}
                            className={`mb-1.5 rounded-[7px] border border-white/[0.05] border-l-[3px] bg-white/[0.03] p-[9px] last:mb-0 ${card.color}`}
                          >
                            <div className="text-[0.62rem] font-semibold text-white">
                              {card.name}
                            </div>
                            <div className="text-[0.55rem] text-white/30">
                              {card.sub}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Real car image below kanban */}
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                      alt="Porsche em estrada de montanha"
                      width={800}
                      height={400}
                      className="h-auto w-full object-cover opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Beams behind the mockup */}
              <BackgroundBeams className="-z-10 opacity-50" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
