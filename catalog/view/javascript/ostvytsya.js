function onWindowResize(){
    let wWindow = $(window).width();
    let w;
    if (wWindow>=1000){
        w = $('.left-side-cell').width();
        $('.left-side').width(w);
        w = $('.header-cell').width();
        $('header').width(w);
    }
}
window.onresize = onWindowResize;
$( document ).ready( onWindowResize );

$('.div_like-small-button').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    // $(this).find('a').click();
})

$('.search_top_cont').click(function(e){
    let b = $(this).find('.btn-search_ost');
    if (b.hasClass('search_focus')) 
        $(this).find('search').click();
    else b.addClass('search_focus')
});

// serach: https://freefrontend.com/css-search-boxes/
