<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<style type="text/css">
@CHARSET "UTF-8";

html {
	font-family: 'Nanum Gothic', Dotum, "돋움", Gulim, "굴림", Verdana, Arial,
		"Trebuchet MS";
	border-collapse: collapse;
	border-spacing: 0;
	font-size: 13px;
}

select {
	margin-left: 10px;
	background-color: #ffffff;
	color: #5F5F5F;
	border: 1px solid #C0C4CB;
	padding: 5px 5px;
	border-radius: 5px 5px 5px 5px;
	width: auto;
}

#title .caption {
	color: #484848;
	font-weight: bold;
	border-bottom: 1px solid #dddddd;
	padding-bottom: 10px;
}

.bt_position {
	margin-top: 7px;
	margin-right: 10px;
	color: #484848;
	font-weight: bold;
	float: right;
	margin-bottom: 10px;
}

.int_search {
	position: relative;
	width: 150px;
	height: 24px;
	border: 1px solid #bebebe;
	color: #333;
	border-radius: 5px 5px 5px 5px;
}

.iuser_serach_bt {
	float: right;
	background-color: #eaeaea;
	color: #353535;
	border: 1px solid #C0C4CB;
	padding: 5px 5px;
	border-radius: 5px 5px 5px 5px;
	width: 45px;
	cursor: pointer;
	vertical-align: middle;
	margin-top: 1px;
	margin-right: 5px;
}

.bs-example {
	padding-top: 10px;
	width: 100%;
}

#mastertable {
	color: #484848;
	border: 2px solid #DDD;
	width: 100%;
	border-right: thin;
	height: 180px;
	border-collapse: collapse;
}

#mastertable thead {
	text-align: center;
	float: left;
	width: 100%;
	border-bottom: 2px solid #dddddd;
}

#mastertable tr, #mastertable tr td {
	height: 10px;
}

#mastertable thead th, #mastertable thead td {
	background-color: #F2F2F2;
	font-weight: bold;
}

#mastertable thead th, #mastertable thead td {
	padding: 5px;
}

#mastertable #usertbody tr, #mastertable #usertbody tr td {
	text-align: center;
}

.bs-example #mastertable tbody {
	overflow-y: scroll;
	overflow-x: hidden;
	float: left;
	width: 100%;
	height: 200px;
	padding-left: 3.5px;
}

.bs-example #mastertable #usertbody td {
	padding: 5px;
}

.bt_positionuserlist {
	float: right;
	margin-top: 10px;
	padding-right: 9px;
}

.iuser_bt {
	float: right;
	background-color: #eaeaea;
	color: #353535;
	border: 1px solid #C0C4CB;
	padding: 5px 5px;
	border-radius: 5px 5px 5px 5px;
	width: 45px;
	margin-right: 5px;
	cursor: pointer;
	vertical-align: middle;
}
</style>

<title>OrgType Insert</title>

<script type="text/javascript">
	$("#navisub11").show();
	$("#naviuser").css("font-weight", "bold");
</script>

</head>
<body id="aorgList">

	<div id="title">
		<br>
		<div class="caption">■ 조직유형 Insert</div>
		<div class="bt_position">
			<form class="searchForm" name="searchForm" method="post" action="">
				<table>
					<tr>
						<td>
							조직유형ID
						</td>
						<td>
							<input type="text" id="org_type_id" name="org_type_id">
						</td>
					</tr>
					<tr>
						<td>
							조직유형명
						</td>
						<td>
							<input type="text" id="org_type_name">
						</td>
					</tr>
					<tr>
						<td>
							상위조직ID
						</td>
						<td>
							<input type="text" id="p_org_type_id" name="p_org_type_id">
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>

	<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">
		<input type="button" id="iuserListAddBtn" class="iuser_bt" value="등록" />
		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정" />
		<input type="button" id="iuserDelBtn" class="iuser_bt" value="삭제" />
	</div>
	
</body>