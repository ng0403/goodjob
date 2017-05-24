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
<body>

<div>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="iuserType" value="${iuserType}"/>
	<div id="title">
		<!-- <h3> -> <label>로 수정 -->
		<label class="ui header" style="background: #fff;">■ 직원 리스트</label>
		<form name="searchForm" method="get" action="">			
			<select name="keyfield">
				<option value="ct_id">직원ID</option>
				<option value="ct_nm">직원명</option>
			</select>
			<input id="search_text" type="text" name="keyword" class="inputText" style="background: #fff; width: 20%;"> &nbsp;
			<button id="search_btn" type="submit" class="tiny ui button" style="margin-bottom: 10px;">검색</button>
		</form>
	</div>
	
	<div class="custcomp_iuser_list_div">
		<!-- 테이블 clsaa명 입력 -->
		<table class="thFixedtbl" id="custcomp_iuser_list_table" >
			<thead>
				<tr class="tr_table_fix_header" >
					<th >직원ID</th>
					<th >직원명</th>
					<th >부서명</th>
					<th >연락처</th>
					<th >이메일</th>
				</tr>
			</thead>
			<tbody >
				<c:forEach var="iuserList" items="${iuserList}"> 
				<tr class="up">
					<td id="iuser_id" >${iuserList.iuser_id}</td>
					<td id="iuser_nm">${iuserList.iuser_nm}</td>
					<td id="org_nm">${iuserList.org_nm}</td>
					<td id="cell_ph">${iuserList.cell_ph1} - ${iuserList.cell_ph2} - ${iuserList.cell_ph3}</td>
					<td id="email">${iuserList.email1}@${iuserList.email2}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>	
</div>

</body>
</html>