<%@page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    

[
<%
Connection conn = null;
PreparedStatement pstmt = null;
ResultSet rs = null;
String result = "";

try{
	Class.forName("oracle.jdbc.driver.OracleDriver");
}catch(Exception e){
	System.out.println("연결 오류:" + e);
	return;
}

try{	
	conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "scott", "tiger");
	pstmt = conn.prepareStatement("select * from sangdata order by code desc");
	rs = pstmt.executeQuery();
	
	while(rs.next()){
		result += "{";
		result += "\"code\":" + "\"" + rs.getString(1) + "\",";
		result += "\"sang\":" + "\"" + rs.getString(2) + "\",";
		result += "\"su\":" + "\"" + rs.getString(3) + "\",";
		result += "\"dan\":" + "\"" + rs.getString(4) + "\"";
		result += "},"; 
	}
	if(result.length() > 0){
		result = result.substring(0, result.length() - 1);	
	}
	out.print(result);
	rs.close();
	pstmt.close();
	conn.close();
}catch(Exception e2){
	System.out.println("에러:" + e2);
}
%>
]