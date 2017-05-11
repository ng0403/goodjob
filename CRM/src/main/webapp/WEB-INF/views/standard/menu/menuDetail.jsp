<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta charset="UTF-8">
<title>메뉴등록</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/menu/menuDetail.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<script type='text/javascript' src='${ctx}/resources/common/js/standard/menu/menuDetail.js'></script>

</head>
<body>
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">메뉴상세</label> <label for="tab2" id="authMenuTab">메뉴별권한</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
			<form id="menuInsertForm">
		       <table class="table">  			
							<tbody id="tbody1">
								<tr>
									<th>메뉴명</th>
									<td><input type="hidden" name="menu_id" id="menu_id" class="int"/> <input
										type="text" name="menu_nm" id="menu_name" class="int"/></td>
									<th>상위메뉴명</th>
									<td><input type="hidden" name="up_menu_id" id="p_menu_id" class="int"/>
										<input type="text" name="up_menu_nm" id="p_menu_name" class="int"/>
										<input type="button" id="search_pMenuName_btn" value="검색" class="btn btn-default"/>
									</td>
								</tr>
								<tr>
									<th>메뉴레벨</th>
									<td><select name="menu_lev" id="menu_level">
											<option class="menu_level_val" value="0001">1</option>
											<option class="menu_level_val" value="0002">2</option>
									</select></td>
									<th>메뉴URL</th>
									<td><input type="text" id="menu_url" name="menu_url" class="int"></input></td>
								</tr>
								<tr>
									<th>디폴드여부</th>
									<td><input type="radio" class="menu_default_flg_Y" name="deflt_YN" value="Y" />활성화&nbsp;
										<input type="radio" class="menu_default_flg_N" name="deflt_yn" value="N"
										checked="checked" />비활성화</td>
									<th>상태</th>
									<td><input type="radio" class="menu_active_flg_Y" name="act_yn" value="Y" checked="checked" />활성화&nbsp; 
										<input type="radio" class="menu_active_flg_N" name="act_yn" value="N" />비활성화</td>
								</tr>
								<tr id="authLine">
									<th>권한ID</th>
									<td>
										<input type="text" id="auth_id" name="auth_id" class="int"/>
										<input type="button" id="search_authID_btn" class="menutree_btn" value="검색">
									</td>
									<th>조회여부</th>
									<td>
										조회&nbsp;<input type="checkbox" class="retrv_yn" name="retrv_yn" value="Y" checked="checked"/>
										생성&nbsp;<input type="checkbox" class="creat_yn" name="creat_yn" value="Y" checked="checked"/>
										수정&nbsp;<input type="checkbox" class="mdfy_yn" name="mdfy_yn" value="Y" checked="checked"/>
										삭제&nbsp;<input type="checkbox" class="del_yn" name="del_yn" value="Y" checked="checked"/>
									</td>
								</tr>
							</tbody>
						</table>
						</form>
					<div class="bt_position_detail">
						<input type="button" class="menutree_btn" id="submit_menu" value="저장" />
						<input type="button" class="menutree_btn" id="edit_menu" value="편집" />
						<input type="button" class="menutree_btn" id="reset_menu" value="취소" />
					</div>
		</div>
		
		<div id="tabDiv2" class="tab2_content">
		<div class="bt_position">
			<select id="authMenuKeyfield" name="keyfield">
				<option value="mname">권한명</option>
				<option value="mmenu">메뉴명</option>
			</select> <input id="authMenuKeyword" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="authMenuSearch" class="menutree_btn">검색</button>
		</div>
		 <div class="bs-example_menulist" data-example-id="simple-table">
				<!-- <form name="userForm" id="userForm" method="post" > -->
				<table id="mastertable">
					<thead>
						<tr>
							<td style="width: 10%;">메뉴ID</td>
							<td style="width: 14%;">메뉴명</td>
							<td style="width: 10%;">권한ID</td>
							<td style="width: 14%;">권한명</td>
							<td style="width: 5%;">생성</td>
							<td style="width: 5%;">조회</td>
							<td style="width: 5%;">수정</td>
							<td style="width: 5%;">삭제</td>
							<td style="width: 10%;">디폴트</td>
							<td style="width: 10%;">최초등록자</td>
							<td style="width: 12%;">최초등록일</td>
						</tr>
					</thead>
					<tbody id="authMenuBody">
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>