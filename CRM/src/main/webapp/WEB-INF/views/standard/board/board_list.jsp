<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
 <c:set var="SessionID" value="${sessionScope.user_id}" />
    
<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/common.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/board_list.js"></script> 
  <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
 <!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>Insert title here</title>

</head>
<body> 
   
  <div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;"> ■ 게시판 > 리스트 </h3>
		 
		</div>
</div>
 
   <!-- Q&A 리스트, 조회화면 -->
   <div class="search_div">
      <div class="search2_div">
<!--           <form name="frm_QnA" id="frm_QnA" action="/board/search_boardInqr"   enctype="multipart/form-data"  method="post">
 -->   
            <label >제  목</label>
            <input type="text" id="keyword" name="keyword" class="inputTxt" onkeypress="pageInputRep(event, boardListInqr);" > &nbsp; 
   
             <input type="button" onclick="boardPaging(1);" value="조회" id="board_inqr_fbtn" class="tiny ui orange button" value="검색">
      <!--  </form>   -->
      </div>
   </div>

   <div class="list_div">
      <div class="list1_div" id ="list1_div">  
          <form name="delAllForm" id ="delAllForm" method="post" action="/board_remove">  
           <input type='hidden' id="BOARD_MNG_NO" name='BOARD_MNG_NO' value="${BOARD_MNG_NO}"/> 
             <div class="table_div">
               <table  class="ui sortable celled table" >
                  <thead>
                     <tr style="text-align:center">
                        <th><input id="checkall" type="checkbox" onclick="checkAll();"/></th>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th> 
                     </tr>
                     
                   </thead>  
                             
                  <tbody class="board_list" id="board_list_tbody">
                     <c:forEach items="${boardlist}" var="boardVO">  
                        <tr class="open_list">
                           <td scope="row" style='width:10%;'><input type="checkbox" id="del_code" name="del_code" value="${boardVO.BOARD_NO}"></td>
                           <td style='width:10%;'>${boardVO.BOARD_NO}</td> 
                           <td style='width:40%;'><a href="#" onclick="boardDetail('${boardVO.BOARD_NO}');"  style='color:black' id="${boardVO.BOARD_NO}">${boardVO.TITLE} </td>                           
                           <td style='width:10%;'>${boardVO.CREATED_BY} </td>
                           <td style='width:20%;'><fmt:formatDate pattern="yyyy-MM-dd HH:mm" value="${boardVO.CREATED}" /></td>
                           <td style='width:10%;'>${boardVO.VIEW_CNT}</td>   
                        </tr> 
                     </c:forEach>
                  </tbody>
               </table>
            </div>
       </form>
    </div>   
 <div class="bottom_div">
       <div class="functionBtn_div">
         <input type="button" id = "board_add_fbtn"  class = "tiny ui orange button" value="추가" onclick="board_add();"/> 
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
<script type="text/javascript">

/* $(document).ready(function() { 
    
     
    var sessionID = "${SessionID}" 

   if(sessionID == 'admin'){
     }else{
       alert("${SessionID}");
         alert(" ** 접근권한이 없습니다. ** \n ** 관리자 권한으로 로그인하세요. **\n ** 로그인화면으로 이동합니다. **");
//         location.href = "/logout";
         location.href = "/";
    }
   
})  */

 
 
   
</script>


</body>
</html>
<%-- <%@include file="../include/footer.jsp"%> --%>