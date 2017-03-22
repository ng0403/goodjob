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
<script src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
</head>
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<body>
	<input type="hidden" id="salesId" value="${opDetail.sales_oppt_id}" >
	<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<c:if test="${addFlag == 0 }">
			<div class="caption">■ 영업기회추가</div>
		</c:if>
		<c:if test="${addFlag == 1 }">
			<div class="caption">■ 영업기회 상세정보</div>
		</c:if>
	</div>
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<div id="baseBtnDiv" class="bt_position_authuser">
				<input type="button" id="modifybtn" class="btn-success-tel"  onclick="opptMdfyBtn();" value="편집" /><!-- disabled="disabled" -->
				<input type="button" id="cancelbtn" class="btn-success-tel" onclick="opptCancelBtn();" value="취소" />
			</div>
			<div id="NewAddBtnDiv" class="bt_position_authuser">
				<input type="button" id="submitbtn" class="btn-success-tel" onclick="opptAddBtn();" value="추가" />
				<input type="button" id="cancelbtn" class="btn-success-tel" onclick="opptCancelBtn();" value="취소" />
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
				<table id="ccustomertable_M">
					<tbody id="opptDetail">
						<tr>
							<th>영업기회명</th>
							<td> <!-- colspan="3" -->
								<input type="hidden" id="hsales_oppt_nm" value="${opDetail.sales_oppt_nm}">
								<input type="hidden" id="hsales_oppt_id" value="${opDetail.sales_oppt_id}">
								<input type="text" name="sales_oppt_nm" value="${opDetail.sales_oppt_nm}" id="sales_oppt_nm" readonly="readonly" class="int2" style="ms-ime-mode: disabled; background-color: ">
							</td>
							<th>고객사</th>
							<td>
								<input type="hidden" id="hcust_nm" value="${opDetail.cust_nm}">
								<input type="hidden" id="hcust_id" value="${opDetail.cust_id}">
								<input type="hidden" id="hlead_id" value="${opDetail.lead_id}">
								<input type="text" name="cust_nm" id="cust_nm" value="${opDetail.cust_nm}" readonly="readonly" class="int">
								<input type="hidden" name="cust_id" id="cust_id" value="${opDetail.cust_id}"/>
								<input type="hidden" name="lead_id" id="lead_id" value="${opDetail.lead_id}"/>
																
								<input type="button" class="btn-success-tel" id="customer" disabled="disabled" value="고객" onclick="javascript:custcompListPopup('${ctx}');">
								</td>
						</tr>
						<tr>
							<th>상태</th>
							<td>
								<input type="hidden" id="hsales_oppt_stat_cd" value="0">
								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${osclist}" var="list">
										<option value="<c:out value="${list.code}" />"
											 <c:if test="${detail.sales_oppt_stat_cd == list.code }">selected="selected"</c:if>>
											 ${list.cd_nm}
										 </option>
									</c:forEach>
								</select>
							</td>
						
							<th>영업단계</th>
							<td>
								<input type="hidden" id="hsales_lev_cd" value="0">
								<select name="sales_lev_cd" id="sales_lev_cd" disabled="disabled" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach items="${otllist}" var="list">
										<option value="<c:out value="${list.code}" />"
											 <c:if test="${detail.sales_lev_cd == list.code }">selected="selected"</c:if>>
											 ${list.cd_nm}
										 </option>
										</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>예상매출액</th>
							<td>
								<input type="hidden" id="hexpt_sales_amt">
								<input type="text" name="expt_sales_amt" id="expt_sales_amt" value="${opDetail.expt_sales_amt}" class="int"  readonly="readonly"/>
							</td>
							<th>예상마감일자</th>
							<td>
								<input type="hidden" id="hexpt_fin_d">
								<input type="text" name="expt_fin_d" id="expt_fin_d" value="${opDetail.expt_fin_d}" readonly="readonly" class="int">
							</td>
						</tr>	
						<tr>
							<th>가능성</th>
							<td>
								<input type="hidden" id="hpsblty_rate">
								<select id="psblty_rate" name="psblty_rate" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
									<option <c:if test="${detail.psblty_rate == 10 }">selected="selected"</c:if>>10</option>
									<option <c:if test="${detail.psblty_rate == 20 }">selected="selected"</c:if>>20</option>
									<option <c:if test="${detail.psblty_rate == 30 }">selected="selected"</c:if>>30</option>
									<option <c:if test="${detail.psblty_rate == 40 }">selected="selected"</c:if>>40</option>
									<option <c:if test="${detail.psblty_rate == 50 }">selected="selected"</c:if>>50</option>
									<option <c:if test="${detail.psblty_rate == 60 }">selected="selected"</c:if>>60</option>
									<option <c:if test="${detail.psblty_rate == 70 }">selected="selected"</c:if>>70</option>
									<option <c:if test="${detail.psblty_rate == 80 }">selected="selected"</c:if>>80</option>
									<option <c:if test="${detail.psblty_rate == 90 }">selected="selected"</c:if>>90</option>
									<option <c:if test="${detail.psblty_rate == 100 }">selected="selected"</c:if>>100</option>
								</select>	
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td colspan="8" rowspan="2">
								<input type="hidden" id="hmemo">
								<textarea name="memo" class="memo" id="memo" value="${detail.memo}" readonly="readonly" style="overflow: auto; resize: none;"></textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

</body>
</html>


