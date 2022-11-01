function onWindowResize(){
    let w = window.innerWidth;
    if (w>=1440){
        $('.left-side').width( $('.left-side-cell').width() );
        $('header').width( $('.header-cell').width() );
    }
}
window.onresize = onWindowResize;
onWindowResize();