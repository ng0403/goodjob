<!-- 송영화 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/prod_list_pop.css"> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estProd_pop.js"></script>

<%-- <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css"> --%>
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>상품 리스트</title>
</head>
<body class="body">
<div style="width: 98%; padding-left: 10px;">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title" style="padding-bottom: 10px;">
		<div class="caption">
			<label class="label_header" >■ 영업기회 리스트</label>
		</div>
<!-- 		<h3 class="ui header" style="background: #fff; padding-top: 10px;">■ 상품 리스트</h3> -->
		
			<form name="prodSearch" method="get" action="">			
				<select name="keyfield" style="background: #fff;">
					<option value="pt_id">상품ID</option>
					<option value="pt_nm">상품명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
				<button id="prod_search_btn" type="submit" class="act_oppt_list_bt">검색</button>
			</form>
		</div>
	
	
	<div class="custcomp_iuser_list_div">	<!-- class="product_list_div" -->
		<table id="product_list_table" class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<th class="thead_th">상품ID</td>
					<th class="thead_th">상품명</td>
					<th class="thead_th">상품가격</td>
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="list" items="${prodList}"> 
					<tr class="up">
						<td class="tbody_tr_td" id="prod_id">${list.prod_id}</td>
						<td class="tbody_tr_td" id="prod_nm">${list.prod_nm}</td>
						<td class="tbody_tr_td" id="prod_price">${list.prod_price}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</div>	

</body>
</html>