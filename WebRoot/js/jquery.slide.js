(function($){
	$.fn.slide = function(options){

		var settings = {
			speed: 500
		};

		$.extend(settings, options);

		return this.each(function(){

			var context = this;

			/**
			 * 移动图片，实现动画效果
			 * @param  {String} direction 'left'为向左移动，'right'为向右移动
			 * @param  {Number} toIndex   指定动画结束后显示第几幅图片（以0开始的索引）
			 */
			function move( direction , toIndex ){

				var from;  /* 动画开始前，图片的位置 */
				var to;    /* 动画结束时，图片的位置 */

				if (direction == 'left'){
					from = '480px';
					to = '-=480';  /* jQuery的相对值设置方法 */
				}else if (direction == 'right'){
					from = '-480px';
					to = '+=480';
				}

				$('.item', context).eq(toIndex)  /* 将要显示的图片 */
					/* 先定位 */
					.css({
						'left': from,
						'display': 'block'
					})
				.add('.item.active', context)  /* 再加上正在显示的图片 */
					/* 两幅图片一起移动 */
					.animate({
						left: to
					},settings.speed,function(){  /* 动画结束后做的收尾工作，恢复到正常状态，使下一次动画能正确进行 */
						/* 移除之前的active类，给当前的加上active类 */
						$('.active', context).removeClass('active');
						$('.item', context).eq(toIndex).addClass('active');
						$('.pager > .round', context).eq(toIndex).addClass('active');
						$(this).removeAttr('style');  /* 移除animate动画产生的临时的style属性 */
					})
			}

			/* 点击上一幅、下一幅按钮 */
			// context.find('.control')
			$('.control', context).on('click',function(){
				$(':animated', context).finish();  /* 开始新动画前，立即完成正在进行中的动画 */
				
				/* 获取当前显示的图片的索引 */
				var current = $('.item', context).index($('.item.active', context));
				var i;

				if( $(this).is('.prev') ){
					i = current - 1;  /* 当前索引减1，得到上一幅的索引 */
					if( i < 0 ){
						i = 4;  /* 第一幅继续减，则回到最后一幅 */
					}
					move('right', i);
				}else if( $(this).is('.next') ){
					i = current + 1;  /* 当前索引加1，得到下一幅的索引 */
					if( i > 4 ){
						i = 0;  /* 最后一幅继续加，则回到第一幅 */
					}
					move('left', i);
				}
			});

			/* 点击圆圈 */
			$('.pager > .round', context).on('click',function(){
				$(':animated', context).finish();
				/* 当前第几幅 */
				var current = $('.item', context).index($('.item.active', context));
				/* 点击的是第几幅 */
				var clicked = $('.pager > .round', context).index(this);

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
			$(this)
				.on('mouseleave',function(){  /* 鼠标移出容器时 */
					id = window.setInterval(function(){  /* 每隔3秒重复执行 */
						$('.next', context).trigger('click');  /* 模拟点击下一幅按钮 */
					}, 3000);
				})
				.on('mouseenter',function(){
					window.clearInterval(id);  /* 鼠标移入时，根据id清除相应的定时器 */
				})
				.trigger('mouseleave');  /* 进入页面时，手动触发鼠标移出事件，使定时器生效 */
		});
	};
})(jQuery);