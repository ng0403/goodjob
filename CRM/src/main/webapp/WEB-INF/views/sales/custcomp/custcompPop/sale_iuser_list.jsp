<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptCust_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custPosPop.js"></script>

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />
<title>고객사 리스트</title>
</head>
<body class="body">

<div class="mainDiv">
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="iuserType" value="${iuserType}"/>
	<!-- class 추가 -->
	<div id="title" class="title">
		<!-- <h3> -> <label>로 수정 -->
		<label class="label_header" >■ 직원 리스트</label>
	</div>
	<div class="list_search">
		<form name="searchForm" method="get" action="">			
			<!-- class 추가 -->				
			<select name="keyfield" class="select">
				<option value="ct_id">직원ID</option>
				<option value="ct_nm">직원명</option>
			</select>
			<input  type="text"   id="search_text" class="inputText" name="keyword"> &nbsp;
			<button type="submit" id="search_btn"  class="search_button">검색</button>
		</form>
	</div>
	
	<div class="custcomp_iuser_list_div">
		<!-- 테이블 clsaa명 입력 -->
		<table class="thFixedtbl" id="custcomp_iuser_list_table" >
			<!-- class 추가 -->
			<thead class="thead">
				<!-- class 추가 -->
				<tr class="tr_table_fix_header" >
					<th class="thead_th">직원ID</th>
					<th class="thead_th">직원명</th>
					<th class="thead_th">부서명</th>
					<th class="thead_th">연락처</th>
					<th class="thead_th">이메일</th>
				</tr>
			</thead>
			<!-- class 추가 -->
			<tbody class="tbody">
				<c:forEach var="iuserList" items="${iuserList}"> 
				<!-- class 추가 -->
				<tr class="up">
					<!-- class 추가 -->
					<td class="tbody_tr_td" id="iuser_id">${iuserList.iuser_id}</td>
					<td class="tbody_tr_td" id="iuser_nm">${iuserList.iuser_nm}</td>
					<td class="tbody_tr_td" id="org_nm"  >${iuserList.org_nm}</td>
					<td class="tbody_tr_td" id="cell_ph" >${iuserList.cell_ph1}-${iuserList.cell_ph2}-${iuserList.cell_ph3}</td>
					<td class="tbody_tr_td" id="email" style="text-align: left; padding-left: 8px;">${iuserList.email1}@${iuserList.email2}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>	
</div>

</body>
</html>