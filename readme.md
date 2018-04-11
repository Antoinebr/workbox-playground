# Workbox playground 


### Install 

``` npm install ```

To build the serviceworker

``` npm run build```

To serve ( http://localhost:3000/article/ )

``` npm start ```


### Challenge 

How can I catch when an article request is not in the article cache ( http://localhost:3000/article/990 ) and serve an offline page as a fallbask ? 




```JavaScript 

// see workboc-config.js 

{
    urlPattern: new RegExp('/article/'),
    handler: 'networkFirst',
    options: {
        cacheName: 'articles',
        expiration: {
            maxEntries: 30,
        },
        

        // How can I fallback on an offline page if the page is not present on the "articles" cache ? 
        // This is what I tried but this doesn't work :'( 


        // plugins: [
        //     {fetchDidFail: ( {originalRequest, request} ) =>{
        //         console.log('original: ', originalRequest);
        //         console.log('other: ', request);
        //     }}
        // ],
        
        
    }, 
}, 

```


