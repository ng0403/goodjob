<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estimate_popup.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estDetail.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/tab_example.css" type="text/css" />
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/sales/est/estDetail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery.mCustomScrollbar.concat.min.js"></script>
<title>Insert title here</title>
</head>
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<script type="text/javascript">
$(function() {
// 	 $("#estimatediv").mCustomScrollbar({  
//         theme:"rounded-dark",
//         autoHideScrollbar: false,
//         scrollbarPosition: "outside",
//         scrollButtons:{
//           enable:true
//         },
//         axis:"y"
//       });
	$(document).ready(function() {
		var estim_id =$('#estim_id').val();
		var sales_oppt_id =$('#sales_oppt_id').val();
		//var custId =$('#hcust_id').val();
//	 	URLEncoder.encode(opptId , "UTF-8");
		//$('#salesId').val(opptId);
		
//	 	alert("선택된 사용자 ID : " + opptId);
		viewEstHistory(sales_oppt_id)
// 		viewSalesActive(estim_id);
		//viewSalesOppt(estim_id);
		//estimList(opptId);
	});
});  
</script>
<body>
	<input type="hidden" id="ctx" value="${ctx}">

	<div id="css_tabs">
	<!-- <div id="write_est"> -->
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<input id="tab2" type="radio" name="tab" />
<!-- 		<input id="tab3" type="radio" name="tab" /> -->

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
<!-- 		<div id="title"> -->
<!-- 			<div class="caption">■ 견적상세정보</div> -->
<!-- 		</div> -->
<!-- 		<label for="tab1">상품/서비스</label> -->
		<label for="tab1" style="width:12%;">견적 히스토리</label>
<!-- 		<label for="tab2">영업활동</label> -->

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
<!-- 		<div id="tabDiv1" class="tab1_content">			 -->
<!-- 			<div id="ccustomerdiv"> -->
<!-- 				<input type="hidden" id="inputCust" value="false"/> -->
				
<!-- 				<table> -->
<!-- 					<tbody id="estProd"> -->
<!-- 						<tr> -->
<!-- 	 						<td> -->
<!-- 	 							<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="btn-success-tel" value="상품삭제" id="prodDelete"/> -->
<!-- 								<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="btn-success-tel" value="상품추가" id="prodListBtn"/> -->
<!-- 	 						</td>  -->
<!-- 						</tr> -->
<!-- 					</tbody> -->
<!-- 				</table> -->
<!-- 				<table id= "estimatehead" style="margin-left: 22px; text-align: center; border-collapse: collapse;" > -->
<!-- 					<tr> -->
<!-- 						<th style="width: 3%;"><input type="checkbox" id="allSelect"></th> -->
<!-- 						<td style="width: 32%;">품목명</td> -->
<!-- 						<td style="width: 8%;">수량</td> -->
<!-- 						<td style="width: 27%;">판매가</td> -->
<!-- 						<td style="width: 15%;">할인</td> -->
<!-- 						<td style="width: 15%;">공급가</td> -->
<!-- 					</tr> -->
<!-- 					<tr id="totalprice"> -->
<!-- 						<th></th> -->
<!-- 						<td>계:</td> -->
<!-- 						<td id="countSum">0</td> -->
<!-- 						<td id="salesPriceSum" >0</td> -->
<!-- 						<td id="discountSum">0</td> -->
<!-- 						<td id="supplyPriceSum">0</td> -->
<!-- 					</tr> -->
<!-- 				</table> -->
<!-- 				<div id="estimatediv" style="margin-left: 22px;"> -->
<%-- 					<input type="hidden" id="eduCode" value="${eduCode}"> --%>
<!-- 					<table id="estimatetable" class="tabtable" style="text-align: center;"> -->
<!-- 						<tbody id="estimatetbody"> -->
<%-- 							<c:choose> --%>
<%-- 								<c:when test="${not empty prodList}"> --%>
<%-- 									<c:forEach items="${prodList}" var="list"> --%>
<%-- 										<tr id="priceline" class="${list.prod_id}"> --%>
<!-- 											<th style="width: 3%;"> -->
<%-- 												<input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}" onclick="prodChkCancel();"> --%>
<%-- 												<input type="hidden" id="prod_price"  value="${list.prod_price}"></th> --%>
<%-- 											<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td> --%>
<!-- 											<td style="width: 8%;"> -->
<%-- 												<input type=number style="width: 80%; text-align: center;" readonly="readonly" name="estim_qty" id="estim_qty" min="1" max="100" value="${list.estim_qty}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>		 --%>
<%-- 											<td style="width: 27%;" >${list.sales_price}</td> --%>
<!-- 											<td style="width: 15%;" > -->
<%-- 												<input type=number style="width: 50%; text-align: center;" readonly="readonly" id="discount" name="discount" min="0" max="100" value="${list.discount}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"> --%>
<!-- 												<select id="unit" name="discount_unit_cd" style="width: 25%;" disabled="disabled"> -->
<!-- 													<option value="0">선택</option> -->
<%-- 													<c:forEach items="${eduList }" var="eduList"> --%>
<%-- 														<c:choose> --%>
<%-- 															<c:when test="${list.discount_unit_cd eq eduList.code }"> --%>
<%-- 																<option value="${eduList.code}" selected="selected">${eduList.cd_nm}</option> --%>
<%-- 															</c:when> --%>
<%-- 															<c:otherwise> --%>
<%-- 																<option value="${eduList.code}">${eduList.cd_nm}</option> --%>
<%-- 															</c:otherwise> --%>
<%-- 														</c:choose> --%>
<%-- 													</c:forEach> --%>
<!-- 												</select> -->
<!-- 											</td> -->
<%-- 											<td style="width: 15%;" id="sup_price" >${list.sup_price}</td> --%>
<!-- 										</tr> -->
<%-- 									</c:forEach> --%>
<%-- 								</c:when> --%>
<%-- 							</c:choose> --%>
<!-- 						</tbody> -->
<!-- 					</table> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 		<div id="tabDiv1" class="tab2_content">			 -->
<!-- 			<div class="bt_position_authuser" style="float: right;"> -->
<!-- 				<input type="button" id="actAddSaveBtn" class="act_bt" value="영업기회 등록" onclick="addOppt()"/> -->
<!-- 				<input type="button" id="actAddCancelBtn" class="act_bt" value="삭제" onclick="actAddCancelBt();"/> -->
<!-- 			</div> -->
			
