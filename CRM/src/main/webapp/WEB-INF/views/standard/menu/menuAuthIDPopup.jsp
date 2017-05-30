<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/menu/menuAuthIDPopup.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<title>권한 팝업창</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/menu/menuAuthIDPopup.css" type="text/css" />
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 권한 검색창</h3>
</div>
<div class="bt_position_popup" style="text-align: left; padding-top: 10px;">
		<form name="searchForm" method="post" action="${ctx}/menuAuthSearch">
			<select name="keyfield">
				<option value="a_name">권한이름</option>
				<option value="a_id">권한ID</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="tiny tiny ui basic blue button">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table" style="padding-top: 10px;">
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="mastertable" class="ui celled table">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox"/></th>
					<th style="width:10%;">권한ID</th>
					<th style="width:15%;">권한이름</th>
					<th style="width:15%;">활성화여부</th>
					<th style="width:15%;">최초등록자</th>
					<th style="width:15%;">최초등록일</th>
					<th style="width:15%;">최종변경자</th>
					<th style="width:15%;">최종변경일</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="authList" items="${authList}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<th scope="row"><input type="checkbox" class="authCheck" id="ak" name="authCheck" value="${authList.auth_id}"></th>
					<td style="width:10%;">${authList.auth_id}</td>
					<td style="width:15%;">${authList.auth_nm}</td>
					<td style="width:15%;">${authList.act_yn}</td>
					<td style="width:15%;">${authList.fst_reg_id}</td>
					<td style="width:15%;">
						<fmt:formatDate value="${authList.fst_reg_dt}" pattern="yyyy-MM-dd"/>
					</td>
					<td style="width:15%;">${authList.fin_mdfy_id}</td>
					<td style="width:15%;">
						<fmt:formatDate value="${authList.fin_mdfy_dt}" pattern="yyyy-MM-dd"/>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="tiny tiny ui blue button" value="선택" id="choiceAuth"/>
		<input type="button" class="tiny tiny ui button" value="취소" id="restAuth"/>
	</div>
</body>
</html>