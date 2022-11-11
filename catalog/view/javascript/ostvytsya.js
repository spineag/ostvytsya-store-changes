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

$('.box-search_ost button.btn-search_ost').click(function(e){ // also was commented "Search" part in common.js
    if ($(this).parent().hasClass('search_focus')){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).attr('data-lang');
        let value = $(this).parent().find('input[name=\'search\']').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else $(this).parent().addClass('search_focus');
});
$('.box-search_ost button.x-search_ost').click(function(e){
    console.log('x');
    console.log($(this).parent());
    $(this).parent().find('input[name=\'search\']').val('');
    $(this).parent().removeClass('search_focus');
});
$('.box-search_ost input[name=\'search\']').on('keypress',function(e) {
    if(e.which == 13){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).parent().find('button.btn-search_ost').attr('data-lang');
        let value = $(this).val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    }
});
$(document).keyup(function(e){
    console.log(e.key);
    if (e.key === "Escape" && $('.box-search_ost').hasClass('search_focus')){
        $('.box-search_ost input[name=\'search\']').val('');
        $('.box-search_ost').removeClass('search_focus');
    }
});