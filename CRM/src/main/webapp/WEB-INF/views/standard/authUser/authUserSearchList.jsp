<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authUserSearchList.js"></script>
<title>권한 팝업창</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authUserSearchList.css" type="text/css" />

<link rel="stylesheet" href="${ctx}/resources/common/Semantic/semantic.css" type="text/css" />
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
<div id="title">
<br>
<div class="caption">■ 권한 검색창</div>
<div class="bt_position_popup">
		<form name="searchForm" method="post" action="${ctx}/menuAuthSearch">
			<select name="keyfield">
				<option value="a_name">권한이름</option>
				<option value="a_id">권한ID</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="tiny ui blue button">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="mastertable">
			<thead style="padding-left:3.5px;">
				<tr>
					<th style="width:3%;"><!-- <input id="allCheck" type="checkbox"/> --></th>
					<td style="width:11%;">권한ID</td>
					<td style="width:15%;">권한이름</td>
					<td style="width:14.5%;">활성화여부</td>
					<td style="width:14%;">최초등록자</td>
					<td style="width:14.1%;">최초등록일</td>
					<td style="width:14.2%;">최종변경자</td>
					<td style="width:21%;">최종변경일</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="auth" items="${auth}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<th style="width:3%;" scope="row"><input type="checkbox" class="authCheck" id="ak" name="authCheck" value="${auth.auth_id}"></th>
					<td style="width:11%;">${auth.auth_id}</td>
					<td style="width:15%;">${auth.auth_nm}</td>
					<td style="width:15%;">${auth.act_yn}</td>
					<td style="width:14%;">${auth.fst_reg_id}</td>
					<td style="width:14%;">${auth.fst_reg_dt}
					</td>
					<td style="width:14%;">${auth.fin_mdfy_id}</td>
					<td style="width:15%;">${auth.fin_mdfy_dt}
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="tiny ui button" value="선택" id="choiceAuth"/>
		<input type="button" class="tiny ui button" value="취소" id="restAuth"/>
	</div>
</body>
</html>