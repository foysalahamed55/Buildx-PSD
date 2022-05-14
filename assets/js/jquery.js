$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu-left ul').slideToggle(1000);
    });
    
    /**  mixitup **/
    var mixer = mixitup('.gallery-area', {
        load: {
            filter : '.Office'
        }
    });
    // counter 
    $('.count').counterUp({
        time: 2000
    });

});