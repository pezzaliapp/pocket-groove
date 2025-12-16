# Pocket Groove

**Pocket Groove** è un prototipo **single-file** (unico `index.html`) di una mini **groovebox / sequencer 16-step** basata su **Web Audio API**, progettata per sperimentare pattern minimal, workflow “touch-first” e sound design essenziale direttamente nel browser.

Il progetto nasce come laboratorio creativo e tecnico: niente build system, nessuna dipendenza esterna, tutto in un solo file.

---

## Funzioni principali

- **Sequencer 16-step** con 5 tracce:
  - Kick
  - Snare
  - Hat
  - Bass (oscillatore mono)
  - Sample (da microfono)
- Controlli globali:
  - **BPM**
  - **Swing**
  - **Pattern A / B**
  - **Clear**
  - **Random**
  - **Groove presets**
- **Preset**
  - Save / Load / Reset (via `localStorage`)
- **FX XY Pad**
  - Asse X → Filtro passa-basso
  - Asse Y → Stutter / Gate ritmico
  - Modalità Hold + Reset
- **Sampler da microfono**
  - ARM MIC → REC / STOP → USE AS SAMPLE
  - Trim start
  - Pitch (±12 semitoni)
  - Filtro
  - Decay
  - Monitor diretto
- **Export WAV**
  - Registrazione dell’output **post-FX**
  - REC / STOP / SAVE WAV

---

## Requisiti

- Browser moderno con supporto **Web Audio API**
  - Safari iOS
  - Safari macOS
  - Chrome / Edge / Firefox (desktop)
- Per Safari / iOS:
  - è **obbligatoria una gesture utente** (clic) per:
    - avviare l’audio
    - autorizzare il microfono

---

## Avvio rapido

### Opzione A — Apertura diretta
Apri `index.html` nel browser.

> ⚠️ Nota  
> Alcune funzioni (microfono, AudioWorklet) possono richiedere HTTPS o `localhost`.

---

### Opzione B — Server locale (consigliato)

Dalla cartella del progetto:

```bash
python3 -m http.server 8080

Poi apri nel browser:

http://localhost:8080


⸻

Uso
	1.	Premi START AUDIO
	2.	Premi PLAY
	3.	Tocca gli step per programmare il groove
	4.	Per usare il sampler:
	•	ARM MIC → autorizza il microfono
	•	REC → registra un suono o una voce
	•	STOP
	•	USE AS SAMPLE
	•	Attiva gli step sulla traccia SAMPLE
	5.	Per esportare l’audio:
	•	Record WAV
	•	REC → STOP → SAVE WAV

⸻

Filosofia del progetto
	•	Single file (index.html)
	•	Zero dipendenze
	•	Web Audio API “raw”
	•	Pensato per:
	•	sperimentazione
	•	prototipazione
	•	performance veloci
	•	studio del timing e del groove

⸻

Roadmap (idee future)
	•	Modalità PWA offline-ready
	•	Libreria di groove e preset
	•	Export / import pattern (JSON)
	•	Visualizzazione waveform del sample
	•	Slice e retrigger del sample
	•	Versione hardware DIY (concept)

⸻

Licenza

Questo progetto è proprietario e non open source.

È vietata qualsiasi forma di:
	•	copia
	•	modifica
	•	distribuzione
	•	riuso totale o parziale

senza autorizzazione scritta dell’autore.

Vedi il file LICENSE per i dettagli completi.

⸻

Autore

PezzaliAPP
Repository: pocket-groove
