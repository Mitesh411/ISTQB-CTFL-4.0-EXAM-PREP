# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Flashcards on the main page** — `index.html` now shows an ISTQB CTFL 4.0 flashcard deck below the Practice Exam Challenge card, with a chapter filter, flip, and previous/next controls. Cards load from the new `flashcard.json` (122 cards covering all six chapters: chapter 1 from `istqb.json`, chapters 4 and 5 from `FlashCard/`, and new cards for chapters 2, 3 and 6 written from `Notes/`). The Docker image now includes `flashcard.json`.
- **Question metadata** — Every question in `questions.json` now has `chapter`, `lo` (CTFL 4.0 learning objective, e.g. `FL-4.2.1`) and `kLevel` fields.
- **Flashcard spaced repetition** — "Knew it" / "Review again" buttons with three Leitner boxes. "Review again" cards come back three cards later, and cards to learn come first. Also adds a Shuffle button, a Reset progress button, keyboard shortcuts (← → Space K R) and progress saved in the browser, including the last chapter studied.
- **`ProductRoadmap.md`** — Prioritized product roadmap with development and testing estimates.
- **Accessibility (WCAG 2.1 AA)** —
  - Exam answers are now real radio buttons, so arrow keys and Space work and screen readers announce them.
  - Answer results are written out, not just coloured.
  - The timer announces 5 minutes left, 1 minute left and time up. The progress bar, loading messages and flashcard changes are read aloud.
  - Focus moves to each new question and to the results.
  - All controls have a visible focus outline.
  - The page has a `<main>` landmark and a descriptive title, and animations respect "reduce motion".

### Changed
- **Question bank cleanup** — Removed 62 duplicate questions (255 → 193) and renumbered the ids. Moved correct answers so they are spread evenly across options A–D; previously 37% were B.
- **Colours for readable contrast** — Darker green and red for the Next button, the selected, correct and incorrect answers, the flipped flashcard and the Start button. Darker blue for the flashcard. Darker hint text and footer link. All text now meets WCAG AA contrast (at least 4.5:1).

### Fixed
- **Double-counted answers** — Clicking Next twice during the 2-second answer feedback scored the same answer twice and skipped the following question.
- **Broken stylesheet** — `style.css` contained leftover merge-conflict markers and a duplicated 150-line block; both are removed.
- **Repository hygiene** —
  - `SECURITY.md` now has a real scope and reporting contact, replacing GitHub's boilerplate that listed versions that don't exist.
  - The blank "custom" issue template is replaced by a **Content correction** template.
  - `CONTRIBUTING.md` renders as formatted text instead of one big code block, tells contributors to clone their own fork, and no longer points to a missing `/diagrams/` folder.
  - The page footer is now inside `<body>`, and its broken GitHub icon is replaced.
  - The README's shortened `lnkd.in` course link is replaced with the full YouTube URL.
- **No more placeholder trivia** — If `questions.json` fails to load, the exam now shows an error and a Retry button instead of silently running eight unrelated general-knowledge questions. The flashcard deck also gets an error and a Retry button.

### Removed
- **Markdown versions of non-Markdown files** — Removed the `.md` copies added in 2.0.0 (`Dockerfile.md`, `LICENSE.md`, `index.html.md`, `istqb.json.md`, `questions.json.md`, `script.js.md`, `style.css.md`, `test.html.md`). They duplicated the source files and had to be kept in sync by hand; the original files remain the single source. This also drops the 2.0.0 plan to phase out the original file formats.

## [2.0.0] - 2026-06-15

### Added
- **Markdown versions of non-Markdown files** — All core project files now have `.md` equivalents with proper code blocks for improved accessibility and documentation:
  - `Dockerfile.md`, `LICENSE.md`, `index.html.md`, `istqb.json.md`, `questions.json.md`, `script.js.md`, `style.css.md`, `test.html.md`
- **Foundational GitHub wiki** — Project wiki now includes Home, Getting Started, and Architecture pages for better contributor onboarding
- **Docker integration** — Project is now containerized for simplified deployment and environment consistency

### Changed
- **Expanded question bank** — Added 170+ new exam questions with corrections and refinements to existing answers
- **Updated copyright year** — License and documentation reflect current year

### Fixed
- **Question formatting** — Resolved semicolon and syntax issues in `questions.json` for improved JSON validity
- **Answer accuracy** — Corrected multiple answer keys to better align with ISTQB CTFL 4.0 certification standards

### Deprecated
- Original non-Markdown file format will be gradually phased out in favor of `.md` versions (v3.0.0 target)

---

## [1.0.0] - 2025-04-19

### Added
- Initial ISTQB CTFL 4.0 exam preparation resource
- Complete summary of certification content
- Interactive web-based quiz interface
- Comprehensive question bank covering all CTFL 4.0 exam domains
