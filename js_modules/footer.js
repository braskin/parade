        (function() {

            var FooterBanner = {

                models: {

                    browser: {
                        mobile: {
                            isIos: (navigator.userAgent.match(/(?:iPhone|iPad|iPod)/i) != null),
                            isIos7: false,
                            isAndroid: (navigator.userAgent.match(/(?:Android)/i) != null),
                            isChromeIos: (navigator.userAgent.match(/(?:CriOS)/i) != null),
                            isNativeAppPage: (window.location.search.match(/(?:mobile_app_web=true)/i) != null),
                            isMobile: false,
                            isLandscape: false,
                        },

                        web: {}
                    },

                    context: {},
                },

                global: {
                    clickEventType: false
                },

                init: function() {

                    var that = this;

                    that.setGlobals();
                    that.compileFooter();
                    that.initEvents();

                },

                setGlobals: function() {

                    var that = this,
                        m    = that.models;

                    m.browser.mobile.isIos7    = (m.browser.mobile.isIos) && (navigator.appVersion.indexOf('7_') != -1);
                    m.browser.mobile.isMobile  = (m.browser.mobile.isIos) || (m.browser.mobile.isAndroid);
                    that.global.clickEventType = ((FooterBanner.models.browser.isMobile) ? 'touchstart' : 'click');
                },

                initEvents: function() {

                    var that = this,
                        $container  = $('.parade-footer-promotion');


                    $(window).on("scroll", function() {
                        var scrollHeight = $(document).height();
                        var scrollPosition = $(window).height() + $(window).scrollTop();
                        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {

                            setTimeout(function() {
                                $container.css('bottom', 0);

                            }, 2000);

                        }
                    });

                    $('.js-parade-btn-close').on(FooterBanner.global.clickEventType, function(e) {

                        e.preventDefault();
                        console.log('clickEventType', FooterBanner.global.clickEventType)
                        $container.css('bottom', '-3000px').remove();
                    });
                },

                compileFooter: function() {

                    var template = [
                        '<section class="parade-footer-promotion">',
                            '<a href="#" class="parade-btn-close js-parade-btn-close">&#x2715;</a>',
                            '<div class="parade-content">',
                                '<p class="parade-message">Check out these other great offer!</p>',
                                '<ul>',
                                    '<li><a href="#"><img height="80px" src="http://localhost:8000/capture/images/offer_01.jpg"></a></li>',
                                    '<li><a href="#"><img height="80px" src="http://localhost:8000/capture/images/offer_02.jpg"></a></li>',
                                    '<li><a href="#"><img height="80px"  src="http://localhost:8000/capture/images/offer_03.jpg"></a></li>',
                                '</ul>',
                            '</content>',
                        '</section>'
                    ].join('\n');

                    $('body').append($(template));
                }


            }

            initFooter();

            function initFooter() {
                $( document ).ready(function() {
                    console.log( "footer ready!" );

                    FooterBanner.init();
                });
            }
        })();
