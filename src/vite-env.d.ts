/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RICK_AND_MORTY_API_URL: string;
    // 🔧 Add more custom env vars here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  