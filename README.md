# Pocket Groove

**Pocket Groove** is a single-file (`index.html`) browser-based mini groovebox
and 16-step sequencer built with the **Web Audio API**.

It is designed as a lightweight experimental playground for
minimal patterns, essential grooves, and touch-first workflows.

No build system.  
No external dependencies.  
Everything lives in one HTML file.

---

## Features

### Sequencer
- 16-step sequencer
- 5 tracks:
  - Kick
  - Snare
  - Hat
  - Bass (mono oscillator)
  - Sample (microphone input)

### Global Controls
- BPM
- Swing
- Pattern A / B
- Clear
- Random
- Groove presets

### Presets
- Save
- Load
- Reset  
(stored in `localStorage`)

### FX
- XY Pad:
  - X-axis: low-pass filter
  - Y-axis: rhythmic stutter / gate
- Hold FX
- Reset FX

### Sampler (Microphone)
- Arm microphone
- Record / Stop
- Use as sample
- Start trim
- Pitch
- Filter
- Decay
- Monitor

### WAV Export
- Record post-FX output
- REC / STOP / SAVE WAV

---

## Requirements

A modern browser with **Web Audio API** support:

- Safari (iOS / macOS)
- Chrome
- Edge
- Firefox (desktop)

**Note:**  
On Safari / iOS a user gesture is required to:
- start audio
- authorize microphone access

---

## Quick Start

### Option A — Open directly

Open `index.html` in your browser.

> Some features (microphone, AudioWorklet) may require HTTPS or `localhost`.

---

### Option B — Local server (recommended)

From the project directory, run:

```bash
python3 -m http.server 8080
```
Then open in your browser:

http://localhost:8080


Usage

Sequencer
	1.	Press START AUDIO
	2.	Press PLAY
	3.	Tap steps to program the groove

Sampler
	1.	Press ARM MIC and allow microphone access
	2.	Press REC and record a sound or voice
	3.	Press STOP
	4.	Press USE AS SAMPLE
	5.	Activate steps on the SAMPLE track

WAV Export
	1.	Go to Record WAV
	2.	Press REC
	3.	Press STOP
	4.	Press SAVE WAV
___

Philosophy
	•	Single-file architecture (index.html)
	•	No frameworks, no dependencies
	•	Direct use of Web Audio API
	•	Designed for:
	•	experimentation
	•	rapid prototyping
	•	groove studies
	•	lightweight browser performances

___

Roadmap
	•	PWA offline-ready mode
	•	Groove & preset library
	•	Pattern export / import (JSON)
	•	Sample waveform view
	•	Sample slicing
	•	DIY hardware concept

____

License

This project is licensed under the
GNU Affero General Public License v3.0 (AGPLv3).

If you modify this software and make it available over a network,
you must provide access to the complete corresponding source code.

See the LICENSE file for details.

___

Author

PezzaliAPP
Alessandro Pezzali
Repository: pocket-groove
