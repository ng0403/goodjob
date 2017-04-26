﻿<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/menu/menuTree.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/standard/menu/menuTree.css"/>
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#navimenu").css("font-weight", "bold");
</script>
</head>
<body>
	<input id="ctx" type="hidden" value="${ctx}"/>
	<input id="menu_mode" type="hidden" value="waiting"/>
    <div id="title">
		<div class="caption">■ 메뉴목록</div>
	</div>
	
	<div id="menuTreeForm">
		<ul id="menuTree">
			<c:forEach var="menu" items="${menuTree}">
				<li>
					<c:if test="${empty menu.menuVO}">
						<img class="no_menuFlag" src="${ctx}/resources/image/no_treebtn.png"/>
					</c:if>
					<c:if test="${!empty menu.menuVO}">
						<img class="menuFlag" src="${ctx}/resources/image/treebtn1.png"/>
					</c:if>
					<input type="checkbox" class="masterCheck" value="${menu.menu_id}"/>
					<c:if test="${menu.act_yn == 'Y'}">
						<a class="master_menu">${menu.menu_nm}</a>
					</c:if>
					<c:if test="${menu.act_yn == 'N'}">
						<a class="master_menu"><del>${menu.menu_nm}</del></a>
					</c:if>	
					<c:if test="${!empty menu.menuVO}">
						<ul class="menutree_sub">					
						<c:forEach var="sub" items="${menu.menuVO}">
							<li>
								&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" class="subCheck" value="${sub.menu_id}"/>
								<c:if test="${sub.act_yn == 'Y'}">
									<a class="sub_menu">${sub.menu_nm}</a>
								</c:if>
								<c:if test="${sub.act_yn == 'N'}">
									<a class="sub_menu"><del>${sub.menu_nm}</del></a>
								</c:if>
							</li>
						</c:forEach>
						</ul>
					</c:if>
				</li>
			</c:forEach>
		</ul>
	</div>
	<p>
	<br>
	<!-- 버튼 -->
	<div class="bt_position">
		<button type="button" class="menutree_btn" id="menuAddBtn">추가</button>
		<button type="button" class="menutree_btn" id="menuDelBtn">삭제</button>
		<button type="button" class="menutree_btn" id="menuAllCancelBtn">선택취소</button>		
	</div>
</body>
</html>