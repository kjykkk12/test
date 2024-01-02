$(function () {

    // 메뉴
    $(".menu>li").on({
        mouseover: function () {
            $(".submenu", this).stop().slideDown();
        },
        mouseout: function () {
            $(".submenu", this).stop().slideUp();
        }
    });

    // 햄버거바
    $(".htn").click(function(){
        $(".h_menu").stop().animate({right:'0'},1000);
    });

    $(".close").click(function(){
        $(".h_menu").stop().animate({right:'-100%'},1000);
    });


    // 햄버거바 슬라이드 
    $(".menu_h>li:nth-child(1)").on({
        mouseover:function(){
            $(".submenu_h",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu_h",this).stop().slideUp();
        }
    });

    $(".menu_h>li:nth-child(2)").on({
        mouseover:function(){
            $(".submenu_h",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu_h",this).stop().slideUp();
        }
    });

    $(".menu_h>li:nth-child(3)").on({
        mouseover:function(){
            $(".submenu_h",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu_h",this).stop().slideUp();
        }
    });

    $(".menu_h>li:nth-child(4)").on({
        mouseover:function(){
            $(".submenu_h",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu_h",this).stop().slideUp();
        }
    });

    $(".menu_h>li:nth-child(5)").on({
        mouseover:function(){
            $(".submenu_h",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu_h",this).stop().slideUp();
        }
    });
    
    
    // 상단고정 
    $(function(){
        
        let spot = $("section").offset().top;
        // header가 다시 나타나는 부분 설정 
        console.log(spot)

        
        $(window).scroll(function(){
            let pot = $(window).scrollTop();
            console.log(pot)

            if( pot > spot){
                $(".iheader").addClass("fix")
            } else{
                $(".iheader").removeClass("fix")
            }

            if(pot >1000){
                $(".ttn").stop().fadeIn();
            } else{
                $(".ttn").stop().fadeOut();
            }
        });

        $(".ttn").click(function(){
            $(window).scrollTop(0);
        });

    });


    // 
});