<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/estimate_popup.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptEstim_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript">
$(function() {

	 $("#opptPrdtdiv").mCustomScrollbar({
        theme:"rounded-dark",
        autoHideScrollbar: false,
        scrollbarPosition: "outside",
        scrollButtons:{
          enable:true
        },
        axis:"y"
      });
// 	 var sales_lev_cd = '${sales_lev_cd}';
// 	 $('#sales_lev_cd').children().eq(sales_lev_cd).attr('selected',true);
	 var flg = $('#flg').val();
	 if(flg=='detail'){
		 $('#opptPrdtButton').val("수정");
	 }
	 $('.seloption').each(function(){
		
		 $(this).attr("selected",true);
	 });
	 prodChange();
}); 
</script>

<title>영업기회별 상품 등록</title>
</head>
<input type="hidden" id="pageNum" value="${pageNum}">
<input type="hidden" id="flg" value="${flg}">
<input type="hidden" id="prodList" value="${prod}">
<input type="hidden" id="eduList" value="${eduList}">
<input type="hidden" id="opptPrdtCode" value="${opptPrdtCode}">
<body>
	<div class="opptPrdtview">
		<input type="hidden" id="ctx" value="${ctx}">
 		<div id="title">
			<div class="caption">● 영업기회별 상품 등록</div>
		</div>

		<div class="bt_position_popup">
			<div class="bs-example" data-example-id="simple-table">
				<table id="keymanpopuptable">
					<tbody id="tbody1">
						<tr>
							<th>상품명</th>
							<td><input type="text" name="prod_nm" id="prod_nm"
								 class="int" value="${prod_nm}">
								<input type="hidden" name="prod_id" id="prod_id" value="${prod_id}"></td>
						</tr>
						<tr>
							<th>고객명</th>
							<td><input type="text" name="cust_nm" id="cust_nm" class="int"
										readonly="readonly" value="${cust_nm}">
								<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
<!-- 								<button id="estim_custom_list">고객</button></td> -->
						</tr>
						<tr>
						<th>영업단계</th> 
							<td>
								<select id="sales_lev_cd" class="sales_lev_cd" name="sales_lev_cd">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${otllist}" var="list" varStatus="status2">
										<option value="<c:out value="${list.code}"/>"
											<c:if test="${list.code == sales_lev_cd}">selected="selected"</c:if>>
											${list.cd_nm}							
									</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>영업기회명</th>
							<td>
							<input type="hidden" name="sales_oppt_id" id="sales_oppt_id" value="${sales_oppt_id}">
							<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" readonly="readonly" class="int" value="${sales_oppt_nm}">
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td><textarea class="int_memo" id="memo">${memo}</textarea></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
			<table id= "opptPrdthead">
							<tr>
								<th style="width: 3%;">V</th>
								<td style="width: 32%;">품목명</td>
								<td style="width: 8%;">수량</td>
								<td style="width: 27%;">판매가</td>
								<td style="width: 15%;">할인</td>
								<td style="width: 15%;">공급가</td>
							</tr>
							<tr id="totalprice">
								<th><input type="checkbox" id="allSelect"></th>
								<td>계:</td>
								<td id="countSum">0</td>
								<td id="salesPriceSum" >0</td>
								<td id="discountSum">0</td>
								<td id="supplyPriceSum">0</td>
							</tr>
			</table>
			</div> 
			<div id= "opptPrdtdiv">
					<table id="opptprdttable">
						<tbody id="opptPrdttbody">
					 <c:forEach items="${prod}" var="list">
						<tr id="priceline" class="${list.prod_id}">
						<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}"> 
						<input type="hidden" id="prod_price"  value="${list.prod_price}" ></th>
						<td style="width: 35%;" id="prod_nm">${list.prod_nm}</td>
						<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;"  name="opptPrdt_qty" id="opptPrdt_qty" min="1" max="100" value="${list.opptPrdt_qty}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)' ></td>
						<td style="width: 27%;" >${list.prod_price}</td>
						<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value="${list.discount}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
						
						<select id="unit" name="discount_unit_cd" style="width: 30%;">
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
					</table>
					</div>
				</div>
		<div class="estimate_bt_position"> 
<!-- 		<input type="button" class="btn btn-default" value="서비스추가" id="addservice"/> -->
		<input type="button" class="btn btn-default"  value="상품추가" id="prodListBtn"/>
		<input type="button" class="btn btn-default" value="상품삭제" id="prodDelete"/>
		</div>
		<div class="estimate_bt_position2">
		<input type="button" class="btn btn-success" value="저장" id="opptPrdtButton"/>
		<input type="button" class="btn btn-default" value="취소" id="opptPrdt_cancel"/>
		</div>
	</div>

</body>
</html>