"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth={1.5} />
        <circle cx="24" cy="22" r="6" stroke="currentColor" strokeWidth={1.5} />
        <path d="M18 22a6 6 0 0112 0" stroke="currentColor" strokeWidth={1.5} opacity={0.3} />
        <path d="M24 16v-2M30 22h2M16 22h-2M28.24 17.76l1.42-1.42M19.76 17.76l-1.42-1.42" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.5} />
        <path d="M15 34h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M12 38h24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />
        <circle cx="24" cy="22" r="2" fill="currentColor" opacity={0.4} />
      </svg>
    ),
    title: "IA de Atendimento",
    desc: "Agente humanizado que capta dados, apresenta o veículo e qualifica o lead no tom da sua equipe.",
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    accentColor: "text-blue-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    track: "Captar",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="4" y="6" width="12" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} />
        <rect x="18" y="14" width="12" height="28" rx="3" stroke="currentColor" strokeWidth={1.5} />
        <rect x="32" y="10" width="12" height="32" rx="3" stroke="currentColor" strokeWidth={1.5} />
        <path d="M8 12h4M8 16h4M8 20h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <path d="M22 20h4M22 24h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <path d="M36 16h4M36 20h4M36 24h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <circle cx="10" cy="38" r="2" fill="currentColor" opacity={0.3} />
        <circle cx="24" cy="38" r="2" fill="currentColor" opacity={0.3} />
        <circle cx="38" cy="38" r="2" fill="currentColor" opacity={0.3} />
      </svg>
    ),
    title: "CRM Kanban",
    desc: "Visualize todo o funil de vendas em tempo real — da consulta ao fechamento do negócio.",
    gradient: "from-indigo-500/20 via-indigo-600/10 to-transparent",
    accentColor: "text-indigo-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    track: "Vender",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="10" y="4" width="28" height="40" rx="6" stroke="currentColor" strokeWidth={1.5} />
        <rect x="16" y="16" width="16" height="10" rx="3" stroke="currentColor" strokeWidth={1.5} opacity={0.5} />
        <path d="M16 20h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />
        <path d="M16 23h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />
        <rect x="16" y="30" width="16" height="6" rx="2" stroke="currentColor" strokeWidth={1.5} opacity={0.3} />
        <circle cx="36" cy="12" r="7" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={1.5} />
        <path d="M33 12l2 2 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="10" r="1.5" fill="currentColor" opacity={0.3} />
      </svg>
    ),
    title: "Disparos Segmentados",
    desc: "Envie ofertas de carros específicos para leads com perfil certo, via API oficial do WhatsApp.",
    gradient: "from-pink-500/20 via-pink-600/10 to-transparent",
    accentColor: "text-pink-400",
    colorClass: "bg-brand-pink/10 text-brand-pink",
    track: "Captar",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M8 40V28l8-10 8 6 8-12 8-4v32H8z" fill="currentColor" opacity={0.08} />
        <path d="M8 40V28l8-10 8 6 8-12 8-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="8" r="3" stroke="currentColor" strokeWidth={1.5} />
        <path d="M40 8l-3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M4 40h40" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.3} />
        <path d="M20 30l-2-2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity={0.4} />
        <path d="M16 18v-2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity={0.3} />
      </svg>
    ),
    title: "Reativação de Leads",
    desc: "Encontre clientes que pesquisaram mas não compraram e reconquiste-os automaticamente.",
    gradient: "from-red-500/20 via-red-600/10 to-transparent",
    accentColor: "text-red-400",
    colorClass: "bg-brand-red/10 text-brand-red",
    track: "Reativar",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth={1.5} />
        <path d="M16 4v8M32 4v8M6 18h36" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <rect x="12" y="24" width="6" height="6" rx="1.5" fill="currentColor" opacity={0.15} stroke="currentColor" strokeWidth={1} />
        <rect x="21" y="24" width="6" height="6" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth={1} opacity={0.4} />
        <rect x="30" y="24" width="6" height="6" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth={1} opacity={0.4} />
        <path d="M14 27l1.5 1.5 3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="33" width="6" height="3" rx="1" fill="currentColor" opacity={0.08} />
        <rect x="21" y="33" width="6" height="3" rx="1" fill="currentColor" opacity={0.08} />
      </svg>
    ),
    title: "Gestão de Agenda",
    desc: "Agendamentos e lembretes automáticos para test drives, visitas e follow-ups.",
    gradient: "from-cyan-500/20 via-cyan-600/10 to-transparent",
    accentColor: "text-cyan-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    track: "Vender",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <circle cx="18" cy="16" r="6" stroke="currentColor" strokeWidth={1.5} />
        <circle cx="34" cy="16" r="5" stroke="currentColor" strokeWidth={1.5} opacity={0.5} />
        <path d="M6 40v-4a8 8 0 018-8h8a8 8 0 018 8v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M30 28a6 6 0 016 6v6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <circle cx="12" cy="16" r="1" fill="currentColor" opacity={0.3} />
        <path d="M16 36h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.2} />
      </svg>
    ),
    title: "Gestão da Equipe",
    desc: "Controle todos os números, atendentes e conversas da operação em um único lugar.",
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    accentColor: "text-emerald-400",
    colorClass: "bg-brand-green/10 text-brand-green",
    track: "Gerir",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M6 6v36h36" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M14 34l8-12 8 6 10-16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="12" r="3" fill="currentColor" opacity={0.2} stroke="currentColor" strokeWidth={1.5} />
        <path d="M12 42v-4M20 42v-8M28 42v-6M36 42v-10" stroke="currentColor" strokeWidth={3} strokeLinecap="round" opacity={0.12} />
        <path d="M6 26h4M6 18h4M6 34h4" stroke="currentColor" strokeWidth={1} strokeLinecap="round" opacity={0.25} />
      </svg>
    ),
    title: "Relatórios de Tráfego",
    desc: "Rastreamento completo das campanhas pagas — saiba exatamente o que converte em vendas.",
    gradient: "from-violet-500/20 via-violet-600/10 to-transparent",
    accentColor: "text-violet-400",
    colorClass: "bg-brand-pink/10 text-brand-pink",
    track: "Captar",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth={1.5} />
        <path d="M12 42v-2a12 12 0 0124 0v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M24 14v4l3 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx="38" cy="10" r="6" fill="currentColor" opacity={0.1} stroke="currentColor" strokeWidth={1.5} />
        <path d="M36 10h4M38 8v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M18 38h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.2} />
      </svg>
    ),
    title: "Gestor Dedicado",
    desc: "Um profissional AIOS gerencia sua conta e otimiza continuamente suas operações.",
    gradient: "from-blue-500/20 via-sky-600/10 to-transparent",
    accentColor: "text-sky-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    track: "Gerir",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M24 10C18 4 8 6 8 16c0 12 16 22 16 22s16-10 16-22c0-10-10-12-16-6z" stroke="currentColor" strokeWidth={1.5} />
        <path d="M24 10C18 4 8 6 8 16c0 12 16 22 16 22s16-10 16-22c0-10-10-12-16-6z" fill="currentColor" opacity={0.06} />
        <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth={1.5} />
        <path d="M22 20l1.5 1.5 3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 28a12 12 0 0016 0" stroke="currentColor" strokeWidth={1} strokeLinecap="round" opacity={0.2} />
      </svg>
    ),
    title: "Recuperação de Clientes",
    desc: "Reative clientes inativos da base com comunicações personalizadas e automáticas.",
    gradient: "from-rose-500/20 via-rose-600/10 to-transparent",
    accentColor: "text-rose-400",
    colorClass: "bg-brand-red/10 text-brand-red",
    track: "Reativar",
  },
];

