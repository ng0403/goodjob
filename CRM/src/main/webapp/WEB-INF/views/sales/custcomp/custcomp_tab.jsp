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
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomptab_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/opptInsertPop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script src="${ctx}/resources/common/js/sales/oppt/opptProd_pop.js"></script>

<!-- 새로운 공통 css 파일 -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_tab.css" type="text/css" />

<!-- 기존 css 파일 -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" /> --%>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

</head>
<body  >
	<div id="css_tabs" style="float: left;">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<input id="tab2" type="radio" name="tab" />
		<input id="tab3" type="radio" name="tab" />
		<input id="tab4" type="radio" name="tab" />
		<input id="tab5" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->      
		<label for="tab1">고객사 담당자</label> 
		<label for="tab2">키맨 </label> 
		<label for="tab3">영업기회</label> 
		<label for="tab4">영업활동</label> 
		<label for="tab5">견적</label>
		
<!-- 		<input id="tab2" type="radio" name="tab"  /> -->
<!-- 		<label for="tab2">영업 담당자</label>  -->
		<!-- 탭 내용 : 고객사 담당 사원 -->
		<div id="tabDiv1" class="tab1_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="poc_pop_btn" class="ui orange button" value="담당자 추가" />
				<input type="button" id="deletePocbtn" class="ui orange button" value="삭제" onclick="custMngDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="tabtable" style="border-collapse: collapse;"> 
					<thead>
						<tr>
							<th style='width:3%;'><input type="checkbox"  id='pocListCheck'/></th>
							<th style='width:20%;'>고객사명</th>
							<th style='width:20%;'>사원명</th>
							<th style='width:20%;'>역할명</th>
							<th style='width:15%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
					</thead>
					<tbody id= "pocTableTbody">
						<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
			
		</div>
		
		
		<!-- 탭 내용 : 영업 담당 사원 -->
<!-- 		<div id="tabDiv2" class="tab2_content" style="width: 100%;"> -->
<!-- 			<div class="bt_position_authuser"> -->
<!-- 				<input type="button" id="pos_pop_btn" class="custcomp_btn" value="담당자 추가" /> -->
<!-- 				<input type="button" id="deletePosbtn" class="custcomp_btn" value="삭제" onclick="posDelete();"/> -->
<!-- 			</div> -->
			
<!-- 			<div id="tableline2"> -->
<!-- 				<table class="tabtable" style="border-collapse: collapse;">  -->
<!-- 					<thead> -->
<!-- 						<tr> -->
<!-- 							<th style='width:3%;'><input type="checkbox"  id='posListCheck'/></th> -->
<!-- 							<th style='width:20%;'>영업활동명</th> -->
<!-- 							<th style='width:15%;'>사원명</th> -->
<!-- 							<th style='width:20%;'>역할명</th> -->
<!-- 							<th style='width:15%;'>등록자</th> -->
<!-- 							<th style='width:20%;'>등록일시</th> -->
<!-- 						</tr> -->
<!-- 					</thead> -->
<!-- 					<tbody id="posTableTbody"> -->
<!-- 						<tr style='height: 150px;'><td colspan='8'>조회된 결과가 없습니다.</td></tr> -->
<!-- 					</tbody> -->
<!-- 				</table> -->
<!-- 			</div> -->
			
<!-- 		</div> -->
		
		<!-- 탭 내용 : 키맨 리스트 -->
		<div id="tabDiv2" class="tab3_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="keyman_pop_btn" class="button functionBtn" value="키맨 추가" />
				<input type="button" id="deletekeymanbtn" class="button functionBtn" value="삭제" onclick="keymanDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="tabtable" style="border-collapse: collapse;"> 
					<thead>
						<tr>
							<th style='width:3%;'><input type="checkbox"  id='keymanListCheck'/></th>
<!-- 							<th style='width:10%;'>고객사</th> -->
							<th style='width:10%;'>키맨명</th>
							<th style='width:15%;'>역할명</th>
							<th style='width:15%;'>직급</th>
							<th style='width:10%;'>직무</th>
							<th style='width:12%;'>메모</th>
							<th style='width:10%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="keymanTableTbody">
							<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- 영업기회 리스트 -->
		<div id="tabDiv3" class="tab4_content" style="width: 100%;">
<!-- 			<div class="bt_position_authuser"> -->
<!-- 				<input type="button" id="oppt_pop_btn" class="custcomp_btn" value="영업기회 추가" /> -->
<%-- 				<input type="button" id="opptDel" class="custcomp_btn" value="삭제" onclick="ccOpptDel('${ctx}')"/> --%>
<!-- 			</div> -->
			
			<div class="bt_position_authuser" style="float: right;">
				<input type="button" id="actAddSaveBtn" class="button functionBtn" value="영업기회 추가" onclick="opptInsertPop('${ctx}')"/>
				<input type="button" id="actAddCancelBtn" class="button functionBtn" value="삭제" onclick="actOpptDelBt();"/>
			</div>
			
			<div id="tableline2">
