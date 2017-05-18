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
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptCust_pop.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<title>고객사 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="custType" value="${custType}"/>
	<input type="hidden" id="custFlg" value="${pop_flg}"/>
	<div id="title" style="padding-left: 30px;padding-top: 10px;">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 고객사 리스트</h3>
		</div>
		
			<form name="searchForm" method="get" action="">			
				<select name="keyfield">
					<option value="ct_id">고객ID</option>
					<option value="ct_nm">고객명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="custcomp_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="tiny ui orange button">검색</button>
			</form>
	</div>
	
	
	<div class="custcomp_list_div" style="padding: 30px;">
		<table id="custcomp_list_table" class="ui celled table">
		<thead>
				<tr>
					<th>고객ID</th>
					<th>고객명</th>
				</tr>
		</thead>
		<tbody>
			<c:forEach var="custcompList" items="${custcompList}"> 
				<tr>
					<td id="cust_id">${custcompList.cust_id}</td>
					<td id="cust_nm">${custcompList.cust_nm}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>

</body>
</html>