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
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<title>개인 고객</title>
</head>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/d3.min.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
<script type="text/javascript">
</script>
<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>
<body>
<form action="" method="get" id="listForm" >
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="schAddFlg" value="${schAddFlg}">
	<input type="hidden" id="count" value="">
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 영업 > 영업기회</h3>
		</div>
	</div>
		   <div class="search_div" id="search_div" >
			   <div class="ui left icon input">
					<input type="text" placeholder="영업기회명"  style="width:325px;" onkeypress="opptSearchInput(event);" id="ssales_oppt_nm" name="ssales_oppt_nm" value="${ssales_oppt_nm}">
					<i class="database icon"></i>
			   </div>	
			   <div class="ui left icon input">
					<input type="text" placeholder="고객명"  id="scust_nm" name="scust_nm" value="${scust_nm}">
					<i class="users icon"></i>
				    <input type="hidden" id="scust_id" name="scust_id" value="${scust_id}">
			   </div>	
				    <input type="button" class="tiny ui orange basic button" id="searchCustomer" value="고객">
				  <select name="ssales_lev_cd" id="ssales_lev_cd_select" style="height: 35px; background: #fff;">
				    	<option value="">영업기회단계</option>
				      	<c:forEach items="${otllist}" var="list">
							<option value="${list.code}" >${list.cd_nm}</option>
						</c:forEach>
				    </select>
			    	<select class="semanticUiComboBox" name="spsblty_rate" id="spsblty_rate_select" style="height: 35px; background: #fff;">
			    		<option class="item" value="">가능성</option>
			      		<option class="item" value="10">10</option>
			      		<option class="item" value="20">20</option>
			      		<option class="item" value="30">30</option>
			      		<option class="item" value="40">40</option>
			      		<option class="item" value="50">50</option>
			      		<option class="item" value="60">60</option>
			      		<option class="item" value="70">70</option>
			      		<option class="item" value="80">80</option>
			      		<option class="item" value="90">90</option>
			      		<option class="item" value="100">100</option>
			      	</select>

					<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
			
			    <input type="button"  class="tiny tiny ui orange button" id="searchlist" onclick="javascript:searchBtn('${pageNum}');" style="text-align: right;" value="조회">
		    </div>		
			<div id="tableline">	 
				<table id="goaltable" class="ui celled table" cellspacing="0" width="100%">
<!-- 				<table id="goaltable" class="tabtable"> -->
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
				<tbody id="listTable" class="tbody">
				<c:forEach items="${oplist}" var="list" begin="0" end="9">
					<tr id="${list.sales_oppt_id}">
						<td>
							<input type="checkbox" id="list_sales_oppt_id" name="list_sales_oppt_id" value="${list.sales_oppt_id}" onclick="chkCancel();">
							<input type="hidden" id="list_cust_id" value="${list.cust_id}">
							<input type="hidden" id="list_sales_lev_cd" value="${list.sales_lev_cd}">
							
						</td>
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
		<div class="bottom_div">
			<div class="functionBtn_div">
		    	<input type="button" class="tiny tiny ui orange button" value="추가" onclick="AddCustomerOpen();">
				<input type="button" class="tiny tiny ui orange button" value="삭제" onclick="opptDelete();" >
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
		        		<a href="javascript:opportunityList(${page.prevPageNum})" class="icon item">
		        			<i class="left chevron icon"></i>
		        		</a>
		    		</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
						<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:opportunityList('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:opportunityList('${i}');" class="item">${i}</a>
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
		       			<a href="javascript:opportunityList(${page.nextPageNum})"  class="icon item" >
		       				<i class="right chevron icon"></i>
		       			</a>
		    		</c:when>
				</c:choose>
			</div>
		</div>
	</form>	
	</body>
</html>