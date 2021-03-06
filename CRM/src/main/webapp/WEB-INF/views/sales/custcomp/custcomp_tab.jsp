<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="flg" value="${flg}" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomptab_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/opptInsertPop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estList.js"></script>


<!-- 테이블 th고정 자바스크립트 -->
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script> --%>
<!-- 테이블 th고정 CSS -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" /> --%>
</head>

<body  >
	<input type="hidden" id="custId" value="" >
	<input type="hidden" id="sales_oppt_id" value="" >
	<input type="hidden" id="sales_oppt_nm" value="" >
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="tabValue" value="${tabValue}">

	<div id="css_tabs" style="float: left; padding-top: 30px; ">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" value="key" checked="checked" />
		<input id="tab2" type="radio" name="tab" value="oppt" />
		<input id="tab3" type="radio" name="tab" value="act" />
		<input id="tab4" type="radio" name="tab" value="est"/>
		<input id="tab5" type="radio" name="tab" value="iuser" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->      
		<label for="tab1" class="tab1">키맨 </label> 
		<label for="tab2" class="tab2">영업기회</label> 
		<label for="tab3" class="tab3">영업활동</label> 
		<label for="tab4" class="tab4">견적</label> 
		<label for="tab5" class="tab5">담당사원</label> 
		
		<!-- 탭 내용 : 키맨 리스트 -->
		<div id="tabDiv1"  style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="keyman_pop_btn"  class="tiny ui button" value="키맨 추가" />
				<input type="button" id="deletekeymanbtn" class="tiny ui blue button" value="삭제" onclick="keymanDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="ui sortable celled table" id="tblTh"> 
					<thead>
						<tr>
							<th style='width:36px;'><input type="checkbox"  id='keymanListCheck'/></th>
							<th style='width:230px;'>키맨명</th>
							<th style='width:175px;'>역할명</th>
							<th style='width:175px;'>직급</th>
							<th style='width:175px;'>연락처</th>
							<th style='width:238px;'>이메일</th>
						</tr>
					</thead>
					<tbody id="keymanTableTbody" class="tbody" style="text-align: center; height: 156px; ">
							<tr style='height: 75px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- 영업기회 리스트 -->
		<div id="tabDiv2"  style="width: 100%;">
			<div class="bt_position_authuser" style="float: right;">
<%-- 				<input type="button" id="actAddSaveBtn"   class="tiny ui blue button" value="영업기회 추가" onclick="opptInsertPop('${ctx}')"/> --%>
				<input type="button" id="actAddSaveBtn"   class="tiny ui button" value="영업기회 추가" onclick="AddCustomerOpen('cust', '${custcompDetail.cust_id}', '${custcompDetail.cust_nm}');"/>
				<input type="button" id="actAddCancelBtn" class="tiny ui blue button" value="삭제" onclick="actOpptDelBt();"/>
			</div>
			
			<div id="tableline2">
				<table id="goaltable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style="width: 26px; text-align: center;"><input type="checkbox"  id='actOpptAllSelect'/></th>
							<th style="width: 283px;">영업기회명</th>
							<th style="width: 117px;">상태</th>
							<th style="width: 136px;">영업단계</th>
							<th style="width: 136px;">시작일자</th>
							<th style="width: 117px;">예상마감일자</th>
							<th style="width: 112px;">가능성</th>
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
										<a onclick="AddCustomerOpen('cust_ed', '${opptList.cust_id}', '${opptList.cust_nm}');" id="list_sales_oppt_nm" href="#" style="text-decoration: none;" >${opptList.sales_oppt_nm}</a>
									</td>
									<td>${opptList.sales_oppt_stat_cd_nm}</td>
									<td>${opptList.sales_lev_cd_nm}</td>
									<td>${opptList.fst_reg_dt}</td>
									<td>${opptList.expt_fin_d}</td>
									<td>${opptList.psblty_rate}</td>
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
		<div id="tabDiv3"  style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="actCust_nm" class="tiny ui button" value="영업활동 추가" onclick="actInsertForm2('cust', '${opptList.sales_oppt_id}', '${opptList.sales_oppt_nm}', '${custcompDetail.cust_id}', '${custcompDetail.cust_nm}', tabValue.value);" />
				<input type="button" id="actDel"      class="tiny ui blue button" value="삭제" />
			</div>
			
			<div id="tableline2">
				<table id="actTable" class="ui sortable celled table">
					<thead>
						<tr>
							<th style='width:30px;'  rowspan="2">
								<input type="checkbox"  id='ccActListCheck'/></th>
							<th style='width:270px;' rowspan="2">영업활동명</th>
							<th style='width:105px;  height:12px; padding:5px;'>시작일자</th>
							<th style='width:63px;   height:12px; padding:5px;'>시작시간</th>
							<th style='width:112px;' rowspan="2">영업유형</th>
							<th style='width:98px;'  rowspan="2">영업상태</th>
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
		<div id="tabDiv4" class="tab4_content" style="width: 100%;"> 
			<div class="bt_position_authuser">
				<button id="estimateAdd" 	 class="tiny ui button" onclick="estAddBtn3('${custcompDetail.cust_id}','${custcompDetail.cust_nm}', 'tabValue.value');">견적 추가</button>
				<button id="addkeymancancel" class="tiny ui blue button" onclick="" >삭제</button>
			</div>
			
			<div id="tableline2">
				<table id="goaltable" class="ui sortable celled table">
					<thead>						
						<tr class="tr_table_fix_header">
							<th style="width: 3%;"><input type="checkbox"  id='ccEstListCheck'/></th>
							<th style="width: 25%;">견적명</th>
							<th style="width: 10%;">견적단계</th>
							<th style="width: 7%;">견적수량</th>
							<th style="width: 10%;">견적금액</th>
							<th style="width: 12%;">견적유효일자</th>
							<th style="width: 11%;">메모</th>
							<th style="width: 11%;">등록자</th>
							<th style="width: 11%;">등록일시</th>
						</tr>
					</thead>
					<tbody id="estTableTbody" >
						<tr style='height: 150px;'><td colspan='8'>조회된 결과가 없습니다.</td></tr>		
					</tbody>
				</table>
			</div>
		</div>
		<!-- 탭 내용 : 담당사원 -->
		<div id="tabDiv5" class="tab5_content" style="width: 100%;">
			<div class="bt_position_authuser">
				<input type="button" id="poc_popBtn"  class="tiny ui button" value="담당자 추가" onclick="posAddBtn('${custcompDetail.cust_id}','${custcompDetail.cust_nm}', 'tabValue.value');"/>
				<input type="button" id="deletePocbtn" class="tiny ui blue button" value="삭제" onclick="custMngDelete();"/>
			</div>
			
			<div id="tableline2">
				<table class="ui sortable celled table" > 
					<thead>
						<tr class="tr_table_fix_header">
							<th><input type="checkbox"  id='pocListCheck'/></th>
							<th>사원명</th>
							<th>부서명</th>
							<th>역할명</th>
							<th>연락처</th>
							<th>이메일</th>
						</tr>
					</thead>
					<tbody id= "pocTableTbody" class="tbody">
						<tr style='height: 75px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>