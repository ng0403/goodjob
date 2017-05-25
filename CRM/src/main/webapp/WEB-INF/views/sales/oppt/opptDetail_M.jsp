<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail2.css" type="text/css" /> --%>
<!-- 영업기회 디테일 페이지 상품 테이블 적용 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/estimate_popup.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptDetail.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptProd_pop.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
</head>

<style type="text/css">
.th-inner{position: absolute; top:0; line-height: 30px; text-align: left;}
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<script type="text/javascript">
$(document).ready(function(){
	var addFlag = ${addFlag};
	if(addFlag == 1)//상세정보를 눌렀을 경우
	{
		$('#baseBtnDiv').css('display', 'block');
		$('#NewAddBtnDiv').css('display', 'none');
	}else if(addFlag == 0)//신규추가를 눌렀을 경우
		{
		$("#baseBtnDiv").css("display", "none");
		$("#addBtnDiv").css("display", "block");
		$("#mdfBtnDiv").css("display", "none");
		$("#NewAddBtnDiv").css("display", "none");
			//$('#NewAddBtnDiv').css('display', 'block');
			opptAddBtn();
		}
});
	
</script>
<body>
	<input type="hidden" id="salesId" value="${opDetail.sales_oppt_id}" >
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<!-- 다른 페이지에서 넘어올 때 사용되는 flag -->
	<input type="hidden" id="flag" value="${flag}">
	<div id="title">
	<!-- 신규추가를 눌렀을 경우 -->
<%-- 		<c:if test="${addFlag == 0 }"> --%>
<!-- 			<div class="caption">■ 영업 > <a href="/oppt" style="font-size: 15px; text-decoration:none; color: black;">영업기회</a> > 영업기회 추가</div> -->
<%-- 		</c:if> --%>
		<c:if test="${addFlag == 1 }">
			<div class="caption">
				<c:choose>
			<c:when test="${flag == 'cust' }">
				<h3 class="ui header" style="background: #fff;">■ 고객사 > <a href="/custcomp" style="font-size: 19px; text-decoration:none; color: black; font: bold;">영업기회</a> > 영업기회 상세정보</h3>
			</c:when>
			<c:otherwise>
				<h3 class="ui header" style="background: #fff;">■ 영업 > <a href="/oppt" style="font-size: 19px; text-decoration:none; color: black; font: bold;">영업기회</a> > 영업기회 상세정보</h3>
			</c:otherwise>
		</c:choose>
			</div>
		</c:if>
	</div>
<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content" style="text-align: right; ">
			<div id="baseBtnDiv"  class="bt_position_authuser">
				<input type="button" id="modifybtn" class="tiny ui orange button"  onclick="opptMdfyBtn();" value="편집" />
				<input type="button" id="cancelbtn" class="tiny ui button" onclick="opptCancelBtn(${addFlag});" value="취소" />
			</div>
			<div id="NewAddBtnDiv" style="display: none; " class="bt_position_authuser">
				<input type="button" id="submitbtn" style="display: none;" class="tiny ui orange button" onclick="opptAddBtn();" value="추가" />
				<input type="button" id="cancelbtn" style="display: none;" class="tiny ui button" onclick="opptCancelBtn(${addFlag});" value="취소" />
			</div>
			<div id="addBtnDiv" style="display: none;" class="bt_position_authuser">
				<input type="button" id="addsavebtn" class="tiny ui orange button" onclick="opptAdd();" value="저장" />
				<input type="button" id="cancelbtn" class="tiny ui button" onclick="opptCancelBtn(${addFlag});" value="취소" />
			</div>
			<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
				<input type="button" id="modifysavebtn" class="tiny ui orange button" value="저장" onclick="opptModify();"/>
				<input type="button" id="cancelbtn" class="tiny ui button" onclick="opptCancelBtn(${addFlag});" value="취소" />
			</div>
			
			<div id="ccustomerdiv" style="padding-top: 10px;">
				<table id="ccustomertable_M" class="ui celled table">
					<tbody id="opptDetail" class="tbody">
						<tr>
							<th><span style="color: red;">*영업기회명</span></th>
							<td> <!-- colspan="3" -->
							<div class="ui input focus" style="width: 95%;">
								<input type="hidden" id="hsales_oppt_nm" value="${opDetail.sales_oppt_nm}">
								<input type="hidden" id="hsales_oppt_id" value="${opDetail.sales_oppt_id}">
								<input type="text" name="sales_oppt_nm" value="${opDetail.sales_oppt_nm}" id="sales_oppt_nm" readonly="readonly" class="int2" style="ms-ime-mode: disabled; width: 100%;">
							</div>
							</td>
							<th><span style="color: red;">*고객사</span></th>
							<td>
							<div class="ui input focus" >
								<input type="hidden" id="hcust_nm" value="${opDetail.cust_nm}">
								<input type="hidden" id="hcust_id" value="${opDetail.cust_id}">
