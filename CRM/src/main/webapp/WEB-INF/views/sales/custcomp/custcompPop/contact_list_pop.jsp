<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/custcomp_list_pop.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/contJs.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/cont_pop.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/sales/custcomp/custcomp_pop_contact.css">
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>연락처 리스트</title>
</head>
<body >
<div style="width: 98%; padding-left: 10px;">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
<!-- 		<div class="caption">■ 연락처 리스트</div> -->
		<h3 class="ui header" style="background: #fff; padding: 10px;">■ 연락처 리스트</h3>
	</div>	
	<div class="custcomp_list_search" style="padding-bottom: 5px;">
		<form name="searchForm" method="post" action="${ctx}/custcompList">
			<select name="keyfield" style="background: #fff;">
				<option value="ct_id">고객ID</option>
				<option value="ct_nm">고객명</option>
			</select>
			<input  type="text"   id="search_text" class="inputText" name="keyword"  style="background: #fff;"> &nbsp;
			<button type="submit" id="search_btn"  class="tiny ui button">검색</button>
		</form>
	</div>
	
	<div class="custcomp_list_div">
		<table id="custcomp_list_table" class="ui celled table" style="overflow: auto;">
			<thead>
				<tr>
					<th style="width:127px;">연락처 ID</td>
					<th style="width:126px;">연락처명</td>
					<th style="width:173px;">연락처</td>
					<th style="width:282px;">이메일</td>
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="contactList" items="${contactList}"> 
					<tr>
						<td id="cont_id" style="width:15%; cursor: pointer;">${contactList.cont_id}</td>
						<td id="cont_nm" style="width:15%;" >${contactList.cont_nm}</td>
						<td id="cell_ph" style="width:20%;">${contactList.cell_ph1}-${contactList.cell_ph2}-${contactList.cell_ph3}</td>		
						<td id="email" style="width:30%;">${contactList.email1}@${contactList.email2}</td>		
					</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
</div>

</body>
</html>