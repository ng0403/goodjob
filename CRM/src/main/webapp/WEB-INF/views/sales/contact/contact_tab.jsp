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
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomp_js.js"></script>  
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomptab_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/opptAct_pop.js"></script>
 
 <%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_css.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
</head>
<body  >
	<div id="css_tabs" style="float: left;">
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
				<input type="button" id="keyman_pop_btn" class="custcomp_btn" value="키맨 추가" />
				<input type="button" id="deletekeymanbtn" class="custcomp_btn" value="삭제" onclick="keymanDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="tabtable" style="border-collapse: collapse;"> 
					<thead>
						<tr>
							<th style='width:3%;'><input type="checkbox"  id='keymanListCheck'/></th>
							<th style='width:10%;'>고객사명</th>
							<th style='width:7%;'>직급</th>
 							<th style='width:20%;'>메모</th>
							<th style='width:10%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="keymanTableTbody">
								
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업기회 리스트 -->
		<div id="tabDiv2" class="tab2_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="oppt_pop_btn" class="custcomp_btn" value="영업기회 추가" />
				<input type="button" id="opptDel" class="custcomp_btn" value="삭제" onclick="ccOpptDel()"/>
			</div>
			
			<div id="tableline2">
				<table id="opptTable" class="tabtable">
					<thead>
						<tr>
							<th style='width:3%;'><input type="checkbox"  id='ccOpptListCheck'/></th>
							<th style='width:30%;'>영업기회명</th>
							<th style='width:8%;'>영업단계</th>
							<th style='width:12%;'>예상매출액</th>
							<th style='width:12%;'>예상마감일자</th>
							<th style='width:7%;'>가능성(%)</th>
							<th style='width:7%;'>상태</th>
							<th style='width:8%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="opptTableTbody">
							
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업활동 리스트 -->
		<div id="tabDiv3" class="tab3_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="act_pop_btn" class="custcomp_btn" value="영업활동 추가"/>
				<input type="button" id="actDel" class="custcomp_btn" value="삭제" onclick="opptActiveDeletecontact();"/>
			</div>
			
			<div id="tableline2">
				<table id="actTable" class="tabtable">
					<thead>
						<tr>
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
					<tbody id="actTableTbody">
						
					</tbody>
				</table>
			</div>
		</div>
	
		 
		</div>
</body>
</html>