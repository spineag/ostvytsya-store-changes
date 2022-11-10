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
window.onresize = onWindowResize;0
$( document ).ready( onWindowResize );

$('.search_top_cont').parent().click(function(e){
    $(this).addClass('search_focus');
});

$('#search').click(function(e){ // also commented "Search" part in common.js
    if ($(this).hasClass('search_focus')){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).find('button').attr('data-lang');
        let value = $(this).find('input[name=\'search\']').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else $(this).addClass('search_focus');
});

// serach: https://freefrontend.com/css-search-boxes/
