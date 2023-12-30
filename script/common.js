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