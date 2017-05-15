<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptDetail.js"></script>
</head>

<script type="text/javascript">
$(document).ready(function() {
	var opptId =$('#hsales_oppt_id').val();
	var custId =$('#hcust_id').val();
	$('#salesId').val(opptId);
	viewSalesActive(opptId);
	estimList(opptId);
});

</script>
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<body>
	<input type="hidden" id="salesId" value="" >
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	
	<div id="css_tabs" >
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" />  -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" /> 

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">영업활동 </label> 
		<label for="tab2">견적</label> 

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
			<div id="tabDiv1" class="tab1_content">
			<div class="bt_position_authuser" style=" padding: 5px;">
				<button id="act_opp_nm" class="ui orange button">영업활동 추가</button>
				<button id="addkeymancancel" class="ui orange button" onclick="javascript:opptActiveDelete();">삭제</button>
			</div>
			
			<div id="tableline" class="FixHeader">
				<table id="goaltable" class="ui sortable celled table" cellspacing="0" width="100%">
					<thead>
						<tr class="headerLock">
							<th rowspan="2" style="width: 3% !important;"><input type="checkbox"  id='actAllSelect'/></th>
							<td rowspan="2" style="width: 20% !important;">영업활동명</td>
							<td rowspan="2" style="width: 8% !important;">활동구분</td>
							<td rowspan="2" style="width: 20% !important;">영업기회명</td>
							<td rowspan="2" style="width: 8% !important;">활동유형</td>
							<td style="width: 9% !important;">시작일자</td>
							<td style="width: 9% !important;">시작시간</td>
							<td rowspan="2" style="width: 6% !important;">상태</td>
							<td rowspan="2" style="width: 7% !important;">등록자</td>
							<td rowspan="2" style="width: 10% !important;">등록일시</td>
						</tr>
						<tr>
							<td style="width: 9% !important;">종료일자</td>
							<td style="width: 9% !important;">종료시간</td>
						</tr>
					</thead>
					<tbody id="activeList" class="FixTbody">	
							<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
					</tbody>
					</table>
			</div>
		</div>
		<!-- 영업기회별 견적 탭 -->
		<div id="tabDiv2" class="tab2_content">
		<div class="bt_position_authuser" style=" padding: 5px;">
			<button id="estimateAdd" class="ui orange button">견적 추가</button>
			<button id="addkeymancancel" class="ui orange button" onclick="javascript:opptEstimDelete();">삭제</button>
		</div>
		
		<div id="tableline" class="FixHeader">
			<table id="goaltable" class="ui sortable celled table" cellspacing="0" style="height: 192px;">
				<thead>						
					<tr class="headerLock">
						<th style="width: 3% !important;"><input type="checkbox"  id='estimAllSelect'/></th>
						<td style="width: 30% !important;">견적명</td>
						<td style="width: 11% !important;">견적단계</td>
						<td style="width: 10% !important;">견적수량</td>
						<td style="width: 15% !important;">견적금액</td>
						<td style="width: 10% !important;">견적유효일자</td>
						<td style="width: 9% !important;">등록자</td>
						<td style="width: 10% !important;">등록일시</td>
					</tr>
				</thead>
				<tbody id="estimList"  class="FixTbody">
				<tr style='height: 150px;'><td colspan='8'>조회된 결과가 없습니다.</td></tr>		
				</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>


