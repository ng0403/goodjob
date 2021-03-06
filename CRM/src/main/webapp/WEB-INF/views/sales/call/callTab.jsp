<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/call/callTab.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/call_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/callList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/callTab.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/employee_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/addr/zipcode_js.js"></script>
<title>Insert title here</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCall_id"/>
	<input type="hidden" id="hCust_div_nm"/>
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label>
		
		<form id="callTabForm">
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">

        <!-- 개인고객/ 키맨 추가 버튼  -->
		<div id="callCustKeyBtnDiv" class="call_tab_bt_div"> 
		    <input type="button" id="custpsonBtn" value="개인고객추가" class="call_tab_bt" onclick="callCustBtn();"/>
			<input type="button" id="keymanBtn" value="키맨추가" class="call_tab_bt" onclick="callKeyAddBtn();"/>
		</div>
		
		<!-- 개인고객 추가 편집 버튼  -->
		<div id="callCustBtnDiv" class="call_tab_bt_div" style="display: none;"> 
		    <input type="button" id="custpsonBtn" value="추가" class="call_tab_bt" onclick="callCustBtn();"/>
			<input type="button" id="custpsonMdiBtn" value="편집" class="call_tab_bt" disabled="disabled"/>
		</div>
		
		<!-- 키맨 추가 편집 버튼  -->
		<div id="callKeyBtnDiv" class="call_tab_bt_div" style="display: none;"> 
			<input type="button" id="keymanBtn" value="추가" class="call_tab_bt" onclick="callKeyAddBtn();"/>
			<input type="button" id="keymanMdiBtn" value="편집" class="call_tab_bt" disabled="disabled"/>
		</div>
		
		<!-- 개인고객 추가 저장/취소 버튼  -->
		<div id="custpsonAddBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="custpsonAddSaveBtn" value="저장"  onclick="callAddCust('${ctx}')" class="call_tab_bt"/>
			<input type="button" id="custpsonAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="call_tab_bt"/>
	    </div>
	    
	    <!-- 키맨 추가 저장/취소 버튼  -->
	    <div id="keymanAddBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="keymanAddSaveBtn" value="저장" onclick="callKeymanAdd()" class="call_tab_bt"/>
			<input type="button" id="keymanAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="call_tab_bt"/>
	    </div>
	    
	    <!-- 개인고객 편집 저장/취소 버튼  -->
		<div id="callCustMdfBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="callCustMdfSaveBtn" value="저장" onclick="callCustEdit()" class="call_tab_bt"/>
			<input type="button" id="callCustMdfCancelBtn" value="취소" onclick="callCancelBtn()" class="call_tab_bt"/>
		</div>
		
		<!-- 키맨 편집 저장/취소 버튼  -->
		<div id="callKeyMdfBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="callKeyMdfSaveBtn" value="저장" onclick="callKeymanMdfy()" class="call_tab_bt"/>
			<input type="button" id="callKeyMdfCancelBtn" value="취소" onclick="callCancelBtn()" class="call_tab_bt"/>
		</div>
				
		<div class="call_tab_div">
			<table id="contactable">
				<tbody id="contactbody">
					<tr>
						<th>이름</th>
						<td>
						   <input type="hidden" id="hcall_nm"/>
						   <input type="text" name="cust_nm" id="call_nm" class="int" readonly="readonly"/></td>
						<!-- <th>구분</th>
						<td>
						   <input type="text" name="cust_div_nm" id="cust_div_nm" class="int"/>
						</td> -->
						<th>직급</th>
						<td>
						   <input type="hidden" id="hpos_nm"/>
						   <input type="text" name="pos_nm" id="pos_nm" class="int" readonly="readonly"/></td>
						<th>회사명</th>
						<td>
						    <input type="hidden" id="hcomp_nm"/>
						    <input type="hidden" name="comp_id" id="comp_id"/>
						    <input type="text" name="comp_nm" id="comp_nm" class="int" readonly="readonly"/> 
						    <input type="button" name="compSearch" value="회사" class="call_tab_bt" id="comp_list_bt" disabled="disabled"/>
						</td>
						<th>이메일</th>
						<td>
						    <input type="hidden" id="hemail1"/>
							<input type="hidden" id="hemail2"/>
						    <input type="text" name="email1" id="email1" class="int_email" readonly="readonly"/> @ 
						    <input type="text" name="email2" id="email2" class="int_email" readonly="readonly"/>
						</td>
						</tr>
					<tr>
						<th>이동전화번호</th>
						<td>
						    <input type="hidden" id="hcell_ph1"/>
							<input type="hidden" id="hcell_ph2"/>
							<input type="hidden" id="hcell_ph3"/>
						    <input type="text" name="cell_ph1" maxlength="3" id="cell_phone1" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="cell_ph2" maxlength="4" id="cell_phone2" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="cell_ph3" maxlength="4" id="cell_phone3" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/>
						</td>
						<th>전화번호</th>
						<td>
						    <input type="hidden" id="hph1"/>
						    <input type="hidden" id="hph2"/>
							<input type="hidden" id="hph3"/>
						    <input type="text" name="rep_ph1" maxlength="3" id="ph_phone1" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="rep_ph2" maxlength="4" id="ph_phone2" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="rep_ph3" maxlength="4" id="ph_phone3" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/>
						</td>
						<th>동의여부</th>
						<td>
						    <input type="hidden" id="hcust_info_yn"/>
							<input type="hidden" id="hmkt_app_yn"/>
						    <input type="checkbox" name="cust_info_yn" id="cust_info_yn" disabled="disabled"/>개인정보수집 
							<input type="checkbox" name="mkt_app_yn" id="mkt_app_yn" disabled="disabled"/>마케팅활용
						</td>
						<th>영업담당자</th>
						<td>
						    <input type="hidden" name="hiuser_id_nm" id="hiuser_id_nm"/>
						    <input type="hidden" name="iuser_id_nm" id="iuser_id_nm"/>
						  
						    <input type="hidden" name="hiuser_nm" id="hiuser_nm"/>
						    <input type="text" name="iuser_nm" id="iuser_nm" class="int" readonly="readonly"> 
						    <input type="button" name="iuser_search" value="직원" class="call_tab_bt" id="iuser_search" disabled="disabled">
						</td>
					</tr>
					<tr>
						<th>주소지</th>
						<td colspan="8">
						    <input type="hidden" id="hcust_zip_cd"/>
							<input type="hidden" id="hcust_zip_addr"/>
							<input type="hidden" id="hcust_addr"/>
							
							<input type="hidden" name="zip_cd_sri_num" id="zip_cd_sri_num" class="int_detail"/>
							<input type="text" name="cust_zip_cd1" id="cust_zip_cd1" class="int_detail" readonly="readonly"/> 
							<input type="text" name="cust_zip_cd2" id="cust_zip_cd2" class="int_detail" readonly="readonly"/>
							<input type="button" name="zip_cd_search" value="우편번호" class="call_tab_bt" id="addr" disabled="disabled"/><!-- disabled="disabled" -->
						    &nbsp;
							<input type="text" name="cust_zip_addr" id="cust_zip_addr" class="int_detail_ad" readonly="readonly"/>
							<input type="text" name="cust_addr" id="cust_addr" class="int_detail_ad" readonly="readonly"/>
						</td>
					</tr>
					<tr>
						<th>상태</th>
							<td colspan="5">
								<input type="hidden" id="hstat_cd"/>
								<select name="stat_cd" id="stat_cd" disabled="disabled">
									<option value="0" id="cd_nm">=선택=</option>
									<c:forEach var="StatList" items="${StatList}">
										<option value="${StatList.code}" id="cd_nm">${StatList.cd_nm}</option>
									</c:forEach>
								</select>
							</td>
					</tr>
				</tbody>
			</table>
			</div>
		  </div>
		</form>
	</div>
</body>
</html>