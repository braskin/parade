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
                        'http://localhost:8000/capture/css/main.css'
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
                        'http://localhost:8000/capture/js/ouibounce.js'
                        // 'http://localhost:8000/capture/js/exit-intent.js'
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

                    exitIntent();

                    function creatExitMessage() {
                        var myDiv = document.createElement('div');
                        myDiv.id = 'myDiv';
                        document.body.appendChild(myDiv);
                        document.getElementById('myDiv').innerHTML = 'this should have worked...';
                        console.log('div created')
                    }

                    function exitIntent() {

                        creatExitMessage();

                        // if you want to use the 'fire' or 'disable' fn,
                        // you need to save OuiBounce to an object
                        var _ouibounce = ouibounce(document.getElementById('myDiv'), {
                        aggressive: true,
                        timer: 0,
                        callback: function() { console.log('ouibounce fired!'); }
                        });

                        $('body').on('click', function() {
                        $('#myDiv').hide();
                        });

                        $('#myDiv .modal-footer').on('click', function() {
                        $('#myDiv').hide();
                        });

                        $('#ouibounce-modal .modal').on('click', function(e) {
                        e.stopPropagation();
                        });
                    }

                });
            }
        })();
