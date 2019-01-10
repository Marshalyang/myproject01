onload = function(){
	//register
	var ali = list2.getElementsByClassName("da");
	var aul = list2.getElementsByTagName("ul");
	
	
	for(var i = 0;i<ali.length;i++){
		
		ali[i].index = i;
		ali[i].onmouseenter = function(){
			aul[this.index].style.display = "block";
			this.style.background = "#ffffff";	
			aul[this.index].style.background = "#fff";
		}
		
		ali[i].onmouseleave = function(){
			aul[this.index].style.display = "none";
			this.style.background = "";
		}
	}
	
	var apt = logo.getElementsByTagName("input");
	var oA = lct.getElementsByTagName("a");
	for(var i = 0 ;i<oA.length;i++){
		oA[i].onclick = function(){
			apt[0].value = this.innerHTML;
		}
	}
	
	//菜单
	var aSo = so.getElementsByTagName("li");
	var aDiv = document.getElementsByClassName("li_none");
	var aI = so.getElementsByTagName("i");
	nav_ob.onmouseenter = function(){
		nav_db.style.display = "block";
		for(var i = 0;i<aSo.length-1;i++){
			aSo[i].index = i;
			aSo[i].onmouseenter = function(){
				aDiv[this.index].style.display = "block";
				aI[this.index].style.display = "block";
				aSo[this.index].style.borderBottom = "solid 1px #8cba2a";
				aSo[this.index].style.borderTop = "solid 1px #8cba2a";
			}
			aSo[i].onmouseleave = function(){
				aDiv[this.index].style.display = "none";
				aI[this.index].style.display = "none";
				aSo[this.index].style.borderBottom = "1px solid #f7f7f7";
				aSo[this.index].style.borderTop = "none";
			}
		}
	}
	nav_ob.onmouseleave = function(){
		nav_db.style.display = "none";
		
	}
	
	
	//放大镜
	function $(id){
		return document.getElementById(id);
	}
	
	//获取样式属性值
	function getStyleAttr(obj, attr){
		if (window.getComputedStyle){
			return window.getComputedStyle(obj, null)[attr];
		}
		return obj.currentStyle[attr];
	}
	
	
	
	//在中等图上移动
	$("middleImg").onmousemove = function(e){
		e = e || event;
		
		//显示中等区域和大区域
		$("middleArea").style.display = "block";
		$("bigArea").style.display = "block";
		
		//放大系数
		var scale = $("bigImg").offsetHeight/$("middleImg").offsetHeight;
		
		//计算小区域跟随鼠标移动
		var x = e.pageX - $("box").offsetLeft - $("middleImg").offsetLeft - $("middleArea").offsetWidth/2;
		var y = e.pageY - $("box").offsetTop - $("middleImg").offsetTop - $("middleArea").offsetHeight/2;
		
		//判断边界
		if (x <= 0) x = 0;
		else if (x >= $("middleImg").offsetWidth-$("middleArea").offsetWidth) {
			x = $("middleImg").offsetWidth-$("middleArea").offsetWidth
		}
		if (y <= 0) y = 0;
		else if (y >= $("middleImg").offsetHeight-$("middleArea").offsetHeight) {
			y = $("middleImg").offsetHeight-$("middleArea").offsetHeight
		}
		//移动中等区域
		$("middleArea").style.left = x + 'px';
		$("middleArea").style.top = y + 'px';
		
		//移动大图
		$("bigImg").style.left = -x*scale + "px";
		$("bigImg").style.top = -y*scale + "px";
		
	}
	
	//移出中等图片
	$("middleImg").onmouseleave = function(){
		//隐藏中等区域和大区域
		$("middleArea").style.display = "none";
		$("bigArea").style.display = "none";
	}
	
	
	//点击小图
	var ali1 = $("small").getElementsByTagName("li");
	ali1[0].style.background = "url(http://127.0.0.1:8020/Seven%20plus%20two%20travel%20shopping%20mall/images/detail_images/bg.png) no-repeat -82px -65px"
	for (var i=0; i<ali1.length; i++) {	
		ali1[i].onclick = function(){
//						var src = this.children[0].src;
			var src = this.children[0].getAttribute("src");
			var middleSrc = src.replace("1_", "2_");
			var bigSrc = src.replace("1_", "3_");
			$("middleImg").children[0].src = middleSrc;
			$("bigImg").src = bigSrc;
			this.style.background = "url(http://127.0.0.1:8020/Seven%20plus%20two%20travel%20shopping%20mall/images/detail_images/bg.png) no-repeat -82px -65px";
			
		}
		ali1[i].onmouseleave = function(){
			this.style.background = "#fff"
			
		}
		ali1[i].onmouseenter = function(){
			this.style.background = "url(http://127.0.0.1:8020/Seven%20plus%20two%20travel%20shopping%20mall/images/detail_images/bg.png) no-repeat -82px -65px";
			
		}
	}
	var ali3 = lol.getElementsByTagName("li");
	ali3[0].style.borderTop= "2px solid #90C320";
	ali3[0].style.background= "#fff";
	var adiv = document.getElementsByClassName("ap");
	adiv[0].style.display= "block";
	var aimg = document.getElementsByClassName("ad");
	aimg[0].style.display= "block";
	for(var i =0;i<ali3.length;i++){
		ali3[i].index=i;
		ali3[i].onclick = function(){
			for (var j=0; j<ali3.length; j++) {
				ali3[j].style.borderTop = "";
				ali3[j].style.background= "";
				adiv[j].style.display= "none";
				aimg[j].style.display= "none";
			}
			ali3[this.index].style.borderTop= "2px solid #90C320";
			ali3[this.index].style.background= "#fff";
			adiv[this.index].style.display= "block";
			aimg[this.index].style.display= "block";
		}
	}
	var a =0;
	$("next_d").onclick = function(){
		++a;
		if(a>=4){
			$("aul").style.left = "80px"
			return a;
		}
		$("aul").style.left =20*a+"px";
	}
	
	$("prev_d").onclick = function(){
		--a;
		if(a<=-10){
			$("aul").style.left = "0";
			return a;
		}
		$("aul").style.left =20*a+"px";
		
	} 
	
	
}