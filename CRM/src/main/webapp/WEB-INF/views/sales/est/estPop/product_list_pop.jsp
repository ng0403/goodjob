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

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/oppt_prod_pop.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>상품 리스트</title>
</head>
<body>
<div style="width: 98%; padding-left: 10px;">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title" style="padding-bottom: 10px;">
<!-- 		<div class="caption">■ 상품 리스트</div> -->
		<h3 class="ui header" style="background: #fff; padding-top: 10px;">■ 상품 리스트</h3>
		
			<form name="prodSearch" method="get" action="">			
				<select name="keyfield" style="background: #fff;">
					<option value="pt_id">상품ID</option>
					<option value="pt_nm">상품명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
				<button id="prod_search_btn" type="submit" class="tiny ui button">검색</button>
			</form>
		</div>
	
	
	<div class="product_list_div">
		<table id="oppt_product_list_table" class="ui celled table">
			<thead>
				<tr>
					<th style="width:30%;">상품ID</td>
					<th style="width:30%;">상품명</td>
					<th style="width:30%;">상품가격</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="list" items="${prodList}"> 
					<tr>
						<td style="width:30%; cursor: pointer;" id="prod_id">${list.prod_id}</td>
						<td style="width:30%;" id="prod_nm">${list.prod_nm}</td>
						<td style="width:30%;" id="prod_price">${list.prod_price}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</div>	

</body>
</html>