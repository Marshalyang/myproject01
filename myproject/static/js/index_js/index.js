
onload = function(){
	//top_none
	top_block.onmouseenter = function(){
		top_none.style.display = "block";
		
	}
	top_none.onmouseleave = function(){
		top_none.style.display = "none";
		
	}
	
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
	
	//lunbo
	function $(id){
		return document.getElementById(id);
	}
	ajax({
		url:"json/lunbo.json",
		data:{},
		success: function(data){
			var arr = JSON.parse(data);
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				
				//创建li节点
				var li = document.createElement("li");   
				$("list5").appendChild(li);
				li.innerHTML = "<a href='#'><img src="+ obj.img +"></a>";
				var li2 = document.createElement("li");
				$("list6").appendChild(li2);
				if (i == 0) {
					li2.className = "active";
				}
			}
			
			//轮播
			lunbo();
		}
	})
	
	
	//lunbo();
	//轮播
	function lunbo(){
	
		var box = $("box5");
		var list5 = $("list5");
		var aLi1 = list5.getElementsByTagName("li");
		var list6 = $("list6");
		var aLi2 = list6.getElementsByTagName("li");
		
		//默认情况
		aLi1[0].style.opacity = 1;
		aLi1[0].style.filter = "alpha(opacity = 100)";
		aLi2[0].className ="active";
		
		//图片数量
		var size = aLi1.length - 1;
		
		//自动轮播
		var index = 0; //表示即将显示的图片下标（li下标）
		var timer = setInterval(function(){
			index++;
			move();
		}, 5000);
	
		
		//移动到第index张图
	function move(){
		if(index>size ){
			index = 0;	
		}
		if(index<0){
			index = size;
		}
		for(var i = 0;i<aLi1.length;i++){
			if(i==index){
				animate(aLi1[index],{opacity:100});
				aLi2[index].className = "active";
			}
			else{
				animate(aLi1[i],{opacity:0});
				aLi2[i].className = "";
			}
		}
		
	}
	
	//在小圆中选择大图
	for(var i = 0;i<aLi2.length;i++){
		aLi2[i].index = i;
		aLi2[i].onmouseenter =function(){
			index = this.index;
			move();
		}
	}
	box.onmouseenter = function(){
		clearInterval(timer);
		
	}
	box.onmouseleave = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			move();
		},5000)
	}
	}
	
	//lunbo
	/*function $(id){
		return document.getElementById(id)
	}
	var box = $("box5");
	var list5 = $("list5");
	var aLi1 = list5.getElementsByTagName("li");
	var list6 = $("list6");
	var aLi2 = list6.getElementsByTagName("li");
	
	
	//默认情况
	aLi1[0].style.opacity = 1;
	aLi1[0].style.filter = "alpha(opacity = 100)";
	aLi2[0].className ="active";
	
	//图片数量
	var size = aLi1.length - 1;
	
	//轮播
	var index = 0;
	var timer = setInterval(function(){
		index++;
		move();
	},5000)
	function move (){
		if(index>size ){
			index = 0;	
		}
		if(index<0){
			index = size;
		}
		for(var i = 0;i<aLi1.length;i++){
			if(i==index){
				animate(aLi1[index],{opacity:100});
				aLi2[index].className = "active";
			}
			else{
				animate(aLi1[i],{opacity:0});
				aLi2[i].className = "";
			}
		}
		
	}
	
	//在小圆中选择大图
	for(var i = 0;i<aLi2.length;i++){
		aLi2[i].index = i;
		aLi2[i].onmouseenter =function(){
			index = this.index;
			move();
		}
	}
	box.onmouseenter = function(){
		clearInterval(timer);
		
	}
	box.onmouseleave = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			move();
		},5000)
	}
	*/
	
	//weixin
	var aImg1 = foo.getElementsByTagName("img");
	var aImg2 = foo1.getElementsByTagName("img");
	for(var i = 0;i<aImg1.length;i++){
		aImg1[i].index = i;
		aImg1[i].onmouseenter = function(){
			aImg2[this.index].style.display = "block";
		}
		aImg1[i].onmouseleave = function(){
			aImg2[this.index].style.display = "none";
		}
	}
	//菜单
	var aSo = so.getElementsByTagName("li");
	var aDiv = document.getElementsByClassName("li_none");
	var aI = so.getElementsByTagName("i");
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
	
	//band
	var bnt = band.getElementsByClassName("bnt")[0];
//	var aul = band.getElementsByTagName("ul");
	var index = 0;
