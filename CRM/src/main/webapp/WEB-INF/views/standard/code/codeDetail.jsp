<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authDetail.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/code/code	Detail.css" type="text/css" />
 
<%-- <script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> --%>
<!-- 테이블 th고정 자바스크립트 -->
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script> --%>
<!-- 테이블 th고정 CSS -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>



<script>
   $(function() {
      $('table').tablesort();
   });
</script>
</head>
<body>

	<div id="title" class="caption" style="padding-top: 13px ;">
		<label class="label_header" style="font-size: 1.28571429em; font-weight: bold; color: rgba(0, 0, 0, 0.87); " >■ 기준정보 > 코드관리</label>
	</div>
 
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
	<div class="list_search" >
 					<select name="keyfield"  id="selectOption1">
 						<option value="code_nm">코드명</option>
					</select> <input id="authuser_text" type="text" name="keyword" class="int_search"> &nbsp;
 				<button id="userAuthSearch" type="button" class="tiny ui blue button">검색</button>
		 </div>
			 
			<div class="bs-example" data-example-id="simple-table">
				<input type="hidden" id='grp_id'>
				<table id="codemastertable" class="ui sortable celled table">
					<thead>
						<tr style="text-align:center">
							<th style="width: 4.9%; text-align:center"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
							<th style="width:14.6%">코드그룹 ID</th>
							<th style="width: 14.6%;">코드 ID</th>
							<th style="width: 14.6%;">코드 이름</th>
							<th style="width: 16.4%;">권한명</th>
							<th style="width: 15.8%;">최종수정자</th>
							<th style="width: 29%;border-right:none;">최종수정일</th>
							<th style="width: 3%;border-left:none;"></th>
						</tr>
					</thead>
					<tbody style="height:530px">
					 
					</tbody>
				</table>
			</div>
		<div class="auth_bt_position">
			<button type="button" class="tiny ui blue basic button" id="writeauthuser" onclick="writecode();" >등록</button>
			<button type="button" class="tiny ui blue button" id="deleteauthuser">삭제</button>
	    </div>
 
 
 
</body>
</html>