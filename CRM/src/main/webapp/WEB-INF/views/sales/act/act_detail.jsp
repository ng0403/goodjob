<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="actDetail" value="${actDetail}" />
<c:set var="flg" value="${flg}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/tab_example.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	

<style type="text/css">
.ui-datepicker{ font-size: 13px; width: 300px;}
.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowSales_actvy_id"/>
	
	<div id="title">
	<!-- 신규추가를 눌렀을 경우 -->
		<c:if test="${flg == 0 }">
			<div class="caption">■ 영업 > 영업활동 > 영업활동 등록</div>
		</c:if>
		<c:if test="${flg == 1 }">
			<div class="caption">■ 영업 > 영업활동 > 영업활동 상세정보</div>
		</c:if>
	</div>
	
	<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
	<div id="tabDiv1" class="tab1_content">
		<form id="actTabForm" method="post">
			<c:if test="${flg == 0}">
				<div id="actAddBtnDiv" class="act_tab_bt_div">
					<input type="button" id="actAddSaveBtn" value="저장" onclick="actInsert('${ctx}');" class="act_bt"/>
					<input type="button" id="actAddCancelBtn" value="취소" class="act_bt" onclick="actAddCancelBt();"/>
				</div>
			</c:if>
			
			<c:if test="${flg == 1}">
				<div id="actBaseBtnDiv" class="act_tab_bt_div">
					<input type="button" id="actMdfBtn" value="편집" class="act_bt"/>
					<input type="button" id="actAddCancelBtn" value="취소" class="act_bt" onclick="actAddCancelBt();"/>
				</div>
				<div id="actMdfBtnDiv" style="display: none;" class="act_tab_bt_div">
					<input type="button" id="actMdfSaveBtn" value="저장" onclick="actModify('${ctx}');" class="act_bt"/>
					<input type="button" id="actMdfCancelBtn" value="취소" class="act_bt" onclick="actMdfyCancelBt();"/>
				</div>
			</c:if>

				<table id="act_tab_table">
					<tbody id="act_tab_tbody">
						<tr>
							<th>영업활동명</th>
							<td>
								<c:if test="${flg == 1}">
									<input type="hidden" id="sales_actvy_id" name="sales_actvy_id" value="${actDetail.sales_actvy_id}">
							    	<input type="text" name="sales_actvy_nm" id="sales_actvy_nm" value="${actDetail.sales_actvy_nm}" class="act_nm" style="ms-ime-mode: disabled;" readonly="readonly" />
								</c:if>
								<c:if test="${flg == 0}">
									<input type="hidden" id="hsales_actvy_nm">
							    	<input type="text" name="sales_actvy_nm" id="sales_actvy_nm" value="${actDetail.sales_actvy_nm}" class="act_nm" style="background-color: white;"/>
								</c:if>
							    
							</td>
							<th>활동구분</th>
							<td>
							    <input type="hidden" id="hsales_actvy_div_cd">
							    
								<c:if test="${actDetail.sales_actvy_div_cd eq '0001'}">
<%-- 									<input type="hidden" id="sales_actvy_div_cd" name="sales_actvy_div_cd" value="${actDeatil.sales_actvy_div_cd}"> --%>
									<input type="radio" id = "actdiv_1" name="sales_actvy_div_nm" checked="checked" value="0001" onclick="actDivCheck()" disabled="disabled"/>할일&nbsp; 
									<input type="radio" id = "actdiv_2" name="sales_actvy_div_nm" value="0002" onclick="actDivCheck()" disabled="disabled"/>영업기회
								</c:if>
								<c:if test="${actDetail.sales_actvy_div_cd eq '0002'}">
<%-- 									<input type="hidden" id="sales_actvy_div_cd" name="sales_actvy_div_cd" value="${actDeatil.sales_actvy_div_cd}"> --%>
									<input type="radio" id = "actdiv_1" name="sales_actvy_div_nm" value="0001" onclick="actDivCheck()" disabled="disabled"/>할일&nbsp; 
									<input type="radio" id = "actdiv_2" name="sales_actvy_div_nm" checked="checked" value="0002" onclick="actDivCheck()" disabled="disabled"/>영업기회
								</c:if>
								<c:if test="${flg eq '0'}">
							 	    <input type="radio" id = "actdiv_1" name="sales_actvy_div_cd" value="0001" onclick="actDivCheck()"/>할일&nbsp; 
									<input type="radio" id = "actdiv_2" name="sales_actvy_div_cd" value="0002" onclick="actDivCheck()"/>영업기회
								</c:if>
							</td>	
							<th>활동유형</th>
							<td>
								<c:if test="${flg eq '1'}">
