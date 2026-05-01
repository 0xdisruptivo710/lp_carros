"use client";

import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* Automotive speedometer SVG accent */
const SpeedometerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-brand-blue">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v2" strokeLinecap="round" />
    <path d="M6 12h2" strokeLinecap="round" />
    <path d="M16 12h2" strokeLinecap="round" />
    <path d="M7.76 7.76l1.42 1.42" strokeLinecap="round" />
    <path d="M14.83 9.17l1.42-1.42" strokeLinecap="round" />
    <path d="M12 12l3-5" strokeLinecap="round" strokeWidth={2} />
  </svg>
);

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[140px] pb-[100px]" id="hero">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Carro esportivo em ambiente dramático"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/92 via-deep/80 to-deep" />
      </div>

      {/* Animated orbs */}
      <div className="orb animate-orb-drift absolute left-0 top-[5%] h-[550px] w-[550px] bg-brand-blue/[0.18]" />
      <div className="orb animate-orb-drift absolute right-[5%] top-[-5%] h-[420px] w-[420px] bg-brand-red/[0.10] [animation-delay:-9s]" />
      <div className="orb animate-orb-drift absolute bottom-0 left-[30%] h-[380px] w-[380px] bg-brand-pink/[0.07] [animation-delay:-18s]" />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Background Beams */}
      <BackgroundBeams className="z-[1]" />

      {/* Particles - primary blue */}
      <Particles
        className="absolute inset-0 z-[2]"
        quantity={120}
        ease={80}
        color="#1E5EFF"
        size={0.6}
      />
      {/* Particles - accent pink */}
      <Particles
        className="absolute inset-0 z-[2]"
        quantity={30}
        ease={100}
        color="#FF3D7F"
        size={0.4}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          {/* Badge */}
          <BlurFade delay={0.2} inView>
            <div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-brand-blue/[0.14] bg-brand-blue/[0.06] px-[18px] py-2 text-[0.78rem] font-semibold text-brand-blue">
              <span className="h-[7px] w-[7px] animate-badge-pulse rounded-full bg-brand-blue" />
              Mais de 40 lojas usando no Brasil
            </div>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.4} inView>
            <h1 className="font-display text-[clamp(2.6rem,6.5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              <TextGenerateEffect
                words="Sua Loja Vende Mais."
                className="gradient-text inline"
                duration={0.6}
              />
              <br />
              <TextGenerateEffect
                words="Seu Time Trabalha Menos."
                className="inline text-white"
                duration={0.6}
              />
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.7} inView>
            <p className="mb-11 max-w-[580px] text-[clamp(1rem,1.8vw,1.18rem)] leading-[1.75] text-gray-300">
              O CRM com IA que atende, qualifica e agenda seus leads no WhatsApp — para a equipe focar só no fechamento.
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.9} inView>
            <div className="flex flex-wrap items-center gap-3.5">
              <a href="#formulario">
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerDuration="3s"
                  borderRadius="12px"
                  background="rgba(30, 94, 255, 1)"
                  className="px-8 py-4 text-base font-semibold shadow-[0_0_32px_rgba(30,94,255,0.28)]"
                >
                  <SpeedometerIcon />
                  <span className="ml-2">Quero uma demonstração</span>
                  <svg className="ml-2 h-[18px] w-[18px] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </ShimmerButton>
              </a>

              <a
                href="https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-brand-green/25 bg-brand-green/[0.08] px-7 py-4 text-base font-semibold text-brand-green transition-all duration-400 hover:-translate-y-0.5 hover:border-brand-green/45 hover:bg-brand-green/[0.14] hover:shadow-[0_8px_30px_rgba(37,211,102,0.15)]"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
