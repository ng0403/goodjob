<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" /> 
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />	
	
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
 --><script src="${ctx}/resources/common/Semantic/semantic.js"></script>	
	
	
 <!-- 	type="text/css" /> -->
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/opptAct_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>영업활동 등록</title>
</head>
<body onload='javscript:if(${flg eq "detail"}) opptActiveDetail();'>

<div class="keymanview">
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="custType" value="${custType}"/>
	<input type="hidden" id="sales_oppt_id" value="${sales_oppt_id}">
	<input type="hidden" id="sales_oppt_nm" value="${sales_oppt_nm}">
<%-- 	<input type="hidden" id="cust_id" value="${sales_cust_id}"> --%>
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="sales_actvy_id" value="${sales_actvy_id}">
	
	<div id="title">
		<div class="caption">
			<c:choose>
				<c:when test="${flg eq 'add'}">
					● 영업활동 등록
				</c:when>
				<c:when test="${flg eq 'detail'}">
					● 영업활동 상세/수정
				</c:when>
			</c:choose>
		</div>
	</div>
	<div class="bt_position_popup">
		<div class="bs-example" data-example-id="simple-table">
			<table id="operatingapopuptable">  			
				<tbody id="tbody1">
					<tr>
						<th><span style="color:red">*영업활동명</span></th>																	
						<td>
							<input style="background:white" type="text" name="sales_actvy_nm" id="sales_actvy_nm" class="int" value="${detail.sales_actvy_nm }" >
						</td>
					</tr>
					<tr>  
						<th>고객사</th>
						<td>
							<c:choose>
								<c:when test="${flg eq 'add'}">
									<input type="text" name="cust_nm" id="oppt_nm" class="int" value="${cust_nm}" readonly="readonly">
									<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
									<input type="hidden" name="oppt_id" id="oppt_id">
								    <input type="button" value="영업기회" id="oppt" class="tiny ui orange button" onclick="javascript:opptListPopup();">
									 
								</c:when>
								<c:when test="${flg eq 'detail'}">
									<input type="text" name="cust_nm" id="cust_nm" class="int" value="${detail.cust_nm}" readonly="readonly">
									<input type="hidden" name="cust_id" id="cust_id" value="${detail.cust_id}">
								</c:when>
							</c:choose>
	<!-- 								<input type="button" id="customer" value="고객"> -->
						</td>
					</tr>
					<tr>
						<th><span style="color:red">*영업활동구분</span></th>
						<td>
							<c:forEach items="${actDivCd}" var="list">
								<c:choose>
									<c:when test="${detail.sales_actvy_div_cd eq list.sales_actvy_div_cd}">
										<input type="radio" id = "" name="sales_actvy_div_cd" class="sales_actvy_div_cd" value="${list.sales_actvy_div_cd}" checked="checked"/>${list.sales_actvy_div_nm}&nbsp;
									</c:when>
									<c:otherwise>
										<input type="radio" id = "" name="sales_actvy_div_cd" class="sales_actvy_div_cd" value="${list.sales_actvy_div_cd}"/>${list.sales_actvy_div_nm}&nbsp; 
									</c:otherwise>
								</c:choose>
							</c:forEach> 
	<!-- 								<input type="radio" id = "" name="" class="sales_actvy_div_cd" value="" />영업기회 -->
						</td>
					</tr>
					<tr>
						<th><span style="color:red">*시작일자</span></th>
						<td>
							<input style="background:white" type="text" id="strt_d" name="dstrt_d" class="int_act" value="${detail.strt_d}" readonly="readonly">
						</td>
					</tr>
					 <tr>
					 	<th><span style="color:red">*시작시간</span></th>
					 	<td>
					 		<input type="hidden" id="strt_t" value="${detail.strt_t }">
							<select style="background:white" name="strt_t" id="strt_t_h" class="start_hour">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach var="i" begin="1" end="24" step="1">
									<c:choose>
										<c:when test="${i < 10 }">
											<option value="0${i }">${i }</option>
										</c:when>
										<c:otherwise>
											<option value="${i }">${i }</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>								
							</select>
								시
							<input type="hidden" id="hstrt_t_m">
							<select style="background:white" name="strt_t" id="strt_t_m" class="start_minute">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach var="i" begin="0" end="50" step="10">
									<c:choose>
										<c:when test="${i < 10 }">
											<option value="0${i }">${i }</option>
										</c:when>
										<c:otherwise>
											<option value="${i }">${i }</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>						
							</select>
								분
						</td>
					</tr>
					<tr>
						<th><span style="color:red">*종료일자</span></th>
						<td>
							<input style="background:white" type="text" id="end_d" name="dend_d" class="int_act"  value="${detail.end_d}" readonly="readonly">
						</td>
					</tr>
					<tr>
						<th><span style="color:red">*종료시간</span></th>
						<td>
							<input type="hidden" id="end_t" value="${detail.end_t }">
							<select style="background:white" name="ent_t" id="end_t_h" class="end_hour">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach var="i" begin="1" end="24" step="1">
									<c:choose>
										<c:when test="${i < 10 }">
											<option value="${i}"selected="selected" >${i }</option>
										</c:when>
										<c:otherwise>
											<option value="${i }" selected="selected" >${i }</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>									
							</select>
								시
							<input type="hidden" id="hend_t_m">
							<select style="background:white" name="end_t" id="end_t_m" class="end_minute">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach var="i" begin="0" end="50" step="10">
									<c:choose>
										<c:when test="${i < 10 }">
											<option value="0${i }" selected="selected"	>${i }</option>
										</c:when>
										<c:otherwise>
											<option value="${i }">${i }</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>	
							</select>
								분
						</td>
					</tr>
					<tr>
						<th><span style="color:red">*활동유형</span></th>
						<td>
							<select style="background:white" name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="time">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach items="${actTypeCd}" var="list">
									<c:choose>
										<c:when test="${detail.sales_actvy_type_cd eq list.sales_actvy_type_cd }">
											<option value="${list.sales_actvy_type_cd}" selected="selected">${list.sales_actvy_type_nm}</option>
										</c:when>
										<c:otherwise>
											<option value="${list.sales_actvy_type_cd}">${list.sales_actvy_type_nm}</option>							
										</c:otherwise>
									</c:choose>
								</c:forEach>
							</select>
						</td>
					</tr>
