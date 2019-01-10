

//创建xhr对象
function createXHR(){
	if (window.XMLHttpRequest) {  
		return new XMLHttpRequest(); //IE7+，非IE
	}
	return ActiveXObject("Microsoft.XMLHTTP"); //IE6
}

/*
			ajax({
				type: "get", 
				url: "http://60.205.181.47/myPHPCode2/checkname.php",
				data: {regname:"zhangsan", age:22},  
				async: true,
				
				success: function(){
					console.log("成功");
				},
				error: function(){
					console.log("失败");
				}
			})
*/

function ajax(obj){
	
	//默认参数
	obj.type = obj.type || "get"; //默认请求方式为get
	obj.async = obj.async==undefined ? true : obj.async ; //默认为异步请求
	
	//1， xhr对象
	var xhr = createXHR();
	
	//2, open
	//{regname:"zhangsan", age:22}  => "regname=zhangsan&age=22"
	var paramStr = getParams(obj.data);
	
	if (obj.type.toLowerCase() == "get") {
		obj.url += paramStr ? ("?" + paramStr) : "";
	}
	xhr.open(obj.type, obj.url, obj.async);
	
	//3， send
	if (obj.type.toLowerCase() == "get") {
		xhr.send(null);
	}
	else if (obj.type.toLowerCase() == "post") {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(paramStr);
	}
	
	//4, 接收数据
	if (obj.async == true) { //异步
		
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				callback();
			}
		}
	}
	else  { //同步
		callback();
	}
	
	function callback(){
		if (xhr.status == 200) {
			//请求成功， 回调
			if (obj.success) {
				obj.success(xhr.responseText);
			}
		}
		else {
			//请求失败, 回调
			if (obj.error) {
				obj.error(xhr.status);
			}
		}
	}
	
}

//{regname:"zhangsan", age:22}  => "regname=zhangsan&age=22"
function getParams(obj){
	var arr = [];
	for (var key in obj) {
		var str = key + "=" + obj[key];
		arr.push(str);
	}
	return arr.join("&");
}





