import Image from "next/image";

/* Car silhouette for brand */
const CarSilhouette = () => (
  <svg viewBox="0 0 120 40" fill="none" className="h-[28px] w-auto opacity-[0.06]">
    <path
      d="M10 28h100v-4c0-2-1-4-3-4H85l-8-10c-1.5-2-4-3-6.5-3h-21c-2.5 0-5 1-6.5 3L35 20H13c-2 0-3 2-3 4v4z"
      fill="currentColor"
      className="text-brand-blue"
    />
    <circle cx="30" cy="30" r="6" fill="currentColor" className="text-brand-blue" />
    <circle cx="30" cy="30" r="3" fill="#0A1628" />
    <circle cx="90" cy="30" r="6" fill="currentColor" className="text-brand-blue" />
    <circle cx="90" cy="30" r="3" fill="#0A1628" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Footer() {
  return (
    <>
      <footer className="relative border-t border-white/[0.05] pb-7 pt-14">
        {/* Subtle car image accent */}
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=40"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6">
          <div className="mb-10 grid gap-9 md:grid-cols-[2fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="font-display text-[1.45rem] font-extrabold tracking-tight"
              >
                AIOS<span className="text-brand-blue">CRM</span>
              </a>
              <p className="mt-3.5 max-w-[300px] text-[0.88rem] leading-[1.6] text-gray-400">
                Gestão inteligente de vendas para lojas de veículos no Brasil.
                Tecnologia que vende.
              </p>
              <div className="mt-3">
                <CarSilhouette />
              </div>
              <div className="mt-[18px] flex gap-2.5">
                {[
                  {
                    label: "Instagram",
                    icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A3.5 3.5 0 0121 5.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 16.5v-11A3.5 3.5 0 016.5 2z",
                  },
                  {
                    label: "LinkedIn",
                    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
                  },
                  {
                    label: "YouTube",
                    icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-white/[0.05] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-brand-blue/[0.15] hover:bg-brand-blue/[0.08] hover:text-brand-blue"
                  >
                    <svg
                      className="h-[17px] w-[17px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={social.icon}
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Produto */}
            <div>
              <h4 className="mb-3.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gray-200">
                Produto
              </h4>
              <ul className="flex flex-col gap-[9px]">
                {[
                  "Funcionalidades",
                  "Resultados",
                  "Como Funciona",
                  "Demonstração",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-[0.88rem] text-gray-400 transition-colors hover:text-brand-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-3.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gray-200">
                Legal
              </h4>
              <ul className="flex flex-col gap-[9px]">
                {["Política de Privacidade", "Termos de Uso", "LGPD"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[0.88rem] text-gray-400 transition-colors hover:text-brand-blue"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5 border-t border-white/[0.04] pt-[22px] text-center md:flex-row md:justify-between">
            <p className="text-[0.78rem] text-gray-400">
              &copy; 2025 AIOS CRM. Todos os direitos reservados.
            </p>
            <p className="text-[0.78rem] text-gray-400">
              Feito com tecnologia para o mercado automotivo brasileiro.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[900] flex h-[58px] w-[58px] animate-wa-pulse items-center justify-center rounded-full bg-brand-green shadow-[0_4px_22px_rgba(37,211,102,0.4)] transition-all duration-400 hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)]"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
