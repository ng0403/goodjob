<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CorePlus</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/layout.css" type="text/css" />
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
<body>

	<div class="headFrame"><!--  style="width:100%; height: 15%; /* solid black; */float:left;" -->
		<div class="header"><!--  style="width:100%;height: 40%; /* solid black; */float:left; background:#fffbcc;" -->
				<div id="mainTitleDiv">
						<label id="mainTitle">SFA <label style="font-size: 20pt; font-weight: normal;">(Sales Force Automation)</label></label>
				</div>
				<tiles:insertAttribute name="header"></tiles:insertAttribute></div>
		<div class="navi"> <!-- style="width:100%;height: 60%; /* solid black; */float:left;"> -->
				<tiles:insertAttribute name="navi"></tiles:insertAttribute></div>
	</div>
	
	<div class="sub_menu_bar">
	
	</div>
	<div class="bodyFrame"><!--  style="width:100%; height:80%; overflow: hidden;"> -->
		<div class="tree" style="width:20%;height: 100%; float:left; padding-left: 20px;  padding-right: 10px;">
			<tiles:insertAttribute name="tree"></tiles:insertAttribute></div>
		<div class="treeDetail" style="width:63%;height: 100%; float:left; padding-right: 15px;">
			<tiles:insertAttribute name="treeDetail"></tiles:insertAttribute></div>
	</div>
	
	<div class="footer"><!--  style="width:100%;height: 5%; clear:both;"> -->
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
	</div>

</body>
</html>