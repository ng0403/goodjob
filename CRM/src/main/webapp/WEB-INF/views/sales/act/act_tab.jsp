<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="actDetail" value="${actDetail}" />
<c:set var="flg" value="${flg}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail2.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptProd_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	

<style type="text/css">
.ui-datepicker{ font-size: 13px; width: 300px;}
.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

<script type="text/javascript">
	$(document).ready(function() {
		var sales_actvy_id = $("#nowSales_actvy_id").val();
		
		$('#salesId').val(sales_actvy_id);

	});
</script>

</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowSales_actvy_id" value=""/>
	<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">영업기회</label> 
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<div class="bt_position_authuser" style="float: right;">
				<input type="button" id="actAddSaveBtn" class="act_bt" value="영업기회 등록" onclick="opptInsertPop('${ctx}')"/>
				<input type="button" id="actAddCancelBtn" class="act_bt" value="삭제" onclick="actOpptDelBt();"/>
			</div>
			
			<!-- form -->
			<div id="tableline">
				<table id="goaltable" class="tabtable">
					<thead>
						<tr>
							<th style="width: 3%;"><input type="checkbox"  id='actAllSelect'/></th>
							<td style="width: 20%;">영업기회명</td>
							<td style="width: 8%;">고객사</td>
<!-- 							<td style="width: 6%;">상태</td> -->
							<td style="width: 8%;">영업단계</td>
							<td style="width: 8%;">가능성</td>
							<td style="width: 10%;">등록자</td>
							<td style="width: 10%;">등록일시</td>
						</tr>
					</thead>
					<tbody id="activeOpptList">
						<c:forEach items="${opptList}" var="opptList">
							<c:if test="${not empty opptList}">
								<tr id="${opptList.sales_oppt_id}">
									<th>
										<input type="checkbox"  id="actAllSelect" name="sales_oppt_id" value="${opptList.sales_oppt_id}"/>
									</th>
										<td>
											<a onclick="opptTabDetail('${ctx}','${opptList.sales_oppt_id}');" id="list_sales_oppt_nm" href="#" style="text-decoration: none;" >${opptList.sales_oppt_nm}</a>
										</td>
										<td>${opptList.cust_nm}</td>
										<td>${opptList.sales_lev_cd_nm}</td>
<%-- 										<td style="text-align: right; padding-right:5px;">${opptList.}</td> --%>
										<td>${opptList.expt_sales_amt}</td>
										<td>${opptList.fst_reg_id}</td>
										<td>${opptList.fst_reg_dt}</td>
								</tr>
							</c:if>
							<c:if test="${empty opptList}">
								<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
							</c:if>
						</c:forEach>
						
					</tbody>
					</table>
			</div>
			<!-- /form -->
		</div>
		
</div>
</body>
</html>


