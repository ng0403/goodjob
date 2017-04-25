<!-- 
업 무 명 : 사용자구분 검색을 위한 팝업창 제작
작 성 자 : 민지민(minjm93@coreplus.co.kr)
작 성 일 : 2015/01/20
수 정 자 : 
수 정 일 : 
내    용 : 팝업창안에 Code 리스트와 검색기능이 있음.
 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사용자구분 팝업창</title>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/userTypePopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/userTypePopup.css" type="text/css" />
</head>
<body>
<div id="title">
<br>
<div class="caption">■ 사용자구분 검색창</div>
<div class="bt_position_popup">
		<form name="searchForm" method="post" action="">
			<select name="keyfield">
				<option value="c_name">코드명</option>
				<option value="c_id">코드</option>
			</select> <input id="title_text" type="text" name="keyword"> &nbsp;
			<button id="search_btn" type="submit" class="iuser_search_bt">검색</button>
			</form>
		</div>
	</div>	
   
   <div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post" action="" >	
		<table id="mastertable">
			<thead>
				<tr>
<!-- 					<th><input id="allCheck" type="checkbox"/></th> -->
					<td style="width:20%;">코드그룹ID</td>
					<td style="width:20%;">코드</td>
					<td style="width:20%;">코드명</td>
					<td style="width:20%;">코드순서번호</td>
					<td style="width:20%;">코드상세내용</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="codeList" items="${codeList}">
				<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
<%-- 					<th scope="row"><input type="checkbox" class="ab" id="checkCode" name="checkCode" value="${codeList.code}"></th> --%>
					<td style="width:20%;">${codeList.cd_grp_id}</td>
					<td style="width:15%;" id="code">${codeList.code}</td>
					<td style="width:20%;" id="cd_nm">${codeList.cd_nm}</td>
					<td style="width:20%;">${codeList.cd_seq_num}</td>
					<td style="width:25%;">${codeList.cd_dtl_cont}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>
	<br>
<!-- 	<div class="bt_position"> -->
<!-- 		<input type="button" class="iuser_type_bt" value="선택" id="codeChoice"/> -->
<!-- 		<input type="button" class="iuser_type_bt" value="취소" id="codeClear"/> -->
<!-- 	</div> -->
</body>
</html>