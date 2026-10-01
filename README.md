# 📚 Teorias & Curiosidades

Enciclopédia digital sobre sociedade, cultura, comportamento e teorias sociais.

## 🚀 Tecnologias

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipagem de código
- **Tailwind CSS** - Estilização
- **Vercel** - Deploy e hospedagem

## 📋 Instalação Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/gomesbrenno143-bot/enciclopedia-teorias-sociais.git
cd enciclopedia-teorias-sociais
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/              # Páginas e rotas
│   ├── page.tsx      # Homepage
│   ├── sobre/        # Página "Sobre"
│   ├── contato/      # Página "Contato"
│   ├── busca/        # Página "Busca"
│   ├── glossario/    # Página "Glossário"
│   ├── artigos/      # Artigos individuais
│   ├── categorias/   # Categorias dinâmicas
│   ├── autores/      # Perfis de autores
│   ├── admin/        # Painel administrativo
│   ├── layout.tsx    # Layout raiz
│   └── globals.css   # Estilos globais
├── components/       # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Breadcrumb.tsx
│   ├── ArticleCard.tsx
│   └── StatCard.tsx
└── data/             # Dados centralizados
    └── content.ts    # Artigos, categorias, autores
```

## 🌐 Deploy no Vercel

### Opção 1: Via GitHub

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Conecte seu repositório GitHub
5. Deixe as configurações padrão e clique "Deploy"

### Opção 2: Via CLI

```bash
npm i -g vercel
vercel
```

### Variáveis de Ambiente no Vercel

1. Acesse o painel do seu projeto no Vercel
2. Vá para "Settings" > "Environment Variables"
3. Adicione as variáveis necessárias

## 📝 Conteúdo

O conteúdo do site está centralizado em `src/data/content.ts`:

- **Artigos** - Textos com slug, título, autor, categoria
- **Categorias** - Temas principais do site
- **Autores** - Perfis de pensadores
- **Glossário** - Termos e definições

Para adicionar novos artigos, edite o arquivo `src/data/content.ts`.

## 🔍 Páginas Disponíveis

- `/` - Homepage
- `/artigos/[slug]` - Artigo individual
- `/categorias/[slug]` - Artigos por categoria
- `/autores/[slug]` - Perfil do autor
- `/glossario` - Glossário de termos
- `/busca` - Página de busca
- `/sobre` - Sobre o projeto
- `/contato` - Formulário de contato
- `/admin` - Painel administrativo

## 🎨 Personalização

### Cores
Edite `tailwind.config.ts` para alterar o esquema de cores:

```typescript
colors: {
  primary: "#0d1b2a",      // Azul escuro
  secondary: "#1b3553",    // Azul médio
  accent: "#f3c969",       // Amarelo ouro
}
```

### Tipografia
Edite `src/app/globals.css` para alterar fontes e tamanhos.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Erro: "Module not found"
Certifique-se de que todos os imports estão com `@/` no início.

### Página em branco
Verifique o console do navegador para erros.

### Slow build
Limpe `.next/` e reinstale as dependências.

## 📄 Licença

MIT

## 👨‍💻 Autor

**Desenvolvido por:** Brenno Gomes

## 🤝 Contribuições

Sugestões, correções e novas ideias são bem-vindas!

Entre em contato através da página de contato do site.

---

**Versão:** 1.0.0  
**Última atualização:** Outubro 2024  
**Status:** Pronto para produção ✅
