<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> 
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/call/callTab.css" type="text/css" />


<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contact_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contactList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contactTab.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/call/employee_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contactInsert.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomp_js.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/addr/zipcode_js.js"></script>

<title>Insert title here</title>
</head>
<body>
<div id="title">
		<div class="caption">■ 고객 > <a href="/contact">연락처</a> > 연락처 상세</div>
	</div>

	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCall_id"/>
	<input type="hidden" id="hCust_div_nm"/>
	<div id="css_tabs">
 		
		<form id="contactForm" method="post" role="form" >
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
 
        <!-- 개인고객 -->
		<div id="callCustKeyBtnDiv" class="call_tab_bt_div"> 
		    <input type="button" id="custpsonBtn" value="편집" class="button search_btn" onclick="callCustBtn();"/>
		    <input type="button" id="custpsonAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="button search_btn"/>
		    
 		</div>
		
		<!-- 개인고객 추가 편집 버튼  -->
		<div id="callCustBtnDiv" class="call_tab_bt_div" style="display: none;"> 
		    <input type="button" id="custpsonBtn" value="편집" class="button search_btn" onclick="callCustBtn();"/>
			<input type="button" id="custpsonMdiBtn" value="편집" class="button search_btn" disabled="disabled"/>
		</div>
	 
		<!-- 개인고객 추가 저장/취소 버튼  -->
		<div id="custpsonAddBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="custpsonAddSaveBtn" value="저장"  onclick="updateCont()" class="button search_btn"/>
			<input type="button" id="custpsonAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="button search_btn"/>
	    </div>
	 
	    
	    <!-- 개인고객 편집 저장/취소 버튼  -->
		<div id="callCustMdfBtnDiv" style="display: none;" class="call_tab_bt_div">
			<input type="button" id="callCustMdfSaveBtn" value="저장" onclick="callCustEdit()" class="button search_btn"/>
			<input type="button" id="callCustMdfCancelBtn" value="취소" onclick="callCancelBtn()" class="button search_btn"/>
		</div>
	 
				
		<div class="call_tab_div">
			<table id="contactable">
				<tbody id="contactbody">
					<tr>
						<th><span style="color:red">*이름</span></th>
						<td>
						<input type="hidden" name="cont_id" id="cont_id" value="${contactDetail.cont_id}" />
						<input type="hidden" id="hcall_nm"/>
						<input type="text" name="cont_nm" id="cont_nm" class="int" value="${contactDetail.cont_nm}" readonly="readonly"/></td>
						<!-- <th>구분</th>
						<td>
						   <input type="text" name="cust_div_nm" id="cust_div_nm" class="int"/>
						</td> -->
						 
						<th><span style="color:red">*회사명</span></th>
						<td>
						    <input type="hidden" id="hcomp_nm"/>
						    <input type="hidden" name="comp_id" id="comp_id"/>
						    <input type="text" name="company_nm" id="company_nm" class="int" value="${contactDetail.company_nm }" readonly="readonly"/> 
						    <input type="button" name="compSearch" value="회사" class="button search_btn" id="comp_list_bt" disabled="disabled" />
						</td>
						
						</tr>
					<tr>
					<th><span style="color:red">*전화번호</span></th>
						<td>
						    <input type="hidden" id="hph1"/>
						    <input type="hidden" id="hph2"/>
							<input type="hidden" id="hph3"/>
						    <input type="text" name="ph1" maxlength="3" id="ph1" value="${contactDetail.ph1 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="ph2" maxlength="4" id="ph2" value="${contactDetail.ph2 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="ph3" maxlength="4" id="ph3" value="${contactDetail.ph3 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/>
						</td>
						<th>이동전화번호</th>
						<td>
						    <input type="hidden" id="hcell_ph1"/>
							<input type="hidden" id="hcell_ph2"/>
							<input type="hidden" id="hcell_ph3"/>
						    <input type="text" name="cell_ph1" maxlength="3" id="cell_ph1" value="${contactDetail.cell_ph1 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="cell_ph2" maxlength="4" id="cell_ph2" value="${contactDetail.cell_ph2 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/> - 
						    <input type="text" name="cell_ph3" maxlength="4" id="cell_ph3" value="${contactDetail.cell_ph3 }" class="int_tel" style='ime-mode:disabled;' onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' readonly="readonly"/>
						</td>
						
				 
					</tr>
					<tr>
					<th>이메일</th>
						<td>
						    <input type="hidden" id="hemail1"/>
							<input type="hidden" id="hemail2"/>
						    <input type="text" name="email1" id="email1" class="int_email" value="${contactDetail.email1 }" readonly="readonly"/> @ 
						    <input type="text" name="email2" id="email2" class="int_email" value="${contactDetail.email2 }" readonly="readonly"/>
						</td>
					</tr>
					 
					</tr> 
				</tbody>
			</table>
			</div>
		  </div>
		</form>
 </body>
</html>