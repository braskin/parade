        (function() {

            getJsFiles();

            function getJsFiles() {

                var jsRoot = 'http://24option.parade.io/js/24option/';

                var jsCollection = [
                        jsRoot + 'capture.js',
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
