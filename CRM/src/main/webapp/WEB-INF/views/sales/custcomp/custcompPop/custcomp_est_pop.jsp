<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_estpop_css.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/ccestimate.js"></script> --%>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custestimate.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery.mCustomScrollbar.concat.min.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

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
	 
	 var estim_lev_cd = '${estim_lev_cd}';
	 $('#estim_lev_cd').children().eq(estim_lev_cd).attr('selected',true);
	
	 var flg = $('#flg').val();
	 
	 //if(flg=='detail') $('#opptEstimButton').val("수정");
	 
	 $('.seloption').each(function(){
		 $(this).attr("selected",true);
	 });
	 prodChange();
}); 
</script>

<title>견적 등록</title>
</head>

<body onload="setWindowResize();">
<div style="width: 98%; padding-left: 10px;">

	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="prodList" value="${prod}">
	<input type="hidden" id="eduList" value="${eduList}">
	<input type="hidden" id="eduCode" value="${eduCode}">
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCust_id" value="${custcompDetail.cust_id}"/>
	<input type="hidden" id="nowCust_nm"/>
 	
 	<br>
 	<div id="title">
<!-- 		<div class="caption">■ 견적 등록</div> -->
		<h3 class="ui header" style="background: #fff; padding: 10px;">■ 견적 등록</h3>
	</div>

	<div class="est_pop_list_div">
		<table id="keymanpopuptable" class="ui celled table" style="width: 42%; float: left; margin-right: 10px;">
			<tbody id="tbody1">
				<tr>
					<th>견적명</th>
					<td>
						<input type="text" name="estim_nm" id="estim_nm" class="inputText" value="${estim_nm}" autofocus="autofocus">
						<input type="hidden" name="estim_id" id="estim_id" value="${estim_id}">
					</td>
				</tr>
				<tr>
					<th>고객명</th>
					<td>
						<input type="text" name="cust_nm" id="cust_nm" class="inputText" readonly="readonly" value="${cust_nm}">
						<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
					</td>
				</tr>
				<tr>
					<th>견적단계</th>
					<td>
						<select id="estim_lev_cd" class="inputText" name="estim_lev_cd" style=" height: 30px;">
							<option value="0" style="text-align: center;">==선택==</option>
							<c:forEach items="${elcList}" var="list">
								<option value="${list.code}">${list.cd_nm}</option>							
							</c:forEach>
						</select>
					</td>
				</tr>
				<tr>
					<th>견적유효일자</th>
					<td>
					<input type="text" id="estim_valid_d" name="estim_valid_d" class="inputText" value="${estim_valid_d}"/>	
					</td>
				</tr>
				<tr>
					<th>영업기회명</th>
					<td>
						<input type="hidden" name="sales_oppt_id" id="sales_oppt_id" value="${sales_oppt_id}">
						<input type="text" 	 name="sales_oppt_nm" id="sales_oppt_nm" readonly="readonly" class="inputText" value="${sales_oppt_nm}">
						<input type="button" name="act_opp" 	  id="opptSelect"   class="tiny ui orange basic button " value="영업기회" >
