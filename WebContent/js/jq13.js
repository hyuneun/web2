$(document).ready(function(){
	$("#btn1").click(function(){//xml
		$.ajax({
			type:"get",
			url:"jq13_XML.jsp",
			dataType:"xml",
			success:function(data){
				//$("#disp").text(data);
				var str = "";
				$(data).find("person").each(function(){
					str += $(this).find("irum").text() + "&nbsp;&nbsp;";
				})
				$("#disp").append(str);
			},
			error:function(){
				$("#disp").text("에러 발생");
			}//,
//			statusCode:{
//				200:function(){
//					alert("읽기성공")
//				},
//				404:function(){
//					alert("파일없다")
//				},
//				500:function(){
//					alert("파일에러")
//				},
//			}
				
		});
	})
	
	$("#btn2").bind("click",function(){//xml para
		var my = $.ajax({
			type:"get",
			url:"jq13_XML_P.jsp",
			//data:"irum=" + "관우",
			data:{"irum":"장비"},
			dataType:"xml",
			success:function(data){
				//$("#disp").text(data);
				var str = "";
				$(data).find("person").each(function(){
					str += $(this).find("irum").text() + "&nbsp;&nbsp;";
				})
				$("#disp").append(str);
			},
		})
		my.fail(function(status){
			$("disp").text("에러 발생");
		})
	})
		
	$("#btn3").click(function(){//json
		$.ajax({
			type:"get",
			url:"jq13_JSON.jsp",
			dataType:"json",
			success:function(data){
				var str = "";
				$.each(data,function(index,entry){
					str += entry["name"] + ", " + entry["age"]
				})
				
				//$("#disp").text(data);
				$("#disp").append(str);
			},
			error:function(){
				$("#disp").text("에러 발생");
			}
				
		});
	})
	
	$("#btn4").click(function(){//json
		$.ajax({
			type:"get",
			url:"jq13_JSON_P.jsp",
			data:{"irum":"유비","nai":"33"},
			dataType:"json",
			success:function(data){
				var str = "";
				$.each(data,function(index,entry){
					str += entry["name"] + ", " + entry["age"]
				})
				
				//$("#disp").text(data);
				$("#disp").append(str);
			},
			error:function(){
				$("#disp").text("에러 발생");
			}
				
		});
	})
	
})