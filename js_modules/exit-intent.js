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