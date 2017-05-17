<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/category/categoryTree.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/category/categoryTree.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<script type="text/javascript">
$("#navisub11").show();
$("#navicategory").css("font-weight", "bold");
</script>
<title>리스트</title>
</head>
<body>
	<input id="ctx" type="hidden" value="${ctx}"/>
	<input id="cate_mode" type="hidden" value="waiting"/>
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 기준정보 > 상품/서비스 카테고리</h3>
		</div>
	</div>
	<div id="categoryDiv">
		<ul id="cateTree">
			<c:forEach var="cate" items="${cateTree}">
				<li>
					<c:if test="${empty cate.cateVO}">
						<img class="no_cateFlag" src="${ctx}/resources/image/no_treebtn.png"/>
					</c:if>
					<c:if test="${!empty cate.cateVO}">
						<img class="cateFlag" src="${ctx}/resources/image/treebtn1.png"/>
					</c:if>
					<input type="checkbox" class="masterCheck" value="${cate.cate_id}"/>
					<c:if test="${cate.act_yn == 'Y'}">
						<a class="master_cate">${cate.cate_nm}</a>
					</c:if>
					<c:if test="${cate.act_yn == 'N'}">
						<a class="master_cate"><del>${cate.cate_nm}</del></a>
					</c:if>	
					<c:if test="${!empty cate.cateVO}">
						<ul class="catetree_sub">					
						<c:forEach var="sub" items="${cate.cateVO}">
							<li style="margin-left:15px;">
								<input type="checkbox" class="subCheck" value="${sub.cate_id}"/>
								<c:if test="${sub.act_yn == 'Y'}">
									<a class="sub_cate">${sub.cate_nm}</a>
								</c:if>
								<c:if test="${sub.act_yn == 'N'}">
									<a class="sub_cate"><del>${sub.cate_nm}</del></a>
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
		<!-- 기본 버튼 -->
	<div class="cata_bt_position">
		<button type="button" class="tiny ui button" id="cateAddBtn">추가</button>
		<button type="button" class="tiny ui orange button" id="cateDelBtn">삭제</button>
		<button type="button" class="tiny ui button" id="cateAllCancelBtn">선택취소</button>
	</div>
</body>
</html>