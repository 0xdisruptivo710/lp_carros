# LP AIOS CRM — CRO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tapar vazamentos de conversão e adicionar prova social na landing AIOS CRM, mantendo o design atual intacto.

**Architecture:** Mudanças confinadas a copy, conteúdo e estrutura de seções. Reutiliza componentes UI existentes (`BlurFade`, `MagicCard`, `SpotlightCard`, `NumberTicker`, `Particles`, `BackgroundBeams`). Um único componente novo: `Faq`. Sem novas dependências.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion (já instalados).

**Spec:** `docs/superpowers/specs/2026-05-01-cro-improvements-design.md`

**Verification:** Sem infra de testes neste repo. Verificação via `npm run build` (must pass) + check visual no `npm run dev` em cada task. Nada de inferir sucesso — sempre rodar comando e ler output.

---

## Task 1: Hero — atualizar badge, subtitle e link WhatsApp

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Atualizar texto da badge**

Localize:
```tsx
              Usado por mais de 20 lojas no Brasil
```

Troque por:
```tsx
              Mais de 40 lojas usando no Brasil
```

- [ ] **Step 2: Substituir subtitle**

Localize:
```tsx
            <p className="mb-11 max-w-[580px] text-[clamp(1rem,1.8vw,1.18rem)] leading-[1.75] text-gray-300">
              O AIOS CRM automatiza seu atendimento, ativa leads inativos e gerencia toda a sua equipe de vendas com inteligência artificial — do primeiro contato ao fechamento.
            </p>
```

Troque por:
```tsx
            <p className="mb-11 max-w-[580px] text-[clamp(1rem,1.8vw,1.18rem)] leading-[1.75] text-gray-300">
              O CRM com IA que atende, qualifica e agenda seus leads no WhatsApp — para a equipe focar só no fechamento.
            </p>
```

- [ ] **Step 3: Corrigir link WhatsApp**

Localize:
```tsx
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
```

Troque por:
```tsx
                href="https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
```

- [ ] **Step 4: Suavizar badge (item 7 do spec — polimento visual leve)**

Localize:
```tsx
            <div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-brand-blue/[0.18] bg-brand-blue/[0.08] px-[18px] py-2 text-[0.78rem] font-semibold text-brand-blue">
```

Troque por:
```tsx
            <div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-brand-blue/[0.14] bg-brand-blue/[0.06] px-[18px] py-2 text-[0.78rem] font-semibold text-brand-blue">
```

- [ ] **Step 5: Verificar build**

Run: `npm run build`
Expected: build passes sem erros TypeScript.

- [ ] **Step 6: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "fix(hero): atualizar copy, contagem de lojas (40) e corrigir link WhatsApp"
```

---

## Task 2: Solution — atualizar headline

**Files:**
- Modify: `components/sections/solution.tsx`

- [ ] **Step 1: Substituir headline**

Localize:
```tsx
              <h2 className="mb-[22px] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                Conheça o <span className="text-brand-blue">AIOS CRM</span>
              </h2>
```

Troque por:
```tsx
              <h2 className="mb-[22px] font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                O sistema que transforma WhatsApp em <span className="text-brand-blue">máquina de vendas</span>
              </h2>
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: build passes.

- [ ] **Step 3: Commit**

```bash
git add components/sections/solution.tsx
git commit -m "feat(solution): headline focada em benefício (máquina de vendas via WhatsApp)"
```

---

## Task 3: Results — preencher seção vazia

**Files:**
- Modify: `components/sections/results.tsx`

- [ ] **Step 1: Substituir o arquivo inteiro**

Substitua TODO o conteúdo de `components/sections/results.tsx` por:

```tsx
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
                  {stat.prefix}
                  {stat.useTicker ? (
                    <NumberTicker value={Number(stat.value)} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
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
```

- [ ] **Step 2: Verificar import do NumberTicker**

Run: `ls components/ui/number-ticker.tsx`
Expected: arquivo existe (já confirmado no diagnóstico).

Se algum problema: abra o arquivo e confirme que exporta `NumberTicker` com prop `value: number`.

- [ ] **Step 3: Verificar build**

