<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estimate_popup.css" type="text/css" />

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estDetail.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estDetail.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
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
	<input type="hidden" id="hsales_oppt_id" value="${sales_oppt_id}">
	<input type="hidden" id="tabValue" value="${tabValue}">
	<%-- <input type="hidden" id="listPageNum" value="${ctx}"> --%>
	<!-- <div id="css_tabs"> -->
	<div id="write_est">
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" checked="checked" /> <input -->
<!-- 			id="tab2" type="radio" name="tab" /> -->

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<div id="title">
			<div class="caption">
				<c:if test="${sales_oppt_id eq null and cust_id eq null}">
					<label id="listLabel" class="ui header">■ 견적 >
						<a href="/estInqr" style="font-size: 15px; text-decoration:none;">견적관리</a>
						 > 견적 상세정보
					</label>
				</c:if>
				<c:if test="${sales_oppt_id ne null and cust_id eq null }">
					<label id="listLabel" class="ui header">■ 영업기회 >
						<a href="oppt" style="font-size: 20px; text-decoration:none;">영업기회관리</a> >
						<a href="opptDetail?opptId=${sales_oppt_id}" style="font-size: 20px; text-decoration:none;">영업기회관리 상세정보</a>
						 > 견적 상세정보
					</label>
				</c:if>
				<c:if test="${sales_oppt_id eq null and cust_id ne null}">
					<label id="listLabel" class="ui header">■ 영업기회 >
						<a href="custcomp" style="font-size: 20px; text-decoration:none;">고객사관리</a> >
						<a href="custcompDetail?cust_id=${cust_id}" style="font-size: 20px; text-decoration:none;">고객사관리 상세정보</a>
						 > 견적 상세정보
					</label>
				</c:if> 
			</div>
		</div>
		<!-- <label>상세정보</label> -->

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<div id="baseBtnDiv" class="bt_position_authuser">
				<input type="button" id="mdfBtn" value="편집" class="tiny ui blue button" onclick="estMdfyBtn();"/>
				<input type="button" id="listLocaBtn" class="tiny ui button" value="취소" class="tiny ui button" onclick="cancel_Click();"/>
			</div>
<!-- 			<div id="addBtnDiv" style="display: none;" class="bt_position_authuser"> -->
<%-- 				<input type="button" id="addSaveBtn" value="저장" onclick="save_Click('${ctx}');" class="tiny ui blue button"/> --%>
<!-- 				<input type="button" id="addCancelBtn" value="취소" class="tiny ui button" onclick="cancel_Click();"/> -->
<!-- 			</div> -->
			<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
				<input type="button" id="mdfSaveBtn" class="tiny ui blue button" value="저장" onclick="save_Click('${ctx}');"/>
				<input type="button" id="mdfCancelBtn" class="tiny ui button" value="취소" onclick="cancel_Click();"/>
			</div>
			<div id="ccustomerdiv">
				<input type="hidden" id="inputCust" value="false"/>
					
				<table id="contactable" class="ui celled table">
					<tbody id="estDetail" class="detailtbody">
						<tr>
							<th><span style="color:red">*견적명</span></th>
							<td>
								<div class="ui input focus">
								<input type="text" name="estim_nm_detail" id="estim_nm"
								readonly="readonly" class="int2" value="${detail.estim_nm }">
								 <input type="hidden" id="estim_id" value="${detail.estim_id }">
								</div> 
							</td>
							<th><span style="color:red">*고객사</span></th>
							<td>
								<div class="ui input focus">
									<input type="text" name="cust_nm" id="cust_nm" readonly="readonly" class="int" value="${detail.cust_nm }" >
									<input type="hidden"
									name="cust_id" id="cust_id" value="${detail.cust_id }" /> 
									<input type="button" class="tiny ui blue basic button" id="customer" value="고객"
									onclick="javascript:custcompListPopup('${ctx}');" disabled="disabled">
								</div>
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*영업기회명</span></th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="sales_oppt_id" value="${detail.sales_oppt_id }"> 
									<input type="text" name="sales_oppt_nm" id="sales_oppt_nm"  readonly="readonly" class="int3" value="${detail.sales_oppt_nm }">
									<input type="button" name="act_opp" value="영업기회"
									class="tiny ui blue basic button" id="opptSelect"  disabled="disabled">
								</div>
							</td>
							<th>견적유효일자</th>
							<td>
								<div class="ui input focus">
									<label for="start_day" class="oppt_txt_nm"></label>
									<input type="text" name="estim_valid_d_detail" id="estim_valid_d_detail"
									class="int" readonly="readonly" value="${detail.estim_valid_d }">
								</div>
							</td>
						</tr>
						<tr>
							<th>견적단계</th>
							<td colspan="3">
								<div class="ui input focus">
									<select name="estim_lev_cd_detail" id="estim_lev_cd_detail" disabled="disabled">
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
									</select>
								</div>
