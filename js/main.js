(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#content').load('./portfolio.html');

    $('#sidebar ul a').click(function (e) {
        e.preventDefault();
        $("#content").load(e.target.href);
    });

})(jQuery);

function onClickSideBarButton(type) {
    switch (type) {
        case 'email':
            document.location = 'mailto:yokekhei@yahoo.com';
            break;
        case 'facebook':
            window.open('https://www.facebook.com/yokekhei', '_blank');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/yoke-khei-lam-77a54584/', '_blank');
            break;
        case 'github':
            window.open('https://github.com/yokekhei', '_blank');
            break;
        case 'credit':
            window.open('./credit.html', '_blank');
            break;
        default:
            console.log('Unknown type: ', type);
    }
}
