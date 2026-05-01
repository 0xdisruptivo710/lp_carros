"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M65.1,76.19c.57.57,1.28.86,2.13.86h15.56c1.99,0,3.68-.69,5.09-2.07,1.41-1.38,2.11-3.05,2.11-5.01v-4.92c1.16-.55,2.11-1.33,2.86-2.34.75-1.02,1.12-2.15,1.12-3.4v-8.89c0-1.25-.37-2.38-1.12-3.4-.75-1.02-1.7-1.8-2.86-2.34l-.18-4.99c-.37-4.33-1.5-8.35-3.41-12.05-1.9-3.7-4.37-6.9-7.41-9.62-3.03-2.72-6.51-4.84-10.43-6.37-3.92-1.53-8.06-2.29-12.42-2.29s-8.51.76-12.45,2.29c-3.94,1.53-7.42,3.66-10.43,6.4-3.01,2.74-5.48,5.96-7.41,9.65-1.2,2.3-2.08,4.72-2.66,7.26.34-.04.68-.07,1.03-.07,1.72,0,3.31.54,4.61,1.47,1.05-5.15,3.59-9.64,7.61-13.48,5.45-5.21,12.02-7.81,19.71-7.81s14.26,2.6,19.71,7.81c5.45,5.21,8.17,11.61,8.17,19.23v27.86c0,.33-.12.6-.36.8-.24.2-.53.31-.86.31h-15.56c-.85,0-1.56.29-2.13.86-.57.57-.86,1.28-.86,2.13s.29,1.56.86,2.13Z" />
        <path d="M42.46,49.25c.69.66,1.52.99,2.49.99s1.81-.33,2.49-.99c.69-.66,1.03-1.48,1.03-2.46s-.34-1.8-1.03-2.47c-.69-.67-1.52-1.01-2.49-1.01s-1.81.34-2.49,1.01c-.69.67-1.03,1.5-1.03,2.47s.34,1.79,1.03,2.46Z" />
        <path d="M64.82,49.25c.69.66,1.52.99,2.49.99s1.81-.33,2.49-.99c.69-.66,1.03-1.48,1.03-2.46s-.34-1.8-1.03-2.47c-.69-.67-1.52-1.01-2.49-1.01s-1.81.34-2.49,1.01c-.69.67-1.03,1.5-1.03,2.47s.34,1.79,1.03,2.46Z" />
        <path d="M39.78,27.31c-4.46,4.62-6.48,10.19-6.07,16.69,4.67-1.85,8.62-4.68,11.85-8.49,3.23-3.8,5.35-8.18,6.36-13.13,2.57,5.06,6.25,9.04,11.05,11.95,4.8,2.9,10.02,4.39,15.68,4.46-.9-5.43-3.47-9.86-7.69-13.28-4.22-3.42-9.1-5.13-14.62-5.13-6.58,0-12.09,2.31-16.55,6.93Z" />
        <path d="M42.4,58.17c0-1.59-1.29-2.87-2.87-2.87-9.19,0-12.44-3.26-12.44-12.44,0-1.59-1.29-2.87-2.87-2.87s-2.87,1.29-2.87,2.87c0,9.19-3.26,12.44-12.44,12.44-1.59,0-2.87,1.29-2.87,2.87s1.29,2.87,2.87,2.87c9.07,0,12.44,3.37,12.44,12.44,0,1.59,1.29,2.87,2.87,2.87s2.87-1.29,2.87-2.87c0-9.07,3.37-12.44,12.44-12.44,1.59,0,2.87-1.29,2.87-2.87Z" />
        <path d="M52.91,75.02c-5.38,0-7.03-1.64-7.03-7.03,0-1.59-1.29-2.87-2.87-2.87s-2.87,1.29-2.87,2.87c0,5.38-1.64,7.03-7.03,7.03-1.59,0-2.87,1.29-2.87,2.87s1.29,2.87,2.87,2.87c5.32,0,7.03,1.71,7.03,7.03,0,1.59,1.29,2.87,2.87,2.87s2.87-1.29,2.87-2.87c0-5.32,1.71-7.03,7.03-7.03,1.59,0,2.87-1.29,2.87-2.87s-1.29-2.87-2.87-2.87Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M87.45,39.25v-3.42c0-5.38-2.83-10.03-6.9-12.08v-3.94c0-5.94-4.25-10.8-9.47-10.8H28.31c-5.23,0-9.47,4.85-9.47,10.8v3.65c-4.39,1.87-7.52,6.71-7.52,12.36v4.15c-3.5,2.3-5.82,6.29-5.82,10.82v27.2c0,7.17,5.81,12.98,12.98,12.98h63.05c7.17,0,12.98-5.81,12.98-12.98v-27.2c0-5.03-2.86-9.39-7.05-11.55ZM28.31,15.63h42.76c1.95,0,3.56,1.87,3.56,4.19v2.8H24.76v-2.8c0-2.32,1.59-4.19,3.56-4.19ZM18.33,35.83c0-.88.19-1.71.51-2.44.75-1.73,2.29-2.91,4.06-2.91h52.98c2.52,0,4.57,2.4,4.57,5.35v1.99H18.33v-1.99ZM87.76,78c0,3.45-2.79,6.24-6.24,6.24H18.48c-3.44,0-6.24-2.79-6.24-6.24v-27.2c0-3.38,2.72-6.16,6.09-6.24h63.2c2.78,0,5.12,1.81,5.93,4.3.2.61.31,1.27.31,1.94v27.2Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M75.55,54.93l1.49,12.05c.34,2.64-.57,5.28-2.47,7.18l-20.38,20.38-8.09-24.34-16.24-16.24-24.34-8.15,20.38-20.38c1.89-1.89,4.53-2.81,7.18-2.47l12.05,1.49C72.51-2.93,94.78,5.22,94.78,5.22c0,0,8.15,22.27-19.23,49.71ZM51.15,30.59c-5.85,5.85-10.5,14.01-13.2,19.23l12.17,12.17c5.22-2.64,13.43-7.29,19.29-13.2,16.07-16.02,18.14-29.39,17.91-36.11-6.72-.23-20.09,1.84-36.16,17.91ZM72.97,35.64c0-4.71-3.9-8.61-8.61-8.61s-8.61,3.9-8.61,8.61,3.85,8.61,8.61,8.61,8.61-3.85,8.61-8.61ZM38.47,32.31l-6.49-.8-10.56,10.5,9.3,3.1c1.89-3.62,4.53-8.27,7.75-12.8ZM54.89,69.28l3.1,9.3,10.5-10.5-.8-6.54c-4.53,3.21-9.18,5.85-12.8,7.75ZM22.74,64.34c-3.56,0-6.77,1.44-9.13,3.79-7,7-9.53,27.78-9.53,27.78,0,0,20.78-2.53,27.78-9.53,2.35-2.35,3.79-5.57,3.79-9.13,0-7.12-5.8-12.92-12.92-12.92ZM25.78,80.3c-2.53,2.53-10.73,4.65-10.73,4.65,0,0,2.12-8.21,4.65-10.73,1.66-1.66,4.42-1.66,6.08,0s1.66,4.42,0,6.08Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M79.52,13.26c-19.68-2.89-40.21-2.89-59.87,0-8.12,1.19-14.02,8.18-14.02,16.62v25.19c0,8.43,5.9,15.42,14.02,16.62,3.68.54,7.41.98,11.1,1.32v16.55c0,1.27.76,2.42,1.94,2.9.39.16.8.24,1.2.24.82,0,1.62-.32,2.22-.92l17.51-17.51c.29-.29.68-.46,1.11-.47,8.29-.21,16.63-.92,24.79-2.12,8.12-1.19,14.01-8.18,14.01-16.62v-25.19c0-8.43-5.89-15.42-14.01-16.62ZM87.26,55.07c0,5.29-3.64,9.67-8.65,10.41-7.91,1.16-16,1.85-24.03,2.05-2.05.05-3.97.87-5.4,2.31l-12.15,12.15v-11.86c0-1.64-1.26-3-2.9-3.13-4.49-.34-9.05-.86-13.56-1.52-5.01-.74-8.65-5.11-8.65-10.41v-25.19c0-5.29,3.64-9.67,8.65-10.41,9.53-1.4,19.3-2.12,29.02-2.12s19.48.71,29.02,2.12c5.01.74,8.65,5.11,8.65,10.41v25.19Z" />
        <path d="M54.05,46.92h-26.19c-.93,0-1.71.3-2.33.9-.63.6-.94,1.35-.94,2.24s.31,1.64.94,2.24c.63.6,1.4.9,2.33.9h26.19c.93,0,1.71-.3,2.33-.9.63-.6.94-1.35.94-2.24s-.31-1.64-.94-2.24c-.63-.6-1.4-.9-2.33-.9Z" />
        <path d="M71.51,31.81H27.86c-.93,0-1.71.3-2.33.9-.63.6-.94,1.35-.94,2.24s.31,1.64.94,2.24c.63.6,1.4.9,2.33.9h43.66c.93,0,1.71-.3,2.33-.9.63-.6.94-1.35.94-2.24s-.31-1.64-.94-2.24c-.63-.6-1.4-.9-2.33-.9Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M41.22,13.19c-.91,0-1.67-.31-2.28-.92-.61-.61-.92-1.37-.92-2.28s.31-1.67.92-2.28c.61-.61,1.37-.92,2.28-.92h17.56c.91,0,1.67.31,2.28.92.61.61.92,1.37.92,2.28s-.31,1.67-.92,2.28c-.61.61-1.37.92-2.28.92h-17.56ZM50,60.38c.91,0,1.67-.31,2.28-.92.61-.61.92-1.37.92-2.28v-17.56c0-.91-.31-1.67-.92-2.28-.61-.61-1.37-.92-2.28-.92s-1.67.31-2.28.92c-.61.61-.92,1.37-.92,2.28v17.56c0,.91.31,1.67.92,2.28.61.61,1.37.92,2.28.92ZM50,93.21c-4.98,0-9.67-.95-14.07-2.86-4.41-1.9-8.26-4.5-11.55-7.8-3.29-3.29-5.89-7.14-7.8-11.55-1.9-4.41-2.86-9.1-2.86-14.07s.95-9.67,2.86-14.07c1.9-4.41,4.5-8.26,7.8-11.55,3.29-3.29,7.14-5.89,11.55-7.8,4.41-1.9,9.1-2.86,14.07-2.86,4.27,0,8.39.73,12.35,2.18,3.96,1.45,7.63,3.53,11.03,6.23l3.07-3.07c.59-.59,1.33-.89,2.23-.91s1.65.29,2.27.91c.62.62.93,1.37.93,2.25s-.31,1.63-.93,2.25l-3.07,3.07c2.7,3.39,4.78,7.07,6.23,11.03,1.45,3.96,2.18,8.07,2.18,12.35,0,4.98-.95,9.67-2.86,14.07-1.9,4.41-4.5,8.26-7.8,11.55-3.29,3.29-7.14,5.89-11.55,7.8-4.41,1.9-9.1,2.86-14.07,2.86ZM50,86.81c8.25,0,15.29-2.92,21.13-8.75,5.83-5.83,8.75-12.87,8.75-21.13s-2.92-15.29-8.75-21.13c-5.83-5.83-12.87-8.75-21.13-8.75s-15.29,2.92-21.13,8.75c-5.83,5.83-8.75,12.87-8.75,21.13s2.92,15.29,8.75,21.13c5.83,5.83,12.87,8.75,21.13,8.75Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M8.44,91.32c-1.16,0-2.28-.5-3.05-1.4-1.01-1.17-1.27-2.81-.66-4.23l6.66-15.55c-4.58-6.39-6.98-13.72-6.98-21.34C4.4,26.68,24.86,8.68,50,8.68s45.6,18,45.6,40.12-20.46,40.12-45.6,40.12c-6.53,0-12.82-1.19-18.72-3.53l-21.8,5.79c-.34.09-.69.14-1.04.14ZM50,16.76c-20.69,0-37.52,14.37-37.52,32.04,0,6.54,2.31,12.84,6.68,18.22.95,1.16,1.17,2.76.58,4.14l-4.32,10.09,15.11-4.01c.87-.23,1.8-.16,2.63.19,5.26,2.27,10.93,3.42,16.84,3.42,20.69,0,37.52-14.37,37.52-32.04s-16.83-32.04-37.52-32.04Z" />
        <rect x="26.54" y="43.83" width="9.63" height="9.63" />
        <rect x="45.18" y="43.83" width="9.63" height="9.63" />
        <rect x="64.13" y="43.83" width="9.63" height="9.63" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M91.28,9.68H8.72c-2.09,0-3.78,1.69-3.78,3.78s1.69,3.78,3.78,3.78h3.57v51.68c0,2.09,1.69,3.78,3.78,3.78h25.82l-12.47,10.99c-1.57,1.38-1.72,3.77-.34,5.34,1.38,1.57,3.77,1.72,5.34.34l14.92-13.16,14.92,13.16c.72.63,1.61.95,2.5.95,1.05,0,2.09-.43,2.84-1.28,1.38-1.57,1.23-3.96-.34-5.34l-12.47-10.99h27.32c2.09,0,3.78-1.69,3.78-3.78V17.24h3.34c2.09,0,3.78-1.69,3.78-3.78s-1.69-3.78-3.78-3.78ZM80.37,65.14H19.87V17.24h60.5v47.9Z" />
        <path d="M32.64,48.92l9.7-6.71,10.91,7.04c.63.41,1.34.6,2.05.6.94,0,1.87-.35,2.59-1.03l13.82-12.99c1.52-1.43,1.6-3.83.17-5.35s-3.83-1.6-5.35-.17l-11.66,10.96-10.55-6.8c-1.29-.83-2.95-.8-4.2.07l-11.78,8.15c-1.72,1.19-2.15,3.55-.96,5.27s3.55,2.15,5.27.96Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M50,46.71c-11.93,0-21.64-9.71-21.64-21.64S38.07,3.44,50,3.44s21.64,9.71,21.64,21.64-9.71,21.64-21.64,21.64ZM50,11.44c-7.52,0-13.64,6.12-13.64,13.64s6.12,13.64,13.64,13.64,13.64-6.12,13.64-13.64-6.12-13.64-13.64-13.64Z" />
        <path d="M90.8,95.21H9.28l-.1-3.9c-.02-.7-.31-17.18,11.12-28.92,7.26-7.45,17.46-11.23,30.31-11.23,19.63,0,29.51,10.97,34.33,20.17,5.08,9.68,5.62,19.28,5.64,19.68l.21,4.2ZM17.45,87.21h64.59c-1.62-8.77-7.87-28.05-31.43-28.05-10.58,0-18.83,2.95-24.53,8.76-6.1,6.23-8.03,14.49-8.63,19.29Z" />
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
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <path d="M50,6.89C26.21,6.89,6.89,26.21,6.89,50s19.31,43.11,43.11,43.11,43.11-19.31,43.11-43.11S73.79,6.89,50,6.89ZM71.55,54.31h-17.24v17.24h-8.62v-17.24h-17.24v-8.62h17.24v-17.24h8.62v17.24h17.24v8.62Z" />
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
