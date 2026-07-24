# Frontend Architecture Decisions

## Contexto

Frontend desenvolvido como parte de um take-home utilizando React, TypeScript, Vite, Material UI, React Query e React Router.

O objetivo foi criar uma SPA para acompanhamento da verba promocional dos vendedores, consumindo uma API backend existente.

As decisões abaixo priorizam simplicidade, manutenção e clareza, evitando complexidade desnecessária dentro do timebox do desafio.

---

# DECISION-001 — Organização por Feature

## Decisão

Foi adotada uma organização Feature First.

Estrutura:

```
features/
└── dashboard/
    ├── api/
    ├── dto/
    ├── hooks/
    ├── components/
    └── pages/
```

## Motivação

- Mantém código relacionado ao mesmo domínio próximo.
- Facilita manutenção e navegação.
- Escala melhor que uma organização apenas por tipo.

## Trade-off

Para aplicações muito pequenas, uma estrutura por tipo pode parecer mais simples. Porém, conforme cresce, tende a espalhar uma mesma funcionalidade em vários locais.

---

# DECISION-002 — React Query para estado remoto

## Decisão

Foi utilizado React Query para gerenciamento dos dados vindos da API.

## Motivação

A maior parte do estado da aplicação é remoto.

React Query fornece:

- cache;
- loading;
- tratamento de erros;
- sincronização dos dados.

## Trade-off

Redux ou Zustand poderiam ser utilizados, mas adicionariam complexidade sem existir uma necessidade real de estado global neste projeto.

---

# DECISION-003 — Separação entre API, Hooks e Componentes

## Decisão

A comunicação foi dividida em camadas:

```
Component
    ↓
React Query Hook
    ↓
API Service
    ↓
Axios
```

## Motivação

Cada camada possui uma responsabilidade:

- API Service: comunicação HTTP.
- Hook: gerenciamento de dados e cache.
- Componentes: apenas renderização.

Isso reduz acoplamento e facilita testes.

## Trade-off

Para uma aplicação pequena seria possível chamar Axios diretamente na página, porém a separação adiciona pouca complexidade e melhora a organização.

---

# DECISION-004 — DTOs tipados

## Decisão

As respostas da API foram representadas através de interfaces TypeScript.

## Motivação

- Evita uso de `any`.
- Mantém contrato explícito com backend.
- Melhora segurança durante alterações.

## Trade-off

Para protótipos simples seria possível utilizar objetos inferidos diretamente, porém contratos explícitos são mais adequados em aplicações corporativas.

---

# DECISION-005 — Componentização orientada ao domínio

## Decisão

Foram criados componentes específicos:

- DashboardSummary;
- SellersTable;
- HealthChip.

## Motivação

Os componentes representam conceitos reais do domínio.

O `HealthChip`, por exemplo, encapsula a representação visual dos estados:

- HEALTHY;
- WARNING;
- CRITICAL.

## Trade-off

Não foram criados componentes genéricos como tabela ou cards reutilizáveis.

Essas abstrações seriam úteis em uma aplicação maior, mas seriam excesso de engenharia para o escopo atual.

---

# DECISION-006 — Proxy do Vite para desenvolvimento

## Decisão

Foi utilizado o proxy do Vite para comunicação com a API durante desenvolvimento.

## Motivação

- Evita alterar o backend apenas para resolver CORS local.
- Mantém frontend e backend independentes.
- Simula um cenário próximo de produção com gateway/reverse proxy.

## Trade-off

Em produção, a estratégia dependerá da infraestrutura. Caso frontend e backend estejam em domínios diferentes, será necessário configurar CORS ou utilizar um gateway.

---

# DECISION-007 — Estados visuais da aplicação

## Decisão

Foram tratados estados de:

- carregamento;
- erro;
- ausência de dados;
- vendedores críticos.

## Motivação

Aplicações administrativas precisam comunicar claramente problemas e estados atuais.

O alerta de vendedores críticos atende ao requisito AC-06, permitindo identificar riscos sem abrir a lista.

## Trade-off

Não foram adicionados gráficos, animações ou dashboards analíticos por não serem necessários para o escopo do desafio.

---

# Fragilidades conhecidas

## 1. Suporte a múltiplas competências

Atualmente o frontend utiliza a primeira competência retornada pela API.

Em produção seria necessário implementar:

- seleção de competência;
- filtros;
- definição da competência ativa.

---

## 2. Ausência de testes automatizados

Não foram implementados testes de frontend devido ao timebox.

Com mais tempo seriam adicionados testes para:

- hooks;
- estados de erro/loading;
- renderização de vendedores críticos.

---

## 3. Configuração de ambiente simplificada

A URL da API deveria utilizar variáveis de ambiente (`VITE_API_URL`) para suportar diferentes ambientes.

---

# Uso de IA

A IA foi utilizada como apoio para:

- discussão de arquitetura;
- validação de decisões;
- aceleração de implementação.

As sugestões foram revisadas e adaptadas durante o desenvolvimento.

Um exemplo foi a utilização inicial de versões muito recentes das dependências, que causaram incompatibilidades de tipagem entre TypeScript e Material UI.

A solução foi ajustar as versões para uma combinação mais estável, priorizando previsibilidade e compatibilidade.