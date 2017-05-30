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
<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>

<script type="text/javascript">
$(function(){
	var $authtable = $("table#authtable");
	var $authbodyCells = $authtable.find("tbody tr:first").children();
	var authcolWidth;
	
	$(window).resize(function(){
		// jquery 개체 안의 요소들의 딥합을 다른 집합으로 변경해서 옮긴다.
		authcolWidth = $authbodyCells.map(function(){
			return $(this).width();
		}).get();
		
		//각 thead tr 반복
		$authtable.find("head tr").children().each(function(i, v){
			$(v).width(authcolWidth[i]);
		})
	}).resize();
	
})
</script>
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
			<button id="search_btn" class="tiny ui blue button">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="authtable" class="ui sortable celled table">
			<thead>
				<tr>
					<th style="width:9.1%;"><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<th style="width:29.9%;">권한ID</th>
					<th style="width:30.5%;">권한명</th>
					<th style="width:30%;border-right:none;">상태</th>
					<th style="width:5%;border-left:none;"></th>
				</tr>
			</thead>
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
		</form>
	</div>
		<!-- 기본 버튼 -->
	<div class="auth_bt_position">
		<button type="button" class="tiny ui button" id="writeauth">등록</button>
		<input type="button" class="tiny ui blue button" value="삭제" id="deleteauth">
	</div>
</body>
</html>