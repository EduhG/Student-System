$("#create-account").click(function () {
    $('.login-section').removeClass('show-section').addClass('hide-section');
    $('.register-section').removeClass('hide-section').addClass('show-section');

    return false;
});