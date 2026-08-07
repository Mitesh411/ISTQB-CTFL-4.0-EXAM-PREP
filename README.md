# ISTQB CTFL 4.0 Exam Prep

<p align="center">
  <a href="https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" title="Certified Tester Foundation Level (CTFL) v4.0">
    <img src="https://www.istqb.org/wp-content/uploads/2024/10/istqb-ctfl-4-logo.jpg.avif" width="200" alt="ISTQB CTFL 4.0 logo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/ISTQB-CTFL%204.0-blue?style=for-the-badge" alt="ISTQB CTFL 4.0" />
  <img src="https://img.shields.io/badge/App-static%20HTML%2FCSS%2FJS-green?style=for-the-badge" alt="Static HTML CSS JavaScript app" />
  <img src="https://img.shields.io/badge/Docker-nginx%3Aalpine-orange?style=for-the-badge" alt="Docker nginx alpine" />
</p>

A focused study repository and interactive quiz app for candidates preparing for the **ISTQB Certified Tester Foundation Level (CTFL) 4.0** exam.

In 30 seconds: this project gives you chapter notes, flashcards, practice quizzes, an exam-style browser quiz, sample paper material, and a Dockerized static site so you can study, practice, and contribute new learning content without a backend service.

> **Not official ISTQB material.** Use this repository as a study aid and verify exam-critical details against the [official ISTQB CTFL 4.0 page](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/).

## Find what you need fast

