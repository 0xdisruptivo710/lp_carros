# LP AIOS CRM — CRO Improvements (Strike Cirúrgico)

**Data:** 2026-05-01
**Foco:** conversão (CRO) com polimento visual leve. O design atual já é forte; o objetivo é tapar vazamentos e adicionar prova.

---

## Diagnóstico (resumo)

Vazamentos identificados, ordenados por impacto:

1. **Seção `Results` está vazia.** Maior buraco da página — só tem título.
2. **Links WhatsApp quebrados** com placeholder fake `5511999999999` em Hero e CtaForm.
3. **Badge desatualizada** ("20 lojas" — número real é 40).
4. **Sem FAQ.** Objeções tardias morrem sem resposta antes do form.
5. **Sem prova social real** além de uma badge.
6. **Hero subtitle é feature-list**, não benefício.
7. **Solution headline genérica** ("Conheça o AIOS CRM").
8. **Features tem 10 cards flat** — overwhelm.
9. **Form sem SLA de resposta.**

---

## Escopo

Mudanças apenas em copy, conteúdo e estrutura. Sem refatoração arquitetural. Sem novos componentes pesados. Reaproveita componentes UI existentes (`BlurFade`, `MagicCard`, `SpotlightCard`, `NumberTicker`, `BackgroundBeams`).

---

## 1. Hero — copy

**Badge** (atualizar contagem):
> Mais de 40 lojas usando no Brasil

**Headline** (mantém):
> Sua Loja Vende Mais. Seu Time Trabalha Menos.

**Subtitle** (substituir):
> O CRM com IA que atende, qualifica e agenda seus leads no WhatsApp — para a equipe focar só no fechamento.

**CTAs:** mantém estrutura. Corrigir link WhatsApp:
- De: `https://wa.me/5511999999999?...`
- Para: `https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM`

---

## 2. Results — preencher seção vazia

Layout: stats grid (3 colunas) + citação destacada.

### Stats (NumberTicker animados)

| Valor | Label | Cor |
|-------|-------|-----|
| `+40` | Lojas usando hoje | brand-blue |
| `+4` a `+9` | Vendas extras por mês, em média | brand-pink |
| `40%` | Atendimentos da IA viram agendamento presencial | brand-green |

Observação técnica: o `+4 a +9` será apresentado como duas métricas conjugadas em um card único (ex.: "**+4–9** vendas extras / mês"), porque `NumberTicker` aceita um único valor. Solução: card sem ticker, número grande estático com tipografia consistente.

### Citação

> "A IA extrai todas as informações que a gente precisa. O time chega na conversa já sabendo o que o cliente quer."
> — *Gerente de vendas, loja parceira*

**Visual:** card largo, fundo `white/[0.02]`, borda esquerda `brand-blue`, ícone de aspas em opacity 0.15.

### Disclaimer (rodapé pequeno da seção)

> *Médias com base em dados de lojas parceiras ativas no AIOS CRM. Resultado pode variar conforme operação.*

---

## 3. FAQ — nova seção

**Posição:** entre `HowItWorks` e `CtaForm`.

**Layout:** acordeão simples, 1 coluna no mobile, 2 colunas no desktop. Cada item: borda `white/[0.06]`, hover sobe pra `white/[0.1]`. Ícone chevron rotaciona em open. Animação leve com Framer Motion.

**Eyebrow:** "Dúvidas frequentes"
**Headline:** "Tudo que você quer saber antes de começar"

**Perguntas e respostas:**

1. **Quanto tempo leva pra começar a usar?**
   Setup completo em até 48h. A gente faz o diagnóstico, treina a IA com o tom da sua equipe, integra os canais e entrega tudo pronto pra rodar.

2. **Preciso trocar meu sistema atual?**
   Não. O AIOS funciona em paralelo ao que você já usa — DMS, planilhas, ferramentas de marketing. Conectamos pelo WhatsApp e canais existentes.

3. **Funciona com WhatsApp Business ou só API oficial?**
   Usamos a API oficial do WhatsApp (Meta), o que dá segurança, evita banimento e libera funcionalidades como disparos segmentados e templates aprovados.

4. **Quanto custa?**
   O investimento depende do tamanho da operação e do volume de leads. No diagnóstico gratuito apresentamos o plano sob medida — sem surpresa, sem letra miúda.

