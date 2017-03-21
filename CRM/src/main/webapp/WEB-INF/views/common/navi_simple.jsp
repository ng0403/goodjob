<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/navi.css" type="text/css" />
	<script type="text/javascript">
	var Const = Const || {};
	Const.CTX = "${ctx}";
	</script>
<script src="${ctx}/resources/common/js/standard/common/navi.js"></script>

<style type="text/css">
#icon {
	width: 25px;
	height: 25px;
	
}

</style>

<title>Home</title>
</head>

<body>

	<div class="naviT">
		<ul id="test">
			
<!-- 			<div id="css_tabs"> -->
<!-- 				라디오 버튼 -->
<!-- 				<input id="tab1" type="radio" name="tab" checked="checked"/>  -->
<!-- 				<input id="tab2" type="radio" name="tab" />  -->
<!-- 				<input id="tab3" type="radio" name="tab" />  -->
		
<!-- 				라벨 : 화면에 표시되는 탭 제목 -->
<!-- 				<label for="tab1">상세정보</label>  -->
<!-- 				<label for="tab2">영업활동 </label>  -->
<!-- 				<label for="tab3">견적</label>  -->
<!-- 			</div> -->
			
			<c:forEach var="menu" items="${menuList}" varStatus="nms">
				<li class="navi">
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
							<li class="subbtn">
								<a href="${ctx}/${sub.menu_url}" id="navi${sub.menu_url}">${sub.menu_nm} </a>
							</li>
						</c:forEach>
					</ul>
				</li>
			</c:forEach>
		</ul>
	</div>
</body>
</html>
