$(function(){
    $(".box .btn").click(function(){
        $(".box .left").css("left","-50%");
        $(".box .right").css("right","-50%");
        $(".box .btn").css("top","-20%");
        $(".box .txt").css("top","-30%");
        setTimeout(function(){
            window.location.href = "index1.html";
        },2000);
    });
    $(document).ready(function(){
        $('.txt').neonText();
        setTimeout(function(){
          $(".w0").addClass("bounceInRight");
      },1000);
      $(window).scroll(function(){
        if($(window).scrollTop()>625){
          $(".w1").addClass("bounceInUp");
        }
      });
      $(window).scroll(function(){
        if($(window).scrollTop()>1250){
          $(".w2").addClass("slideInLeft");
        }
      });
      $(window).scroll(function(){
        if($(window).scrollTop()>1875){
          $(".w3").addClass("bounceInDown");
        }
      });
      $(window).scroll(function(){
        if($(window).scrollTop()>2500){
          $(".w4").addClass("shake");
        }
      });
      $(window).scroll(function(){
        if($(window).scrollTop()>3125){
          $(".w5").addClass("bounceInLeft");
          $(".w6").addClass("bounceInRight");
        }
      });
    });

    $(".subBox").each(function(index){
        // this:原声js对象
        // $(this):jquery对象
        $(this).css({"left":120*index+"px","transitionDelay":index*0.5+"s"});
        $(this).find(".sub").css("backgroundPosition",-120*index+"px");
    });
    var num = 0;
    var timer = setInterval(moveFn,3000);
    $(".controll .prev").on("click",function(){
        $('.subBox').css("transform","rotateX("+(--num*-90)+"deg)");
    });
    $(".controll .next").on("click",function(){
        $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)");
    });
    $(".lunbo").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(moveFn,3000);
    });
    function moveFn(){
        $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)");
    }



    function setCarousel() {
        var slider = $('.tm-img-slider');

        if (slider.hasClass('slick-initialized')) {
          slider.slick('destroy');
        }

        if($(window).width() > 991){
            // Slick carousel
            slider.slick({
              dots: true,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1
            });
          }
          else {
           slider.slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
          });
         }
       }

       $(document).ready(function(){

        setCarousel();
        $('.tm-img-slider').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image'
          // other options
        });

        $(window).resize(function() {
          setCarousel();
        });
      });


    
});
