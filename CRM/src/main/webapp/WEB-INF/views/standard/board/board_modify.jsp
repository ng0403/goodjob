<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%-- <%@include file="../include/header.jsp"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/mps/BoardCSS/boardCSS.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/board_modify.js"></script> 
 

<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/common.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/common.css" type="text/css" />
 <link rel="stylesheet" href="${ctx}/resources/common/css/common_pop.css" type="text/css" />
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
 <link rel="stylesheet" href="${ctx}/resources/common/css/mps/BoardCSS/boardCSS.css" type="text/css" />

<title>Insert title here</title>
</head>
<body>
 

<div class="navi_div">
		게시판 > 리스트 > 수정
</div>
 

<div class="container"> <!-- 전체 div-->

	<form role="form" name="modifyForm" action="/board_modify " method="post">
	 <input type='hidden' id="BOARD_NO" name='BOARD_NO' value="${boardVO.BOARD_NO}"> 
	 <input type='hidden' id="BOARD_MNG_NO" name='BOARD_MNG_NO' value="${boardVO.BOARD_MNG_NO}">  
	<div> <!-- 제목 div-->
		<label id="txt" >제  목</label>
		<input type="text" class="inputTxt" name= "TITLE" id="TITLE" value= "${boardVO.TITLE}" />
	</div> 

<div> 
 
</div><!-- 파일 업로드  -->
<div> <!-- 내용 div -->
 <label id="txt" >내  용</label> 

 <textarea class="form-control" rows="10" name="CONTENT" >${boardVO.CONTENT}</textarea>
</div> 	


<div>   <!-- 댓글div -->
</div>
 </form>
<div id="btns"> <!-- 버튼 div  -->
<!-- <input type="button" class = "btn btn-default" value="저장"/> -->
 <button type="submit" id = "board_modify_fbtn" onClick="board_save();" class="btn btn-primary btn-sm">저장</button>
<!--  <input type="button" class="btn btn-default" id="board_modify_fbtn" value="저장"/> -->
 <input type="button" class="btn btn-primary btn-sm" id="board_list_fbtn" onClick="board_list();" value="목록"/>
</div>



</div>



<div class="modal fade" id="myModal" >
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- header -->
      <div class="modal-header">
        <!-- 닫기(x) 버튼 -->
        <button type="button" class="close" data-dismiss="modal">×</button>
        <!-- header title -->
        <h4 class="modal-title">Header</h4>
      </div>
      <!-- body -->
      <div class="modal-body">
            Body
      </div>
      <!-- Footer -->
      <div class="modal-footer">
        Footer
        <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
      </div>
    </div>
  </div>
</div>
 


<script>
 
$(document).ready(
	function() {
	 
var formObj = $("form[role='form']");
	
});




 
 
</script>

 

</body>
</html>
 