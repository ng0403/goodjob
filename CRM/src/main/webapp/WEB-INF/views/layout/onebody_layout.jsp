<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CorePlus</title>
<style type="text/css">
html,body{
	height: 100%;
	width: 100%;
	margin: 0 auto;
	min-width: 800px;
	min-height: 720px;
	text-align: left;
}
 
.headFrame {
	width:100%; 
	height: 14%; 
	/* solid black; */
	float:left;
	overflow: hidden;  
	text-align: center;
	background:#fffbcc;
}
.header {
	width:100%; 
	height: 40%; 
	/* solid black; */
	float:left; 
	background:#fffbcc;
}
.navi{
 	width:10%;   
	height: 60%; 
	/* solid black; */
	float:left;
}

.bodyFrame {
	width:85%; 
	height:81%; 
	overflow: hidden; 
	margin: 0 auto;
}

.body {
	width:85%; 
	height: 100%; 
	padding-left: 20px;  
	padding-right: 20px; 
	margin: 0 auto;
}

.footer {
	width:100%; 
	height: 5%; 
	float: left;
}
</style>
</head>
<body id="body" >

		<div class="headFrame" >
		<div class="header" >
				<tiles:insertAttribute name="header"></tiles:insertAttribute></div>
			<div class="navi" >
				<tiles:insertAttribute name="navi"></tiles:insertAttribute></div>
		</div>
		<div class="bodyFrame">
			<div class="body" >
			<tiles:insertAttribute name="body"></tiles:insertAttribute></div>
		</div>
		<div class="footer" >
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
		</div>
		
</body>
</html>