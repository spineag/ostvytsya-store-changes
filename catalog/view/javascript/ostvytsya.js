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

/* SEARCH PART */
$('.box-search_ost button.btn-search_ost').click(function(e){ // also was commented "Search" part in common.js
    if ($(this).parent().hasClass('search_focus')){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).attr('data-lang');
        let value = $(this).parent().find('.input-search_ost').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else $(this).parent().addClass('search_focus');
});
$('.box-search_ost button.x-search_ost').click(function(e){
    $(this).parent().find('.input-search_ost').val('');
    $(this).parent().removeClass('search_focus');
});
$('.box-search_ost .input-search_ost').on('keypress',function(e) {
    if(e.which == 13){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).parent().find('button.btn-search_ost').attr('data-lang');
        let value = $(this).val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    }
});
$(document).keyup(function(e){
    if (e.key === "Escape" && $('.box-search_ost').hasClass('search_focus')){
        $('.box-search_ost .input-search_ost').val('');
        $('.box-search_ost').removeClass('search_focus');
        $('.box-search_ost .input-search_ost').blur();
        $('.box-search_ost button.btn-search_ost').blur();
    }
});