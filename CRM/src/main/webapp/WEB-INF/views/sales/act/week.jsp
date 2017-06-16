<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link href='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.css' rel='stylesheet' />
<link href='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.print.css' rel='stylesheet' media='print' />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>


<script src="${pageContext.request.contextPath}/resources/SE/js/HuskyEZCreator.js" type="text/javascript" charset="utf-8"></script>
<script src='${pageContext.request.contextPath}/resources/lib/jquery.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/lib/jquery-ui.custom.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.min.js'></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_DATE.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_JQUERY.js"></script>
<%-- <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_JUI.js"></script> --%>
<%-- <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_FUNCTION.js"></script> --%>

</head>
<body style="background-color: white;">

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