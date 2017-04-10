<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomptab_js.js"></script>

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_css.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" /> --%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>기존고객 상세정보</title>
<script type="text/javascript">
$(document).ready(function(){
	var flg = ${flg};
	if(flg == 1)//상세정보를 눌렀을 경우
	{
		$('#baseBtnDiv').css('display', 'block');
		$('#mdfBtnDiv').css('display', 'none');
	} else if(flg == 0)//신규추가를 눌렀을 경우
		{
		
		
		$("#baseBtnDiv").css("display", "none");
		$("#addBtnDiv").css("display", "block");
		$("#mdfBtnDiv").css("display", "none");
		custCompAddBtn();
	}
});
</script>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="nowCust_id" value="${custcompDetail.cust_id}"/>
	<input type="hidden" id="nowCust_nm"/>
	
	<div id="custcomp_tab_detail">
				
			<form id="custCompForm" method="post">
			
				<div id="baseBtnDiv" class="bt_position_authuser">
					<input type="button" id="backBtn" value="뒤로" class="custcomp_btn" onclick="custCompBackBtn();"/>
<!-- 					<input type="button" id="addBtn" value="추가" class="custcomp_btn" onclick="custCompAddBtn();"/> -->
					<input type="button" id="mdfBtn" 	   value="편집" class="custcomp_btn" onclick="custCompMdfyBtn();"/>
					<input type="button" id="addCancelBtn" value="취소" class="custcomp_btn" onclick="custCompCancelBtn();"/>
				</div>
				<div id="addBtnDiv" style="display: none;" class="bt_position_authuser">
					<input type="button" id="addSaveBtn"   value="저장" class="custcomp_btn" onclick="addCustComp('${ctx}');"/>
					<input type="button" id="addCancelBtn" value="취소" class="custcomp_btn" onclick="custCompCancelBtn();"/>
				</div>
				<div id="mdfBtnDiv" style="display: none;" class="bt_position_authuser">
					<input type="button" id="mdfSaveBtn"   value="저장" class="custcomp_btn" onclick="mdfyCustComp('${ctx}');" />
					<input type="button" id="mdfCancelBtn" value="취소" class="custcomp_btn" onclick="custCompCancelBtn();"/>
				</div>
				
				<div id="custcompdiv">
					<table id="custcomptable">
						<tbody id="custcomptbody" class="custcomptbody">
							<tr >
								<th >고객사명</th>
								<td>
									<input type="hidden" id="cust_id" name="cust_id" value="${custcompDetail.cust_id}" />
									<input type="hidden" id="hcust_nm" value="${custcompDetail.cust_nm}" />
									<input type="text" name="cust_nm" id="cust_nm" class="int" value="${custcompDetail.cust_nm}"  style="ms-ime-mode: disabled;" readonly="readonly" />
								</td>
								<th >고객사구분</th>
								<td>
									<input type="hidden" id="hcust_div_cd" name="hcust_div_cd" /> 
									<select id="cust_div_cd" name="cust_div_cd" disabled="disabled">
											<option value="0" style="text-align: center;">==구분==</option>
											<c:forEach var="CDC" items="${CDCCodeList}">
												<option value="<c:out value="${CDC.cust_div_cd}" />"
													 <c:if test="${custcompDetail.cust_div_cd == CDC.cust_div_cd }">selected="selected"</c:if>>
													 ${CDC.cust_div_nm}
												</option>
											</c:forEach>
										</select>
										
