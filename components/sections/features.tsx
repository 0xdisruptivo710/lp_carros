"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 002 2h4a2 2 0 002-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7z" stroke="currentColor" strokeWidth={1.5} />
        <path d="M10 21h4M12 2v1m7.07 2.93l-.71.71M22 12h-1M3 12H2m3.64-5.36l-.71-.71" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx="12" cy="9" r="2" fill="currentColor" opacity={0.4} />
      </svg>
    ),
    title: "IA de Atendimento",
    desc: "Agente humanizado que capta dados, apresenta o veículo e qualifica o lead no tom da sua equipe.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    imageAlt: "Tecnologia de inteligência artificial em atendimento",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
        <path d="M10 6.5h4M17.5 10v4M10 17.5h4M6.5 10v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
      </svg>
    ),
    title: "CRM Kanban",
    desc: "Visualize todo o funil de vendas em tempo real — da consulta ao fechamento do negócio.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Dashboard de CRM com funil de vendas",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth={1.5} />
        <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <circle cx="18" cy="5" r="3" fill="currentColor" opacity={0.3} />
      </svg>
    ),
    title: "Disparos Segmentados",
    desc: "Envie ofertas de carros específicos para leads com perfil certo, via API oficial do WhatsApp.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    imageAlt: "Integração com API oficial do WhatsApp",
    colorClass: "bg-brand-pink/10 text-brand-pink",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M4 12l1.41 1.41L12 6.83l6.59 6.58L20 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M4 18l1.41 1.41L12 12.83l6.59 6.58L20 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
        <path d="M12 2v4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    title: "Reativação de Leads",
    desc: "Encontre clientes que pesquisaram mas não compraram e reconquiste-os automaticamente.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    imageAlt: "Profissional reativando leads no sistema",
    colorClass: "bg-brand-red/10 text-brand-red",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth={1.5} />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M8 15l2 2 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gestão de Agenda",
    desc: "Agendamentos e lembretes automáticos para test drives, visitas e follow-ups.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    imageAlt: "Equipe de vendas em reunião",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={1.5} />
        <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx="19" cy="7" r="3" stroke="currentColor" strokeWidth={1.5} opacity={0.4} />
        <path d="M19 12a3 3 0 013 3v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
      </svg>
    ),
    title: "Gestão da Equipe",
    desc: "Controle todos os números, atendentes e conversas da operação em um único lugar.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imageAlt: "Equipe trabalhando em colaboração",
    colorClass: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M7 16l4-6 4 3 5-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="2" fill="currentColor" opacity={0.3} />
      </svg>
    ),
    title: "Relatórios de Tráfego",
    desc: "Rastreamento completo das campanhas pagas — saiba exatamente o que converte em vendas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imageAlt: "Relatórios e gráficos de performance",
    colorClass: "bg-brand-pink/10 text-brand-pink",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth={1.5} />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} opacity={0.3} />
      </svg>
    ),
    title: "Gestor Dedicado",
    desc: "Um profissional AIOS gerencia sua conta e otimiza continuamente suas operações.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    imageAlt: "Gestor profissional dedicado à sua conta",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[23px] w-[23px]">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth={1.5} />
        <path d="M12 8l2 4-2 1-2-1 2-4z" fill="currentColor" opacity={0.3} />
      </svg>
    ),
    title: "Recuperação de Clientes",
    desc: "Reative clientes inativos da base com comunicações personalizadas e automáticas.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    imageAlt: "Profissional focada em recuperação de clientes",
    colorClass: "bg-brand-red/10 text-brand-red",
  },
];

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
              Tudo que sua loja precisa em um só lugar
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <BlurFade key={i} delay={0.05 + i * 0.06} inView>
              <MagicCard className="h-full overflow-hidden">
                {/* Feature image */}
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
                </div>

                {/* Feature content */}
                <div className="p-[26px] pt-4">
                  <div
                    className={`mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-[14px] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${f.colorClass}`}
                  >
                    {f.icon}
                  </div>
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
