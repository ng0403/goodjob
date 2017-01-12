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
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label>

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
							readonly="readonly" class="int2"
							 ></input>	
							 <input type="hidden" id="estim_id" value=""></td>
						<th>고객사</th>
						<td><input type="text" name="cust_nm" id="cust_nm" readonly="readonly" class="int" ></input> 
							<input type="hidden"
							name="cust_id" id="cust_id" value="" /> 
							<input type="hidden" name="lead_id" id="lead_id" value="" /> 
							<input type="button" class="btn-success-tel" id="customer" value="고객"
							onclick="javascript:custcompListPopup('${ctx}');" disabled="disabled"></td>
						<th>견적단계</th>
						<td colspan="3"><select name="estim_lev_cd_detail"
							id="estim_lev_cd_detail" disabled="disabled">
								<option value="" style="text-align: center;" >선택</option>
								<c:forEach items="${elclist}" var="elclist">
									<option value="${elclist.code}">${elclist.cd_nm}</option>
								</c:forEach>
						</select></td>
					<tr>
						<th>영업기회명</th>
						<td><input type="hidden" id="sales_oppt_id"> 
							<input type="text" name="sales_oppt_nm" id="sales_oppt_nm"  readonly="readonly" class="int3" >
							<input type="button" name="act_opp" value="영업기회"
							class="btn-success-tel" id="opptSelect"  disabled="disabled">
						<th>견적유효일자</th>
						<td><label for="start_day" class="oppt_txt_nm"></label>
							<input type="text" name="estim_valid_d_detail" id="estim_valid_d_detail"
							class="int" readonly="readonly" <%-- value="${estim_valid_d}" --%>></input></td>

					</tr>
 					<tr>
						<th>Remark</th> 
						<td colspan="3"><input type="text" name="memo" id="memo" style="width: 90%;" readonly=readonly
 							class="int_detail_ad">
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


