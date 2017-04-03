<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_estpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptprdt.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript">
$(function() {
	 $("#opptprdtdiv").mCustomScrollbar({
     	theme:"rounded-dark",
     	autoHideScrollbar: false,
     	scrollbarPosition: "outside",
     	scrollButtons:{
     	enable:true
    	 },
     	axis:"y"
     });
	 
	 var sales_lev_cd = '${sales_lev_cd}';
	 $('#sales_lev_cd').children().eq(sales_lev_cd).attr('selected',true);
	
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
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="prodList" value="${prod}">
	<input type="hidden" id="eduList" value="${eduList}">
	<input type="hidden" id="eduCode" value="${eduCode}">
	<input type="hidden" id="ctx" value="${ctx}">
 	
 	<br>
 	<div id="title">
		<div class="caption">■ 영업기회별 상품 등록</div>
	</div>

	<div class="opptprdt_pop_list_div">
			<table id="keymanpopuptable" style="border-collapse: collapse;">
					<tbody id="tbody1">
						<tr>
							<th>상품명</th>
							<td>
								<input type="text" name="estim_nm" id="estim_nm" class="est_txt" value="${estim_nm}" autofocus="autofocus">
								<input type="hidden" name="estim_id" id="estim_id" value="${estim_id}">
							</td>
						</tr>
						<tr>
							<th>고객명</th>
							<td>
								<input type="text" name="cust_nm" id="cust_nm" class="est_txt" readonly="readonly" value="${cust_nm}">
								<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
							</td>
						</tr>
						<tr>
							<th>영업단계</th>
							<td>
								<select id="sales_lev_cd" class="sales_lev_cd" name="sales_lev_cd">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${otllist}" var="list">
										<option value="${list.code}">${list.cd_nm}</option>							
									</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>영업기회명</th>
							<td>
							<input type="hidden" name="sales_oppt_id" id="sales_oppt_id" value="${sales_oppt_id}">
							<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" readonly="readonly" class="est_txt" value="${sales_oppt_nm}">
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td><textarea class="int_memo" id="memo" cols="23" rows="5">${memo}</textarea></td>
						</tr>
					</tbody>
				</table>
			
			
			<c:if test="${flag == 0}">
			<div class="estimate_bt_position2">
				<input type="button" class="est_list_bt" value="저장" id="opptprdt_add" onclick="opptPrdtAdd('${ctx}');"/>
				<input type="button" class="est_list_bt" value="취소" id="opptprdt_cancel"/>
			</div>
		</c:if>
		<c:if test="${flag == 1}">
			<div class="estimate_bt_position2">
				<input type="button" class="est_list_bt" value="저장" id="opptprdt_mdfy" onclick="opptPrdtUpdate('${ctx}');"/>
				<input type="button" class="est_list_bt" value="취소" id="opptprdt_cancel"/>
			</div>
		</c:if>
	</div>	
			<div class="estProDiv">
			
			<div id="opptprdtdiv">
					<table id="opptprdttable" class="opptprdttable" style="border-collapse: collapse;">
						<thead>
							<tr style="background-color: #eaeaea; text-align: center;">
								<th style="width: 3%;"><input type="checkbox" id="prodallCheck"></th>
								<td style="width: 32%;">품목명</td>
								<td style="width: 8%;">수량</td>
								<td style="width: 18%;">판매가</td>
								<td style="width: 24%;">할인</td>
								<td style="width: 15%;">공급가</td>
							</tr>
						</thead>
						<tbody id="opptprdtbody" class="opptprdtbody">
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
				</div>
				
		
		<div class="estimate_bt_position"> 
			<input type="button" class="est_list_bt"  value="상품추가" onclick="prodList('${ctx}');"/>
			<input type="button" class="est_list_bt" value="상품삭제" onclick="prodDelete();"/>
		</div>
	</div>
</body>
</html>