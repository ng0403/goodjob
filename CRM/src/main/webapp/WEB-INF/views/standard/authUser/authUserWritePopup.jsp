<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authUserWritePopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authUserWritePopup.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<title>사용자권한 등록</title>
</head>
<body>
<div class="authmenuview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 사용자권한 등록</h3>
</div>
<div class="bt_position_popup">
   <div class="bs-example" data-example-id="simple-table">
		<table class="ui sortable celled table" >
			<tr>
				<th style="height:300px;">
					<table class="ui celled table" style="border:none;">  	
						<tbody>
							<tr>
								<td style="width:40%;border:none;"></td>
								<td style="width:20%;text-align:right;border:none;">사용자ID</td>
								<td style="width:40%;border:none;">
									<input type="hidden" name="iuser_id" id="iuser_id"/>
									<input type="text" name="id_nm" id="uu_user_id" class="int"  readonly="readonly" />
									<input type="button" id="searchAuthIuser_iuserId" class="tiny ui orange button" value="검색"/>
								</td>
							</tr>
							<tr>
								<td style="border:none;"></td>
								<td style="border:none;"></td>
								<td style="border:none;"></td>
							</tr>
							<tr>
								<td style="border:none;">
									<h4 class="ui header" style="background: #fff;">권한목록</h4>
								</td>
								<td style="border:none;"></td>
								<td style="border:none;">
									<h4 class="ui header" style="background: #fff;">보유권한</h4>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:150px;" rowspan="5">
									<table>
										<tbody id="wauthList" style="height:150px;">
											
										</tbody>
									</table>
								</td>
								<td style="border:none;height:30px;">
									<input type="hidden" id="wauth_id" value=""/>
									<input type="hidden" id="wauth_nm" value=""/>
								</td>
								<td style="border:none;height:150px;" rowspan="5">
									<table>
										<tbody id="wuserAuthList" style="height:150px;">
											
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:30px;text-align: center;">
									<input type="button" id="wuserAuthGo" class="tiny ui button" value=">"/>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:30px;"></td>
							</tr>
							<tr>
								<td style="border:none;height:30px;text-align: center;">
									<input type="button" id="wauthGo" class="tiny ui button" value="<"/>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:30px;"></td>
							</tr>
						</tbody>	
				   </table>
				</th>
			</tr>
		</table>
<!-- 	 <table class="table">  			 -->
<!-- 		<tbody> -->
<!-- 			<tr> -->
<!-- 				<th>권한 ID</th> -->
<!-- 				<td> -->
<!-- 					<input type="text" name="uauth_id" id="uauth_id" class="int"  readonly="readonly"/> -->
<!-- 					<input type="button" id="searchAuthIuser_authId" class="auth_btn" value="검색"/>	 -->
<!-- 				</td> -->
<!-- 			</tr> -->
<!-- 			<tr> -->
<!-- 				<th>사용자ID</th> -->
<!-- 				<td> -->
<!-- 					<input type="hidden" name="iuser_id" id="iuser_id"/> -->
<!-- 					<input type="text" name="id_nm" id="uu_user_id" class="int"  readonly="readonly" /> -->
<!-- 					<input type="button" id="searchAuthIuser_iuserId" class="auth_btn" value="검색"/> -->
<!-- 				</td> -->
<!-- 			</tr> -->
<!-- 		</tbody> -->
<!-- 		</table> -->
	</div>
	<div class="bt_position">
		<input type="button" class="tiny ui orange button" value="등록" id="authUserInsert"/>
		<input type="button" class="tiny ui button" value="취소" id="authUserCancel"/>
	</div>
</div>
</div>
</div>
</body>
</html>