<!-- 
업 무 명 : Tab Menu JSP 제작
작 성 자 : 민지민(minjm93@coreplus.co.kr)
작 성 일 : 2015/01/20
수 정 자 : 
수 정 일 : 
내    용 : Tab Menu에 사용자상세부분과 사용자권한부분을 만들었음.
 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserTab.js"></script>	
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
		<div id="tabDiv1" class="tab1_content">
			<form action="${ctx}/insertuser"  method="post" id="joinform" >
				<table class="table">
					<tbody id="tbody1">
						<tr>
							<th>사용자ID</th>
							<td>
							<input type="hidden" name="iuser_id" id="iuser_id"/>
							<input type="text" name="id_nm" id="id_nm" class="iuser_txt" style="ms-ime-mode: disabled;"></input></td>
							<th>사용자명</th>
							<td><input type="text" name="iuser_nm" id="iuser_nm"
								class="iuser_txt"></input></td>
							<th>패스워드</th>
							<td><input type="text" name="pwd" id="pwd"
								class="iuser_txt"></input></td>
							<th>구분</th>
							<td><input type="text" name="iuser_div_nm" id="user_type_nm" class="iuser_txt"> 
								<input type="hidden" name="iuser_div_cd" id="user_type_cd" class="iuser_txt"> 
							    <input type="button" name="codeSearch" value="찾기" class="iuser_tab_bt" id="userTypePop">
							</td>
						</tr>	
						<tr>
							<th>집전화</th>
							<td><input type="text" name="ph1" id="home_phone1" class="iuser_tel" maxlength="4" style=" width: 50px;"/> - 
							    <input type="text" name="ph2" id="home_phone2" class="iuser_tel" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="ph3" id="home_phone3" class="iuser_tel" maxlength="4" style=" width: 50px;" />
							</td>
							<th>회사전화</th>
							<td><input type="text" name="comp_ph1" id="company_phone1" class="iuser_tel" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="comp_ph2" id="company_phone2" class="iuser_tel" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="comp_ph3" id="company_phone3" class="iuser_tel" maxlength="4" style=" width: 50px;" />
							</td>
							<th>핸드폰</th>
							<td><input type="text" name="cell_ph1" id="cell_phone1" class="iuser_tel" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="cell_ph2" id="cell_phone2" class="iuser_tel" maxlength="4" style=" width: 50px;" /> - 
							    <input type="text" name="cell_ph3" id="cell_phone3" class="iuser_tel" maxlength="4" style=" width: 50px;" />
							</td>
							<th>이메일</th>
							<td><input type="text" name="email1" id="email1" class="iuser_email" /> @ 
							    <input type="text" name="email2" id="email2" class="iuser_email" />
							</td>
						</tr>
						<tr>
							<th>조직</th>
							<td>
								<input type="text" name="org_nm" id="org_nm" class="iuser_txt"> 
								<input type="hidden" name="org_id" id="org_id" class="iuser_txt"> 
								<input type="button" name="orgSearch" id="orgSearch" value="찾기" class="iuser_org_bt" id="orgPopup">
							</td>
							<th>상태</th>
							<td>
								<input type="radio" id = "active_flg_Y" name="act_yn" value="Y" checked="checked" />Y&nbsp; 
								<input type="radio" id = "active_flg_N" name="act_yn" value="N" />N</td>
<!-- 							<th>권한</th> -->
<!-- 							<td> -->
<!-- 							<select name="auth_name" id="auth_name" class="int_select"> -->
<%-- 									<c:forEach var="auth" items="${authName}"> --%>
<%-- 										<option value="${auth.auth_id}">${auth.auth_nm}</option> --%>
<%-- 									</c:forEach> --%>
<!-- 							</select></td> -->
						</tr>
					</tbody>
				</table>
				<div class="bt_position_authuser">
<!-- 					<input type="button" id="submitbtn" class="iuser_tab_bt" value="추가"/> -->
					<input type="button" id="modifybtn" class="iuser_tab_bt" value="편집"/>
					<input type="reset" id="cancelbtn" class="iuser_tab_bt" value="취소"/>
					<input type="button" id="addsavebtn" class="iuser_tab_bt" value="저장"/>
					<input type="button" id="modifysavebtn" class="iuser_tab_bt" style="display:none;" value="저장"/>
				</div>
			</form>
		</div>
		
		<!-- 두 번째 탭 내용 사용자권한 리스트 -->
<!-- 		<div id="tabDiv2" class="tab2_content"> -->
<!-- 		<div class="bt_position"> -->
<!-- 			<select name="keyfield" id="iuserKeyfield"> -->
<!-- 				<option value="au_id">권한ID</option> -->
<!-- 				<option value="ua_id">사용자ID명</option> -->
<!-- 			</select> <input id="iuserKeyword" type="text" name="keyword" class="int_search"> &nbsp; -->
<!-- 			<button id="iuserAuthSearch" class="iuser_tab_bt">검색</button> -->
<!-- 		</div> -->
<!-- 			<div id="title"></div> -->
<!-- 			<div class="bs-example_authuser" data-example-id="simple-table"> -->
<!-- 				<form name="userForm" id="userForm" method="post" > -->
<!-- 				<table id="mastertable"> -->
<!-- 					<thead> -->
<!-- 						<tr> -->
<!-- 							<th scope="row"></th> -->
<!-- 							<th></th> -->
<!-- 							<td style="width: 25%;">권한ID</td> -->
<!-- 							<td style="width: 25%;">최초등록자</td> -->
<!-- 							<td style="width: 25%;">최초등록일</td> -->
<!-- 							<td style="width: 25%;">사용자ID</td> -->
<!-- 						</tr> -->
<!-- 					</thead> -->
<!-- 					<tbody id="userAuthBody"> -->
						
<!-- 					</tbody> -->
<!-- 				</table> -->
<!-- 			</div> -->
<!-- 		</div> -->
	</div>
	</div>

</body>
</html>


