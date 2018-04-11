# Workbow playground 


```JavaScript 
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


