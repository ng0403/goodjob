<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%-- <%@include file="../include/header.jsp"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<script type="text/javascript">
function codeSelect() {
   	$("#QUESTION_TYPE_CD > option[value='${boardVO.QUESTION_TYPE_CD}']").attr("selected", "selected");
  }
</script>

<body onload="codeSelect();">

<!-- 합쳐지고 최소화된 최신 CSS -->
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/board/qna_list.js"></script>   
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"> 
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
 <link rel="stylesheet" href="${ctx}/resources/common/css/mps/BoardCSS/boardCSS.css" type="text/css" />
 
 <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
 
 
<div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;"> ■ 영업정보 > <a href="/boardInqr?BOARD_MNG_NO=${boardVO.BOARD_MNG_NO}" style="font-size: 14pt; text-decoration:none; color: blue;"> Q&A</a> > 수정 </h3>
	 	</div>
</div>

<div class="container"> <!-- 전체 div-->

	<form role="form" name="modifyForm" action="/board_modify" method="post">
	 <input type='hidden' id="BOARD_NO" name='BOARD_NO' value="${boardVO.BOARD_NO}"> 
	 <input type='hidden' id="BOARD_MNG_NO" name="BOARD_MNG_NO" value="${boardVO.BOARD_MNG_NO}">
<div> <!-- 제목 div-->
   	<label id="txt" >제  목</label>
 <input type="text" class="form-control" name="TITLE" value= "${boardVO.TITLE }"/>
 
</div> 
<label id="txt" >질문 유형</label> 
 	 <select class="form-control" id="QUESTION_TYPE_CD" name = "QUESTION_TYPE_CD">
     <option value="0001">인적서비스</option>
     <option value="0002">점포서비스</option>
     <option value="0003">이벤트</option>
     <option value="0004">제휴카드</option>
     <option value="0005">쿠폰</option>
     <option value="0006">제휴서비스</option>
   </select>

 <div> <!-- 내용 div -->
 <label id="txt" >내  용</label> 
 <textarea class="form-control" rows="10" name="CONTENT" >${boardVO.CONTENT}</textarea>
</div> 	


<div>   <!-- 댓글div -->
</div>
 </form>
<div id="btns"> <!-- 버튼 div  -->
  <button type="submit" id = "board_modify_fbtn" class="tiny ui orange button" onclick="board_modify_save();">저장</button>
  <input type="button" class="tiny ui button" id="board_list_fbtn" value="취소" onclick="go_list();"/>
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
 
</body>
</html>
<%-- <%@include file="../include/footer.jsp"%> --%>
