# Product Roadmap: ISTQB CTFL 4.0 Exam Prep

_Last updated: 2026-11-07_

## Summary

This repository helps candidates pass the ISTQB CTFL 4.0 exam. It has two parts: syllabus-aligned Markdown study material (notes, chapter quizzes, flashcards, a sample paper, a study timetable) and a static web app with a timed practice exam and a flashcard deck.

The content is broad, but the practice exam does not yet behave like the real exam or tell candidates what to study next. This roadmap focuses on three themes, in order:

1. **Trustworthy practice.** Clean up the question bank and make the practice exam match the real one: 40 questions, weighted by chapter, with a pass/fail result.
2. **Learning, not just scoring.** Explain answers, show weak chapters, and let candidates practise by chapter and pick up where they left off.
3. **Reach and maintainability.** Publish the app, make it accessible, and give contributors one source of truth for content plus automated checks.

Total estimated effort: **292 development hours and 131 testing hours** across 28 tasks.

## Progress

| ID | Task | Status | Date |
|---|---|---|---|
| R1 | Deduplicate and rebalance the question bank | ✅ Done | 2026-11-07 |
| R2 | Tag questions with chapter, learning objective and K-level | 🟡 In progress: all questions tagged; expert review of a 20% sample still needed | – |
| R5 | Replace placeholder fallback with an error and retry | ✅ Done | 2026-11-07 |
| R7 | Repository hygiene fixes | ✅ Done | 2026-11-07 |
| R14 | Accessibility to WCAG 2.1 AA | 🟡 In progress: all fixes made and checked by automated tests; an axe-core run and an NVDA screen reader pass still needed | – |
| R16 | Flashcard upgrades (shuffle, spaced repetition, keyboard) | ✅ Done | 2026-11-07 |

## Current state

### Strengths

- Covers all six syllabus chapters with notes, chapter quizzes, a chapter-wise summary and an 8-week study plan.
- 193-question practice exam with a 60-minute timer, progress bar and skip/exit controls. Every question is tagged with its chapter, learning objective and K-level.
- 122 flashcards covering all six chapters, with a chapter filter, on the same page as the exam.
- Runs anywhere: plain HTML/CSS/JavaScript, no backend, Docker image available.
- Open-source basics in place: README, CONTRIBUTING, CODE_OF_CONDUCT, LICENSE, CHANGELOG, issue templates.

### Gaps

| Area | Finding |
|---|---|
| Question bank quality | ~~47 questions appear more than once (61 extra copies). The correct answer is option B in 37% of questions.~~ Fixed by R1: the bank now has 193 unique questions with answers spread evenly across A–D. **Still open:** 115 of 193 (60%) are "define this term" glossary questions, while the real exam leans on scenarios and K2/K3 application. There are no K3 questions at all. |
| Question metadata | ~~Questions have no chapter, learning objective or K-level.~~ Tagged by R2 (expert review pending). 57 of the 64 learning objectives have at least one question. FL-1.2.1, FL-1.4.2, FL-1.4.5, FL-3.1.2, FL-3.2.2, FL-3.2.5 and FL-4.3.3 have none. **Still open:** questions have no explanations (R9). |
| Exam realism | Every question is shown, in file order (193 questions in 60 minutes). There is no shuffling, no pass/fail verdict at 65%, no flag-for-review, and no review of answers afterwards. |
| Misleading fallback | ~~If `questions.json` fails to load over the network, the app silently shows placeholder trivia ("What is the capital of France?") instead of an error.~~ Fixed by R5. |
| Content consistency | Chapter quizzes use two different Markdown formats, and only chapters 3 and 4 include explanations. Quiz size does not follow exam weight: Chapter 4 is 27% of the exam but has 10 quiz questions. Chapter 3 has only 5. Markdown flashcards exist only for chapters 1, 4 and 5. The sample paper (Set A) has no answer key. |
| Accessibility | ~~Answer options and flashcards are clickable `div`/`li` elements with no keyboard support or ARIA attributes. The page footer sits outside `<body>`.~~ Fixed by R7 (footer) and R14 (keyboard, ARIA, contrast, focus). **Still open:** confirmation with axe-core and the NVDA screen reader. |
| Distribution | There is no hosted version. Users must clone the repo and run a local server or Docker. |
| Engineering | No automated tests or CI. JSON data is not validated. The legacy `test.html`/`istqb.json` flashcard page duplicates the main page. |
| Repository hygiene | ~~`SECURITY.md` is unedited GitHub boilerplate listing versions that don't exist (4.0.x, 5.1.x). The "custom" issue template is blank. CONTRIBUTING points to a `/diagrams/` folder that doesn't exist.~~ Fixed by R7. |
| Licensing | `ISTQB_Sample_paper/Question_Paper_A.md` reproduces ISTQB Sample Exam Set A v1.7. Its use and attribution have not been checked against ISTQB's terms. |

