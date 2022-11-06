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
    e.stopPropagnation();
    e.preventDefault();
    $(this).find('a').click();
})