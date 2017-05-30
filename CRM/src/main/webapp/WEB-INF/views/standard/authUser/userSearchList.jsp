<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
 

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/userSearchList.js"></script>
<title>사용자 팝업창</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/userSearchList.css" type="text/css" />
<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>
<script>
$(function() {

   $('table').tablesort();

});   
</script>
</head>
<body>
<input id="ctx" type="hidden" value="${ctx}"/>
 <br>
   <div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;"> ■ 사용자 검색창</h3>
		 
		</div>
</div>




 <div class="search_div"  id="search_div" >
		<form name="searchForm" method="POST" action="${ctx}/userSearch">
			<select name="keyfield">
				<option value="u_id">사용자ID명</option>
				<option value="u_name">사용자명</option>
				<option value="o_name">조직명</option>
			</select>
 			
			 <input placeholder="내용을 입력해 주세요."  id="title_text" type="text" name="keyword" class="int_common" style="background:white"> &nbsp;
			<button id="search_btn" type="submit" class="tiny ui blue button">조회</button>
			</form>
		</div>
    
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post">	
		<table id="mastertable" class="ui sortable celled table" >
			<thead>
				<tr style="text-align:center">
					<th style="width:74px;"><!-- <input id="allCheck" type="checkbox"/> --></th>
					<th style="width:166px;">사용자ID</th>
					<th style="width:149px;">사용자명</th>
					<th style="width:149px;">조직명</th>
					<th style="width:240px;border-right:none;">이메일</th>
					<th style="width:15px;border-left:none;"></th>
<!-- 					<th style="width:20%;">연락처</td> -->
<!-- 					<th style="width:10%;">권한</td> -->
<!-- 					<th style="width:10%;">사용자구분</td> -->
<!-- 					<th style="width:10%;">상태</td> -->
				</tr>
			</thead>
			<tbody>
				<c:forEach var="list" items="${user}">
				<tr onMouseOver="this.style.backgroundColor='#ebe7e7'" onMouseOut="this.style.backgroundColor=''">
					<th scope="row" style="text-align:center;width:70px;"><input type="checkbox" class="authCheck" id="ak" name="authCheck" value="${list.iuser_id}"></th>
					<td style="width:161px;">${list.id_nm}</td>
					<td style="width:150px;">${list.iuser_nm}</td>
					<td style="width:150px;">${list.org_nm}</td>
					<td style="width:234px;">${list.email1}@${list.email2}</td>
<%-- 					<td style="width:20%; text-align:center">${list.cell_ph1}-${list.cell_ph2}-${list.cell_ph3}</td> --%>
<!-- 					<td style="width:10%; text-align:center"> -->
<%-- 					<c:if test="${empty list.auth_nm}"> --%>
<!-- 						권한없음 -->
<%-- 					</c:if> --%>
<%-- 					<c:if test="${not empty list.auth_nm}"> --%>
<%-- 						${list.auth_nm} --%>
<%-- 					</c:if> --%>
<!-- 					</td> -->
<%-- 					<td style="width:10%; text-align:center ">${list.cd_nm}</td> --%>
<!-- 					<td style="width:10%; text-align:center"> -->
<%-- 					<c:if test="${list.act_yn=='Y'}">활성화</c:if> --%>
<%-- 					<c:if test="${list.act_yn=='N'}">비활성화</c:if> --%>
<!-- 					</td> -->
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