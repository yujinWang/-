
window.onload=function(){




//新品推荐效果
var headMenu=document.querySelector('.head_menu');
var headXptj=headMenu.querySelector('.menu_xptj');
var menuInfo=headMenu.querySelector('.menu_info');
var menuIcon2=headMenu.querySelector('.menu_icon_2');
var timer=null;

headXptj.onmouseover=function(){
	menuInfo.style.display='block';
	menuIcon2.className='menu_icon_5';
}
headXptj.onmouseout=function(){
	timer=setTimeout(function(){
		menuInfo.style.display='none';
		menuIcon2.className='menu_icon_2';
	},500);
}
menuInfo.onmouseover=function(){
	this.style.display='block';
	clearTimeout(timer);
}
menuInfo.onmouseout=function(){
	timer=setTimeout(function(){
		menuInfo.style.display='none';       //注意这里是不能用this的，在这个函数里面this指代的并非是menuInfo对象
		menuIcon2.className='menu_icon_2';
	},500);
}



//收货地效果
var mainAdd=document.querySelector('.mainAdd');
var mainAddInfo=mainAdd.querySelector('.mainAddInfo');
mainAdd.onclick=function(){
	mainAddInfo.style.display='block';
}
mainAdd.onmouseout=function(){
	mainAddInfo.style.display='none';
}
mainAddInfo.onmouseover=function(){
	this.style.display='block';
}
mainAddInfo.onmouseout=function(){
	this.style.display='none';
}







































////头部导航列表项
//var navTb=document.querySelector('.nav_tb');
//var nav1=document.querySelector('.nav_1');
//var navScj=document.querySelector('.nav_scj');
//var nav2=document.querySelector('.nav_2');
//var navSjb=document.querySelector('.nav_sjb');
//var navSjb1=document.querySelector('.nav_sjb_1');
//
//var navSjzc=document.querySelector('.nav_sjzc');
//var navSjzc2=document.querySelector('.nav_sjzc_2');
//
//var navWzdh=document.querySelector('.nav_wzdh');
//var navWadh1=document.querySelector('.nav_wadh_1');
//
//navTb.onmouseover=function(){
//	nav1.style.display='block';
//	this.className='nav_act';
//}
//navTb.onmouseout=function(){
//	nav1.style.display='none';
//	this.className='';
//}
//navScj.onmouseover=function(){
//	nav2.style.display='block';
//	this.className='nav_act';
//}
//navScj.onmouseout=function(){
//	nav2.style.display='none';
//	this.className='';
//}
//navSjb.onmouseover=function(){
//	navSjb1.style.display='block';
//}
//navSjb.onmouseout=function(){
//	navSjb1.style.display='none';
//}
//navSjzc.onmouseover=function(){
//	navSjzc2.style.display='block';
//}
//navSjzc.onmouseout=function(){
//	navSjzc2.style.display='none';
//}
//navWzdh.onmouseover=function(){
//	navWadh1.style.display='block';
//}
//navWzdh.onmouseout=function(){
//	navWadh1.style.display='none';
//}
//
//
//
////头部左侧商品列表选项的鼠标移入移出事件    有点迷 开始里面的一个元素写错了  搞得半天没发现问题
//var headerMain24=document.querySelector('.header_main_24');
//var main24Li=headerMain24.getElementsByTagName('li');
//var main24a=headerMain24.getElementsByTagName('a');
//var headerMain25=document.querySelectorAll('.header_main_25');
//
//for(var i=0;i<main24Li.length;i++){
//	main24Li[i].index=i;
//	main24Li[i].onmouseover=function(){
//		headerMain25[this.index].style.display='block';
//		main24a[this.index].className='act_24_a';
//		this.className='act_24';
//	}
//	main24Li[i].onmouseout=function(){
//		headerMain25[this.index].style.display='none';
//		main24a[this.index].className='';
//		this.className='';
//	}
//}
//for(var i=0;i<headerMain25.length;i++){
//	headerMain25[i].index=i;
//	headerMain25[i].onmouseover=function(){
//		this.style.display='block';
//		main24Li[this.index].className='act_24';
//		main24a[this.index].className='act_24_a';
//	}
//	headerMain25[i].onmouseout=function(){
//		this.style.display='none';
//		main24Li[this.index].className='';
//		main24a[this.index].className='';
//	}
//}
//
//
//
////头部轮播图代码
//var headerPicPointer=document.querySelector('.header_pic_point');
//var headerSpan=headerPicPointer.getElementsByTagName('span');
//var headerPic=document.getElementById('header_pic');
//var ul1=document.getElementById('ul_1');
//var ul1Li=ul1.getElementsByTagName('li');
//
//var iWidth=ul1Li[0].offsetWidth;
//
//ul1.style.width=iWidth*ul1Li.length+'px';       //这里ul的宽度是需要用JS动态来获取的，以为里面图片的数量是不一定的
//
//for(var i=0;i<headerSpan.length;i++){
//	headerSpan[i].index=i;
//	headerSpan[i].onmouseover=function(){
//		for(var i=0;i<headerSpan.length;i++){
//			headerSpan[i].className='';
//		}
//		this.className='header_current';
//		startMove(ul1,{
//			left:-iWidth*this.index
//		});
//	}
//}
//
//
//
////轮播图下面的分类小图片链接部分-一点动画效果
//var headerImg=['img/header_main_31/1.jpg_.webp','img/header_main_31/2.jpg_.webp','img/header_main_31/3.jpg_.webp',
//             'img/header_main_31/4.jpg_.webp','img/header_main_31/5.jpg_.webp','img/header_main_31/1.jpg_.webp'];
//var headerP1=['古筝零基础入门-左手颤音','春夏新品上新直播','古筝入门教学','从零起步学钢琴','非洲鼓教学与演奏','古筝零基础入门-左手颤音',];
//var headerMain313=document.querySelector('.header_main_313');
//var headerMainDiv=headerMain313.querySelectorAll('.header_main_3131');
//var myImg1=document.getElementById('myImg_1');
//
//
//
//var headerMain311=document.querySelector('.header_main_311');
//var headerMainP1=headerMain311.querySelector('.p1');
//
//for(var i=0;i<headerMainDiv.length;i++){
//	headerMainDiv[i].index=i;
//	headerMainDiv[i].onmouseover=function(){
//		myImg1.src=headerImg[this.index];
//		headerMainP1.innerHTML=headerP1[this.index];
//	}
//}
//
//
//
//
////中间的左右控制按钮行为
//var headerMain3132=headerMain313.querySelector('.header_main_3132');
//var headerMain3133=headerMain313.querySelector('.header_main_3133');
//var headerMainWrap=headerMain313.querySelector('.header_main_wrap');
//
//
//headerMain3132.onclick=function(){
//	startMove(headerMainWrap,{
//		left: -492
//	});
//	this.style.display='none';
//	headerMain3133.style.display='block';
//}
//headerMain3133.onclick=function(){
//	startMove(headerMainWrap,{
//		left: 0
//	});
//	this.style.display='none';
//	headerMain3132.style.display='block';
//}
//
//
//
//
//
////下面的那个循环播放的广告
//var headerMainUl1=document.querySelector('.header_main_ul1');
//var headerMainUl1Li=headerMainUl1.getElementsByTagName('li');
//var iNow=1;
//
//setInterval(function(){                        //2、然后再开一个定时器循环调用
//	change();
//	},3000);
//
//function change(){                             //1、先定义好基本的运动函数
//		startMove(headerMainUl1,{
//			top: -41*iNow
//		})
//			iNow++;
//		if(iNow==headerMainUl1Li.length){
//			iNow=0;
//		}
//	}
//	
//
////右面的鼠标移入移出效果制作
//var headerMain32=document.querySelector('.header_main_32');
//var headerMain32Li=headerMain32.getElementsByTagName('li');
//var headerMainInfo=headerMain32.querySelectorAll('.hot_info');
//
//
//for(var i=0;i<headerMain32Li.length;i++){
//	headerMain32Li[i].index=i;
//	headerMain32Li[i].onmouseover=function(){
//		startMove(headerMainInfo[this.index],{
//			opacity: 100
//		})
//	}
//	headerMain32Li[i].onmouseout=function(){
//		startMove(headerMainInfo[this.index],{
//			opacity: 0
//		})
//	}
//}
//
//
//
//
//
////潮流前线部分鼠标经过图片大小的变化
//var headerMain4=document.querySelector('.header_main_4');
//var aA=headerMain4.getElementsByTagName('a');
//var aImg=headerMain4.getElementsByTagName('img');
//
//for(var i=0;i<aA.length;i++){
//	aA[i].index=i;
//	aA[i].onmouseover=function(){
//		startMove(aImg[this.index],{
//			width: 160,
//			height: 160,
//			left: -10,                  //因为图片增加了20，为了图片的显示效果是从中间向四周扩张的，所以要向左移动10
//			top: 0                      //这里就有点尴尬了，如果按上面的来计算的话也是-10，但是由于HTML及css的原因，最后结果居然是0了，还是要写完美的html和css才好
//		});                             //这里的写法有点不稳定，正确的做法是原图和扩大后的图比较，他们差值的一半就是偏移量
//	}
//	aA[i].onmouseout=function(){
//		startMove(aImg[this.index],{
//			width: 140,
//			height: 140,
//			left: 0,
//			top: 10
//		});
//	}
//}
//
//
//
//
////美丽人生部分的一点JS动画效果
//var headerMain6=document.querySelector('.header_main_6');
////alert(headerMain6.length)
//var main611=headerMain6.querySelector('.main_6_11');
//var main611Img=main611.getElementsByTagName('img')[0];
//var main6Ul1=headerMain6.querySelector('.main_6_ul1');
//var main6Ul1Li=main6Ul1.getElementsByTagName('li');
//var now1=1;
//
//setInterval(function(){
//	change1();
//},5000);
//
//function change1(){
//	startMove(main6Ul1,{
//		top: -30*now1
//	});
//	now1++;
//	if(now1==main6Ul1Li.length){
//		now1=0;
//	}
//}
//
//	
//	main611.onmouseover=function(){
//		startMove(main611Img,{
//			opacity: 60
//		});
//	}
//	main611.onmouseout=function(){
//		startMove(main611Img,{
//			opacity: 100
//		});
//	}
//
//
//
////鼠标经过图片左右移动的效果
//var main612=document.querySelector('.main_6_12');
//var main612a=main612.getElementsByTagName('a');
//var main612Img=main612.getElementsByTagName('img');
//
////alert(main612Img.length)
//for(var i=0;i<main612a.length;i++){
//	main612a[i].index=i;
//	main612a[i].onmouseover=function(){
//		startMove(main612Img[this.index],{
//			right: 10
//		});
//	}
//	main612a[i].onmouseout=function(){
//		startMove(main612Img[this.index],{
//			right: 0
//		});
//	}
//}
//
////鼠标经过图片左右移动的效果-要是在整合下就更好了
//var main613=document.querySelector('.main_6_13');
//var main613a=main613.getElementsByTagName('a');
//var main613Img=main613.getElementsByTagName('img');
//
//for(var i=0;i<main613a.length;i++){
//	main613a[i].index=i;
//	main613a[i].onmouseover=function(){
//		startMove(main613Img[this.index],{
//			right: 8
//		});
//	}
//	main613a[i].onmouseout=function(){
//		startMove(main613Img[this.index],{
//			right: 0
//		});
//	}
//}
//
//
////潮电酷玩部分------------------先按基本过程了，如果利用一个通用的函数的话再想想
//var headerMain7=document.querySelector('.header_main_7');
//var main711=headerMain7.querySelector('.main_7_11');
//var main7Ul1=headerMain7.querySelector('.main_7_ul1');
//var main7Ul1Li=main7Ul1.getElementsByTagName('li');
//var main711Img=main711.getElementsByTagName('img')[0];
//var now2=1;
//
//setInterval(function(){
//	change2();
//},3000);
//
//
//function change2(){
//	startMove(main7Ul1,{
//		top: -30*now2
//	});
//	now2++;
//	if(now2==main7Ul1Li.length){
//		now2=0;
//	}
//}
//main711.onmouseover=function(){
//	startMove(main711Img,{
//		opacity: 60
//	})
//}
//main711.onmouseout=function(){
//	startMove(main711Img,{
//		opacity: 100
//	})
//}
//
////左右移动图片部分
//var main712=document.querySelector('.main_7_12');
//var main712a=main712.getElementsByTagName('a');
//var main712Img=main712.getElementsByTagName('img');
//var main713=document.querySelector('.main_7_13');
//var main713a=main713.getElementsByTagName('a');
//var main713Img=main713.getElementsByTagName('img');
//
//
//for(var i=0;i<main712a.length;i++){
//	main712a[i].index=i;
//	main712a[i].onmouseover=function(){
//		startMove(main712Img[this.index],{
//			right: 8
//		});
//	}
//	main712a[i].onmouseout=function(){
//		startMove(main712Img[this.index],{
//			right: 0
//		});
//	}
//}
//
//
//for(var i=0;i<main713a.length;i++){
//	main713a[i].index=i;
//	main713a[i].onmouseover=function(){
//		startMove(main713Img[this.index],{
//			right: 8
//		});
//	}
//	main713a[i].onmouseout=function(){
//		startMove(main713Img[this.index],{
//			right: 0
//		});
//	}
//}
//
//
//
//
////居家生活部分
//
//

















	
}










































