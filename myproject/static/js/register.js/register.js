$(function(){
	$("#fxdc").on({
		"mouseenter":function(){
			$(".fxdc_left").css("display","block");
		},
		"mouseleave":function(){
			$(".fxdc_left").css("display","none");
		}
	})
	
	
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
		
		
		
	})
	$("#txt input").keyup(function(){
		$("#txt i").css("display","none");
		$("#txt input").css("border","");
	})
	$("#psd input").keyup(function(){
		$("#psd i").css("display","none");
		$("#psd input").css("border","");
	})
	
	$(".sub").click(function(){
		var xhr = new XMLHttpRequest();
        xhr.open("post", "http://localhost/Seven plus two travel shopping mall/html/php/login.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var str = "username="+$("#txt input").val()  + "&pwd="+$("#psd input").val();
        xhr.send(str);
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                obj = JSON.parse(xhr.responseText);
                if(obj.status == 1){
                	$("#psd i").css("display","none");
                	$("#psd i").html(obj.msg);
                	location.href = "index.html";
                }
                else{
                	$("#psd i").css("display","block");
                	$("#psd i").html(obj.msg);
                }
                console.log(obj.status);
                
                //json解析
                //如果登录成功直接进入首页
                //如果失败则弹出提示信息
				
            }
        }
		
	})
	

})