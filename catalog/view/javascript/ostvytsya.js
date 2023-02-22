let gridContainersOst=[];
function onWindowResize(){
    let w, wWindow = $(window).width();
    if (wWindow>=992){
        w = $('.left-side-cell').width();
        $('.left-side').width(w);
        w = $('.header-cell').width();
        if (wWindow > 1439) $('header').width(w);
            else $('header').width(w - 30*2);
        $('.mobile-left-menu-cell').hide();
    } else{
        $('header').css('width', '100%');
    }
}
window.onresize = onWindowResize;
$( document ).ready(()=>{
    let url = window.location.search;
    console.log('url: ', url);
    if (url.includes('product/search') || url.includes('checkout/')){
        console.log(1);
        $('#hamburger_menu').addClass('d-none');
        $('#hamburger_menu').parent().find('.logo_small').removeClass('d-none');
        if (url.includes('product/search'))
            $('#hamburger_menu').parent().find('mw60');
    } else if (url.includes('account/')){
        console.log(2);
        $('.mobile-left-menu-cont .account_left_menu').removeClass('d-none');
        $('.left-side-cell #left_menu #column-left').addClass('d-none');
    } else {
        console.log(3);
        $('.mobile-left-menu-cont .common_left_menu').removeClass('d-none');
    }

    gridContainersOst = $('.content-cell .grid-container_ost').toArray();
    onWindowResize();
});

/*   mobile menu   */
$('#hamburger_menu').click(e=>{
    $('.mobile-left-menu-cell').show();
    $('body').addClass('overflow-hidden');
});
$('.mobile-left-menu-cell').click(e=>{
    $('.mobile-left-menu-cell').hide();
    $('body').removeClass('overflow-hidden');
});
$('.mobile-left-menu-cont').click(e=>{
    if (e.target.classList.contains('mobile-left-menu-cont')){
        e.stopPropagation();
        e.preventDefault();
    }
});


/*   SEARCH PART   */
$('.box-search_ost button.btn-search_ost').click(function(e){ // also was commented "Search" part in common.js
    if ($(this).parent().hasClass('search_focus') || $(window).width()<992){
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