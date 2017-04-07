<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="popFlg" value="${popFlg}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/custcomp_actpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript"src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/opptAddPop.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>영업기회 등록</title>
</head>
<body onload='javscript:if(${flg eq "detail"}) opptDetail();'>
	<div class="keymanview">
	<c:if test="${flg eq 'add'}">
		<div id="title">
			<div class="caption">● 영업기회 등록</div>
		</div>
	</c:if>
	<c:if test="${flg eq 'detail'}">
		<div id="title">
			<div class="caption">● 영업기회 상세/수정</div>
		</div>
	</c:if>
	<input type="hidden" id="flg" value="${flg}">
		<div class="bt_position_popup">
			<div class="bs-example" data-example-id="simple-table">
				<table id="operatingapopuptable">
					<tbody id="tbody1">
						<!-- 상세보기 -->
						<tr>
							<th>영업기회명</th>
							<td> <!-- colspan="3" -->
								<input type="hidden" id="sales_oppt_id" value="${opDetail.sales_oppt_id}">
								<input type="text" name="sales_oppt_nm" value="${opDetail.sales_oppt_nm}" id="sales_oppt_nm" class="int2" style="ms-ime-mode: disabled; background-color: ">
							</td>
							<th>고객사</th>
							<td>
								<c:choose>
									<c:when test="${flg eq 'add'}">
										<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="int" readonly="readonly" />
								<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}"/>
									</c:when>
									<c:when test="${flg eq 'detail'}">
										<input type="text" name="cust_nm" id="cust_nm" value="${opDetail.cust_nm}" class="int" readonly="readonly" />
								<input type="hidden" name="cust_id" id="cust_id" value="${opDetail.cust_id}"/>
									</c:when>
								</c:choose>
							</td>
						</tr>
						<tr>
							<th>상태</th>
							<td>
								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${osclist}" var="osclist">
										<c:if test="${opDetail.sales_oppt_stat_cd == osclist.code}">
							      			<option selected="selected" value="${osclist.code}">${osclist.cd_nm}</option>
							      		</c:if>
							      		<c:if test="${opDetail.sales_oppt_stat_cd != osclist.code}">
							      			<option value="${osclist.code}">${osclist.cd_nm}</option>
							      		</c:if>
									</c:forEach>
								</select>
							</td>
							<th>영업단계</th>
							<td>
								<select name="sales_lev_cd" id="sales_lev_cd" disabled="disabled" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${otllist}" var="otllist">
										<option value="${otllist.code}"
											<c:if test="${opDetail.sales_lev_cd == otllist.code }">selected="selected"</c:if>>
												 ${otllist.cd_nm}
										</option>
									</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>예상매출액</th>
							<td>
								<input type="text" name="expt_sales_amt" id="expt_sales_amt" value="${opDetail.expt_sales_amt}" class="int"  readonly="readonly"/>
							</td>
							<th>예상마감일자</th>
							<td>
								<input type="text" name="expt_fin_d" id="expt_fin_d" value="${opDetail.expt_fin_d}" readonly="readonly" class="int">
							</td>
						</tr>	
						<tr>
							<th>가능성</th>
							<td>
								<select id="psblty_rate" name="psblty_rate" disabled="disabled" style="height: 24pt;">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach var="i" begin="10" end="100" step="10">
										<c:choose>
											<c:when test="${opDetail.psblty_rate eq i }">
												<option value="${i }" selected="selected">${i }</option>
											</c:when>
											<c:otherwise>
												<option value="${i }">${i }</option>
											</c:otherwise>
										</c:choose>
									</c:forEach>
								</select>	
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td colspan="4" rowspan="2">
								<input type="hidden" id="hmemo">
								<textarea name="memo" class="memo" id="memo" readonly="readonly" style="overflow: auto; resize: none;">${detail.memo}</textarea>
							</td>
						</tr>
												
					</tbody>
				</table>
			</div>

			<div class="act_bt_position" id="oppt_add_btn_div">
				<input type="button" class="cust_oppt_btn" value="등록" id="opptSaveButton" onclick="opptSave()"/>
				<input type="button" class="cust_oppt_btn" value="취소" id="opptAdd_cancel" />
			</div>
		
			<div class="act_bt_position" id="oppt_mdfy_btn_div">
				<input type="button" class="cust_oppt_btn" value="편집" id="opptModfyButton" />
				<input type="button" class="cust_oppt_btn" value="저장" id="opptModfySaveBtn" onclick="opptMdfySave()" />
				<input type="button" class="cust_oppt_btn" value="취소" id="opptModfy_cancel" />
			</div>
			
		</div>

	</div>
</body>
</html>