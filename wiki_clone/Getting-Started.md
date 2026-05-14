# Getting Started

This page helps you quickly start using the repository for ISTQB CTFL 4.0 preparation.

## Prerequisites

- Git
- A Markdown viewer/editor (optional but useful)
- A modern browser for the quiz web app
- Optional: Docker, if you want containerized execution

## 1) Clone the repository

```bash
git clone https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP.git
cd ISTQB-CTFL-4.0-EXAM-PREP
```

## 2) Start with the study guide

Read:

- `README.md` for exam details, chapter weightage, and study plan.
- `Time-Table.md` and `Chapter-wise-Summary.md` for pacing and revision.

Then study chapter content in:

- `Notes/` (detailed concepts)
- `QUIZ/` (chapter tests)
- `FlashCard/` (rapid recall)

## 3) Run the quiz web app (local static files)

Open `index.html` in a browser, or serve the directory with any static file server.

The app uses:

- `index.html` (UI shell)
- `style.css` (presentation)
- `script.js` (quiz behavior)
- `questions.json` (question data)

## 4) Run with Docker (optional)

Build and run:

```bash
docker build -f Dockerfile -t istqb-quiz .
docker run -p 8080:80 istqb-quiz
```

Then open `http://localhost:8080`.

## 5) Contribution basics

Before contributing, review:

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

Keep additions syllabus-aligned and chapter-organized.
