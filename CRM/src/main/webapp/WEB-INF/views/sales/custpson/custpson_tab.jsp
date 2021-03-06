<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }"/>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custpson/custpson_tab_css.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/custpson_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/custpson_tab.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/employee_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/zipcode_js.js"></script>

<style type="text/css">
	.ui-datepicker{ font-size: 13px; width: 300px;}
	.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
	.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>개인고객</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCust_id" />
	<input type="hidden" id="nowCust_nm" />
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<input id="tab2" type="radio" name="tab" /> 
		<input id="tab3" type="radio" name="tab" />
		<input id="tab4" type="radio" name="tab" />
		<input id="tab5" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">상세정보</label> 
		<label for="tab2">영업기회</label> 
		<label for="tab3">영업활동</label> 
		<label for="tab4">견적</label> 
		<label for="tab5">계약</label>

		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
		
			<form id="inputForm" method="post">
				<div id="baseBtnDiv" class="custpson_bt_div" style="float: right;">
					<input type="button" id="cpAdd" value="추가" onclick="insertBtn();" class="custpson_btn"/>
					<input type="button" id="cpMdfy" value="편집" onclick="editBtn();" class="custpson_btn" disabled="disabled"/> 
				</div>
				<div id="addBtnDiv" style="display: none;" class="custpson_bt_div" style="float: right;">
					<input type="button" value="저장" onclick="psonInsert();" class="custpson_btn"/>
					<input type="button" value="취소" onclick="cancelBtn();" class="custpson_btn"/>
				</div>
				<div id="mdfBtnDiv" style="display: none;" class="custpson_bt_div" style="float: right;">
					<input type="button" value="저장" onclick="psonEdit();" class="custpson_btn"/>
					<input type="button" value="취소" onclick="cancelBtn();" class="custpson_btn"/>
				</div>

				<div id="custpsondiv">
					<table id="custpsontable">
						<tbody id="custpsontbody" class="custpsontbody">
							<tr>
								<th>고객명</th>
								<td>
									<input type="hidden" id="cust_id" name="cust_id"/>
									<input type="hidden" id="hcust_nm"/>
									<input type="text" name="cust_nm" id="cust_nm" readonly="readonly" class="int" style="ms-ime-mode: disabled;"/>
								</td>
								<th>성별</th>
								<td>
									<input type="hidden" id="hgen"/>
									<input type="radio" name="gen" id="man" value="M" disabled="disabled"/>남 
									<input type="radio" name="gen" id="female" value="F" disabled="disabled"/>여
								</td>
								<th>생년월일</th>
								<td>
									<input type="hidden" id="hbirth"/>
									<input type="text" name="birth" id="birth" readonly="readonly" class="int"/>
								</td>
								<th></th>
								<td>
								</td>
							</tr>
							<tr>
								<th>이메일</th>
								<td>
									<input type="hidden" id="hemail1"/>
									<input type="hidden" id="hemail2"/>
									<input type="text" name="email1" id="email1" readonly="readonly" class="int_email"/>
									@ <input type="text" name="email2" id="email2" readonly="readonly" class="int_email"/>
								</td>
								<th>이동전화번호</th>
								<td>
									<input type="hidden" id="hcell_ph1"/>
									<input type="hidden" id="hcell_ph2"/>
									<input type="hidden" id="hcell_ph3"/>
									<input type="text" name="cell_ph1" id="cell_ph1" readonly="readonly" class="int_tel"/> - 
									<input type="text" name="cell_ph2" id="cell_ph2" readonly="readonly" class="int_tel"/> - 
									<input type="text" name="cell_ph3" id="cell_ph3" readonly="readonly" class="int_tel"/> 
								</td>
								<th>전화번호</th>
								<td>
									<input type="hidden" id="hph1"/>
									<input type="hidden" id="hph2"/>
									<input type="hidden" id="hph3"/>
									<input type="text" name="ph1" id="ph1" readonly="readonly" class="int_tel"/> - 
									<input type="text" name="ph2" id="ph2" readonly="readonly" class="int_tel"/> - 
									<input type="text" name="ph3" id="ph3" readonly="readonly" class="int_tel"/> 
								</td>
								<th>동의여부</th>
								<td>
									<input type="hidden" id="hcust_info_yn"/>
									<input type="hidden" id="hmkt_app_yn"/>
									<input type="checkbox" name="cust_info_yn" id="cust_info_yn"/>개인정보수집
									<input type="checkbox" name="mkt_app_yn" id="mkt_app_yn"/>마케팅활용
								</td>
							</tr>
							<tr>
								<th>주소지</th>
								<td colspan="7" style="text-align: left">
									<input type="hidden" id="hcust_zip_num" /> 
									<input type="hidden" name="cust_zip_num" id="cust_zip_num" /> 
									<input type="hidden" id="hcust_zip_cd1"/>
									<input type="hidden" id="hcust_zip_cd2"/>
									<input type="hidden" id="haddr_dtl_cont"/>
									<input type="text" name="cust_zip_cd1" id="cust_zip_cd1" readonly="readonly" class="int_detail"/>
									<input type="text" name="cust_zip_cd2" id="cust_zip_cd2" readonly="readonly" class="int_detail"/> 
									<input type="button" value="우편번호" name="zipcode" id="zipcode" disabled="disabled" class="custpson_btn"/>
									<input type="text" name="addr_dtl_cont" id="addr_dtl_cont" readonly="readonly" class="int_detail_ad"/>
									<input type="hidden" id="hcust_addr"/>
									<input type="text" name="cust_addr" id="cust_addr" readonly="readonly" class="int_detail_ad"/>
								</td>
							</tr>
							<tr>
								<th>영업담당자</th>
								<td>
									<input type="hidden" id="hiuser_id_nm"/>
									<input type="hidden" name="iuser_id_nm" id="iuser_id_nm"/>
									<input type="hidden" id="hiuser_nm"/>
									<input type="text" name="iuser_nm" id="iuser_nm" readonly="readonly" class="int_ad"/>
									<input type="button" id="iuserSearch" class="custpson_btn" value="직원" disabled="disabled"/>
								</td>
								<th>상태</th>
								<td colspan="5">
									<input type="hidden" id="hstat_cd"/>
									<select name="stat_cd" id="stat_cd">
										<option value="0000" id="cd_nm">=선택=</option>
										<c:forEach var="s" items="${stat}">
											<option value="${s.code}" id="cd_nm">${s.cd_nm}</option>
										</c:forEach>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</div>
		
		<!-- 영업기회 탭 -->
		<div id="tabDiv2" class="tab2_content">
			<div class="bt_position_authuser">
				<input type="button" value="영업기회추가" id="oppt_pop_btn" class="custpson_btn"/>
				<input type="button" value="삭제" onclick="cpOpptDel('${ctx}');" class="custpson_btn"/> 
			</div>
			
			<div id="tableline2">
				<table id="tab" class="tabtable">
					<thead>
						<tr>
							<th style='width:3%;'><input type="checkbox" id="cpOpptListCheck"></th>
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
		
		<!-- 영업활동 탭 -->
		<div id="tabDiv3" class="tab3_content">
			<div class="bt_position_authuser">
				<input type="button" value="영업활동 추가" id="act_pop_btn" class="custpson_btn"/>
				<input type="button" value="삭제" onclick="cpActDel('${ctx}');" class="custpson_btn"/> 
			</div>
			
			<div id="tableline2">
				<table id="tab" class="tabtable">
					<thead>
					<tr>
						<th style='width:3%;' rowspan="2"><input type="checkbox" id="cpActListCheck"></th>
						<th style='width:8%;' rowspan="2">영업활동명</th>
						<th style='width:8%;' rowspan="2">활동구분</th>
						<th style='width:30%;' rowspan="2">영업기회명</th>
						<th style='width:8%;' rowspan="2">활동유형</th>
						<th style='width:8%; height:12px; padding:5px;'>시작일자</th>
						<th style='width:8%; height:12px; padding:5px;'>시작시간</th>
						<th style='width:5%;' rowspan="2">상태</th>
						<th style='width:6%;' rowspan="2">등록자</th>
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
		
		<!-- 견적 탭 -->
		<div id="tabDiv4" class="tab4_content">
		    <div class="bt_position_authuser">
				<input type="button" value="견적추가" id="est_pop_btn" class="custpson_btn" />
				<input type="button" value="삭제" onclick="cpEstDel('${ctx}');" class="custpson_btn"/> 
			</div>
			
			<div id="tableline2">
				<table id="tab" class="tabtable">
					<thead>
						<tr style="text-align: center;">
							<th style='width:3%;'><input type="checkbox" id="cpEstListCheck"></th>
							<th style='width:30%;'>견적명</th>
							<th style='width:12%;'>견적단계</th>
							<th style='width:8%;'>견적수량</th>
							<th style='width:12%;'>견적금액</th>
							<th style='width:10%;'>견적유효일자</th>
							<th style='width:10%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
	                </thead>
					<tbody id="estTableTbody">
	
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- 계약 탭 -->
		<div id="tabDiv5" class="tab5_content">
		    <div class="bt_position_authuser">
				<input type="button" value="계약추가" id="cont_pop_btn" class="custpson_btn"/>
				<input type="button" value="삭제" onclick="cpContDel('${ctx}');" class="custpson_btn"/> 
			</div>
			
			<div id="tableline2">
				<table id="tab" class="tabtable">
				   <thead>
						<tr style="text-align: center;">
							<th style='width:3%;'><input type="checkbox" id="cpContListCheck"></th>
							<th style='width:25%;'>계약명</th>
							<th style='width:15%;'>계약번호</th>
							<th style='width:10%;'>계약수량</th>
							<th style='width:10%;'>계약금액</th>
							<th style='width:15%;'>계약일자</th>
							<th style='width:7%;'>등록자</th>
							<th style='width:15%;'>등록일시</th>
						</tr>
					</thead>
	
					<tbody id="contTableTbody">
	
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>