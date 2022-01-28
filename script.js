$(document).ready(function(){
    alert("Accept this warm gift as you don't like flashy thing i made this with my own skills and i hope you will love this as it will help you in future as well")
    $(window).scroll(function(){
        
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
   

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.image').hover(function(){
        $('.icon').attr("src","images/makeup.png");
    }, function(){
        $('.icon').attr("src","images/makeup3.png");
    });

    var typed = new Typed(".typing", {
        strings: ["Developer", "Makeup-Artist", "Fashion-Deginer", "Business-woman", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Developer", "Makeup-Artist", "Fashion-Deginer", "Business-woman", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    var fired = 0;
$(window).scroll(function() {
    console.log(fired);
    if(fired == 0){
            alert("And i forget to tell you one thing....I Love You so so so so so so much");
            fired = 1;
   }
});
    
});