# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