Run: `npm run build`
Expected: build passes.

- [ ] **Step 4: Commit**

```bash
git add components/sections/results.tsx
git commit -m "feat(results): preencher seção com 3 métricas reais, citação e disclaimer"
```

---

## Task 4: Features — agrupar em trilhas + atualizar headline

**Files:**
- Modify: `components/sections/features.tsx`

- [ ] **Step 1: Adicionar campo `track` no array de features**

O array `const features = [...]` em `components/sections/features.tsx` tem **9 itens** (confirmado por leitura do arquivo).

Para cada objeto, adicione UMA linha nova ao final do objeto (depois de `colorClass: "..."`), seguindo a ordem do array:

| Posição | `title` no arquivo | linha a adicionar |
|---|---|---|
| 1 | IA de Atendimento | `track: "Captar",` |
| 2 | CRM Kanban | `track: "Vender",` |
| 3 | Disparos Segmentados | `track: "Captar",` |
| 4 | Reativação de Leads | `track: "Reativar",` |
| 5 | Gestão de Agenda | `track: "Vender",` |
| 6 | Gestão da Equipe | `track: "Gerir",` |
| 7 | Relatórios de Tráfego | `track: "Captar",` |
| 8 | Gestor Dedicado | `track: "Gerir",` |
| 9 | Recuperação de Clientes | `track: "Reativar",` |

Exemplo de antes/depois para o item 1:

Antes:
```tsx
  {
    icon: ( /* ...svg existente... */ ),
    title: "IA de Atendimento",
    desc: "Agente humanizado que capta dados, apresenta o veículo e qualifica o lead no tom da sua equipe.",
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    accentColor: "text-blue-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
  },
```

Depois:
```tsx
  {
    icon: ( /* ...svg existente... */ ),
    title: "IA de Atendimento",
    desc: "Agente humanizado que capta dados, apresenta o veículo e qualifica o lead no tom da sua equipe.",
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    accentColor: "text-blue-400",
    colorClass: "bg-brand-blue/10 text-brand-blue",
    track: "Captar",
  },
```

Repetir o padrão para os 9 itens conforme a tabela.

- [ ] **Step 2: Adicionar mapa de cores para tracks**

Logo após `const features = [...]` (antes de `export function Features`), adicione:

```tsx
const trackStyles: Record<string, string> = {
  Captar: "border-brand-blue/25 bg-brand-blue/[0.08] text-brand-blue",
  Vender: "border-brand-pink/25 bg-brand-pink/[0.08] text-brand-pink",
  Reativar: "border-brand-red/25 bg-brand-red/[0.08] text-brand-red",
  Gerir: "border-brand-green/25 bg-brand-green/[0.08] text-brand-green",
};
```

- [ ] **Step 3: Atualizar headline**

Localize:
```tsx
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Tudo que sua loja precisa em um só lugar
            </h2>
```

Troque por:
```tsx
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Tudo que sua loja precisa — captar, vender, reativar e gerir
            </h2>
```

- [ ] **Step 4: Renderizar chip de trilha em cada card**

Localize o bloco que renderiza o card (dentro do `.map`):
```tsx
                {/* Feature content */}
                <div className="p-[26px] pt-5">
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold tracking-[-0.01em]">
                    {f.title}
                  </h3>
```

Troque por (adicionando o chip ANTES do `<h3>`):
```tsx
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
```

- [ ] **Step 5: Verificar build**

Run: `npm run build`
Expected: build passes. Se TypeScript reclamar de `f.track`, é porque algum objeto não recebeu a prop — volte ao Step 1 e confira todos.

- [ ] **Step 6: Commit**

```bash
git add components/sections/features.tsx
git commit -m "feat(features): agrupar em 4 trilhas (Captar/Vender/Reativar/Gerir) com chips"
```

---

## Task 5: CtaForm — SLA, disclaimer LGPD e link WhatsApp

**Files:**
- Modify: `components/sections/cta-form.tsx`

- [ ] **Step 1: Corrigir link WhatsApp**

Localize:
```tsx
                    href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
```

Troque por:
```tsx
                    href="https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM"
```

