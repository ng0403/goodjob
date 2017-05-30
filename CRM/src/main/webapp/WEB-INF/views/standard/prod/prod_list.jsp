<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<!-- <link rel="stylesheet" -->
<%-- 	href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/prod/prod.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_detail.js"></script>
<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>
<script type="text/javascript">
$("#navisub11").show();
$("#naviprod").css("font-weight", "bold");
</script>
<title>상품(서비스)</title>
</head>
<body style="overflow: auto;">
	<form id="prod_detail">
		<input type="hidden" name="prod_id" id="prod_id">
	</form>
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 기준정보  > 상품/서비스</h3>
		</div>
	</div>
	<div class="search_div">
		<div class="ui left icon input">
			<input type="text" placeholder="상품(서비스)명" id="sprod_nm" class="sprod_nm">
			<i class="industry icon"></i>
		</div>
	    <div class="ui left icon input">
			<select name="code" id="scode" class="code">
				<option value="">구분</option>
				<option value="all">전체</option>
				<c:forEach var="pscl" items="${prodServicecCodeList}">
					<option value="${pscl.code}">${pscl.cd_nm}</option>
				</c:forEach>
			</select>
		</div>
		<input type="button" id="prod_search"  class="tiny ui blue button" value="조회" onclick="prodSearch('${ccPageNum}');" />
		
<!-- 		<label for="prod_nm" class="prod_label_search">상품(서비스)명</label> -->
<!-- 		<input type="text" placeholder="상품(서비스)명" autofocus="autofocus" id="sprod_nm" class="sprod_nm"> -->
<!-- 	    <label for="prod_div" class="prod_label_search">구분</label> -->
<!-- 		<select name="code" id="scode" class="code"> -->
<!-- 			<option value="">=======</option> -->
<!-- 			<option value="all">전체</option> -->
<%-- 			<c:forEach var="pscl" items="${prodServicecCodeList}"> --%>
<%-- 				<option value="${pscl.code}">${pscl.cd_nm}</option> --%>
<%-- 			</c:forEach> --%>
<!-- 		</select> -->
<!-- 		<input type="button" id="prod_search" class="btn-success-tel" value="조회" onclick="prodSearch(1);" /> -->
<!-- 			    <button id="search_btn" type="submit" class="act_bt">조회</button>  -->
	</div>	  	
	<div id="tableline">
		<table id="act_list_table" class="ui sortable celled table" cellspacing="0" width="100%">
			<thead>
				<tr>
					<th style="text-align: center;"><input type="checkbox"  id='prodListCheck'/></th>
					<th id="tblTh" >상품(서비스)명</th>
					<th id="tblTh" >구분</th>
					<th id="tblTh" >판매가</th>
					<th id="tblTh" >카테고리</th>
					<th id="tblTh" >등록자</th>
					<th id="tblTh" >등록일시</th>
				</tr>
			</thead>
			<tbody id="prod_list">
				<c:forEach items="${prodList}" var="prodList">
					<tr>
						<td style="text-align: center;"><input type="checkbox" value="${prodList.prod_id}" onclick="javascript:chkCancel();"></td>
						<td id="list_prod_id">
							<a class="list_prod_id" style="color: blue;" href="javascript:prodIdClick('${prodList.prod_id}');">${prodList.prod_nm}</a>
						</td>
						<td>${prodList.cd_nm}</td>
						<td style='text-align: right;'><fmt:formatNumber value="${prodList.prod_price}" /></td>
						<td>${prodList.cate}</td>
						<td>${prodList.fst_reg_id}</td>
						<td>
							<fmt:formatDate value="${prodList.fst_reg_dt}" type="time" pattern="yyyy-MM-dd HH:mm:ss"/></td>
							<%-- <td >${prodList.fst_reg_dt}</td> --%>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	<div class="bottom_div">
		<div class="functionBtn_div">
			<input type="button" id="prodAddBtn" class="tiny ui blue button" value="추가"/>
			<input type="button" id="prodDeleteBtn" class="tiny ui blue button" value="삭제">	
		</div>
				
	<!-- 페이징 처리 --> 
	<div id="pageSpace" class="ui right floated pagination menu">
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
		<input type="hidden" id="ccPageNum" value="${ccPageNum}">
		<c:choose>
			<c:when test="${ccPageNum eq page.firstPageCount}">
				<a class="icon item">
	    			<i class="left chevron icon"></i>
	        	</a>	
		    </c:when>
			<c:when test="${ccPageNum ne page.firstPageCount}">
		  		<a href="javascript:custCompList(${page.prevPageNum})" class="icon item">
		   			<i class="left chevron icon"></i>
		   		</a>
		  	</c:when>
		</c:choose>
		<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
			<c:choose>
				<c:when test="${i eq ccPageNum }">
				<b>
					<a href="javascript:custCompList('${i}');" id="pNum" class="item">${i}</a>
				</b>
				</c:when>
				<c:otherwise>
					<a href="javascript:custCompList('${i}');" class="item" >${i}</a>
				</c:otherwise>
			</c:choose>
		</c:forEach>
			<c:choose>
				<c:when test="${ccPageNum eq page.totalPageCount}">
					<a class="icon item">
	       				<i class="right chevron icon"></i>
        			</a>	
	    		</c:when>
				<c:when test="${ccPageNum ne page.totalPageCount}">
		       		<a href="javascript:custCompList(${page.nextPageNum})" class="icon item">
		       			<i class="right chevron icon"></i>
		      		</a>
		    	</c:when>
			</c:choose>
		</div>
	
	<!-- 페이징 처리 -->	
	</div>
</body>
</html>