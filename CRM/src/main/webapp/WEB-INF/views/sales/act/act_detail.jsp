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
<link rel="stylesheet" href="${ctx}/resources/common/Semantic/semantic.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
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
	<input type="hidden" id="act_flg" value="${act_flg}">
	<input type="hidden" id="hsales_oppt_id" value="${sales_oppt_id}">
	<input type="hidden" id="hsales_oppt_nm" value="${sales_oppt_nm}">
	<input type="hidden" id="hcust_id" value="${cust_id}">
	<input type="hidden" id="hcust_nm" value="${cust_nm}">
	<input type="hidden" id="inputCust" value="false"/>
	
	<div id="title">
	<!-- 신규추가를 눌렀을 경우 -->
		<c:if test="${flg == 0 }">
			<c:if test="${act_flg eq null}">
				<label id="listLabel" class="ui header">■ 영업활동 > <a href="/act" style="font-size: 20px; text-decoration:none; color: black;">영업활동관리</a> > 영업활동 등록</label>
<!-- 				<div class="caption">■ 영업활동 > <a href="/act" style="font-size: 15px; text-decoration:none; color: black;">영업활동관리</a> > 영업활동 등록</div> -->
			</c:if>
			<c:if test="${act_flg == '1'}">
				<label id="listLabel" class="ui header">■ 영업활동 > <a href="/actSaleList" style="font-size: 20px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 등록</label>
<!-- 				<div class="caption">■ 영업활동 > <a href="/actSaleList" style="font-size: 15px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 등록</div> -->
			</c:if>
			<c:if test="${act_flg == 'oppt'}">
				<label id="listLabel" class="ui header">■ 영업기회 > <a href="opptDetail?opptId=${sales_oppt_id}" style="font-size: 20px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 등록</label>
<%-- 				<div class="caption">■ 영업기회 > <a href="opptDetail?opptId=${sales_oppt_id}" style="font-size: 15px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 등록</div> --%>
			</c:if>
			<c:if test="${act_flg == 'oppt_ed'}">
				<label id="listLabel" class="ui header">■ 영업기회 > <a href="opptDetail?opptId=${sales_oppt_id}" style="font-size: 20px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 등록</label>
<%-- 				<div class="caption">■ 영업기회 > <a href="opptDetail?opptId=${sales_oppt_id}" style="font-size: 15px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 등록</div> --%>
			</c:if>
			<c:if test="${act_flg == 'cust'}">
				<label id="listLabel" class="ui header">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 20px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 등록</label>
<%-- 				<div class="caption">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 15px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 등록</div> --%>
			</c:if>
			<c:if test="${act_flg == 'cust_ed'}">
				<label id="listLabel" class="ui header">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 20px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 등록</label>
<%-- 				<div class="caption">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 15px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 등록</div> --%>
			</c:if>
		</c:if>
		<c:if test="${flg == 1 }">
			<c:if test="${act_flg eq null}">
				<label id="listLabel" class="ui header">■ 영업활동 > <a href="/act" style="font-size: 20px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 상세정보</label>
<!-- 				<div class="caption">■ 영업활동 > <a href="/act" style="font-size: 15px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 상세정보</div> -->
			</c:if>
			<c:if test="${act_flg == '1'}">
				<label id="listLabel" class="ui header">■ 영업활동 > <a href="/actSaleList" style="font-size: 20px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 상세정보</label>
<!-- 				<div class="caption">■ 영업활동 > <a href="/actSaleList" style="font-size: 15px; text-decoration:none; color: blue;">영업활동관리</a> > 영업활동 상세정보</div> -->
			</c:if>
			<c:if test="${act_flg == 'oppt'}">
				<label id="listLabel" class="ui header">■ 영업기회 > <a href="/opptDetail?opptId=${sales_oppt_id}" style="font-size: 20px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 상세정보</label>
<%-- 				<div class="caption">■ 영업기회 > <a href="/opptDetail?opptId=${sales_oppt_id}" style="font-size: 15px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 상세정보</div> --%>
			</c:if>
			<c:if test="${act_flg == 'oppt_ed'}">
				<label id="listLabel" class="ui header">■ 영업기회 > <a href="/opptDetail?opptId=${sales_oppt_id}" style="font-size: 20px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 상세정보</label>
<%-- 				<div class="caption">■ 영업기회 > <a href="/opptDetail?opptId=${sales_oppt_id}" style="font-size: 15px; text-decoration:none; color: blue;">영업기회관리</a> > 영업활동 상세정보</div> --%>
			</c:if>
			<c:if test="${act_flg == 'cust'}">
				<label id="listLabel" class="ui header">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 20px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 상세정보</label>
<%-- 				<div class="caption">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 15px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 상세정보</div> --%>
			</c:if>
			<c:if test="${act_flg == 'cust_ed'}">
				<label id="listLabel" class="ui header">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 20px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 상세정보</label>
