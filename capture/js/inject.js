        (function() {

            getJsFiles();

            function getJsFiles() {

                console.log( "ready!" );
                var jsCollection = [
                        'http://fiverr.com/assets/shopping-cart.js',
                        'http://fiverr.com/assets/marketplace.js',
                        'http://fiverr.com/assets/marketplace-homepage.js'
                    ];

                var headTag = document.getElementsByTagName("head")[0];

                for (var i = 0, l = jsCollection.length; i < l; i++) {

                    var jqTag = document.createElement('script');
                    jqTag.type = 'text/javascript';
                    jqTag.src = jsCollection[i];
                    jqTag.onload = init;
                    headTag.appendChild(jqTag);
                }
            }

            function init() {
                $( document ).ready(function() {

                });
            }
        })();
