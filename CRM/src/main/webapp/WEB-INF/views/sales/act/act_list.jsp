﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act02.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

	
<title>영업활동</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="actPageNum" value="${actPageNum}">
	<input type="hidden" id="act_flg" value="${act_flg}">
	
	<div id="title">
		<div class="caption">
			<label id="listLabel" class="ui header">■ 영업활동 > 영업활동관리</label>
<!-- 			<h3 class="ui header" style="background: #fff;">■ 영업활동 > 영업활동관리</h3> -->
		</div>
	</div>
	
	<div id="dboardbody">
		<div class="search_div" id="search_div" >
			<!-- 시작일자 검색 -->
			<div class="ui left icon input">
				<input type="text" placeholder="시작일자" id="ssale_actvy_strt" class="ssale_actvy_strt" style="width: 100px;" readonly="readonly"> 
			</div>
			&nbsp;&nbsp;
			<div class="ui left icon input">
				<select class="ssales_actvy_type_cd" name="sactvy_type_select" id="sactvy_type_select" style="height: 35px; background: #fff;">
					<option value="">활동유형</option>
					<c:forEach var="actTypeCd" items="${actTypeCd}">
						<option value="${actTypeCd.sales_actvy_type_cd}">${actTypeCd.sales_actvy_type_nm}</option>
					</c:forEach>
				</select>
			</div>
			<div class="ui left icon input">
				<input type="text" placeholder="영업활동명" id="ssales_actvy_nm">
			</div>
			<div class="ui left icon input">
				<input type="text" placeholder="영업기회명"  style="width:180px;" onkeypress="opptSearchInput(event);" id="ssales_oppt_nm" name="ssales_oppt_nm" value="${ssales_oppt_nm}" readonly="readonly">
			</div>
			<input type="button" class="tiny ui blue basic button" id="sact_opp_nm" value="영업기회">
			<div class="ui left icon input">
					<input type="text" placeholder="고객명"  id="scust_nm" name="scust_nm" value="${scust_nm}" readonly="readonly">
				    <input type="hidden" id="scust_id" name="scust_id" value="${scust_id}">
			</div>	
			<input type="button" class="tiny ui blue basic button" id="customer" value="고객">
				  	
			<label id="schActAddBtn" class="tiny ui button" onclick="addSearchActForm();">+</label>
			
			<input type="button"  class="tiny ui blue button" id="searchlist" onclick="javascript:searchActBtn('${actPageNum}');" style="text-align: right;" value="조회">
		</div>
			
		<div class="tableline">
			<input type="hidden" id="order_by" name="order_by" value="${data.order_by}"/>
			<input type="hidden" id="order_sc" name="order_sc" value="${data.order_sc}"/>
			<table id="dboardtable" class="ui celled table">
				<thead>
					<tr>
						<th rowspan="2" style="width: 2%; text-align: center;"><input id="actCheck" type="checkbox" onclick="actAllChk(this);" /></th>
						<th rowspan="2" style="width: 15%;" onclick="setOrder('sales_actvy_nm','${actPageNum}')">영업활동명</th>
						<th rowspan="2" style="width: 23%;" onclick="setOrder('sales_oppt_nm','${actPageNum}')">영업기회명</th>
						<th rowspan="2" style="width: 10%;" onclick="setOrder('sales_actvy_type_cd','${actPageNum}')">활동유형</th>
						<th style="width: 10%;" onclick="setOrder('strt_d','${actPageNum}')">시작일자</th>
						<th style="width: 10%;" onclick="setOrder('strt_t','${actPageNum}')">시작시간</th>
						<th rowspan="2" style="width: 5%;" onclick="setOrder('sales_actvy_stat_cd','${actPageNum}')">상태</th>
					</tr>
					<tr>
						<th style="width: 10%;" onclick="setOrder('end_d','${actPageNum}')">종료일자</th>
						<th style="width: 10%;" onclick="setOrder('end_t','${actPageNum}')">종료시간</th>
					</tr>
				</thead>
				<tbody id="act_list_tbody" class="tbody">
					<c:forEach items="${actList}" var="actList">
						<tr>
							<td rowspan="2">
								<input type="checkbox" class="act_chek" name="act_del" value="${actList.sales_actvy_id}" onclick="actChkCancel();">
							</td>
							<td style="text-align: left; padding-left: 5px;" rowspan="2" class="act_nm_tag">
								<input type="hidden" value="${actList.sales_actvy_id}" id="hi_act_id">
								<a style="color: blue; cursor: pointer;" onclick="actDetail('${actList.sales_actvy_id}','${act_flg}')">${actList.sales_actvy_nm}</a> <!-- class="actClick"  -->
							</td>
							<td style="text-align: left; padding-left: 5px;" rowspan="2" class="act_oppt_tag">${actList.sales_oppt_nm}</td>
							<td style="text-align: center;" rowspan="2" class="act_type_tag">${actList.sales_actvy_type_cd}</td>
							<td style="text-align: center;" class="act_starth_tag">${actList.strt_d}</td>
							<td style="text-align: center;" class="act_startm_tag">${actList.strt_t}</td>
							<td style="text-align: center;" rowspan="2" class="act_stat_tag">${actList.sales_actvy_stat_cd}</td>
						</tr>
						<tr>
							<td style="text-align: center;" class="act_endh_tag">${actList.end_d}</td>
							<c:if test="${actList.end_t eq '0:0'}">
								<td style="text-align: center;" class="act_endm_tag"></td>
							</c:if>
							<c:if test="${actList.end_t != '0:0'}">
								<td style="text-align: center;" class="act_endm_tag">${actList.end_t}</td>
							</c:if>
							
						</tr>
						</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
	
	<div class="bottom_div">
	<!-- 페이징 처리 -->
		<div id="pageSpace" class="ui right floated pagination menu">
			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="actPageNum" value="${actPageNum}">
			<c:choose>
				<c:when test="${actPageNum eq page.firstPageCount}">
						<a class="icon item">
	       					<i class="left chevron icon"></i>
	       				</a>	
	    		</c:when>
				<c:when test="${actPageNum ne page.firstPageCount}">
	       			<a href="javascript:searchActSaleList(${page.prevPageNum})" class="icon item">
	       				<i class="left chevron icon"></i>
	       			</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq ccPageNum }">
						<b>
							<a  href="javascript:searchActSaleList('${i}');" id="pNum" class="item">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:searchActSaleList('${i}');" class="item" >${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${actPageNum eq page.totalPageCount}">
					<a class="icon item">
	      				<i class="right chevron icon"></i>
	       			</a>	
	    		</c:when>
				<c:when test="${actPageNum ne page.totalPageCount}">
	      			<a href="javascript:searchActSaleList(${page.nextPageNum})" class="icon item">
	      				<i class="right chevron icon"></i>
	       			</a>
	    		</c:when>
			</c:choose>
		</div>
		
		<div id="functionBtn_div">
	    	<input type="button" class="tiny ui button" value="등록" onclick="actInsertForm('${act_flg}');" />
	    	<input type="button" class="tiny ui blue button" value="삭제" id="act_del_btn" />
	    	<input type="button" class="tiny ui blue button" value="삭제된 데이터" onclick="delActListOpen()">
	    </div>
	</div>
</body>
</html>