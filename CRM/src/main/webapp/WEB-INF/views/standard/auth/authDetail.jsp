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

<%-- <script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>

<script type="text/javascript">
$(function(){
	var $meauthtable = $("table#menumastertable");
	var $meauthbodyCells = $meauthtable.find("tbody tr:first").children();
	var meauthcolWidth;
	
	$(window).resize(function(){
		// jquery 개체 안의 요소들의 딥합을 다른 집합으로 변경해서 옮긴다.
		meauthcolWidth = $meauthbodyCells.map(function(){
			return $(this).width();
		}).get();
		
		//각 thead tr 반복
		$meauthtable.find("head tr").children().each(function(i, v){
			$(v).width(meauthcolWidth[i]);
		})
	}).resize();
	
	var $usauthtable = $("table#ausermastertable");
	var $usauthbodyCells = $usauthtable.find("tbody tr:first").children();
	var usauthcolWidth;
	
	$(window).resize(function(){
		// jquery 개체 안의 요소들의 딥합을 다른 집합으로 변경해서 옮긴다.
		usauthcolWidth = $usauthbodyCells.map(function(){
			return $(this).width();
		}).get();
		
		//각 thead tr 반복
		$usauthtable.find("head tr").children().each(function(i, v){
			$(v).width(usauthcolWidth[i]);
		})
	}).resize();
}) 
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
				<button id="userAuthSearch" type="button" class="tiny ui blue button">검색</button>
			</div>
			
			<div id="title"></div>
			
			<div class="bs-example" data-example-id="simple-table">
				
				<table id="ausermastertable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style="width: 4.9%;"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
							<th style="width: 14.8%;" onclick="setOrder('id_nm','userAuth')">사용자ID</th>
							<th style="width: 14.8%;" onclick="setOrder('iuser_nm','userAuth')">사용자 이름</th>
							<th style="width: 29.4%;" onclick="setOrder('auth_nm','userAuth')">권한명</th>
							<th style="width: 15.7%;" onclick="setOrder('fst_reg_id','userAuth')">최종수정자</th>
							<th style="width: 25%;" onclick="setOrder('fst_reg_d','userAuth')">최종수정일</th>
							<th style="width: 5%;border-left:none;"></th>
						</tr>
					</thead>
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
		<div class="auth_bt_position">
			<button type="button" class="tiny ui button" id="writeauthuser">등록</button>
			<button type="button" class="tiny ui blue button" id="deleteauthuser">삭제</button>
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
			<button id="menuAuthSearch" type="button" class="tiny ui blue button">검색</button>
		</div>
	
		<div class="bs-example" data-example-id="simple-table">
			<table id="menumastertable" class="ui celled table">
				<thead>
					<tr>
						<th style="width:4.9%;"><input type="checkbox" id="ckallselect" disabled="disabled"></th>
						<th style="width:19.7%;" onclick="setOrder('auth_nm','authMenu')">권한명</th>
						<th style="width:24.6%;" onclick="setOrder('menu_nm','authMenu')">권한 메뉴명</th>
						<th style="width:9.9%;" onclick="setOrder('deflt_yn','authMenu')">디폴트여부</th>
						<th style="width:9.8%;" onclick="setOrder('retrv_yn','authMenu')">조회여부</th>
						<th style="width:9.8%;" onclick="setOrder('creat_yn','authMenu')">입력여부</th>
						<th style="width:9.8%;" onclick="setOrder('mdfy_yn','authMenu')">수정여부</th>
						<th style="width:20%;" onclick="setOrder('del_yn','authMenu')">삭제여부</th>
						<th style="width: 5%;border-left:none;"></th>
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
			<button type="button" class="tiny ui blue button" id="deleteauthmenu">삭제</button>
		</div>
	</div>
</div>
</body>
</html>