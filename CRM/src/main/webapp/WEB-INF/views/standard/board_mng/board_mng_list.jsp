<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>  
<script src="${ctx}/resources/common/js/common.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/boardmng/boardmng.js"></script>  
<link rel="stylesheet" href="${ctx}/resources/common/css/common.css" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<%-- <%@include file="../include/header.jsp"%> --%>
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"> 
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/common.css" type="text/css" />


<div class= main_div>

 <div class="navi_div">
게시판 관리 > 리스트
</div>

<!-- <div class= search_div>
<div class= search1_div>

</div>
</div> -->

<div class="list_div">
<div class="list1_div" id="list1_div">
   <form name="delAllForm" id ="delAllForm" method="post" action="/board/board_remove">  
	<table class="table table-hover">
	<thead>
						<tr>
							<th><input id="checkall" type="checkbox" onclick="checkAll();"/></th>
							<th>게시판관리번호</th>
							<th>게시판구분</th>
							<th>게시판이름</th>
							<th>생성일</th>
							<th>사용여부</th>
						</tr> 
	</thead>
	<tbody id="board_list_tbody">
 						<c:forEach items="${boardmnglist}" var="boardMngVO"> 
							<tr>
								<td scope="row"><input type="checkbox" id="del_code" name="del_code" value="${boardMngVO.BOARD_MNG_NO}"></td>
   								<td>${boardMngVO.BOARD_MNG_NO}</td>
   								<td>${boardMngVO.BOARD_MNG_CD}</td>
								<td><a href="/board_mng_detail?BOARD_MNG_NO=${boardMngVO.BOARD_MNG_NO}" style="color:black">${boardMngVO.BOARD_NM}</a> </td>
 								<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
										value="${boardMngVO.CREATED}" /> </td>
								<td><c:if test="${boardMngVO.ACTIVE_FLG eq 'Y'}">활성화</c:if>
									<c:if test="${boardMngVO.ACTIVE_FLG eq 'N'}">비활성화</c:if>
								
								</td>
							</tr> 
						</c:forEach>
			 </tbody>
					</table>
					</form>
 
</div>
			
		<div class="paging_div">	
		 <div class="left">
		 <input type="button" id = "board_add_fbtn" class = "btn btn-primary btn-sm" value="추가" onclick="board_add();"/>
		 <input type="button" id ="board_remove_fbtn" class="btn btn-primary btn-sm" value="삭제"  onclick="deleteAction() "/> 
		</div>
		 
		 <div id="pager" class="call_page_div"> 
		
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="ccPageNum" value="${contactPageNum}">
			<c:choose>
				<c:when test="${boardPageNum eq page.firstPageCount}">
	        		<a class="prev">◀◀</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.firstPageCount}">
	        		<a href="javascript:boaradPaging(${page.prevStepPage})" class="prev">◀◀</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${boardPageNum eq page.firstPageCount}">
	        		<a class="prev">◀</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.firstPageCount}">
	        		<a href="javascript:boaradPaging(${page.prevPageNum})" class="prev">◀</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq contactPageNum }">
						<b>
							<a  href="javascript:boaradPaging('${i}');" id="pNum" class="choice">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:boaradPaging('${i}');">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${boardPageNum eq page.totalPageCount}">
	       			<a class="next">▶</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.totalPageCount}">
	       			<a href="javascript:boaradPaging(${page.nextPageNum})" class="next">▶</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${boardPageNum eq page.totalPageCount}">
	       			<a class="next">▶▶</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.totalPageCount}">
	       			<a href="javascript:boaradPaging(${page.nextStepPage})" class="next">▶▶</a>
	    		</c:when>
			</c:choose>
   </div>
		 
		</div>
					
					


<div class = paging_div>

</div> 

</div>

<!-- 페이징 전용 폼 -->
			<form  action="${ctx}/board/board_list" id="boardlistPagingForm" method="post">
				<input type="hidden" name="user_id_sch" value="${user_id_sch}"/>
				<input type="hidden" name="user_nm_sch" value="${user_nm_sch}"/>
				<input type="hidden" name="dept_cd_sch" value="${dept_cd_sch}"/>
			</form>

  


</body>
</html>
 