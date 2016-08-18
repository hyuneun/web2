$(document).ready(function(){
   $("#addForm").hide();
   $("#delForm").hide();
   $("#code_err1").hide();
   $("#code_err2").hide();
   $("#code_err3").hide();
   $("#code_err4").hide();
   $("#code_err5").hide();
   $("#code_err6").hide();

   $("#btn_addSangpum").click(function(){
      $("#addForm").slideToggle("fast");
      $("#txtCode").focus();
   });   
   
   $("#btn_delSangpum").click(function(){      
   $("#delForm").slideToggle("fast");
   $("#delCode").focus();         
   });
   
   $("#btn_dispAll").click(dispAll);         //전체자료보기
   $("#btn_insertData").click(insertData);      //추가
   $("#btn_deleteData").click(deleteData);      //삭제

   $("#btn_insertCancle").click(function(){   //추가 취소
      $("#txtCode").val("");
      $("#txtSang").val("");
      $("#txtSu").val("");
      $("#txtDan").val("");
      $("#addForm").slideToggle("fast");
   });
   
   $("#btn_deleteCancle").click(function(){   //삭제 취소
      $("#delCode").val("");
      $("#delForm").slideToggle("fast");
   });
});

function dispAll(){
   $.getJSON("jq15all.jsp",function(data){
	   $("#disp").empty();
	   //alert(data)
	   var str = "<table><tr><th>코드</th><th>품명</th><th>수량</th><th>단가</th></tr>"
		   $.each(data,function(index,entry){
			  // alert(entry.sang)
			   str += "<tr>";
			   str += "<td>" + entry.code + "</td>"
			   str += "<td>" + entry.sang + "</td>"
			   str += "<td>" + entry.su + "</td>"
			   str += "<td>" + entry.dan + "</td>"
			   str += "</tr>";
		   })
		   str += "</table>";
	   $("#disp").append(str);
   })
}

function insertData(){
   var code = $("#txtCode").val();
   var sang = $("#txtSang").val();
   var su = $("#txtSu").val();
   var dan = $("#txtDan").val();
   
   $("#code_err1").hide();
   $("#code_err2").hide();
   
   //code check
   if(code.length < 1){
	   $("#code_err1").show();
	   return false;
   }else{
	   $("#code_err1").hide();
   }
   
   //sang check
   if(sang.length < 1){
	   $("#code_err3").show();
	   return false;
   }else{
	   $("#code_err3").hide();
   }
   
   //su check
   if(isNaN(su) || su.length < 1){
	   $("#code_err4").show();
	   return false;
   }else{
	   $("#code_err4").hide();
   }
   
   //dan check
   if(isNaN(dan) || dan.length < 1){
	   $("#code_err5").show();
	   return false;
   }else{
	   $("#code_err5").hide();
   }
   
   //추가작업
   $.ajax({
	   type:"post",
	   url:"jq15insert.jsp",
	   data:{"code":code,"sang":sang,"su":su,"dan":dan},
	   success:function(data){
		   //alert(data)
		   if(data.trim() === "f"){
			   alert("실패");
			   return false;
		   }
		   $("#txtCode").val("");
		   $("#txtSang").val("");
		   $("#txtSu").val("");
		   $("#txtDan").val("");
		  dispAll(); //추가후 전체자료보기
		   
	   },
	   error:function(){
		   alert("오류")
	   }
   })
}

function deleteData(){
   var dcode = $("#delCode").val();
   if(isNaN(dcode) || dcode.length < 1){
	   $("#code_err6").show();
	   return false;
   }else{
	   $("#code_err6").hide();
   }
   
   
   $.ajax({
	   type:"post",
	   url:"jq15delete.jsp",
	   data:{"dcode":dcode},
	   success:function(data){
		   if(data.trim() === "f"){
			   alert("실패");
			   return false;
		   }
		   $("#delCode").val("");
		   $("#delForm").slideToggle("fast");
		  dispAll(); //추가후 전체자료보기
		   
	   },
	   error:function(){
		   alert("오류")
	   }
   })
}