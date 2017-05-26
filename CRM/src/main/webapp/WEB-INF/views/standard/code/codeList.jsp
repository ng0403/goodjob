<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authList.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />  --%>

<script src="${ctx}/resources/common/js/standard/code/codeGroupList.js"></script>
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
<body class="thBody" >
<div class="mainDiv">

	<input type="hidden" id="ctx" value="${ctx}">
	
	<div id="title" class="caption" style="padding-top: 13px ;">
		<label class="label_header" style="font-size: 1.28571429em; font-weight: bold; color: rgba(0, 0, 0, 0.87); " >■ 기준정보 > 코드관리</label>
	</div>
	
	<div class="list_search" >
		<form name="searchForm" method="post" action="${ctx}/auth">
				<select name="keyfield" id="selectOption" style="height: 32px;font-size: 8pt;">
					<option value="cd_grp_id">코드ID</option>
					<option value="cd_grp_name">코드명</option>
				</select> 
			<input id="title_text" type="text" name="keyword" class="inputText" style="height: 23px;"> &nbsp;
			<button id="search_btn" class="search_button">검색</button>
		</form>
	  </div>
	
	<div data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="codetable" class="ccthFixedtbl" style="table-layout:fixed; " >
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<th class="thead_th" style="width: 74px;"><input id="allCheck" type="checkbox" onclick="allchk();"/></th>
					<th class="thead_th" style="width: 121px;">코드ID</th>
					<th class="thead_th" style="width: 120px;">코드명</th>
					<th class="thead_th" style="width: 89px;">상태</th>
 				</tr>
			</thead>
			<tbody class="tbody" style="overflow-y: scroll; overflow-x: hidden; float: left; width: 405px; height: 481px; border: 2px solid #273152;">
				<c:forEach var="codegrp" items="${codegrpList}">  
				<tr onclick="codeList('${codegrp.cd_grp_id}');" class="up">
					<td class="codeTbody_tr_td" scope="row" style="width: 74px;">
						<input type="checkbox" class="ab" id="checkauth" value="${codegrp.cd_grp_id}"></td>
					<td class="codeTbody_tr_td" style="width: 121px;"><a href="#" onclick="cdgrpDetail('${codegrp.cd_grp_id}');" >${codegrp.cd_grp_id}</a></td>
					<td class="codeTbody_tr_td" style="width: 120px;">${codegrp.cd_grp_nm}</td> 
 					<td class="codeTbody_tr_td" style="width: 89px;">
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
		<button type="button" class="search_button" id="writecdgrp">등록</button>
		<input type="button" class="search_button" value="삭제" id="deleteauth">
	</div>
	</div>
</body>
</html>