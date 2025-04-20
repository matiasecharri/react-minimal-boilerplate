![Vite](https://img.shields.io/badge/bundler-vite-646CFF.svg?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/lang-typescript-3178C6.svg?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/library-react-61DAFB.svg?logo=react&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

# 🧱 react-superlative-boilerplate

A clean, scalable, and developer-friendly React boilerplate built with **Vite**, **TypeScript**, and modern best practices.

This project was designed from scratch to provide a strong foundation for building long-term, maintainable web applications, with a clear folder structure, reusable patterns, and zero clutter.

---

## 🚀 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) — blazing-fast build tool
- 🧠 [TypeScript](https://www.typescriptlang.org/) — fully typed, strict mode enabled
- ⚛️ React 19 — functional components, hooks-first approach
- 🎯 CSS Modules — locally scoped styles per component
- 📦 Alias support (`@/`) — clean import paths
- 🧪 Ready for testing integration (Vitest / RTL friendly)

---

## 📁 Folder Structure

> 📝 **Note:** The content inside each folder (like components, models, or features) is just a guide to help you get started — feel free to delete or replace anything based on your own project needs.

- 📦 `react-superlative-boilerplate/`
  - 📁 `public/`
    - 📄 `robots.txt`
    - 📄 `sitemap.xml`
  - 📁 `src/`
    - 📁 `api/` — API configuration and endpoints
    - 📁 `app/` — App entry (providers, routing, theming)
    - 📁 `assets/`
      - 🗂️ `fonts/`
      - 🖼️ `images/`
      - 🧩 `svg/`
    - 📁 `features/`
      - 📁 `dashboard/`
        - 📁 `components/`
        - 📄 `index.ts`
      - 📁 `home/`
    - 📁 `shared/`
      - 🧱 `components/`
      - 🧠 `context/`
      - 🛠️ `helpers/`
      - 🪝 `hooks/`
      - 🧾 `models/`
      - ⚙️ `utilities/`
    - 📄 `index.css`
    - 📄 `main.tsx`
    - 📄 `vite-env.d.ts`
  - 🧪 `.env`
  - 🗑️ `.gitignore`
  - 🧶 `bun.lock`
  - 🔧 `eslint.config.js`
  - 🌐 `index.html`
  - 📦 `package.json`
  - 📦 `package-lock.json`
  - 📘 `README.md`
  - 📄 `tsconfig.app.json`
  - 📄 `tsconfig.json`
  - 📄 `tsconfig.node.json`
  - ⚙️ `vite.config.ts`

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/maiasecharri/react-superlative-boilerplate.git
cd react-superlative-boilerplate
bun install    # or yarn / npm / pnpm install
bun run dev        # or yarn dev / npm / pnpm run dev
```

## 📄 Environment Setup

Before running the project, create a `.env` file at the root of the project and add the following variable:

VITE_RICK_AND_MORTY_API_URL=https://rickandmortyapi.com/api/character

> ⚠️ All environment variables must start with `VITE_` to be exposed to the Vite client at build time.

This value is used as a **placeholder** and points to the [Rick and Morty public API](https://rickandmortyapi.com/).  
You can replace it with your own API endpoint. Just make sure to follow the structure used in the `api/` folder for compatibility.

## 🚦 Linting & Formatting

This project comes with:

- ✅ ESLint — for consistent code style
- ✅ Strict TypeScript rules
- ⚙️ Add Prettier + Husky optionally for even stricter formatting and pre-commit checks.

## 📤 Deployment

Since this is a Vite project, you can build it for production like this:

```bash
bun build
```

## 🧠 Philosophy

This boilerplate was built with:

- 🧩 Feature-first architecture: scale cleanly with self-contained modules
- 🧼 Clean code: clear folder conventions and naming
- 📚 Learnability: anyone joining your codebase should feel at home quickly
- 🧰 Extendability: easily add routing, theming, state libraries, and more

## 👨‍💻 Author

Created with passion and attention to detail by [Matias Echarri](https://github.com/matiasecharri).  
Reach out if you’re using it, I’d love to hear what you build!

## 📄 License

This project is licensed under the [MIT License](./LICENCE) © 2025 [Matías Echarri](https://github.com/matiasecharri)