- [ ] **Step 2: Adicionar SLA visível**

Localize o fechamento do `</form>` (logo depois do botão de submit). O bloco atual é:

```tsx
              </form>

              {!submitted && (
                <>
                  <div className="mb-4 flex items-center gap-3.5">
```

Troque por:

```tsx
              </form>

              {!submitted && (
                <>
                  <div className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-brand-blue/15 bg-brand-blue/[0.04] px-3 py-2.5 text-[0.78rem] text-gray-300">
                    <svg className="h-3.5 w-3.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Respondemos em até <strong className="text-white">15 minutos</strong> em horário comercial (seg-sex, 9h–18h)</span>
                  </div>
                  <div className="mb-4 flex items-center gap-3.5">
```

- [ ] **Step 3: Adicionar disclaimer LGPD**

Localize o final do `<a>` do WhatsApp dentro do `{!submitted && ...}`:

```tsx
                    Prefiro falar agora no WhatsApp
                  </a>
                </>
              )}
```

Troque por:

```tsx
                    Prefiro falar agora no WhatsApp
                  </a>
                  <p className="mt-4 text-center text-[0.72rem] leading-[1.55] text-gray-500">
                    Seus dados são usados só para o contato comercial. Sem spam, sem revenda. Você pode cancelar quando quiser.
                  </p>
                </>
              )}
```

- [ ] **Step 4: Verificar build**

Run: `npm run build`
Expected: build passes.

- [ ] **Step 5: Commit**

```bash
git add components/sections/cta-form.tsx
git commit -m "feat(cta): SLA de 15min, disclaimer LGPD e link WhatsApp corrigido"
```

---

## Task 6: FAQ — criar componente novo

**Files:**
- Create: `components/sections/faq.tsx`

- [ ] **Step 1: Criar o arquivo `components/sections/faq.tsx`**

