importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/stats.json",
    "revision": "1596197e8f4251d3e19c9b1d90b0f891"
  },
  {
    "url": "assets/toronto-landscape-night.jpg",
    "revision": "186d96ad6b64e1d28f9597e4f4ef131e"
  },
  {
    "url": "assets/v8-zm-white.svg",
    "revision": "e1b60aed4e9a706478e8137c0466aa89"
  },
  {
    "url": "index.html",
    "revision": "420fefe810a6221c2f3dab467b18a4af"
  },
  {
    "url": "main.css",
    "revision": "48fbc976ae39946ed3faa2adff2e8d35"
  },
  {
    "url": "main.js",
    "revision": "c1ab5fdae353327def9690d56f16cfca"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
