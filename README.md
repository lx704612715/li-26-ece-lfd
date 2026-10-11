# Project page: From a Single Demonstration to a General Policy for Contact-Rich Manipulation

Static project page for the IJRR 2026 paper by Xing Li and Oliver Brock. No build step.
The layout follows the [RBO Mengers ICRA 2025 project page](https://rbo.gitlab-pages.tu-berlin.de/papers/mengers-icra-25/):
a two-part title, linked authors and affiliations, rounded resource buttons,
centered section headings, pale gray section backgrounds, and institution logos in
the footer. Body text remains larger for readability. The footer retains credit
to the Academic Project Page Template and Nerfies.

## Page order

Title, authors and resource links · abstract · title figure · seven real-world experiment
videos · Try it out! with code and simulation · footer.

`index.html` loads `static/css/page.css`, `static/js/page.js`, and Google Sans / Noto
Sans from Google Fonts (with local system font fallbacks). YouTube videos
load when clicked. Other template styles and scripts remain in `static/` but are no
longer used.

The four institution logos in `static/images/logos/` are the original images
extracted from the supplied “The World Is Its Own Best Model” PowerPoint deck:
`image2.png` (TU Berlin), `image1.png` (RBO), `image60.png` (Science of Intelligence),
and `image63.png` (Robotics Institute Germany).

The Code button and “Try it out!” section link to
[LfDEC](https://github.com/lx704612715/LfDEC). The section briefly describes the
Isaac Lab / Newton implementation and presents the factory peg insertion and
drawer opening simulation videos. The MP4 files in `static/videos/` are copied
from `assets/examples/` at LfDEC commit
`8ea7e1368b48960d9525b3e8e8dc549d3550e29c`; their posters in `static/images/`
are frames extracted from those recordings. The players retain the recordings'
original wide aspect ratio and use `preload="none"`.

## Publish on GitHub Pages

Repository: <https://github.com/lx704612715/li-26-ece-lfd>

In **Settings → Pages → Deploy from a branch**, select `main` and `/ (root)`, then save.
The page will be available at <https://lx704612715.github.io/li-26-ece-lfd/>.
Deployment can take up to 10 minutes. The `.nojekyll` file disables Jekyll processing.

To publish subsequent changes from this folder:

```sh
git add index.html static README.md .nojekyll
git commit -m "Update paper page"
git push
```

## Things to fill in

- **Social preview:** add `og:image` and `twitter:image` when a final preview image is chosen. The canonical URL and `og:url` already use the GitHub Pages address.
- **Multimedia count:** `LfD_Journal_IJRR.tex` says 15 extensions in its supplemental-material note, but its video links identify Extensions 1–14. The page embeds seven experiment videos without claiming a total count.

## Preview locally

YouTube embeds need an http origin, so serve the folder instead of opening the file directly:

```
cd paper_page
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