<%-- 				<div class="caption">■ 고객사 > <a href="custcompDetail?cust_id=${cust_id}" style="font-size: 15px; text-decoration:none; color: blue;">고객사관리</a> > 영업활동 상세정보</div> --%>
			</c:if>
		</c:if>
	</div>
	
	<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
	<div id="tabDiv1" class="bt_position_popup">
		<form id="actTabForm" method="post">
				<table id="act_tab_table" class="ui celled table">
					<tbody id="act_tab_tbody" class="detailtbody">
						<tr>
							<th><span style="color: red;">*영업활동명</span></th>
							<td>
								<c:if test="${flg == 1}">
									<input type="hidden" id="sales_actvy_id" name="sales_actvy_id" value="${actDetail.sales_actvy_id}">
							    	<input type="text" name="sales_actvy_nm" id="sales_actvy_nm" value="${actDetail.sales_actvy_nm}" class="inputText" style="ms-ime-mode: disabled;" readonly="readonly" />
								</c:if>
								<c:if test="${flg == 0}">
									<input type="hidden" id="hsales_actvy_nm">
							    	<input type="text" name="sales_actvy_nm" id="sales_actvy_nm" value="${actDetail.sales_actvy_nm}" class="inputText" style="background-color: white;"/>
								</c:if>
							    
							</td>
							<th>고객사</th>
							<td>
								<c:if test="${flg eq '1'}">
									<c:if test="${act_flg eq null}">	<!-- 달력 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq '1'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'oppt'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'oppt_ed'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust'}">		<!-- 고객사 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust_ed'}">		<!-- 고객사 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								   	 	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly"> 
								    	<input type="button" name="customer" value="고객" class="tiny ui orange basic button" id="customer" disabled="disabled">
									</c:if>
								</c:if>
								<c:if test="${flg eq '0'}">
									<c:if test="${act_flg eq null}">	<!-- 달력 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer">
									</c:if>
									<c:if test="${act_flg eq '1'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${actDetail.cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${actDetail.cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer">
									</c:if>
									<c:if test="${act_flg eq 'oppt'}">	<!-- 영업기회 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer" style="display: none;" disabled="disabled">
									</c:if>
								    <c:if test="${act_flg eq 'oppt_ed'}">	<!-- 영업기회 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer" style="display: none;" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust'}">	<!-- 고객사 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer" style="display: none;" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust_ed'}">	<!-- 고객사 -->
										<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}">
								    	<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="inputText" readonly="readonly" style="background-color: white;">
								  	  	<input type="button" name="customer" value="고객" class="tiny ui blue basic button" id="customer" style="display: none;" disabled="disabled">
									</c:if>
								</c:if>
							</td>
			     		</tr>
						<tr>
							<th>영업기회명</th>
							<td>
								<c:if test="${flg eq '1'}">
									<c:if test="${act_flg eq null}">	<!-- 달력 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq '1'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'oppt'}">	<!-- 영업기회 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'oppt_ed'}">	<!-- 영업기회 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust'}">	<!-- 고객사 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" disabled="disabled">
									</c:if>
									<c:if test="${act_flg eq 'cust_ed'}">	<!-- 고객사 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm">
									</c:if>
								</c:if>
								<c:if test="${flg eq '0'}">
									<c:if test="${act_flg eq null}">	<!-- 달력 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
									<c:if test="${act_flg eq '1'}">		<!-- 영업활동관리 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${actDetail.sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${actDetail.sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
									<c:if test="${act_flg eq 'oppt'}">	<!-- 영업기회 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
									<c:if test="${act_flg eq 'oppt_ed'}">	<!-- 영업기회 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
									<c:if test="${act_flg eq 'cust'}">	<!-- 고객사 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
									<c:if test="${act_flg eq 'cust_ed'}">	<!-- 고객사 -->
										<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${sales_oppt_id}">
							   	 		<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" value="${sales_oppt_nm}" class="inputText" readonly="readonly" style="background-color: white;"> 
							    		<input type="button" name="act_opp" value="영업기회" class="tiny ui blue basic button" id="act_opp_nm" >
									</c:if>
								</c:if>
							    	
							</td>
							<th><span style="color: red;">*활동유형</span></th>
							<td>
								<c:if test="${flg eq '1'}">
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
							<th><span style="color: red;">*시간일자 / 시간</span></th>
							<td>
							
							<c:if test="${flg eq '1'}">
								<input type="hidden" id="hstrt_d">
								<input type="text" id="strt_d" name="strt_d" value="${actDetail.strt_d}" class="inputText" readonly="readonly">
								<input type="hidden" id="hstrt_t_h">
								<br>
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
							</c:if>
							<c:if test="${flg eq '0'}">
								<input type="hidden" id="hstrt_d">
								<input type="text" id="strt_d" name="strt_d" value="${actDetail.strt_d}" class="inputText" readonly="readonly" style="background-color: white;">
								<input type="hidden" id="hstrt_t_h"><br>
								<select name="strt_t_h" id="strt_t_h" class="start_hour">
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
								<select name="strt_t_m" id="strt_t_m" class="start_minute">
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
							<th>종료일자 / 시간</th>
							<td>
								<c:if test="${flg eq '1'}">
									<input type="hidden" id="hend_d">
									<input type="text" id="end_d" name="end_d" value="${actDetail.end_d}" class="inputText" readonly="readonly">
									<input type="hidden" id="hend_t_h">
									<br>
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
								</c:if>
								<c:if test="${flg eq '0'}">
									<input type="hidden" id="hend_d">
									<input type="text" id="end_d" name="end_d" value="${actDetail.end_d}" class="inputText" readonly="readonly" style="background-color: white;">
									<input type="hidden" id="hend_t_h"><br>
									<select name="end_t_h" id="end_t_h" class="end_hour">
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
									<select name="end_t_m" id="end_t_m" class="end_minute">
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
						<tr>
							<th><span style="color: red;">*상태</span></th>
							<td>
								<c:if test="${flg eq '1'}">
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
							<th colspan="4" style="text-align: center;">영업활동 내역</th>
						</tr>
						<tr>
							<th>영업활동장소</th>
							<td colspan="3">
							    <c:if test="${flg eq '0'}">
							    	<input type="text" class="inputText" id="sales_actvy_loc" name="sales_actvy_loc">
							    </c:if>
							    <c:if test="${flg eq '1'}">
							    	<input type="text" class="inputText" id="sales_actvy_loc" name="sales_actvy_loc" style="background: white;" value="${actDetail.sales_actvy_loc}">
							    </c:if>
							</td>
						</tr>
						<tr>
							<th>영업활동대상자</th>
							<td colspan="3">
							    <c:if test="${flg eq '0'}">
							    	<input type="text" class="inputText" id="sales_actvy_person" name="sales_actvy_person">
							    </c:if>
							    <c:if test="${flg eq '1'}">
							    	<input type="text" class="inputText" id="sales_actvy_person" name="sales_actvy_person" style="background: white;" value="${actDetail.sales_actvy_person}">
							    </c:if>
							</td>
						</tr>
						<tr>
							<th>영업활동내용</th>
							<td colspan="3">
							    <c:if test="${flg eq '0'}">
							    	<textarea style="border: 5 solid black; width: 1150px; height: 100px;" id="sales_actvy_content" name="sales_actvy_content" ></textarea>
							    </c:if>
							    <c:if test="${flg eq '1'}">
							    	<textarea style="border: 5 solid black; width: 1150px; height: 100px;" id="sales_actvy_content" name="sales_actvy_content" >${actDetail.sales_actvy_content}</textarea>
							    </c:if>
							</td>
						</tr>
						<tr>
							<th>비고</th>
							<td colspan="3">
							    <c:if test="${flg eq '0'}">
							    	<textarea style="width: 1150px; height: 50px;" id="sales_actvy_reason" name="sales_actvy_reason"></textarea>
							    </c:if>
							    <c:if test="${flg eq '1'}">
							    	<textarea style="width: 1150px; height: 50px;" id="sales_actvy_reason" name="sales_actvy_reason">${actDetail.sales_actvy_reason}</textarea>
							    </c:if>
							</td>
						</tr>
					</tbody>
				</table>
				
			<c:if test="${flg == 0}">
				<div id="actAddBtnDiv" class="act_tab_bt_div">
					<input type="button" id="actAddSaveBtn" value="추가" onclick="actInsert('${ctx}','${act_flg}');" class="tiny ui blue button"/>
					<input type="button" id="actAddCancelBtn" value="취소" class="tiny ui button" onclick="actAddCancelBt('${act_flg}');"/>
				</div>
			</c:if>
			
			<c:if test="${flg == 1}">
				<div id="actBaseBtnDiv" class="act_tab_bt_div">
					<input type="button" id="actMdfBtn" value="편집" class="tiny ui button"/>
					<input type="button" id="actDelBtn" value="삭제" class="tiny ui blue button" onclick="actDelBt('${actDetail.sales_actvy_id}');"/>
					<input type="button" id="actAddCancelBtn" value="취소" class="tiny ui button" onclick="actAddCancelBt('${act_flg}');"/>
				</div>
				<div id="actMdfBtnDiv" style="display: none;" class="act_tab_bt_div">
					<input type="button" id="actMdfSaveBtn" value="수정" onclick="actModify('${ctx}', '${act_flg}');" class="tiny ui blue button"/>
					<input type="button" id="actMdfCancelBtn" value="취소" class="tiny ui button" onclick="actMdfyCancelBt('${act_flg}');"/>
				</div>
			</c:if>
		</form>	
	</div>

</body>
</html>