<%-- 									<input type="hidden" id="sales_actvy_type_cd" name="sales_actvy_type_cd" value="${actTypeCd.sales_actvy_type_cd}"> --%>
									<select name="sales_actvy_type_nm" id="sales_actvy_type_nm" class="act_tab_select" disabled="disabled">
										<option value="0" style="text-align: center;">=활동유형=</option>
										<c:forEach var="actTypeCd" items="${actTypeCd}">
											<c:if test="${actDetail.sales_actvy_type_cd == actTypeCd.sales_actvy_type_cd}">
												<option selected="selected" value="${actTypeCd.sales_actvy_type_cd}">${actTypeCd.sales_actvy_type_nm}</option>
											</c:if>
											<c:if test="${actDetail.sales_actvy_type_cd != actTypeCd.sales_actvy_type_cd}">
												<option value="${actTypeCd.sales_actvy_type_cd}">${actTypeCd.sales_actvy_type_nm}</option>
											</c:if>
											
								        </c:forEach>
			     			    	</select>
			     			    	
								</c:if>
								<c:if test="${flg eq '0'}">
									<input type="hidden" id="hsales_actvy_type_nm">
									<select name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="act_tab_select">
										<option value="0" style="text-align: center;">=활동유형=</option>
										<c:forEach var="actTypeCd" items="${actTypeCd}">
									    	<option value="${actTypeCd.sales_actvy_type_cd}">${actTypeCd.sales_actvy_type_nm}</option>
								        </c:forEach>
			     			    	</select>
								</c:if>
			     			</td>
			     		</tr>
						<tr>
							<th>영업기회명</th>
							<td>
								<c:if test="${flg eq '1'}">
									<input type="hidden" id="hsales_oppt_id">
									<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 	<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="oppt_txt_nm" readonly="readonly"> 
							    	<input type="button" name="act_opp" value="영업기회" class="act_bt" id="act_opp_nm" disabled="disabled">
								</c:if>
								<c:if test="${flg eq '0'}">
									<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 	<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="oppt_txt_nm" readonly="readonly" style="background-color: white;"> 
							    	<input type="button" name="act_opp" value="영업기회" class="act_bt" id="act_opp_nm" >
								</c:if>
							    	
							</td>
							<th>고객사</th>
							<td>
								<c:if test="${flg eq '1'}">
									<input type="hidden" id="hcust_id">
								    <input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								    <input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="customer_txt" readonly="readonly"> 
								    <input type="button" name="customer" value="고객" class="act_cus_tab_bt" id="customer" disabled="disabled">
								</c:if>
								<c:if test="${flg eq '0'}">
									<input type="hidden" id="hcust_id">
								    <input type="hidden" id="cust_id" value="${actDetail.cust_id}">
								    <input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="customer_txt" readonly="readonly" style="background-color: white;"> 
								    <input type="button" name="customer" value="고객" class="act_cus_tab_bt" id="customer">
								</c:if>
							    
							</td>
							<th>상태</th>
							<td>
								<c:if test="${flg eq '1'}">
								    <input type="hidden" id="hsales_actvy_stat_cd">
