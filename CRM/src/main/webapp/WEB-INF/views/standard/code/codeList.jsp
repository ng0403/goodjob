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


<script src="${ctx}/resources/common/js/standard/code/codeList.js"></script>


<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>
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
			<h3 class="ui header" style="background: #fff;">■ 기준정보 > 코드관리</h3>
		</div>
		<div class="search_bt_position">
			<form name="searchForm" method="post" action="${ctx}/auth">
			<div class="ui left icon input">
				<select name="keyfield" id="selectOption">
					<option value="cd_grp_id">코드ID</option>
					<option value="cd_grp_name">코드명</option>
				</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			</div>
			<button id="search_btn" class="tiny ui orange button">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="codetable" class="ui sortable celled table">
			<thead>
				<tr>
					<th style="width:9%;"><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<th style="width:30%;">코드ID</th>
					<th style="width:30.8%;">코드명</th>
					<th style="width:30.2%;border-right:none;">상태</th>
 					<th style="border-left:none;"></th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="codegrp" items="${codegrpList}">  
				<tr>
					<td style="width:9%;" scope="row"><input type="checkbox" class="ab" id="checkauth" value="${codegrp.cd_grp_id}"></td>
					<td style="width:30%;" ><a href="#" onclick="codeList('${codegrp.cd_grp_id}');">${codegrp.cd_grp_id}</a></td>
					 <td style="width:31%;">${codegrp.cd_grp_nm}</td> 
 					<td style="width:30%;">
						<c:if test="${codegrp.act_yn=='Y'}">활성화</c:if>
						<c:if test="${codegrp.act_yn=='N'}">비활성화</c:if>
					</td>
			</tr>
			</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
		<!-- 기본 버튼 -->
	<div class="auth_bt_position">
		<button type="button" class="tiny ui button" id="writecdgrp">등록</button>
		<input type="button" class="tiny ui orange button" value="삭제" id="deleteauth">
	</div>
</body>
</html>