<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="flg" value="${flg}" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcompDelList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcompDelDetail.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/org/orgDetail.js"></script> --%>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<title>고객사 삭제데이터 상세정보</title>

</head>
<body>
<input type="hidden" id="ctx" value="${ctx}" />
<input type="hidden" id="nowCust_id" value="${custcompDetail.cust_id}" />
<input type="hidden" id="nowCust_nm" value="${custcompDetail.cust_nm}" />
<input type="hidden" id="flg" value="${flg}">

	<div id="title">
		<!-- 신규추가를 눌렀을 경우 -->
			<div class="caption">
				<label id="listLabel" class="ui header">
						■ 고객 > 
						<a href="/custcomp" style="font-size: 14pt; text-decoration: none; color: black;">고객사관리</a> >
						<a href="/custcompDelList" style="font-size: 14pt; text-decoration: none; color: black;"> 삭제된 데이터</a> 
						> 삭제된 데이터 상세정보
				</label> 		
			</div>
	</div>
	<div id="custcomp_tab_detail">
		<form id="custCompForm" method="post">
			<div class="detailBtn" style="text-align: right; margin-bottom: 13px;">   
				<input type="button" id="rollbackbtn" class="tiny ui blue button"  onclick="custcompDelModify();" value="복원" />
				<input type="button" id="deletebtn"   class="tiny ui blue button"  onclick="custcompDelDelBtn();" value="삭제" />
				<input type="button" id="cancelbtn"   class="tiny ui button" 	   onclick="custcompCancelBtn(${flg});" value="취소" />
			</div>

			<div id="custcompdiv">
				<table id="custcomptable" class="ui celled table">
					<tbody id="custcomptbody" class="detailtbody">
						<tr>
							<th id="th" style="color: red">*고객사명</th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="cust_id" name="cust_id" value="${custcompDetail.cust_id}" /> 
									<input type="hidden" id="hcust_nm" value="${custcompDetail.cust_nm}" /> 
									<input type="text"   id="cust_nm" name="cust_nm" value="${custcompDetail.cust_nm}" style="ms-ime-mode: disabled;" readonly="readonly" />
								</div>
							</td>
							
							<th style="color: red">*고객사구분</th>
							<td>
								<input type="hidden" id="hcust_div_cd" name="hcust_div_cd" />
								<select id="cust_div_cd" name="cust_div_cd" style="background: rgb(220, 220, 220);" disabled="disabled">
									<option value="0" style="text-align: center;">==구분==</option>
									<c:forEach var="CDC" items="${CDCCodeList}">
										<option value="<c:out value="${CDC.cust_div_cd}" />"
											<c:if test="${custcompDetail.cust_div_cd == CDC.cust_div_cd }">selected="selected"</c:if>>
											${CDC.cust_div_nm}
										</option>
									</c:forEach>
								</select>
							</td>
						</tr>
						<tr>
							<th>사업자번호</th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="hcomp_num" value="${custcompDetail.comp_num}" /> 
									<input type="text" name="comp_num" id="comp_num" class="int" value="${custcompDetail.comp_num}" maxlength="10" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode: disabled;' readonly="readonly" />
								</div>
								</td>
							<th>법인번호</th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="hcorp_num"value="${custcompDetail.corp_num}" /> 
									<input type="text"name="corp_num" id="corp_num" class="int"value="${custcompDetail.corp_num}" maxlength="13"onkeydown='return onlyNumber(event);'onkeyup='removeChar(event);' style='ime-mode: disabled;'readonly="readonly" />
								</div>
							</td>
						</tr>
						<tr>
							<th>대표전화번호</th>
							<td>
								<input type="hidden" id="hrep_ph1" value="${custcompDetail.rep_ph1}" />
								<input type="hidden" id="hrep_ph2" value="${custcompDetail.rep_ph2}" />
								<input type="hidden" id="hrep_ph3" value="${custcompDetail.rep_ph3}" />
								<input type="text" name="rep_ph1" id="rep_ph1" class="int_tel" value="${custcompDetail.rep_ph1}" maxlength="3" onkeydown='return onlyNumber(event);'onkeyup='removeChar(event);' style='ime-mode: disabled;'readonly="readonly" /> - 
								<input type="text" name="rep_ph2" id="rep_ph2" class="int_tel" value="${custcompDetail.rep_ph2}" maxlength="4" onkeydown='return onlyNumber(event);'onkeyup='removeChar(event);' style='ime-mode: disabled;'readonly="readonly" /> - 
								<input type="text" name="rep_ph3" id="rep_ph3" class="int_tel" value="${custcompDetail.rep_ph2}" maxlength="4" onkeydown='return onlyNumber(event);'onkeyup='removeChar(event);' style='ime-mode: disabled;'readonly="readonly" />
							</td>
							<th>홈페이지</th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="hhomepage_url" value="${custcompDetail.homepage_url}" /> 
										<a id="aHpUrl"target="_blank" title="클릭하면 해당 URL로 이동합니다.">
											<input type="text" name="homepage_url" id="homepage_url" class="int"value="${custcompDetail.homepage_url}" maxlength="30"readonly="readonly" style="cursor: pointer;" />
										</a>
								</div>
							</td>
						</tr>
						<tr>
							<th>주소지</th>
							<td colspan="8">
									<input type="hidden" id="hcust_zip_cd"   value="${custcompDetail.cust_zip_cd}" />
									<input type="hidden" id="hcust_addr"     value="${custcompDetail.cust_addr}" />
									<input type="hidden" id="hcust_dtl_addr" value="${custcompDetail.cust_dtl_addr}" />

									<input type="hidden" name="zip_cd_sri_num" id="zip_cd_sri_num" value="${custcompDetail.zip_cd_sri_num}" />
									<input type="text" name="cust_zip_cd" id="cust_zip_cd" class="int_common" value="${custcompDetail.cust_zip_cd}"maxlength="5" readonly="readonly" />
