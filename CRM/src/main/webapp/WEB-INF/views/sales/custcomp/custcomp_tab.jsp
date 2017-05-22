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

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/standard/common/tablist_th.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" /> --%>

<!-- 새로운 공통 css 파일 -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_tab.css" type="text/css" /> --%>

<!-- 기존 css 파일 -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" /> --%>

</head>
<body  >
	<div id="css_tabs" style="float: left; padding-top: 30px;">
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
		<label for="tab4" class="tab4">영업활동</label> 
		<label for="tab5">견적</label>
		
<!-- 		<input id="tab2" type="radio" name="tab"  /> -->
<!-- 		<label for="tab2">영업 담당자</label>  -->
		<!-- 탭 내용 : 고객사 담당 사원 -->
		<div id="tabDiv1" class="tab1_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="poc_pop_btn"  class="tiny ui orange button" value="담당자 추가" />
				<input type="button" id="deletePocbtn" class="tiny ui orange button" value="삭제" onclick="custMngDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="ui sortable celled table" id="tblTh" > 
					<thead>
						<tr>
							<th style='width:36px;'><input type="checkbox"  id='pocListCheck'/></th>
							<th style='width:172px;'>고객사명</th>
							<th style='width:273px;'>사원명</th>
							<th style='width:273px;'>역할명</th>
							<th style='width:230px;'>등록자</th>
							<th style='width:271px;'>등록일시</th>
						</tr>
					</thead>
					<tbody id= "pocTableTbody" class="tbody">
						<tr style='height: 75px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
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
		<div id="tabDiv2"  style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="keyman_pop_btn"  class="tiny ui orange button" value="키맨 추가" />
				<input type="button" id="deletekeymanbtn" class="tiny ui orange button" value="삭제" onclick="keymanDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="ui sortable celled table" id="tblTh"> 
<!-- 				style="border-collapse: collapse; border: 1px solid rgba(34, 36, 38, 0.1);" -->
					<thead>
						<tr>
							<th style='width:36px;'><input type="checkbox"  id='keymanListCheck'/></th>
<!-- 							<th style='width:10%;'>고객사</th> -->
							<th style='width:144px;'>키맨명</th>
							<th style='width:175px;'>역할명</th>
							<th style='width:175px;'>직급</th>
							<th style='width:144px;'>직무</th>
							<th style='width:238px;'>메모</th>
							<th style='width:144px;'>등록자</th>
							<th style='width:177px;'>등록일시</th>
						</tr>
					</thead>
					<tbody id="keymanTableTbody" class="tbody" style="text-align: center; height: 156px; ">
							<tr style='height: 75px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- 영업기회 리스트 -->
		<div id="tabDiv3"  style="width: 100%;">
<!-- 			<div class="bt_position_authuser"> -->
<!-- 				<input type="button" id="oppt_pop_btn" class="custcomp_btn" value="영업기회 추가" /> -->
<%-- 				<input type="button" id="opptDel" class="custcomp_btn" value="삭제" onclick="ccOpptDel('${ctx}')"/> --%>
<!-- 			</div> -->
			
			<div class="bt_position_authuser" style="float: right;">
				<input type="button" id="actAddSaveBtn"   class="tiny ui orange button" value="영업기회 추가" onclick="opptInsertPop('${ctx}')"/>
				<input type="button" id="actAddCancelBtn" class="tiny ui orange button" value="삭제" onclick="actOpptDelBt();"/>
			</div>
			
			<div id="tableline2">
<!-- 				<table id="opptTable" class="tabtable"> -->
				<table id="goaltable" class="ui sortable celled table">
					<thead>
						<tr>
<!-- 							<th style='width:3%;'><input type="checkbox"  id='ccOpptListCheck'/></th> -->
							<th style="width: 26px; text-align: center;"><input type="checkbox"  id='actOpptAllSelect'/></th>
							<th style="width: 283px;">영업기회명</td>
							<th style="width: 162px;">고객사</td>
							<th style="width: 117px;">상태</td>
							<th style="width: 136px;">영업단계</td>
							<th style="width: 117px;">예상마감일자</td>
							<th style="width: 112px;">가능성</td>
							<th style="width: 114px;">등록자</td>
							<th style="width: 155px;">등록일시</td>
						</tr>
					</thead>
					<tbody id="activeOpptList" class="tbody">
						<c:forEach items="${opptList}" var="opptList">
							<c:if test="${not empty opptList}">
								<tr id="${opptList.sales_oppt_id}">
									<td>
										<input type="checkbox"  id="actOpptAllSelect" name="sales_oppt_id" value="${opptList.sales_oppt_id}"/>
									</td>
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
								<tr style='height: 75px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
							</c:if>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
			
			<!-- 영업활동 리스트 -->
		<div id="tabDiv4"  style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="act_cust_nm" class="tiny ui orange button" value="영업활동 추가"/>
				<input type="button" id="actDel"      class="tiny ui orange button" value="삭제" onclick="ccActDel('${ctx}');"/>
			</div>
			
			<div id="tableline2">
				<table id="actTable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style='width:30px;'  rowspan="2"><input type="checkbox"  id='ccActListCheck'/></th>
							<th style='width:293px;' rowspan="2">영업활동명</th>
							<th style='width:101px;'  rowspan="2">활동구분</th>
							<th style='width:136px;' rowspan="2">영업기회명</th>
							<th style='width:126px;'  rowspan="2">활동유형</th>
							<th style='width:106px;   height:12px; padding:5px;'>시작일자</th>
							<th style='width:63px;   height:12px; padding:5px;'>시작시간</th>
							<th style='width:100px;'  rowspan="2">상태</th>
							<th style='width:104px;'  rowspan="2">등록자</th>
							<th style='width:135px;' rowspan="2">등록일시</th>
						</tr>
						<tr>
							<th style='width:80px; height:12px; padding:5px;'>종료일자</th>
							<th style='width:80px; height:12px; padding:5px;'>종료시간</th>
						</tr>
					</thead>
					<tbody id="actTableTbody" class="tbody" style="height: 139px; overflow: auto;">
						<tr style='height: 75px; text-align: center;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	
			<!-- 견적 리스트 -->
		<div id="tabDiv5" class="tab6_content" style="width: 100%;"> 
			<div class="bt_position_authuser">
				<button id="estimateAdd"     class="tiny ui orange button">견적 추가</button>
				<button id="addkeymancancel" class="tiny ui orange button" onclick="ccEstDel('${ctx}');" >삭제</button>
			</div>
			
			<div id="tableline2">
				<table id="goaltable" class="ui sortable celled table">
					<thead>						
						<tr>
							<th style="width: 30px;"><input type="checkbox"  id='ccEstListCheck'/></th>
							<th style="width: 287px;">견적명</td>
							<th style="width: 99px;">견적단계</td>
							<th style="width: 79px;">견적수량</td>
							<th style="width: 105px;">견적금액</td>
							<th style="width: 137px;">견적유효일자</td>
							<th style="width: 182px;">메모</td>
							<th style="width: 102px;">등록자</td>
							<th style="width: 201px;">등록일시</td>
						</tr>
					</thead>
					<tbody id="estTableTbody" class="tbody" style="height: 156px;">
						<tr style='height: 75px; text-align: center;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>		
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