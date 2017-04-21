<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_actpop_css.css" type="text/css" />
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
</head>
<%-- <body onload='javscript:if(${flg == "detail"}) custActiveDetail();'> --%>
<body>
<div class="keymanview">
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="custType" value="${iuserType}"/>
	<input type="hidden" id="siuser_nm" value="${siuser_nm}"/>
	<input type="hidden" id="siuser_id" value="${siuser_id}"/>
	<div id="title">
		<c:if test="${flg == 'add' }">
		<div class="caption">■ 고객사담당자 등록</div>
		</c:if>
		<c:if test="${flg == 'detail' }">
		<div class="caption">■ 고객사담당자 상세정보</div>
		</c:if>
	</div>
	<div class="bt_position_popup">
   		<div class="bs-example" data-example-id="simple-table">
  
	 		<table id="operatingapopuptable">  			
				<tbody id="tbody1">
					<tr>  
						<th>고객사</th>
						<td><input type="text" name="cust_nm" id="cust_nm" class="int" value="${detail.cust_nm}" readonly="readonly">
							<input type="hidden" name="cust_id" id="cust_id" value="${detail.cust_id}">
					</tr>
					<tr>  
						<th>담당사원</th>
						<td>
							<input type="text" name="iuser_nm" id="iuser_nm" class="int" value="${detail.iuser_nm}" readonly="readonly">
							<c:if test="${flg == 'add' }">
							<input type="button" class="btn-success-tel" id="Manager"  value="직원검색" onclick="javascript:iuserListPopup('${ctx}');">
							</c:if>
							<input type="hidden" name="iuser_id" id="iuser_id" value="${detail.iuser_id}">
						</td>
					</tr>
					<tr>
						<th>역할명</th>
						<td>
						    <input type="text"   id="key_part" name="key_part" class="int" value="${detail.key_part}" > 
						</td>
					</tr>
					<tr>
						<th>연락처</th>
						<td>
						<c:if test="${flg == 'add' }">
							<input type="text" name="cell_ph" id="cell_ph" class="int_tel" value="${custcompDetail.cel_ph}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
						</c:if>
						<c:if test="${flg == 'detail' }">
							<input type="text" name="cell_ph" id="cell_ph" class="int_tel" value="${detail.cell_ph1} - ${detail.cell_ph2} - ${detail.cell_ph3}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
						</c:if>
						</td>	
					</tr>
					<tr>
						<th>이메일</th>
						<td>
						<c:if test="${flg == 'add' }">
							<input type="text" name="email" id="email" class="int_tel" value="${custcompDetail.email}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
						</c:if>
						<c:if test="${flg == 'detail' }">
							<input type="text" name="email" id="email" class="int_tel" value="${detail.email1} @ ${ detail.email2}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
						</c:if>
						</td>	
					</tr>
					
				</tbody>
			</table>
		</div>
		<div class="act_bt_position">
			<input type="button" class="cust_oppt_btn" value="저장" id="ccMngButton"/>
			<input type="button" class="cust_oppt_btn" value="취소" id="activeAdd_cancel"/>
		</div>
	</div>
</div>
</body>
</html>