Conteúdo completo:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    q: "Quanto tempo leva pra começar a usar?",
    a: "Setup completo em até 48h. A gente faz o diagnóstico, treina a IA com o tom da sua equipe, integra os canais e entrega tudo pronto pra rodar.",
  },
  {
    q: "Preciso trocar meu sistema atual?",
    a: "Não. O AIOS funciona em paralelo ao que você já usa — DMS, planilhas, ferramentas de marketing. Conectamos pelo WhatsApp e canais existentes.",
  },
  {
    q: "Funciona com WhatsApp Business ou só API oficial?",
    a: "Usamos a API oficial do WhatsApp (Meta), o que dá segurança, evita banimento e libera funcionalidades como disparos segmentados e templates aprovados.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento depende do tamanho da operação e do volume de leads. No diagnóstico gratuito apresentamos o plano sob medida — sem surpresa, sem letra miúda.",
  },
  {
    q: "Tem fidelidade ou multa?",
    a: "Nenhuma. Sem fidelidade, sem multa de cancelamento. Se não entregar resultado, você sai.",
  },
  {
    q: "A IA atende como humano ou parece robô?",
    a: "A IA é treinada com o tom de voz da sua equipe e o seu catálogo. O time de vendas dos parceiros costuma elogiar justamente isso: ela extrai todas as informações certas e a conversa flui natural.",
  },
  {
    q: "Vocês treinam minha equipe?",
    a: "Sim. Onboarding completo no setup, manual de uso, e gestor dedicado pra acompanhar a operação continuamente.",
  },
  {
    q: "E se eu já uso outro CRM?",
    a: "A maioria dos parceiros chegou usando outro CRM ou planilha. Migramos seus dados e mantemos o que funcionava — o AIOS substitui o que estava custando vendas.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[110px]" id="faq">
      <div className="mx-auto max-w-[980px] px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <div className="section-label mb-[18px] justify-center font-display">
              Dúvidas frequentes
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Tudo que você quer saber antes de começar
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <BlurFade key={item.q} delay={0.05 + i * 0.04} inView>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-2xl border bg-white/[0.02] p-5 text-left transition-all duration-400 hover:border-white/[0.12] hover:bg-white/[0.04] ${
                    isOpen ? "border-brand-blue/30 bg-white/[0.04]" : "border-white/[0.06]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-[1rem] font-semibold leading-snug tracking-[-0.005em] text-white">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-brand-blue/40 bg-brand-blue/15 text-brand-blue"
                          : "border-white/15 text-gray-400"
                      }`}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-[0.9rem] leading-[1.65] text-gray-400">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: build passes. Não importa se a seção ainda não está renderizada — ela só será wired na Task 7.

- [ ] **Step 3: Commit**

```bash
git add components/sections/faq.tsx
git commit -m "feat(faq): novo componente acordeão com 8 perguntas matando objeções"
```

---

## Task 7: Wire FAQ no app/page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Adicionar import**

Localize:
```tsx
import { HowItWorks } from "@/components/sections/how-it-works";
import { CtaForm } from "@/components/sections/cta-form";
```

Troque por:
```tsx
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { CtaForm } from "@/components/sections/cta-form";
```

- [ ] **Step 2: Inserir `<Faq />` entre `<HowItWorks />` e `<CtaForm />`**

Localize:
```tsx
      <HowItWorks />
      <CtaForm />
```

Troque por:
```tsx
      <HowItWorks />
      <Faq />
      <CtaForm />
```

- [ ] **Step 3: Verificar build**

Run: `npm run build`
Expected: build passes.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(page): wire FAQ entre HowItWorks e CtaForm"
```

---

## Task 8: Verificação visual e funcional

**Files:** none (apenas verificação)

- [ ] **Step 1: Iniciar dev server**

Run em background: `npm run dev`
Aguardar mensagem "Ready" e abrir `http://localhost:3000`.

- [ ] **Step 2: Checklist visual (registrar resultado de cada item)**

Verificar manualmente:
- Hero: badge mostra "Mais de 40 lojas usando no Brasil", subtitle nova, CTA WhatsApp aponta para `wa.me/5515991286797` (clique direito > inspecionar link).
- Solution: headline "O sistema que transforma WhatsApp em **máquina de vendas**" com "máquina de vendas" em azul.
- Features: cada card tem chip colorido no topo (Captar/Vender/Reativar/Gerir), headline atualizada.
- Results: 3 stats grandes (+40, +4–9, 40%), citação com aspas decorativas, disclaimer no rodapé.
- HowItWorks: inalterada.
- FAQ: 8 perguntas em 2 colunas no desktop, primeira aberta por default, clique abre/fecha com animação.
- CtaForm: badge "Respondemos em até 15 minutos" acima do divider, link WhatsApp corrigido, disclaimer LGPD no rodapé do card.
- Mobile (DevTools, 375px): FAQ vira 1 coluna, Results stats empilham, nada quebra.

- [ ] **Step 3: Submeter o form de teste**

Preencher form com dados fake (não-real), inspecionar Network tab para confirmar que o POST sai pra `https://aios-n8n-webhook.yspmhc.easypanel.host/webhook/lp-carros`.
Resultado esperado: status 200 ou 2xx, mensagem "Recebemos!" aparece.

- [ ] **Step 4: Build de produção final**

Run: `npm run build`
Expected: build sem erros, sem warnings críticos. Anotar bundle size para comparar com o anterior.

- [ ] **Step 5: Parar o dev server**

Encerrar o processo do `npm run dev`.

- [ ] **Step 6: Commit final (se houver ajustes)**

Se algum item do checklist falhou e exigiu fix, commitar com:
```bash
git add -p
git commit -m "fix: ajustes pós-verificação visual"
```

Se nada falhou, pular este step.

---

## Notas de execução

- **Ordem importa**: Task 7 depende de Task 6 (FAQ deve existir antes de ser importado). As outras tasks (1–5) são independentes entre si — podem ser executadas em qualquer ordem.
- **Não inventar telefones, valores ou nomes** que não estejam neste plano. Toda copy aqui foi aprovada pelo usuário.
- **Não tocar** em: Navbar, Marquee, Footer, ui/*, layout.tsx, globals.css, tailwind.config.ts, next.config.mjs.
- **Verificação é obrigatória**: cada `npm run build` deve ser rodado e o output lido. Não claim "passou" sem ver "Compiled successfully" no terminal.