const trackStyles: Record<string, string> = {
  Captar: "border-brand-blue/25 bg-brand-blue/[0.08] text-brand-blue",
  Vender: "border-brand-pink/25 bg-brand-pink/[0.08] text-brand-pink",
  Reativar: "border-brand-red/25 bg-brand-red/[0.08] text-brand-red",
  Gerir: "border-brand-green/25 bg-brand-green/[0.08] text-brand-green",
};

export function Features() {
  return (
    <section className="py-[110px]" id="funcionalidades">
      <div className="mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-16 max-w-[580px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Funcionalidades
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Tudo que sua loja precisa — captar, vender, reativar e gerir
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <BlurFade key={i} delay={0.05 + i * 0.06} inView>
              <MagicCard className="h-full overflow-hidden">
                {/* Icon illustration area */}
                <div className={`relative flex h-[160px] w-full items-center justify-center overflow-hidden bg-gradient-to-b ${f.gradient}`}>
                  <div className={`h-[80px] w-[80px] ${f.accentColor} transition-transform duration-700 group-hover:scale-110`}>
                    {f.icon}
                  </div>
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                </div>

                {/* Feature content */}
                <div className="p-[26px] pt-5">
                  <span
                    className={`mb-3 inline-flex items-center rounded-full border px-2.5 py-[3px] text-[0.66rem] font-bold uppercase tracking-[0.08em] ${trackStyles[f.track]}`}
                  >
                    {f.track}
                  </span>
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.6] text-gray-400">
                    {f.desc}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