<%-- 								<input type="hidden" id="hlead_id" value="${opDetail.lead_id}"> --%>
								<input type="text" name="cust_nm" id="cust_nm" value="${opDetail.cust_nm}" readonly="readonly" class="int2">
								<input type="hidden" name="cust_id" id="cust_id" value="${opDetail.cust_id}"/>
																
							</div>
								<input type="button" class="tiny ui orange basic button" id="customer" disabled="disabled" value="고객" onclick="javascript:custcompListPopup('${ctx}');">
								</td>
						</tr>
						<tr>
							<th><span style="color: red;">*상태</span></th>
							<td>
								<input type="hidden" id="hsales_oppt_stat_cd" value="0">
								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled" style="height: 30px; background: rgb(220, 220, 220);">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${osclist}" var="list">
										<option value="<c:out value="${list.code}" />"
											 <c:if test="${opDetail.sales_oppt_stat_cd == list.code }">selected="selected"</c:if>>
											 ${list.cd_nm}
										 </option>
									</c:forEach>
								</select>
							</td>
						
							<th><span style="color: red;">*영업단계</span></th>
							<td>
								<input type="hidden" id="hsales_lev_cd" value="0">
								<select name="sales_lev_cd" class="int2" id="sales_lev_cd" disabled="disabled" style="height: 30px; background: rgb(220, 220, 220);">
									<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach items="${otllist}" var="list">
										<option value="<c:out value="${list.code}" />"
											 <c:if test="${opDetail.sales_lev_cd == list.code }">selected="selected"</c:if>>
											 ${list.cd_nm}
										 </option>
										</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>예상마감일자</th>
							<td>
							<div>
								<input type="hidden" id="hexpt_fin_d">
								<input type="text" name="expt_fin_d" id="expt_fin_d" value="${opDetail.expt_fin_d}" readonly="readonly" class="int2" style="background: rgb(220, 220, 220);">
							</div>
							</td>
							<th><span style="color: red;">*가능성</span></th>
							<td>
								<input type="hidden" id="hpsblty_rate">
								<select id="psblty_rate" name="psblty_rate" style="height: 30px; background: rgb(220, 220, 220);">
									<option value="0" style="text-align: center;">==선택==</option>
									<option <c:if test="${opDetail.psblty_rate == 10 }">selected="selected"</c:if>>10</option>
									<option <c:if test="${opDetail.psblty_rate == 20 }">selected="selected"</c:if>>20</option>
									<option <c:if test="${opDetail.psblty_rate == 30 }">selected="selected"</c:if>>30</option>
									<option <c:if test="${opDetail.psblty_rate == 40 }">selected="selected"</c:if>>40</option>
									<option <c:if test="${opDetail.psblty_rate == 50 }">selected="selected"</c:if>>50</option>
									<option <c:if test="${opDetail.psblty_rate == 60 }">selected="selected"</c:if>>60</option>
									<option <c:if test="${opDetail.psblty_rate == 70 }">selected="selected"</c:if>>70</option>
									<option <c:if test="${opDetail.psblty_rate == 80 }">selected="selected"</c:if>>80</option>
									<option <c:if test="${opDetail.psblty_rate == 90 }">selected="selected"</c:if>>90</option>
									<option <c:if test="${opDetail.psblty_rate == 100 }">selected="selected"</c:if>>100</option>
								</select>	
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td colspan="8" rowspan="2">
							<div class="ui input focus">
								<input type="hidden" id="hmemo" value="${opDetail.memo}">
								<textarea name="memo" class="memo" id="memo" readonly="readonly" style="overflow: auto; resize: none; background: rgb(220, 220, 220);">${opDetail.memo}</textarea>
							</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="salesOpptPrdtdiv"  style="padding-top: 10px; ">
				<input type="hidden" id="inputCust" value="false"/>
				
				<div class="detailBtn" style="width:100%; float: right;">
					<input type="button" disabled="disabled" style="float: right; margin-right: 10px; margin-bottom: 10px;" class="tiny ui orange button" value="상품삭제" id="opptProdDelete"/>
					<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="tiny ui orange button" value="상품추가" id="opptProdListBtn"/>
				</div>
				<div style="height: 200px;">
				
					<table id= "estimatehead" style="text-align: center; border-collapse: collapse;" >
						<tr class="headerLock">
							<th rowspan="2" style="width: 3%; text-align: center;"><input type="checkbox" id="allSelect"></th>
							<td style="width: 32%;">품목명</td>
							<td style="width: 8%;">수량</td>
							<td style="width: 27%;">판매가</td>
							<td style="width: 15%;">할인</td>
							<td style="width: 15%;">공급가</td>
						</tr>
						<tr id="totalprice">
							<td>계:</td>
							<td id="countSum"style="width: 8%;">0</td>
							<td id="salesPriceSum" style="width: 27%;">0</td>
							<td id="discountSum" style="width: 15%;">0</td>
							<td id="supplyPriceSum" style="width: 15%;">0</td>
						</tr>
					</table>
				
				
				<div id="estimatediv" >
					<input type="hidden" id="eduCode" value="${eduCode}">
					<table id="opptPrdttable" class="tabtable" style="text-align: center;">
						<tbody id="opptPrdtbody">
							<c:choose>
								<c:when test="${not empty opptPrdt}">
									<c:forEach items="${opptPrdt}" var="list">
										<tr id="priceline" class="${list.prod_id}" style="height: 6px !important;">
											<th style="width: 3%; text-align: center;">
												<input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}" onclick="prodChkCancel();">
												<input type="hidden" id="prod_price"  value="${list.prod_price}"></th>
											<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td>
											<td style="width: 8%;">
												<input type=number style="width: 80%; text-align: center;" readonly="readonly" name="estim_qty" id="estim_qty" min="1" max="100" value="${list.prod_qty}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>		
											<td style="width: 27%;" >${list.prod_price}</td>
											<td style="width: 15%;" >
												<input type=number style="width: 50%; text-align: right;" readonly="readonly" id="discount" class="discount" name="discount" min="0" max="100" value="${list.discount}" onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">
												<select id="unit" class="unit" name="discount_unit_cd" style="width: 30%;" disabled="disabled">
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
							</c:choose>
						</tbody>
					</table>
				</div>
				</div>
			
			</div>
		</div>

</body>
</html>


