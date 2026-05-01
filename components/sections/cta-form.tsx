"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const checks = [
  "Setup completo em até 48 horas",
  "Diagnóstico gratuito da sua operação",
  "Sem fidelidade ou multa de cancelamento",
  "Gestor dedicado desde o primeiro dia",
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* Key SVG icon for the automotive form */
const CarKeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-brand-blue">
    <circle cx="8" cy="15" r="5" stroke="currentColor" strokeWidth={2} />
    <path d="M11.5 11.5L21 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <path d="M18 2l3 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <path d="M15 5l3 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <circle cx="8" cy="15" r="2" stroke="currentColor" strokeWidth={1.5} opacity={0.4} />
  </svg>
);

function formatPhone(value: string) {
  let v = value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 6) return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  if (v.length > 2) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  if (v.length > 0) return `(${v}`;
  return v;
}

export function CtaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    if (!String(data.get("nome")).trim()) newErrors.nome = true;
    if (phone.replace(/\D/g, "").length < 10) newErrors.whatsapp = true;
    if (!String(data.get("loja")).trim()) newErrors.loja = true;
    if (!String(data.get("cidade")).trim()) newErrors.cidade = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        await fetch("https://aios-n8n-webhook.yspmhc.easypanel.host/webhook/lp-carros", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: String(data.get("nome")).trim(),
            whatsapp: phone,
            loja: String(data.get("loja")).trim(),
            cidade: String(data.get("cidade")).trim(),
          }),
        });
      } catch {
        // Submit even if webhook fails
      }
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden py-[110px]" id="formulario">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=60"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          aria-hidden="true"
        />
      </div>

      {/* Orbs */}
      <div className="orb animate-orb-drift absolute -left-[8%] -top-[10%] h-[400px] w-[400px] bg-brand-blue/[0.18]" />
      <div className="orb animate-orb-drift absolute -bottom-[10%] -right-[5%] h-[350px] w-[350px] bg-brand-pink/[0.07] [animation-delay:-18s]" />

      {/* Background Beams */}
      <BackgroundBeams className="z-[1] opacity-60" />

      <Particles
        className="absolute inset-0 z-[1]"
        quantity={40}
        ease={80}
        color="#1E5EFF"
        size={0.4}
      />

      <div className="relative z-[5] mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Left text */}
          <BlurFade delay={0.1} inView>
            <div>
              <div className="section-label mb-[18px] font-display">
                Comece agora
              </div>
              <h2 className="mb-[18px] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                Comece hoje.
                <br />
                Sem burocracia.
              </h2>
              <p className="mb-8 text-[1.08rem] leading-[1.75] text-gray-300">
                Preencha o formulário e nossa equipe entra em contato em
                minutos. Sem compromisso, sem enrolação.
              </p>
              <div className="flex flex-col gap-3.5">
                {checks.map((check) => (
                  <div
                    key={check}
                    className="flex items-center gap-3 text-[0.95rem] text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-brand-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {check}
                  </div>
                ))}
              </div>

              {/* Trust image */}
              <div className="mt-8 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80"
                  alt="Interior de concessionária moderna"
                  width={600}
                  height={300}
                  className="h-[160px] w-full object-cover opacity-70"
                />
              </div>
            </div>
          </BlurFade>

          {/* Form card */}
          <BlurFade delay={0.3} inView>
            <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.025] p-[38px_30px] backdrop-blur-2xl">
              {/* Gradient border overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl p-px [background:linear-gradient(135deg,rgba(30,94,255,0.18),transparent_50%,rgba(255,61,127,0.12))] [-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]" />

              <div className="mb-5 flex items-center gap-3">
                <CarKeyIcon />
                <h3 className="font-display text-[1.1rem] font-bold">
                  Solicite sua demonstração
                </h3>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {[
                  {
                    id: "fname",
                    name: "nome",
                    label: "Seu nome",
                    placeholder: "Como podemos te chamar?",
                    type: "text",
                  },
                  {
                    id: "fwhatsapp",
                    name: "whatsapp",
                    label: "WhatsApp",
                    placeholder: "(00) 00000-0000",
                    type: "tel",
                  },
                  {
                    id: "floja",
                    name: "loja",
                    label: "Nome da loja",
                    placeholder: "Ex: Nome da sua loja",
                    type: "text",
                  },
                  {
                    id: "fcidade",
                    name: "cidade",
                    label: "Cidade",
                    placeholder: "Sua cidade e estado",
                    type: "text",
                  },
                ].map((field) => (
                  <div key={field.id} className="mb-[18px]">
                    <label
                      htmlFor={field.id}
                      className="mb-[7px] block text-[0.82rem] font-semibold text-gray-300"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      value={
                        field.name === "whatsapp" ? phone : undefined
                      }
                      onChange={
                        field.name === "whatsapp"
                          ? (e) => setPhone(formatPhone(e.target.value))
                          : undefined
                      }
                      className={`w-full rounded-[11px] border bg-white/[0.04] px-4 py-[13px] text-[0.95rem] text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-brand-blue focus:bg-brand-blue/[0.04] focus:shadow-[0_0_0_3px_rgba(30,94,255,0.08)] ${
                        errors[field.name]
                          ? "border-brand-red bg-brand-red/[0.04] shadow-[0_0_0_3px_rgba(232,0,29,0.08)]"
                          : "border-white/[0.08]"
                      }`}
                    />
                    {errors[field.name] && (
                      <span className="mt-1 block text-[0.76rem] text-brand-red">
                        Campo obrigatório
                      </span>
                    )}
                  </div>
                ))}

                {submitted ? (
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-[15px] text-[0.95rem] font-bold text-white shadow-[0_0_28px_rgba(5,150,105,0.25)]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Recebemos! Entraremos em contato.
                  </div>
                ) : (
                  <ShimmerButton
                    type="submit"
                    shimmerColor="#ffffff"
                    shimmerDuration="3s"
                    borderRadius="12px"
                    background="rgba(30, 94, 255, 1)"
                    className="mb-4 w-full py-[15px] text-[0.95rem] font-bold shadow-[0_0_28px_rgba(30,94,255,0.25)] disabled:opacity-70"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="mr-2 h-[18px] w-[18px] animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth={3} strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quero o AIOS CRM na minha loja
                        <svg
                          className="ml-2 h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </ShimmerButton>
                )}
              </form>

              {!submitted && (
                <>
                  <div className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-brand-blue/15 bg-brand-blue/[0.04] px-3 py-2.5 text-[0.78rem] text-gray-300">
                    <svg className="h-3.5 w-3.5 shrink-0 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Respondemos em até <strong className="text-white">15 minutos</strong> em horário comercial (seg-sex, 9h–18h)</span>
                  </div>
                  <div className="mb-4 flex items-center gap-3.5">
                    <div className="h-px flex-1 bg-white/[0.07]" />
                    <span className="whitespace-nowrap text-[0.78rem] text-gray-400">
                      ou se preferir
                    </span>
                    <div className="h-px flex-1 bg-white/[0.07]" />
                  </div>
                  <a
                    href="https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-brand-green/[0.18] bg-brand-green/[0.06] px-4 py-[13px] text-[0.9rem] font-semibold text-brand-green transition-all duration-400 hover:-translate-y-0.5 hover:border-brand-green/[0.35] hover:bg-brand-green/[0.1]"
                  >
                    <WhatsAppIcon />
                    Prefiro falar agora no WhatsApp
                  </a>
                  <p className="mt-4 text-center text-[0.72rem] leading-[1.55] text-gray-500">
                    Seus dados são usados só para o contato comercial. Sem spam, sem revenda. Você pode cancelar quando quiser.
                  </p>
                </>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