<!-- 									<select id="cust_div_cd" name="cust_div_cd" disabled="disabled"> -->
<!-- 										<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 										<option <c:if test="${custcompDetail.cust_div_cd == '0001' }">selected="selected"</c:if>>가망</option> --%>
<%-- 										<option <c:if test="${custcompDetail.cust_div_cd == '0002' }">selected="selected"</c:if>>기존</option> --%>
<!-- 									</select> -->
<%-- 									<input type="text" name="cust_div_cd" id="cust_div_cd" class="int" value="${custcompDetail.cust_div_cd}" style="ms-ime-mode: disabled;" readonly="readonly"/> --%>
								</td>
								
							</tr>	
							<tr>	
								<th>사업자번호</th>
								<td>
									<input type="hidden" id="hcomp_num" value="${custcompDetail.comp_num}"/>
									<input type="text" name="comp_num" id="comp_num" class="int" value="${custcompDetail.comp_num}" maxlength="10" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/>
								</td>
								<th>법인번호</th>
								<td>
									<input type="hidden" id="hcorp_num" value="${custcompDetail.corp_num}"/>
									<input type="text" name="corp_num" id="corp_num" class="int" value="${custcompDetail.corp_num}"maxlength="13" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/>
								</td>
							</tr>	
							<tr>
								<th>대표전화번호</th>
								<td>
									<input type="hidden" id="hrep_ph1" value="${custcompDetail.rep_ph1}"/>
									<input type="hidden" id="hrep_ph2" value="${custcompDetail.rep_ph2}"/>
									<input type="hidden" id="hrep_ph3" value="${custcompDetail.rep_ph3}"/>
									<input type="text" name="rep_ph1" id="rep_ph1" class="int_tel" value="${custcompDetail.rep_ph1}" maxlength="3" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/> - 
									<input type="text" name="rep_ph2" id="rep_ph2" class="int_tel" value="${custcompDetail.rep_ph2}" maxlength="4" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/> - 
									<input type="text" name="rep_ph3" id="rep_ph3" class="int_tel" value="${custcompDetail.rep_ph2}" maxlength="4" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/>
								</td>	
								<th>홈페이지</th>
								<td>
									<input type="hidden" id="hhomepage_url" value="${custcompDetail.homepage_url}"/>
									<a id="aHpUrl" target="_blank" title="클릭하면 해당 URL로 이동합니다."><input type="text" name="homepage_url" id="homepage_url" class="int" value="${custcompDetail.homepage_url}" maxlength="30"readonly="readonly" style="cursor: pointer; "/></a>
								</td>
							</tr>
							<tr>
								<th>주소지</th>
								<td colspan="8">
									<input type="hidden" id="hcust_zip_cd" value="${custcompDetail.cust_zip_cd}" />
									<input type="hidden" id="hcust_zip_addr" value="${custcompDetail.cust_zip_addr}" />
									<input type="hidden" id="hcust_addr" value="${custcompDetail.cust_addr}" />
									
									<input type="hidden" name="zip_cd_sri_num" id="zip_cd_sri_num"  value="${custcompDetail.zip_cd_sri_num}"/>
									<input type="text" name="cust_addr" id="cust_zip_cd" class="int_common" value="${custcompDetail.cust_zip_cd}" maxlength="5" readonly="readonly"/>
									<input type="button" name="zip_cd_search" value="우편번호" class="custcomp_post_btn" id="addr" disabled="disabled"/>
									&nbsp;
									<input type="text" name="cust_zip_addr" id="cust_addr" class="int_ad" value="${custcompDetail.cust_addr}"  readonly="readonly"/>
									<input type="text" name="cust_dtl_addr" id="cust_dtl_addr" class="int_ad" value="${custcompDetail.cust_dtl_addr}"  readonly="readonly"/>
								</td>
							</tr>
							<tr>	
								<th>매출규모</th>
								<td>
									<input type="hidden" id="hsales_scale_cd"/>
									<select id="sales_scale_cd" name="sales_scale_cd" disabled="disabled">
										<option value="0" style="text-align: center;">==매출규모==</option>
										<c:forEach var="SSC" items="${SSCCodeList}">
											<option value="<c:out value="${SSC.sales_scale_cd}" />"
											<c:if test="${custcompDetail.sales_scale_cd == SSC.sales_scale_cd }">selected="selected"</c:if>>
											${SSC.sales_scale}
											</option>
										</c:forEach>
									</select>
								</td>
								<th>직원수</th>
								<td>
									<input type="hidden" id="hemp_qty" />
									<input type="text" name="emp_qty" id="emp_qty" class="int" value="${custcompDetail.emp_qty}"  maxlength="6" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;' readonly="readonly"/>
								</td>
							</tr>	
							<tr>
								<th>기업업종</th>
								<td>
									<input type="hidden" id="hindst_cd"/>
										<input type="text" name="indst_cd1" id="indst_cd1" class="int" value="${custcompDetail.indst}" maxlength="50"readonly="readonly" />
								</td>
								<th>기업업태</th>
								<td>
									<input type="hidden" id="hbiz_status"/>
									<input type="text" name="biz_status" id="biz_status" class="int" value="${custcompDetail.biz_status}"  maxlength="50" readonly="readonly" />
								</td>
							</tr>
							<tr>
								<th>산업군</th>
									<td>
										<input type="hidden" id="hindst_cd" />
										<select id="indst_cd" name="indst_cd" disabled="disabled">
											<option value="0" style="text-align: center;">==산업군==</option>
											<c:forEach var="IDC" items="${IDCCodeList}">
												<option value="<c:out value="${IDC.indst_cd}" />"
													 <c:if test="${custcompDetail.indst_cd == IDC.indst_cd }">selected="selected"</c:if>>
													 ${IDC.indst}
												</option>
											</c:forEach>
										</select>
									</td>
<!-- 								<th>주요제품</th> -->
<!-- 								<td> -->
<!-- 									<input type="hidden" id="main_prod"/> -->
<!-- 									<input type="text" name="main_prod" id="main_prod" class="int" maxlength="50"readonly="readonly" /> -->
<!-- 								</td> -->
								<th>영업담당자</th>
								<td>
									<input type="hidden" name="hiuser_id_nm" id="hiuser_id_nm"/>
									<input type="hidden" name="iuser_id_nm" id="iuser_id_nm"/>
									<input type="hidden" name="hiuser_nm" id="hiuser_nm"/>
									<input type="text" name="iuser_nm" id="iuser_nm" class="int_ad" value="${custcompDetail.iuser_nm}" readonly="readonly" />
									<input type="button" name="iuser_search" id="iuser_search" value="직원" class="custcomp_btn" disabled="disabled"/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			
			</form>
	</div>
	
	
</body>
</html>