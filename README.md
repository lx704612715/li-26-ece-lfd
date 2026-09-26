# Project page: From a Single Demonstration to a General Policy for Contact-Rich Manipulation

Static project page for the IJRR 2026 paper by Xing Li and Oliver Brock. No build step.
The footer retains credit to the Academic Project Page Template and Nerfies.

## Page order

Title, authors and resource links · abstract · title figure · seven real-world experiment
videos · four EC primitives figure · code and simulation · footer.

`index.html` loads only `static/css/page.css` and `static/js/page.js`. YouTube videos
load when clicked. Other template styles and scripts remain in `static/` but are no
longer used.

The four institution logos in `static/images/logos/` are the original images
extracted from the supplied “The World Is Its Own Best Model” PowerPoint deck:
`image2.png` (TU Berlin), `image1.png` (RBO), `image60.png` (Science of Intelligence),
and `image63.png` (Robotics Institute Germany).

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

- **Code button:** replace the disabled `pending-link` span with a link to the public repository.
- **Simulation videos:** four players in `#code` share the local dummy clip `static/videos/simulation-placeholder.mp4`. Replace each player's source and poster with the corresponding Free-space, Plane, Translation or Rotation recording, then remove the placeholder sentence. The dummy clip is a labeled slate, not a simulation result.
- **Social preview:** add `og:image` and `twitter:image` when a final preview image is chosen. The canonical URL and `og:url` already use the GitHub Pages address.
- **Multimedia count:** `LfD_Journal_IJRR.tex` says 15 extensions in its supplemental-material note, but its video links identify Extensions 1–14. The page links to seven experiment videos and the full playlist without claiming a total count.

## Preview locally

YouTube embeds need an http origin, so serve the folder instead of opening the file directly:

```
cd paper_page
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
