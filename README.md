# PDF Boss

A desktop **PDF manager** with most of the features you'd want from a PDF tool — designed
for **offline use**. Built as a Tauri + React app so it runs natively on Windows / macOS / Linux
without sending your files to any cloud service.

## Stack

- **Tauri** — native shell (Rust under the hood, ~10 MB binary)
- **React + TypeScript + Vite**
- **Tailwind CSS** + PostCSS
- `react-dropzone` — drag-and-drop file input
- `lucide-react` — icons

## Run locally

```bash
npm install
npm run dev          # Vite dev server (web UI only)
npm run tauri dev    # full desktop app with file-system access
```

## Build

```bash
npm run tauri build  # produces installers in src-tauri/target/release/bundle/
```

## Layout

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
