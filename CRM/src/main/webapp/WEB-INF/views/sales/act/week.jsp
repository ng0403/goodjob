<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<c:set var="ctx" value="${pageContext.request.contextPath }" />
 
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/jui/jui.min.css"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/lib/animate.min.css"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/lib/main.css"/>
<link href='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.css' rel='stylesheet' />
<link href='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.print.css' rel='stylesheet' media='print' />
<script src="${pageContext.request.contextPath}/resources/SE/js/HuskyEZCreator.js" type="text/javascript" charset="utf-8"></script>
<script src='${pageContext.request.contextPath}/resources/lib/jquery.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/lib/jquery-ui.custom.min.js'></script>
<script src='${pageContext.request.contextPath}/resources/fullcalendar/fullcalendar.min.js'></script>
<script src="${pageContext.request.contextPath}/resources/lib/niee-canvas-chart003.js"></script>
<script src="${pageContext.request.contextPath}/resources/lib/ajaxfileupload.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/base.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/core.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/ui/button.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/ui/combo.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/ui/datepicker.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/ui/dropdown.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/ui/modal.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/uix/table.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/uix/tree.js"></script>
 
</head> 
<body style="background-color:white;">

<div >
<div id="dboardbody" class="jui" style="width: 1250px;margin: 0 auto;">
<input type="hidden" id="ctx" value="${ctx}">
<input type="hidden" id="selectUser">
<input type="hidden" id="selectTab" value="tab_Home">
	
	<div id="title">
		<div class="caption">■ 영업 > 영업활동 </div>
	</div>
	
	<!-- schedule view modal -->
	<div id="sviewModal" class="msgbox" style="display: none;">
		<div class="head">
			<span id="sviewModal-title"></span>
	    </div>
		<div class="body">
			<div class="contents-view" id="sviewModal-contents"></div>
			<div style="text-align: center; margin-bottom: 10px;">
				<a href="#" class="btn btn-gray btn-small" onclick='javascript:sviewModal.hide();'>Close</a>
			</div> 
		</div>
	</div>
	
	<!-- 내용영역 -->
	<div class="panel main-container">
		<div class="head">
			<i class="icon-home"></i>업무 시스템(&nbsp;<span id="head-year"></span>년&nbsp;<span id="head-month"></span>월&nbsp;<span id="head-day"></span>일&nbsp;<span id="head-hour"></span>시&nbsp;<span id="head-min"></span>분&nbsp;)
  		 
		</div>
		<div class="body">

		<!-- ETc영역 -->
		<div id="main_Etc" style="display: none;">
			<div>
				<div class="group" >
					<a class="left btn btn-mini btn-gray-black" id="etc-refresh"><span>새로고침</span>&nbsp;<i class="icon-refresh"></i></a>
					<a class="left btn btn-mini btn-gray-black" id="etc-chart"><span>통계</span>&nbsp;<i class="icon-gear"></i></a>
 				</div>
				<span id="etcSelect">
					<select id="syear">
						<script>
							var date = new Date();
							for(var i = (date.getFullYear()-1) ; i > (date.getFullYear()-2) ; i --){
								document.write("<option value='"+i+"'>"+i+"년</option>");
							}
							document.write("<option selected='selected' value='"+date.getFullYear()+"'>"+date.getFullYear()+"월</option>");
							for(var i = (date.getFullYear()+1) ; i < (date.getFullYear()+2) ; i ++){
								document.write("<option value='"+i+"'>"+i+"년</option>");
							}
						</script>
					</select>
					<select id="smonth">
						<script>
							var date = new Date();
							for(var i = 0 ; i < 12 ; i ++){
								if(i == date.getMonth()){
									document.write("<option selected='selected' value='"+(i+1)+"'>"+(i+1)+"월</option>");
								}else{
									document.write("<option value='"+(i+1)+"'>"+(i+1)+"월</option>");
								}
							}
						</script>
					</select>
					~
					<select id="eyear">
						<script>
							var date = new Date();
							for(var i = (date.getFullYear()-1) ; i > (date.getFullYear()-2) ; i --){
								document.write("<option value='"+i+"'>"+i+"년</option>");
							}
							document.write("<option selected='selected' value='"+date.getFullYear()+"'>"+date.getFullYear()+"월</option>");
							for(var i = (date.getFullYear()+1) ; i < (date.getFullYear()+2) ; i ++){
								document.write("<option value='"+i+"'>"+i+"년</option>");
							}
						</script>
					</select>
					<select id="emonth">
						<script>
							var date = new Date();
							for(var i = 0 ; i < 12 ; i ++){
								if(i == date.getMonth()){
									document.write("<option selected='selected' value='"+(i+1)+"'>"+(i+1)+"월</option>");
								}else{
									document.write("<option value='"+(i+1)+"'>"+(i+1)+"월</option>");
								}
							}
						</script>
					</select>
					<a class="left btn btn-mini btn-gray-black" id="etc-search" onclick="getEtc()"><span>검색</span></a>
				</span>
				<div class="group" style="float: right;">
					<a class="left btn btn-mini btn-gray-black" id="etc-print"><span>출력</span>&nbsp;<i class="icon-document"></i></a>
				</div>
			</div>
			<div id="etc-contents" style="margin-top: 5px;">
				
			</div>
		</div>
	
		<!-- Schedule_View -->
		<div id="main_View" style="display: block;">
			<div class="group" >
				<a class="left btn btn-mini btn-gray-black" id="sview-refresh"><span>새로고침</span>&nbsp;<i class="icon-refresh"></i></a>
				(날짜의 빈공간을 클릭하면 스케줄을 등록 할 수 있습니다.)
			</div>
			<!-- 달력 Cell 생성해주는 부분	. -->
			<div id='schcalendar'></div>
		 </div>
	</div>
	</div>
</div>
</div>

<script type="text/javascript">
function getContextPath(){
    var context = '${pageContext.request.contextPath}'
    return context;
}
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_DATE.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_JUI.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_JQUERY.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/intranet_FUNCTION.js"></script>
 
</body>
</html>