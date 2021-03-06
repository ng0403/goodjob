<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/act.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_actpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<script type="text/javascript">
function ccActDetailSelect() {
  	$("#strt_t_h > option[value='${strt_t_h}']").attr("selected", "selected");
	$("#strt_t_m > option[value='${strt_t_m}']").attr("selected", "selected");
	$("#end_t_h > option[value='${end_t_h}']").attr("selected", "selected");
	$("#end_t_m > option[value='${end_t_m}']").attr("selected", "selected");
	$("#sales_actvy_type_nm > option[value='${ccActVO.sales_actvy_type_cd}']").attr("selected", "selected");
	$("#sales_actvy_stat_nm > option[value='${ccActVO.sales_actvy_stat_cd}']").attr("selected", "selected");
}
</script>
<c:if test="${flag == 0}">
	<title>영업활동 등록</title>
</c:if>
<c:if test="${flag == 1}">
	<title>영업활동 정보</title>
</c:if>
</head>

<body onload="ccActDetailSelect();">
<br>
	<div class="actview">
		<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<c:if test="${flag == 0}">
			<div class="caption">■ 영업활동 등록</div>
		</c:if>
	 	<c:if test="${flag == 1}">
			<div class="caption">■ 영업활동 정보</div>
		</c:if>
	</div>

	<div class="bt_position_popup">
		<input type="hidden" id = "sales_actvy_div_cd" name="sales_actvy_div_cd" value="0002"/>
		 <table id="actPopTable">
				<tbody id="tbody">
						<tr>
							<th><span style="color:red">*영업활동명</span></th>
							<td style="width: 130px;">
								<input type="hidden" name="sales_actvy_id" id="sales_actvy_id" value="${ccActVO.sales_actvy_id}"/>
								<input style="background:white"  type="text" name="sales_actvy_nm" id="sales_actvy_nm" class="int" style="ms-ime-mode: disabled;" value="${ccActVO.sales_actvy_nm}" autofocus="autofocus"/>
							</td>
						</tr>
						<tr>
							<th>고객사</th>
							<td>
								<input type="hidden" name="cust_id" id="cust_id" value="${ccActVO.cust_id}"> 
								<input style="background:white"  type="text" name="cust_nm" id="cust_nm" class="int_email" value="${ccActVO.cust_nm}" readonly="readonly">
								 
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*영업기회</span></th>
							<td>
							    <input type="hidden" id="sales_oppt_id" value="${ccActVO.sales_oppt_id}">
							    <input type="text" name="sales_oppt_nm" id="sales_oppt_nm" class="int" value="${ccActVO.sales_oppt_nm}" readonly="readonly" onclick="actOpptListPopup();"> 
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*시간일자</span></th>
							<td>
								<input type="text" id="strt_d" name="strt_d" class="int_act" value="${ccActVO.strt_d}" readonly="readonly">
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*시간시간</span></th>
							<td>
								<select style="background:white"  name="strt_t" id="strt_t_h">
						 			<option value="0" style="text-align: center;">선택</option>
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
								<select style="background:white"  name="strt_t" id="strt_t_m">
								 <option value="0" style="text-align: center;">선택</option>
											<option value="00">00</option>
											<option value="10">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
											<option value="40">40</option>
											<option value="50">50</option>						
								</select>
								분
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*종료일자</span></th>
							<td>
								<input style="background:white"  type="text" id="end_d" name="end_d" class="int_act" value="${ccActVO.end_d}" readonly="readonly">
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*종료시간</span></th>
							<td>
								<select style="background:white"  name="ent_t" id="end_t_h">
								<option value="0" style="text-align: center;">선택</option>
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
								<select style="background:white"  name="end_t" id="end_t_m">
									<option value="0" style="text-align: center;">선택</option>
									<option value="00">00</option>
									<option value="10">10</option>
									<option value="20">20</option>
									<option value="30">30</option>
									<option value="40">40</option>
									<option value="50">50</option>	
								</select>
								분
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*활동유형</span></th>
							<td>
							   <select style="background:white"  name="sales_actvy_type_nm" id="sales_actvy_type_nm">
							      <option value="0" style="text-align: center;">선택</option>
							      <c:forEach var="actTypeCd" items="${actTypeCd}">
									  <option value="${actTypeCd.sales_actvy_type_cd}">${actTypeCd.sales_actvy_type_nm}</option>
								  </c:forEach>
				    			   </select>
							</td>
						</tr>
						<tr>
							<th><span style="color:red">*상태</span></th>
							<td>
							    <select style="background:white"  name="sales_actvy_stat_nm" id="sales_actvy_stat_nm" class="act_tab_select">
		                           	<option value="0" style="text-align: center;">선택</option>						    
							      	<c:forEach var="actStatCd" items="${actStatCd}">
										<option value="${actStatCd.sales_actvy_stat_cd}">${actStatCd.sales_actvy_stat_nm}</option>
								  	</c:forEach>
			    			   		</select>
							</td>
						</tr>
						<tr>
							<th>메모</th>
							<td>
								<textarea class='memo' name="memo" id="memo" rows="5" cols="35" style="resize:none; overflow: auto;">${ccActVO.memo}</textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		
			<c:if test="${flag == 0}">
				<div class="act_bt_position">
					<input type="button" class="tiny ui orange button" value="저장" id="oppt_add" onclick="ccActAdd();"/>
					<input type="button" class="tiny ui  button" value="취소" id="oppt_cancel" onclick="ccActClose();"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}">
				<div class="act_bt_position">
					<input type="button" class="tiny ui orange button" value="저장" id="oppt_mdfy" onclick="ccActMdfy();"/>
					<input type="button" class="tiny ui button" value="취소" id="oppt_cancel" onclick="ccActClose();"/>
				</div>
			</c:if>
		</div>
</body>
</html>