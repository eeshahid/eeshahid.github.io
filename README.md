# eeshahid.github.io

Personal academic website of **Muhammad Shahid Jabbar, PhD** — Post-Doctoral Research Fellow, SDAIA-KFUPM Joint Research Center for AI, King Fahd University of Petroleum and Minerals.

Live at: https://eeshahid.github.io

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.16.3), deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Structure

- `_pages/about.md` — home page / bio
- `_bibliography/papers.bib` — publications (BibTeX)
- `_data/cv.yml` — structured CV content, rendered at `/cv/`
- `_projects/` — research project write-ups
- `_news/` — short announcements shown on the home page
- `_pages/teaching.md` — teaching interests and experience
- `assets/pdf/` — CV and full-text paper PDFs

## Local development

This machine doesn't have Ruby installed, so the site isn't previewed locally — GitHub Actions builds and deploys it on push (see `.github/workflows/deploy.yml`). To preview locally on a machine with Ruby:

```bash
bundle install
bundle exec jekyll serve
```
