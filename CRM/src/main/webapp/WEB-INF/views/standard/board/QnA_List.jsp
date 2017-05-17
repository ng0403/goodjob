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

  
 <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>


<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>
<script>
$(function() {

   $('table').tablesort();

});   
</script>

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
 
 
<div class="main_div">

<div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;"> ■ 영업정보 > Q&A </h3>
		
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
       <div class="ui left icon input" style="margin-left:10px">
			<input type="text" placeholder="제목"  id="keyword" name="keyword" ">
			<i class="list icon"></i>
		</div>	
				 <input type="button" class="ui orange button" onclick="boardPaging(1);" value="조회">
		 
				</form> 
				</div>
</div> 
 
<div class="list_div">
 <div class="list1_div" id="list1_div">
 <form name="delAllForm" id ="delAllForm" method="post" action="/board/board_remove"> 
 <input type='hidden' id="BOARD_MNG_NO" name='BOARD_MNG_NO' value="${BOARD_MNG_NO}"/>   

	<table class="ui sortable celled table">
						<thead>
						<tr style="text-align:center">
							<td><input id="checkall" type="checkbox" onclick="checkAll();"/></td>
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
								<td scope="row" style="text-align:center"><input type="checkbox" id="del_code" name="del_code" value="${boardVO.BOARD_NO}"></td>
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
		 <input type="button" id = "board_add_fbtn" class = "tiny ui orange button" value="추가" onclick="board_add();"/>
		  <input type="button" id ="board_remove_fbtn" class="tiny ui orange button" value="삭제"  onclick="deleteAction() "/>	 
		</div>
		
		 <!-- 페이징 처리 -->
			<div id="pageSpace" class="ui right floated pagination menu">
				<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
				<input type="hidden" id="ccPageNum" value="${ccPageNum}">
				<c:choose>
					<c:when test="${ccPageNum eq page.firstPageCount}">
						<a class="icon item">
	        				<i class="left chevron icon"></i>
	        			</a>	
		    		</c:when>
					<c:when test="${ccPageNum ne page.firstPageCount}">
		        		<a href="javascript:boardPaging(${page.prevPageNum})" class="icon item">
		        			<i class="left chevron icon"></i>
		        		</a>
		    		</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
						<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:boardPaging('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:boardPaging('${i}');" class="item" >${i}</a>
						</c:otherwise>
					</c:choose>
				</c:forEach>
				<c:choose>
					<c:when test="${ccPageNum eq page.totalPageCount}">
							<a class="icon item">
		        				<i class="right chevron icon"></i>
		        			</a>	
		    		</c:when>
					<c:when test="${ccPageNum ne page.totalPageCount}">
		       			<a href="javascript:boardPaging(${page.nextPageNum})" class="icon item">
		       				<i class="right chevron icon"></i>
		       			</a>
		    		</c:when>
				</c:choose>
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
