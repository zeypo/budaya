$(function() {

    var $form = $('#form-email');
    var $submit = $('.validation');
    var $input = $('.email-value');

    var firebase = new Firebase("https://popping-heat-5575.firebaseio.com/");
    var emailsRef = firebase.child('emails');

    $form.on('submit', function(e) {
        e.preventDefault();

        form.submit($input.val(), firebase, emailsRef);
    });

    $submit.on('click', function(e) {
        form.submit($input.val(), firebase, emailsRef);
    });


});

var form = {

    submit : function(email, firebase, emailsRef) {

        if(validateEmail(email)) {
            emailsRef.push({
                email: email
            });

            $('.error-message-wrapper').animate({
                height: '0',
                opacity: '0'
            }, 200);

            $('#form-email').fadeOut(function() {
                $('.validate-message-wrapper').fadeIn();
            });
        }
        else {
            console.log('coucou');
            $('.error-message-wrapper').animate({
                height: '30px',
                opacity: 1
            }, 200);
        }
    }
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
