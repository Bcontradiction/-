/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');}
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');}
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({'color':'#fff', 'background':'orange'})
    }).mouseout(function(){
        $(this).css({'color':'#757575', 'background':'#eee'})
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({'border':'1px solid #000', 'border-right':'none'});
            $(this).css({'background':'orange', 'color':'#fff', 'border':'none'})}
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({'background':'#fff', 'color':'#000', 'border':'1px solid #ccc', 'border-left':'none'})}
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,2000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 2000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        num < 0 ? num = 4 : null;
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        num > 4 ? num = 0 : null;
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({'background':"#000", 'opacity':'0.5'});
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        num > 4 ? num = 0: null;
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })
    /*二级导航轮播图下方的快速通道效果*/
    $('.navBin li').mouseover(function(){
        $(this).children('a').css('color','white');
    }).mouseout(function(){
        $(this).children('a').removeAttr('style');
    })
    // =================================/*小米明星单品*/==================================
    /*点击事件*//*shuimg1 是第 →   shuimgf 是第 ←  */
    /*下一张*/
    $('.SKU .right span:last-child').click(function(){
        skuimgl();
    });
    /*上一张*/
    $('.SKU .right span:first-child').click(function(){
        skuimgf();
    });
    /*自动轮播*/
    var skutimer;
    $('.skuimg li,.SKU .right').mouseover(function(){
        clearInterval(skutimer);
    }).mouseout(function(){
        skutimer = setInterval(autosku,1000);
    })
    skutimer=setInterval(autosku,1000);
    function autosku() {
        $('.skuimg').css('left')!='0px' ? skuimgf() : skuimgl() ;
    }
    /*===============================智能硬件、视频的阴影浮动效果============================*/
    $('.lntellhl li,.videoList li').mouseover(function(){
        $(this).addClass('shadow').css('margin-top','5px');
    }).mouseout(function(){
        $(this).removeClass('shadow').css('margin-top','')
    });
    $('.lntellhf li,.videoList li').mouseover(function(){
        $(this).css({'margin-top':'0px', 'box-shadow':'0 0 28px rgb(170,170,170)'});
    }).mouseout(function() {
        $(this).css({'margin-top': '', 'box-shadow': ''});
    })
    /*====================================搭配======================================*/
    //字体导航控制图片列表的切换
    $('.list41 li').mouseover(function(){
        $('.ProLi').eq($(this).index()).css('display','block').siblings().css('display','none');
    })
    /*!import 搭配----(左边区域第二张图片的补偿移动*/
    $('.ptop').mouseover(function(){
        $(this).css('bottom','5px');
    }).mouseout(function() {
        $(this).css('bottom','');
    })
    /*=====================================配件=====================================*/
    $('.list42 li').eq(0).css({'color':'#ff6700', 'border-bottom':'2px solid #ff6700'});
    //字体导航控制图片列表的切换
    $('.list4 li').mouseover(function(){
        $('.productR3 .ProLi').eq($(this).index()).css('display','block').siblings().css('display','none');
    })
    /*=====================================周边====================================*/
    $('.list5 li').eq(0).css({'color':'#ff6700', 'border-bottom':'2px solid #ff6700'});
    //字体导航控制图片列表的切换
    $('.list5 li').mouseover(function(){
        $('.productR4 .ProLi').eq($(this).index()).css('display','block').siblings().css('display','none');
    })
    /*=================================为你推荐=================================*/
    var num = 0;
    $('.prev2').click(function(){
        num--;
        num>=0 ? re() : num++;
    })
    $('.next2').click(function(){
       num++;
       num<4 ? re() : num--;
    })
    function re() {$('.scroll2').css('top',(-num * 400)+'px')}
    /*==============================为你推荐中的----图片内浮动效果======================*/
    $('.scroll2 li').mouseover(function(){
        $(this).css('padding-top','35px');
    }).mouseout(function(){
        $(this).css('padding-top','');
    })
    /*=================================热评产品======================================*/
    $('.hotList li').mouseover(function(){
        $(this).css('margin-top','-2px')
    }).mouseout(function(){
        $(this).css('margin-top','')
    })
    /*============================================内容====================================*/
    var obj1 = null;
    $('.contList li').mouseover(function(){
        var x = 0;
        obj1 = $(this);// console.log(obj1)
        obj1.find('.round2').children('p').click(function(){
            x = $(this).index();// 这里的下标在触发点击事件之后无法被下方两个点击事件中的x获取
            obj1.find('li').eq($(this).index()).css('opacity','1').siblings().css('opacity','0');
            $(this).css({'background':'white', 'border':'1px solid rgb(255, 103, 0)'}).siblings().removeAttr('style');
        })
    obj1.find('.r2').click(function(){ console.log(x);
        x++;
        x < 4 ? obj1.find('li').eq(x).css('opacity','1').siblings().css('opacity','0') &&
            obj1.find('.round2').find('p').eq(x).css({'background':'white', 'border':'1px solid rgb(255, 103, 0)'}).siblings().removeAttr('style'): x--;
    })
    obj1.find('.l2').click(function(){
        x--;
        x < 0 ? obj1.find('li').eq(x).css('opacity','1').siblings().css('opacity','0') &&
            obj1.find('.round2').find('p').eq(x).css({'background':'white', 'border':'1px solid rgb(255, 103, 0)'}).siblings().removeAttr('style'): x++;
    })})
    $('.round2 p:first-of-type').css({'background':'white', 'border':'1px solid rgb(255, 103, 0)'})
    /*======================================视频---字体与图标颜色变换==========================================*/
    $('.toAll a').mouseover(function(){
        $(this).css('color','#ff6709')
    }).mouseout(function(){
        $(this).css('color','');
    });
    $('.videoList li').mouseover(function(){
        $('.icon-bofang').eq($(this).index()).css('color','#ff6707');
    }).mouseout(function(){
        $('.icon-bofang').eq($(this).index()).css('color','');
    })
    /*================================搭配、配件、周边字体二级导航的字体样式=============================*/
    $('.list3 li,.list4 li,.list5 li').hover(function(){
        $(this).css({'color':'#ff6700', 'border-bottom':'2px solid #ff6700'}).siblings().css({'color':'', 'border-bottom':''})
    })
    /*================================搭配、配件、周边的买家评论效果================================*/
    $('.ProLi li').mouseover(function(){
        $(this).find('.slideDiv').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).find('.slideDiv').stop(true,false).slideUp();
    })
    /*==================================搭配、配件，周边的阴影浮动效果=======================================*/
    $('.productR li').mouseover(function(){
        $(this).not('.productR li:last-of-type').addClass('shadow');
        $('#error').css('margin-bottom','15px;')
    }).mouseout(function() {
        $(this).removeClass('shadow');
    })
    $('.twoRow li').mouseover(function(){
        $(this).addClass('shadow');
        $('#error').css('margin-bottom','15px;')
    }).mouseout(function() {
        $(this).removeClass('shadow');
    })
    $('.productL li').mouseover(function(){
        $(this).css({'margin-top':'15px', 'box-shadow':'0 0 28px rgb(170,170,170)'});
    }).mouseout(function() {
        $(this).css({'margin-top': '', 'box-shadow': ''});
    })
    /*=================================小米明星单品的函数调用=============================*/
    /*shuimg1 是第 →   shuimgf 是第 ←  */
    function skuimgl(){
        $('.SKU .skuimg').css({'right':'0px', 'left':''});
        $('.SKU .right span:last-child').css({'color':'rgb(233,233,234)', 'border':'1px solid rgb(233,233,234)'});
        $('.SKU .right span:last-child').siblings().removeAttr('style');
    }
    function skuimgf(){
        $('.SKU .skuimg').css({'right':'', 'left':'0px'});
        $('.SKU .right span:first-child').css({'color':'rgb(233,233,234)', 'border':'1px solid rgb(233,233,234)'});
        $('.SKU .right span:first-child').siblings().removeAttr('style');
    }})



