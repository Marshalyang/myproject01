$(function(){
	$("#fxdc").on({
		"mouseenter":function(){
			$(".fxdc_left").css("display","block");
		},
		"mouseleave":function(){
			$(".fxdc_left").css("display","none");
		}
	})
	
	/*fn("#txt");
	function fn(id){
		$(".sub").on("click",,function(id){
		if(!($("id input").val())){
			$("id i").css("display","block");
			$("id input").css("border","solid 1px red");
		}
		else{
			$("id i").css("display","none");
			$("id input").css("border","");
		}
		})
	}*/
	$(".sub").on("click",function(){
		if(!($("#txt input").val())){
			$("#txt i").css("display","block");
			$("#txt input").css("border","solid 1px red");
		}
		else{
			$("#txt i").css("display","none");
			$("#txt input").css("border","");
		}
		if(!($("#psd input").val())){
			$("#psd i").css("display","block");
			$("#psd input").css("border","solid 1px red");
		}
		else{
			$("#psd i").css("display","none");
			$("#psd input").css("border","");
		}
		if(!($("#tpsd input").val())){
			$("#tpsd i").css("display","block");
			$("#tpsd input").css("border","solid 1px red");
		}
		else{
			$("#tpsd i").css("display","none");
			$("#tpsd input").css("border","");
		}
		if(!($("#phone input").val())){
			$("#phone i").css("display","block");
			$("#phone input").css("border","solid 1px red");
		}
		else{
			$("#phone i").css("display","none");
			$("#phone input").css("border","");
		}
		if(!($("#test input").val())){
			$("#test i").css("display","block");
			$("#test input").css("border","solid 1px red");
		}
		else{
			$("#test i").css("display","none");
			$("#test input").css("border","");
		}
		if(!($("#node input").val())){
			$("#node i").css("display","block");
			$("#node input").css("border","solid 1px red");
		}
		else{
			$("#node i").css("display","none");
			$("#node input").css("border","");
		}
		if(!($("#ckbox input").attr("checked"))){
			$("#ckbox i").css("display","block");
		}
		else{
			$("#ckbox i").css("display","none");
		}	
	})
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	var flag5 = false;
	//用户名
	$("#txt input").blur(function(){
		var reg = /^\w{3,15}$/;
		if(reg.test($("#txt input").val())){
			$("#txt i").css("display","none");
			$("#txt input").css("border","");
			flag1 = true;
		}
		else{
			$("#txt i").css("display","block");
			$("#txt i").html("请输入3-15位字母、数字、下划线或中文");
			$("#txt input").css("border","solid 1px red");
			flag1 = false;
		}
	})
	//密码
	$("#psd input").blur(function(){
		var reg = /^\w{6,20}$/;
		if(reg.test($("#psd input").val())){
			$("#psd i").css("display","none");
			$("#psd input").css("border","");
			flag2 = true;
		}
		else{
			$("#psd i").css("display","block");
			$("#psd i").html("密码长度应在6-20个字符之间");
			$("#psd input").css("border","solid 1px red");
			flag2 = false;
		}
	})
	//确认密码
	$("#tpsd input").blur(function(){
		if($("#tpsd input").val()==$("#psd input").val()){
			$("#tpsd i").css("display","none");
			$("#tpsd input").css("border","");
			flag3 = true;
		}
		else{
			$("#tpsd i").css("display","block");
			$("#tpsd i").html("您必须再次确认您的密码");
			$("#tpsd input").css("border","solid 1px red");
			flag3 = false;
		}
	})
	//手机号
	$("#phone input").blur(function(){
		var reg =  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		if(reg.test($("#phone input").val())){
			$("#phone i").css("display","none");
			$("#phone input").css("border","");
			flag4 = true;
		}
		else{
			$("#phone i").css("display","block");
			$("#phone i").html("请输入正确号码");
			$("#phone input").css("border","solid 1px red");
			flag4 = false;
		}
	})
	//验证码
	$("#test input").blur(function(){
		fn()
	})
	$("#test span").click(function(){
		var str = "";
		for (var i=0; i<4; i++){
			str += parseInt(Math.random()*10);
		}
		$("#test span").html(str);
		fn();
	})
	function fn(){
		if($("#test input").val()==$("#test span").html()){
			$("#test i").css("display","none");
			$("#test input").css("border","");
			flag5 = true;
		}
		else{
			$("#test i").css("display","block");
			$("#test i").html("验证码错误");
			$("#test input").css("border","solid 1px red");
			flag5 = false
		}
	}
	$(".sub").click(function () {
		if(flag1&&flag2&&flag3&&flag4&&flag5){
			function createXHR(){
				if (window.XMLHttpRequest) {
					return new XMLHttpRequest(); //IE7+，非IE
				}
				return ActiveXObject("Microsoft.XMLHTTP"); //IE6
			}
			var xhr = createXHR();
			xhr.open("post", "http://localhost/Seven plus two travel shopping mall/html/php/register.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			var str = "username="+$("#txt1").val()+ "&pwd="+$("#psd1").val()+"&phone="+$("#phone1").val();
			xhr.send(str);
			xhr.onreadystatechange = function () {
				if (xhr.readyState==4 && xhr.status==200) {
					obj=JSON.parse(xhr.responseText);
					console.log(obj.msg);
					if(obj.status = 1){
						$("#ckbox i").css("display","block");
						$("#ckbox i").html(obj.msg);
						
						//json解析
						//如果登录成功直接进入首页
						//如果失败则弹出提示信息
						location.href = "register.html";
					}
					else{
						$("#ckbox i").css("display","block");
						$("#ckbox i").html(obj.msg);
					}
				}
			}

		}
	})
	

})