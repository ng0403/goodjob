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
			<select name="keyfield">
				<option value="au_id">권한ID</option>
				<option value="ua_id">사용자ID</option>
			</select> <input id="authuser_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="userAuthSearch" type="button" class="auth_btn">검색</button>
		</div>
			<div id="title"></div>
			<div class="bs-example" data-example-id="simple-table">
				
				<table id="ausermastertable">
					<thead>
						<tr>
							<th><input type="checkbox" id="ckallselect" disabled="disabled"></th>
							<td style="width: 25%;">권한ID</td>
							<td style="width: 25%;">최초등록자</td>
							<td style="width: 25%;">최초등록일</td>
							<td style="width: 25%;">사용자ID</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="authUser" items="${authIuserList}">
						
							<tr>
							    <th><input type="checkbox" id="ckselect" value="${authUser.auth_id}"></th>
								<td style="width: 25%;"><a href="#">${authUser.auth_id}</a></td>
								<td style="width: 25%;">${authUser.fst_reg_id_nm}</td>
								<td style="width: 25%;"><fmt:formatDate value="${authUser.fst_reg_d}" pattern="yyyy-MM-dd"/></td>
								<td style="width: 25%;">${authUser.id_nm}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		<div class="auth_bt_position">
			<button type="button" class="auth_btn" id="writeauthuser">등록</button>
			<button type="button" class="auth_btn" id="deleteauthuser">삭제</button>
	    </div>
		</div>
		<div id="tabDiv2" class="tab2_content">
		<input type="hidden" id="ctx" value="${ctx}"/>
		<div class="bt_position">
			<select id="keyfield">
				<option value="mid">권한ID</option>
				<option value="mname">권한명</option>
				<option value="mmenu">메뉴명</option>
			</select> <input id="authmenu_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="menuAuthSearch" type="button" class="auth_btn">검색</button>
		</div>
	<div class="bs-example" data-example-id="simple-table">
		<table id="menumastertable">
			<thead>
				<tr>
					<th><input type="checkbox" id="ckallselect" disabled="disabled"></th>
					<td style="width:10%;">권한ID</td>
					<td style="width:20%;">권한명</td>
					<td style="width:20%;">권한 메뉴명</td>
					<td style="width:10%;">디폴트여부</td>
					<td style="width:10%;">조회여부</td>
					<td style="width:10%;">입력여부</td>
					<td style="width:10%;">수정여부</td>
					<td style="width:10%;">삭제여부</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="auth" items="${authMenuList}"> 
				<tr>
					<th><input type="checkbox" id="ckselect" value="${auth.auth_id}"></th>
					<td style="width:10%;"><a href="#">${auth.auth_id}</a></td>
					<td style="width:20%;">${auth.auth_nm}</td>
					<td style="width:20%;"><input type="hidden" value="${auth.menu_id}"/>${auth.menu_nm}</td>
					<td id="authmenuflg" style="width:10%;">${auth.deflt_yn}</td>
					<td id="authmenuflg" style="width:10%;">${auth.retrv_yn}</td>
					<td id="authmenuflg" style="width:10%;">${auth.creat_yn}</td>
					<td id="authmenuflg" style="width:10%;">${auth.mdfy_yn}</td>
					<td id="authmenuflg" style="width:10%;">${auth.del_yn}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	   <div class="auth_bt_position">
		<button type="button" class="auth_btn" id="writeauthmenu">등록</button>
		<button type="button" class="auth_btn" id="deleteauthmenu">삭제</button>
	</div>
   </div>

</div>
</body>
</html>