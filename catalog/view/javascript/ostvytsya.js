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
    let btn = $(this);
    console.log(btn);
    return;
    if (btn.hasClass('btn-search_ost')){
        if (btn.hasClass('search_focus')) 
            btn.find('a').click();
        else btn.addClass('search_focus'); 
    } else btn.find('a').click();
})

// serach: https://freefrontend.com/css-search-boxes/
