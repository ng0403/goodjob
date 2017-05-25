<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/keyman_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/contJs.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/cont_pop.js"></script>

<%-- <link rel="stylesheet" type="text/css" href="${ctx}/resources/common/css/sales/custcomp/custcomp_pop_contact.css"> --%>
<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />
<title>연락처 리스트</title>
</head>
<body class="body">
<div class="mainDiv">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title" class="title">
		<label class="label_header" >■ 연락처 리스트</label>
	</div>	
	<div class="list_search">
		<form name="searchForm" method="post" action="${ctx}/custcompList">
			<select name="keyfield" class="select">
				<option value="ct_id">고객ID</option>
				<option value="ct_nm">고객명</option>
			</select>
			<input  type="text"   id="search_text" class="inputText" name="keyword"> &nbsp;
			<button type="submit" id="search_btn"  class="search_button">검색</button>
		</form>
	</div>
	
	<div class="custcomp_list_div">
		<table id="custcomp_list_table" class="thFixedtbl" >
			<thead class="thead">
				<tr class="tr_table_fix_header" >
					<th class="thead_th" style="width: 20%;">연락처 ID</th>
					<th class="thead_th" style="width: 17%;">연락처명</th>
					<th class="thead_th" style="width: 20%;">연락처</th>
					<th class="thead_th" style="width: 23%;">이메일</th>
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="contactList" items="${contactList}"> 
					<tr class="up">
						<td class="tbody_tr_td" id="cont_id" style="width: 20%;">${contactList.cont_id}</td>
						<td class="tbody_tr_td" id="cont_nm" style="width: 17%;">${contactList.cont_nm}</td>
						<td class="tbody_tr_td" id="cell_ph" style="width: 20%;">${contactList.cell_ph1}-${contactList.cell_ph2}-${contactList.cell_ph3}</td>		
						<td class="tbody_tr_td" id="email"   style="width: 23%;text-align: left; padding-left: 10px;">${contactList.email1}@${contactList.email2}</td>		
					</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
</div>

</body>
</html>