/**
 * Created by walsh on 2017/12/17.
 */
$(document).ready(function(){
    $('.hot_item').hover(function(){
        $(this).find('img').css('opacity','0.7');
    },function(){
        $(this).find('img').css('opacity','1');
    });

    $('.new_item').hover(function(){
        $(this).find('img').css('opacity','0.7');
    },function(){
        $(this).find('img').css('opacity','1');
    });

    $('.dis_book').hover(function(){
        $(this).find('img').css('opacity','0.7');
    },function(){
        $(this).find('img').css('opacity','1');
    });

    $('.comment').hover(function(){
        $(this).find('.bk').css('opacity','0.7');
    },function(){
        $(this).find('.bk').css('opacity','1');
    });

    $('.book').hover(function(){
        $(this).find('img').css('opacity','0.7');
    },function(){
        $(this).find('img').css('opacity','1');
    });

    $('.foot .about').hover(function(){
        $('.foot .author').finish();
        $('.foot .author').slideDown();
    },function(){
        $('.foot .author').slideUp();
    });
    $('.foot .link').hover(function(){
        $('.foot .payme').finish();
        $('.foot .payme').slideDown();
    },function(){
        $('.foot .payme').slideUp();
    });
    $('.foot .join').hover(function(){
        $('.foot .joinus').finish();
        $('.foot .joinus').slideDown();
    },function(){
        $('.foot .joinus').slideUp();
    });













    $('.dis_next').click(function(){

        if(parseInt($('.dis_book').css('left'))>-900){
            $('.dis_book').animate({
                left: "-=450px"
            });
        }
    });
    $('.dis_pre').click(function(){
        if(parseInt($('.dis_book').css('left'))<0){
            $('.dis_book').animate({
                left: "+=450px"
            });
        }
    });


    function move( direction , toIndex ){

        var from;  /* 动画开始前，图片的位置 */
        var to;    /* 动画结束时，图片的位置 */

        if (direction == 'left'){
            from = '1519px';
            to = '-=1519';  /* jQuery的相对值设置方法 */
        }else if (direction == 'right'){
            from = '-1519px';
            to = '+=1519';
        }

        $('.slide > .item').eq(toIndex)  /* 将要显示的图片 */
            /* 先定位 */
            .css({
                'left': from,
                'display': 'block'
            })
            .add('.slide > .active')  /* 再加上正在显示的图片 */
            /* 两幅图片一起移动 */
            .animate({
                left: to
            },500,function(){  /* 动画结束后做的收尾工作，恢复到正常状态，使下一次动画能正确进行 */
                /* 移除之前的active类，给当前的加上active类 */
                $('.slide .active').removeClass('active');
                $('.slide > .item').eq(toIndex).addClass('active');
                $('.slide > .pager > .round').eq(toIndex).addClass('active');
                $(this).removeAttr('style');  /* 移除animate动画产生的临时的style属性 */
            })
    }

    /* 点击上一幅、下一幅按钮 */
    $('.slide > .control').on('click',function(){
        $(':animated').finish();  /* 开始新动画前，立即完成正在进行中的动画 */

        /* 获取当前显示的图片的索引 */
        var current = $('.slide > .item.active').index('.slide > .item');
        var i;

        if( $(this).is('.prev') ){
            i = current - 1;  /* 当前索引减1，得到上一幅的索引 */
            if( i < 0 ){
                i = 3;  /* 第一幅继续减，则回到最后一幅 */
            }
            move('right', i);
        }else if( $(this).is('.next') ){
            i = current + 1;  /* 当前索引加1，得到下一幅的索引 */
            if( i > 3 ){
                i = 0;  /* 最后一幅继续加，则回到第一幅 */
            }
            move('left', i);
        }
    });

    /* 点击圆圈 */
    $('.slide > .pager > .round').on('click',function(){
        $(':animated').finish();
        /* 当前第几幅 */
        var current = $('.slide > .item.active').index('.slide > .item');
        /* 点击的是第几幅 */
        var clicked = $(this).index('.slide > .pager > .round');

        if( current < clicked ){
            /* 点击的图片比当前图片的索引更大，说明要显示的图片在后面，要往左移才能显示出来 */
            move('left', clicked);
        }else if( current > clicked ){
            /* 与上相反 */
            move('right', clicked);
        }

    });

    /* 自动轮播 */
    var id;  /* 定时器id，用于标识定时器 */
    $('.slide')
        .on('mouseleave',function(){  /* 鼠标移出容器时 */
            id = window.setInterval(function(){  /* 每隔3秒重复执行 */
                $('.slide > .next').trigger('click');  /* 模拟点击下一幅按钮 */
            }, 3000);
        })
        .on('mouseenter',function(){
            window.clearInterval(id);  /* 鼠标移入时，根据id清除相应的定时器 */
        })
        .trigger('mouseleave');  /* 进入页面时，手动触发鼠标移出事件，使定时器生效 */



    $('.menu').click(
        function(){  /* 鼠标进入时 */
            $('.menu ul').css('right','0px');
            $('body').css('overflow-y','hidden');
            window.clearInterval(id);
        }
    );
    $(document).click(function(){
        $('.menu ul').css('right','-250px');
        $('body').css('overflow-y','visible');
        $('.slide').trigger(function(){
            id = window.setInterval(function(){  /* 每隔3秒重复执行 */
                $('.slide > .next').trigger('click');  /* 模拟点击下一幅按钮 */
            }, 3000);
        });
    });
    $(".menu").click(function(event){
        event.stopPropagation();
    });

});
