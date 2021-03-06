<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/oppt_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomp_js.js"></script>  
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/custcomptab_js.js"></script>
 <script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/keyman_js.js"></script>
 
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_tab_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_opptpop_css.css" type="text/css" />
<style type="text/css">
   .ui-datepicker{ font-size: 13px; width: 300px;}
   .ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
   .ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<script type="text/javascript">
 
</script>
<c:if test="${flag == 0}">
	<title>영업기회 등록</title>
</c:if>
<c:if test="${flag == 1}">
	<title>영업기회 정보</title>
</c:if>

<script type="text/javascript">
 function ccOpptDetailSelect() {
 
 	$("#sales_lev_cd > option[value='${opptVO.sales_lev_cd}']").attr("selected", "selected");
	$("#psblty_rate  > option[value='${opptVO.psblty_rate}']").attr("selected", "selected");
	$("#sales_oppt_stat_cd > option[value='${opptVO.sales_oppt_stat_cd}']").attr("selected", "selected");
} 
</script>
</head>


<body onload="ccOpptDetailSelect();">
	<div class="saleschanceview">
		<input type="hidden" id="ctx" value="${ctx}"/>
		<br>
		<div id="title">
			<c:if test="${flag == 0}">
				<div class="caption">■ 영업기회 등록</div>
			</c:if>
		 	<c:if test="${flag == 1}">
				<div class="caption">■ 영업기회 정보</div>
			</c:if>
		</div>
		<br>
		<div class="bt_position_popup">
		   <div class="bs-example" data-example-id="simple-table">
<!-- 		   		<input type="text" id="cust_id" name="cust_id"/> -->
		   		<input type="hidden" id="sales_oppt_id" name="sales_oppt_id" value="${opptVO.sales_oppt_id}"/>
				<table id="opptPoptbl">  			
					<tbody id="tbody">
						<tr>
							<th>영업기회명</th>
							<td>
								<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" class="int" style="ms-ime-mode: disabled;" value="${opptVO.sales_oppt_nm}" autofocus="autofocus">
							</td>
						</tr>
						<tr>
							<th>고객사</th>
							<td>
								<input type="text" name="cust_nm" id="cust_nm" readonly="readonly"	class="int_oppt" value="${opptVO.cust_nm}">
								<input type="hidden" name="cust_id" id="cust_id" value="${opptVO.cust_id}" />
								<input type="button" value="키맨" id="customer" class="tiny ui orange button" onclick="javascript:keymanListPopup();">
								
							</td>
						</tr>
						<tr>
							<th>영업단계</th>
							<td>
								<select name="sales_lev_cd" id="sales_lev_cd" value="${opptVO.sales_lev_cd}">
									<option value="0" >==선택==</option>
									<%-- <c:forEach items="${otllist}" var="list">
										<option value="${list.code}" >${list.cd_nm}</option>
									</c:forEach> --%> 
									 <c:forEach items="${otllist}" var="list">
									<option value="<c:out value="${list.code}" />"
                                 	 <c:if test="${opptVO.sales_lev_cd == list.code }">selected="selected"</c:if>>
                                 	 ${list.cd_nm}
                               		</option>
                               		</c:forEach>
									
									
									
								</select>
							</td>
						</tr>
						<tr>
							<th>예상매출액</th>
							<td>
								<input type="text" name="expt_sales_amt" id="expt_sales_amt" class="int_oppt" value="${opptVO.expt_sales_amt}"/>
							</td>
						</tr>
						<tr>
							<th><span style="color">*예상마감일자</span></th>
							<td>
								<input type="text" name="expt_fin_d" id="expt_fin_d" class="int_oppt" value="${opptVO.expt_fin_d}"/>
							</td>
						</tr>
						<tr>
							<th><span style="color">*가능성</span></th>
							<td>
								<select id="psblty_rate" name="psblty_rate">
									<option value="0" >선택</option>
									<option value="10">10</option>
									<option value="20">20</option>
									<option value="30">30</option>
									<option value="40">40</option>
									<option value="50">50</option>
									<option value="60">60</option>
									<option value="70">70</option>
									<option value="80">80</option>
									<option value="90">90</option>
									<option value="100">100</option>
								</select>	
							</td>
						</tr>
						<tr>
							<th><span style="color">*상태</span></th>
							<td>
								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd">
									<option value="0">==선택==</option>
									<c:forEach items="${osclist}" var="list">
									<option value="<c:out value="${list.code}" />"
                                 	 <c:if test="${opptVO.sales_oppt_stat_cd == list.code }">selected="selected"</c:if>>
                                 	 ${list.cd_nm}
                               		</option>
                               		</c:forEach>
                               		
								<%-- 	<c:forEach items="${osclist}" var="list">
										<option value="${list.code}" >${list.cd_nm}</option>
									</c:forEach>  --%> 
                           
								</select>
							</td>
						</tr>
						<tr>
							<th>MEMO</th>
							<td>
								<textarea cols="10" rows="5" name="memo" class="memo" id="memo" style="resize:none; overflow: auto;">${opptVO.memo}</textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<c:if test="${flag == 0}">
				<div class="oppt_bt_position">
					<input type="button" class="tiny ui orange button" value="저장" id="oppt_add" onclick="ccOpptAddcontact();"/>
					<input type="button" class="tiny ui button" value="취소" id="oppt_cancel" onclick ="opptcancle();"/>
				</div>
			</c:if>
			<c:if test="${flag == 1}">
				<div class="oppt_bt_position">
					<input type="button" class="tiny ui orange button" value="저장" id="oppt_mdfy" onclick="contactopptModify();"/>
					<input type="button" class="tiny ui button" value="취소" id="oppt_cancel" onclick ="opptcancle();"/>
				</div>
			</c:if>
		</div>
	</div>
</body>
</html>