<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/opptDetail2.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptDetail.js"></script>
</head>

<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<body>
	<input type="hidden" id="salesId" value="" >
	<input type="hidden" id="ctx" value="${ctx}">
	
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<div id="baseBtnDiv" class="bt_position_authuser">
				<input type="button" id="submitbtn" class="btn-success-tel" onclick="opptAddBtn();" value="추가" />
				<input type="button" id="modifybtn" class="btn-success-tel" disabled="disabled" onclick="opptMdfyBtn();" value="편집" />
			</div>
			<div id="addBtnDiv" style="display: none;" class="bt_position_authuser">
				<input type="button" id="addsavebtn" class="btn-success-tel" onclick="opptAdd();" value="저장" />
				<input type="button" id="cancelbtn" class="btn-success-tel" onclick="opptCancelBtn();" value="취소" />
			</div>
			<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
				<input type="button" id="modifysavebtn" class="btn-success-tel" value="저장" onclick="opptModify();"/>
				<input type="button" id="cancelbtn" class="btn-success-tel" onclick="opptCancelBtn();" value="취소" />
			</div>
			
			<div id="ccustomerdiv">
				<table id="ccustomertable">
					<tbody id="opptDetail">
						<tr>
							<th>영업기회명</th>
							<td colspan="3">
								<input type="hidden" id="hsales_oppt_nm">
								<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" readonly="readonly" class="int2" style="ms-ime-mode: disabled; background-color: ">
							</td>
							<th>고객사</th>
							<td>
								<input type="hidden" id="hcust_nm">
								<input type="hidden" id="hcust_id">
								<input type="hidden" id="hlead_id">
								<input type="text" name="cust_nm" id="cust_nm" readonly="readonly" class="int">
								<input type="hidden" name="cust_id" id="cust_id" />
								<input type="hidden" name="lead_id" id="lead_id" />
																
								<input type="button" class="btn-success-tel" id="customer" disabled="disabled" value="고객" onclick="javascript:custcompListPopup('${ctx}');">
								</td>
							<th>상태</th>
							<td>
								<input type="hidden" id="hsales_oppt_stat_cd" value="0">
								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${osclist}" var="list">
										<option value="${list.code}" >${list.cd_nm}</option>
									</c:forEach>
								</select>
							</td>
						<tr><!-- opDetail -->
							<th>영업단계</th>
							<td>
								<input type="hidden" id="hsales_lev_cd" value="0">
								<select name="sales_lev_cd" id="sales_lev_cd" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach items="${otllist}" var="list">
										<option value="${list.code}" >${list.cd_nm}</option>
										</c:forEach>
								</select>
							</td>
							<th>예상매출액</th>
							<td>
								<input type="hidden" id="hexpt_sales_amt">
								<input type="text" name="expt_sales_amt" id="expt_sales_amt" class="int"  readonly="readonly"/>
							</td>
							<th>예상마감일자</th>
							<td>
								<input type="hidden" id="hexpt_fin_d">
								<input type="text" name="expt_fin_d" id="expt_fin_d" readonly="readonly" class="int">
							</td>
							<th>가능성</th>
							<td>
								<input type="hidden" id="hpsblty_rate">
								<select id="psblty_rate" name="psblty_rate">
									<option value="0" style="text-align: center;">==선택==</option>
									<option>10</option>
									<option>20</option>
									<option>30</option>
									<option>40</option>
									<option>50</option>
									<option>60</option>
									<option>70</option>
									<option>80</option>
									<option>90</option>
									<option>100</option>
								</select>	
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td colspan="8" rowspan="2">
								<input type="hidden" id="hmemo">
								<textarea name="memo" class="memo" id="memo" readonly="readonly" style="overflow: auto; resize: none;"></textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

</body>
</html>


