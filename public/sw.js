/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-amd */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
if (!self.define) {
  let e
  const s = {}
  const a = (a, n) => (
    (a = new URL(`${a}.js`, n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        const e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    const c = {}
    const r = (e) => a(e, t)
    const o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-1846d813'], function (e) {
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/113.f54a80dedcfd302b.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/651.243d23442247d286.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/framework-8957c350a55da097.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/main-911cae6bf66273c0.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-82317b0cc07960d1.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/pages/_app-e4306703089ccfc2.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/pages/_error-8022dacb1937fc7a.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/pages/index-a7a99f7b81507240.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/pages/place/%5Bslug%5D-c31b466f40305588.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/chunks/webpack-d4c29144ea55384c.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/m3BfawHajVYW1-mPPlDuO/_buildManifest.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/m3BfawHajVYW1-mPPlDuO/_middlewareManifest.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        {
          url: '/_next/static/m3BfawHajVYW1-mPPlDuO/_ssgManifest.js',
          revision: 'm3BfawHajVYW1-mPPlDuO'
        },
        { url: '/img/blue.png', revision: '8e394c25deb6d983e39cf31527bcc7c0' },
        { url: '/img/cover.png', revision: '3cffd0d303aca3e7aa8a5dd2fabbe848' },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/img/red.png', revision: '0664b571fc629bee370321ca228a9bf6' },
        { url: '/manifest.json', revision: '07eceac4290547167cd2b5fab10622e1' },
        { url: '/robots.txt', revision: '5700b0a87e8decf65eae3d0339d76eae' },
        { url: '/sitemap.xml', revision: 'd8e57a04baf0413c9d7fd34c81f1d427' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n
            }) =>
              s && s.type === 'opaqueredirect'
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
