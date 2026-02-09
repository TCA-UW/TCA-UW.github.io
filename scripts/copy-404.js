// Copy index.html to 404.html for GitHub Pages SPA routing.
// When a user visits a client-side route (e.g. /for-clients), GitHub Pages
// returns 404 and serves 404.html. Loading the SPA ensures React Router
// can handle the route; the URL stays unchanged so the correct page renders.
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const src = path.join(buildDir, 'index.html');
const dest = path.join(buildDir, '404.html');

fs.copyFileSync(src, dest);
console.log('Copied index.html to 404.html for GitHub Pages SPA routing');
