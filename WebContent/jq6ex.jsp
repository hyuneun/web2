<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
//system.out.print("asd");
request.setCharacterEncoding("utf-8");
String a = request.getParameter("a");
String b = request.getParameter("b");
String c = request.getParameter("c");
System.out.print(a + b + c);
int bb = Integer.parseInt(b);
int cc = Integer.parseInt(c);
int tt = bb+cc;
int avg = tt / 2;

System.out.print("학생명 : " + a + " 총점 : " + tt + " 평균 : " + avg);
%>