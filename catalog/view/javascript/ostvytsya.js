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


$('#search').click(function(e){ // also commented "Search" part in common.js
    if ($(this).hasClass('search_focus')){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $(this).find('button.btn-search_ost').attr('data-lang');
        let value = $(this).find('input[name=\'search\']').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else $(this).addClass('search_focus');
});
$('#searсh .x-search_ost').click(function(e){
    $(this).parent().find('input[name=\'search\']').val('');
    $('#search').removeClass('search_focus');
});
$('#search input[name=\'search\']').on('keypress',function(e) {
    if(e.which == 13){
        let url = $('base').attr('href') + 'index.php?route=product/search&language=' + $('#search button.btn-search_ost').attr('data-lang');
        let value = $('#search input[name=\'search\']').val();
        if (value) url += '&search=' + encodeURIComponent(value);
        location = url;
    } else if (e.which == 27){
        $('#search input[name=\'search\']').val('');
        $('#search').removeClass('search_focus');
    }
});

