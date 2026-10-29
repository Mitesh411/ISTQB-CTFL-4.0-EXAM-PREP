# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A content-first study guide for the ISTQB Certified Tester Foundation Level (CTFL) v4.0 exam, plus a small static quiz web app. Most work here is editing Markdown study material; there is no build system, package manager, linter, or test suite.

## Running the quiz app

Both pages load their data with `fetch()`, so open them through an HTTP server, not `file://`:

```bash
python -m http.server 8080        # then open http://localhost:8080/ or /test.html
```

Docker (Nginx), from the repo root. (`Docker.md` shows the same commands run from the parent directory.)

```bash
docker build -t istqb-quiz .
docker run -p 8080:80 istqb-quiz
```

The `Dockerfile` copies only `index.html`, `style.css`, `script.js`, `questions.json`, and `flashcard.json`. `test.html` and `istqb.json` are not in the image; add `COPY` lines if they need to be served. Any new file `index.html` loads needs its own `COPY` line.

## Architecture

Two independent static pages, no framework, no backend:

- **Main page** (`index.html` + `style.css` + `script.js`) holds two cards that share `window.onload`: the timed mock exam (`questions.json`) and, below it, a flashcard deck with a chapter filter (`flashcard.json`, same `{chapter, frontside, backside}` shape as `istqb.json`). Flashcard functions and DOM ids use a `Flashcard`/`fc-` prefix to stay clear of the quiz's globals (`nextBtn` etc.).
- **Timed mock exam**: `script.js` uses global state and functions called from inline `onclick` handlers. It fetches `questions.json` (shape: `{"questions": [{id, question, options[4], correct}]}`, where `correct` is the 0-based option index) and runs a 60-minute countdown, matching the real exam. If the fetch rejects, it falls back to embedded placeholder trivia questions, so seeing "capital of France" means `questions.json` failed to load. Every question in the file is shown in file order: there's no shuffling and no 40-question limit, and the score is out of the total count, so editing the bank changes the exam directly.
- **Flashcards**: `test.html` has inline script and styles and fetches `istqb.json`, which is a top-level array of `{chapter, frontside, backside}`.

There are no tests. After editing either JSON file, check that it still parses and that each `correct` index points to an option (an out-of-range index breaks `nextQuestion()`):

```bash
python -c "import json; q=json.load(open('questions.json',encoding='utf8'))['questions']; bad=[x['id'] for x in q if not 0<=x['correct']<len(x['options'])]; print(len(q),'questions; bad ids:',bad)"
python -c "import json; print(len(json.load(open('flashcard.json',encoding='utf8'))),'flashcards')"
```

## Study content layout

Content is organized by the six syllabus chapters (1 Fundamentals, 2 SDLC, 3 Static Testing, 4 Test Techniques, 5 Test Management, 6 Tool Support):

- `Notes/Chapter<N>.md`: explanatory notes
- `QUIZ/Chapter<N>Quiz.md`: numbered MCQs with options `a)`–`d)` and a bolded `**Answer**:` line
- `FlashCard/Chapter<N>FlashCard.md`: `**Q:**` / `**A:**` pairs (only chapters 1, 4, 5 exist)
- `ISTQB_Sample_paper/`, `Chapter-wise-Summary.md`, `Time-Table.md`: exam paper and revision aids
- `wiki_clone/`: copies of the GitHub wiki pages

Chapter numbers are spelled out in filenames (`ChapterOne`, not `Chapter1`). Follow the existing format of a file when adding questions or cards. Per `CONTRIBUTING.md`, keep content simple, clear, and exam-focused, and put diagrams in `/diagrams/`.

## Changelog

Record notable changes in `CHANGELOG.md` (Keep a Changelog format). The `.md` copies of the code files that 2.0.0 added have been removed, so don't recreate them.
