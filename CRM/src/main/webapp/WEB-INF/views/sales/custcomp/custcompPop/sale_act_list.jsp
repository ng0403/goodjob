<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act02.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custPosPop.js"></script>
	
<title>영업활동</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" value="${actList.sales_actvy_id}" id="sales_actvy_id">
	<div id="title">
		<div class="caption">■ 영업활동</div>
	</div>
    
	<div id="dboardbody">
		<div class="search_div">
			<select class="act_tab_select" name="act_search_div_id" id="act_search_div_id" >
				<option value="0" style="text-align: center;">==선택==</option>
				<option value="ssales_actvy_nm">영업활동명</option>
				<option value="sales_oppt_nm">영업활동구분</option>
				<option value="sales_actvy_type_cd">영업활동상태</option>
			</select>
			<input type="text" class="act_txt_search" name="act_search_txt" id="act_search_txt" autofocus="autofocus" onkeydown="actSearchEnter(event);">
            <input type="button" id="search_btn" value="조회" class="act_bt" onclick="schActPaging(1);"/>
		</div>
	
		<form name="delForm" id="delForm" method="post" action="${ctx}/actDelete">
			<div>
				<table id="dboardtable">
					<thead>
						<tr>
							<th rowspan="2" style="width: 2%;"><input id="actCheck" type="checkbox" onclick="actAllChk(this);" /></th>
							<td rowspan="2" style="width: 15%;">영업활동명</td>
							<td rowspan="2" style="width: 10%;">활동구분</td>
							<td rowspan="2" style="width: 10%;">활동유형</td>
							<td rowspan="2" style="width: 5%;">상태</td>
						</tr>
					</thead>
					<tbody id="act_list_tbody" class="act_list_tbody">
						<c:forEach items="${slaeActOpptList}" var="actList">
							<tr>
								<th rowspan="2">
									<input type="checkbox" class="act_chek" name="act_del" value="${actList.sales_actvy_id}" onclick="actChkCancel();">
								</th>
								<td style="text-align: left; padding-left: 5px;" class="act_nm_tag" id="sales_actvy_nm" onclick="custSaleActSelect('${ctx}')">${actList.sales_actvy_nm}</td>
<%-- 								<input type="hidden" value="${actList.sales_actvy_id}" id="sales_actvy_id"> --%>
<%-- 								<input type="hidden" value="${actList.sales_actvy_nm}" id="sales_actvy_nm"> --%>
<%-- 									<a style="color: blue; cursor: pointer;" class="actClick">${actList.sales_actvy_nm}</a> --%>
								<td style="text-align: center;" rowspan="2" class="act_div_tag">${actList.sales_actvy_div_cd}</td>
								<td style="text-align: left; padding-left: 5px;" rowspan="2" class="act_oppt_tag">${actList.sales_actvy_type_cd}</td>
								<td style="text-align: center;" rowspan="2" class="act_type_tag">${actList.sales_actvy_stat_cd}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</form>
		
	</div>
<!-- 	<!-- 페이징 처리 --> 
<!-- 		<div id="directbtndiv"> -->
<%-- 			<input type="hidden" id="endPageNum" value="${page.endPageNum}" />  --%>
<%-- 			<input type="hidden" id="actPageNum" value="${actPageNum}" /> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${actPageNum == page.startPageNum}"> --%>
<!-- 					<a>◀ </a> -->
<%-- 					<input type="text" id="actPageInput" class="act_page_txt" value="${page.startPageNum}" onkeypress="pageInputAct(event);" /> --%>
<%-- 					<a href="#" onclick="actPaging('${page.endPageNum}')" style='text-decoration: none; color: blue;'>/${page.endPageNum}</a> --%>
<%-- 					<a href="#" onclick="actPaging('${actPageNum+1}')" style='text-decoration: none; color: blue;'>▶</a> --%>
<%-- 				</c:when> --%>
<%-- 				<c:when test="${actPageNum == page.endPageNum}"> --%>
<%-- 					<a href="#" onclick="actPaging('${actPageNum-1}')" style="text-decoration: none; color: blue;">◀ </a> --%>
<%-- 					<input type="text" id="actPageInput" class="act_page_txt" value="${page.endPageNum}" onkeypress="pageInputAct(event);" /> --%>
<%-- 					<a href="#" onclick="actPaging('${page.endPageNum}')"style='text-decoration: none; color: blue;'>/${page.endPageNum}</a> --%>
<!-- 					<a>▶</a> -->
<%-- 				</c:when> --%>
<%-- 				<c:otherwise> --%>
<%-- 					<a href="#" onclick="actPaging('${actPageNum-1}')" style="text-decoration: none; color: blue;">◀</a> --%>
<%-- 					<input type="text" id="actPageInput" class="act_page_txt" value="${actPageNum}" onkeypress="pageInputAct(event);" /> --%>
<%-- 					<a href="#" onclick="actPaging('${page.endPageNum}')" style='text-decoration: none; color: blue;'> /${page.endPageNum}</a> --%>
<%-- 					<a href="#" onclick="actPaging('${actPageNum+1}')" style="text-decoration: none; color: blue;">▶</a> --%>
<%-- 				</c:otherwise> --%>
<%-- 			</c:choose> --%>
<!-- 			<!-- 페이징 처리 --> 
		</div>
</body>
</html>