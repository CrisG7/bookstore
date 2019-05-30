//function upload(){
//
//    document.getElementById("myform").submit();
//    alert("??");
//
//}

$(document).ready(function(){
		$('#shop_car').click(function(){
			disp('#shopcar');
			sty(this);
		});
		$('#order').click(function(){
			disp('#orders');
			sty(this);
		});
		$('#collect').click(function(){
			disp('#collects');
			sty(this);
		});
		$('#account').click(function(){
			disp('#account_info');
			sty(this);
		});
		$('#userinfo').click(function(){disp('#alter_info')});
		$('#password').click(function(){disp('#alter_password')});
		$('#exit').click(function(){disp('#account_info')});
		$('#return').click(function(){disp('#account_info')});

		function disp(obj){
			$(obj).css('display','block').siblings().css('display','none');
		}
		function sty(obj){
			$(obj).addClass('checked').siblings().removeClass('checked');
		}
		$('#headimg').click(function(){
			$('#load').click();
		});

		$('.del').click(function(){
			$(this).parent().parent().remove();
			calc();
		});
		$('#shop_car').click(function(){
			$('#shopcar').css('display','block').siblings().css('display','none');
		});
		$('#account').click(function(){
			$('#account_info').css('display','block').siblings().css('display','none');
		});



		// 全选、取消全选
		$('.chkall input').on('click',function(){
			var isAll = $(this).prop('checked');  // 获取全选框的状态
			$('.chkbx input').prop('checked', isAll);

			if(isAll){
				$('.item').addClass('chosen');
			}else{
				$('.item').removeClass('chosen');
			}

			calc();
		});

		// 当点击普通checkbox时，更新全选checkbox的状态
		$('.chkbx input').on('click',function(){
			var isAll = ( $('.chkbx input').length == $('.chkbx input:checked').length );  // 总共的个数与被选的个数相比较
			$('.chkall input').prop('checked', isAll);

			$(this).parents('.item').toggleClass('chosen');

			calc();
		});

		// 数量递增、递减
		$('.numinput a').on('click',function(){
            if($(this).siblings(':animated').length > 0){
                return false;
            }
			var num = $(this).siblings('.num').val();
			if( $(this).is('.decrease') && num > 1 ){
				num--;
                move('down', num, $(this).parent());
			}else if( $(this).is('.increase') && num < 10 ){
				num++;
                move('up', num, $(this).parent());
			}
			$(this).siblings('.num').val(num);
			calc();
		});

    function move( direction, toNumber, cur_input ){
        var spanContent,  // 临时的动画元素的内容
            from,		  // 开始位置
            to;			  // 结束位置
        if(direction == 'up'){  // 向上移动
            spanContent = (toNumber-1) + '<br>' + toNumber;  // 动画元素的内容
            from = '0px';
            to = '-=20';
        }else if(direction == 'down'){
            spanContent = toNumber + '<br>' + (toNumber+1);
            from = '-20px';
            to = '+=20';
        }
        cur_input.children('.num').css('color','transparent');  // 动画开始前，先把输入框文字颜色设为透明
        $('<span>')                  // 生成动画元素
            .html(spanContent)       // 填充内容
            .addClass('num-span')    // 添加样式
            .css('top', from)        // 设置开始位置
            .appendTo(cur_input)     // 把生成好的元素加入文档
            .animate({               // 动画
                top: to              // 设置top样式终态
            },function(){
                $(this).remove();    // 动画结束后把动画元素自身移除
                cur_input.children('.num').val(toNumber).css('color','');  // 输入框文字颜色恢复原来的颜色
            });
    }





		// 计算总数、总价
		function calc(){
			var count = 0;  // 总数
			var sum = 0;    // 小计
			var total = 0;  // 总价

			var items = $('.item');
			for(var i=0; i<items.length; i++){
				var item = items.eq(i);  // 每一项
				var price = item.find('.price').text();
				var num = item.find('.num').val() - 0;
				sum = price * num;
				item.find('.sum').text(sum.toFixed(2));  // 四舍五入到小数点后两位

				if(item.is(':has(:checkbox:checked)')){  // 如果这一项被选，则加到总数与总价
					count += num;
					total += sum;
				}
			}
			$('.count').text(count);
			$('.total').text(total.toFixed(2));
		}

		// 检测用户手动输入的数量
		$('.num')
			.on('keypress',function(e){
				if(e.which < 48 || e.which > 57){  // 如果不是数字
					e.preventDefault();
				}
			})
			.on('change',function(){
				var value = $(this).val();
				if(value < 1){
					$(this).val(1);
				}else if(value > 10){
					$(this).val(10);
				}else{
					$(this).val(value - 0);  // 可去除数字前面多余的0
				}
				calc();
			});

		// 第一次进入页面时，手动触发全选
		$('.chkall input').trigger('click');
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
			.trigger('mouseleave');
	});