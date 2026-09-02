# Case Study: RL Overlay

> **Overlay Nativo de Alta Performance para Rocket League em Rust & Tauri v2**

## Visão Geral

Jogadores competitivos de Rocket League necessitam de telemetria em tempo real (placar, estatísticas de partida, MMR, velocidade e tempo de posse de bola) sem qualquer perda de quadros (FPS drops) ou input lag durante as partidas.

O **RL Overlay** foi projetado para operar como uma aplicação desktop cross-platform (Windows, Linux, macOS) de baixíssima latência, integrando diretamente com sockets nativos do jogo.

## Arquitetura & Engenharia

1. **Multiprocesso Nativo (Rust + Tauri v2):**
   - Cliente TCP assíncrono rodando em thread secundária para conexão direta via socket nativo (`127.0.0.1:49123`).
   - Reconexão automática resiliente e deserialização em alta velocidade de pacotes JSON com `serde`.
2. **Interface Click-Through sem Input Lag:**
   - Camada visual desenvolvida em **React 19** e **TypeScript**.
   - Chamadas nativas ao sistema operacional (`set_ignore_cursor_events`) permitindo que cliques e comandos do mouse/controle passem direto para o jogo sem retenção de foco.
3. **Painel de Controle e Automação:**
   - Suporte completo a internacionalização (PT/EN).
   - Deduplicação de eventos por GUID de partida e lógica automatizada para exibição de placares.

## Stack Tecnológica

- **Backend / Core:** Rust, Tauri v2, Async Rust (Sockets TCP), Serde
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
