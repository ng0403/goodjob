<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/menu/menuPMenuNamePopup.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<title>상위메뉴 팝업창</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/menu/menuPMenuNamePopup.css" type="text/css" />
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 상위메뉴 검색창</h3>
</div>
<div class="bt_position_popup" style="text-align: left; padding-top: 10px;">
		<form name="searchForm" method="post" action="${ctx}/menuPmenuSearch">
			<div class="ui left icon input">
			<select name="keyfield">
				<option value="p_m_name">메뉴명</option>
				<option value="m_id">메뉴ID</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			</div>
			<input type="submit" id="search_btn" type="submit" class="tiny ui blue button" value="검색">
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table" style="padding-top: 10px;">
	<form name="delAllForm" id="delAllForm" method="post" action="" >	
		<table id="mastertable" class="ui celled table">
			<thead>
				<tr>
					<th style="width:5%;"><!-- <input id="allCheck" type="checkbox"/> --></th>
					<th style="width:28%;">메뉴ID</th>
					<th style="width:27%;">매뉴명</th>
					<th style="width:20%;">매뉴URL</th>
					<th style="width:20%;">활성화여부</th>
					<th></th>
<!-- 					<th style="width:13%;">최초등록자</th> -->
<!-- 					<th style="width:12%;">최초등록일</th> -->
<!-- 					<th style="width:13%;">최종변경자</th> -->
<!-- 					<th style="width:15%;">최종변경일</th> -->
				</tr>
			</thead>
			<tbody>
				<c:forEach var="menuList" items="${menuList}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<th style="width:5%;"scope="row"><input type="checkbox" class="menuCheck" id="ak" name="menuCheck" value="${menuList.menu_id}"></th>
					<td style="width:28%;" id="menu_id">${menuList.menu_id}</td>
					<td style="width:27%;" id="menu_name">${menuList.menu_nm}</td>
					<td style="width:20%;">${menuList.menu_url}</td>
					<td style="width:20%;">${menuList.act_yn}</td>
<%-- 					<td style="width:12%;">${menuList.fst_reg_id}</td> --%>
<!-- 					<td style="width:14%;"> -->
<%-- 						<fmt:formatDate value="${menuList.fst_reg_dt}" pattern="yyyy-MM-dd"/> --%>
<!-- 					</td> -->
<%-- 					<td style="width:12%;">${menuList.fin_mdfy_id}</td> --%>
<!-- 					<td style="width:15%;"> -->
<%-- 						<fmt:formatDate value="${menuList.fin_mdfy_dt}" pattern="yyyy-MM-dd"/> --%>
<!-- 					</td> -->
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="tiny tiny ui blue button" value="선택" id="choiceMenu"/>
		<input type="button" class="tiny tiny ui button" value="취소" id="restMenu"/>
	</div>
</body>
</html>