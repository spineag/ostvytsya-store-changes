function onWindowResize(){
    let wWindow = $(window).width();
    let w;
    if (wWindow>=1000){
        w = $('.left-side-cell').width();
        console.log('w left: ' + w);
        $('.left-side').width(w);
        w = $('.header-cell').width();
        console.log('w header: ' + w);
        $('header').width(w);
    }
}
window.onresize = onWindowResize;
onWindowResize();