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

Poi apri:
	•	http://localhost:8080

Uso
	1.	Premi START AUDIO
	2.	Premi PLAY
	3.	Tocca gli step per attivare/disattivare eventi
	4.	Per campionare:
	•	ARM MIC → autorizza microfono
	•	REC → registra un suono
	•	STOP → USE AS SAMPLE
	•	Attiva step sulla traccia SAMPLE
	5.	Per esportare:
	•	Record WAV → REC → STOP → SAVE WAV

Roadmap (idee)
	•	PWA offline-ready (service worker + manifest)
	•	Libreria di preset e sample pack
	•	Export pattern (JSON) / import pattern
	•	Waveform view per sample + slice

Licenza

Questo progetto è proprietario e non open source.
Vedi il file LICENSE￼: vietata copia, modifica, distribuzione e riuso, salvo autorizzazione scritta dell’autore.

Autore

PezzaliAPP
Repository: pocket-groove
