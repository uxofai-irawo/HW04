import { Ollama } from "https://cdn.jsdelivr.net/npm/ollama@0.5.12/browser/+esm";

const ollama = new Ollama({ host: "https://steel-exp-february-hired.trycloudflare.com" });

Object.defineProperty(window, "ollama", {
  get() { return ollama; },
});
