# web-terminal-simulator
A lightweight browser-based terminal emulator built with HTML, CSS, and JavaScript, supporting basic command-line interactions.

## Explicit non-goals:
- ❌ No real operating system access
- ❌ No execution of actual shell commands
- ❌ No backend or server
- ❌ No real filesystem
- ❌ No external libraries or frameworks

## Project Phases:
### Phase 0 — Ground rules (do this before touching code)
- [ ] Decide project name and repo description
- [ ] Decide terminal persona (prompt text, fake OS name)
- [ ] Write down explicit non-goals (no real shell, no backend)

### Phase 1 — Terminal shell (visual + input)
- [ ] Create HTML skeleton (`terminal`, `output`, `input`)
- [ ] Style terminal with CSS (monospace, colors, full screen)
- [ ] Implement blinking cursor or input caret
- [ ] Autofocus input on page load
- [ ] Ensure Enter key submits a command
- [ ] Append input + output lines to the terminal
- [ ] Enable natural vertical scrolling

### Phase 2 — Command execution engine
- [ ] Capture raw input string
- [ ] Trim and normalize input
- [ ] Split command and arguments
- [ ] Create command registry object
- [ ] Handle unknown commands gracefully
- [ ] Clear input after execution
- [ ] Prevent empty commands from printing errors


### Phase 3 — Core utility commands
- [ ] `help` — list commands
- [ ] `clear` — clear terminal output
- [ ] `echo <text>` — print arguments
- [ ] `date` — current date/time
- [ ] `whoami` — fake user
- [ ] `uname` — fake system info

### Phase 4 — Virtual file system (stateful illusion)
- [ ] Design JS object representing filesystem tree
- [ ] Track current working directory (`cwd`)
- [ ] Implement `pwd`
- [ ] Implement `ls`
- [ ] Implement `cd <dir>`
- [ ] Handle invalid paths gracefully

### Phase 5 — File operations (controlled interaction)
- [ ] Implement `touch <file>`
- [ ] Implement `cat <file>`
- [ ] Implement `rm <file>`
- [ ] Prevent deleting directories accidentally
- [ ] Display sensible error messages

### Phase 6 — Arithmetic commands
- [ ] Choose arithmetic style (`calc` or `add/sub/mul/div`)
- [ ] Parse numeric arguments
- [ ] Handle invalid input
- [ ] Prevent division by zero
- [ ] Print formatted results

### Phase 7 — Scripted chatbot command
- [ ] Implement `chat <message>`
- [ ] Create fixed response map
- [ ] Handle unknown chat input
- [ ] Keep responses deterministic

### Phase 8 — Command history & keyboard polish
- [ ] Store command history
- [ ] Implement ↑ navigation
- [ ] Implement ↓ navigation
- [ ] Preserve partially typed input
- [ ] Prevent cursor jumping issues

### Phase 9 — Visual polish & UX
- [ ] Startup boot message
- [ ] Color-code errors vs output
- [ ] Improve prompt styling
- [ ] Add subtle typing animation (optional)
- [ ] Ensure mobile doesn’t break layout

### Phase 10 — Documentation
- [ ] Write README with:
  - project description
  - feature list
  - non-goals
- [ ] Add screenshots or GIF
- [ ] Comment key JS logic
- [ ] Push clean commit history
- [ ] Test once in incognito

## Project Diectory Structure
```
web-terminal-simulator/
├── index.html
├── style.css
├── terminal.js
├── LICENSE
└── README.md
```
## Promt
```
user$
```