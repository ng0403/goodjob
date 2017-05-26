<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authDetail.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
 --%>
<%-- <script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> --%>
<!-- 테이블 th고정 자바스크립트 -->
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script> --%>
<!-- 테이블 th고정 CSS -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" /> --%>

<script>
   $(function() {
      $('table').tablesort();
   });
</script>
</head>
<body>
<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">사용자권한</label> <label for="tab2" id="userAuthTab">메뉴권한</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
			<div class="bt_position">
				<div class="ui left icon input">
					<select name="keyfield">
						<option value="au_id">권한명</option>
						<option value="ua_id">사용자ID</option>
					</select> <input id="authuser_text" type="text" name="keyword" class="int_search"> &nbsp;
				</div>
				<button id="userAuthSearch" type="button" class="tiny ui orange button">검색</button>
			</div>
			
			<div id="title"></div>
			
			<div class="bs-example" data-example-id="simple-table">
				<input type="hidden" id='grp_id'>
				<table id="codemastertable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style="width: 5.1%;"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
							<th>코드그룹 ID</th>
							<th style="width: 14.8%;">코드 ID</th>
							<th style="width: 14.8%;">코드 이름</th>
							<th style="width: 29.6%;">권한명</th>
							<th style="width: 15.7%;">최종수정자</th>
							<th style="width: 19.3%;border-right:none;">최종수정일</th>
							<th style="width: 0%;border-left:none;"></th>
						</tr>
					</thead>
					<tbody>
					 
					</tbody>
				</table>
			</div>
		<div class="auth_bt_position">
			<button type="button" class="tiny ui button" id="writeauthuser" onclick="writecode();" >등록</button>
			<button type="button" class="tiny ui orange button" id="deleteauthuser">삭제</button>
	    </div>
	    
	</div>
		
	 
	</div>
 
</body>
</html>