//	band_poc.appendChild( aul[0].cloneNode(true) );
	bnt.onclick = function(){
		index++;
		move1();	
	}
	function move1(){	
		//控制下边界
		if (index > 2) {
			band_poc.style.top = 0; //非动画方式变到第1张图（index=0）
			index = 0; //
		}
		
		//动画移动
		band_poc.style.top =-index*150+"px";
	}
	
	
	//groupon
	var bnt1 = groupon.getElementsByClassName("bnt")[0];
	var index = 0;
	bnt1.onclick = function(){
		index++;
		if (index >2 ) {
			index = 0;
			groupon_poc.style.top =0;
		}
		groupon_poc.style.top =-index*301+"px";	
	}
	
	//sale
	var bnt2 = sale.getElementsByClassName("bnt")[0];
	var index = 1;
	bnt2.onclick = function(){
		index = index%3;
		sale_poc.style.top =-index*274+"px";
		index++
	}
	
	
	//onef
	//onef_head,twof_head
	fn(onef_room_right,hand1);
	fn(twof_room_right,hand5);
	fn(threef_room_right,hand8);
	fn(fourf_room_right,hand11);
	fn(fivef_room_right,hand14);
	function fn(val1,val2){
		var ahand4 = val1.getElementsByTagName("ul")
		var ahand1 = val2.getElementsByTagName("li");
		var aDiv1 = val2.getElementsByTagName("div");
		ahand4[0].style.display ="block";
		aDiv1[0].style.display ="block";
		for(var i = 0;i<ahand1.length;i++){
		
			ahand1[i].index = i;
			
			ahand1[i].onmouseenter = function(){
				for(var j=0;j<ahand1.length;j++){
					aDiv1[j].style.display = "none";
				}
				for(var j=0;j<ahand4.length;j++){
					ahand4[j].style.display = "none";
				}
				aDiv1[this.index].style.display = "block";
				ahand4[this.index].style.display = "block";
			}
		}
	}

	//onef_room_center	
	fn1(hand2,hand3,onef_room_center);
	fn1(hand6,hand7,twof_room_center);
	fn1(hand9,hand10,threef_room_center);
	fn1(hand12,hand13,fourf_room_center);
	fn1(hand15,hand16,fivef_room_center);
	function fn1(id1,id2,id3){
		var ahand2 = id1.getElementsByTagName("li");
		var ahand3 = id2.getElementsByTagName("li");
	
	
	//默认情况
	
		ahand2[0].style.opacity = 1;
		ahand2[0].style.filter = "alpha(opacity = 100)";
		ahand3[0].className ="active";
		
		//图片数量
		var size = ahand2.length - 1;
		
		//轮播
		var index = 0;
		var timer1 = setInterval(function(){
			index++;
			move2();
		},5000)
		function move2 (){
			if(index>size ){
				index = 0;	
			}
			if(index<0){
				index = size;
			}
			for(var i = 0;i<ahand2.length;i++){
				if(i==index){
					animate(ahand2[index],{opacity:100});
					ahand3[index].className = "active";
				}
				else{
					animate(ahand2[i],{opacity:0});
					ahand3[i].className = "";
				}
			}
			
		}
		
		//在小圆中选择大图
		for(var i = 0;i<ahand3.length;i++){
			ahand3[i].index = i;
			ahand3[i].onmouseenter =function(){
				index = this.index;
				move2();
			}
		}
		id3.onmouseenter = function(){
			clearInterval(timer1);
			
		}
		id3.onmouseleave = function(){
			clearInterval(timer1);
			timer1=setInterval(function(){
				index++;
				move2();
			},5000)
		} 
	
	}
	fn2(onef_room_left_t_ul,next1,prev1);
	fn2(twof_room_left_t_ul,next2,prev2);
	fn2(threef_room_left_t_ul,next3,prev3);
	fn2(fourf_room_left_t_ul,next4,prev4);
	fn2(fivef_room_left_t_ul,next5,prev5);
	function fn2(id1,id2,id3){
		
		var aWod = id1.getElementsByTagName("li");		
		id1.appendChild( aWod[0].cloneNode(true) );
		id1.appendChild( aWod[1].cloneNode(true) );
		id1.appendChild( aWod[2].cloneNode(true) );
		var index = 0; //表示即将显示的图片下标（ali的下标）,也表示当前li的前面有几个li
		
		id2.onclick = function(){
			index++;
			move10();
		}
		id3.onclick = function(){
			index--;
			move10();
		}
		
		//运动
		function move10(){
			
			//控制下边界
			if (index >= 4) {
				id1.style.top = 0; //非动画方式变到第1张图（index=0）
				index = 1; //
			}
			if (index <0 ) {
				id1.style.top = "165px"; //非动画方式变到第1张图（index=0）
				index = 1; //
			}
			
			//动画移动
			animate(id1 , {top:-index*55});
		}
		function move11(){
			if (index <0 ) {
				id1.style.top = "165px"; //非动画方式变到第1张图（index=0）
				index = 1; //
			}
			
			//动画移动
			animate(id1 , {top:index*55});
		}
	}
	
	//youlu
	youlu.onclick = function(){
		animate(lu,{width:1250,height:150,opacity:50})
		lu.style.borderRadius = 0;
		xiaolu.innerHTML = "<img src='../images/index_images/TB2FB7nkpXXXXXoXXXXXXXXXXXX_!!365345385.png'>"
		del.style.display = "block";
		youlu.style.display = "none";
		
	}
	del.onclick = function(){
		animate(lu,{width:150,height:90,opacity:100})
		lu.style.borderRadius = "0 45px 45px 0 "
		xiaolu.innerHTML = "<img src='../images/index_images/TB2OoZnkpXXXXXhXXXXXXXXXXXX_!!365345385.png'>"
		youlu.style.display = "block";
		del.style.display = "none";
		
	}
	onscroll = function(){
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop >0) {
			sct.style.display = "block"; //显示
		}
		else {
			sct.style.display = "none"; //隐藏
		}
	}
	
	//点击按钮， 回到顶部
	to_top.onclick = function() {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
}
