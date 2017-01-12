<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet"
	href="${ctx}/resources/common/css/standard/data_board/dboardDetail.css" type="text/css" />
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/standard/dboard/dboardDetail.js"></script>
<title>
${dboard.TITLE}
</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	
	
	<div id="title">
		<div class="caption">■ 영업정보 > 자료실</div>
	</div>
	
	<div id="dboardbody">
		<div id="titlediv">
			<div class="titlecal">제목</div>
			<div contenteditable="false" class="dboard_title" id="dboard_title">${dboard.TITLE}</div>
		</div>
		
		<div id="titlediv2">
			<div class="titlecal2">분류</div>
			<div class="dboard_title2">${dboard.CD_NM}</div>
			<div class="titlecal2">작성자</div>
			<div class="dboard_title2">${dboard.FST_REG_ID_NM}</div>
			<div class="titlecal2">작성일</div>
			<div class="dboard_title3"><fmt:formatDate value="${dboard.FST_REG_DT}" pattern="yyyy-MM-dd" /></div>
		</div>
		
		<div contenteditable="false" id="dboard_cont">${dboard.CONT}</div>
	<div>
		<div id="filediv">
		
		<div id="filedatacal">
		첨부파일
		</div>
		<div id="filedatadiv">
			<c:forEach var="file" items="${file}">
				<a href="${ctx}/downfile?attachId=${file.ATTACH_ID}">${file.filename} </a>
			</c:forEach>
			<form action="${ctx}/fileinsert" enctype="multipart/form-data" method="post" id="fileform">
			<input type="hidden" value="${dboard.DATA_BOARD_ID}" id="hiddenId" name="data_board_id">
			<input type="hidden" id="filetextfield"><input type="file" multiple="multiple" name="filedata" id="filedata">
		</form>
		</div>
		</div>
		<div id="btndiv">
		<input type="button" id="deletedboardbtn" value="삭제" class="btn btn-default">
		<input type="button" id="listdboardbtn" value="목록" class="btn btn-default">
		<input type="button" id="modifydboardbtn" value="수정" class="btn btn-default"> 
		<input type="button" id="adddboardbtn" value="저장" disabled="disabled" class="wbtn">
		<input type="button" id="fileuploadPop" value="파일업로드" class="btn btn-default">
		</div>
	</div>
	</div>
	
</body>
</html>