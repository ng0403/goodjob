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
		   		<input type="hidden" id="cust_id" value="${cust_id}"/>
		   		<input type="hidden" id="kmn_id" name="kmn_id" value="${kmVO.kmn_id}"/>
			 <table id="keymanpopuptable">  			
					<tbody id="tbody">
						<tr>
							<th>키맨명</th>
							<td><input type="text" name="kmn_nm" id="kmn_nm" class="int" autofocus="autofocus" value="${kmVO.kmn_nm}"/></td>
						</tr>
						<tr>
							<th>직급</th>
							<td><input type="text" name="pos_nm" id="pos_nm" class="int" value="${kmVO.pos_nm}"/></td>
						</tr>
						<tr>
							<th>전화번호</th>
							<td>
								<input type="text" id="ph1" name="ph1" class="int_tel" value="${kmVO.ph1}"/>
								-
								<input type="text" id="ph2" name="ph2" class="int_tel" value="${kmVO.ph2}"/>
								-
								<input type="text" id="ph3" name="ph3" class="int_tel" value="${kmVO.ph3}"/>
							</td>
						</tr>
						<tr>
							<th>이동전화번호</th>
							<td>
								<input type="text" id="cell_ph1" name="cell_ph1" class="int_tel" value="${kmVO.cell_ph1}"/>
								-
								<input type="text" id="cell_ph2" name="cell_ph2" class="int_tel" value="${kmVO.cell_ph2}"/>
								-
								<input type="text" id="cell_ph3" name="cell_ph3" class="int_tel" value="${kmVO.cell_ph3}"/>
							</td>
						</tr>
						<tr>
							<th>이메일</th>
							<td>
								<input type="text" id="email1" name="email1" class="int_email" value="${kmVO.email1}"/>@
								&nbsp;<input type="text" id="email2" name="email2" class="int_email" value="${kmVO.email2}"/>
							</td>
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
					<input type="button" class="keyman_bt" value="취소" id="keyman_cancel"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}">
				<div class="keyman_bt_position">
					<input type="button" class="keyman_bt" value="저장" id="keyman_mdfy" onclick="keymanMdfy();"/>
					<input type="button" class="keyman_bt" value="취소" id="keyman_cancel"/>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>