<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_list_pop.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estOppt_pop.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custEstOppt_pop.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/sales/custcomp/custcomp_pop_oppt.css">
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>


<title>영업기회 리스트</title>
</head>
<body>
<div style="width: 98%; padding-left: 10px;">

	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
<!-- 		<div class="caption">■ 영업기회 리스트</div> -->
		<h3 class="ui header" style="background: #fff; padding-top: 10px; padding-left: 10px;">■ 영업기회 리스트</h3>
		
		<div class="act_oppt_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield">
				    <option value="oppt_id">영업기회ID</option>
					<option value="oppt_nm">영업기회명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText" style="background: #fff;"> &nbsp;
				<button id="search_btn" type="submit" class="tiny ui orange button" style="margin-bottom: 10px;">검색</button>
			</form>
		</div>
	
	<div class="act_oppt_list_div">
		<table id="cust_oppt_list_table" class="ui celled table" style="margin-bottom: 10px;">
			<thead>
				<tr>
					<th style="width:107px;">영업기회ID</td>
					<th style="width:179px;">영업기회명</td>
					<th style="width:81px;">영업단계</td>
					<th style="width:130px;">예상매출액</td>
					<th style="width:101px;">예상마감일자</td>
					<th style="width:72px;">가능성(%)</td>
					<th style="width:82px;">상태</td>
					<th style="width:91px;">등록자</td>
					<!-- <td style="width:10%;">등록일시</td> -->
					
				</tr>
			</thead>
			<tbody>
				<c:forEach var="actOpptList" items="${estActOpptList}"> 
				<tr>
					<td style="width:10%; cursor: pointer;" id="sales_oppt_id">${actOpptList.sales_oppt_id}</td>
					<td style="width:20%;" id="sales_oppt_nm">${actOpptList.sales_oppt_nm}</td>
					<td style="width:10%; text-align: center;">${actOpptList.sales_lev_cd_nm}</td>
					<td style="width:15%; text-align: right; padding-right: 10px;">${actOpptList.expt_sales_amt}</td>
					<td style="width:12%; text-align: center;">${actOpptList.expt_fin_d}</td>
					<td style="width:9%; text-align: center;">${actOpptList.psblty_rate}</td>
					<td style="width:10%;">${actOpptList.sales_oppt_stat_cd_nm}</td>
					<td style="width:9%;">${actOpptList.fst_reg_id}</td>
					<%-- <td style="width:10%;"><fmt:formatDate value="${actOpptList.fst_reg_dt}" pattern="yyyy-MM-dd"/></td> --%>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>
</div>
</body>
</html>