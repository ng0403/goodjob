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
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptCust_pop.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/saleIuserList.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custPosPop.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/sales/custcomp/custcomp_pop.css">

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>


<title>고객사 리스트</title>
</head>
<body>
<div>
<div style="width: 98%; padding-left: 10px;">

	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="iuserType" value="${iuserType}"/>
	<div id="title">
<!-- 		<div class="caption">■ 직원 리스트</div> -->
		<h3 class="ui header" style="background: #fff; padding-top: 10px; padding-left: 10px;">■ 직원 리스트</h3>
		
			<form name="searchForm" method="get" action="">			
				<select name="keyfield">
					<option value="ct_id">직원ID</option>
					<option value="ct_nm">직원명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText" style="background: #fff; width: 20%;"> &nbsp;
				<button id="search_btn" type="submit" class="tiny ui button" style="margin-bottom: 10px;">검색</button>
			</form>
		</div>
	
	
	<div class="custcomp_iuser_list_div" style="margin-bottom: 10px;">
		<table id="custcomp_iuser_list_table" class="ui celled table">
			<thead>
				<tr>
					<th style="width:138px;">직원ID</td>
					<th style="width:173px;">직원명</td>
					<th style="width:173px;">연락처</td>
					<th style="width:224px;">이메일</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="iuserList" items="${iuserList}"> 
				<tr>
					<td style="width:20%; cursor: pointer;" id="iuser_id" >${iuserList.iuser_id}</td>
					<td style="width:25%;" id="iuser_nm">${iuserList.iuser_nm}</td>
					<td style="width:25%;" id="cell_ph">${iuserList.cell_ph1} - ${iuserList.cell_ph2} - ${iuserList.cell_ph3}</td>
					<td style="width:30%;" id="email">${iuserList.email1}@${iuserList.email2}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>
</div>
</body>
</html>