<%-- 								    <input type="hidden" id="sales_actvy_stat_cd" name="sales_actvy_stat_cd" value="${actStatCd.sales_actvy_stat_cd}"> --%>
								    <select name="sales_actvy_stat_nm" id="sales_actvy_stat_nm" class="act_tab_select" disabled="disabled">
								    	<option value="0" style="text-align: center;">==상태==</option>						    
								      	<c:forEach var="actStatCd" items="${actStatCd}">
								      		<c:if test="${actDetail.sales_actvy_stat_cd == actStatCd.sales_actvy_stat_cd}">
								      			<option selected="selected" value="${actStatCd.sales_actvy_stat_cd}">${actStatCd.sales_actvy_stat_nm}</option>
								      		</c:if>
								      		<c:if test="${actDetail.sales_actvy_stat_cd != actStatCd.sales_actvy_stat_cd}">
								      			<option value="${actStatCd.sales_actvy_stat_cd}">${actStatCd.sales_actvy_stat_nm}</option>
								      		</c:if>
										</c:forEach>
			     				  	</select>
			     				  	
			     			  	</c:if>
			     			  	<c:if test="${flg eq '0'}">
			     			  		<input type="hidden" id="hsales_actvy_stat_cd">
								    <select name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="act_tab_select">
								    	<option value="0" style="text-align: center;">==상태==</option>						    
								      	<c:forEach var="actStatCd" items="${actStatCd}">
											<option value="${actStatCd.sales_actvy_stat_cd}">${actStatCd.sales_actvy_stat_nm}</option>
										</c:forEach>
			     				  	</select>
			     			  	</c:if>
			     			  	
							</td>
						</tr>
				
						<tr>
							<th>시간일자 / 시간</th>
							<td>
							
							<c:if test="${flg eq '1'}">
								<input type="hidden" id="hstrt_d">
								<input type="text" id="strt_d" name="strt_d" value="${actDetail.strt_d}" class="start_text" readonly="readonly">
								<input type="hidden" id="hstrt_t_h">
								
								<select name="strt_t" id="strt_t_h" class="start_hour" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
								
								<c:forEach var="htime" items="${htime}" step="1">
									<c:if test="${actDetail.strt_t_h == htime}">
										<option value="htime" selected="selected">${htime}</option>
									</c:if>
									<c:if test="${actDetail.strt_t_h != htime}">
										<option value="htime">${htime}</option>
									</c:if>
								</c:forEach>
								</select>
								시
								<input type="hidden" id="hstrt_t_m">
								<select name="strt_t" id="strt_t_m" class="start_minute" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
									
									<c:forEach var="mtime" items="${mtime}" step="1">
										<c:if test="${actDetail.strt_t_m == mtime}">
											<option value="mtime" selected="selected">${mtime}</option>
										</c:if>
										<c:if test="${actDetail.strt_t_m != mtime}">
											<option value="mtime">${mtime}</option>
										</c:if>
									</c:forEach>
								</select>
								분
							</c:if>
							<c:if test="${flg eq '0'}">
								<input type="hidden" id="hstrt_d">
								<input type="text" id="strt_d" name="strt_d" value="${actDetail.strt_d}" class="start_text" readonly="readonly" style="background-color: white;">
								<input type="hidden" id="hstrt_t_h">
								<select name="strt_t" id="strt_t_h" class="start_hour">
									<option value="0" style="text-align: center;">==선택==</option>
										<option value="01">1</option>
										<option value="02">2</option>
										<option value="03">3</option>
										<option value="04">4</option>
										<option value="05">5</option>
										<option value="06">6</option>
										<option value="07">7</option>
										<option value="08">8</option>
										<option value="09">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>									
								</select>
								시
								<input type="hidden" id="hstrt_t_m">
								<select name="strt_t" id="strt_t_m" class="start_minute">
									<option value="0" style="text-align: center;">==선택==</option>
										<option value="00">00</option>
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
										<option value="40">40</option>
										<option value="50">50</option>						
								</select>
								분
							</c:if>
								
							</td>
							<th rowspan="2">메모</th>
							<td rowspan="2" colspan="3">
							    <input type="hidden" id="hmemo">
							    <c:if test="${flg eq '1'}">
							    	<textarea rows="5" cols="59" name="memo" id="memo" class="act_memo" readonly="readonly"></textarea>
							    </c:if>
							    <c:if test="${flg eq '0'}">
							    	<textarea rows="5" cols="59" name="memo" id="memo" class="act_memo" style="background-color: white;"></textarea>
							    </c:if>
							</td>
						</tr>
						
						<tr>
							<th>종료일자 / 시간</th>
							<td>
								<c:if test="${flg eq '1'}">
									<input type="hidden" id="hend_d">
									<input type="text" id="end_d" name="end_d" value="${actDetail.end_d}" class="end_text" readonly="readonly">
									<input type="hidden" id="hend_t_h">
									<select name="ent_t" id="end_t_h" class="end_hour" disabled="disabled">
										<option value="0" style="text-align: center;">==선택==</option>
									
									<c:forEach var="htime" items="${htime}" step="1">
										<c:if test="${actDetail.end_t_h == htime}">
											<option value="htime" selected="selected">${htime}</option>
										</c:if>
										<c:if test="${actDetail.end_t_h != htime}">
											<option value="htime">${htime}</option>
										</c:if>
									</c:forEach>
									</select>
									시
									<input type="hidden" id="hend_t_m">
									<select name="end_t" id="end_t_m" class="end_minute" disabled="disabled">
										<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach var="mtime" items="${mtime}" step="1">
										<c:if test="${actDetail.end_t_m == mtime}">
											<option value="mtime" selected="selected">${mtime}</option>
										</c:if>
										<c:if test="${actDetail.end_t_m != mtime}">
											<option value="mtime">${mtime}</option>
										</c:if>
									</c:forEach>	
									</select>
									분
								</c:if>
								<c:if test="${flg eq '0'}">
									<input type="hidden" id="hend_d">
									<input type="text" id="end_d" name="end_d" value="${actDetail.end_d}" class="end_text" readonly="readonly" style="background-color: white;">
									<input type="hidden" id="hend_t_h">
									<select name="ent_t" id="end_t_h" class="end_hour">
										<option value="0" style="text-align: center;">==선택==</option>
											<option value="01">1</option>
											<option value="02">2</option>
											<option value="03">3</option>
											<option value="04">4</option>
											<option value="05">5</option>
											<option value="06">6</option>
											<option value="07">7</option>
											<option value="08">8</option>
											<option value="09">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
											<option value="24">24</option>									
									</select>
									시
									<input type="hidden" id="hend_t_m">
									<select name="end_t" id="end_t_m" class="end_minute">
										<option value="0" style="text-align: center;">==선택==</option>
											<option value="00">00</option>
											<option value="10">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
											<option value="40">40</option>
											<option value="50">50</option>	
									</select>
									분
								</c:if>
									
							</td>
						</tr>
					</tbody>
				</table>
			</form>	
	</div>

</body>
</html>


