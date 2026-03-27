"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const stats = [
  {
    value: 40,
    prefix: "+",
    suffix: "%",
    color: "text-brand-blue",
    label: "de conversão em média",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        <path d="M7 14l4-4 4 3 5-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    color: "text-brand-red",
    label: "mais leads reativados",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M16 3l5 5-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 8H9a4 4 0 000 8h12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    color: "text-emerald-400",
    label: "leads perdidos por falta de resposta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
  },
];

const Star = () => (
  <svg className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const testimonials = [
  {
    quote:
      "Em 30 dias recuperamos clientes que estavam parados há meses. O AIOS literalmente pagou o investimento na primeira semana.",
    name: "Carlos Mendes",
    role: "Gerente Comercial · AutoPrime Veículos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "Antes, cada vendedor tinha seu WhatsApp. Hoje temos controle total. Sabemos exatamente quem falou com quem e em que estágio está.",
    name: "Fernanda Oliveira",
    role: "Diretora · Grupo Nova Roda",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "A IA responde em segundos com o tom da nossa loja. Os clientes nem percebem que é automático. Nosso time foca no que importa: fechar.",
    name: "Ricardo Santos",
    role: "Proprietário · RS Motors",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
  },
];

export function Results() {
  return (
    <section
      className="relative bg-[#F8F9FF] py-[110px] text-deep"
      id="resultados"
    >
      {/* Background image accent */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=60"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-16 max-w-[580px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Resultados
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Números que falam por si
            </h2>
          </div>
        </BlurFade>

        {/* Stats */}
        <div className="mb-[72px] grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.1} inView>
              <div className="rounded-2xl border border-deep/[0.06] bg-deep/[0.03] py-9 text-center transition-all duration-500 hover:border-deep/[0.12] hover:bg-deep/[0.05] hover:shadow-lg">
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-deep/[0.06] ${stat.color}`}>
                  {stat.icon}
                </div>
                <div
                  className={`font-display text-[clamp(2.6rem,5vw,3.6rem)] font-extrabold leading-none tracking-[-0.04em] ${stat.color}`}
                >
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className={stat.color}
                    delay={0.3}
                  />
                </div>
                <div className="mt-2 text-[0.92rem] font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={i} delay={0.2 + i * 0.1} inView>
              <SpotlightCard
                className="h-full bg-deep"
                spotlightColor="rgba(30, 94, 255, 0.08)"
                spotlightSize={300}
              >
                <div className="p-[34px_30px]">
                  {/* Stars */}
                  <div className="mb-[18px] flex gap-[3px]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} />
                    ))}
                  </div>

                  <p className="mb-6 text-[1.02rem] italic leading-[1.7] text-gray-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={46}
                      height={46}
                      className="h-[46px] w-[46px] rounded-full object-cover"
                    />
                    <div>
                      <div className="text-[0.92rem] font-bold text-white">
                        {t.name}
                      </div>
                      <div className="mt-0.5 text-[0.78rem] text-gray-400">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
