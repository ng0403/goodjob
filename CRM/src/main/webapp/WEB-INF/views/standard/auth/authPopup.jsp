<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authPopup.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/body.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/bootstrap.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/Semantic/semantic.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authPopup.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>권한 등록</title>
</head>
<body>
<div id="title">
<br>
	<div class="caption">
		<h3 class="ui header" style="background: #fff; padding: 10px;">■ 권한 등록</h3>
	</div>
	<div class="bt_position_popup">
		<div class="bs-example" data-example-id="simple-table">
	 		<table class="ui celled table">  			
							<tbody id="tbody1">
								<tr>
									<th>권한명</th>
									<td><input type="text" name="pauth_name" id="pauth_name" class="inputText"/></td>
								</tr>
								<tr>
									<th>활성화 여부</th>
									<td><input type="radio" id="pauth_flg_Y" value="Y" checked="checked"/>활성화&nbsp;
										<input type="radio" id="pauth_flg_N" value="N"/>비활성화</td>
								</tr>
							</tbody>
						</table>
	</div>
	<br>
	<div class="bt_position">
		<input type="button" class="tiny ui blue button" value="등록" id="pauth_confirm"/>
		<input type="button" class="tiny ui button" value="취소" id="pauth_cancel"/>
	</div>
</div>
</div>
</body>
</html>