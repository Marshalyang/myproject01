$(function () {
    // 手机号和用户名验证
    var flag= false

    $("#txt input").blur(function () {

        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
        var reg2 = /^\w{3,15}$/;
        if(reg.test( $(this).val() )){
 	 		$("#txt i").css("display","none");
 		    $("#txt input").css("border","");
 		    flag = true
	}
	    else if(reg2.test($(this).val())){
            $("#txt i").css("display","none");
 		    $("#txt input").css("border","");
 		    flag = true
        }
 	    else{
 		    $("#txt i").css("display","block");
 		    $("#txt input").css("border","solid 1px red");
 	}
    })


    // 触发登录
  $('#subButton').click(function () {
        if(flag){
            $('#login').submit()

    }
  }
    )
})




// $(function(){
// 	$("#fxdc").on({
// 		"mouseenter":function(){
// 			$(".fxdc_left").css("display","block");
// 		},
// 		"mouseleave":function(){
// 			$(".fxdc_left").css("display","none");
// 		}
// 	})
//
//
// 	$(".sub").on("click",function(){
// 	// 	if(!($("#txt input").val())){
// 	// 		$("#txt i").css("display","block");
// 	// 		$("#txt input").css("border","solid 1px red");
// 	// 	}
// 	// 	else{
// 	// 		$("#txt i").css("display","none");
// 	// 		$("#txt input").css("border","");
// 	// 	}
// 	// 	if(!($("#psd input").val())){
// 	// 		$("#psd i").css("display","block");
// 	// 		$("#psd input").css("border","solid 1px red");
// 	// 	}
// 	// 	else{
// 	// 		$("#psd i").css("display","none");
// 	// 		$("#psd input").css("border","");
// 	// 	}
// 	//
// 	//
// 	//
// 	// })
// 	// $("#txt input").keyup(function(){
// 	// 	$("#txt i").css("display","none");
// 	// 	$("#txt input").css("border","");
// 	// })
// 	// $("#psd input").keyup(function(){
// 	// 	$("#psd i").css("display","none");
// 	// 	$("#psd input").css("border","");
// 	// })
// 	//
// 	// $(".sub").click(function(){
// 	// 	var xhr = new XMLHttpRequest();
//      //    xhr.open("post", "../register", true);
//      //    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//      //    var str = "username="+$("#txt input").val()  + "&pwd="+$("#psd input").val();
//      //    xhr.send(str);
//      //    xhr.onreadystatechange = function () {
//     //
//      //        if (xhr.readyState==4 && xhr.status==200) {
//      //        	alert(1)
//      //            obj = JSON.parse(xhr.responseText);
//      //            if(obj.status == 1){
//      //            	$("#psd i").css("display","none");
//      //            	$("#psd i").html(obj.msg);
//      //            	location.href = "index.html";
//      //            }
//      //            else{
//      //            	$("#psd i").css("display","block");
//      //            	$("#psd i").html(obj.msg);
//      //            }
//      //            console.log(obj.status);
//      //
//      //            //json解析
//      //            //如果登录成功直接进入首页
//      //            //如果失败则弹出提示信息
//      //        }
//      //    }
//
//
// 	})
//
//
// })