## How tasks are prioritized

Each task is scored on **impact** (how much it improves a candidate's chance of passing, or unblocks other tasks) and **feasibility** (effort, risk, dependencies).

| Priority | Meaning | Phase |
|---|---|---|
| **P0** | High impact, low to moderate effort, or a blocker for other work | Now: 0–1 month |
| **P1** | High impact, larger effort | Next: 1–3 months |
| **P2** | Valuable, but depends on earlier work or needs a product decision | Later: 3–6 months |

Estimates are in hours for one developer familiar with vanilla JavaScript. Content tasks (tagging, explanations, exercises) assume a CTFL-certified reviewer. Testing hours cover manual and automated verification, plus expert review of content tasks.

## Roadmap at a glance

| ID | Task | Priority | Dev (h) | Test (h) | Depends on |
|---|---|---|---:|---:|---|
| ~~R1~~ | ~~Deduplicate and rebalance the question bank~~ ✅ | P0 | 4 | 3 | – |
| R2 | Tag questions with chapter, learning objective and K-level 🟡 | P0 | 20 | 6 | R1 |
| R3 | Realistic exam mode (40 weighted questions, shuffled, pass/fail) | P0 | 10 | 6 | R2 |
| R4 | Results review with per-chapter breakdown | P0 | 8 | 5 | R2 |
| ~~R5~~ | ~~Replace placeholder fallback with an error and retry~~ ✅ | P0 | 1 | 1 | – |
| R6 | CI: validate data and check links | P0 | 6 | 2 | – |
| ~~R7~~ | ~~Repository hygiene fixes~~ ✅ | P0 | 3 | 1 | – |
| R8 | Check ISTQB content licensing and attribution | P0 | 2 | 1 | – |
| R9 | Explanations for every question | P1 | 30 | 10 | R1 |
| R10 | Answer key and rationale for Sample Paper A | P1 | 6 | 2 | R8 |
| R11 | Chapter practice mode with instant feedback | P1 | 10 | 6 | R2 |
| R12 | Flag for review and question navigator | P1 | 8 | 5 | – |
| R13 | Save progress and attempt history | P1 | 10 | 6 | R4 |
| R14 | Accessibility to WCAG 2.1 AA 🟡 | P1 | 10 | 6 | – |
| R15 | Publish on GitHub Pages | P1 | 4 | 2 | R6 |
| ~~R16~~ | ~~Flashcard upgrades (shuffle, spaced repetition, keyboard)~~ ✅ | P1 | 12 | 6 | – |
| R17 | Chapter 4 worked K3 exercises | P1 | 24 | 8 | – |
| R18 | Harden the Docker image | P1 | 3 | 2 | – |
| R19 | Retire the legacy flashcard page | P1 | 1 | 1 | – |
| R20 | Single source of truth for quiz and flashcard content | P2 | 16 | 6 | R2, R9 |
| R21 | Modular JavaScript with automated tests | P2 | 12 | 12 | – |
| R22 | Offline support (PWA) | P2 | 8 | 4 | R15 |
| R23 | Searchable ISTQB glossary | P2 | 16 | 3 | – |
| R24 | Dark mode and mobile polish | P2 | 6 | 3 | – |
| R25 | Opt-in, privacy-friendly usage analytics | P2 | 6 | 2 | R15 |
| R26 | Additional full sample exams | P2 | 12 | 4 | R8 |
| R27 | AI "explain my mistake" tutor (experiment) | P2 | 24 | 10 | R9 |
| R28 | Localization | P2 | 20 | 8 | R20 |
| | **Total** | | **292** | **131** | |

## Now (P0): trustworthy practice

### ~~R1. Deduplicate and rebalance the question bank~~ ✅ Done (2026-11-07)

~~Remove the 61 duplicate copies from `questions.json` and renumber the ids. Reorder options so the correct answer is spread roughly evenly across A–D (today 37% are B).~~

- **Done when:** no two questions share the same text, and each option position holds 20–30% of correct answers.
- **Development:** 4 h · **Testing:** 3 h
- **Outcome:** removed 62 duplicates; one was a near-duplicate that differed only by a space before the "?". The bank is down from 255 to 193 questions, with ids renumbered. Correct answers are now 49 / 49 / 48 / 47 across A–D (25% each). Duplicates kept the first copy. Every copy had the same correct answer, so no answer key changed.

### R2. Tag questions with chapter, learning objective and K-level 🟡 In progress

Add `chapter`, `lo` (for example `FL-4.2.1`) and `kLevel` fields to every question. Note which chapters are thin, for example K3 questions for Chapter 4.

- **Done when:** every question has all three fields and a CTFL-certified reviewer has checked a 20% sample.
- **Development:** 20 h (4 h for the schema and tooling, 16 h for tagging) · **Testing:** 6 h
- **Progress:** all 193 questions are tagged. Glossary questions are tagged by the term they test and set to K1. The other 78 were tagged by hand at the level each question actually tests.
  - By chapter: 55 / 29 / 16 / 35 / 46 / 12.
  - By K-level: 138 K1, 55 K2, no K3.
  - Seven learning objectives have no questions (see Gaps).
  - **Remaining:** a CTFL-certified reviewer checks a 20% sample (about 39 questions).

### R3. Realistic exam mode

Draw 40 questions using the official chapter weights (8 / 6 / 4 / 11 / 9 / 2). Shuffle question and option order, keep the 60-minute limit, and show **Pass** or **Fail** at 65% (26/40). Keep a "full bank" mode for candidates who want every question.

- **Done when:** every new attempt draws a different set with the correct chapter counts, and the verdict matches the score.
- **Development:** 10 h · **Testing:** 6 h
- **Note:** the bank has no K3 questions yet. The real exam includes K3 questions, mostly in Chapter 4, so a weighted draw will be easier than the real exam until R17 adds them.

### R4. Results review with per-chapter breakdown

After the exam, list each question with the candidate's answer, the correct answer and the explanation (once R9 is done). Show the score per chapter and point to the weakest chapter's notes.

- **Done when:** a candidate can see every wrong answer and the chapter it belongs to.
- **Development:** 8 h · **Testing:** 5 h

### ~~R5. Replace the placeholder fallback~~ ✅ Done (2026-11-07)

~~Remove the embedded trivia questions from `script.js`. If loading fails, show a clear error and a **Retry** button.~~

- **Done when:** blocking `questions.json` shows the error and never trivia.
- **Development:** 1 h · **Testing:** 1 h
- **Outcome:** the trivia questions are gone. Network errors, HTTP errors and an empty question list all show an error with a **Retry** button that reloads the questions. The flashcard deck got the same error-and-retry treatment.

### R6. CI: validate data and check links

Add a GitHub Actions workflow that runs on every pull request. It should:

- validate `questions.json` and `flashcard.json` against a JSON Schema, including that each `correct` index points to a real option and there are no duplicates;
- check Markdown links;
- validate the HTML.

- **Done when:** a pull request that breaks the JSON or a link fails CI.
- **Development:** 6 h · **Testing:** 2 h

### ~~R7. Repository hygiene fixes~~ ✅ Done (2026-11-07)

- ~~Replace the boilerplate `SECURITY.md` with a real reporting contact.~~
- ~~Fill in or delete the blank "custom" issue template.~~
- ~~Create `/diagrams/` or remove the reference to it from CONTRIBUTING.~~
- ~~Move the footer inside `<body>` in `index.html`.~~
- ~~Replace the shortened `lnkd.in` link in the README with the full URL.~~

- **Done when:** none of the files above contain placeholder text or broken references.
- **Development:** 3 h · **Testing:** 1 h
- **Outcome:**
  - **`SECURITY.md`:** states the scope (a static site with no backend) and that only `main` is supported. Reports go to the maintainer's email already published in the site footer. GitHub private vulnerability reporting is turned off for this repo; turning it on in the repo settings would give reporters a private channel without email.
  - **Issue templates:** the blank "custom" template is replaced by a **Content correction** template for wrong answers and typos, which asks for the syllabus learning objective as evidence.
  - **`CONTRIBUTING.md`:** no longer points to a missing folder; it now says to create `diagrams/` with the first diagram. Also fixed:
    - the whole guide was wrapped in a code block, so GitHub showed it as raw text;
    - step 2 said "clone your fork" but gave the upstream URL.
  - **Footer:** now inside `<body>`. Its GitHub icon pointed at a host that no longer serves it (HTTP 402) and showed as broken text; it's replaced with an icon from the same set as the other footer icons.
  - **README:** the `lnkd.in` link now uses the full YouTube URL it redirected to.
  - **Verification:** every link in the touched files returns HTTP 200, except the README's "ISTQB Certified Tester" badge. Its Diplomasafe certificate page returns 404 to scripted requests and needs a manual check in a browser.

### R8. Check ISTQB content licensing and attribution

Confirm ISTQB's terms for reproducing sample exams and syllabus text. Depending on the answer, add the required attribution or replace the copied paper with links to istqb.org.

- **Done when:** the maintainer has signed off on the decision and it is written in the README.
- **Development:** 2 h · **Testing:** 1 h (excluding any legal review time)

## Next (P1): learning, not just scoring

### R9. Explanations for every question

Add an `explanation` field: why the correct answer is right and why the strongest wrong option is wrong, citing the syllabus section. An LLM can draft explanations to cut writing time, but every one needs expert review before release.

- **Done when:** 100% of questions have a reviewed explanation.
- **Development:** 30 h · **Testing:** 10 h

### R10. Answer key and rationale for Sample Paper A

Add the missing answer key with a short rationale per question, depending on the outcome of R8.

- **Done when:** all 40 questions have an answer and a rationale.
- **Development:** 6 h · **Testing:** 2 h

### R11. Chapter practice mode

Let candidates pick a chapter and practise untimed, with right/wrong and the explanation shown after each answer. Add a "weak areas" option based on R13 history.

- **Done when:** each chapter can be practised on its own, with instant feedback.
- **Development:** 10 h · **Testing:** 6 h

### R12. Flag for review and question navigator

Match the real exam's ability to mark questions and come back to them. Add a grid of question numbers showing answered, skipped and flagged states.

- **Done when:** a candidate can jump to any question and change their answer before submitting.
- **Development:** 8 h · **Testing:** 5 h

### R13. Save progress and attempt history

Store attempts in the browser (`localStorage`): resume an exam interrupted by a refresh, and show past scores and per-chapter trends. No account or backend is needed.

- **Done when:** refreshing mid-exam resumes it, and past attempts appear on the start screen.
- **Development:** 10 h · **Testing:** 6 h

### R14. Accessibility to WCAG 2.1 AA 🟡 In progress

- ~~Make answer options and flashcards real buttons or radio inputs that work with the keyboard.~~
- ~~Add ARIA labels and announce the timer's last five minutes to screen readers.~~
- ~~Add visible focus styles and fix colour contrast.~~

- **Done when:** the whole exam and flashcard flow works with the keyboard and a screen reader (NVDA), and axe reports no critical issues.
- **Development:** 10 h · **Testing:** 6 h
- **Progress (2026-11-07):**
  - **Answers:** native radio buttons in a group named by the question. Arrow keys and Space work, and each radio is named by its answer text.
  - **Feedback:** an answer's result is written out ("Incorrect. The correct answer is: …") as well as shown by colour.
  - **Announcements:** the timer is named "Time remaining" and announces 5 minutes left, 1 minute left and time up. The progress bar reports "Question N of M". Loading errors, answer feedback and flashcard changes are read aloud.
  - **Focus:** moves to each new question, to the results, and back to Start on restart. A visible navy focus outline appears on every control.
  - **Contrast:** 10 failing colour pairs fixed, the worst being 2.1:1 (correct-answer green) and 2.8:1 (flipped card). Every replacement is at least 5.1:1.
  - **Structure:** the page has a `<main>` landmark and a descriptive title. The flashcard section is a named region.
  - **Reflow and motion:** no horizontal scrolling at 320 px, and animations are cut under "reduce motion".
  - **Fixed along the way:** clicking Next twice during feedback scored the answer twice and skipped a question. `style.css` contained leftover merge-conflict markers and a duplicated 150-line block.
  - **Checks run:**
    - an automated keyboard-only run through the exam and flashcards;
    - a contrast check of all text in every exam and flashcard state, including gradient backgrounds;
    - the accessible name of every control, read from Chrome's accessibility tree.

    All 51 checks pass. The previous version failed 7 text-contrast checks plus the structure checks.
  - **Remaining:**
    - Run axe-core. It couldn't be run here because the tool environment blocks downloading and executing the library. Use the axe DevTools browser extension, or `npx @axe-core/cli http://localhost:8080`.
    - Do a manual pass with NVDA, covering exam start, answering, the time warnings, results, and flashcards.

### R15. Publish on GitHub Pages

Deploy the app from `main` with GitHub Actions and put the live link at the top of the README. This is the biggest single reach improvement: no clone or Docker needed.

- **Done when:** a merge to `main` updates the live site automatically.
- **Development:** 4 h · **Testing:** 2 h

### ~~R16. Flashcard upgrades~~ ✅ Done (2026-11-07)

- ~~Shuffle.~~
- ~~"Knew it / Review again" buttons with simple Leitner-box spaced repetition.~~
- ~~Keyboard shortcuts (arrow keys, space).~~
- ~~Remember progress per chapter.~~

- **Done when:** cards marked "Review again" come back more often than known ones, and progress survives a refresh.
- **Development:** 12 h · **Testing:** 6 h
- **Outcome:**
  - Cards move between three boxes (To learn, Known, Mastered), and each card shows its box as a badge.
  - "Review again" brings a card back three cards later. Each new round and each shuffle puts cards to learn first.
  - Shortcuts: ← → to move, Space to flip, K for "Knew it", R for "Review again". They only work while the flashcard section has focus, so they never affect the exam.
  - Each card's box and the last chapter studied are saved in the browser. A **Reset progress** button clears the selected chapter.
  - Verified in headless Chrome, including a reload and corrupted saved data.

### R17. Chapter 4 worked K3 exercises

Chapter 4 carries the most marks (27%) and the most K3 questions. Add step-by-step worked exercises with solutions for:

- equivalence partitioning;
- boundary value analysis;
- decision tables;
- state transition testing;
- statement and branch coverage.

- **Done when:** each technique has at least three exercises with worked solutions, reviewed by an expert.
- **Development:** 24 h · **Testing:** 8 h

### R18. Harden the Docker image

Pin the `nginx:alpine` image to a specific version, add security headers (CSP, X-Content-Type-Options) and a health check, and run as a non-root user.

- **Done when:** the image builds reproducibly and the headers appear in responses.
- **Development:** 3 h · **Testing:** 2 h

### R19. Retire the legacy flashcard page

The main page now contains a complete flashcard deck. Delete `test.html` and `istqb.json`, or redirect the page, and update CLAUDE.md and the wiki.

- **Done when:** there is only one flashcard experience in the repo.
- **Development:** 1 h · **Testing:** 1 h

## Later (P2): reach and maintainability

### R20. Single source of truth for content

Today the same material lives in Markdown (`QUIZ/`, `FlashCard/`) and JSON in different formats. Make the JSON the source and generate consistent Markdown from it with a script, run in CI.

- **Done when:** editing the JSON regenerates the Markdown, and CI fails if they drift.
- **Development:** 16 h · **Testing:** 6 h

### R21. Modular JavaScript with automated tests

Split `script.js` into modules (data, exam, flashcards, storage). Add unit tests (Vitest) and end-to-end tests (Playwright) for the exam and flashcard flows, and run them in CI.

- **Done when:** the main flows are covered by tests that run on every pull request.
- **Development:** 12 h · **Testing:** 12 h

### R22. Offline support (PWA)

Add a web app manifest and a service worker so candidates can install the app and study without a connection.

- **Done when:** the installed app loads and runs a full exam with no network.
- **Development:** 8 h · **Testing:** 4 h

### R23. Searchable ISTQB glossary

60% of the bank (115 of 193 questions) tests terminology. A searchable glossary page linked from explanations would support this directly. Its content depends on the outcome of R8.

- **Done when:** terms used in the exam are searchable and linked from explanations.
- **Development:** 16 h · **Testing:** 3 h

### R24. Dark mode and mobile polish

Follow the system colour scheme and tighten layouts for small screens.

- **Done when:** both themes pass a contrast check and the app works at 360 px width.
- **Development:** 6 h · **Testing:** 3 h

### R25. Opt-in, privacy-friendly usage analytics

Learn which questions are most often missed and which features are used, with no personal data. **Needs a product decision on privacy before starting.**

- **Done when:** a weekly report shows the most-missed questions and the analytics are off by default.
- **Development:** 6 h · **Testing:** 2 h

### R26. Additional full sample exams

The sample paper overview refers to Sets B, C and D. Add them, or link to the official sets, depending on R8.

- **Done when:** at least two more full sets are available in the app.
- **Development:** 12 h · **Testing:** 4 h

### R27. AI "explain my mistake" tutor (experiment)

After a wrong answer, a candidate can ask why their choice was wrong and get an explanation grounded in the syllabus. This needs a small server to keep the API key private, which changes the current no-backend design, plus a cost and abuse budget. Run it as a time-boxed experiment behind a feature flag.

- **Done when:** a prototype is tested with 10+ users and there is a go/no-go decision based on usefulness, accuracy and cost.
- **Development:** 24 h · **Testing:** 10 h

### R28. Localization

Make interface text translatable and support question banks in other languages. Start with one language chosen by demand.

- **Done when:** the interface and one translated question bank can be switched at runtime.
- **Development:** 20 h · **Testing:** 8 h (excluding translation)

## Effort summary

| Phase | Tasks | Dev (h) | Test (h) | Total (h) |
|---|---:|---:|---:|---:|
| Now (P0) | 8 | 54 | 25 | 79 |
| Next (P1) | 11 | 118 | 54 | 172 |
| Later (P2) | 9 | 120 | 52 | 172 |
| **Total** | **28** | **292** | **131** | **423** |
| Completed so far (R1, R5, R7, R16) | 4 | 20 | 11 | 31 |
| **Remaining** | **24** | **272** | **120** | **392** |

R2's and R14's development hours are largely spent, but both stay in "Remaining" until their manual checks are done: R2's expert review, and R14's axe-core and NVDA passes.

## Open decisions

| Decision | Blocks | Owner |
|---|---|---|
| How ISTQB sample exam and glossary content may be reproduced | R8, R10, R23, R26 | Maintainer |
| Whether to add any backend (needed only for R27) | R27 | Maintainer |
| Whether to collect any usage data | R25 | Maintainer |
| Who acts as CTFL-certified content reviewer | R2, R9, R17 | Maintainer |

## Success measures

- **Question bank quality:** 0 duplicates, 100% of questions tagged and explained.
- **Exam realism:** each practice exam has 40 questions with the official chapter weights and a pass/fail verdict.
- **Reach:** a live site linked from the README, with traffic tracked if R25 is approved.
- **Quality gate:** CI runs data validation and end-to-end tests on every pull request.
- **Accessibility:** no critical axe issues, and full keyboard operation.
