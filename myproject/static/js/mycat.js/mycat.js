$(function(){
	$("#fxdc").on({
		"mouseenter":function(){
			$(".fxdc_left").css("display","block");
		},
		"mouseleave":function(){
			$(".fxdc_left").css("display","none");
		}
	})
	
	
	
	//获取购物车的cookie数据,并用节点显示
	refresh();
	function refresh() {
		
		var arr = $.cookie("cart");
		if (arr) {
			arr = JSON.parse(arr);
			
//			//先清除旧节点
			$("#mycat_ul").empty();
			
			//再添加新节点
			var totalPrice = 0; //总价
			
			//遍历数组
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				
				//创建li节点
				var li =  $("<li class='boom4'></li>").appendTo("#mycat_ul");
			
				
				//是否选中
				if (obj.checked) {
					$('<input checked="checked" type="checkbox" id="ipt"/>').appendTo(li);
				}
				else {
					$('<input type="checkbox" id="ipt"/>').appendTo(li);
				}
				
				$('<img class="img" src="'+ obj.headImg +'"width="65" height="65" >').appendTo(li);
				$('<span id="boom1">'+ obj.detail+obj.color+obj.type +'</span>').appendTo(li);
				$('<span  id="boom2">'+ obj.unit+obj.price +'</span>').appendTo(li);
				$('<input type="button" value="-" id="ipt1" />').appendTo(li);
				$('<input  type="text" value="'+ obj.num +'" id="ipt2" />').appendTo(li);
				$('<input  type="button" value="+" id="ipt3" />').appendTo(li);
				$('<span id="boom3">'+ obj.unit+(obj.price*obj.num) +'</span>').appendTo(li);
				$('<a class="del" href="javascript:;">删除</a>').appendTo(li);
				
				//计算总价
				if (obj.checked) {
					totalPrice += obj.price * obj.num;
				}
			}
			
			
			//显示总价
			$("#boom9 span").html(totalPrice);
		}
		else {
			console.log("购物车还没有商品， 请先购买！");
		}
	}
	
	//+
	$("#mycat_ul").on("click", "#ipt3", function(){
		var index = $(this).index("#mycat_ul #ipt3");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新节点数据
		refresh();
	})
	
	//-
	$("#mycat_ul").on("click", "#ipt1", function(){
		var index = $(this).index("#mycat_ul #ipt1");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;
		if (arr[index].num < 1) {
			arr[index].num = 1;
		}
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新节点数据
		refresh();
	})
	
	
	//删除
	$("#mycat_ul").on("click", ".del", function(){
		var index = $(this).index("#mycat_ul .del");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index, 1); //删除数组arr的第index个
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	
	
	//勾选
	$("#mycat_ul").on("click", "#ipt", function(){
		var index = $(this).index("#mycat_ul #ipt");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].checked = !arr[index].checked;
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//判断是否全选了
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	
	//判断是否全部勾选了
	isAllSelect();
	function isAllSelect(){
		
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		
		var sum = 0;
		for (var i=0; i<arr.length; i++) {
			sum += arr[i].checked;
		}
		
		//全选了
		if (arr.length!=0 && sum==arr.length) {
			$("#allSelect").prop("checked", true);
		}
		//未全选
		else {
			$("#allSelect").prop("checked", false);
		}
	}
	
	//全选
	$("#allSelect").click(function(){
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		for (var i=0; i<arr.length; i++) {
			//全选
			if ($(this).prop("checked")){
				arr[i].checked = true;
			}
			//全不选
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新
		refresh();
	})
	
	//删除选中
	$("#boom11").click(function(){
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		
		//将未选中的商品添加到新数组newArr中，再将newArr保存到cookie
		var newArr = [];
		for (var i=0; i<arr.length; i++) {
			if (!arr[i].checked) {
				newArr.push(arr[i]);
			}
		}
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
})