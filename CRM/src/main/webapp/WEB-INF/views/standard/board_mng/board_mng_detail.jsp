<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%-- <%@include file="../include/header.jsp"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/boardmng/boardmng_detail.js"></script>  
<link rel="stylesheet" href="${ctx}/resources/common/css/common.css" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
 
<body> 
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"> 
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<form role="form" name = "form_modify" method="post">
 <input type='hidden' id="CODE_TXT" name='CODE_TXT' value="${board_mng_list.CODE_TXT}"/> 
 <input type='hidden' id="ACTIVE_FLG" value="${board_mng_list.ACTIVE_FLG}"/> 
 <input type='hidden' id="REPLY_FLG" value="${board_mng_list.REPLY_FLG }"/>
 <input type='hidden' id="NOTICE_FLG" value="${board_mng_list.NOTICE_FLG }"/>
 <input type='hidden' id="FILE_ATTACH_FLG" value="${board_mng_list.FILE_ATTACH_FLG }"/>
 <input type='hidden' id="CODE_TXT" value="${board_mng_list.CODE_TXT }"/>
 
</form>
 

<div class="container" style="width:50%" >

	<div id="board_mng_detail" >
  
  <form role="form" name="board_mng_form"> 
   <input type='hidden' id="BOARD_MNG_NO" name='BOARD_MNG_NO' value="${board_mng_list.BOARD_MNG_NO}"/> 
 	<table class="table">
	<tr> 
	<td>게시판이름</td>
 <td><input type="text" class="form-control" id="BOARD_NM" name="BOARD_NM"  value="${board_mng_list.BOARD_NM}" style="width:50%" /></td> 
	<td>게시판분류</td>
   <td> 
   <select class="form-control" id="sel1"> 
    <c:forEach items="${codelist}" var="list">
 		 <c:choose>
			 <c:when test="${board_mng_list.BOARD_MNG_CD eq list.CODE}">
			 <option value="${list.CODE}" selected="selected">${list.CD_NM}</option>
		     </c:when>
		     <c:otherwise>
		     <option value="${list.CODE}">${list.CD_NM}</option>							
			 </c:otherwise>
			 </c:choose>
		 </c:forEach> 
   </select>
   </td>
	</tr>
	<tr>
	<td>관리자</td> <td></td> <td>게시판코드</td> <td><div id="board_cd_div">${board_mng_list.BOARD_MNG_CD}</div> </td>
	</tr>
	<tr>
	<td>
	댓글여부
	</td>
	<td>
	<label class="radio-inline">
	<input type="radio" class="radio_class" id="reply_flg_y" name="REPLY_FLG" value="Y" >Y
	</label> <label class="radio-inline">
	<input type="radio" class="radio_class" id="reply_flg_n" name="REPLY_FLG" value="N">N
	</label>
	</td>
	<td>
	게시판활성여부
	</td>
	<td>
	<label class="radio-inline">
	<input type="radio" class="radio_class" value="Y" id="active_flg_y" name="ACTIVE_FLG" value="Y">Y
	</label> 
	<label class="radio-inline">
	<input type="radio" class="radio_class" value="N" id="active_flg_n"  name="ACTIVE_FLG" value="N">N
	</label>
	</td>
	</tr>
	<tr>
	<td>
	파일업로드
	</td>
	<td>
	<label class="radio-inline" >
	<input type="radio" class="radio_class" id="file_attach_flg_y" name="FILE_ATTACH_FLG" value="Y">Y
	</label>
	<label class="radio-inline">
	<input type="radio" class="radio_class" id="file_attach_flg_n" name="FILE_ATTACH_FLG" value="N">N
	</label>
	 </td>
	 <td>
	 공지활성화
	 </td>
	 <td>
	 <label  class="radio-inline">
	 <input type="radio" class="radio_class" id="notice_flg_y" name="NOTICE_FLG" value="Y">Y
	 </label> 
	 <label class="radio-inline">
	 <input type="radio" class="radio_class" id="notice_flg_n" name="NOTICE_FLG" value="N">N
	 </label>
	 </td>
	</tr>
	</table> 
	</form>
	</div>
	
	<div id = "button_div">
	<input type="button" id="board_mng_modify_fbtn" class = "btn btn-primary btn-sm" value="편집" onclick="modify_fbtn();"/>
	<input type="button" class="btn btn-primary btn-sm" id="board_list_fbtn" value="목록" onclick="go_list();"/>
	</div>
	
	<div id = "button_div1">
		<input type="button" class = "btn btn-primary btn-sm" id="board_mng_add_fbtn"  value="저장" onclick="modify_save();"/>
		<input type="button" class="btn btn-primary btn-sm" id="board_cancle_fbtn" value="취소" onclick="modify_cancel();"/>
	</div>

</div> 

</body>
</html>
<%-- <%@include file="../include/footer.jsp"%> --%>
