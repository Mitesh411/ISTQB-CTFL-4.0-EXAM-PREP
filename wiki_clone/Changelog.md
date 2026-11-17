# Changelog

What changed in the project, newest first. The release notes in Keep a Changelog format are in [`CHANGELOG.md`](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/blob/main/CHANGELOG.md).

Legend: 🆕 Feature · 🐛 Fix · 🔄 Refactoring · 📝 Docs · 🔧 Config · ⚠️ Breaking

## ⚠️ Breaking changes in 3.0.0

- **The exam is shorter and question ids changed.** 62 duplicate questions were removed (255 → 193) and the ids were renumbered from 1. Any outside reference to a question id now points to a different question. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- **The exam no longer runs without its question file.** If [`questions.json`](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/blob/main/questions.json) fails to load, the page shows an error and a Retry button. It used to quietly run 8 unrelated trivia questions instead. *Migration:* serve the page over HTTP (`python -m http.server 8080`), not `file://`. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- **The `.md` copies of code files are gone** (`script.js.md`, `questions.json.md` and others). This also cancels the 2.0.0 plan to phase out the original files. *Migration:* use the original files instead. ([ec7cbee](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/ec7cbee))

---

## 2026-11-17

- 🔧 **Config:** Added a `performance-optimization` Claude skill under `.claude/`. It's developer tooling and doesn't change the site. ([93d14a6](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/93d14a6))

## Week of 2026-11-02 (merged in PRs #21, #22 and #23)

- 🆕 **Flashcard spaced repetition:** "Knew it" and "Review again" buttons sort cards into three Leitner boxes, with Shuffle, Reset progress and keyboard shortcuts (← → Space K R). Progress and the last chapter studied are saved in the browser. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- 🆕 **Question metadata:** every question now has `chapter`, `lo` (learning objective) and `kLevel`. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- 🆕 **WCAG 2.1 AA accessibility:**
  - Answers are real radio buttons.
  - Answer results are written out, not shown by colour alone.
  - Screen readers hear timer warnings at 5 minutes, 1 minute and time up.
  - Focus moves to each new question and to the results.
  - Focus outlines are visible.
  - Animations respect reduced motion.

  ([9e3d80b](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/9e3d80b))
- 🔄 **Question bank cleanup:** duplicates removed and correct answers spread evenly across A–D. Before this, 37% of answers were B. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- 🐛 **Double-counted answers fixed:** clicking Next twice during the 2-second feedback no longer scores the same answer twice and skips a question. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8))
- 🐛 **Stylesheet fixed:** `style.css` had leftover merge-conflict markers and a duplicated block; both are removed. Colours now meet the 4.5:1 contrast ratio. ([7d220e8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7d220e8), [9e3d80b](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/9e3d80b))
- 📝 **Repository hygiene:**
  - `SECURITY.md` now has a real scope and reporting contact.
  - A new "Content correction" issue template replaces the blank one.
  - `CONTRIBUTING.md` is fixed.
  - The footer and its broken icon are fixed.
  - The README's shortened course link is replaced with the full URL.

  ([b09a015](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/b09a015), [39f347c](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/39f347c))
- 📝 **Product roadmap:** `ProductRoadmap.md` added, with development and testing estimates. ([389ddec](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/389ddec))

## Week of 2026-10-26 (PRs #17, #18 and #19)

- 🆕 **Flashcards on the main page:** a deck below the exam with a chapter filter, flip, and previous/next controls. It loads from `flashcard.json`, which is now in the Docker image. ([96a82f1](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/96a82f1))
- 🆕 **All six chapters covered:** 58 new cards for chapters 2, 3 and 6, for 122 cards in total. ([d75bf36](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/d75bf36))
- 🔄 **Duplicate `.md` copies of the code files removed.** ([ec7cbee](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/ec7cbee))
- 📝 **CLAUDE.md added** with contributor guidance. ([8002f29](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/8002f29))

## Week of 2026-07-26

- 📝 **CHANGELOG.md added**, with the v2.0.0 release notes. ([cbaaae8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/cbaaae8))

## Week of 2026-05-11 (PRs #14 and #15)

- 📝 **Wiki pages added:** Home, Getting Started, and Architecture & Tools. ([81033a1](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/81033a1))
- 📝 **`.md` copies of 8 code files added.** These were removed again in October. ([b4252c1](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/b4252c1))

## Week of 2026-02-23

- 🔄 **Main page:** layout tweaks and the copyright year updated in `index.html`. ([deb1877](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/deb1877), [ec8379a](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/ec8379a))

## 2025

- **Sep and Aug 2025:** question bank edits and a page update. ([bf93655](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/bf93655) to [7ad172f](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/7ad172f), [6a6242a](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/6a6242a))
- **Jul 2025:**
  - 🆕 Timed practice exam ([d76b633](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/d76b633)).
  - 🔧 Docker/Nginx image ([6aea0a8](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/6aea0a8)).
  - 🆕 New UI design (PR #10).
  - 📝 Commonly asked questions and highlighted answers added to the quizzes.
  - 📝 Flashcards for chapters 4 and 5.
  - 🆕 10 more exam questions.
- **May and Jun 2025:** 🔄 code refactor ([374e942](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP/commit/374e942)) and 📝 chapter 1 flashcard updates.
