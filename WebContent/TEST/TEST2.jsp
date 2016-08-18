<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
	pageEncoding="UTF-8"%>

[
 <%
 	Connection conn = null;
 	PreparedStatement pstmt = null;
 	ResultSet rs = null;
 	String result = "";
 	String buser = request.getParameter("buser");
 	String sawon = request.getParameter("sawon");
 	try {
 		Class.forName("oracle.jdbc.driver.OracleDriver");
 	} catch (Exception e) {
 		System.out.println(e);
 		return;

 	}

 	try {

 		conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "scott", "tiger");
 		pstmt = conn.prepareStatement("select distinct sawon_no,sawon_name,sawon_jik,(select count(gogek_no) from gogek where gogek_damsano = sawon_no),gogek_name,gogek_tel,case when gogek_jumin like '%-1%' then '남' when gogek_jumin like '%-2%' then '여'end 고객성별,(TO_CHAR(sysdate,'YYYY') - SUBSTR(gogek_jumin,1,2)) - 1900 나이 from sawon left join gogek on sawon_no=gogek_damsano left join buser on buser_num=buser_no where buser_name like ? and sawon_name like ?");
 		pstmt.setString(1, buser + "%");
 		pstmt.setString(2, sawon + "%");
 		rs = pstmt.executeQuery();

 		while (rs.next()) {
 			result += "{";
						
 			result += "\"a\":" + "\"" + rs.getString(1) + "\",";
 			result += "\"b\":" + "\"" + rs.getString(2) + "\",";
 			result += "\"c\":" + "\"" + rs.getString(3) + "\",";
 			result += "\"d\":" + "\"" + rs.getString(4) + "\",";
 			result += "\"e\":" + "\"" + rs.getString(5) + "\",";
 			result += "\"f\":" + "\"" + rs.getString(6) + "\",";
 			result += "\"g\":" + "\"" + rs.getString(7) + "\",";
 			result += "\"h\":" + "\"" + rs.getString(8) + "\"";
 			result += "},";
 	}
 		if(result.length() > 0){
 			result = result.substring(0,result.length() - 1);
 		}
 		result += "]";
 		out.println(result);
 		System.out.print(result);
 		rs.close();
 		pstmt.close();
 		conn.close();
 	} catch (Exception e2) {
 		System.out.println(e2);
 		return;

 	}
 %>