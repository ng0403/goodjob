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
}
</style>
</head>
<body id="body" style="text-align:center; ">

		<div class="headFrame" style="width:100%; height: 15%; /* solid black; */float:left;overflow: hidden;  text-align: center;">
		<div class="header" style="width:100%; height: 40%; /* solid black; */float:left; background:#fffbcc;">
			<tiles:insertAttribute name="header"></tiles:insertAttribute>
			</div>
				<div class="navi" style="width:100%; height: 60%; /* solid black; */ margin: 0 auto;">
					<tiles:insertAttribute name="navi"></tiles:insertAttribute>
			</div>
		</div>
		
		<div class="bodyFrame" style="width:90%; height:80%; overflow: auto;  margin: 0 auto;">
			<div class="body1" style="width: 90%;height: 100%; padding-left: 20px;  padding-right: 20px;  margin: 0 auto;">
				<div class="master" style="width:100%;height: 50%;">
					<tiles:insertAttribute name="master"></tiles:insertAttribute>
				</div>
					
				<div class="detail" style="width:100%; height: 50%; ">
					<tiles:insertAttribute name="detail"></tiles:insertAttribute></div>
			</div>
		</div>
		
		<div class="footer" style="width:100%; height: 5%; float: left;">
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
		</div>

</body>
</html>