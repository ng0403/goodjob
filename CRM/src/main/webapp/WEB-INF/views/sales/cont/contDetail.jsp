<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/contcss/cont_tab.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/tab.js"></script>

<style type="text/css">
	.ui-datepicker{ font-size: 13px; width: 300px;}
	.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
	.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<!-- //Tab 이동 시 comp_id를 유지시켜주는 역할. -->
	<input type="hidden" id="nowCont_id">


	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label>
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->

		<div id="tabDiv1" class="tab1_content">
			<form id="contForm" method="post" >
				<div id="contBaseBtnDiv" class="cont_tab_bt_div">
					<input type="button" id="contMdfyBtn" value="편집" class="cont_bt" onclick="contMdfy();"/>
				    <input type="button" id="contAddCancelBtn" value="취소" class="cont_bt" onclick="contCancel();"/>
					
				</div> 
				<div id="contMdfyBtnDiv" style="display: none;"  class="cont_tab_bt_div">
					<input type="button" id="contUpdateBtn" value="저장" onclick="updateCont('${ctx}');" class="cont_bt"/>
					<input type="button" id="contAddCancelBtn" value="취소" class="cont_bt" onclick="contCancel();"/>
				</div>
 				
				<div id="contDiv">
					<table id="contTable">
						<tbody id="contTbody">
							<tr>
								<th>계약명</th>
								<td>
									<input type="hidden" name="contr_id" id="contr_id" />
									<input type="hidden" id="hcontr_nm"/>
									<input type="text" name="contr_nm" id="contr_nm" class="int" style="ms-ime-mode: disabled;" readonly="readonly"/>
								</td>
								<th>고객사</th>
								<td>
									<input type="hidden" id="hcust_nm"/>
									<input type="text" name="cust_nm" id="cust_nm" class="int" readonly="readonly"/>
									<input type="hidden" id="hcust_id"/>
									<input type="hidden" name="cust_id" id="cust_id" />
									<input type="hidden" name="estim_lev_cd" id="estim_lev_cd" value="0002"/>
									<input type="button" value="고객" id="customer" disabled="disabled" class="cont_bt">
								</td>
								<th rowspan="3">메모</th>
								<td rowspan="3">
									<input type="hidden" id="hmemo"/>
									<textarea name="memo" id="memo" rows="9.5" cols="40" readonly="readonly" style="resize: none; overflow: auto;" class="cont_txtarea"></textarea>
								</td>
							<tr>
								<th>영업기회명</th>
								<td>
									<input type="hidden" id="hsales_oppt_nm"/>
									<input type="hidden" id="hsales_oppt_id"/>
									<input type="hidden" id="hestim_id"/>
									<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" class="int" readonly="readonly"/>
									<input type="hidden" name="sales_oppt_id" id="sales_oppt_id"/>
									<input type="hidden" name="estim_id" id="estim_id"/>
									<input type="button" value="영업기회" id="act_oppt_nm" disabled="disabled" class="cont_bt">
								</td>
								<th>계약수량</th>
								<td>
									<input type="hidden" id="hcontr_qty"/>
									<input type="text" name="contr_qty" id="contr_qty" class="int" readonly="readonly"/>
								</td>
							</tr>
							<tr>
								<th>계약금액</th>
								<td>
									<input type="hidden" id="hcontr_amt"/>
									<input type="text" name="contr_amt" id="contr_amt" class="int"  readonly="readonly" style="text-align: right; padding-right: 5px;"/>
								</td>
								<th>계약일자</th>
								<td>
									<input type="hidden" id="hcontr_d_detail"/>
							 		<input type="text" name="contr_d" id="contr_d_detail" class="int"  readonly="readonly"/>
							 	</td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</div>
	</div>
</body>
</html>