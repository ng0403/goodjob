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
<!-- 탭 -->
	<ul class="tab tab-top">
		<li class="active">
			<a href="#" id="tab_View" title="main_View">Schedule</a>
		</li>
		 
	</ul>
<!-- 스케줄 글보기 모달 -->
	<div id="modal" class="msgbox" style="display: none;">
		<div class="head">
			<span id="modal-title"></span>
	    </div>
		<div class="body">
			<span id="modal-contents"></span>
			<div style="text-align: center; margin-top: 45px;" id="contentsBtn">
			</div>
		</div>
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
 
	<!-- 메일등록모달 -->
	<div id="mailModal" class="msgbox" style="display: none;">
		<div class="head">
			<span>메일전송 폼</span>
	    </div>
		<div class="body">
			<table>
				<tr>
					<td>
						<input class="input input-rect" id="mail-title" name="mail-title" style="width: 612px" maxlength="100" placeholder="제목"/>
					</td>
				</tr>
				<tr>
					<td style="border-spacing: 0px;border-collapse: 0px;border: 1px solid #BEBeBe;">
						To : <span id="mailTo"></span><br><br>
						C.C : <div id="cclist" style="width: 612px;"></div>
						<ul class="tree_1 tree tree-arrow"></ul>
		  				<script id="tpl_tree" type="text/template">
							<li>
								<div><i></i> <!= title !></div>
								<ul></ul>
							</li>
						</script>
					</td>
				</tr>
				<tr>
					<td style="border-spacing: 0px;border-collapse: 0px;border: 1px solid #BEBeBe;">
						<span id="fileName"></span>
						<div id="mailFiles">
							<input type="file" name="mailfile" id="mailfile"><br>
							<a href="#" id="mailFileAddBtn" class="btn btn-gray btn-small">파일등록</a>(파일선택 후 등록해야 글 저장시 함께 등록 됩니다.)
						</div>
					</td>
				</tr>
				<tr>
					<td style="border-spacing: 0px;border-collapse: 0px;border: 1px solid #BEBeBe;">
						<font color="red">메일 전송</font> : <input type="checkbox" id="mail-yn" name="mail-yn"/>(체크시 작성한 내용이 메일로 발송됩니다.)<br>
					</td>
				</tr>
				<tr>
					<td>
						<textarea class="input" id="mail-contents" name="mail-contents" style="width: 610px;height: 300px;" placeholder="내용"></textarea>
					</td>
				</tr>
			</table>
			<div style="text-align: center;">
				<a href="#" id="mailBtn" class="btn btn-gray btn-small">저장</a>
				<a href="#" id="mailClose" class="btn btn-gray btn-small">Close</a>
			</div>
		</div>
	</div>
	<!-- 내용영역 -->
	<div class="panel main-container">
		<div class="head">
			<i class="icon-home"></i>업무 시스템(&nbsp;<span id="head-year"></span>년&nbsp;<span id="head-month"></span>월&nbsp;<span id="head-day"></span>일&nbsp;<span id="head-hour"></span>시&nbsp;<span id="head-min"></span>분&nbsp;)
  		 
		</div>
		<div class="body">
		<!-- 홈내용 -->
		<div id="main_Home" style="display: none;">
	    <div class="msg" style="margin-bottom: 5px;">
	    	<div id="searchCombo" class="combo">
				<a class="btn btn-gray">Select...</a>
				<a class="btn btn-gray btn-toggle"><i class="icon-arrow2"></i></a>
				<ul>
					<li value="3">이름</li>
					<li value="4">전화번호</li>
					<li value="5">메일주소</li>
				</ul>
			</div>
			<input class="input input-rect" id="eText"><a class="btn btn-gray" id="employeeSearch">검색</a>
	    </div>
	    <div class="user-work notify">
			<div style="width: 90%;height:90%;margin: 10px auto;">
				<div class="group">
					<a class="btn btn-mini btn-gray-black" id="work-email"><span id="work-name"></span>&nbsp;<i class="icon-document"></i></a>
					<a class="right btn btn-mini btn-gray-black" id="work-refresh"><span>새로고침</span>&nbsp;<i class="icon-refresh"></i></a>
				</div>
				<table id="userArticle" class="table table-classic" style="width: 100%;margin-top: 5px;">
					<colgroup>
						<col width="45px">
						<col width="*">
						<col width="60px">
						<col width="60px">
						<col width="40px">
						<col width="105px">
					</colgroup>
					<thead>
						<tr>
							<th>Seq.</th>
							<th>Title</th>
							<th>FROM</th>
							<th>TO</th>
							<th>확인</th>
							<th>RegTime</th>
						</tr>
					</thead>
					<tbody id="userArticleBody"></tbody>
				</table>
				<div id="userArticlePaging" class="paging" style="width: 100%; margin-top: 3px;">
				</div>
				<div style="margin: 10px auto;width: 400px;">
					<div id="userRadio" class="group">
						<a class="btn btn-small btn-gray-purple" value="title">제목</a>
						<a class="btn btn-small btn-gray-purple" value="contents">내용</a>
						<a class="btn btn-small btn-gray-purple" value="writer">FROM</a>
						<a class="btn btn-small btn-gray-purple" value="receiver">TO</a>
					</div>
					<input class="input input-rect" id="mText"><a class="btn btn-purple-gray" id="userMailSearch">검색</a>
				</div>
				<script data-jui="#userArticle" data-tpl="row" type="text/template">
					<tr>
						<td><!= seq !></td>
						<td><!= title !></td>
						<td><!= name !></td>
						<td><!= receivername !></td>
						<td><!= viewYn !></td>
						<td><!= regtime !></td>
					</tr>
				</script>
			</div>
		</div>
		</div>
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
				(날짜의 빈공간을 클릭하면 스케줄을 등록 할 수 있습니다.3)
			</div>
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