<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>



<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
   #operatingapopuptable {
   	margin-top: 20px;
   }
   
</style>
</head>
<body>
<div class="keymanview" >
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="custType" value="${iuserType}"/>
	<input type="hidden" id="siuser_nm" value="${siuser_nm}"/>
	<input type="hidden" id="siuser_id" value="${siuser_id}"/>
<!-- 	<div id="title"> -->
<%-- 		<c:if test="${flg == 'add' }"> --%>
<!-- <!-- 			<div class="caption">■ 고객사담당자 등록</div> --> 
<!-- 			<h3 class="ui header" style="background: #fff; padding: 10px;">■ 담당사원 등록</h3> -->
<%-- 		</c:if> --%>
<%-- 		<c:if test="${flg == 'detail' }"> --%>
<!-- <!-- 			<div class="caption">■ 고객사담당자 상세정보</div> --> 
<!-- 			<h3 class="ui header" style="background: #fff; padding: 10px;">■ 담당사원 상세정보</h3> -->
<%-- 		</c:if> --%>
<!-- 	</div> -->
	<div class="bt_position_popup">
   		<div class="bs-example" data-example-id="simple-table">
  			<form name="delForm" id="delForm" method="post" action="${ctx}/custMngDelete">
	 		<table id="operatingapopuptable" class="ui celled table">  			
				<tbody id="tbody1" >
					<tr>  
						<th>고객사명</th>
						<td>
							<c:if test="${flg == 'add' }">
								<input type="hidden" name="cust_id" id="cust_id" value="${detail.cust_id}">
								<input type="text" name="cust_nm" id="cust_nm"  class="inputText" value="${detail.cust_nm}" disabled="disabled" style="width: 30%;">
								<input type="button" name="compSearch" value="고객사 검색" class="tiny ui blue basic button" id="comp_list_bt" onclick="compListPopup('${ctx}');" style="margin-left: 5px;"  disabled="disabled"/>
							</c:if>
						</td>
						<th>사원명</th>
						<td>
							<input type="hidden" name="iuser_id" id="iuser_id" value="${detail.iuser_id}">
							<input type="text"   name="iuser_nm" id="iuser_nm" class="inputText" value="${detail.iuser_nm}" disabled="disabled" style="  width: 30%;">
							<c:if test="${flg == 'add' }">
								<input type="button" class="tiny ui blue basic button" id="Manager" value="사원 검색" onclick="javascript:iuserListPopup('${ctx}');" style="margin-left: 5px;" disabled="disabled" >
							</c:if>
						</td>
					</tr>
					<tr>
						<th>연락처</th>
						<td>
							<c:if test="${flg == 'add' }">
								<input type="text" name="cell_ph" id="cell_ph" class="inputText" value="${custcompDetail.cell_ph}" maxlength="9" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='width: 250px;' readonly="readonly"/>
							</c:if>
							<c:if test="${flg == 'detail' }">
								<input type="text" name="comp_ph" id="comp_ph" class="inputText" value="${detail.cell_ph1} - ${detail.cell_ph2} - ${detail.cell_ph3}" maxlength="9" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
							</c:if>
						</td>	
						<th>이메일</th>
							<td>
							<c:if test="${flg == 'add' }">
								<input type="text" name="email" id="email" class="inputText" value="${custcompDetail.email}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='width: 250px;' readonly="readonly" />
							</c:if>
							<c:if test="${flg == 'detail' }">
								<input type="text" name="email" id="email" class="inputText" value="${detail.email1} @ ${ detail.email2}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;'/>
							</c:if>
						</td>	
					</tr>
					<tr>
						<th>부서명</th>
						<td>
							<c:if test="${flg == 'add' }">
								<input type="text" name="org_nm" id="org_nm" class="inputText" value="${custcompDetail.org_nm}" maxlength="3" onkeyup='removeChar(event);' style=' width: 250px;' readonly="readonly" />
							</c:if>
							<c:if test="${flg == 'detail' }">
								<input type="text" name="org_nm" id="org_nm" class="inputText" value="${detail.org_nm}" onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' readonly="readonly"/>
							</c:if>
						</td>
						<th>역할명</th>
						<td>
						    <input type="text"   name="key_part" id="key_part" class="inputText" value="${detail.key_part}" style='ime-mode:disabled; width: 30%; ' readonly="readonly"  > 
						</td>
					</tr>
					
					
				</tbody>
			</table>
			</form>
		</div>
		<form name="form">
		<div id="AddBtnDiv" class="add_bt_position" style="padding-top: 10px; display: none;" >
			<input type="button" id="ccMngAddButton"   class="tiny ui blue button" value="저장" onclick="ccMngAdd('${ctx}');"/>
			<input type="button" id="activeAdd_cancel" class="tiny ui button"      value="취소" onclick="ccMngCancelBtn(this.form);"/>
		</div>
		<div id="mdfyBtnDiv" class="mdfy_bt_position" style="padding-top: 10px; display: none;">
			<input type="button" id="ccMngMdfyButton"  class="tiny ui blue button" value="편집" onclick="mdfyClick();"/>
			<input type="button" id="activeAdd_cancel" class="tiny ui button"      value="취소" onclick="ccMngCancelBtn(this.form);"/>
		</div>
		<div id="saveBtnDiv" class="mdfy_bt_position" style="padding-top: 10px; display: none;">
			<input type="button" id="ccMngMdfyButton"  class="tiny ui blue button" value="저장"  onclick="mdfySave('${ctx}');"/>
			<input type="button" id="activeAdd_cancel" class="tiny ui button"      value="취소"  onclick="ccMngCancelBtn(this.form);" />
		</div>
		</form>
		
		
	</div>
</div>
</body>
</html>