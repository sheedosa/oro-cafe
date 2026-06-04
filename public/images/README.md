# Site Images

Drop image files into this folder and they will appear on the site automatically.
Until a file exists, an elegant placeholder is shown in its place — so the site
never looks broken.

## Expected files

| Filename          | Where it appears                          | Recommended size           |
| ----------------- | ----------------------------------------- | -------------------------- |
| `hero.jpg`        | Homepage hero (fallback / video poster)   | 2400 × 1600 px (landscape) |
| `about.jpg`       | Homepage "Crafted with passion" + About   | 1200 × 1500 px (portrait)  |
| `about-hero.jpg`  | About page banner                         | 2400 × 1400 px (landscape) |
| `values.jpg`      | Homepage dark "Values" band               | 1200 × 1500 px (portrait)  |
| `storefront.jpg`  | Homepage "Visit Us" + Contact page        | 1600 × 1200 px (landscape) |
| `contact-hero.jpg`| Contact page banner                       | 2400 × 1400 px (landscape) |
| `og-image.jpg`    | Social share preview                      | 1200 × 630 px (landscape)  |

### Homepage "Signature moments" (full-bleed, landscape)

These fill the screen behind big text and drift with a parallax effect, so pick
photos with a clear focal area and some negative space.

| Filename                | Moment    | Recommended size            |
| ----------------------- | --------- | --------------------------- |
| `moment-coffee.jpg`     | Coffee    | 2000 × 1300 px (landscape)  |
| `moment-pastries.jpg`   | Pastries  | 2000 × 1300 px (landscape)  |
| `moment-desserts.jpg`   | Desserts  | 2000 × 1300 px (landscape)  |

### Homepage "Follow our journey" social grid (square)

Put these in the **`social/`** sub-folder: `social/1.jpg` … `social/6.jpg`
(square, ~1080 × 1080 px). Set each post's link in `src/config/site.ts` → `social.posts[].url`.

## Tips

- Use `.jpg` for photos (smaller files). If you prefer another name/format,
  update the paths in `src/config/site.ts`.
- Keep files reasonably compressed (aim for < 400 KB each) so the site loads fast.
- The hero image sits behind text, so choose one with a calmer area in the
  middle, or a darker/lighter region depending on the overlay.
