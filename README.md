# PhishGuard - Plataforma de Conscientização sobre Phishing

Plataforma web interativa de conscientização sobre phishing em ambientes corporativos, desenvolvida como Trabalho de Conclusão de Curso em Sistemas de Informação do IFS Campus Lagarto.

## 🎯 Objetivo

Desenvolver uma ferramenta educacional que permita aos colaboradores corporativos praticar a identificação de tentativas de phishing em um ambiente seguro, recebendo feedback detalhado fundamentado em conceitos teóricos de engenharia social.

## 🏗️ Estrutura do Projeto

```
src/
├── app/                          # Páginas da aplicação (Next.js App Router)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página inicial
│   ├── globals.css              # Estilos globais
│   ├── modulos/
│   │   ├── page.tsx             # Seleção de módulos
│   │   ├── email/
│   │   │   ├── page.tsx         # Lista de cenários de email
│   │   │   └── [cenarioId]/
│   │   │       └── page.tsx     # Simulação individual (a criar)
│   │   └── sms/
│   │       ├── page.tsx         # Lista de cenários de SMS
│   │       └── [cenarioId]/
│   │           └── page.tsx     # Simulação individual (a criar)
│   └── guia/
│       └── page.tsx             # Guia de boas práticas
│
├── components/                   # Componentes React
│   ├── ui/                      # Componentes genéricos (Button, Card, Badge)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── index.ts
│   ├── layout/                  # Componentes de layout (Header, Footer)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── simulacao/               # Componentes de simulação
│   │   ├── EmailSimulator.tsx   # Renderiza e-mails fake
│   │   ├── SmsSimulator.tsx     # Renderiza SMS/WhatsApp fake
│   │   └── index.ts
│   └── feedback/                # Componentes de feedback
│       ├── FeedbackPanel.tsx    # Painel de resultado detalhado
│       └── index.ts
│
├── data/                        # Dados estáticos (cenários)
│   ├── email-scenarios.ts       # 4 cenários de email
│   ├── sms-scenarios.ts         # 4 cenários de SMS/WhatsApp
│   ├── best-practices.ts        # Guia de boas práticas
│   └── index.ts                 # Exportações e helpers
│
├── types/                       # Tipos TypeScript
│   ├── scenario.ts              # Tipos para cenários
│   └── index.ts
│
├── hooks/                       # Custom hooks
│   ├── useSessionProgress.ts    # Gerencia progresso da sessão
│   └── index.ts
│
├── lib/                         # Utilitários
│   └── utils.ts                 # Funções auxiliares (cn, formatDate, etc.)
│
└── styles/                      # Estilos adicionais (se necessário)
```

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Vercel** - Deploy (planejado)

## 📦 Instalação

```bash
# Clonar o repositório
git clone [url-do-repositorio]

# Entrar na pasta
cd phishing-awareness-platform

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

## 🎮 Funcionalidades

### Implementado
- [x] Estrutura base do projeto
- [x] Componentes UI reutilizáveis
- [x] Layout responsivo (Header, Footer)
- [x] Página inicial
- [x] Página de seleção de módulos
- [x] Lista de cenários (Email e SMS)
- [x] Guia de boas práticas
- [x] Dados de 8 cenários completos
- [x] Simuladores visuais (Email e SMS/WhatsApp)
- [x] Componente de feedback detalhado
- [x] Hook de progresso da sessão

### A Implementar
- [ ] Página de simulação individual (cenarioId)
- [ ] Integração completa do fluxo de simulação
- [ ] Animações e transições
- [ ] Testes

## 📚 Fundamentação Teórica

Os cenários e feedback são fundamentados em:

- **Mitnick & Simon (2003)** - A Arte de Enganar
- **Mann (2011)** - Hacking the Human
- **Hadnagy (2011)** - Social Engineering: The Art of Human Hacking
- **Sêmola (2003)** - Gestão da Segurança da Informação
- **Fornasier, Knebel & Silva (2020)** - Phishing e Engenharia Social
- **ISO/IEC 27002** - Normas de Segurança da Informação

## 👨‍💻 Autor

**Gabriel Carvalho Santos**  
Bacharelado em Sistemas de Informação  
Instituto Federal de Sergipe - Campus Lagarto

**Orientador:** Prof. Dr. Claudio Cleverson de Lima  
**Co-orientador:** Prof. Esp. Wilhelm de Araújo Rodrigues

---

*Projeto desenvolvido como TCC - 2025*
