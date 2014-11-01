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
                            isLandscape: false,
                        },

                        web: {}
                    },

                    context: {},
                },

                global: {
                    isMobile: false,
                    clickEventType: false
                },

                init: function() {

                    var that = this;

                    that.setGlobals();

                    if (that.global.isMobile) {

                        that.compileMobileFooter();
                        that.showMobileFooter();
                    } else {

                        that.compileFooter();
                        that.showFooter();
                    }
                    that.initEvents();

                },

                setGlobals: function() {

                    var that = this,
                        m    = that.models;

                    m.browser.mobile.isIos7    = (m.browser.mobile.isIos) && (navigator.appVersion.indexOf('7_') != -1);
                    that.global.isMobile       = (m.browser.mobile.isIos) || (m.browser.mobile.isAndroid);
                    that.global.clickEventType = ((that.global.isMobile) ? 'touchstart' : 'click');
                    that.global.clickEventType = ((that.global.isMobile) ? 'touchstart' : 'click');
                },

                initEvents: function() {

                    var that = this,
                        $container  = $('.js-parade-footer-promo');

                    $('.js-parade-btn-close').on(FooterBanner.global.clickEventType, function(e) {

                        e.preventDefault();
                        console.log('clickEventType', FooterBanner.global.clickEventType)
                        $container.css('bottom', '-3000px').remove();
                    });
                },

                showMobileFooter: function(e) {

                    window.document.addEventListener('scroll', function(e) {

                        var scrollHeight   = $(document).height(),
                            scrollPosition = $(window).height() + $(window).scrollTop(),
                            $container     = $('.js-parade-footer-promo');

                        if ((scrollHeight - scrollPosition) / scrollHeight < 0) {

                            setTimeout(function() {
                                $container.css('bottom', 0);

                            }, 2000);

                        }
                    }, false);
                },

                showFooter: function() {

                    $(document).on('scroll', function(e) {
                        var scrollHeight   = $(document).height(),
                            scrollPosition = $(window).height() + $(window).scrollTop(),
                            $container     = $('.js-parade-footer-promo');

                        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {

                            setTimeout(function() {
                                $container.css('bottom', 0);

                            }, 2000);

                        }
                    });
                },

                compileFooter: function() {

                    var template = [
                        '<section class="parade-footer-promo js-parade-footer-promo">',
                            '<a href="#" class="parade-btn-close js-parade-btn-close">&#x2715;</a>',
                            '<div class="parade-content">',
                                '<span class="parade-message">Other great offers:</span>',
                                '<ul>',
                                    '<li><a href="http://www.anyoption.com/"><img src="/parade/images/offer_01.jpg" height="80px"></a></li>',
                                    '<li><a href="http://www.eztrader.com/"><img src="/parade/images/offer_02.jpg" height="80px"></a></li>',
                                    '<li><a href="http://www.bancdebinary.com/"><img src="/parade/images/offer_03.jpg" height="80px"></a></li>',
                                '</ul>',
                            '</div>',
                        '</section>'
                    ].join('\n');

                    $(document.body).append($(template));
                },

                compileMobileFooter: function() {

                    var template = [
                        '<section class="parade-mobile-footer-promo js-parade-footer-promo">',
                            '<a href="#" class="parade-btn-close js-parade-btn-close">&#x2715;</a>',
                            '<div class="parade-content">',
                                '<span class="parade-message">YOU CAN<br><em>MAKE</em></span>',
                                '<span class="parade-message-bold">80%</span>',
                                '<span class="parade-message"><em>PROFIT</em><br>IN MINUTES</span>',
                            '</div>',
                        '</section>'
                    ].join('\n');

                    $(document.body).append($(template));
                }

            }

            initFooter();

            function initFooter() {
                $( document ).ready(function() {
                    console.log( "footer ready!" );

                    FooterBanner.init();
                    // var $container = $('.js-parade-footer-promo');
                    // $container.css('bottom', 0);
                });
            }
        })();
