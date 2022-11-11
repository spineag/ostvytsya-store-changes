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


$('#search button.btn-search_ost').click(function(e){ // also was commented "Search" part in common.js
    if ($(this).parent().hasClass('search_focus')){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).attr('data-lang');
        let value = $(this).parent().find('input[name=\'search\']').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else $(this).parent().addClass('search_focus');
});
$('#searсh button.x-search_ost').click(function(e){
    console.log($(this).parent());
    $(this).parent().find('input[name=\'search\']').val('');
    $(this).parent().removeClass('search_focus');
});
$('#search input[name=\'search\']').on('keypress',function(e) {
    console.log(e.which);
    if(e.which == 13){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).parent().find('button.btn-search_ost').attr('data-lang');
        let value = $(this).val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else if (e.which == 27){
        $(this).val('');
        $(this).parent().removeClass('search_focus');
    }
});

