importScripts('workbox-sw.prod.v2.0.1.js');

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
    "revision": "4daa3fc09262bc38ed6fe716f4a30e75"
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
    "revision": "26c901b7cdd08630a526086368935970"
  },
  {
    "url": "main.css",
    "revision": "1ddf1f0808a71a1516ece4112ac40907"
  },
  {
    "url": "main.js",
    "revision": "24920ebf0d1f3cc3087abb0ebc2d5e9d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
