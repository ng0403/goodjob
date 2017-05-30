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

<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estCust_pop.js"></script>
<title>고객사 리스트</title>
</head>
<body class="body">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="flg" value="${flg}"/>
	<div id="title">
		<div class="caption">
			<label class="label_header" >■ 고객사 리스트</label>	
		</div>
		
		<div>	<!-- class="custcomp_list_search" -->
			<form name="searchForm" method="post" action="${ctx}/custcompList">
				<select name="keyfield">
					<option value="ct_id">고객ID</option>
					<option value="ct_nm">고객명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
				<button id="search_btn" type="submit" class="search_button">검색</button>
			</form>
		</div>
	
	<div class="custcomp_iuser_list_div"> <!-- class="custcomp_list_div" -->
		<table id="custcomp_list_table" class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<td class="thead_th">고객ID</td>
					<td class="thead_th">고객명</td>
					<td class="thead_th">고객구분</td>
					<td class="thead_th">기업상태</td>
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="custcompList" items="${custcompList}"> 
				<tr class="up">
					<td class="tbody_tr_td" id="cust_id">${custcompList.cust_id}</td>
					<td class="tbody_tr_td" id="cust_nm">${custcompList.cust_nm}</td>
					<td class="tbody_tr_td">${custcompList.cust_div_cd}</td>
					<td class="tbody_tr_td">${custcompList.stat_cd}</td>		
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>