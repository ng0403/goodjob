<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptDetail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/optestimate.js"></script>

<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
</head>

<script type="text/javascript">
$(document).ready(function() {
	var opptId =$('#hsales_oppt_id').val();
	var opptNm =$('#hsales_oppt_nm').val();
	var custId =$('#hcust_id').val();
	var custNm =$('#hcust_nm').val();
	var vn_date_today = new Date(); 
	var vn_year = vn_date_today.getYear(); 
	var vn_hour = vn_date_today.getHours(); 
	var vn_min = vn_date_today.getMinutes(); 
	
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
	<input type="hidden" id="flag" value="${flag}">
	
	<div id="css_tabs" style="padding-bottom: 10px; margin-top: 20%; ">
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" />  -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" /> 

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">영업활동 </label> 
		<label for="tab2">견적</label> 

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
			<div id="tabDiv1" class="tab1_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<!-- actInsertForm2 함수에 값을 넘겨줄 때 detail 정보에 들어 있는 값으로 넘겨줘야한다. -->
				<button id="act_opp_nm" class="tiny ui blue button" onclick="actInsertForm2('oppt', '${opDetail.sales_oppt_id}', '${opDetail.sales_oppt_nm}', '${opDetail.cust_id}', '${opDetail.cust_nm}');">영업활동 추가</button>
				<button id="addkeymancancel" class="tiny ui blue button" onclick="javascript:opptActiveDelete();">삭제</button>
			</div>
			
			<div id="tableline" style="float: left;">
				<table id="goaltable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style='width:15px; text-align: center;'  rowspan="2"><input type="checkbox"  id='ccActListCheck'/></th>
							<th style='width:270px;' rowspan="2">영업활동명</th>
							<th style='width:105px;   height:12px; padding:5px;'>시작일자</th>
							<th style='width:63px;   height:12px; padding:5px;'>시작시간</th>
							<th style='width:112px;'  rowspan="2">활동유형</th>
							<th style='width:98px;'  rowspan="2">상태</th>
						</tr>
						<tr>
							<th style='width:80px; height:12px; padding:5px;'>종료일자</th>
							<th style='width:80px; height:12px; padding:5px;'>종료시간</th>
						</tr>
					</thead>
					<tbody id="activeList" class="tbody" style="height: 139px; overflow: auto;">
							<tr style='height: 150px; text-align: center;'><td colspan='10' style=" text-align: center;">조회된 결과가 없습니다.</td></tr>
					</tbody>
					</table>
			</div>
		</div>
		<!-- 영업기회별 견적 탭 -->
		<div id="tabDiv2" class="tab2_content">
		<div class="bt_position_authuser" style="text-align: right; padding-bottom: 10px; padding-top: 10px;">
			<button id="estimateAdd" class="tiny ui blue button">견적 추가</button>
			<button id="addkeymancancel" class="tiny ui blue button" onclick="javascript:opptEstimDelete();">삭제</button>
		</div>
		
		<div id="tableline" class="detailtbody" >
			<table id="goaltable" class="ui sortable celled table">
				<thead>						
					<tr class="headerLock">
						<th style='width:15px; text-align: center;'><input type="checkbox"  id='estimAllSelect'/></th>
						<th>견적명</th>
						<th>견적단계</th>
						<th>견적수량</th>
						<th>견적금액</th>
						<th>견적유효일자</th>
						<th>등록자</th>
						<th>등록일시</th>
					</tr>
				</thead>
				<tbody id="estimList"  class="tbody" style="height: 139px; overflow: auto;">
					<tr style='height: 150px; text-align: center;'><td colspan='8' style=" text-align: center;">조회된 결과가 없습니다.</td></tr>		
				</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>


