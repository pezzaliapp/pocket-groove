# Pocket Groove

Pocket Groove è un prototipo **single-file** (unico `index.html`) di un mini groovebox / sequencer 16-step basato su **Web Audio API**, pensato per sperimentare pattern minimal e workflow “touch-first”.

## Funzioni principali

- Sequencer **16-step** con 5 tracce: **Kick / Snare / Hat / Bass / Sample**
- Controlli: **BPM**, **Swing**, **Pattern A/B**, **Clear**, **Random**
- **Preset Save/Load/Reset** (localStorage)
- **FX XY Pad**: Filter (X) + Stutter (Y) con Hold/Reset
- **Sampler Microfono**: ARM MIC → REC/STOP → USE AS SAMPLE + Trim/Pitch/Filter/Decay + Monitor
- **Export WAV** dell’output (post-FX): REC/STOP/SAVE WAV

## Requisiti

- Browser moderno con supporto WebAudio:
  - Safari iOS / Safari macOS
  - Chrome / Edge / Firefox (desktop)
- Per iOS/Safari: serve una **gesture utente** (clic) per avviare l’audio e per autorizzare il microfono.

## Avvio rapido

### Opzione A — Locale (semplice)
Apri `index.html` nel browser.

> Nota: alcune funzioni (es. microfono) possono richiedere HTTPS o `localhost`.

### Opzione B — Server locale (consigliato)
Da terminale nella cartella del progetto:

**Python**
```bash
python3 -m http.server 8080
