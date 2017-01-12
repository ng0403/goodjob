<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="oOrgList.css" type="text/css" />

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

<title>OrgType List</title>

<script type="text/javascript">
	$("#navisub11").show();
	$("#naviuser").css("font-weight", "bold");
</script>

</head>
<body id="aorgList">

	<div id="title">
		<br>
		<div class="caption">■ 조직유형</div>
		<div class="bt_position">
			<form class="searchForm" name="searchForm" method="post" action="">
				<select name="searchKey" class="selectField">
					<option value="iuser_nm">작성자명</option>
					<option value="position">조직유형ID</option>
				</select> <input type="text" name="searchValue" class="boxTF" id="title_text" />
				&nbsp;
				<button type="submit" id="search_btn" class="org_search_bt">검
					색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
		<!-- <form name="userForm" id="userForm" method="post" > -->
		<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/iuserDelete">
			<table id="mastertable">
				<thead>
					<tr>
						<th>
							<input id="allCheck" type="checkbox" onclick="allChk(this);" />
						</th>
						
						<td style="width: 10%;">조직유형ID</td>
						<td style="width: 10%;">조직유형명</td>
						<td style="width: 10%;">상위조직유형ID</td>
						<td style="width: 10%;">활성화여부</td>
						<td style="width: 10%;">작성자</td>
						<td style="width: 10%;">작성시간</td>
					</tr>
				</thead>
				<tbody id="usertbody">
					<c:forEach var="list" items="${list}">
						<tr>
							<th scope="row"><input type="checkbox" class="ab" name="del_code" value="${list.iuser_id}"></th>
							<td style="width: 10%;" id="user_id_a">
								<a href='#'>${list.id_nm}</a>
							</td>
							<td style="width: 10%;" class="user_name_tag">${list.iuser_nm}</td>
							<td style="width: 10%;" class="org_name_tag">${list.org_nm}</td>
							<td style="width: 20%;" class="email_tag">${list.email1}@${list.email2}</td>
							<td style="width: 20%;" class="cell_phone_tag">${list.cell_ph1}-${list.cell_ph2}-${list.cell_ph3}</td>
							<td style="width: 10%;" class="auth_name_tag">
							
								<c:if test="${empty list.auth_nm}">
									권한없음
								</c:if> <c:if test="${not empty list.auth_nm}">
									${list.auth_nm}
								</c:if>
							</td>
							<td style="width: 10%;" class="code_name_tag">${list.cd_nm}</td>
							<td style="width: 10%;" class="active_flag_tag">
								<c:if test="${list.act_yn=='Y'}">활성화</c:if> 
								<c:if test="${list.act_yn=='N'}">비활성화</c:if>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</form>
	</div>

	<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">
		<input type="button" id="iuserListAddBtn" class="iuser_bt" value="등록" />
		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정" />
		<input type="button" id="iuserDelBtn" class="iuser_bt" value="삭제" />
	</div>
	
</body>
</html>