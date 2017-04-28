<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
 <c:set var="SessionID" value="${sessionScope.user_id}" />
<%-- <%@include file="../include/header.jsp"%> --%>

 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/board/boardCSS.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/board_list.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/reply.js"></script>  
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/common.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/common_pop.css" type="text/css" />--%> 
 <!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
부가적인 테마
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
합쳐지고 최소화된 최신 자바스크립트
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script> 

<title>Insert title here</title>
</head>
<body>
 
 
<form role="form" name = "form_modify" method="post">
 <input type='hidden' id="BOARD_NO" name='BOARD_NO' value="${boardlist.BOARD_NO}"/> 

 <input type='hidden' id="REPLY_FLG" name='REPLY_FLG' value="${boardlist.REPLY_FLG}"/>
</form>
   
<form role="form1">
 <input type='hidden' id="BOARD_NO" name='BOARD_NO' value="${boardlist.BOARD_NO}"/> 
 <input type='hidden' id="BOARD_MNG_NO" name="BOARD_MNG_NO" value="${boardlist.BOARD_MNG_NO}"/>
</form>

 <div class="navi_div">
		Q&A > 리스트 > 게시글
</div> 

<div class="container"> <!-- 전체 div-->

	<div> <!-- 제목 div-->
		<label id="txt" >제  목</label>
		<input type="text" class="inputTxt" name= "TITLE" id="TITLE" value= "${boardlist.TITLE}"  readonly="readonly" />
		<input type="hidden" name="board_no" id = "board_no" value="${boardlist.BOARD_NO}">
	</div> 


	<div id="detail_con"> <!-- 내용 div -->
		 <label id="txt" >내  용</label>  
		 
  	<div id="created"> 
 		<%-- <label for="created_by">${boardlist.CREATED_BY}</label>   --%>
  		<%--   <label for="created"><fmt:formatDate pattern="yyyy-MM-dd HH:mm" value="${boardlist.CREATED}" /></label>  --%>
 		<%-- <label for="created"> ${boardlist.CREATED} </label>  --%>
  		<label for="view_cnt">조회 : ${boardlist.VIEW_CNT}</label> 
  		<label> <a href="/file_down?FILE_CD=${boardlist.FILE_CD}">${boardlist.FILE_NM}</a></label>	 
 		<br/> 
 	</div> 
		 <textarea  rows="10" id="boardcontent"  readonly="readonly" >${boardlist.CONTENT}</textarea>
	</div> 

	<div id="detail_btns"> <!-- 버튼 div  -->
		<input type="button" id="board_modify_fbtn" class = "btn btn-primary btn-sm" value="편집" onClick="board_modify();"/> 
		<input type="button" id="board_remove_fbtn" class="btn btn-primary btn-sm" value="삭제" onClick="board_detail_remove();"/>  
		<input type="button" class="btn btn-primary btn-sm" id="board_list_fbtn" value="목록" onClick="goboardList();"/>
	</div>


	<!-- 댓글div -->
	<div id="reply_div" class="timeline-body" style ="height:50px; margin-top:10px; width:90% "> 
 
		<div class="col-sm" style=" height:40px" style="float:left; width:70%">
			<textarea id = "reply_content" class="form-control" rows="2" id="content" style="width:100%" ></textarea>
 
		</div> 
		<!-- 댓글 등록 버튼 -->
		 <div id="detail_btn_div" class="reply_div col-md-4" style="float:right; margin-top:-40px; margin-right:-380px;" >
	     <input type="button" id="reply_add_fbtn" class = "btn btn-primary btn-sm " value="저장" onclick="reply_add();"/> 
		</div>
 
	</div>
 
	<div class="col-md-12" style="margin-top:10px">
		<table id = "reply_table" class="table">
		<thead class="reply_list" id="reply_list_tbody">
		 
		</thead>
		</table> 
	</div> 

</div>	
 
  <div class="paging_div">
	 
		 <div id="pager" class="call_page_div"> 
		
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="ccPageNum" value="${replyPageNum}">
			<c:choose>
				<c:when test="${replyPageNum eq page.firstPageCount}">
	        		<a class="prev">◀◀</a>
	    		</c:when>
				<c:when test="${replyPageNum ne page.firstPageCount}">
	        		<a href="javascript:replyPaging(${page.prevStepPage})" class="prev">◀◀</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${replyPageNum eq page.firstPageCount}">
	        		<a class="prev">◀</a>
	    		</c:when>
				<c:when test="${replyPageNum ne page.firstPageCount}">
	        		<a href="javascript:replyPaging(${page.prevPageNum})" class="prev">◀</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq replyPageNum }">
						<b>
							<a  href="javascript:replyPaging('${i}');" id="pNum" class="choice">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:replyPaging('${i}');">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${replyPageNum eq page.totalPageCount}">
	       			<a class="next">▶</a>
	    		</c:when>
				<c:when test="${replyPageNum ne page.totalPageCount}">
	       			<a href="javascript:replyPaging(${page.nextPageNum})" class="next">▶</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${replyPageNum eq page.totalPageCount}">
	       			<a class="next">▶▶</a>
	    		</c:when>
				<c:when test="${replyPageNum ne page.totalPageCount}">
	       			<a href="javascript:replyPaging(${page.nextStepPage})" class="next">▶▶</a>
	    		</c:when>
			</c:choose>
   </div>
		
		<div class="right">
 		</div> 
	</div>  
 
 
<script>


 function remove_reply(e){ 
		var REPLY_NO = e;
		
		if(confirm("정보를 삭제 하시겠습니까?")){
		 $.ajax({
				url : '/reply/reply_remove/',
				headers : {
		            "Content-Type" : "application/json",
		            "X-HTTP-Method-Override" : "POST"
		         },
				data : REPLY_NO,
				dataType : 'text',
				processData: false,
				contentType: false,
				type: 'POST',
				success : function(result) {
					 
					if(result=="success"){
				  		replyListInqr(1); 

 					}
					  
				} 
		         
				}) 
		}
	} 
</script>

 

</body>
</html>
 