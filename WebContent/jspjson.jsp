<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
	pageEncoding="UTF-8"%>

[
 <%
 	Connection conn = null;
 	PreparedStatement pstmt = null;
 	ResultSet rs = null;
 	String result = "";

 	try {
 		Class.forName("oracle.jdbc.driver.OracleDriver");
 	} catch (Exception e) {
 		System.out.println(e);
 		return;

 	}

 	try {

 		conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "scott", "tiger");
 		pstmt = conn.prepareStatement("select sawon_no,sawon_name,buser_num from sawon");
 		rs = pstmt.executeQuery();

 		while (rs.next()) {
 			result += "{";
						
 			result += "\"code\":" + "\"" + rs.getString("sawon_no") + "\",";
 			result += "\"sang\":" + "\"" + rs.getString("sawon_name") + "\",";
 			result += "\"dan\":" + "\"" + rs.getString("buser_num") + "\"";
 			result += "},";
 	}
 		if(result.length() > 0){
 			result = result.substring(0,result.length() - 1);
 		}
 		result += "]";
 		out.println(result);
 		
 		rs.close();
 		pstmt.close();
 		conn.close();
 	} catch (Exception e2) {
 		System.out.println(e2);
 		return;

 	}
 %>