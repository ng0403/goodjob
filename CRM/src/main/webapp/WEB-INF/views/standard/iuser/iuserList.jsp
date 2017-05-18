<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserList.js"></script>	
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviuser").css("font-weight", "bold");
</script>

</head>
<body>

	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 사용자관리</h3>
		</div>
		<div class="search_div">
		<form name="searchForm" method="post" action="${ctx}/user">
			<select name="keyfield">
				<option value="u_id">사용자ID명</option>
				<option value="u_name">사용자명</option>
				<option value="o_name">조직명</option>
			</select> 
			<div class="ui input focus">
				<input id="title_text" type="text" name="keyword" class="int2" style="background-color:white"> &nbsp;
			</div>
			<button id="search_btn" type="submit" class="tiny tiny ui orange button">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/iuserDelete" >	
		<table id="mastertable" class="ui celled table">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox" onclick="allChk(this);"/></th>
					<td style="width:10%;">사용자ID</td>
					<td style="width:10%;">사용자명</td>
					<td style="width:10%;">조직명</td>
					<td style="width:25%;">이메일</td>
					<td style="width:25%;">연락처</td>
					<td style="width:10%;">사용자구분</td>
					<td style="width:10%;">상태</td>
				</tr>
			</thead>
			<tbody id="usertbody">
				<c:forEach var="list" items="${list}">
				<tr>
					<th scope="row"><input type="checkbox" class="ab" name="del_code" value="${list.iuser_id}"></th>
					<td style="width:10%;" id="user_id_a">
						<a href='#'>${list.id_nm}</a>
					</td>
					<td style="width:10%;" class="user_name_tag">${list.iuser_nm}</td>
					<td style="width:10%;" class="org_name_tag">${list.org_nm}</td>
					<td style="width:25%;" class="email_tag">${list.email1}@${list.email2}</td>
					<td style="width:25%;" class="cell_phone_tag">${list.cell_ph1}-${list.cell_ph2}-${list.cell_ph3}</td>
					<td style="width:10%;" class="code_name_tag">${list.cd_nm}</td>
					<td style="width:10%;" class="active_flag_tag">
					<c:if test="${list.act_yn=='Y'}">활성화</c:if>
					<c:if test="${list.act_yn=='N'}">비활성화</c:if>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>

		<!-- 기본 버튼 -->
	<div class="bt_positionuserlist" style="padding-bottom: 10px; ">
		<input type="button" id="iuserListAddBtn" class="tiny tiny ui orange button" value="등록"/>
<!-- 		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정"/> -->
		<input type="button" id="iuserDelBtn" class="tiny tiny ui orange button" value="삭제"/>
	</div>
</body>
</html>