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
					<label id="mainTitle">SFA <label style="font-size: 20pt; font-weight: normal;">(Sales Force Automation)</label></label>
				</div>
				<tiles:insertAttribute name="header"></tiles:insertAttribute>
			</div>
			<div class="navi" >
					<tiles:insertAttribute name="navi"></tiles:insertAttribute>
			</div>
		</div>
		
		<div class="sub_menu_bar">

		</div>
		<div class="bodyFrame" >
			<div class="body2">
				<div class="master2">
					<tiles:insertAttribute name="master2"></tiles:insertAttribute>
				</div>
				<div class="middle">
					<tiles:insertAttribute name="middle"></tiles:insertAttribute>
				</div>	
				<div class="detail2" >
					<tiles:insertAttribute name="detail2"></tiles:insertAttribute>
				</div>
			</div>
		</div>
		
		<div class="footer" >
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
		</div>

</body>
</html>