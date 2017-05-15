<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
 <c:set var="SessionID" value="${sessionScope.user_id}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>  
<script src="${ctx}/resources/common/js/common.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/qna_list.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>



<style>

label { 
	margin-top: 5px;
	margin-left: 5px;
}

#keyword {
	width: 200px;
	margin-left: -10px;
}

#board_inqr_fbtn {
	width: 55px;
	height: 34px;
}
</style>
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
 <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
 
<div class="main_div">

<div id="title">
		<div class="caption">■ Q&A > 리스트
		</div>
</div>

<div class="search_div">
 <div class="search2_div">
<!-- Q&A 리스트, 조회화면 -->
	    <form name="frm_QnA" id="frm_QnA" action="/board/search_QnA"	enctype="multipart/form-data"  method="post">
	 
				<!-- <label for="user_id">질문유형 :</label> -->
					<!--  <select id="qna_type" name="qna_type">
					    <option value=""> -- 선택 -- </option>
 							<option value="Y">Y</option>
 							<option value="N">N</option>
 					</select> -->
						<label>답변	 :</label>
					<select id="qna_answer" name="qna_answer">
					    <option value=""> -- 답변 -- </option>
 							<option value="Y">Y</option>
 							<option value="N">N</option>
 					</select>
				 <label for="keyword">제목 :</label>
				 <input type="text" id="keyword" name="keyword" class="inputTxt" >&nbsp; 
				 <input type="button" class="button search_btn" onclick="boardPaging(1);" value="조회">
		 
				</form> 
				</div>
</div> 
 
<div class="list_div">
 <div class="list1_div" id="list1_div">
 <form name="delAllForm" id ="delAllForm" method="post" action="/board/board_remove"> 
 <input type='hidden' id="BOARD_MNG_NO" name='BOARD_MNG_NO' value="${BOARD_MNG_NO}"/>   

	<table class="table table-hover">
						<thead>
						<tr>
							<th><input id="checkall" type="checkbox" onclick="checkAll();"/></th>
							<th>번호</th>
							<th>질문유형</th>
							<th>답변상태</th>
							<th>제목</th>
							<th>작성자</th>
							<th>작성일</th>
							<th>조회수</th>
						</tr > 
						</thead>
 					   <tbody class="qna_list" id="board_list_tbody">
 				 <c:forEach items="${boardlist}" var="boardVO"> 
						    <tr class="open_list">
								<td scope="row"><input type="checkbox" id="del_code" name="del_code" value="${boardVO.BOARD_NO}"></td>
   								<td>${boardVO.BOARD_NO}</td>
   								<td>${boardVO.CD_NM}</td>
   								<td>${boardVO.ANSWER_FLG}</td>
								<td><a href="/QnA_detail?BOARD_NO=${boardVO.BOARD_NO}" style="color:black">${boardVO.TITLE}</a> </td>
								<td>${boardVO.CREATED_BY} </td>
								<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
										value="${boardVO.CREATED}" /></td>
								<td>${boardVO.VIEW_CNT}</td>
							</tr> 
						</c:forEach>
						 </tbody>
					</table>
					</form>
				</div>
				</div>	
		 <div class="bottom_div">
		 
		 <div class="functionBtn_div">
		 <input type="button" id = "board_add_fbtn" class = "button functionBtn" value="추가" onclick="board_add();"/>
		  <input type="button" id ="board_remove_fbtn" class="button functionBtn" value="삭제"  onclick="deleteAction() "/>	 
		</div>
		
		 <div id="pageSpace" class="pagination"> 
		
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="ccPageNum" value="${contactPageNum}">
			<c:choose>
				<c:when test="${boardPageNum eq page.firstPageCount}">
	        		<a class="prev">◀◀</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.firstPageCount}">
	        		<a href="javascript:boardPaging(${page.prevStepPage})" class="prev">◀◀</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${boardPageNum eq page.firstPageCount}">
	        		<a class="prev">◀</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.firstPageCount}">
	        		<a href="javascript:boardPaging(${page.prevPageNum})" class="prev">◀</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq contactPageNum }">
						<b>
							<a  href="javascript:boardPaging('${i}');" id="pNum" class="choice">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:boardPaging('${i}');">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${boardPageNum eq page.totalPageCount}">
	       			<a class="next">▶</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.totalPageCount}">
	       			<a href="javascript:boardPaging(${page.nextPageNum})" class="next">▶</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${boardPageNum eq page.totalPageCount}">
	       			<a class="next">▶▶</a>
	    		</c:when>
				<c:when test="${boardPageNum ne page.totalPageCount}">
	       			<a href="javascript:boardPaging(${page.nextStepPage})" class="next">▶▶</a>
	    		</c:when>
			</c:choose>
   </div>
				
		</div>
					
					
</div>
 

</div>

<!-- 페이징 전용 폼 -->
			<form  action="${ctx}/board/QnAInqr" id="boardlistPagingForm" method="post">
				<input type="hidden" name="user_id_sch" value="${user_id_sch}"/>
				<input type="hidden" name="user_nm_sch" value="${user_nm_sch}"/>
				<input type="hidden" name="dept_cd_sch" value="${dept_cd_sch}"/>
			</form>

 

</body>
</html>
<%-- <%@include file="../include/footer.jsp"%> --%>
