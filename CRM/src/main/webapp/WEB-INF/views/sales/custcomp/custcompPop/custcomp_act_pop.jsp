<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/act.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_actpop_css.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
</head>
<body onload='javscript:if(${flg == "detail"}) custActiveDetail();'>
<div class="keymanview" style="width: 98%; padding-left: 10px;">
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="custType" value="${custType}"/>
	<input type="hidden" id="sales_actvy_id" value="${sales_actvy_id}">

	<div id="title">
<!-- 		<div class="caption">● 영업활동 등록</div> -->
		<h3 class="ui header" style="background: #fff; padding: 10px;">■ 영업활동 등록</h3>
	</div>
	<div class="bt_position_popup">
   		<div class="bs-example" data-example-id="simple-table">
  
	 		<table id="operatingapopuptable" class="ui celled table">  			
				<tbody id="tbody1">
					<tr>
						<th>영업활동명</th>																	
								<td><input type="text" name="sales_actvy_nm" id="sales_actvy_nm" class="inputText" value="${sales_actvy_nm}" ></td>
					</tr>
					<tr>  
						<th>고객사</th>
						<td><input type="text" name="cust_nm" id="cust_nm" class="inputText" value="${cust_nm}" readonly="readonly">
							<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
<!-- 								<input type="button" id="customer" value="고객"></td> -->
					</tr>
					<tr>
						<th>영업기회</th>
						<td>
						    <input type="hidden" id="sales_oppt_id" name="sales_oppt_id"  value="${detail.sales_oppt_id}">
						    <input type="text"   id="sales_oppt_nm" name="sales_oppt_nm" class="inputText" value="${detail.sales_oppt_nm}" readonly="readonly" > 
						    <input type="button" id="act_opp_nm"    name="act_opp" 		 class="tiny ui orange basic button" value="영업기회"   onclick="ccOpptListPop('${ctx}');">
						</td>
					</tr>
					<tr>
						<th>영업활동구분</th>
						<td>
							<c:forEach items="${actDivCd}" var="list">
								<input type="radio" id = "" name="sales_actvy_div_cd" class="inputText" value="${list.sales_actvy_div_cd}"/>${list.sales_actvy_div_nm}&nbsp; 
							</c:forEach> 
						</td>
					</tr>
					<tr>
						<th>시작일자</th>
						<td>
							<input type="text" id="strt_d" name="dstrt_d" class="inputText" value="${ccActVO.strt_d}" readonly="readonly">
						</td>
					</tr>
					 <tr>
					 	<th>시작시간</th>
					 	<td><select name="strt_t" id="strt_t_h" class="start_hour" style="background: #fff;">
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
						<select name="strt_t" id="strt_t_m" class="start_minute" style="background: #fff;">
							<option value="0" style="text-align: center;">==선택==</option>
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
						<th>종료일자</th>
						<td>
							<input type="text" id="end_d" name="end_d" class="inputText"  value="${ccActVO.end_d}" readonly="readonly">
						</td>
					</tr>
					<tr>
						<th>종료시간</th>
						<td><select name="ent_t" id="end_t_h" class="end_hour" style="background: #fff;">
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
						<select name="end_t" id="end_t_m" class="end_minute" style="background: #fff;">
							<option value="0" style="text-align: center;">==선택==</option>
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
						<th>활동유형</th>
						<td><select name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="time" style="background: #fff;">
								<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${actTypeCd}" var="list">
										<option value="${list.sales_actvy_type_cd}">${list.sales_actvy_type_nm}</option>							
									</c:forEach>
							</select>
						</td>
					</tr>
					<tr>
						<th>상태</th>
						<td><select name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="time" style="background: #fff;">
								<option value="0" style="text-align: center;">==선택==</option>
									<c:forEach items="${actStatCd}" var="list">
										<option value="${list.sales_actvy_stat_cd}">${list.sales_actvy_stat_nm}</option>
									</c:forEach>
							</select>
						</td>
					</tr>
					<tr>
						<th>메모</th>
						<td><textarea class="inputText" id="memo" name="memo" rows="5" cols="35" style="resize: none; width: 98%;">${detail.memo}</textarea></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="act_bt_position" style="padding-top: 10px;">
			<input type="button" class="tiny ui orange button" value="저장" id="activeButton"/>
			<input type="button" class="tiny ui button" value="취소" id="activeAdd_cancel"/>
		</div>
	</div>
</div>
</body>
</html>