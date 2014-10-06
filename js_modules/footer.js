        (function() {
            if(typeof jQuery=='undefined') {
                var headTag = document.getElementsByTagName("head")[0];
                var jqTag = document.createElement('script');
                jqTag.type = 'text/javascript';
                jqTag.src = 'https://code.jquery.com/jquery-2.1.1.min.js';
                jqTag.onload = init;
                headTag.appendChild(jqTag);
                
            } else {
                init();
            }

            function init() {
                $( document ).ready(function() {
                    console.log( "ready!" );

                    var footerBar = $('<div class="footer-bar">'
                            +'<a href="http://www.google.com" class="close-btn">new-link</a>'
                        +'</div>').css({
                        position: 'fixed',
                        'z-index': 1, 
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: '50px',
                        margin: '0 -2px',
                        opacity: 0.9,
                        'background-color': '#000',
                        'text-align': 'center',
                        'padding-top': '16px'
                    });

                    $('body').append(footerBar);
                });
            }
        })();
