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
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptProd_pop.js"></script>

<%-- <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/sales/custcomp/custcomp_pop_product.css"> --%>
<%-- <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css"> --%>
<title>상품 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div id="title" class="title">
			<label class="label_header" >■ 상품 리스트</label>
		</div> 
<!-- 		<div class="caption">■ -->
<!-- 			<h3 class="ui header" style="background: #fff; padding-top: 10px;">■ 상품 리스트</h3> -->
<!-- 		</div> -->
		
			<form name="prodSearch" method="get" action="">			
				<select name="keyfield" class="select">
					<option value="pt_id">상품ID</option>
					<option value="pt_nm">상품명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
				<button id="prod_search_btn" type="submit" class="search_button">검색</button>
			</form>
		</div>
	
	
	<div> <!-- class="product_list_div"s -->
		<table id="oppt_Detail_product_list_table"  class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<th class="thead_th">상품ID</th>
					<th class="thead_th">상품명</th>
					<th class="thead_th">상품가격</th>
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
	

</body>
</html>