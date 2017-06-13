<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link href='${pageContext.request.contextPath}/resources/fullcalendar_test/fullcalendar.css' rel='stylesheet' />
<link href='${pageContext.request.contextPath}/resources/fullcalendar_test/fullcalendar.print.css' rel='stylesheet' media='print' />

<script src='${pageContext.request.contextPath}/resources/lib/jquery.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/lib/jquery-ui.custom.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/fullcalendar_test/moment.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/fullcalendar_test/fullcalendar.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/fullcalendar_test/locale-all.js'></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_JQUERY.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_DATE.js"></script>


</head>
<body >		<!-- style="background-color: white;" -->
	<input type="hidden" id="ctx" value="${ctx}"> 
	<input type="hidden" id="selectUser"> 
	<input type="hidden" id="selectTab" value="tab_Home">

	<div>
		<div id="title">
			<div class="caption">
				<h3 class="ui header" style="background: #fff;">■ 영업 > 영업활동</h3>
			</div>
		</div>
		<div id="dboardbody" style="width: 1000px; margin: 0 auto;">	<!-- 1250  margin: 0 auto; -->

			<!-- 내용영역 -->
			<div>
					<!-- Schedule_View -->
					<div id="main_View"> <!-- style="display: block;" -->
						<!-- 달력 Cell 생성해주는 부분	. -->
						<div id='schcalendar'></div>
					</div>
			</div>

		</div>
	</div>

</body>
</html>