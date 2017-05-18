<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/call/comp_list_pop.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
  
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>


<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/call/call_pop.js"></script>--%>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/oppt_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomp_js.js"></script>  
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomptab_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_pop.js"></script>


<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_css.css" type="text/css" /> --%>




<title>키맨 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 키맨 리스트</div>
		
		<div class="comp_list_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield">
				    <option value="oppt_id">고객ID</option>
					<option value="oppt_nm">회사명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="comp_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="ui orange button">검색</button>
			</form>
		</div>
	
	<div class="comp_list_div">
		<!-- <table id="comp_list_table"> -->
		<table id="keyman_list_table" style="table-layout:fixed;">
		<thead>
				<tr>
					<th style="width:20%">고객ID</th>
					<th style="width:20%">역할</th>
					<th style="width:20%">직급</th>
					<th style="width:10%">직무</th>
					<th style="width:30%">메모</th>
 				</tr>
 		</thead>	
 				<tbody>
				<c:forEach var="kmVOList" items="${kmVOList}"> 
				<tr onclick="keyNmSelect('${kmVOList.cust_id}')">
					<td id="cust_id">${kmVOList.cust_id}</td>
					<td id="cust_nm">${kmVOList.key_part}</td>
					<td>${kmVOList.key_pos}</td>
					<td>${kmVOList.key_job}</td>
					<td>${kmVOList.memo}</td>
 				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>