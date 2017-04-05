<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail2.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptDetail.js"></script>
<%-- <script src="${ctx}/resources/common/js/sales/oppt/opptlist.js"></script> --%>
</head>
<script type="text/javascript">
$(document).ready(function() {
	var opptId =$('#hsales_oppt_id').val();
	var custId =$('#hcust_id').val();
// 	URLEncoder.encode(opptId , "UTF-8");
	$('#salesId').val(opptId);
	
// 	alert("선택된 사용자 ID : " + opptId);
	viewSalesActive(opptId);
	opptprdtList(opptId);
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
	
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" />  -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" /> 
		<input id="tab3" type="radio" name="tab" /> 

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
<!-- 		<label for="tab1">상세정보</label>  -->
		<label for="tab1">영업활동 </label> 
		<label for="tab2" style="width: 110px;">영업기회별 상품</label> 
		<label for="tab3">견적</label> 

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
			<div id="tabDiv1" class="tab1_content">
			<div class="bt_position_authuser">
				<button id="act_opp_nm" class="btn btn-default">영업활동 추가</button>
				<button id="addkeymancancel" class="btn-success-tel" onclick="javascript:opptActiveDelete();">삭제</button>
			</div>
			
			<div id="tableline">
				<table id="goaltable" class="tabtable">
					<thead>
						<tr>
							<th rowspan="2" style="width: 3%;"><input type="checkbox"  id='actAllSelect'/></th>
							<td rowspan="2" style="width: 20%;">영업활동명</td>
							<td rowspan="2" style="width: 8%;">활동구분</td>
							<td rowspan="2" style="width: 20%;">영업기회명</td>
							<td rowspan="2" style="width: 8%;">활동유형</td>
							<td style="width: 9%;">시작일자</td>
							<td style="width: 9%;">시작시간</td>
							<td rowspan="2" style="width: 6%;">상태</td>
							<td rowspan="2" style="width: 7%;">등록자</td>
							<td rowspan="2" style="width: 10%;">등록일시</td>
						</tr>
						<tr>
							<td>종료일자</td>
							<td>종료시간</td>
						</tr>
					</thead>
					<tbody id="activeList">	
							<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
					</tbody>
					</table>
			</div>
		</div>
		<!-- 영업기회별 상품 탭 -->
		<div id="tabDiv2" class="tab2_content">
		<div class="bt_position_authuser">
			<button id="opptPdtAdd" class="btn btn-default">영업기회별 상품 추가</button>
			<button id="addkeymancancel" class="btn-success-tel" onclick="javascript:opptPdtDelete();">삭제</button>
		</div>
		
		<div id="tableline">
			<table id="goaltable" class="tabtable">
				<thead>						
					<tr>
						<th style="width: 3%;"><input type="checkbox"  id='opptprdtAllSelect'/></th>
						<td style="width: 30%;">상품명</td>
						<td style="width: 11%;">영업단계</td>
						<td style="width: 15%;">예상매출액</td>
<!-- 						<td style="width: 10%;">유효일자</td> -->
<!-- 						<td style="width: 9%;">등록자</td> -->
						<td style="width: 10%;">등록일시</td>
					</tr>
				</thead>
				<tbody id="opptprdtList" >
				<tr style='height: 150px;'><td colspan='8'>서비스 준비중입니다.</td></tr>		
				</tbody>
				</table>
			</div>
		</div>
		<!-- 영업기회별 견적 탭 -->
		<div id="tabDiv3" class="tab3_content">
		<div class="bt_position_authuser">
			<button id="estimateAdd" class="btn btn-default">견적 추가</button>
			<button id="addkeymancancel" class="btn-success-tel" onclick="javascript:opptEstimDelete();">삭제</button>
		</div>
		
		<div id="tableline">
			<table id="goaltable" class="tabtable">
				<thead>						
					<tr>
						<th style="width: 3%;"><input type="checkbox"  id='estimAllSelect'/></th>
						<td style="width: 30%;">견적명</td>
						<td style="width: 11%;">견적단계</td>
						<td style="width: 10%;">견적수량</td>
						<td style="width: 15%;">견적금액</td>
						<td style="width: 10%;">견적유효일자</td>
						<td style="width: 9%;">등록자</td>
						<td style="width: 10%;">등록일시</td>
					</tr>
				</thead>
				<tbody id="estimList" >
				<tr style='height: 150px;'><td colspan='8'>조회된 결과가 없습니다.</td></tr>		
				</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>


