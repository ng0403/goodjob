<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
 <c:set var="SessionID" value="${sessionScope.user_id}" />

<%-- <%@include file="../include/header.jsp"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- 합쳐지고 최소화된 최신 CSS -->
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/qna_list.js"></script>  
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/reply.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"> 
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/mps/BoardCSS/boardCSS.css" type="text/css" />


<form role="form" name = "form_modify" method="post">
 <input type='hidden' id="BOARD_NO" name='BOARD_NO' value="${boardlist.BOARD_NO}"> 
 <input type='hidden' id="BOARD_MNG_NO" name="BOARD_MNG_NO" value= "${boardlist.BOARD_MNG_NO}">
</form>
 
 <div class="navi_div">
		Q&A > 리스트 > 게시글
</div>

<div class="container"> <!-- 전체 div-->

<div> <!-- 제목 div-->
<label id="txt" >제  목</label>
 <input type="text" class="inputTxt" id="title" value= "${boardlist.QUESTION_TITLE}"  readonly="readonly" />
</div> 

<div>
<label for="created_by">${boardlist.CREATED_BY}</label> 
<%-- <label for="created"><fmt:formatDate pattern="yyyy-MM-dd HH:mm"	value="${boardlist.CREATED}" /></label> --%>
<label for="created">${boardlist.CREATED}</label>
 <label for="view_cnt">조회 : ${boardlist.VIEW_CNT}</label>
</div> 

<div> <!-- 내용 div -->
 <label id="txt" >내  용</label> 
 <textarea class="form-control" rows="10" id="content"  readonly="readonly" >${boardlist.CONTENT}</textarea>
</div> 
 
<c:choose>
	<c:when test= "${sessionID eq 'admin'}">
	<div id="btns"> <!-- 버튼 div  -->
		<input type="button" id="board_modify_fbtn" class = "button search_btn" value="답변" onClick="board_modify();"/> 
		<input type="button" id="board_remove_fbtn" class="button functionBtn" value="삭제" onClick="board_detail_remove();"/>  
		<input type="button" class="button search_btn" id="board_list_fbtn" value="목록" onClick="go_list();"/>
	</div>
	</c:when>
 	<c:otherwise>
	<div id="btns"> <!-- 버튼 div  -->
		<input type="button" id="board_modify_fbtn" class = "button search_btn" value="편집" onClick="board_modify();"/> 
		<input type="button" id="board_remove_fbtn" class="button functionBtn" value="삭제" onClick="board_detail_remove();"/>  
		<input type="button" class="button search_btn" id="board_list_fbtn" value="목록" onClick="go_list();"/>
	</div>
	</c:otherwise>
	</c:choose>
	
	<!-- 댓글div -->
	<c:choose>
	<c:when test= "${sessionID eq 'admin'}"> 
	<div id="reply_div" class="timeline-body" style ="height:50px; margin-top:10px; width:90% "> 
 
		<div class="col-sm" style=" height:40px" style="float:left; width:70%">
			<textarea id = "reply_content" class="form-control" rows="2" id="content" style="width:100%" ></textarea>
 
		</div> 
		<!-- 댓글 등록 버튼 -->
		 <div id="detail_btn_div" class="reply_div col-md-4" style="float:right; margin-top:-40px; margin-right:-380px;" >
	     <input type="button" id="reply_add_fbtn" class = "button functionBtn " value="저장" onclick="reply_add();"/> 
		</div>
 
	</div>
	</c:when>
	<c:otherwise>
	</c:otherwise>
	</c:choose>
 
	<div class="col-md-12" style="margin-top:10px">
		<table id = "reply_table" class="table">
		<thead class="reply_list" id="reply_list_tbody">
		 
		</thead>
		</table> 
	</div> 

</div>
 
 
</div>
 
 
 <div class="col-md-12" id="reply_list" style="margin-top:10px">
 
 <table id = "reply_table" class="table">
 
 </table>
 
 </div> 

</div>	

 

</body>
</html>
<%-- <%@include file="../include/footer.jsp"%> --%>
