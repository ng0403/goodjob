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
	href="${ctx}/resources/common/css/standard/data_board/dboardList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/dboard/dboardList.js"></script>
<title>자료실</title>
<script type="text/javascript">
$("#navisub10").show();
$("#navidboard").css("font-weight", "bold");
</script>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<c:if test="${not empty searchDboard||searchDboard==''}">
	<input type="hidden" id="searchDboard" value="${searchDboard}">
	</c:if>
	<c:if test="${not empty selectcode}">
	<input type="hidden" id="selectcode" value="${selectcode}">
	</c:if>
	
	<div id="title">
		<div class="caption">■ 영업정보 > 자료실</div>
	</div>
	
	<div id="dboardbody">
	<div>
	<select id="dataselectbox" class="dataselectbox">
	<option value="">타입</option>
	<option value="empty">전체</option>
	<c:forEach var="code" items="${code}">
		<option value="${code.CODE}">${code.CD_NM}</option>
		</c:forEach>
	</select>
	
	<input type="button" id="searchboardbtn" class="searchbtn btn-default" value="검색">
	<input type="text" id="searchdboardinput" name="searchdboardinput" placeholder="검색어를 입력해주세요">
	
	</div>
	
	<table id="dboardtable"> <!-- 원본은 <table></table> 에러나면 수정요망 -->
		<thead>
			<tr>
				<td style="width:10%;">자료분류</td>
				<td style="width:45%;">제목</td>
				<td style="width:10%;">조회수</td>
				<td style="width:10%;">게시일자</td>
				<td style="width:10%;">담당부서</td>
				<td style="width:10%;">게시자</td>
				<td style="width:5%;">파일</td>
			</tr>
		</thead>

		<tbody>
			<c:forEach var="dboard" items="${dboard}">
				<tr>
				<td>${dboard.CD_NM}</td>
					<td style="text-align: left;"><input type="hidden" value='${dboard.DATA_BOARD_ID}'>
						<a href="${ctx}/dboarddetail?dboardId=${dboard.DATA_BOARD_ID}" class="a_dboard">${dboard.TITLE}</a>
					</td>
					<td>${dboard.CHK_NUM}</td>
					<td><fmt:formatDate value="${dboard.FST_REG_DT}" pattern="yyyy-MM-dd" /></td>
					<td>${dboard.ORG_NM}</td>
					<td>${dboard.FST_REG_ID_NM}</td>
					<td><c:if test="${dboard.FILE_YN=='Y'}"><input type="hidden" value='${dboard.DATA_BOARD_ID}'>
					<a href="${ctx}/downAllfile?boardId=${dboard.DATA_BOARD_ID}" class="diskhref"><img src="${ctx}/resources/image/disk.gif"></a></c:if></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	
	<div id="directbtndiv">
	<input type="hidden" value="${pagerVO.startPageNum}" id="hcurrentPageNum">
	<input type="hidden" value="${pagerVO.pageBlockSize}" id="hpageBlockSize">
	<input type="hidden" value="${pagerVO.totalPageCount}" id="htotalpagecount">
	<div id="numbtndiv">
	<a href="#" id="leftnumbtn"><img src="${ctx}/resources/image/treebtn1.png" style="transform:rotate(180deg);"></a>
	<c:set var="page" value="${pagerVO.startPageNum}"/>
	
	<c:forEach begin="${pagerVO.startPageNum}" end="${pagerVO.endPageNum}">
	<c:if test="${page-1<=pagerVO.endPageNum}">
	<a href="${ctx}/dboard?currentPageNum=${page}" class="numbtn"><c:out value="${page}"/></a>
	<c:set var="page" value="${page+1}"/>
	</c:if>
	</c:forEach>
	<a href="#" id="rightnumbtn"><img src="${ctx}/resources/image/treebtn1.png"></a>
	</div>
	</div>
	<div id="btndiv">
	<input type="button" class="btn btn-default" value="등록" id="dboard_add" />
	</div>
	</div>
	
</body>
</html>