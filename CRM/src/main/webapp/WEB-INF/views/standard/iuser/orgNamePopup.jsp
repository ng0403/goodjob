<!-- 
업 무 명 : 조직 검색을 위한 팝업창 제작
작 성 자 : 이지용
작 성 일 : 2017/05/18
수 정 자 : 
수 정 일 : 
내    용 : 팝업창안에 조직 리스트와 검색기능이 있음.
 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>조직 팝업창</title>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/iuser/orgNamePopup.js"></script>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/orgNamePopup.css" type="text/css" /> --%>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" /> --%>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
</head>
<body style="overflow:hidden; ">
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 조직 검색창</h3>
</div>
<div class="bt_position_popup">
		<form name="searchForm" method="post" action=""style="padding: 5px;width: 70%;">
			<select name="keyfield">
				<option value="o_name">조직이름</option>
				<option value="o_id">조직ID</option>
				<option value="r_id">대표사원ID</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="tiny tiny ui orange button">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post" action="" >
	<div>
		<table  class="ui celled table" style="margin: 0px;margin-left: 5px;margin-right: 5px;">
				<tr>
					<th style="width:25%; text-align: center;">조직ID</th>
					<th style="width:25%; text-align: center;">조직이름</th>
					<th style="width:25%; text-align: center;">대표사원ID</th>
					<th style="width:25%; text-align: center;">조직유형ID</th>
				</tr>
		</table>
	</div>
	<div style="height: 120px; overflow: auto; overflow-x: hidden;border-bottom: solid 1px;border-bottom-color: rgba(34, 36, 38, 0.1);">
		<table id="mastertable" style="text-align: center;margin-left: 5px;margin-right: 5px; overflow: auto; height: 100px !important;">
			<tbody>
				<c:forEach var="orgList" items="${orgList}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<td style="width:25%;" id="org_id">${orgList.org_id}</td>
					<td style="width:25%;" id="org_nm">${orgList.org_nm}</td>
					<td style="width:25%;">${orgList.rep_emp_id}</td>
					<td style="width:25%;">${orgList.org_type_id}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>	
		</form>
	</div>
	<br>
</body>
</html>