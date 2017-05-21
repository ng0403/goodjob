<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/auth/authUserViewPopup.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/auth/authUserViewPopup.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<title>사용자권한 상세정보</title>
</head>
<body>
<div class="authmenuview">
<input type="hidden" id="ctx" value="${ctx}">
<div id="title">
<br>
<div class="caption">
	<h3 class="ui header" style="background: #fff;">■ 사용자권한 수정</h3>
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
								<td style="width:20%;text-align:right;border:none;"">사용자ID</td>
								<td style="width:40%;border:none;">
									<input type="hidden" name="uu_user_id" id="iuser_id" class="int" value="${user_id}"/>
									<input type="text" name="uu_user_id" id="uu_user_id" class="int" value="${user_nm}" disabled="disabled"/>
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
								<th style="border:none;height:150px;" rowspan="5">
									<table>
										<tbody id="authList" style="height:150px;">
											<c:forEach var="authList" items="${authList}">
												<tr>
													<td>
														<input type="hidden" name="auth_id" value="${authList.auth_id }"/>
														${authList.auth_nm}
													</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</th>
								<td style="border:none;height:30px;">
									<input type="hidden" id="auth_id" value=""/>
									<input type="hidden" id="auth_nm" value=""/>
								</td>
								<th style="border:none;height:150px;" rowspan="5">
									<table>
										<tbody id="userAuthList" style="height:150px;">
											<c:forEach var="userAuthList" items="${userAuthList}">
												<tr>
													<td>
														<input type="hidden" name="auth_id" value="${userAuthList.auth_id }"/>
														${userAuthList.auth_nm}
													</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</th>
							</tr>
							<tr>
								<td style="border:none;height:30px;text-align: center;">
									<input type="button" id="userAuthGo" class="tiny ui button" value=">"/>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:30px;"></td>
							</tr>
							<tr>
								<td style="border:none;height:30px;text-align: center;">
									<input type="button" id="authGo" class="tiny ui button" value="<"/>
								</td>
							</tr>
							<tr>
								<td style="border:none;height:30px;"></td>
							</tr>
<!-- 				<tr> -->
<!-- 					<th>권한 ID</th> -->
<!-- 					<td> -->
<%-- 						<input type="text" name="uauth_id" id="uauth_id" class="int" value="${authUser.auth_id}" disabled="disabled"/> --%>
<!-- 						<input type="button" id="searchAuthIuser_authId" class="btn btn-default" value="검색"/> -->
<!-- 					</td> -->
<!-- 				</tr> -->
<!-- 				<tr> -->
<!-- 					<th>사용자ID</th> -->
<!-- 					<td> -->
<%-- 						<input type="hidden" name="uu_user_id" id="iuser_id" class="int" value="${authUser.iuser_id}"/> --%>
<%-- 						<input type="text" name="uu_user_id" id="uu_user_id" class="int" value="${authUser.id_nm}" disabled="disabled"/> --%>
<!-- 						<input type="button" id="searchAuthIuser_iuserId" class="btn btn-default" value="검색"/> -->
<!-- 					</td> -->
<!-- 				</tr> -->
<!-- 				<tr> -->
<!-- 					<th>생성자</th> -->
<%-- 					<td colspan="2"><input type="text" name="uc_user_id" id="uc_user_id" class="int" value="${authUser.fst_reg_id}" disabled="disabled"/></td> --%>
<!-- 				</tr> -->
<!-- 				<tr> -->
<!-- 					<th>생성일</th> -->
<%-- 					<td><input type="text" name="ucdate" id="ucdate" class="int" value="${authUser.fst_reg_d}" disabled="disabled"/></td> --%>
<!-- 				</tr> -->
					   </tbody>	
				   </table>
				</th>
			</tr>
		</table>
	</div>
</div>
	<div class="auth_bt_position">
		
		<input type="button" class="tiny ui orange button" value="저장" id="uauth_confirm"/>
		<input type="button" class="tiny ui button" value="편집" id="uauth_modify"/>
		<input type="button" class="tiny ui button" value="취소" id="uauth_cancel"/>
	</div>
</div>
</div>
</body>
</html>