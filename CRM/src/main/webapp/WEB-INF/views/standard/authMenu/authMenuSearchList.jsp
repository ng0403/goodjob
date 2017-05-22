<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authMenuSearchList.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/Semantic/semantic.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authMenuSearchList.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>리스트</title>
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
	<div id="title">
	<br>
	<div class="caption">
		<h3 class="ui header" style="background: #fff; padding: 10px;">■ 메뉴 검색창</h3>
	</div>
	
	<div class="bt_position_popup">
		<form name="searchForm" method="post" action="${ctx}/authMenuSearchList">
			<select name="keyfield">
				<option value="m_name">메뉴이름</option>
				<option value="m_id">메뉴ID</option>
			</select> 
			
			<input id="title_text" class="inputText" type="text" name="keyword"> &nbsp;
			
			<button id="search_btn" type="submit" class="tiny ui orange button">검색</button>
		</form>
	</div>

	</div>	
   
   	<div class="bs-example" data-example-id="simple-table">
   		<form name="delAllForm" id="delAllForm" method="post">	
			<table id="mastertable" class="ui celled table">
				<thead>
					<tr>
						<th style="width:4.7%;"><!-- <input id="allCheck" type="checkbox"/> --></th>
						<td style="width:12.7%;">메뉴ID</td>
						<td style="width:13.7%;">매뉴이름</td>
						<td style="width:27.3%;">메뉴URL</td>
						<td style="width:13.9%;">메뉴레벨</td>
						<td style="width:13.4%;">상위메뉴명</td>
						<td style="width:16%;border-right:none;">활성화여부</td>
						<td style="border-left:none;"></td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="menu" items="${menu}">
					<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
						<th style="width:5%;" scope="row"><input type="checkbox" class="authCheck" id="ak" name="authCheck" value="${menu.menu_id}"></th>
						<td style="width:10%;">${menu.menu_id}</td>
						<td style="width:15%;">${menu.menu_nm}</td>
						<td style="width:25%;">${menu.menu_url}</td>
						<td style="width:15%;">${menu.menu_lev}</td>
						<td style="width:15%;">
						<c:if test="${empty menu.up_menu_nm}">상위 없음	</c:if>
						<c:if test="${not empty menu.up_menu_nm ne ''}">${menu.up_menu_nm}</c:if>
						</td>						
						<td style="width:15%;">${menu.act_yn}</td>
					</tr>
					</c:forEach>
				</tbody>
			</table>
		</form>
	</div>

	<div class="bt_position">
		<input type="button" class="tiny ui button" value="선택" id="choiceAuth"/>
		<input type="button" class="tiny ui button" value="취소" id="restAuth"/>
	</div>
</body>
</html>