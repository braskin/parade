        (function() {

            getCssFiles();
            getJQueryFile();

            function getJQueryFile() {

                console.log( "jQuery ready!" );

                if(typeof jQuery=='undefined') {

                    var jqTag = document.createElement('script');
                    jqTag.type = 'text/javascript';
                    jqTag.src = 'https://code.jquery.com/jquery-2.1.1.min.js';
                    jqTag.onload = init;
                    document.getElementsByTagName( 'head' )[0].appendChild( jqTag );
                    
                } else {
                    init();
                }
            }


            function getCssFiles() {

                console.log( "css ready!" );

                // run this command: python -m SimpleHTTPServer from: ~/App/.../parade file
                var cssCollection = [
                        'http://24option.parade.io/css/24option/main.css'
                    ];

                for (var i = 0, l = cssCollection.length; i < l; i++) {

                    var cssTag = document.createElement('link');
                    cssTag.rel   = 'stylesheet';
                    cssTag.type = 'text/css';
                    cssTag.href = cssCollection[i];
                    document.getElementsByTagName( 'head' )[0].appendChild( cssTag );
                }
            }

            function getJsFiles() {

                console.log( "js ready!" );

                // run this command: python -m SimpleHTTPServer from: ~/App/.../parade file
                var jsCollection = [
                        'http://24option.parade.io/js/24option/ouibounce.js',
                        'http://24option.parade.io/js/24option/exit-intent.js'
                    ];

                for (var i = 0, l = jsCollection.length; i < l; i++) {

                    var jsTag = document.createElement('script');
                    jsTag.src = jsCollection[i];
                    document.getElementsByTagName( 'head' )[0].appendChild( jsTag );
                }
            }

            function init() {
                getJsFiles();
                $( document ).ready(function() {

                });
            }
        })();
