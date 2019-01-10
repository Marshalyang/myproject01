$(function(){
				
	var onefTop = $("#sale").offset().top;
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop >= onefTop){
			$("#elevator").fadeIn();
		}
		else {
			$("#elevator").fadeOut();
		}
	})
	
	var isMoving = false;
	//elevator  .stairs
	//点击楼层按钮， 让页面滚动到对应的楼层
	
	$("#elevator li").click(function(){
		$(this).find("span").addClass("active")
			.parent().siblings().find("span").removeClass("active")
		
		var index = $(this).index();
		console.log(index)
		var top = $(".stairs").eq(index).offset().top;
		
		isMoving = true;
		$("html,body").stop(true).animate({scrollTop: top}, function(){
			isMoving = false;
		});
		
	})
	
	//滚动页面
	$(window).scroll(function(){
		
		//如果没有点击楼层按钮执行动画， 则执行代码
		if (!isMoving) {
			
			var scrollTop = $(window).scrollTop();
	//						console.log(scrollTop);
			
			
			//遍历所有的楼层div
			var index = 0;
			$(".stairs").each(function(){
				//每个楼层div的top值
				var top = $(this).offset().top;
				var winH = $(window).height(); //页面高度
				
				if (scrollTop + winH/2 >= top) {
					index = $(this).index()-7;
					
				}
			})
			
			
			$("#elevator li").eq(index).find("span").addClass("active")
				.parent().siblings().find("span").removeClass("active")
			}
			
		})
	
	
	
	/////全局变量， 用来保存获取到json中的所有商品数据
	var arr = [];
	
	//先获取数据并创建节点，显示数据
	$.get("json/detail.json", function(data){
		console.log(data);
		arr = data;
		
		//遍历json中的所有商品数据，并用节点显示
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];
			
			//创建li节点
			var li = $("<li></li>").appendTo("#dnf");
			$("<img src="+ obj.headImg +">").appendTo(li);
			$("<p><a href='#'>"+ obj.name +"</a></p>").appendTo(li);
			$("<h5>"+ obj.unit + obj.price +"</h5>").appendTo(li);
			
		}
		
	})
	
	//点击商品
	$("#dnf").on("click", "li", function(){
		//console.log("click");
		var index = $(this).index(); 
		var obj = arr[index];
		//console.log(obj.id);
		
		//进入详情页， 且将当前点击的商品的id传入
		location.href = "detail.html?id=" + obj.id;
		
	})
		
})