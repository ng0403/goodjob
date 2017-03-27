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
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estDetail.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estDetail.css" type="text/css" />
	<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
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
	 $("#estimatediv").mCustomScrollbar({  
        theme:"rounded-dark",
        autoHideScrollbar: false,
        scrollbarPosition: "outside",
        scrollButtons:{
          enable:true
        },
        axis:"y"
      });
});  
</script>
<body>
	<input type="hidden" id="ctx" value="${ctx}">

	<div id="css_tabs">
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" checked="checked" /> <input -->
<!-- 			id="tab2" type="radio" name="tab" /> -->

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label>상세정보</label>
		<div id="baseBtnDiv" class="bt_position_authuser">
			<input type="button" id="mdfBtn" value="편집" class="custcomp_btn" onclick="estMdfyBtn();"/>
		</div>
<!-- 		<div id="addBtnDiv" style="display: none;" class="bt_position_authuser"> -->
<%-- 			<input type="button" id="addSaveBtn" value="저장" onclick="save_Click('${ctx}');" class="custcomp_btn"/> --%>
<!-- 			<input type="button" id="addCancelBtn" value="취소" class="custcomp_btn" onclick="cancel_Click();"/> -->
<!-- 		</div> -->
		<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
			<input type="button" id="mdfSaveBtn" value="저장" onclick="save_Click('${ctx}');" class="custcomp_btn"/>
			<input type="button" id="mdfCancelBtn" value="취소" class="custcomp_btn" onclick="cancel_Click();"/>
		</div>

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">			
			<div id="ccustomerdiv">
			<input type="hidden" id="inputCust" value="false"/>
			
			<table id="contactable">
				<tbody id="estDetail">
				
					<tr>
						<th>견적명</th>
						<td>
						<input type="text" name="estim_nm_detail" id="estim_nm"
							readonly="readonly" class="int2" value="${detail.estim_nm }">	
							 <input type="hidden" id="estim_id" value="${detail.estim_id }"></td>
						<th>고객사</th>
						<td><input type="text" name="cust_nm" id="cust_nm" readonly="readonly" class="int" value="${detail.cust_nm }" >
							<input type="hidden"
							name="cust_id" id="cust_id" value="${detail.cust_id }" /> 
							<input type="hidden" name="lead_id" id="lead_id" value="" /> 
							<input type="button" class="btn-success-tel" id="customer" value="고객"
							onclick="javascript:custcompListPopup('${ctx}');" disabled="disabled"></td>
						<th>견적단계</th>
						<td colspan="3"><select name="estim_lev_cd_detail"
							id="estim_lev_cd_detail" disabled="disabled">
								<option value="" style="text-align: center;" >선택</option>
								<c:forEach items="${elclist}" var="elclist">
									<c:choose>
										<c:when test="${detail.estim_lev_cd eq elclist.code }">
											<option value="${elclist.code}" selected="selected">${elclist.cd_nm}</option>
										</c:when>
										<c:otherwise>
											<option value="${elclist.code}">${elclist.cd_nm}</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>
						</select></td>
					<tr>
						<th>영업기회명</th>
						<td><input type="hidden" id="sales_oppt_id" value="${detail.sales_oppt_id }"> 
							<input type="text" name="sales_oppt_nm" id="sales_oppt_nm"  readonly="readonly" class="int3" value="${detail.sales_oppt_nm }">
							<input type="button" name="act_opp" value="영업기회"
							class="btn-success-tel" id="opptSelect"  disabled="disabled">
						<th>견적유효일자</th>
						<td><label for="start_day" class="oppt_txt_nm"></label>
							<input type="text" name="estim_valid_d_detail" id="estim_valid_d_detail"
							class="int" readonly="readonly" value="${detail.estim_valid_d }"></td>

					</tr>
 					<tr>
						<th>Remark</th> 
						<td colspan="3"><input type="text" name="memo" id="memo" style="width: 90%;" readonly=readonly
 							class="int_detail_ad" value="${detail.memo}">
 						</td>
 						<td colspan="3">
 							<input type="button" disabled="disabled" style="float: right; margin-right: 50px;" class="est_tab_bt" value="상품삭제" id="prodDelete"/>
							<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="est_tab_bt" value="상품추가" id="prodListBtn"/>
 						</td> 
					</tr>
					
					</table>
							<table id= "estimatehead" style="margin-left: 22px; text-align: center; border-collapse: collapse;" >
								<tr>
									<th style="width: 3%;"><input type="checkbox" id="allSelect"></th>
									<td style="width: 32%;">품목명</td>
									<td style="width: 8%;">수량</td>
									<td style="width: 27%;">판매가</td>
									<td style="width: 15%;">할인</td>
									<td style="width: 15%;">공급가</td>
								</tr>
								<tr id="totalprice">
									<th></th>
									<td>계:</td>
									<td id="countSum">0</td>
									<td id="salesPriceSum" >0</td>
									<td id="discountSum">0</td>
									<td id="supplyPriceSum">0</td>
								</tr>
						</table>
	   <div id="estimatediv" style="margin-left: 22px;">
	   <input type="hidden" id="eduCode" value="${eduCode}">
					<table id="estimatetable" class="tabtable" style="text-align: center;">
						<tbody id="estimatetbody">
							<c:choose>
								<c:when test="${not empty prodList}">
									<c:forEach items="${prodList}" var="list">
										<tr id="priceline" class="${list.prod_id}">
											<th style="width: 3%;">
												<input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}" onclick="prodChkCancel();">
												<input type="hidden" id="prod_sales_amt"  value="${list.prod_sales_amt}"></th>
											<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td>
											<td style="width: 8%;">
												<input type=number style="width: 80%; text-align: center;" readonly="readonly" name="estim_qty" id="estim_qty" min="1" max="100" value="${list.estim_qty}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>		
											<td style="width: 27%;" >${list.sales_price}</td>
											<td style="width: 15%;" >
												<input type=number style="width: 50%; text-align: center;" readonly="readonly" id="discount" name="discount" min="0" max="100" value="${list.discount}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">
												<select id="unit" name="discount_unit_cd" style="width: 25%;" disabled="disabled">
													<option value="0">선택</option>
													<c:forEach items="${eduList }" var="eduList">
														<c:choose>
															<c:when test="${list.discount_unit_cd eq eduList.code }">
																<option value="${eduList.code}" selected="selected">${eduList.cd_nm}</option>
															</c:when>
															<c:otherwise>
																<option value="${eduList.code}">${eduList.cd_nm}</option>
															</c:otherwise>
														</c:choose>
													</c:forEach>
												</select>
											</td>
											<td style="width: 15%;" id="sup_price" >${list.sup_price}</td>
										</tr>
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="6">등록된 상품 정보가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
			</div>
			<div class="estimate_bt_position"> 
						
					</div>
		</div>
	</div>
</div>
</body>
</html>


