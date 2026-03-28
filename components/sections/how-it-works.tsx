"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    num: "1",
    title: "Diagnóstico gratuito",
    desc: "Entendemos sua operação atual, gargalos e oportunidades de crescimento sem compromisso.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80",
    imageAlt: "Consulta de negócios em concessionária",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth={2} />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.5} />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Configuração personalizada",
    desc: "A IA é treinada com o tom de voz, catálogo e processos da sua equipe de vendas.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
    imageAlt: "Profissional configurando sistema",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth={2} />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Ativação e integração",
    desc: "Conectamos com seus canais — WhatsApp, Instagram, site — em até 48 horas.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    imageAlt: "Equipe trabalhando em integração",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Gestão contínua",
    desc: "Seu gestor dedicado acompanha os resultados e otimiza a operação continuamente.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    imageAlt: "Monitoramento contínuo de resultados e métricas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-[110px]" id="como-funciona">
      <div className="mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-[72px] max-w-[580px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Como funciona
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Do diagnóstico ao resultado em 4 passos
            </h2>
          </div>
        </BlurFade>

        <div className="relative mx-auto max-w-[900px]">
          {/* Timeline line */}
          <div className="absolute bottom-6 left-[23px] top-6 w-[2px] bg-gradient-to-b from-brand-blue to-brand-pink opacity-[0.18] lg:left-1/2 lg:-translate-x-px" />

          {steps.map((step, i) => (
            <BlurFade key={i} delay={0.15 + i * 0.12} inView>
              <div
                className={`group relative flex gap-7 ${
                  i < steps.length - 1 ? "pb-[52px]" : ""
                } lg:items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number circle - mobile left, desktop center */}
                <div className="relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-blue/[0.22] bg-brand-blue/[0.08] font-display text-[1.05rem] font-extrabold text-brand-blue transition-all duration-[450ms] group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_28px_rgba(30,94,255,0.3)] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  {step.num}
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 lg:w-[calc(50%-40px)] ${
                    i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 group-hover:border-white/[0.1] group-hover:bg-white/[0.04]">
                    {/* Step image */}
                    <div className="relative h-[140px] w-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue backdrop-blur-sm">
                        {step.icon}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="mb-1.5 font-display text-[1.15rem] font-bold tracking-[-0.01em]">
                        {step.title}
                      </h3>
                      <p className="text-[0.9rem] leading-[1.6] text-gray-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
