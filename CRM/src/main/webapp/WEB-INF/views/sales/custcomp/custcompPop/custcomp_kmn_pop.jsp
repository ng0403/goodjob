<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_kmnpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<c:if test="${flag == 0}">
	<title>키맨 등록</title>
</c:if>
<c:if test="${flag == 1}">
	<title>키맨 정보</title>
</c:if>
</head>

<body>
	<div class="keymanview">
		<input type="hidden" id="ctx" value="${ctx}"/>
		<div id="title">
			<c:if test="${flag == 0}">
				<div class="caption">● 키맨 등록</div>
			</c:if>
		 	<c:if test="${flag == 1}">
				<div class="caption">● 키맨 정보</div>
			</c:if>
		</div>
		<br>
		<div class="bt_position_popup">
		   
		   <div class="bs-example" data-example-id="simple-table">
<%-- 		   		<input type="hidden" id="cont_id" value="${cont_id}"/>
 --%><%-- 		   		<input type="hidden" id="cont_id" name="cont_id" value="${kmVO.cont_id}"/>
 --%>			 <table id="keymanpopuptable">  			
					<tbody id="tbody">
						<tr>
							<th>연락처명</th>
							<td><input type="text" name="cont_nm" id="cont_nm" class="int" value="${kmVO.cust_nm}" autofocus="autofocus"/></td>
							    <input type="hidden" id="cont_id" name="cont_id" class="int"/> 
							    <input type="hidden" id="cust_id" name="cust_id" class="int" value="${cust_id}"/> 
							<td><input type="button" value="연락처" id="contact" class="cont_bt" onclick="javascript:contactListPopup('${ctx}');"></td>
							
						</tr>
 						<tr>
							<th>역할</th>
							<td><input type="text" name="key_part" id="key_part" class="int" value="${kmVO.key_part}"/></td>
						</tr>
						<tr>
							<th>직급</th>
							<td><input type="text" name="key_pos" id="key_pos" class="int" value="${kmVO.key_pos}"/></td>
						</tr>
						<tr>
							<th>직무</th>
							<td><input type="text" name="key_job" id="key_job" class="int" value="${kmVO.key_job}"/></td>
						</tr>
						  
						<tr>
							<th>메모</th>
							<td><textarea cols="10" rows="5" id="memo" name="memo" class="int_memo" style="resize:none; overflow: auto;">${kmVO.memo}</textarea></td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<c:if test="${flag == 0}">
				<div class="keyman_bt_position">
					<input type="button" class="keyman_bt" value="저장" id="keyman_add" onclick="keymanAdd();"/>
					<input type="button" class="keyman_bt" value="취소" id="keyman_cancel" onclick="keymancancle();"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}">
				<div class="keyman_bt_position">
					<input type="button" class="keyman_bt" value="저장" id="keyman_mdfy" onclick="keymanMdfy1('${kmVO.cust_id}','${kmVO.cont_id}');"/>
					<input type="button" class="keyman_bt" value="취소" id="keyman_cancel"  onclick="keymancancle();"/>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>