<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<c:if test="${flag == 0}">
	<title>키맨 등록</title>
</c:if>
<c:if test="${flag == 1}">
	<title>키맨 정보</title>
</c:if>
</head>

<body>
	<div class="keymanview" style="width: 98%; padding-left: 10px;">
		<input type="hidden" id="ctx" value="${ctx}"/>
		<div id="title">
			<c:if test="${flag == 0}">
<!-- 				<div class="caption">● 키맨 등록</div> -->
				<h3 class="ui header" style="background: #fff; padding: 10px;">■ 키맨 등록</h3>
			</c:if>
		 	<c:if test="${flag == 1}">
<!-- 				<div class="caption">● 키맨 정보</div> -->
				<h3 class="ui header" style="background: #fff; padding: 10px;">■ 키맨 상세보기</h3>
			</c:if>
		</div>
		<br>
		<div class="bt_position_popup" style="margin-top: -17px;">
		   
		   <div class="bs-example" data-example-id="simple-table">
			 <table id="keymanpopuptable" class="ui celled table">  			
					<tbody id="tbody">
						<tr>
							<th>연락처명</th>
							<td>
							    <input type="hidden" id="cont_id" name="cont_id" /> 
							    <input type="hidden" id="cust_id" name="cust_id" value="${cust_id}"/> 
								<input type="text" name="cont_nm" id="cont_nm" class="inputText" value="${kmVO.cust_nm}" autofocus="autofocus" style="margin-right: 5px;"/>
								<input type="button" value="연락처" id="contact" class="tiny ui blue basic button" onclick="javascript:contactListPopup('${ctx}');">
							</td>
							
						</tr>
 						<tr>
							<th>역할명</th>
							<td><input type="text" name="key_part" id="key_part" class="inputText" value="${kmVO.key_part}" /></td>
						</tr>
						<tr>
							<th>직급</th>
							<td><input type="text" name="key_pos" id="key_pos" class="inputText" value="${kmVO.key_pos}" /></td>
						</tr>
						<tr>
							<th>연락처</th>
							<td>
								<input type="text" name="cell_ph" id="cell_ph" class="inputText" value="${kmVO.cell_ph}"  onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' />
							</td>	
						</tr>
						<tr>
							<th>이메일</th>
							<td>
								<input type="text" name="email" id="email" class="inputText" value="${kmVO.email}"   onkeyup='removeChar(event);' style='ime-mode:disabled; width: 250px;' />
							</td>	
						</tr>
					</tbody>
				</table>
			</div>
			
			<c:if test="${flag == 0}">
				<div class="keyman_bt_position" style="padding-top: 10px;">
					<input type="button" class="tiny ui blue button" value="저장" id="keyman_add" onclick="keymanAdd();"/>
					<input type="button" class="tiny ui button" value="취소" id="keyman_cancel" onclick="keymancancle();"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}" >
				<div class="keyman_bt_position" style="padding-top: 10px;">
					<input type="button" class="tiny ui blue button" value="저장" id="keyman_mdfy" onclick="keymanMdfy1('${kmVO.cust_id}','${kmVO.cont_id}');"/>
					<input type="button" class="tiny ui button" value="취소" id="keyman_cancel"  onclick="keymancancle();"/>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>