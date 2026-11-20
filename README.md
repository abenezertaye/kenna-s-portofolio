# Kenna Merga — Portfolio

A modern, responsive portfolio site for **Kenna Merga**, Civil Engineering student at Addis Ababa Science and Technology University and contributor to the FlocVision project.

## Files

- `index.html` — page structure and content
- `styles.css` — design system, layout, and responsive rules
- `script.js` — mobile navigation, active nav highlighting, scroll reveal
- `assets/kenna-profile.jpg` — profile photo used in the hero section

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Edit content

- **About me** — update the `#about` section in `index.html`.
- **FlocVision** — update the project card in `#flocvision`.
- **Weekly progress** — edit the `.timeline-item` articles under `#weekly-progress`; Weeks 5–6 are placeholders.
- **Photo** — replace `assets/kenna-profile.jpg`. The frame uses a 3:4 aspect ratio, so portrait images fit best.
- **Colors** — adjust the CSS variables at the top of `styles.css`.

## Notes

The design loads Inter and Sora from Google Fonts. Without an internet connection it falls back to system fonts.
