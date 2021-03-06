$(window).on("load", function(){
    $(".loader-container").fadeOut(1000);
});
const navSlider = ()=>{
    const burger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.links');
    const links = document.querySelectorAll('.link, .contact-button');

    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle('nav-active');

        links.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navFade 0.5s ease forwards ${index/5+0.5}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
}

navSlider();


$(document).ready(function(){
    $(window).resize();  
})
$(window).resize(function() {
    if ($(this).width() > 600) {
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll>200){
                $("header").css("background", "rgb(41, 37, 37)");
             }
             else{
                $("header").css("background", "transparent");
             }
            
        })
    }
    else{
        $("header").css("background", "rgb(41, 37, 37)");  
    }
 });


var controller =new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: '.html'
        })
        .setClassToggle('.html', 'show')
        .addTo(controller);

        var controller =new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: '.css'
        })
        .setClassToggle('.css', 'show-css')
        .addTo(controller);

        var controller =new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: '.javascript'
        })
        .setClassToggle('.javascript', 'show-javascript')
        .addTo(controller);

var num = 0;
var images = ["/images/MasalSite.PNG",
               "/images/Blog.PNG", 
              "/images/Education.PNG",
            "/images/MasalaSurveyFrom.PNG"];
var caption = ["Masala Site",
               "Personal Blog",
               "Education Website",
               "Masala Survey"];

function next(){
    var slider = document.getElementById('slider');
    num++;
    if(num>=images.length){
        num=0
    }
    slider.src = images[num];
    document.getElementById("caption").innerHTML = caption[num];
}

function prev(){
    var slider = document.getElementById('slider');
    num--;
    if(num<0){
        num = images.length-1;
    }
    slider.src = images[num];
    document.getElementById("caption").innerHTML = caption[num];
}
