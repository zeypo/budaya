$(function() {

    // Carroussel
    var carrousselOpts = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="icon-left arrow-prev"></span>',
        nextArrow: '<span class="icon-right arrow-next"></span>',
    };
    $('.carroussel').slick(carrousselOpts);

    // Carroussel Team
    var carrousselTeamOpts = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="icon-left arrow-prev"></span>',
        nextArrow: '<span class="icon-right arrow-next"></span>',
    };
    $('.carroussel-team').slick(carrousselTeamOpts);


    // Gestion du formulaire
    $('.pres-form').on('submit', function(e) {

        e.preventDefault();

        window.open('/dist/dossier%20de%20presse%20budaya.pdf');

    });
});
