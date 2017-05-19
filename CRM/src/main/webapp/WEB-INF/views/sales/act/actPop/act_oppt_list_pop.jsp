<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_list_pop.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>영업기회 리스트</title>
</head>
<body>
<!-- <div style="width: 98%; padding-left: 10px;"> -->
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff; padding: 10px;">■ 영업기회 리스트</h3>
		</div>
		
		<div class="act_oppt_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield" style="background: #fff;">
				    <option value="oppt_id">영업기회ID</option>
					<option value="oppt_nm">영업기회명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
				<button id="search_btn" type="submit" class="tiny ui orange button">검색</button>
			</form>
		</div>
	
	<div class="act_oppt_list_div">
		<table id="act_oppt_list_table" class="ui celled table" style="overflow: auto;">
			<thead>
				<tr>
					<th style="width:13.36%;">영업기회ID</th>
					<th style="width:19.6%;">영업기회명</th>
					<th style="width:9.8%;">영업단계</th>
					<th style="width:14.8%;">예상매출액</th>
					<th style="width:14.8%;">예상마감일자</th>
					<th style="width:9.8%;">가능성(%)</th>
					<th style="width:9.8%;">상태</th>
					<th>등록자</th>
					<!-- <td style="width:10%;">등록일시</td> -->
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="actOpptList" items="${actOpptList}"> 
				<tr>
					<td style="width:13.56%;" id="sales_oppt_id">${actOpptList.sales_oppt_id}</td>
					<td style="width:20%;" id="sales_oppt_nm">${actOpptList.sales_oppt_nm}</td>
					<td style="width:10%;">${actOpptList.sales_lev_cd}</td>
					<td style="width:15%;">${actOpptList.expt_sales_amt}</td>
					<td style="width:15%;">${actOpptList.expt_fin_d}</td>
					<td style="width:10%;">${actOpptList.psblty_rate}</td>
					<td style="width:10%;">${actOpptList.sales_oppt_stat_cd}</td>
					<td>${actOpptList.fst_reg_id}</td>
					<%-- <td style="width:10%;"><fmt:formatDate value="${actOpptList.fst_reg_dt}" pattern="yyyy-MM-dd"/></td> --%>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>
<!-- </div> -->
</body>
</html>