<!-- 
업 무 명 : 사용자구분 검색을 위한 팝업창 제작
작 성 자 : 이지용
작 성 일 : 2017/05/18
수 정 자 : 
수 정 일 : 
내    용 : 팝업창안에 Code 리스트와 검색기능이 있음.
 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사용자구분 팝업창</title>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/userTypePopup.js"></script>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/userTypePopup.css" type="text/css" /> --%>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
</head>
<body>
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 사용자구분 검색창</h3>
</div>
<div class="bt_position_popup">
		<form name="searchForm" method="post" action="" style="padding: 5px;">
			<select name="keyfield">
				<option value="c_name">코드명</option>
				<option value="c_id">코드</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="tiny ui blue button">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post" action="" >	
		<table id="mastertable" class="ui celled table">
			<thead>
				<tr>
					<th style="width:20%;">코드그룹ID</th>
					<th style="width:15%;">코드</th>
					<th style="width:20%;">코드명</th>
					<th style="width:20%;">코드순서번호</th>
					<th style="width:25%;">코드상세내용</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="codeList" items="${codeList}">
				<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
					<td style="width:20%;">${codeList.cd_grp_id}</td>
					<td style="width:15%;" id="code">${codeList.code}</td>
					<td style="width:20%;" id="cd_nm">${codeList.cd_nm}</td>
					<td style="width:20%;">${codeList.cd_seq_num}</td>
					<td style="width:25%;">${codeList.cd_dtl_cont}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
</body>
</html>