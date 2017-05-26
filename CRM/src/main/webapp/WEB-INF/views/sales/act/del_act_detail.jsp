<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="actDetail" value="${actDetail}" />
<c:set var="flg" value="${flg}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_actpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/Semantic/semantic.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/del_act_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<style type="text/css">
.ui-datepicker{ font-size: 13px; width: 300px;}
.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	
	<div id="title">
		<div class="caption">■ 영업활동 > <a href="/delActSaleList" style="font-size: 15px; text-decoration:none; color: black;">영업활동관리 삭제된 데이터</a> > 삭제된 영업활동 상세정보</div>
	</div>
		<div id="actBaseBtnDiv" class="act_tab_bt_div" style="float: right;">
			<input type="button" id="actrestoreBtn" value="복원" class="tiny ui orange button" onclick="restoreActBt('${actDetail.sales_actvy_id}')"/>
			<input type="button" id="delActDelBtn" value="삭제" class="tiny ui orange button" onclick="delActBt('${actDetail.sales_actvy_id}');"/>
			<input type="button" id="delActCancelBtn" value="취소" class="tiny ui button" onclick="delActCancelBt();"/>
		</div>
	
	<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
	<div id="tabDiv1" class="bt_position_popup">
		
		<form id="actTabForm" method="post">
				<table id="act_tab_table" class="ui celled table">
					<tbody id="act_tab_tbody" class="detailtbody">
						<tr>
							<th><span style="color: red;">*영업활동명</span></th>
							<td>
								<input type="hidden" id="sales_actvy_id" name="sales_actvy_id" value="${actDetail.sales_actvy_id}">
							    <input type="text" name="sales_actvy_nm" id="sales_actvy_nm" value="${actDetail.sales_actvy_nm}" class="inputText" style="ms-ime-mode: disabled;" readonly="readonly" />
							</td>
							<th>고객사</th>
							<td>
								<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" style="display: none;" disabled="disabled">
							</td>
			     		</tr>
						<tr>
							<th>영업기회명</th>
							<td>
								<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    <input type="button" name="act_opp" value="영업기회" class="tiny ui orange basic button" id="act_opp_nm" style="display: none;" disabled="disabled">
							</td>
							<th><span style="color: red;">*활동유형</span></th>
							<td>
								<select name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="act_tab_select" disabled="disabled">
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
			     			</td>
						</tr>	
						<tr>
							<th><span style="color: red;">*시간일자 / 시간</span></th>
							<td>
								<input type="hidden" id="hstrt_d">
								<input type="text" id="strt_d" name="strt_d" value="${actDetail.strt_d}" class="inputText" readonly="readonly">
								<input type="hidden" id="hstrt_t_h">
								
								<select name="strt_t_h" id="strt_t_h" class="start_hour" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach var="htime" items="${htime}" step="1">
										<c:if test="${actDetail.strt_t_h == htime}">
											<option value="${htime}" selected="selected">${htime}</option>
										</c:if>
										<c:if test="${actDetail.strt_t_h != htime}">
											<option value="${htime}">${htime}</option>
										</c:if>
									</c:forEach>
								</select>
								시
								<input type="hidden" id="hstrt_t_m">
								<select name="strt_t_m" id="strt_t_m" class="start_minute" disabled="disabled">
									<option value="0" style="text-align: center;">==선택==</option>
									
									<c:forEach var="mtime" items="${mtime}" step="1">
										<c:if test="${actDetail.strt_t_m == mtime}">
											<option value="${mtime}" selected="selected">${mtime}</option>
										</c:if>
										<c:if test="${actDetail.strt_t_m != mtime}">
											<option value="${mtime}">${mtime}</option>
										</c:if>
									</c:forEach>
								</select>
								분
								
							</td>
							<th>종료일자 / 시간</th>
							<td>
									<input type="hidden" id="hend_d">
									<input type="text" id="end_d" name="end_d" value="${actDetail.end_d}" class="inputText" readonly="readonly">
									<input type="hidden" id="hend_t_h">
									
									<select name="end_t_h" id="end_t_h" class="end_hour" disabled="disabled">
										<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach var="htime" items="${htime}" step="1">
											<c:if test="${actDetail.end_t_h == htime}">
												<option value="${htime}" selected="selected">${htime}</option>
											</c:if>
											<c:if test="${actDetail.end_t_h != htime}">
												<option value="${htime}">${htime}</option>
											</c:if>
										</c:forEach>
									</select>
									시
									<input type="hidden" id="hend_t_m">
									<select name="end_t_m" id="end_t_m" class="end_minute" disabled="disabled">
										<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach var="mtime" items="${mtime}" step="1">
											<c:if test="${actDetail.end_t_m == mtime}">
												<option value="${mtime}" selected="selected">${mtime}</option>
											</c:if>
											<c:if test="${actDetail.end_t_m != mtime}">
												<option value="${mtime}">${mtime}</option>
											</c:if>
										</c:forEach>	
									</select>
									분
							</td>
						</tr>
						<tr>
							<th><span style="color: red;">*상태</span></th>
							<td>
							    <input type="hidden" id="hsales_actvy_stat_cd">
							    <select name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="act_tab_select" disabled="disabled">
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
							</td>
						</tr>
						<tr>
							<th colspan="4" style="text-align: center; ">영업활동 내역</th>
						</tr>
						<tr>
							<th>영업활동장소</th>
							<td colspan="3">
							    <input type="text" class="inputText" id="sales_actvy_loc" name="sales_actvy_loc" value="${actDetail.sales_actvy_loc}">
							</td>
						</tr>
						<tr>
							<th>영업활동대상자</th>
							<td colspan="3">
							    <input type="text" class="inputText" id="sales_actvy_person" name="sales_actvy_person"  value="${actDetail.sales_actvy_person}">
							</td>
						</tr>
						<tr>
							<th>영업활동내용</th>
							<td colspan="3">
							    <textarea style="width: 745px; height: 100px;" id="sales_actvy_content" name="sales_actvy_content" >${actDetail.sales_actvy_content}</textarea>
							</td>
						</tr>
						<tr>
							<th>비고</th>
							<td colspan="3">
							   	<textarea style="width: 745px; height: 50px;" id="sales_actvy_reason" name="sales_actvy_reason">${actDetail.sales_actvy_reason}</textarea>
							</td>
						</tr>
					</tbody>
				</table>
		</form>	
	</div>

</body>
</html>


