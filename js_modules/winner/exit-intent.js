$( document ).ready(function() {

    exitIntent();

    function creatExitMessage() {

        var template = [
            '<section id="myDiv" class="parade-bonus-banner js-parade-bonus-banner">',
                '<header>',
                    // '<a href="#" class="parade-btn-close js-parade-btn-close">&#x2715;</a>',
                    '<a href="#"><img src="http://localhost:8000/capture/images/winner-logo.png"></a>',
                    // '<a href="#"><img src="http://localhost:8000/capture/images/ad.gif"></a>',
                '</header>',
                '<div class="parade-bonus-content">',
                    '<div class="parade-message">This weeks\'s #1 online Casino for highest payouts!</div>',
                    '<div class="parade-message">Do you want a guaranteed?</div>',
                    '<div class="parade-message">FREE 500% Bonus</div>',
                    '<div class="parade-message">When YOU make a deposit?</div>',
                    '<a href="#" class="parade-message"><en>YES</em> I TAKE WINNING SERIOSLY</a>',
                    '<a href="#" class="parade-message"><en>NO</em> FREE CASH IS NOT FOR ME</a>',
                '</content>',
            '</section>'
        ].join('\n');

        $(document.body).append($(template));
        console.log('div created');
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

        // $('body').on('click', function() {
        // $('#myDiv').hide();
        // });

        $('#myDiv .btn-close').on('click', function() {
        $('#myDiv').hide();
        });

        $('#ouibounce-modal .modal').on('click', function(e) {
        e.stopPropagation();
        });
    }

});