<!-- 				<table id="opptTable" class="tabtable"> -->
				<table id="goaltable" class="tabtable">
					<thead>
						<tr>
<!-- 							<th style='width:3%;'><input type="checkbox"  id='ccOpptListCheck'/></th> -->
							<th style="width: 3%;"><input type="checkbox"  id='actOpptAllSelect'/></th>
							<td style="width: 20%;">영업기회명</td>
							<td style="width: 8%;">고객사</td>
							<td style="width: 6%;">상태</td>
							<td style="width: 8%;">영업단계</td>
							<td style="width: 10%;">예상마감일자</td>
							<td style="width: 7%;">가능성</td>
							<td style="width: 8%;">등록자</td>
							<td style="width: 15%;">등록일시</td>
						</tr>
					</thead>
					<tbody id="activeOpptList">
						<c:forEach items="${opptList}" var="opptList">
							<c:if test="${not empty opptList}">
								<tr id="${opptList.sales_oppt_id}">
									<th>
										<input type="checkbox"  id="actOpptAllSelect" name="sales_oppt_id" value="${opptList.sales_oppt_id}"/>
									</th>
										<td>
											<a onclick="opptTabDetail('${opptList.sales_oppt_id}');" id="list_sales_oppt_nm" href="#" style="text-decoration: none;" >${opptList.sales_oppt_nm}</a>
										</td>
										<td>${opptList.cust_nm}</td>
										<td>${opptList.sales_oppt_stat_cd_nm}</td>
										<td>${opptList.sales_lev_cd_nm}</td>
										<td>${opptList.expt_fin_d}</td>
										<td>${opptList.psblty_rate}</td>
										<td>${opptList.fst_reg_id}</td>
										<td>${opptList.fst_reg_dt}</td>
								</tr>
							</c:if>
							<c:if test="${empty opptList}">
								<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
							</c:if>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업활동 리스트 -->
		<div id="tabDiv4" class="tab5_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="act_cust_nm" class="button functionBtn" value="영업활동 추가"/>
				<input type="button" id="actDel" class="button functionBtn" value="삭제" onclick="ccActDel('${ctx}');"/>
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
						<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	
			<!-- 견적 리스트 -->
		<div id="tabDiv5" class="tab6_content" style="width: 100%;"> 
			<div class="bt_position_authuser">
				<button id="estimateAdd" class="button functionBtn">견적 추가</button>
				<button id="addkeymancancel" class="button functionBtn" onclick="ccEstDel('${ctx}');" >삭제</button>
			</div>
			
			<div id="tableline">
				<table id="goaltable" class="tabtable">
					<thead>						
						<tr>
							<th style="width: 3%;"><input type="checkbox"  id='ccEstListCheck'/></th>
							<td style="width: 25%;">견적명</td>
							<td style="width: 10%;">견적단계</td>
							<td style="width: 7%;">견적수량</td>
							<td style="width: 10%;">견적금액</td>
							<td style="width: 12%;">견적유효일자</td>
							<td style="width: 11%;">메모</td>
							<td style="width: 11%;">등록자</td>
							<td style="width: 11%;">등록일시</td>
						</tr>
					</thead>
					<tbody id="estTableTbody" >
						<tr style='height: 150px;'><td colspan='8'>조회된 결과가 없습니다.</td></tr>		
					</tbody>
				</table>
			</div>
		</div>
	
			<!-- 계약 리스트 -->
<!-- 			<div id="tabDiv6" class="tab6_content" style="width: 100%;"> -->
<!-- 			<div class="bt_position_authuser"> -->
<!-- 				<input type="button" id="cont_pop_btn" class="custcomp_btn" value="계약 추가"> -->
<%-- 				<input type="button" id="contDel" class="custcomp_btn" value="삭제" onclick="ccContDel('${ctx}');"/> --%>
<!-- 			</div> -->
			
<!-- 			<div id="tableline2"> -->
<!-- 					<table id="contTable" class="tabtable"> -->
<!-- 						<thead> -->
<!-- 							<tr style="text-align: center;"> -->
<!-- 								<th style='width:3%;'><input type="checkbox"  id='ccContListCheck'/></th> -->
<!-- 								<td style='width:25%;'>계약명</td> -->
<!-- 								<td style='width:15%;'>계약번호</td> -->
<!-- 								<td style='width:10%;'>계약수량</td> -->
<!-- 								<td style='width:10%;'>계약금액</td> -->
<!-- 								<td style='width:15%;'>계약일자</td> -->
<!-- 								<td style='width:7%;'>등록자</td> -->
<!-- 								<td style='width:15%;'>등록일시</td> -->
<!-- 							</tr> -->
<!-- 						</thead> -->
<!-- 						<tbody id="contTableTbody"> -->
							
<!-- 						</tbody> -->
<!-- 					</table> -->
<!-- 				</div> -->
<!-- 			</div> -->
		</div>
</body>
</html>