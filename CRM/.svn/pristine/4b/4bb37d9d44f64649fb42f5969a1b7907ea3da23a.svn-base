<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/data_board/dboardInsert.css" type="text/css" />
	<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/dboard/dboardInsert.js"></script>
<title>자료실 등록</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}">

	<div id="title">
		<div class="caption">■ 영업정보 > 자료실 > 글작성</div>
	</div>

<div id="dboardbody">
	<div>
	<select id="selectcode" class="selectcode" name="code_id">
	<c:forEach var="code" items="${code}" >
	<option value="${code.CODE}">${code.CD_NM}</option>
	</c:forEach>
	</select>
	<div>
	<input type="text" id="title" name="title" class="titleinput">
	</div>
	<div>
	<div contenteditable="true" id="cont" style="resize: none; overflow: auto;"></div>
	</div>
	</div>
	<form action="${ctx}/fileinsert" enctype="multipart/form-data" method="post" id="fileform">
	<div id="filediv" class="filedivtext">
	<input type="text" id="filetextfield" disabled="disabled" ><input type="file" multiple="multiple" name="filedata" id="filedata">
	</div>
	</form>
	<div id="btndiv">
	<input type="button" id="fileuploadPop" value="파일업로드" class="btn btn-default">
	<input type="button" id="submitdboardbtn" value="등록" class="btn btn-default">
	<input type="button" id="listdboardbtn" value="목록" class="btn btn-default">
	<input type="button" id="canceldboardbtn" value="취소" class="btn btn-default">
	</div>

</div>


</body>
</html>