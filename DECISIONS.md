# DECISION-001

## Organização por Feature

Foi adotada uma organização Feature First.

Motivos:

- Mantém componentes relacionados próximos.
- Facilita manutenção.
- Escala melhor que organização por tipo.
- É simples de explicar durante uma entrevista.

Trade-off:

Para aplicações muito pequenas, uma estrutura por tipo pode parecer mais simples. Entretanto, como a tendência é crescer, a organização por feature reduz acoplamento e melhora a navegabilidade do projeto.

## DECISION-002 — Providers centralizados

Os providers globais (ThemeProvider e QueryClientProvider) foram centralizados na inicialização da aplicação.

### Motivações

- Evita repetição em diferentes páginas.
- Mantém um único QueryClient para toda a aplicação.
- Facilita adicionar novos providers futuramente (Auth, Snackbar, Localization etc.).
- Separa a infraestrutura da lógica de negócio.

### Trade-off

Para uma aplicação pequena seria possível configurar tudo diretamente em `main.tsx`. A extração para um provider dedicado foi adotada por melhorar a organização sem adicionar complexidade significativa.

## DECISION-003 — Separação entre Hook e API

Foi criada uma camada de API responsável exclusivamente pela comunicação HTTP.

### Motivações

- O hook (`useDashboard`) conhece apenas React Query.
- A camada de API conhece apenas Axios.
- Facilita testes unitários.
- Reduz acoplamento entre React Query e infraestrutura HTTP.

### Trade-off

Em aplicações muito pequenas seria possível chamar o Axios diretamente no hook. A separação foi adotada por melhorar a organização com baixo custo de complexidade.

## DECISION-004 — Separação entre API, Hook e Página

A comunicação com o backend foi dividida em três camadas:

- API → responsável apenas pelas chamadas HTTP.
- Hook → responsável pelo cache e gerenciamento de estado com React Query.
- Página → responsável apenas pela renderização.

### Motivações

- Reduz acoplamento.
- Facilita testes.
- Facilita reutilização.
- Mantém cada camada com uma responsabilidade única.

### Trade-off

Para aplicações muito pequenas seria possível utilizar o Axios diretamente na página. A separação foi adotada por melhorar a organização sem aumentar significativamente a complexidade.

## DECISION-005 — Proxy de desenvolvimento para API

Foi utilizado o proxy nativo do Vite para comunicação entre frontend e backend durante desenvolvimento.

### Motivações

- Evita configuração de CORS apenas para ambiente local.
- Mantém o backend independente.
- Simula melhor um ambiente onde frontend e backend estão atrás do mesmo gateway.

### Trade-off

Em produção a estratégia depende da infraestrutura de deploy. Caso frontend e backend estejam em domínios diferentes, o CORS deverá ser configurado no backend ou em um gateway.