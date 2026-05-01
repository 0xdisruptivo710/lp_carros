"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const cards = [
  {
    src: "/platform/chatbot-ias.png",
    alt: "Cards de configuração de agentes de IA do AIOS CRM",
    title: "Agentes de IA",
    desc: "Crie e treine vendedores virtuais com o tom e o catálogo da sua loja.",
    aspect: "aspect-[4/3]",
    objectPosition: "object-center",
  },
  {
    src: "/platform/canais.png",
    alt: "Gráfico donut mostrando atendimentos por canal — WhatsApp, Instagram e Messenger",
    title: "Tudo num lugar só",
    desc: "WhatsApp, Instagram e Messenger no mesmo painel — sem trocar de aba.",
    aspect: "aspect-[4/3]",
    objectPosition: "object-center",
  },
  {
    src: "/platform/funil-conversao.png",
    alt: "Funil de conversão da campanha mostrando taxas de envio, entrega e leitura",
    title: "Funil em tempo real",
    desc: "Saiba exatamente onde o lead trava no caminho até a venda.",
    aspect: "aspect-[4/3]",
    objectPosition: "object-center",
  },
];

export function Platform() {
  return (
    <section className="relative py-[110px]" id="plataforma">
      <div className="mx-auto max-w-[1200px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-14 max-w-[680px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              A plataforma
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Veja o AIOS por <span className="text-brand-blue">dentro</span>
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.65] text-gray-400">
              Sem mockup genérico — telas reais do produto que está rodando hoje em mais de 40 lojas.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <BlurFade key={card.title} delay={0.15 + i * 0.1} inView>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.035]">
                {/* Image area with light bg to match real platform UI */}
                <div className={`relative ${card.aspect} w-full overflow-hidden bg-[#F8F9FF]`}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`${card.objectPosition} object-cover transition-transform duration-700 group-hover:scale-[1.03]`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Caption */}
                <div className="p-6">
                  <h3 className="mb-1.5 font-display text-[1.05rem] font-bold tracking-[-0.01em]">
                    {card.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.6] text-gray-400">
                    {card.desc}
                  </p>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
