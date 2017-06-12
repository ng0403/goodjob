<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/custcomp_list_pop.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/contJs.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/cont/cont_pop.js"></script>



<script type="text/javascript" src="${ctx}/resources/common/js/sales/keyman/keymanList.js"></script> 


<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />


<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>연락처 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 고객사 리스트</div>
		
		<div class="custcomp_list_search">
			<form name="searchForm" method="post" action="${ctx}/custcompList">
				<select name="keyfield">
					<option value="ct_id">고객ID</option>
					<option value="ct_nm">고객명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="custcomp_list_txt" style=" background: #fff;"> &nbsp;
				<button id="search_btn" type="submit" class="custcomp_list_bt">검색</button>
			</form>
		</div>
	
	<div class="custcomp_list_div" >
		<table id="custcomp_list_table" class="thFixedtbl">
			<thead class="thead">
				<tr class="tr_table_fix_header" >
					<td style="width:30%;">이름</td>
					<td style="width:30%;">회사명</td>
 					<td style="width:25%;">연락처</td>
					<td style="width:20%;">이메일</td>
				</tr>
			</thead>
			<tbody class="tbody">
				<c:forEach var="contactList" items="${contactList}"> 
				<tr onclick="contactNmSelect('${contactList.cont_id}','${contactList.cont_nm}')" class="up">
					<td style="width:25%; cursor: pointer;" id="cont_nm">${contactList.cont_nm}</td>
					<td style="width:25%;" id="cont_nm">${contactList.company_nm}</td>
 					<td style="width:25%;">${contactList.cell_ph1}-${contactList.cell_ph2}-${contactList.cell_ph3}</td>		
					<td style="width:25%;">${contactList.email1}@${contactList.email2}</td>		 
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>