<!-- 								<input type="button" id="actAddSaveBtn" class="act_bt" value="영업기회 등록" onclick="addOppt()"/> -->
					</td>
				</tr>
				<tr>
					<th>메모</th>
					<td><textarea class="inputText" id="memo" cols="23" rows="5" style="width: 98%;">${memo}</textarea></td>
				</tr>
			</tbody>
		</table>
			
	</div>	
			<div class="estProDiv">
			<!-- <div>
			<table id="estimatehead" class="estimatehead" style="border-collapse: collapse;">
				<tr style="background-color: #eaeaea">
					<th style="width: 3%;"><input type="checkbox" id="prodallCheck"></th>
					<td style="width: 32%;">품목명</td>
					<td style="width: 8%;">수량</td>
					<td style="width: 18%;">판매가</td>
					<td style="width: 24%;">할인</td>
					<td style="width: 15%;">공급가</td>
				</tr>
			</table>
			</div>  -->
			
			<div id="estimatediv" style="width: 56%; float: left; margin-left: 5px;">
					<table id="estimatetable" class="ui celled table">
						<thead>
							<tr style="background-color: #eaeaea; text-align: center;">
								<th style="width: 3%;"><input type="checkbox" id="prodallCheck"></th>
								<th style="width: 32%;">품목명</td>
								<th style="width: 8%;">수량</td>
								<th style="width: 18%;">판매가</td>
								<th style="width: 24%;">할인</td>
								<th style="width: 15%;">공급가</td>
							</tr>
						</thead>
						<tbody id="estimatetbody" class="estimatetbody">
					 		<c:forEach items="${prod}" var="list">
							<tr id="priceline" class="${list.prod_id}">
								<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}"> 
									<input type="hidden" id="prod_price"  value="${list.prod_price}" ></th>
								<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td>
								<td style="width: 8%;"><input type="number" name="estim_qty" id="estim_qty" class="estim_qty" min="1" max="100" value="${list.estim_qty}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)' ></td>
								<td style="width: 18%;" >${list.sales_price}</td>
								<td style="width: 24%;" ><input type="number" id="discount" class="discount" name="discount" min="0" max="100" value="${list.discount}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
								
								<select id="unit" class="unit" name="discount_unit_cd">
								<c:if test="${flg eq 'detail'}">
								<option value="0" >선택</option>
								<c:forEach items="${eduList}" var="list2">
									<c:if test="${list2.code == list.discount_unit_cd}">
										<option value="${list2.code}" class="seloption">${list2.cd_nm}</option>
									</c:if>
									<c:if test="${list2.code != list.discount_unit_cd}">
										<option value="${list2.code}">${list2.cd_nm}</option>
									</c:if>
								</c:forEach>
								</c:if>
								
							
								</select></td>
								<td style="width: 15%;" id="sup_price" >${list.sup_price}</td>
					 		</tr>
					 		</c:forEach> 
						</tbody>
						<tfoot>
							<tr id="totalprice" style="text-align: center; background-color: #FAED7D; height: 22px;">
								<td colspan="2">계:</td>
								<td id="countSum">0</td>
								<td id="salesPriceSum" >0</td>
								<td id="discountSum">0</td>
								<td id="supplyPriceSum">0</td>
							</tr>
						</tfoot>
					</table>
					<!-- <table id="estimatehead" class="estimatefoot"  style="border-collapse: collapse;">
						<tr id="totalprice">
							<td style="width: 220px;" colspan="2">계:</td>
							<td style="width: 40px;" id="countSum">0</td>
							<td style="width: 94px;" id="salesPriceSum" >0</td>
							<td style="width: 126.9px;" id="discountSum">0</td>
							<td style="width: 78px;" id="supplyPriceSum">0</td>
						</tr>
					</table> -->
				</div>
				
		
		<div class="estimate_bt_position" > 
			<input type="button" class="tiny ui orange button"  value="상품추가" onclick="prodList('${ctx}');" style="margin-top: 10px; margin-left: 7px;"/>
			<input type="button" class="tiny ui orange button" value="상품삭제" onclick="prodDelete();" style="margin-top: 10px; margin-left: 7px;"/>
		</div>
		
		
			<c:if test="${flag == 0}">
			<div class="estimate_bt_position2" style="padding-top: 10px; clear: both;">
				<input type="button" class="tiny ui orange button" value="저장" id="est_add" onclick="custEstimAdd('${ctx}');"/>
				<input type="button" class="tiny ui button" value="취소" id="estimate_cancel" onclick="window.close();"/>
			</div>
		</c:if>
		<c:if test="${flag == 1}">
			<div class="estimate_bt_position2" style=" margin-bottom: 10px;">
				<input type="button" class="tiny ui orange button" value="저장" id="est_mdfy" onclick="custEstimUpdate('${ctx}');"/>
				<input type="button" class="tiny ui button" value="취소" id="estimate_cancel" onclick="window.close();"/>
			</div>
		</c:if>
		
		
	</div>
</div>
</body>
</html>