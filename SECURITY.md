# Security Policy

## Scope

This project is a static study site: HTML, CSS, JavaScript and JSON files served as-is, with no backend, accounts or server-side data. The practice exam and flashcards run entirely in your browser. Flashcard progress is stored only in your browser's local storage.

Security issues that matter here include:

- cross-site scripting (XSS) or HTML injection through question or flashcard content;
- links or embedded resources that point to malicious or hijacked sites;
- weaknesses in the Docker image (`Dockerfile`) or its Nginx configuration.

## Supported versions

Only the latest code on the `main` branch is supported. Fixes are not backported to older releases.

## Reporting a vulnerability

Please **do not open a public issue** for a security problem.

Email **mailme.dandademitesh@gmail.com** with:

- a description of the issue and its impact;
- steps to reproduce it, or a proof of concept;
- the affected file, page or URL.

We aim to acknowledge reports within a few working days and will let you know whether the report is accepted. Accepted issues are fixed on `main`, and you'll be credited in the fix's changelog entry unless you'd rather stay anonymous.

For mistakes in study content, such as a wrong answer or a typo, open a normal issue with the **Content correction** template instead.
