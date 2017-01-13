<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserList.css" type="text/css" />
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserList.js"></script> --%>	
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviuser").css("font-weight", "bold");

function userTabOpen(){
	var popUrl = "userTab";
	var popOption = "width=950, height=320, resize=no, scrollbars=no, status=no, location=no, directories=no;";
	window.open(popUrl, "", popOption);
}
</script>

</head>
<body>

	<div id="title">
		<div class="caption">■ 사용자관리</div>
		<div class="bt_position">
		<form name="searchForm" method="post" action="${ctx}/user">
			<select name="keyfield">
				<option value="u_id">사용자ID명</option>
				<option value="u_name">사용자명</option>
				<option value="o_name">조직명</option>
			</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="search_btn" type="submit" class="iuser_serach_bt">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/iuserDelete" >	
		<table id="mastertable">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox" onclick="allChk(this);"/></th>
					<td style="width:10%;">사용자ID</td>
					<td style="width:10%;">사용자명</td>
					<td style="width:10%;">조직명</td>
					<td style="width:20%;">이메일</td>
					<td style="width:20%;">연락처</td>
					<td style="width:10%;">권한</td>
					<td style="width:10%;">사용자구분</td>
					<td style="width:10%;">상태</td>
				</tr>
			</thead>
			<tbody id="usertbody">
				<c:forEach var="list" items="${list}">
				<tr>
					<th scope="row"><input type="checkbox" class="ab" name="del_code" value="${list.USER_ID}"></th>
					<td style="width:10%;" id="user_id_a"><a href='#'>${list.USER_ID}</a></td>
					<td style="width:10%;" class="user_name_tag">${list.USER_NAME}</td>
					<td style="width:10%;" class="org_name_tag">${list.ORG_ID}</td>
					<td style="width:20%;" class="email_tag">${list.EMAIL}</td>
					<td style="width:20%;" class="cell_phone_tag">${list.CELL_PHONE}</td>
					<td style="width:10%;" class="auth_name_tag">
					<c:if test="${empty list.AUTH_NAME}">
						권한없음
					</c:if>
					<c:if test="${not empty list.AUTH_NAME}">
						${list.auth_name}
					</c:if>
					</td>
					<td style="width:20%;" class="user_type_cd">${list.USER_TYPE_CD}</td>
					<td style="width:20%;" class="active_flg">${list.ACTIVE_FLG}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>

		<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">
		<input type="button" id="iuserListAddBtn" onclick="userTabOpen()"class="iuser_bt" value="등록" />
		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정"/>
		<input type="button" id="iuserDelBtn" class="iuser_bt" value="삭제"/>
	</div>
</body>
</html>