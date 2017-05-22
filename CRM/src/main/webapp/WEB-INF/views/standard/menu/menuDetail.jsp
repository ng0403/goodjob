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

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>
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
			<div class="bt_position_detail">
				<input type="button" class="tiny ui orange button" id="submit_menu" value="저장" />
				<input type="button" class="tiny ui button" id="edit_menu" value="편집" />
				<input type="button" class="tiny ui button" id="reset_menu" value="취소" />
			</div>
			<form id="menuInsertForm">
		       <table class="ui sortable celled table">  			
					<tbody id="tbody1">
						<tr>
							<th><span stlye="color:red;">*메뉴명</span></th>
							<td style="text-align:left;"><input type="hidden" name="menu_id" id="menu_id" class="int"/> <input
								type="text" name="menu_nm" id="menu_name" class="int"/></td>
							<th>상위메뉴명</th>
							<td style="text-align:left;"><input type="hidden" name="up_menu_id" id="p_menu_id" class="int"/>
								<input type="text" name="up_menu_nm" id="p_menu_name" class="int"/>
								<input type="button" id="search_pMenuName_btn" value="검색" class="tiny ui orange button"/>
							</td>
						</tr>
						<tr>
							<th><span stlye="color:red;">*메뉴레벨</span></th>
							<td style="text-align:left;"><select name="menu_lev" id="menu_level">
									<option class="menu_level_val" value="0001">1</option>
									<option class="menu_level_val" value="0002">2</option>
							</select></td>
							<th><span stlye="color:red;">*메뉴URL</span></th>
							<td style="text-align:left;"><input type="text" id="menu_url" name="menu_url" class="int"></input></td>
						</tr>
						<tr>
							<th>디폴드여부</th>
							<td style="text-align:left;"><input type="radio" class="menu_default_flg_Y" name="deflt_yn" value="Y" />활성화&nbsp;
								<input type="radio" class="menu_default_flg_N" name="deflt_yn" value="N"
								checked="checked" />비활성화</td>
							<th>상태</th>
							<td style="text-align:left;"><input type="radio" class="menu_active_flg_Y" name="act_yn" value="Y" checked="checked" />활성화&nbsp; 
								<input type="radio" class="menu_active_flg_N" name="act_yn" value="N" />비활성화</td>
						</tr>
						<tr id="authLine">
							<th><span stlye="color:red;">*권한ID</span></th>
							<td style="text-align:left;">
								<input type="text" id="auth_id" name="auth_id" class="int"/>
								<input type="button" id="search_authID_btn" class="tiny ui orange button" value="검색">
							</td>
							<th>조회여부</th>
							<td style="text-align:left;">
								조회&nbsp;<input type="checkbox" class="retrv_yn" name="retrv_yn" value="Y" checked="checked"/>
								생성&nbsp;<input type="checkbox" class="creat_yn" name="creat_yn" value="Y" checked="checked"/>
								수정&nbsp;<input type="checkbox" class="mdfy_yn" name="mdfy_yn" value="Y" checked="checked"/>
								삭제&nbsp;<input type="checkbox" class="del_yn" name="del_yn" value="Y" checked="checked"/>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
					
		</div>
		
		<div id="tabDiv2" class="tab2_content">
		<div class="bt_position">
			<div class="ui left icon input">
				<select id="authMenuKeyfield" name="keyfield">
					<option value="mname">권한명</option>
					<option value="mmenu">메뉴명</option>
				</select> 
				<input id="authMenuKeyword" type="text" name="keyword" class="int_search"> &nbsp;
			</div>
			<button id="authMenuSearch" class="tiny ui orange button">검색</button>
		</div>
		 <div class="bs-example_menulist" data-example-id="simple-table">
				<!-- <form name="userForm" id="userForm" method="post" > -->
				<table id="mastertable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style="width:189px;">메뉴ID</th>
							<th style="width:217px;">메뉴명</th>
							<th style="width:132px;">권한ID</th>
							<th style="width:221px;">권한명</th>
							<th style="width:33px;">생성</th>
							<th style="width:34px;">조회</th>
							<th style="width:32px;">수정</th>
							<th style="width:32px;">삭제</th>
							<th style="width:127px;">디폴트</th>
							<th style="width:91px;">최초등록자</th>
							<th style="width:183px;border-right:none;">최초등록일</th>
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