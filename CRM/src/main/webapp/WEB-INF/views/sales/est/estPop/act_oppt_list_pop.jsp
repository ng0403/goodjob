<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_list_pop.css" type="text/css" /> --%>

<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estOppt_pop.js"></script>
<title>영업기회 리스트</title>
</head>
<body class="body">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">
			<label class="label_header" >■ 영업기회 리스트</label>
		</div>
		
		<div class="act_oppt_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield">
				    <option value="oppt_id">영업기회ID</option>
					<option value="oppt_nm">영업기회명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="act_oppt_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="act_oppt_list_bt">검색</button>
			</form>
		</div>
	
	<div class="custcomp_iuser_list_div">	<!-- class="act_oppt_list_div" -->
		<table id="act_oppt_list_table" class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header">
					<td class="thead_th">영업기회ID</td>
					<td class="thead_th">영업기회명</td>
					<td class="thead_th">영업단계</td>
					<td class="thead_th">예상매출액</td>
					<td class="thead_th">예상마감일자</td>
					<td class="thead_th">가능성(%)</td>
					<td class="thead_th">상태</td>
					<td class="thead_th">등록자</td>
					<!-- <td style="width:10%;">등록일시</td> -->
					
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="actOpptList" items="${actOpptList}"> 
				<tr class="up">
					<td class="tbody_tr_td" id="sales_oppt_id">${actOpptList.sales_oppt_id}</td>
					<td class="tbody_tr_td" id="sales_oppt_nm">${actOpptList.sales_oppt_nm}</td>
					<td class="tbody_tr_td">${actOpptList.sales_lev_cd_nm}</td>
					<td class="tbody_tr_td">${actOpptList.expt_sales_amt}</td>
					<td class="tbody_tr_td">${actOpptList.expt_fin_d}</td>
					<td class="tbody_tr_td">${actOpptList.psblty_rate}</td>
					<td class="tbody_tr_td">${actOpptList.sales_oppt_stat_cd_nm}</td>
					<td class="tbody_tr_td">${actOpptList.fst_reg_id}</td>
					<%-- <td style="width:10%;"><fmt:formatDate value="${actOpptList.fst_reg_dt}" pattern="yyyy-MM-dd"/></td> --%>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>