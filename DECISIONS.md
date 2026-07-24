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