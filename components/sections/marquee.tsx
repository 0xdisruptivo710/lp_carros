const items = [
  "Automação Inteligente",
  "Vendas Aceleradas",
  "Leads Qualificados",
  "Gestão Completa",
  "WhatsApp API Oficial",
  "Resultados Reais",
  "Inteligência Artificial",
  "Feito para o Brasil",
];

/* Car silhouette separator */
const CarIcon = () => (
  <svg viewBox="0 0 24 14" fill="none" className="h-[10px] w-[18px] shrink-0 opacity-20">
    <path
      d="M23 10h-1V7.5c0-.28-.22-.5-.5-.5h-3.14l-2.71-4.07A1 1 0 0014.82 2.5H7.18a1 1 0 00-.83.43L3.64 7H1.5c-.28 0-.5.22-.5.5V10H0v1.5c0 .28.22.5.5.5H3a2 2 0 004 0h10a2 2 0 004 0h2.5c.28 0 .5-.22.5-.5V10zM5 12.5a1 1 0 110-2 1 1 0 010 2zm14 0a1 1 0 110-2 1 1 0 010 2zM7.62 4h8.76l2 3H5.62l2-3z"
      fill="currentColor"
      className="text-brand-blue"
    />
  </svg>
);

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-brand-blue/[0.06] py-[22px]">
      <div className="flex w-max animate-scroll">
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex shrink-0 items-center gap-10 pr-10"
            aria-hidden={set === 1}
          >
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="whitespace-nowrap font-display text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/[0.15]">
                  {item}
                </span>
                <CarIcon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
