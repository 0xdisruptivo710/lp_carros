"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    value: "40",
    prefix: "+",
    suffix: "",
    label: "Lojas usando hoje",
    color: "text-brand-blue",
    useTicker: true,
  },
  {
    value: "4–9",
    prefix: "+",
    suffix: "",
    label: "Vendas extras por mês, em média",
    color: "text-brand-pink",
    useTicker: false,
  },
  {
    value: "40",
    prefix: "",
    suffix: "%",
    label: "Atendimentos da IA viram agendamento presencial",
    color: "text-brand-green",
    useTicker: true,
  },
];

export function Results() {
  return (
    <section className="relative py-[110px]" id="resultados">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-16 max-w-[640px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Resultados
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Números que falam por si
            </h2>
          </div>
        </BlurFade>

        {/* Stats grid */}
        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.2 + i * 0.1} inView>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-colors duration-500 hover:border-white/[0.1] hover:bg-white/[0.035]">
                <div
                  className={`font-display text-[clamp(2.6rem,5.5vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em] ${stat.color}`}
                >
                  {stat.useTicker ? (
                    <NumberTicker
                      value={Number(stat.value)}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="mt-3 text-[0.92rem] leading-[1.45] text-gray-400">
                  {stat.label}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Quote */}
        <BlurFade delay={0.6} inView>
          <div className="relative mx-auto max-w-[860px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-10 sm:px-12">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-4 font-display text-[7rem] leading-none text-brand-blue/[0.12]"
            >
              &ldquo;
            </span>
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-brand-blue/40" />
            <blockquote className="relative pl-4 text-[1.05rem] leading-[1.7] text-gray-300 sm:text-[1.15rem]">
              A IA extrai todas as informações que a gente precisa. O time chega
              na conversa já sabendo o que o cliente quer.
            </blockquote>
            <cite className="relative mt-4 block pl-4 text-[0.85rem] not-italic text-gray-500">
              — Gerente de vendas, loja parceira
            </cite>
          </div>
        </BlurFade>

        {/* Disclaimer */}
        <BlurFade delay={0.8} inView>
          <p className="mt-8 text-center text-[0.78rem] leading-[1.55] text-gray-500">
            Médias com base em dados de lojas parceiras ativas no AIOS CRM.
            Resultado pode variar conforme operação.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
