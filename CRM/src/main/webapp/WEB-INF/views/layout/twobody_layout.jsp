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
</head>
<body id="body">
		<div class="headFrame" >
			<div class="header" >
				<div id="mainTitleDiv">
					<label id="mainTitle">SFA <a style="font-size: 20pt;">(Sales Force Automation)</a></label>
				</div>
				<tiles:insertAttribute name="header"></tiles:insertAttribute>
			</div>
			<div class="navi" >
					<tiles:insertAttribute name="navi"></tiles:insertAttribute>
			</div>
		</div>
		
		<div class="bodyFrame" >
			<div class="sub_menu_bar">
	
			</div>
			<div class="body1">
				
				<div class="master">
					<tiles:insertAttribute name="master"></tiles:insertAttribute>
				</div>
					
				<div class="detail" >
					<tiles:insertAttribute name="detail"></tiles:insertAttribute>
				</div>
			</div>
		</div>
		
		<div class="footer" >
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
		</div>

</body>
</html>