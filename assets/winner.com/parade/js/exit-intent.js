$( document ).ready(function() {

    exitIntent();

    function creatExitMessage() {

        var template = [
            '<section id="myDiv" class="parade-bonus-banner js-parade-bonus-banner">',
                '<header>',
                    // '<a href="#" class="parade-btn-close js-parade-btn-close">&#x2715;</a>',
                    '<a href="#"><img src="/parade/images/winner-logo.png"></a>',
                    '<a href="#"><img src="/parade/images/ad.gif"></a>',
                '</header>',
                '<div class="parade-bonus-content">',
                    '<small>This weeks\'s #1 online Casino for highest payouts!</small>',
                    '<div class="parade-bb-message"><em class="green">Do you want a guaranteed</em></div>',
                    '<div class="parade-bb-title cf"><em>FREE 500% Bonus</em></br>When YOU make a deposit<b>?</b></div>',
                    '<div class="parade-bb-btn-wrapper"><a href="#" class="parade-bb-btn green"><em>YES</em> I TAKE WINNING SERIOSLY</a>',
                    '<a href="#" class="parade-bb-btn grey"><em>NO</em> FREE CASH IS NOT FOR ME</a></div>',
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

        $('#myDiv .parade-bb-btn.grey').on('click', function() {
        $('#myDiv').hide();
        });

        $('#ouibounce-modal .modal').on('click', function(e) {
        e.stopPropagation();
        });
    }

});