<!-- 			<div id="tableline"> -->
<!-- 				<table id="goaltable" class="tabtable"> -->
<!-- 					<thead> -->
<!-- 						<tr> -->
<!-- 							<th style="width: 3%;"><input type="checkbox"  id='opptAllSelect'/></th> -->
<!-- 							<td style="width: 20%;">영업기회명</td> -->
<!-- 							<td style="width: 8%;">고객사</td> -->
<!-- 							<td style="width: 6%;">상태</td> -->
<!-- 							<td style="width: 8%;">영업단계</td> -->
<!-- 							<td style="width: 10%;">예상매출액</td> -->
<!-- 							<td style="width: 10%;">예상마감일자</td> -->
<!-- 							<td style="width: 7%;">가능성</td> -->
<!-- 							<td style="width: 8%;">등록자</td> -->
<!-- 							<td style="width: 15%;">등록일시</td> -->
<!-- 						</tr> -->
<!-- 					</thead> -->
<!-- 					<tbody id="activeOpptList"> -->
						
<!-- 					</tbody> -->
<!-- 					</table> -->
<!-- 			</div> -->
<!-- 		</div> -->
		<div id="tabDiv1" class="tab2_content">				
			<div id="tableline">
				<table id="goaltable" class="tabtable">
					<thead>
						<tr>
							<td style="width: 18%;">영업기회명</td>
							<td style="width: 18%;">견적명</td>
							<td style="width: 8%;">견적단계</td>
							<td style="width: 8%;">견적수량</td>
							<td style="width: 13%;">견적금액</td>
							<td style="width: 13%;">견적유효일자</td>
							<td style="width: 8%;">등록자</td>
							<td style="width: 14%;">등록일시</td>
						</tr>
					</thead>
					<tbody id="estHistoryList">
						
					</tbody>
				</table>
			</div>
		</div>
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
<!-- 		<div id="tabDiv2" class="tab3_content"> -->
<!-- 			<div class="bt_position_authuser"> -->
<!-- 				<button id="act_opp_nm" class="btn btn-default">영업활동 추가</button> -->
<!-- 				<button id="addkeymancancel" class="btn-success-tel" onclick="javascript:opptActiveDelete();">삭제</button> -->
<!-- 			</div> -->
		
<!-- 			<div id="tableline"> -->
<!-- 				<table id="goaltable" class="tabtable"> -->
<!-- 					<thead> -->
<!-- 						<tr> -->
<!-- 							<th rowspan="2" style="width: 3%;"><input type="checkbox"  id='actAllSelect'/></th> -->
<!-- 							<td rowspan="2" style="width: 20%;">영업활동명</td> -->
<!-- 							<td rowspan="2" style="width: 8%;">활동구분</td> -->
<!-- 							<td rowspan="2" style="width: 20%;">영업기회명</td> -->
<!-- 							<td rowspan="2" style="width: 8%;">활동유형</td> -->
<!-- 							<td style="width: 9%;">시작일자</td> -->
<!-- 							<td style="width: 9%;">시작시간</td> -->
<!-- 							<td rowspan="2" style="width: 6%;">상태</td> -->
<!-- 							<td rowspan="2" style="width: 7%;">등록자</td> -->
<!-- 							<td rowspan="2" style="width: 10%;">등록일시</td> -->
<!-- 						</tr> -->
<!-- 						<tr> -->
<!-- 							<td>종료일자</td> -->
<!-- 							<td>종료시간</td> -->
<!-- 						</tr> -->
<!-- 					</thead> -->
<!-- 					<tbody id="activeList">	 -->
<!-- 						<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr> -->
<!-- 					</tbody> -->
<!-- 				</table> -->
<!-- 			</div> -->
<!-- 		</div> -->
	</div>
</body>
</html>


