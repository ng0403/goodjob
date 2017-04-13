<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script src="${ctx}/resources/common/js/standard/common/navi.js"></script>
<script type="text/javascript">
function logout(){
	var chk = confirm('로그아웃 하시겠습니까?');
	if(chk){
		location.href = '${ctx}/logout';
	}else{
		return;
	}
}
</script>
<style type="text/css">

#guideline {
	width: 85%;	
}

#logout {
	margin: 0 auto;
	margin-top: 34px;
	margin-right: -44px;
	float: right;
	font-weight: bold;
	
}

#logoutImg {
	width: 25px;
	margin: 0 auto;
	margin-top: 10px;
	float: right;
}
#logoutImg:HOVER {
	cursor: pointer;
}
</style>
</head>
<body>
<div class="headerT">
	<div class="hbtn">
		<div id="guideline">
			<img id="logoutImg" alt="logout" src="${ctx}/resources/image/icon/logout.png" onclick="logout();">
<!-- 			<input type="button" id="logout" value="로그아웃" onclick="logout();" /> -->
			<label id="logout">Logout</label>
		</div>
	</div>
</div>

</body>
</html>