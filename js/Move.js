// JavaScript Document
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	var iCur=0;
	var speed=0;
	obj.timer=setInterval(function(){
		
		var iBtn=true;
		
		for(var attr in json){
			
			var iTarget=json[attr];
			
			if(attr=='opacity'){
				iCur=Math.round(getStyle(obj,'opacity')*100);
			}else{
				iCur=parseInt(getStyle(obj,attr));
				}
				
			speed=(iTarget-iCur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(iCur!=iTarget){
				iBtn=false;
				if(attr=='opacity'){
					obj.style.opacity=(iCur+speed)/100;
					obj.style.filter='alpha(opacity='+(iCur+speed)+')';
				}else{
					obj.style[attr]=iCur+speed+'px';
					}
				}
				}
			//在这里看下所有属性是不是都到达了目标点
		if(iBtn){
			clearInterval(obj.timer);
			fn && fn.call(obj);	
			
			}
		},30);
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
		}
	}





































