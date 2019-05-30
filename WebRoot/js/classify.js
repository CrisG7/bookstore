$(document).ready(function(){
		$('.li_wx').click(function(){
			$(this).addClass('choose').siblings().removeClass('choose');
			$('.wx').css('display','inline-block').siblings().css('display','none');
			
		});
		$('.li_bc').click(function(){
			$(this).addClass('choose').siblings().removeClass('choose');
			$('.bc').css('display','inline-block').siblings().css('display','none');
			
		});
        $('.li_sw').click(function(){
            $(this).addClass('choose').siblings().removeClass('choose');
            $('.sw').css('display','inline-block').siblings().css('display','none');

        });
        $('.li_sh').click(function(){
            $(this).addClass('choose').siblings().removeClass('choose');
            $('.ly').css('display','inline-block').siblings().css('display','none');

        });
        $('.li_jg').click(function(){
            $(this).addClass('choose').siblings().removeClass('choose');
            $('.jj').css('display','inline-block').siblings().css('display','none');

        });
        $('.li_kj').click(function(){
            $(this).addClass('choose').siblings().removeClass('choose');
            $('.yy').css('display','inline-block').siblings().css('display','none');

        });
		// $('.li_wh').click(function(){
		// 	$('.wh').css('display','inline-block').siblings().css('display','none');
		// 	dis(this);
		// });
		// $('.li_sh').click(function(){
		// 	$('.sh').css('display','inline-block').siblings().css('display','none');
		// 	dis(this);
		// });
		// $('.li_jg').click(function(){
		// 	$('.jg').css('display','inline-block').siblings().css('display','none');
		// 	dis(this);
		// });
		// $('.li_kj').click(function(){
		// 	$('.kj').css('display','inline-block').siblings().css('display','none');
		// 	dis(this);
		// });


		$('.menu').click(
			function(){  /* 鼠标进入时 */
				$('.menu ul').css('right','0px');
				$('body').css('overflow-y','hidden');
			}
		);
		$(document).click(function(){
			$('.menu ul').css('right','-250px');
			$('body').css('overflow-y','visible');
		});
		$(".menu").click(function(event){
    		event.stopPropagation();
		});


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


	});