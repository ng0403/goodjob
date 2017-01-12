<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authList.css" type="text/css" />
<script src="${ctx}/resources/common/js/standard/auth/authList.js"></script>
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviauth").css("font-weight", "bold");
</script>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<div class="caption">■ 권한관리</div>
		<div class="search_bt_position">
			<form name="searchForm" method="post" action="${ctx}/auth">
			<select name="keyfield" id="selectOption">
				<option value="a_id">권한ID</option>
				<option value="a_name">권한명</option>
			</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="search_btn" class="auth_btn">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="authtable">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<td style="width:25%;">권한ID</td>
					<td style="width:40%;">권한명</td>
					<td style="width:35%;">상태</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="auth" items="${authList}"> 
				<tr>
					<th scope="row"><input type="checkbox" class="ab" id="checkauth" value="${auth.auth_id}"></th>
					<td style="width:25%;" id="authclick"><a href="#">${auth.auth_id}</a></td>
					<td style="width:40%;">${auth.auth_nm}</td>
					<td style="width:35%;">
						<c:if test="${auth.act_yn=='Y'}">활성화</c:if>
						<c:if test="${auth.act_yn=='N'}">비활성화</c:if>
					</td>
			</tr>
			</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
		<!-- 기본 버튼 -->
	<div class="auth_bt_position">
		<button type="button" class="auth_btn" id="writeauth">등록</button>
		<input type="button" class="auth_btn" value="삭제" id="deleteauth">
	</div>
</body>
</html>