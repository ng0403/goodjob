<!-- 
업 무 명 : Tab Menu JSP 제작
작 성 자 : 이지용
작 성 일 : 2017/05/18
수 정 자 : 
수 정 일 : 
내    용 : 
 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" /> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserTab.js"></script>	
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<title>Insert title here</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<div class="userpadding">
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
<!-- 		<input id="tab2" type="radio" name="tab" /> -->

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
<!-- 		<label for="tab1">사용자상세</label> <label for="tab2" id="userAuthTab">사용자권한</label> -->
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content" style="text-align: right; ">
			<form action="${ctx}/insertuser"  method="post" id="joinform" >
				<table class="ui celled table">
					<tbody id="tbody1" class="tbody">
						<tr>
							<th>사용자ID</th>
							<td>
							<input type="hidden" name="iuser_id" id="iuser_id"/>
							<input type="text" name="id_nm" id="id_nm" class="inputText" style="ms-ime-mode: disabled;"></input></td>
							<th>사용자명</th>
							<td><input type="text" name="iuser_nm" id="iuser_nm" class="inputText"></input></td>
							<th>패스워드</th>
							<td><input type="text" name="pwd" id="pwd" class="inputText"></input></td>
							<th>구분</th>
							<td><input type="text" name="iuser_div_nm" id="user_type_nm" class="inputText"> 
								<input type="hidden" name="iuser_div_cd" id="user_type_cd" class="inputText"> 
							    <input type="button" name="codeSearch" value="찾기" class="tiny ui orange basic button" id="userTypePop">
							</td>
						</tr>	
						<tr>
							<th>집전화</th>
							<td><input type="text" name="ph1" id="home_phone1" class="inputText" maxlength="4" style=" width: 50px;"/> - 
							    <input type="text" name="ph2" id="home_phone2" class="inputText" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="ph3" id="home_phone3" class="inputText" maxlength="4" style=" width: 50px;" />
							</td>
							<th>회사전화</th>
							<td><input type="text" name="comp_ph1" id="company_phone1" class="inputText" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="comp_ph2" id="company_phone2" class="inputText" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="comp_ph3" id="company_phone3" class="inputText" maxlength="4" style=" width: 50px;" />
							</td>
							<th>핸드폰</th>
							<td><input type="text" name="cell_ph1" id="cell_phone1" class="inputText" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="cell_ph2" id="cell_phone2" class="inputText" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="cell_ph3" id="cell_phone3" class="inputText" maxlength="4" style=" width: 50px;" />
							</td>
							<th>이메일</th>
							<td><input type="text" name="email1" id="email1" class="inputText" /> @ 
							    <input type="text" name="email2" id="email2" class="inputText" />
							</td>
						</tr>
						<tr>
							<th>조직</th>
							<td>
								<input type="text" name="org_nm" id="org_nm" class="inputText"> 
								<input type="hidden" name="org_id" id="org_id" class="inputText"> 
								<input type="button" name="orgSearch" id="orgSearch" value="찾기" class="tiny ui orange basic button" id="orgPopup">
							</td>
							<th>상태</th>
							<td>
								<input type="radio" id = "active_flg_Y" name="act_yn" value="Y" checked="checked" />Y&nbsp; 
								<input type="radio" id = "active_flg_N" name="act_yn" value="N" />N</td>
						</tr>
					</tbody>
				</table>
				<div class="bt_position_authuser">
<!-- 					<input type="button" id="submitbtn" class="iuser_tab_bt" value="추가"/> -->
					<input type="button" id="modifybtn" class="tiny tiny ui orange button" value="편집"/>
					<input type="reset" id="cancelbtn" class="tiny ui button" value="취소"/>
					<input type="button" id="addsavebtn" class="tiny tiny ui orange button" value="저장"/>
					<input type="button" id="modifysavebtn" class="tiny tiny ui orange button" style="display:none;" value="저장"/>
				</div>
			</form>
		</div>
		
	</div>
	</div>

</body>
</html>


