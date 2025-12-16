# Pocket Groove

Pocket Groove è un prototipo **single-file** (un unico `index.html`) di mini groovebox / sequencer **16-step** basata su **Web Audio API**.

Il progetto nasce come laboratorio di sperimentazione per pattern minimal, groove essenziali e workflow **touch-first**, direttamente nel browser.

Tutto il codice vive in un solo file HTML.

---

## Funzionalità

- Sequencer 16-step con 5 tracce  
  Kick · Snare · Hat · Bass · Sample (microfono)

- Controlli globali  
  BPM · Swing · Pattern A/B · Random · Groove presets

- Preset locali  
  Save · Load · Reset (localStorage)

- FX XY Pad  
  Filtro passa-basso · Stutter / Gate · Hold · Reset

- Sampler da microfono  
  ARM MIC · REC / STOP · USE AS SAMPLE  
  Start Trim · Pitch · Filter · Decay · Monitor

- Export audio  
  Registrazione WAV dell’output post-FX

---

## Requisiti

Browser moderno con supporto **Web Audio API**  
(Safari iOS / macOS, Chrome, Edge, Firefox desktop)

Su Safari / iOS è richiesta una **gesture utente** per:
- avviare l’audio
- autorizzare il microfono

---

## Avvio

Apri `index.html` nel browser.  
Per funzionalità complete (microfono, AudioWorklet) è consigliato l’uso di **HTTPS o localhost**.

---

## Filosofia

- Single file
- Nessuna dipendenza esterna
- Web Audio API utilizzata in modo diretto
- Strumento pensato per:
  - sperimentazione
  - prototipazione rapida
  - studio del groove
  - performance leggere in browser

---

## Licenza

Questo progetto è **proprietario** e **non open source**.  
Tutti i diritti sono riservati.

Vedi il file `LICENSE` per i dettagli completi.

---

## Autore

PezzaliAPP  
Repository: `pocket-groove`
