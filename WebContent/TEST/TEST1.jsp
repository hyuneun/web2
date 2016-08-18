<?xml version="1.0" encoding="utf-8" ?>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@ page language="java" contentType="text/xml; charset=UTF-8"
	pageEncoding="UTF-8"%>
<sawons>
<%
request.setCharacterEncoding("utf-8");
String sang = request.getParameter("sang");
//System.out.println(buser);

Connection conn = null;
PreparedStatement pstmt = null;
ResultSet rs = null;


try{
	
	Class.forName("oracle.jdbc.driver.OracleDriver");
	conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","scott","tiger");
	String sql = "select * from sangdata where sang like ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, sang + "%");
	 //where buser_name=?
	//pstmt.setString(1, buser);s
	rs = pstmt.executeQuery();
	//String ss = "";
	
	while(rs.next()){
		
		
%>
		<sawon>
		<code><%=rs.getString(1) %></code>
		<sang><%=rs.getString(2) %></sang>
		<su><%=rs.getString(3) %></su>
		<dan><%=rs.getString(4) %></dan>
		</sawon>
<%	
		/* ss += "(" + rs.getString(1) + " " + rs.getString(2) + " " + rs.getString(3) + rs.getString(4) + ")";
		ss += "<br>"; */
	}
	
	//out.print(ss);
	
	rs.close();
	pstmt.close();
	conn.close();
}catch(Exception e2){
	System.out.println(e2);
	return;
	
}






%>	
</sawons>
