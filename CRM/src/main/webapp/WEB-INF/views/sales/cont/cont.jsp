<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet"	href="${ctx}/resources/common/css/sales/contcss/cont.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<!--js 파일을 import하는 방법  -->
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/contJs.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/cont_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	

<title>개인 고객</title>

<style type="text/css">
	.ui-datepicker{ font-size: 13px; width: 300px;}
	.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
	.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
	</style>
</head>
<body>

	<input type="hidden" id="ctx" value="${ctx}" />
	<div id="title">
		<div class="caption">
			■ 계약
		</div>
	</div>
	<div class="search_div">
		<label for="sch_cont_nm" class="tel_label_list">계약명</label>
		<input type="text" class="tel_search" autofocus="autofocus" id="sch_cont_nm" name="sch_cont_nm" /> 
		<label for="sch_cont_num" class="tel_label_list">계약번호</label> 
		<input type="text" class="tel_search" id="sch_cont_num" name="sch_cont_num"  maxlength="9" onkeydown='return onlyNumber(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;'/> 
		<label for="sch_cont_amt" class="tel_label_list">계약금액</label> 
		<select id="sch_cont_amt">
			<option value="0" >==계약금액==</option>
			<option value="0003" id="1" >1천이하</option>
			<option value="0004" id="2" >1천 ~ 5천</option>
			<option value="0005" id="3" >5천 ~ 1억</option>
			<option value="0006" id="4" >1억 ~ 10억</option>
			<option value="0007" id="5" >10억 ~ 100억</option>
			<option value="0008" id="6" >100억 ~ 1000억</option>
			<option value="0009" id="7" >1000억 ~ 5000억</option>
			<option value="0010" id="8" >5000억 ~ 1조</option>
			<option value="0011" id="9" >1조 이상</option>
		</select>
		<label for="sch_contr_d" class="tel_label_list">계약일자</label> 
		<input type="text" name="sch_contr_d" id="contr_d_list" class="tel_date_search" readonly="readonly">
		<input type="button" id="cont_search" class="cont_btn" value="조회" onclick="schContPaging(1);" />
	</div>
	<div id="btn" class="cont_list_bt_div"> 
			<input type="button" id="contrAddBtn" value="추가"  onclick="contAddp();" class="cont_btn" style="margin-top:-10px"/>
	 		<input type="button" id="del"  value="삭제" onclick="contListDel('${ctx}');" class="cont_btn" style="margin-top:-10px"/> 
	 	</div> 

	<div id="tableline" >
		<table id="goaltable" >
			<thead>
				<tr id="tabletoptr">
					<th style="width: 2%"><input type="checkbox" id="contListCheck"></th>
					<th style="width: 27%">계약명</th>
					<th style="width: 13%">계약번호</th>
					<th style="width: 8%">계약수량</th>
					<th style="width: 12%">계약금액</th>
					<th style="width: 12%">계약일자</th>
					<th style="width: 12%">등록자</th>
					<th style="width: 15%">등록일시</th>
				</tr>
			</thead>
			<tbody id="contListTbody">
				<c:forEach var="ccontrlist" items="${contrList}" begin="0" end="9">
			 
					<tr>
						<th><input type="checkbox" id="chk_cont_id" value="${ccontrlist.contr_id}" onclick="contChkCancel();"></th>
						<td style="text-align: left; padding-left: 8px"> <!--클릭시 comp_id를 넘겨준다  --> 
 							<a href="#" onclick="contDetail('${ccontrlist.contr_id}');"  style="color: blue;" class="cntClick">${ccontrlist.contr_nm}</a><!--#써놓으면 클릭시 jsp제일 상단으로 이동한다.  --> 
						</td>
						<td>${ccontrlist.contr_num}</td>
						<td style="text-align: right; padding-right: 8px;">${ccontrlist.contr_qty }</td>
						<td style="text-align: right; padding-right: 8px;"><fmt:formatNumber value="${ccontrlist.contr_amt}" groupingUsed="true" /></td>
						<td>${ccontrlist.contr_d}</td>
						<td>${ccontrlist.fst_reg_id}</td>
						<td>${ccontrlist.fst_reg_dt}</td>
					</tr>
				</c:forEach>
					<c:if test="${contrList.size() < 10}">
						<c:forEach begin="0" end="${10-contrList.size()}">
							<tr>
								<th><input type="checkbox"></th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</c:forEach>
					</c:if>

			</tbody>
		</table>
		<div id="pagingDiv" >
		   <input type="hidden" id="endPageNum" value="${page.endPageNum}" style="text-align:center;"/>
			   <c:choose>
			   		<c:when test="${page.startPageNum == 1 && page.endPageNum == 1}">
			   			<input type='hidden' id='endPageNum' value="${page.endPageNum}"/>
						<a> ◀ </a>
						<input type='text' id='contPageInput' readonly='readonly' value="${page.startPageNum }" onkeypress="pageInput(event);" class="cont_page_txt"/>
						<a> / ${page.endPageNum} ▶ </a>
			   		</c:when>
				   <c:when test="${pageNum == page.startPageNum && pageNum != page.endPageNum}">
				      <a> ◀ </a>
				      <input type="text" id="contPageInput" size="1px" value="${page.startPageNum}" class="cont_page_txt"/><a> / </a> 
				      <a href="#" onclick="contPaging(${page.endPageNum});" id="pNum" style="text-decoration: none; color: blue;">${page.endPageNum}</a>
				      <a href="#" onclick="contPaging(${pageNum+1});" id="pNum" style="text-decoration: none; color: blue;"> ▶ </a>
				   </c:when>
				   <c:when test="${pageNum == page.endPageNum}">
				      <a href="#" onclick="contPaging(${pageNum-1});" id="pNum" style="text-decoration: none; color: blue;"> ◀ </a>
				      <input type="text" id="contPageInput" size="1px" value="${page.endPageNum}" class="cont_page_txt" style="text-decoration: none;"/><a> / </a> 
				      <a>${page.endPageNum}</a>
				      <a> ▶ </a>
				   </c:when>
				   <c:otherwise>
				      <a href="#" onclick="contPaging(${pageNum-1});" id="pNum" style="text-decoration: none; color: blue;"> ◀ </a>
				      <input type="text" id="contPageInput" size="1px" value="${pageNum}" class="cont_page_txt"/><a> / </a> 
				      <a href="#" onclick="contPaging(${page.endPageNum});" id="pNum" style="text-decoration: none; color: blue;">${page.endPageNum}</a>
				      <a href="#" onclick="contPaging(${pageNum+1});" id="pNum" style="text-decoration: none;"> ▶ </a>
				   </c:otherwise>
			   </c:choose>
		</div>
	 	
	</div>
</body>

</html>