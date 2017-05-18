<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>


<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />

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
		   		<input type="hidden" id="cont_id" value="${cont_id}"/>
<%-- 		   		<input type="hidden" id="cont_id" name="cont_id" value="${kmVO.cont_id}"/>
 --%>			 <table id="keymanpopuptable">  			
					<tbody id="tbody">
						<tr>
							<th><span style="color:red">*고객사</span></th>
							<td><input type="text" name="cust_nm" id="cust_nm" class="int" value="${kmVO.cust_nm}" autofocus="autofocus" readonly="readonly"/>
							<input type="button" value="고객" id="customer" class="tiny ui orange button" onclick="javascript:custcompListPopup('${ctx}');">
							</td>
							 <input type="hidden" id="cust_id" name="cust_id" class="int" />  
							
							
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
				<div class="detailBtn" style="margin-top:10px">
					<input type="button" class="tiny ui orange button" value="저장" id="keyman_add" onclick="keymanAdd();"/>
					<input type="button" class="tiny ui button" value="취소" id="keyman_cancel" onclick="keymancancle();"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}">
				<div class="detailBtn" style="margin-top:10px">
					<input type="button" class="tiny ui orange button" value="저장" id="keyman_mdfy" onclick="keymanMdfy('${kmVO.cust_id}','${kmVO.cont_id}');"/>
					<input type="button" class="tiny ui button" value="취소" id="keyman_cancel"  onclick="keymancancle();"/>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>