<!-- 									<input type="button" name="zip_cd_search" value="검색" class="tiny tiny ui button" id="addr" disabled="disabled" style="margin-left: 5px;" onclick="orgTreeAddr_pop();"/> -->
										&nbsp;
									<input type="text" name="cust_addr" id="cust_addr"class="int_ad" value="${custcompDetail.cust_addr}"readonly="readonly" />
									<input type="text" name="cust_dtl_addr" id="cust_dtl_addr"class="int_ad" value="${custcompDetail.cust_dtl_addr}"readonly="readonly" />
							</td>
						</tr>
						<tr>
							<th>매출규모</th>
							<td>
								<input type="hidden" id="hsales_scale_cd" />
								<select id="sales_scale_cd" name="sales_scale_cd" style="background: rgb(220, 220, 220);" disabled="disabled">
									<option value="0" style="text-align: center;">==매출규모==</option>
									<c:forEach var="SSC" items="${SSCCodeList}">
										<option value="<c:out value="${SSC.sales_scale_cd}" />"
											<c:if test="${custcompDetail.sales_scale_cd == SSC.sales_scale_cd }">selected="selected"</c:if>>
											${SSC.sales_scale}</option>
									</c:forEach>
								</select>
							</td>
							<th>직원수</th>
							<td>
								<div class="ui input focus">
									<input type="hidden" id="hemp_qty" /> 
									<input type="text" name="emp_qty" id="emp_qty" class="int"value="${custcompDetail.emp_qty}" maxlength="6"onkeydown='return onlyNumber(event);'onkeyup='removeChar(event);' style='ime-mode: disabled;'readonly="readonly" />
								</div>
							</td>
						</tr>
						<tr>
							<th>산업군</th>
							<td colspan="8">
								<input type="hidden" id="hindst_cd" />
								<select id="indst_cd" name="indst_cd"style="background: rgb(220, 220, 220);" disabled="disabled">
									<option value="0" style="text-align: center;">==산업군==</option>
									<c:forEach var="IDC" items="${IDCCodeList}">
										<option value="<c:out value="${IDC.indst_cd}" />"
											<c:if test="${custcompDetail.indst_cd == IDC.indst_cd }">selected="selected"</c:if>>
											${IDC.indst}</option>
									</c:forEach>
								</select>
							</td>
					</tbody>
				</table>
			</div>

		</form>
	</div>
</body>
</html>