5. **Tem fidelidade ou multa?**
   Nenhuma. Sem fidelidade, sem multa de cancelamento. Se não entregar resultado, você sai.

6. **A IA atende como humano ou parece robô?**
   A IA é treinada com o tom de voz da sua equipe e o seu catálogo. O time de vendas dos parceiros costuma elogiar justamente isso: ela extrai todas as informações certas e a conversa flui natural.

7. **Vocês treinam minha equipe?**
   Sim. Onboarding completo no setup, manual de uso, e gestor dedicado pra acompanhar a operação continuamente.

8. **E se eu já uso outro CRM?**
   A maioria dos parceiros chegou usando outro CRM ou planilha. Migramos seus dados e mantemos o que funcionava — o AIOS substitui o que estava custando vendas.

---

## 4. CtaForm — ajustes

**Adicionar SLA visível** abaixo do botão de submit (antes do divider "ou se preferir"):

> ⚡ Respondemos em até 15 minutos em horário comercial (seg-sex, 9h–18h)

**Adicionar disclaimer LGPD** abaixo do form (texto pequeno):

> Seus dados são usados só para o contato comercial. Sem spam, sem revenda. Você pode cancelar quando quiser.

**Corrigir link WhatsApp** (mesmo padrão do Hero):
- Para: `https://wa.me/5515991286797?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20AIOS%20CRM`

---

## 5. Solution — headline

**Trocar:**
> Conheça o AIOS CRM

**Por:**
> O sistema que transforma WhatsApp em máquina de vendas

Destaque visual: "máquina de vendas" em `text-brand-blue` (mantém o padrão atual de palavra-chave colorida no headline).

---

## 6. Features — agrupamento (sem remover features)

**Não vamos remover features.** Em vez disso, agrupar visualmente em 4 trilhas:

1. **Captar** — IA de Atendimento, Disparos Segmentados, Relatórios de Tráfego
2. **Vender** — CRM Kanban, Gestão de Agenda
3. **Reativar** — Reativação de Leads, Recuperação de Clientes
4. **Gerir** — Gestão da Equipe, Gestor Dedicado

Implementação: adicionar pequeno label/chip no canto superior do card (`Captar` / `Vender` / `Reativar` / `Gerir`) com cor da trilha. Não cria seções separadas — apenas tagging visual no grid existente.

**Headline atualizada:**
> Tudo que sua loja precisa — captar, vender, reativar e gerir

---

## 7. Polimento visual leve

Mudanças mínimas, só onde a hierarquia precisa de respiro:

- **Hero badge:** reduzir opacidade do brilho (atualmente muito chamativa). De `bg-brand-blue/[0.08]` para `bg-brand-blue/[0.06]`, borda `[0.14]`.
- **Features cards:** adicionar pequeno chip de trilha no topo (item 6 acima).
- **Results:** seção é nova, segue padrão visual existente (`Solution` light bg ou `dark` mantém — decidir na implementação).

**Decisão de bg para Results:** usar `dark` (mesmo bg do Hero) para criar alternância visual: Solution light → Features dark → **Results dark** → HowItWorks dark → FAQ dark → CTA dark. Light bg quebraria o ritmo final que leva ao form.

---

## 8. Ordem final das seções

```
Navbar
Hero
Marquee
Problems
Solution        (light bg)
Features        (dark)
Results         (dark)  ← preenchido
HowItWorks      (dark)
FAQ             (dark)  ← novo
CtaForm         (dark)
Footer
```

---

## 9. Verificação pós-implementação

- [ ] Build passa (`npm run build`)
- [ ] Links WhatsApp clicáveis abrem o número correto
- [ ] Form ainda envia para o webhook n8n
- [ ] Animações de scroll (`BlurFade`) ativam nas novas seções
- [ ] Mobile: FAQ acordeão funciona; Results stats não estouram
- [ ] Lighthouse score não regride

---

## 10. Fora de escopo

- Tabela de planos / pricing
- Novos depoimentos com nome real (entra quando o cliente fornecer)
- Logos de parceiros no Marquee (idem)
- A/B testing infra
- Analytics de eventos
- Refatoração de componentes existentes
- Mudanças em Footer, Navbar, Marquee