| If you are... | Start here | Documentation type |
| --- | --- | --- |
| New to the project | [Tutorial: start studying in 5 minutes](#tutorial-start-studying-in-5-minutes) | Tutorial |
| Running the quiz locally | [How-to: run the interactive quiz](#how-to-run-the-interactive-quiz) | How-to guide |
| Updating questions or notes | [How-to: add or edit study content](#how-to-add-or-edit-study-content) | How-to guide |
| Maintaining the app | [Reference: project structure](#reference-project-structure) and [Reference: quiz data format](#reference-quiz-data-format) | Reference |
| Deciding whether to use the project | [Explanation: how this repository supports exam preparation](#explanation-how-this-repository-supports-exam-preparation) | Explanation |
| Something broke | [Troubleshooting](#troubleshooting) | How-to guide |

## Project status and scope

- **Purpose:** Help ISTQB CTFL 4.0 candidates revise concepts and practice questions.
- **Primary audience:** Software testers, QA engineers, career switchers, students, and contributors improving study material.
- **Complexity:** Simple static web application plus Markdown study resources.
- **Runtime stack:** HTML, CSS, browser JavaScript, JSON, and optional Docker/Nginx.
- **Backend required:** No.
- **Network required after cloning:** No, except for remote images/icons and any official resources you choose to open.

## Tutorial: start studying in 5 minutes

Use this path if you just cloned the repository and want the quickest confidence-building win.

### 1. Clone the repository

```bash
git clone https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP.git
cd ISTQB-CTFL-4.0-EXAM-PREP
```

### 2. Pick one study path

| Goal | Open this first | Why |
| --- | --- | --- |
| Understand the exam shape | [`Chapter-wise-Summary.md`](Chapter-wise-Summary.md) | Gives chapter-level orientation before deep study. |
| Learn chapter concepts | [`Notes/`](Notes/) | Contains chapter notes for the six CTFL areas. |
| Revise quickly | [`FlashCard/`](FlashCard/) | Converts concepts into prompt-and-answer review. |
| Practice by chapter | [`QUIZ/`](QUIZ/) | Lets you test one syllabus area at a time. |
| Simulate timed practice | [`index.html`](index.html) | Runs the browser-based quiz using `questions.json`. |

### 3. Run one practice session

Open `index.html` in a browser, select **Start Quiz**, and answer questions until the results screen appears.

> **Tip:** If your browser blocks local JSON loading, run a local web server instead of opening the file directly. See [How-to: run the interactive quiz](#how-to-run-the-interactive-quiz).

### 4. Review your misses

After each session:

1. Write down every missed topic.
2. Re-read the matching chapter note in [`Notes/`](Notes/).
3. Review matching flashcards in [`FlashCard/`](FlashCard/).
4. Retake the quiz only after you can explain why the correct answer is correct.

## How-to: run the interactive quiz

Use these instructions when your goal is to launch the app, not learn the project internals.

### Option A: open the HTML file directly

```bash
open index.html
```

On Linux, use one of these instead:

```bash
xdg-open index.html
```

or manually open `index.html` from your browser.

### Option B: run a local static server

This is the most reliable local development option because `script.js` loads `questions.json` with `fetch()`.

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

### Option C: run with Docker

Build the Nginx image:

```bash
docker build -t istqb-ctfl-quiz .
```

Run the container:

```bash
docker run --rm -p 8080:80 istqb-ctfl-quiz
```

Then open [http://localhost:8080](http://localhost:8080).

## How-to: add or edit study content

Use this when you have a specific content change to make.

### Add chapter notes

1. Choose the matching file in [`Notes/`](Notes/).
2. Keep explanations exam-focused and concise.
3. Prefer tables for comparisons and bullet lists for key facts.
4. Link back to official terms when a concept is easy to confuse.

### Add flashcards

1. Choose the matching chapter file in [`FlashCard/`](FlashCard/).
2. Use one idea per card.
3. Phrase the front side as a question or prompt.
4. Keep the back side short enough for quick recall.

### Add chapter quiz questions

1. Choose the matching file in [`QUIZ/`](QUIZ/).
2. Include one correct answer and plausible distractors.
3. Add a short explanation when the answer may be confused with another concept.

### Add interactive app questions

Edit [`questions.json`](questions.json) using this structure:

```json
{
  "id": 1,
  "question": "Which testing principle says exhaustive testing is impossible?",
  "options": [
    "Testing shows the presence of defects",
    "Exhaustive testing is impossible",
    "Defects cluster together",
    "Testing is context dependent"
  ],
  "correct": 1
}
```

Rules:

- `id` should be unique.
- `options` should contain the answer choices shown to learners.
- `correct` is a zero-based index into `options`; `0` means the first option.
- Keep wording aligned with the CTFL 4.0 syllabus and glossary.

## How-to: contribute safely

1. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
2. Create a branch for your change.
3. Make one focused update per pull request.
4. Validate JSON if you edit `questions.json` or `istqb.json`:

   ```bash
   python3 -m json.tool questions.json > /tmp/questions.json.validated
   python3 -m json.tool istqb.json > /tmp/istqb.json.validated
   ```

5. Preview Markdown and the browser quiz before submitting.
6. Explain whether your change is a content correction, new study material, or app behavior change.

## Reference: project structure

| Path | Purpose | Audience |
| --- | --- | --- |
| `index.html` | Main browser quiz page. | Users and app maintainers |
| `style.css` | Visual styling for the quiz app. | App maintainers |
| `script.js` | Quiz loading, timer, answer selection, scoring, restart, and exit behavior. | App maintainers |
| `questions.json` | Question bank for the interactive quiz. | Content contributors |
| `istqb.json` | Flashcard-style structured content. | Content contributors |
| `Notes/` | Chapter notes for CTFL 4.0 topics. | Learners |
| `FlashCard/` | Chapter flashcards for quick recall. | Learners |
| `QUIZ/` | Chapter-specific Markdown quizzes. | Learners and content contributors |
| `ISTQB_Sample_paper/` | Sample paper and overview material. | Learners |
| `wiki_clone/` | Wiki-style getting started and architecture notes. | Maintainers |
| `Dockerfile` | Builds an Nginx static site image. | Maintainers and deployers |
| `Docker.md` | Docker usage notes. | Maintainers and deployers |
| `CONTRIBUTING.md` | Contribution workflow and content standards. | Contributors |
| `SECURITY.md` | Security reporting guidance. | Users and maintainers |

## Reference: quiz data format

The browser quiz expects `questions.json` to contain a top-level `questions` array.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | Number | Yes | Stable identifier for the question. |
| `question` | String | Yes | Prompt shown to the learner. |
| `options` | Array of strings | Yes | Multiple-choice answer options. |
| `correct` | Number | Yes | Zero-based index of the correct option. |

Example:

```json
{
  "questions": [
    {
      "id": 1,
      "question": "What is a test basis?",
      "options": ["A test log", "A source of test analysis", "A defect report", "A test environment"],
      "correct": 1
    }
  ]
}
```

## Reference: quiz app behavior

| Behavior | Default | Where to change it |
| --- | --- | --- |
| Quiz duration | 60 minutes | `timeRemaining` in `script.js` |
| Question source | `questions.json` | `fetch('questions.json')` in `script.js` |
| Container web root | `/usr/share/nginx/html` | `Dockerfile` |
| Browser entry point | `index.html` | `Dockerfile` and local server root |

<details>
<summary>Advanced maintainer notes</summary>

- The app is intentionally static so it can run from GitHub Pages, any static host, or the included Nginx container.
- There is no persistence layer; results are calculated in browser memory for the current session.
- If you add persistent scoring later, document privacy implications before collecting learner data.
- Keep question data separate from UI code so content contributors can update questions without editing JavaScript.

</details>

## Explanation: how this repository supports exam preparation

ISTQB CTFL preparation usually fails when learners only read theory or only answer mock questions. This repository separates study modes so each activity has a clear purpose:

- **Notes teach concepts** before practice.
- **Flashcards strengthen recall** for terms, principles, and distinctions.
- **Chapter quizzes reveal weak areas** while the topic is still fresh.
- **The timed browser quiz builds exam stamina** and time-management habits.
- **Sample paper material provides final readiness checks** before scheduling the real exam.

The repository is organized this way because different learners arrive with different urgency levels. A new learner may need a gentle chapter sequence; a candidate taking the exam tomorrow may need flashcards and timed practice; a maintainer needs predictable files and data formats.

## Explanation: exam coverage model

The CTFL 4.0 syllabus is organized around six major areas:

| Chapter | Topic | Suggested study emphasis |
| --- | --- | --- |
| 1 | Fundamentals of Testing | Build vocabulary and testing principles. |
| 2 | Testing Throughout the Software Development Lifecycle | Understand test levels, test types, and lifecycle fit. |
| 3 | Static Testing | Learn review and static analysis concepts. |
| 4 | Test Techniques | Spend extra practice time applying techniques. |
| 5 | Test Management | Focus on planning, monitoring, risk, and defects. |
| 6 | Tool Support for Testing | Understand tool value, risks, and selection. |

> **Study strategy:** prioritize high-weight and application-heavy topics, but do not skip low-weight chapters. A small number of missed easy questions can be the difference between passing and failing.

## Security and privacy

This project does not require accounts, secrets, databases, or learner tracking.

Best practices:

- Do not commit private study notes containing employer or client information.
- Do not add analytics or external scripts without documenting the privacy impact.
- Keep Docker images based on maintained upstream images.
- Report security concerns using [`SECURITY.md`](SECURITY.md).

## Performance and accessibility considerations

- Keep images optimized because learners may use low-bandwidth connections.
- Preserve semantic HTML where possible.
- Keep button labels descriptive.
- Do not rely on color alone to communicate correctness or progress.
- Keep `questions.json` valid and reasonably sized for browser loading.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| Quiz stays on “Loading quiz questions...” | Browser blocked `fetch()` from a local file or `questions.json` is invalid. | Run `python3 -m http.server 8080` and validate JSON with `python3 -m json.tool questions.json`. |
| Docker container starts but page is unreachable | Port mapping is missing or another service already uses port 8080. | Run `docker run --rm -p 8080:80 istqb-ctfl-quiz` or choose another host port such as `8081:80`. |
| A correct answer appears wrong | `correct` index does not match the intended option. | Remember `correct` is zero-based and update `questions.json`. |
| Remote logo or icons do not load | Network is offline or the external URL changed. | The quiz still works; replace remote assets with local files if offline reliability is required. |
| Markdown looks inconsistent | Headings, tables, or code fences are malformed. | Preview the Markdown before opening a pull request. |

## Roadmap ideas

These are good future improvements because they preserve the current static architecture while improving learner outcomes:

- Add answer explanations to every interactive quiz question.
- Add filters for chapter-specific timed practice.
- Add a score history option using local browser storage.
- Add offline local copies of required images.
- Add lightweight automated checks for JSON and Markdown formatting.

## Resources by journey stage

| Stage | Resource |
| --- | --- |
| Orientation | [Official ISTQB CTFL 4.0 certification page](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/) |
| First study pass | [`Notes/`](Notes/) |
| Recall practice | [`FlashCard/`](FlashCard/) |
| Topic practice | [`QUIZ/`](QUIZ/) |
| Timed practice | [`index.html`](index.html) |
| Contribution | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| Security | [`SECURITY.md`](SECURITY.md) |

## License

This repository includes license files at [`LICENSE`](LICENSE) and [`LICENSE.md`](LICENSE.md). Review them before reusing or redistributing content.

---

If this project helps your preparation, consider starring the repository and contributing corrections that help the next stressed learner find the answer faster.
