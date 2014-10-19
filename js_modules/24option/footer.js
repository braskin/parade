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
                    console.log( "footer ready!" );

                    var template = [
                        '<section class="parade-footer-promotion">',
                            '<a href="#" class="parade-btn-close"></a>',
                            '<div class="parade-content">',
                                '<span class="parade-message">Check out these other great offer!</span>',
                                '<ul>',
                                    '<li><a href="#"><img height="80px" src="http://localhost:8000/capture/images/offer_01.jpg"></a></li>',
                                    '<li><a href="#"><img height="80px" src="http://localhost:8000/capture/images/offer_02.jpg"></a></li>',
                                    '<li><a href="#"><img height="80px"  src="http://localhost:8000/capture/images/offer_03.jpg"></a></li>',
                                '</ul>',
                            '</div>',
                        '</section>'
                    ].join();
                    console.log(template);

                    $('body').append($(template));
                });
            }
        })();
