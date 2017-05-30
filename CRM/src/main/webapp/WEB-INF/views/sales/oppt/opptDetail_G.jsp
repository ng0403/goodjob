<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail2.css" type="text/css" /> --%>
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
	
	<div id="salesOpptPrdtdiv">
				<input type="hidden" id="inputCust" value="false"/>
				<div class="detailBtn" style="padding: 5px;">
					<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="tiny ui blue button" value="상품삭제" id="opptProdDelete"/>
					<input type="button" disabled="disabled" style="float: right; margin-right: 10px;" class="tiny ui blue button" value="상품추가" id="opptProdListBtn"/>
				</div>

				<table id= "estimatehead" style="text-align: center; border-collapse: collapse;" >
					<tr style="height: 35px; background-color: rgb(228, 233, 251);">
						<th rowspan="2" style="width: 3%;"><input type="checkbox" id="allSelect"></th>
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
				<div id="estimatediv" style="">
					<input type="hidden" id="eduCode" value="${eduCode}">
					<table id="opptPrdttable" class="tabtable" style="text-align: center;">
						<tbody id="opptPrdtbody">
							
						</tbody>
					</table>
				</div>
			</div>
		</div>

	
</body>
</html>


