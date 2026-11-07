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

- **Main page** (`index.html` + `style.css` + `script.js`) holds two cards that share `window.onload`: the timed mock exam (`questions.json`) and, below it, a flashcard deck (`flashcard.json`, same `{chapter, frontside, backside}` shape as `istqb.json`). Flashcard functions and DOM ids use a `Flashcard`/`fc-` prefix to stay clear of the quiz's globals (`nextBtn` etc.).
- **Timed mock exam**: `script.js` uses global state and functions called from inline `onclick` handlers. It fetches `questions.json` and runs a 60-minute countdown. If loading fails it shows an error with a Retry button; there is no fallback data. Every question in the file is shown in file order: there's no shuffling and no 40-question limit, and the score is out of the total count, so editing the bank changes the exam directly.
- **Flashcard deck** (main page): Leitner spaced repetition. After flipping, "Knew it" moves a card up a box (1 to learn, 2 known, 3 mastered) and "Review again" resets it to box 1 and re-inserts it `FLASHCARD_REVIEW_GAP` cards later. Decks are ordered by box, lowest first. Boxes and the selected chapter are saved in `localStorage` (`istqb-flashcard-boxes`, `istqb-flashcard-chapter`). All storage access goes through `readStorage`/`writeStorage`, which tolerate blocked or corrupted storage. Progress is keyed by `chapter|frontside`, so editing a card's front text resets its progress. Keyboard shortcuts (arrows, Space, K, R) are attached to the focusable `#fc-section` only, so they never fire during the exam.
- **Legacy flashcards**: `test.html` has inline script and styles and fetches `istqb.json`, which is a top-level array of `{chapter, frontside, backside}`.

## Question bank (`questions.json`)

Shape: `{"questions": [{id, chapter, lo, kLevel, question, options[4], correct}]}`.
- `correct` is the 0-based option index.
- `chapter` is a string (`"1"`–`"6"`), and `lo` is the CTFL 4.0 learning objective (`"FL-4.2.1"`), whose first digit must match `chapter`.
- `kLevel` is the level the question actually tests, which can be lower than its learning objective's level. Glossary questions ("What is the definition of the term…" / "What is the name of the term defined as follows?") are always `K1`.

The bank has no duplicate questions, and correct answers are spread evenly across positions A–D. Keep it that way when adding questions: don't make the new answer always A. Ids are sequential from 1.

There are no tests. After editing either JSON file, run these checks. An out-of-range `correct` index breaks `nextQuestion()`.

```bash
python -c "import json,collections; q=json.load(open('questions.json',encoding='utf8'))['questions']; t=[' '.join(x['question'].lower().split()) for x in q]; bad=[x['id'] for x in q if not 0<=x['correct']<len(x['options']) or not x.get('lo','').startswith('FL-'+x.get('chapter','?')+'.') or x.get('kLevel') not in ('K1','K2','K3')]; print(len(q),'questions; duplicates:',len(t)-len(set(t)),'; bad ids:',bad,'; answer positions:',sorted(collections.Counter(x['correct'] for x in q).items()))"
python -c "import json; print(len(json.load(open('flashcard.json',encoding='utf8'))),'flashcards')"
```

## Study content layout

Content is organized by the six syllabus chapters (1 Fundamentals, 2 SDLC, 3 Static Testing, 4 Test Techniques, 5 Test Management, 6 Tool Support):

- `Notes/Chapter<N>.md`: explanatory notes
- `QUIZ/Chapter<N>Quiz.md`: numbered MCQs with options `a)`–`d)` and a bolded `**Answer**:` line
- `FlashCard/Chapter<N>FlashCard.md`: `**Q:**` / `**A:**` pairs (only chapters 1, 4, 5 exist)
- `ISTQB_Sample_paper/`, `Chapter-wise-Summary.md`, `Time-Table.md`: exam paper and revision aids
- `wiki_clone/`: copies of the GitHub wiki pages

Chapter numbers are spelled out in filenames (`ChapterOne`, not `Chapter1`). Follow the existing format of a file when adding questions or cards. Per `CONTRIBUTING.md`, keep content simple, clear, and exam-focused. Put diagrams in a `diagrams/` folder at the repo root; the folder doesn't exist yet, so create it with the first diagram.

## Security and repo conventions

- `SECURITY.md` defines the scope as a static site with no backend. Its main risks are HTML injection from question or flashcard content, and malicious or hijacked external links and resources. Render content with `textContent`, never `innerHTML`; the only `innerHTML` uses in `script.js` clear the options list or insert numbers the script computes. Security reports go to the email in `SECURITY.md`, because GitHub private vulnerability reporting is turned off for this repo.
- Content mistakes (wrong answers, typos) have their own issue template, `.github/ISSUE_TEMPLATE/content_correction.md`. It asks for the syllabus learning objective as evidence.
- The page footer loads its icons from `img.icons8.com`. Check that any new external image or link actually loads: the old GitHub icon host went dead and showed as broken text.

## Changelog

Record notable changes in `CHANGELOG.md` (Keep a Changelog format). The `.md` copies of the code files that 2.0.0 added have been removed, so don't recreate them.
