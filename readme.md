# Workbox playground 


### Install 

``` npm install ```

To build the serviceworker

``` npm run build```

To serve ( http://localhost:3000/article/42 )

``` npm start ```


### Fallback with networkfirt

```JavaScript 

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


```


