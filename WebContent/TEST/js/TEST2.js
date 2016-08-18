$(document).ready(function(){
	$("#btn").click(function(){//json
		var id = $('#text').val();
		if(id.length < 1){
			alert("값이 없어요")
			return false;
		}
		var re = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
		var rer = re.test(id);
		
		if(rer != false){
			alert("숫자쓰지마")
			return false;
		}
		
		$("#show").empty();
		$("#show2").empty();
		$.ajax({
			type:"get",
			url:"TEST2.jsp",
			data:{"buser":$("#text").val(),"sawon":""},
			dataType:"json",
			success:function(data){
				var str = "<table border=1><tr><td>사번</td><td>직원명</td><td>직급</td><td>관리고객수</td></tr>";
				var count = 0;
				$.each(data,function(index,entry){
					str += "<tr><td>" + entry["a"] + "</td>"
					//alert(entry["d"])
					if(entry["d"] > 0){
						str += "<td><a href=\"javascript:func('" + entry["b"] + "')\">" + entry["b"] + "</a></td>"
					}else{
						str += "<td>" + entry["b"] + "</td>"	
					}
					str += "<td>" + entry["c"] + "</td>"
					str += "<td>" + entry["d"] + "</td>"
					count++;
				})
				
				str += "</table>"
				str += "인원수 : " + count + "명"
				$("#show").append(str);
			},
			error:function(){
				$("#show").text("에러 발생");
			}
				
		});
	})
	
})

function func(data){
	$("#show2").empty();
		$.ajax({
			type:"get",
			url:"TEST2.jsp",
			data:{"buser":"","sawon":data},
			dataType:"json",
			success:function(data){
				var str = "<table border=1><tr><td>고객명</td><td>고객전화</td><td>성별</td><td>나이</td></tr>";
				$.each(data,function(index,entry){
					str += "<tr><td>" + entry["e"] + "</td>"
					str += "<td>" + entry["f"] + "</td>"	
					str += "<td>" + entry["g"] + "</td>"
					str += "<td>" + entry["h"] + "</td>"

				})
				
				str += "</table>"
				$("#show2").append(str);
			},
			error:function(){
				$("#show2").text("에러 발생");
			}
				
		});
		
}	