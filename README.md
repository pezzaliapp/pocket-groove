# Pocket Groove

Pocket Groove è un prototipo **single-file** (un unico `index.html`) di una mini groovebox / sequencer **16-step** basata su **Web Audio API**.

Il progetto è pensato come laboratorio di sperimentazione per pattern minimal, groove essenziali e workflow “touch-first”.

Tutto il codice vive in un solo file HTML.

---

## Funzioni principali

- Sequencer 16-step con 5 tracce:
  - Kick
  - Snare
  - Hat
  - Bass (oscillatore mono)
  - Sample (da microfono)

- Controlli globali:
  - BPM
  - Swing
  - Pattern A / B
  - Clear
  - Random
  - Groove presets

- Preset:
  - Save
  - Load
  - Reset (localStorage)

- FX XY Pad:
  - Asse X: filtro passa-basso
  - Asse Y: stutter / gate ritmico
  - Hold FX
  - Reset FX

- Sampler Microfono:
  - ARM MIC
  - REC / STOP
  - USE AS SAMPLE
  - Start Trim
  - Pitch
  - Filter
  - Decay
  - Monitor

- Export WAV:
  - Registrazione output post-FX
  - REC / STOP / SAVE WAV

---

## Requisiti

- Browser con supporto Web Audio API:
  - Safari iOS
  - Safari macOS
  - Chrome
  - Edge
  - Firefox (desktop)

- Su Safari / iOS è richiesta una gesture utente per:
  - avviare l’audio
  - autorizzare il microfono

---

## Avvio rapido

### Opzione A — Apertura diretta

Apri il file `index.html` nel browser.

Nota: alcune funzioni (microfono, AudioWorklet) possono richiedere HTTPS o localhost.

---

### Opzione B — Server locale (consigliato)

Dalla cartella del progetto esegui:

```bash
python3 -m http.server 8080

Poi apri nel browser:

http://localhost:8080


⸻

Utilizzo

Sequencer
	1.	Premi START AUDIO
	2.	Premi PLAY
	3.	Tocca gli step per programmare il groove

Sampler
	1.	Premi ARM MIC e autorizza il microfono
	2.	Premi REC e registra un suono o una voce
	3.	Premi STOP
	4.	Premi USE AS SAMPLE
	5.	Attiva gli step sulla traccia SAMPLE

Export WAV
	1.	Vai alla sezione Record WAV
	2.	Premi REC
	3.	Premi STOP
	4.	Premi SAVE WAV

⸻
```
Filosofia del progetto
	•	Single file (index.html)
	•	Nessuna dipendenza esterna
	•	Web Audio API usata in modo diretto
	•	Pensato per:
	•	sperimentazione
	•	prototipazione rapida
	•	studio del groove
	•	performance leggere in browser

⸻

Roadmap
	•	Modalità PWA offline-ready
	•	Libreria di groove e preset
	•	Export / import pattern (JSON)
	•	Visualizzazione waveform del sample
	•	Slice del sample
	•	Concept hardware DIY

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
