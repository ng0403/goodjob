<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ include file="/WEB-INF/views/sales/oppt/opptPublic.jsp" %>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptList.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<title>개인 고객</title>
</head>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/d3.min.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
<%-- <script src="${ctx}/resources/common/js/sales/oppt/opptChart.js"></script> --%>
<script type="text/javascript">
</script>
<body>
<form action="" method="get" id="listForm" >
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 영업기회</div></div>
		   <div class="search_div" >
			    <label for="scompNam" class="tel_label_list">영업기회명</label>
			      <input type="text" onkeypress="opptSearchInput(event);" class="tel_search" id="ssales_oppt_nm" name="ssales_oppt_nm" autofocus="autofocus" value="${ssales_oppt_nm}">
			    <label for="inputPassword1" class="tel_label_list" >고객명</label>
			      <input type="text" class="tel_search" id="scust_nm" name="scust_nm" value="${scust_nm}" readonly="readonly">
			      <input type="hidden" class="tel_search" id="scust_id" name="scust_id" value="${scust_id}">
			      <input type="button" class="btn-success-tel" id="searchCustomer" value="고객">
			    <label for="inputPassword1" class="tel_label_list" id="oppt_lev_label">영업단계</label>
			      <select class="tel_search" name="ssales_lev_cd" id="ssales_lev_cd_select">
			      		<option value="">선택</option>
			      		<c:forEach items="${otllist}" var="list">
						<option value="${list.code}" >${list.cd_nm}</option>
						</c:forEach>
			      </select>
			    <label for="inputPassword1" class="tel_label_list">가능성(%)</label>
			    	<select class="tel_search" name="spsblty_rate" id="spsblty_rate_select">
			    		<option value="">선택</option>
			      		<option value="10">10</option>
			      		<option value="20">20</option>
			      		<option value="30">30</option>
			      		<option value="40">40</option>
			      		<option value="50">50</option>
			      		<option value="60">60</option>
			      		<option value="70">70</option>
			      		<option value="80">80</option>
			      		<option value="90">90</option>
			      		<option value="100">100</option>
			      </select>
			    <input type="button"  class="btn-success-tel" id="searchlist" 
			    		onclick="javascript:searchBtn('${pageNum}');" value="조회">
		    </div>		
		    <div id="contact_button_position">
		    	<input type="button" class="btn-success-tel" value="추가" onclick="AddCustomerOpen();">
				<input type="button" class="btn-success-tel" value="삭제" onclick="opptDelete();" >
			</div>
		    
			<div id="tableline">	 
				<table id="goaltable" class="tabtable">
				<thead>
					<tr>
						<th style="width: 3%"><input type="checkbox"  id='opptAllSelect'/></th>
						<th style="width: 26%">영업기회명</th>
						<th style="width: 10%">고객명</th>
						<th style="width: 8%">영업단계</th>
						<th style="width: 10%">예상매출액</th>
						<th style="width: 10%">예상마감일자</th>
						<th style="width: 5%">가능성</th>
						<th style="width: 8%">상태</th>
						<th style="width: 8%">등록자</th>
						<th style="width: 12%">등록일시</th>
					</tr>
				</thead>
				<tbody id="listTable" >
				<c:forEach items="${oplist}" var="list" begin="0" end="9">
					<tr id="${list.sales_oppt_id}">
						<th>
							<input type="checkbox" id="list_sales_oppt_id" name="list_sales_oppt_id" value="${list.sales_oppt_id}" onclick="chkCancel();">
							<input type="hidden" id="list_cust_id" value="${list.cust_id}">
							<input type="hidden" id="list_sales_lev_cd" value="${list.sales_lev_cd}">
							
						</th>
						<td class="oppt_nm_class" style="text-align: left; padding-left:5px;" >
							<a onclick="divide('${list.sales_oppt_id}');" id="list_sales_oppt_nm" href="#" style="text-decoration: none;" >${list.sales_oppt_nm}</a>
						</td>
						<td id="list_cust_nm">${list.cust_nm}</td>
						<td>${list.sales_lev_cd_nm}</td>
						<td style="text-align: right; padding-right:5px;" ><fmt:formatNumber value="${list.expt_sales_amt}"/></td>
						
						<td>${list.expt_fin_d}</td>
						<td>${list.psblty_rate}</td>
						<td>${list.sales_oppt_stat_cd_nm}</td>
						<td>${list.fst_reg_id}</td>
						<td>${list.fst_reg_dt}</td>
					</tr>
				</c:forEach>
				</tbody>
			</table>
		</div>

		<!-- 페이징 처리 -->
		<div id="pageSpace">
			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="ccPageNum" value="${ccPageNum}">
			<c:choose>
				<c:when test="${ccPageNum eq page.firstPageCount}">
	        		<a class="prev">◀◀</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.firstPageCount}">
	        		<a href="javascript:opportunityList(${page.prevStepPage})" class="prev">◀◀</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${ccPageNum eq page.firstPageCount}">
	        		<a class="prev">◀</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.firstPageCount}">
	        		<a href="javascript:opportunityList(${page.prevPageNum})" class="prev">◀</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq ccPageNum }">
						<b>
							<a  href="javascript:opportunityList('${i}');" id="pNum" class="choice">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:opportunityList('${i}');">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${ccPageNum eq page.totalPageCount}">
	       			<a class="next">▶</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.totalPageCount}">
	       			<a href="javascript:opportunityList(${page.nextPageNum})" class="next">▶</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${ccPageNum eq page.totalPageCount}">
	       			<a class="next">▶▶</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.totalPageCount}">
	       			<a href="javascript:opportunityList(${page.nextStepPage})" class="next">▶▶</a>
	    		</c:when>
			</c:choose>
<!-- 			<div id="pageSpace"> -->
<%-- 			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/> --%>
<%-- 			<input type="hidden" id="pageNum" value="${pageNum}"> --%>
<%-- 			<c:choose> --%>
<%-- 			<c:when test="${pageNum == page.startPageNum && pageNum != page.endPageNum}"> --%>
<!-- 				<a id="pNum" style="text-decoration: none;"> ◀ </a> -->
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${page.startPageNum}" onkeypress="opptPageInput(event);"/><a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" >${page.endPageNum}</a> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum+1}');" id="pNum" style="text-decoration: none;"> ▶ </a> --%>
<%-- 			</c:when> --%>
<%-- 			<c:when test="${pageNum == page.endPageNum}"> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum-1}');" id="pNum" style="text-decoration: none;"> ◀ </a> --%>
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${page.endPageNum}" onkeypress="opptPageInput(event);"/> <a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" style="text-decoration: none;">${page.endPageNum}</a> --%>
<!-- 				<a id="pNum" style="text-align: none;"> ▶ </a> -->
<%-- 			</c:when> --%>
<%-- 			<c:otherwise> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum-1}');" id="pNum" style="text-decoration: none;"> ◀ </a> --%>
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${pageNum}" onkeypress="opptPageInput(event);"/><a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" style="text-decoration: none;">${page.endPageNum}</a> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum+1}');" id="pNum" style="text-decoration: none;"> ▶ </a> --%>
<%-- 			</c:otherwise> --%>
<%-- 			</c:choose> --%>
		</div>
	</form>	
	
		<!-- 영업기회 상태 차트  -->
	<div id="chart_oppt_status" style="margin-top: 5%;">
		<h1>영업기회 상태 현황</h1>
			<svg id="myGraph">
			</svg>
				<script src="${ctx}/resources/common/js/sales/oppt/opptChart.js"></script>
	</div> 
</body>
</html>