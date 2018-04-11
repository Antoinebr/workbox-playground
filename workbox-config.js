/*
*
* https://developers.google.com/web/tools/workbox/modules/workbox-build#getmanifest_mode
*/

module.exports = {
    globDirectory: './',
    globPatterns: [
      'public/stylesheets/*.css'
    ],
    modifyUrlPrefix: {
        'public/': './',
    },


    runtimeCaching: [

        {
            urlPattern: new RegExp('(https://fonts.googleapis.com)'),
            handler: 'staleWhileRevalidate'
        },

   
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

    


    ],

    swDest: './public/sw.js',
    clientsClaim: true,
    skipWaiting: true
  };