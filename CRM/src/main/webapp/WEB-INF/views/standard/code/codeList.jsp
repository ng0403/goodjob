<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authList.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
 --%>

<script src="${ctx}/resources/common/js/standard/code/codeGroupList.js"></script>


<%-- <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
 --%><script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<%-- <SCRIPT SRC="${CTX}/RESOURCES/COMMON/SEMANTIC/SEMANTIC.JS"></SCRIPT> --%>

<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />
 
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviauth").css("font-weight", "bold");
</script>
</head>
<body class="body">
<div class="mainDiv">

<input type="hidden" id="ctx" value="${ctx}">
	
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 기준정보 > 코드관리</h3>
		</div>
	</div>
	
			<div class="list_search">
			<form name="searchForm" method="post" action="${ctx}/auth">
 				<select name="keyfield" id="selectOption">
					<option value="cd_grp_id">코드ID</option>
					<option value="cd_grp_name">코드명</option>
				</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
 			<button id="search_btn" class="tiny ui orange button">검색</button>
			</form>
		  </div>
	
	
	<div class="container" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="codetable" class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<th class="thead_th"><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<th class="thead_th">코드ID</th>
					<th class="thead_th">코드명</th>
					<th class="thead_th">상태</th>
 				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="codegrp" items="${codegrpList}">  
				<tr onclick="codeList('${codegrp.cd_grp_id}');" class="up">
					<td class="tbody_tr_td" scope="row"><input type="checkbox" class="ab" id="checkauth" value="${codegrp.cd_grp_id}"></td>
					<td class="tbody_tr_td" ><a href="#" onclick="cdgrpDetail('${codegrp.cd_grp_id}');" >${codegrp.cd_grp_id}</a></td>
					 <td class="tbody_tr_td">${codegrp.cd_grp_nm}</td> 
 					<td class="tbody_tr_td">
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
	</div>
</body>
</html>