"use client";

import { BlurFade } from "@/components/ui/blur-fade";

export function Results() {
  return (
    <section
      className="relative bg-[#F8F9FF] py-[110px] text-deep"
      id="resultados"
    >
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

        {/* Adicionar provas sociais reais quando disponíveis */}
      </div>
    </section>
  );
}
