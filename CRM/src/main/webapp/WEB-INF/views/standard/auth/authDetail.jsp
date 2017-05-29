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
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css"> --%>

<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<!-- <script type="text/javascript" -->
<%-- 	src="${ctx}/resources/common/js/jquery-ui.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery.mCustomScrollbar.concat.min.js"></script> --%>
<script>
// $(function() {
// 	 $("#ausermasterdiv").mCustomScrollbar({
//       theme:"rounded-dark",
//       autoHideScrollbar: false,
//       scrollbarPosition: "outside",
//       scrollButtons:{
//         enable:true
//       },
//       axis:"y"
//     });
// });  
</script>
<style type="text/css">
#ausermasterhead{
	margin-bottom:0px;
}
#ausermasterdiv{
	height:364px;
}
</style>
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
				
				<table id="ausermasterhead" class="ui celled table">
					<thead>
						<tr>
							<th style="width: 5%;"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
							<th style="width: 15%;">사용자ID</th>
							<th style="width: 15%;">사용자 이름</th>
							<th style="width: 30%;">권한명</th>
							<th style="width: 16%;">최종수정자</th>
							<th style="width: 19%;">최종수정일</th>
<!-- 							<th style="width: 0%;border-left:none;"></th> -->
						</tr>
					</thead>
				</table>
				<div id="ausermasterdiv" style="width:100%;margin-top:0px;">
				<table id="ausermastertable" class="ui celled table">
					<tbody>
						<c:forEach var="authUser" items="${authIuserList}">
						
							<tr>
							    <td style="width: 5%;">
							    	<input type="checkbox" id="ckselect" value="${authUser.iuser_id}">
							    </td>
								<td style="width: 15%;"><a href="#">${authUser.id_nm}</a></td>
								<td style="width: 15%;">${authUser.iuser_nm}</td>
								<td style="width: 30%;">${authUser.auth_nm}</td>
								<td style="width: 16%;">${authUser.fst_reg_id}</td>
								<td style="width: 19%;"><fmt:formatDate value="${authUser.fst_reg_d}" pattern="yyyy-MM-dd"/></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
				</div>
			</div>
		<div class="auth_bt_position">
			<button type="button" class="tiny ui button" id="writeauthuser">등록</button>
			<button type="button" class="tiny ui orange button" id="deleteauthuser">삭제</button>
	    </div>
	    
	</div>
		
	<div id="tabDiv2" class="tab2_content">
		<input type="hidden" id="ctx" value="${ctx}"/>
		
		<div class="bt_position">
			<div class="ui left icon input">
				<select id="keyfield">
					<option value="mid">권한ID</option>
					<option value="mname">권한명</option>
					<option value="mmenu">메뉴명</option>
				</select> <input id="authmenu_text" type="text" name="keyword" class="int_search"> &nbsp;
			</div>
			<button id="menuAuthSearch" type="button" class="tiny ui orange button">검색</button>
		</div>
	
		<div class="bs-example" data-example-id="simple-table">
			<table id="menumastertable" class="ui sortable celled table">
				<thead>
					<tr>
						<th style="width:5.1%;"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
						<th style="width:20.1%;">권한명</th>
						<th style="width:25.1%;">권한 메뉴명</th>
						<th style="width:9.9%;">디폴트여부</th>
						<th style="width:9.8%;">조회여부</th>
						<th style="width:9.8%;">입력여부</th>
						<th style="width:9.8%;">수정여부</th>
						<th style="width:11.5%;border-right:none;">삭제여부</th>
						<th style="width: 0%;border-left:none;"></th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="auth" items="${authMenuList}"> 
					<tr>
						<td style="width:5%;">
							<input type="checkbox" id="ckselect" value="${auth.auth_id}">
							<input type="hidden" id="auth_id" value="${auth.auth_id}">
						</td>
						<td style="width:20%;">
							<a href="#">${auth.auth_nm}</a>
						</td>
						<td style="width:25%;">
							<input type="hidden" id="menu_id" value="${auth.menu_id}"/>${auth.menu_nm}
						</td>
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
			<button type="button" class="tiny ui button" id="writeauthmenu">등록</button>
			<button type="button" class="tiny ui orange button" id="deleteauthmenu">삭제</button>
		</div>
	</div>
</div>
</body>
</html>