<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authList.css" type="text/css" />

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<script src="${ctx}/resources/common/js/standard/auth/authList.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<%-- <script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> --%>
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-ui.js"></script>

<style type="text/css">
#authhead{
	margin-bottom:0px;
}
#authdiv{
	height:400px;
}
</style>
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviauth").css("font-weight", "bold");
</script>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 기준정보 > 권한관리</h3>
		</div>
		<div class="search_bt_position">
			<form name="searchForm" method="post" action="${ctx}/auth">
			<div class="ui left icon input">
				<select name="keyfield" id="selectOption">
					<option value="a_id">권한ID</option>
					<option value="a_name">권한명</option>
				</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			</div>
			<button id="search_btn" class="tiny ui orange button">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="authhead" class="ui celled table" style="width:95%">
			<thead>
				<tr>
					<th style="width:9.3%;"><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<th style="width:29.5%;">권한ID</th>
					<th style="width:30.2%;">권한명</th>
					<th style="width:30.9%;border-right:none;">상태</th>
					<th style="width:5%;border-left:none;"></th>
				</tr>
			</thead>
		</table>
		<div id="authdiv" style="width:95%;margin-top:0px;">
		<table id="authtable" class="ui celled table">
			<tbody id="authbody">
				<c:forEach var="auth" items="${authList}"> 
				<tr>
					<td style="width:9%;" scope="row"><input type="checkbox" class="ab" id="checkauth" value="${auth.auth_id}"></td>
					<td style="width:30%;" id="authclick"><a href="#">${auth.auth_id}</a></td>
					<td style="width:31%;">${auth.auth_nm}</td>
					<td style="width:30%;">
						<c:if test="${auth.act_yn=='Y'}">활성화</c:if>
						<c:if test="${auth.act_yn=='N'}">비활성화</c:if>
					</td>
			</tr>
			</c:forEach>
			</tbody>
		</table>
		</div>
		</form>
	</div>
		<!-- 기본 버튼 -->
	<div class="auth_bt_position">
		<button type="button" class="tiny ui button" id="writeauth">등록</button>
		<input type="button" class="tiny ui orange button" value="삭제" id="deleteauth">
	</div>
</body>
</html>