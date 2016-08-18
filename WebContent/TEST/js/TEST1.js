$(document).ready(function(){

	$("#btn2").bind("click",function(){//xml para
//		alert($("#text").val())
		$("#disp").empty();
		var my = $.ajax({
			type:"get",
			url:"TEST1.jsp",
			//data:"irum=" + "관우",
			data:{"sang":$("#text").val()},
			dataType:"xml",
			success:function(data){
				//$("#disp").text(data);
				var str = "<table border=1><tr><td>코드</td><td>상품명</td><td>수량</td><td>단가</td><td>금액</td></tr>";
				var count = 0;
				$(data).find("sawon").each(function(){
					var a = $(this).find("su").text() * $(this).find("dan").text()
					str += "<tr><td>" + $(this).find("code").text() + "</td>"
					str += "<td>" + $(this).find("sang").text() + "</td>"
					str += "<td>" + $(this).find("su").text() + "</td>"
					str += "<td>" + $(this).find("dan").text() + "</td>"
					str += "<td>" + a + "</td></tr>"
					count++;
				})
				str += "<tr><td>건수</td><td>" + count + "</td></tr>"
				
				str += "</table>"
				$("#disp").append(str);
			},
		})
		my.fail(function(status){
			$("disp").text("에러 발생");
		})
	})
	//
	$("#btn1").bind("click",function(){
		$("#disp").empty();
		var my = $.ajax({
			type:"get",
			url:"TEST1.jsp",
			//data:"irum=" + "관우",
			data:{"sang":""},
			dataType:"xml",
			success:function(data){
				//$("#disp").text(data);
				var str = "<table border=1><tr><td>코드</td><td>상품명</td><td>수량</td><td>단가</td><td>금액</td></tr>";
				var count = 0;
				$(data).find("sawon").each(function(){
					var a = $(this).find("su").text() * $(this).find("dan").text()
					str += "<tr><td>" + $(this).find("code").text() + "</td>"
					str += "<td>" + $(this).find("sang").text() + "</td>"
					str += "<td>" + $(this).find("su").text() + "</td>"
					str += "<td>" + $(this).find("dan").text() + "</td>"
					str += "<td>" + a + "</td></tr>"
					count++;
					
				})
				str += "<tr><td>건수</td><td>" + count + "</td></tr>"
				str += "</table>"
				$("#disp").append(str);
			},
		})
		my.fail(function(status){
			$("disp").text("에러 발생");
		})
	})
	
	
})