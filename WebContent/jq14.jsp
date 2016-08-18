<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String funcName = request.getParameter("callback");

if(funcName != null){
%>
	<%=funcName%>(
	{"datas":
		[
			{"no":"10","name":"호길동"},
			{"no":"20","name":"소길동"},
			{"no":"30","name":"오길동"}
		
		
		]
	}
	);
<%	
}
%>