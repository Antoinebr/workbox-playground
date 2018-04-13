/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "./stylesheets/style.css",
    "revision": "e3481c9a53ba1997f7b694727888067d"
  },
  {
    "url": "./offline/",
    "revision": "e3481c9a53ba1997sqs94727888067d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(https:\/\/fonts.googleapis.com)/, workbox.strategies.staleWhileRevalidate(), 'GET');


var networkFirstHandler = workbox.strategies.networkFirst({
  cacheName: 'articles-antoine',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 30
    }),
    new workbox.cacheableResponse.Plugin({
      statuses: [200]
    }),


  ]

});



const handler = (args) => networkFirstHandler.handle(args).then((response) => (!response) ? caches.match('/offline/') : response);

workbox.routing.registerRoute(/\/article\//, handler);