<!-- 								<div class="ui input focus"> -->
<%-- 								<c:choose> --%>
<%-- 									<c:when test="${detail.estim_lev_cd != '' }"> --%>
<%-- 										<c:forEach items="${elclist}" var="elclist"> --%>
<%-- 											<c:if test="${detail.estim_lev_cd eq elclist.code }"> --%>
<%-- 												<input type="text" name="estim_lev_cd_detail" id="estim_lev_cd_detail"  readonly="readonly" class="int3" value="${elclist.cd_nm }"> --%>
<%-- 											</c:if> --%>
<%-- 										</c:forEach> --%>
<%-- 									</c:when> --%>
<%-- 									<c:otherwise> --%>
<!-- 										<input type="text" name="estim_lev_cd_detail" id="estim_lev_cd_detail"  readonly="readonly" class="int3" value=""> -->
<%-- 									</c:otherwise> --%>
<%-- 								</c:choose> --%>
<!-- 								</div> -->
							</td>
						</tr>
	 					<tr>
							<th>비고</th> 
							<td colspan="3">
								<div class="ui input focus">
									<textarea rows="6" cols="100" name="memo" id="memo" readonly="readonly" style="border:1px solid #85B7D9;border-radius: 0.28571429rem;">${detail.memo}</textarea>
<!-- 								<input type="text" name="memo" id="memo" readonly=readonly -->
<%-- 	 							class="int3" style="width: 100%;" value="${detail.memo}"> --%>
	 							</div>
	 						</td> 
						</tr>
					</tbody>
				</table>
			
				<div class="bt_position">
	 				<input type="button" disabled="disabled" style="float: right; margin-right: 10px;margin-bottom: 10px;" class="tiny ui button" value="상품삭제" id="prodDelete"/>
					<input type="button" disabled="disabled" style="float: right; margin-right: 10px;margin-bottom: 10px;" class="tiny ui blue button" value="상품추가" id="prodListBtn"/>
	 			</div>			
				<table id= "estimatehead" class="ui celled table" style="width:100%; text-align: center; border-collapse: collapse; border:1px; margin-bottom:0px;" >
					<tr style="height: 35px; background-color: rgb(228, 233, 251);">
						<th style="width: 3%;padding:0px;text-align: center;" rowspan="2"><input type="checkbox" id="allSelect"></th>
						<th style="width: 32%;text-align: center;">품목명</th>
						<th style="width: 8%;text-align: center;">수량</th>
						<th style="width: 27%;text-align: center;">판매가</th>
						<th style="width: 15%;text-align: center;">할인</th>
						<th style="width: 15%;text-align: center;">공급가</th>
					</tr>
					<tr id="totalprice">
						<td style="width: 32%;">계:</td>
						<td style="width: 8%;" id="countSum">0</td>
						<td style="width: 27%;" id="salesPriceSum" >0</td>
						<td style="width: 15%;" id="discountSum">0</td>
						<td style="width: 15%;" id="supplyPriceSum">0</td>
					</tr>
				</table>
				<div id="estimatediv" style="width:100%;margin-top:0px;">
				<input type="hidden" id="eduCode" value="${eduCode}">
				<table id="estimatetable" class="ui celled table" style="text-align: center;margin-top:0px;">
					<tbody id="estimatetbody">
						<c:choose>
							<c:when test="${not empty prodList}">
								<c:forEach items="${prodList}" var="list">
									<tr id="priceline" class="${list.prod_id}">
										<th style="width: 3%;text-align: center;">
											<input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}" onclick="prodChkCancel();">
											<input type="hidden" id="prod_price"  value="${list.prod_price}"></th>
										<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td>
										<td style="width: 8%;">
											<input type=number style="width: 80%; text-align: center;" readonly="readonly" name="estim_qty" id="estim_qty" min="1" max="100" value="${list.estim_qty}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>		
										<td style="width: 27%;" >${list.sales_price}</td>
										<td style="width: 15%;" >
											<input type=number style="width: 50%; text-align: center;" readonly="readonly" id="discount" name="discount" min="0" max="100" value="${list.discount}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">
											<c:forEach items="${eduList }" var="eduList">
												<input type=hidden id="unit" name="unit" value="${eduList.code}" disabled="disabled">${eduList.cd_nm}
											</c:forEach>
<!-- 											<select id="unit" name="discount_unit_cd" style="width: 25%;" disabled="disabled"> -->
<!-- 												<option value="0">선택</option> -->
<%-- 												<c:forEach items="${eduList }" var="eduList"> --%>
<%-- 													<c:choose> --%>
<%-- 														<c:when test="${list.discount_unit_cd eq eduList.code }"> --%>
<%-- 															<option value="${eduList.code}" selected="selected">${eduList.cd_nm}</option> --%>
<%-- 														</c:when> --%>
<%-- 														<c:otherwise> --%>
<%-- 															<option value="${eduList.code}">${eduList.cd_nm}</option> --%>
<%-- 														</c:otherwise> --%>
<%-- 													</c:choose> --%>
<%-- 												</c:forEach> --%>
<!-- 											</select> -->
										</td>
										<td style="width: 15%;" id="sup_price" >${list.sup_price}</td>
									</tr>
								</c:forEach>
							</c:when>
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