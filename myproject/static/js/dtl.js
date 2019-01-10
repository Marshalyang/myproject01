$(function(){
	
	//获取从首页传过来的id
	// location.search : 参数部门， 如:?id=1002&name=lisi
	var param = location.search.substring(1);
	var pid = getParams(param, "id");
	console.log(pid);
	
	var fo = false;
	var fa = false;
	var co;
	var ty;
	var ali4 = rel_ul.getElementsByTagName("li");
	var aspan1 = rel_ul.getElementsByTagName("span");
	var ali5 = guige_ul.getElementsByTagName("li");
	var aspan2 = guige_ul.getElementsByTagName("span");
	for(var i = 0;i<ali4.length;i++){
		ali4[i].index = i;
		ali4[i].onclick = function(){ 
			for (var j=0; j<ali4.length; j++) {
				aspan1[j].style.display = "none";
				ali4[j].style.border = "1px solid #e1e1e1";
				fo = false;
				
			}	
			aspan1[this.index].style.display = "block";
			this.style.border = "2px solid #ff6511";
			fo = true;
			co = this.innerText;
		}
	}
	for(var i = 0;i<ali5.length;i++){
		ali5[i].index = i;
		ali5[i].onclick = function(){ 
			for (var j=0; j<ali5.length; j++) {
				aspan2[j].style.display = "none";
				ali5[j].style.border = "1px solid #e1e1e1";
				fa = false;
			}	
			aspan2[this.index].style.display = "block";
			this.style.border = "2px solid #ff6511";
			fa = true;
			ty = this.innerText;
		}
	}
	var aspan3 = buy.getElementsByTagName("span")[0]
	$("buy_b").onclick =function(){
		if(fa== 0 ||fo ==0){
			aspan3.innerHTML = "请选择您要的商品的规格";	
		}
		else{
			aspan3.innerHTML = "请先登录！";
			
		}
	}
	
	
	
	
	//获取json中的数据
	$.get("json/detail.json", function(data){
		var arr = data;
		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i]; //每个商品数据
			//找到id相同的商品后，就可以使用obj了
			if (obj.id == pid) {
				loadUI(obj);
				
			
				
			}
		}
	})
	
	function loadUI(obj){
		$("#img1").attr("src", obj.img7);
		$("#img2").attr("src", obj.img1);
		$("#img3").attr("src", obj.img2);
		$("#img4").attr("src", obj.img3);
		$("#img5").attr("src", obj.img4);
		$("#img6").attr("src", obj.img5);
		$("#img7").attr("src", obj.img6);
		$("#bigImg").attr("src", obj.img13);
		$("#img8").attr("src", obj.img19);
		$("#img9").attr("src", obj.img20);
		$("#nam1").html( obj.detail);
		$("#nam5").html( obj.detail);
		$("#nam2").html( obj.total );
		$("#nam3").html( obj.potol );
		$("#nam4").html( obj.unit + obj.price );
		var sum = 0
		$("#adcat").on("click", function(){
			if(fa== 0 ||fo ==0){
				aspan3.innerHTML = "请选择您要的商品的规格";	
			}
			else{
				console.log(co);
				aspan3.innerHTML = "添加购物车成功！"
				sum++;
				$("#sum").html(sum);
				//将当前点击的商品数据加入购物车（cookie）
				var arr2 = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
				
				//判断原来的购物车中是否有相同商品
				var isExist = false;
				for (var i=0; i<arr2.length; i++) {
					
					if (arr2[i].id == obj.id) {
						arr2[i].num++;
						isExist = true;
						break;
					}
				}
				if (isExist ==  false) {
					obj.num = 1;
					obj.checked = true; //是否选中， 默认选中
					obj.color = co;
					obj.type = ty;
					arr2.push(obj);
				}
				
				
				//将arr2添加到cookie中
				$.cookie("cart", JSON.stringify(arr2), {expires:30, path:"/"});
				console.log( $.cookie("cart") );
			}
			
			
		})
	}
	
	
	
	//查找参数对应的值
	function getParams(str, name){
		var arr = str.split("&");
		for (var i=0; i<arr.length; i++) {
			var str1 = arr[i]; // id=1002 
			var arr1 = str1.split("=");
			if (arr1[0] == name) {
				return arr1[1];
			}
		}
		return "";
	}
	

	
	
	
	
})