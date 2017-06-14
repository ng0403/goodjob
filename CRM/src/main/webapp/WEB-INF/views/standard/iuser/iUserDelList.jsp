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
<title>삭제된 사용자 관리</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviuser").css("font-weight", "bold");
</script>

</head>
<body>

	<div id="title">
		<div class="caption">
			<label id="listLabel" class="ui header" style="background: #fff;" >■ 기준정보 > <a href="/user" style="font-size: 19px; text-decoration:none;  font: bold;">사용자관리</a> > 영업기회관리 삭제된 데이터</label>
		</div>
		<div class="search_div">
		<form name="searchForm" id="searchForm" method="GET" action="${ctx}/iUserDelList">
			<select name="keyfield">
				<option value="u_id">사용자ID명</option>
				<option value="u_name">사용자명</option>
				<option value="o_name">조직명</option>
			</select> 
			<div class="ui input focus">
				<input id="title_text" type="text" name="keyword" class="int2" style="background-color:white"> &nbsp;
			</div>
			<button id="search_btn" type="submit" class="tiny ui blue button">검색</button>
			<input type="hidden" id="order_by" name="order_by" value="${data.order_by}"/>
			<input type="hidden" id="order_sc" name="order_sc" value="${data.order_sc}"/>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<form name="delDelAllForm" id="delDelAllForm" method="post" >	
		<table id="mastertable" class="ui celled table">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox" onclick="allChk(this);"/></th>
					<td style="width:10%;" onclick="setOrder('id_nm')">사용자ID</td>
					<td style="width:10%;" onclick="setOrder('iuser_nm')">사용자명</td>
					<td style="width:10%;" onclick="setOrder('org_nm')">조직명</td>
					<td style="width:25%;" onclick="setOrder('email')">이메일</td>
					<td style="width:25%;" onclick="setOrder('cell_ph')">연락처</td>
					<td style="width:10%;" onclick="setOrder('cd_nm')">사용자구분</td>
					<td style="width:10%;" onclick="setOrder('act_yn')">상태</td>
				</tr>
			</thead>
			<tbody id="usertbody" style="height: 300px;">
				<c:forEach var="list" items="${list}">
				<tr>
					<th scope="row"><input type="checkbox" class="ab" name="del_code" value="${list.iuser_id}"></th>
					<td style="width:10%;" id="user_id_a">${list.id_nm}	</td>
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
		<input type="button" class="tiny ui blue button" value="복원" id="DelUserRollBack">
		<input type="button" class="tiny ui blue button" value="삭제" id="iUserDelDelete" >
	</div>
</body>
</html>