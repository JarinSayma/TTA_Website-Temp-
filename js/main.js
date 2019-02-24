$(document).ready(function(){
    
    //add classes
    
        $(".section-title").addClass('wow');
        $(".section-title").addClass('slideInUp');
        $(".section-text").addClass('wow');
        $(".section-text").addClass('slideInUp');
        $(".section-style").addClass('wow');
        $(".section-style").addClass('slideInUp');
    
    // responsive navber 
    
    $(".menu-bar").on('click',function(){
        $(".main-menu").slideToggle();
    });
    
    $(window).resize(function(){
        var wsize = $(window).width();
        if(wsize>992){
            $('.main-menu').removeAttr('style');
        }
    });
    
    
    //nav menu active
    
    $(".main-menu li").click(function(){
        var wsize = $(window).width();
        $(".main-menu li").removeClass("active-menu");
        $(this).addClass("active-menu");
        if(wsize<992){
           $('.main-menu').slideToggle();
        }
    });
    
    
    //scroll on top
    
    $(window).scroll(function(){
        var top100 = $(this).scrollTop();
        if(top100>100){
            $(".slide-top").addClass('on-scrol');
        }
        else if(top100<50){
            $(".slide-top").removeClass('on-scrol');
        }
    });
    $(".slide-top a").on("click",function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    
    
    
    //smooth scroll
    
        var scrollLink = $('.scroll');
        scrollLink.on("click",function(e){
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            }, 2000);
        });
    
    
    // Active link switching
    
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top -50;

              if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active-menu');
                $(this).parent().siblings().removeClass('active-menu');
              }
        });

    });
    
    
    
    
   // Work Area Isotope Section
        
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    })

    
    
    // filter items on button click
    
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // Active Button
    $('.works-buttons button').click(function(){
        $('.works-buttons button').removeClass("btn-active");
        $(this).addClass("btn-active");
    });
    
    
    
    //swipe carosel
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    
    
    //height
    var hig = $(".case-study .col-60").height() + 80;
    $(".case-study .col-50").height(hig);  
    $(window).resize(function(){
        var hig = $(".case-study .col-60").height() + 80;
        $(".case-study .col-50").height(hig);  
    });
    var blogth = $(".blog-images .col-md-3").height();
    $(".blog-images img").height(blogth);  
    $(window).resize(function(){
        var blogth = $(".blog-images .col-md-3").height();
        $(".blog-images img").height(blogth);  
    });
    
    
    
    //counter up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    
    //wow js
    
    new WOW().init();
    
    
});