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
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptProd_pop.js"></script>
<title>상품 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<!-- 		<div class="caption">■ -->
		<h3 class="ui header" style="background: #fff; padding-top: 10px;">■ 상품 리스트</h3>
<!-- 		 </div> -->
		
			<form name="prodSearch" method="get" action="">			
				<select name="keyfield">
					<option value="pt_id">상품ID</option>
					<option value="pt_nm">상품명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="custcomp_list_txt"> &nbsp;
				<button id="prod_search_btn" type="submit" class="tiny ui button">검색</button>
			</form>
		</div>
	
	
	<div class="product_list_div">
		<table id="oppt_product_list_table" class="ui celled table">
			<thead>
				<tr>
					<th style="width:30%;">상품ID</th>
					<th style="width:30%;">상품명</th>
					<th style="width:30%;">상품가격</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="list" items="${prodList}"> 
				
				<tr>
					<td style="width:30%;" id="prod_id">${list.prod_id}</td>
					<td style="width:30%;" id="prod_nm">${list.prod_nm}</td>
					<td style="width:30%;" id="prod_price">${list.prod_price}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	

</body>
</html>