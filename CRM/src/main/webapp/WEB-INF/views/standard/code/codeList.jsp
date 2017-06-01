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
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/code/code	Detail.css" type="text/css" />

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />  --%>

<script src="${ctx}/resources/common/js/standard/code/codeGroupList.js"></script>
 
<script type="text/javascript">
$(function(){
	var $codetable = $("table#codetable");
	var $codebodyCells = $codetable.find("tbody tr:first").children();
	var codecolWidth;
	
	$(window).resize(function(){
		// jquery 개체 안의 요소들의 딥합을 다른 집합으로 변경해서 옮긴다.
		codecolWidth = $codebodyCells.map(function(){
			return $(this).width();
		}).get();
		
		//각 thead tr 반복
		$codetable.find("head tr").children().each(function(i, v){
			$(v).width(codecolWidth	[i]);
		})
	}).resize();
	
})
</script>
  
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
		<label class="label_header" style="font-size: 1.28571429em; font-weight: bold; color: rgba(0, 0, 0, 0.87); " >■ 기준정보 > 코드 그룹관리</label>
	</div>
	
	<div class="list_search" style="margin-top:37px" >
		<form name="searchForm" method="post" action="${ctx}/auth">
				<select name="keyfield" id="selectOption" style="height: 32px;font-size: 8pt;">
					<option value="cd_grp_id">코드ID</option>
					<option value="cd_grp_name">코드명</option>
				</select> 
			<input id="title_text" type="text" name="keyword" class="inputText" style="height: 23px; background-color:white"> &nbsp;
			<button id="search_btn" class="tiny ui blue button">검색</button>
		</form>
	  </div>
	
	<div class="cdgrp_list" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="codetable" class="ccthFixedtbl" style="table-layout:fixed; margin-top:14px" >
			<thead class="thead">
				<tr class="tr_table_fix_header" style="text-align:center">
					<th class="thead_th" style="width: 9.1%;"><input id="allCheck"  type="checkbox" onclick="allchk();"/></th>
					<th class="thead_th" style="width: 29.1%;">코드ID</th>
					<th class="thead_th" style="width: 30.29%%;">코드명</th>
					<th class="thead_th" style="width: 30.4%;">상태</th>
					<th style="width:3%;border-left:none;"></th>
 				</tr>
			</thead>
			<tbody class="tbody" style="height:444px">
				<c:forEach var="codegrp" items="${codegrpList}">  
				<tr onclick="codeList('${codegrp.cd_grp_id}');" class="up">
					<td class="codeTbody_tr_td" scope="row" style="width: 9.3%; text-align:center">
						<input type="checkbox" class="ab" id="checkauth" name="cdgrpdel" value="${codegrp.cd_grp_id}"></td>
					<td class="codeTbody_tr_td" style="width: 29.8%;"><a href="#" onclick="cdgrpDetail('${codegrp.cd_grp_id}');" >${codegrp.cd_grp_id}</a></td>
					<td class="codeTbody_tr_td" style="width: 29.3%;">${codegrp.cd_grp_nm}</td> 
 					<td class="codeTbody_tr_td" style="width: 30%;">
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
		<button type="button" class="tiny ui blue basic button" id="writecdgrp" >등록</button>
		<input type="button" class="tiny ui blue button" value="삭제" id="deleteauth">
	</div>
	</div>
</body>
</html>