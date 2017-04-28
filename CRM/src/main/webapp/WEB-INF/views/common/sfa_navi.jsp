<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sample02.css" type="text/css" />

<script src="${ctx}/resources/common/js/standard/common/navi.js"></script>
<script type="text/javascript">
	var Const = Const || {};
	Const.CTX = "${ctx}";
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="naviT">
	<nav id="topMenu" > 		
		<ul id="test">
			<c:forEach var="menu" items="${menuList}" varStatus="nms">
				<li class="menuNavi">
					<c:if test="${empty menu.menuVO}">
						<a href="${ctx}/${menu.menu_url}" class="navibtn"> 
<%-- 							<img id="icon" alt="home" src="${ctx}/resources/image/icon/home.png">  --%>
							${menu.menu_nm} 
						</a>
					</c:if> 
					
					<c:if test="${!empty menu.menuVO}">
						<a href="#" class="navibtn">${menu.menu_nm}</a>
					</c:if>
					<ul class="hide1" id="navisub${nms.count}">
						<c:forEach var="sub" items="${menu.menuVO}">
							<li 
>
								<a href="${ctx}/${sub.menu_url}" id="navi${sub.menu_url}">${sub.menu_nm} </a>
							</li>
						</c:forEach>
					</ul>
				</li>
			</c:forEach>
		</ul>
	</nav>
</div>
</body>
</html>