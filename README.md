# nsw-lightson-prototype

A static-site prototype built with the NSW Digital Design System, using Eleventy and Webpack.

## Quick start

You will need:

* Node.js
* Yarn

Then run:

```
yarn install
npm run start
```

and point your web browser to `http://localhost:3000/`. It will update automatically when you make changes.

## Building the site

To build the site, run `npm run build`.

The site will be output into the `build/` directory.

## GitHub Pages

A GitHub Pages action (defined in `.github/workflows/`) automatically pushes the site to GitHub Pages.

It builds the site automatically on any changes, and pushes the output to the `gh-pages` branch of the repository, which is then deployed by GitHub.
