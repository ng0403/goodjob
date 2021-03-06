<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomptab_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_pop_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomp_js.js"></script> 
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/opptAct_pop.js"></script>
 <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
 
 <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
 

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/contact/contact.css" type="text/css"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_tab.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" /> --%>
</head>



<body>
	<div id="css_tabs" style="float: left;   margin-top:-5%;">
		<!-- 라디오 버튼 -->
		<!-- <input id="tab1" type="radio" name="tab" /> -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<input id="tab2" type="radio" name="tab" />
		<input id="tab3" type="radio" name="tab" />
 	 
		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
<!-- 		<label for="tab1">상세정보</label> 
 -->		<label for="tab1">	키맨 </label> 
		<label for="tab2">영업기회</label> 
		<label for="tab3">영업활동</label> 
  		
		<!-- 탭 내용 : 기업고객 상세정보 -->
	<!-- 	<div id="tabDiv1" class="tab1_content" style="width: 100%;">
		
		</div>
 -->
		<!-- 탭 내용 : 키맨 리스트 -->
		<div id="tabDiv1" class="tab1_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="keyman_pop_btn" class="tiny ui blue button" value="추가" />
				<input type="button" id="deletekeymanbtn" class="tiny ui blue button" value="삭제" onclick="keymanDelete1();"/>
			</div>
			
			<div id="tableline2" class="keyman_div_list">
				<table class="tabtable" id="keyman_table_list"> 
					<thead>
						<tr>
							<th style='width:54px; text-align:center'><input type="checkbox"  id='keymanListCheck'/></th>
							<th style='width:210px;'>고객사명</th>
							<th style='width:142px;'>직급</th>
 							<th style='width:435px;'>메모</th>
							<th style='width:210px;'>등록자</th>
							<th style='width:340px;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="keymanTableTbody" style="height:151px">
								
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업기회 리스트 -->
		<div id="tabDiv2" class="tab2_content" style="table-layout:fixed;">
			<div class="bt_position_authuser">
				<input type="button" id="oppt_pop_btn" class="tiny ui orange button" value="추가" />
				<input type="button" id="opptDel" class="tiny ui orange button" value="삭제" onclick="ccOpptDel()"/>
			</div>
			
			<div id="tableline2" class="oppt_div_list">
				<table id="opptTable" class="tabtable">
					<thead>
						<tr  class="headerLock">
							<th style='width:33px;'><input type="checkbox"  id='ccOpptListCheck'/></th>
							<th style='width:458px'>영업기회명</th>
							<th style='width:110px;;'>영업단계</th>
							<th style='width:172px;'>예상매출액</th>
							<th style='width:171px;'>예상마감일자</th>
							<th style='width:93px;'>가능성(%)</th>
							<th style='width:94px;'>상태</th>
							<th style='width:108px;'>등록자</th>
							<th style='width:208px;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="opptTableTbody" style="height:150px">
							
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업활동 리스트 -->
		<div id="tabDiv3" class="tab3_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="act_pop_btn" class="tiny ui orange button" value="추가"/>
				<input type="button" id="actDel" class="tiny ui orange button" value="삭제" onclick="opptActiveDeletecontact();"/>
			</div>
			
			<div id="tableline2">
				<table id="actTable" class="tabtable" style="table-layout:fixed;" >
					<thead>
						<tr class="headerLock">
							<th style='width:3%;' rowspan="2"><input type="checkbox"  id='ccActListCheck'/></th>
							<th style='width:16%;' rowspan="2">영업활동명</th>
							<th style='width:6%;' rowspan="2">활동구분</th>
							<th style='width:27%;' rowspan="2">영업기회명</th>
							<th style='width:6%;' rowspan="2">활동유형</th>
							<th style='width:8%; height:12px; padding:5px;'>시작일자</th>
							<th style='width:8%; height:12px; padding:5px;'>시작시간</th>
							<th style='width:6%;' rowspan="2">상태</th>
							<th style='width:5%;' rowspan="2">등록자</th>
							<th style='width:15%;' rowspan="2">등록일시</th>
						</tr>
						<tr>
							<th style='width:8%; height:12px; padding:5px;'>종료일자</th>
							<th style='width:8%; height:12px; padding:5px;'>종료시간</th>
						</tr>
					</thead>
					<tbody id="actTableTbody" style="height:150px">
						
					</tbody>
				</table>
			</div>
		</div>
	
		 
		</div>
</body>
</html>