<!-- 					<tr> -->
<!-- 						<th>영업기회</th> -->
<!-- 						<td> -->
<!-- 							<input type="text" id="sales_oppt_nm" name="sales_oppt_nm" class="int"/> -->
<!-- 							<input type="button" id="opptSelect" value="영업기회" class="ebtn btn-chance"/>  -->
<!-- 						</td> -->
<!-- 					</tr>     -->
					<tr>
						<th><span style="color:red">*상태</span></th>
						<td>
							<select style="background:white" name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="time">
								<option value="0" style="text-align: center;">==선택==</option>
								<c:forEach items="${actStatCd}" var="list">
									<c:choose>
										<c:when test="${detail.sales_actvy_stat_cd eq list.sales_actvy_stat_cd }">
											<option value="${list.sales_actvy_stat_cd}" selected="selected">${list.sales_actvy_stat_nm}</option>
										</c:when>
										<c:otherwise>
											<option value="${list.sales_actvy_stat_cd}">${list.sales_actvy_stat_nm}</option>
										</c:otherwise>
									</c:choose>
								</c:forEach>
							</select>
						</td>
					</tr>
					<tr>
						<th>메모</th>
						<td>
							<textarea class="memo" id="memo" name="memo" rows="5" cols="35" style="resize: none;">${detail.memo}</textarea>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="detailBtn" style="margin-top:10px">
			<input type="button" class="tiny ui orange button" value="저장" id="activeButton"/>
			<input type="button" class="tiny ui button" value="취소" id="activeAdd_cancel"/>
		</div>
	</div>
</div>
</body>
</html>