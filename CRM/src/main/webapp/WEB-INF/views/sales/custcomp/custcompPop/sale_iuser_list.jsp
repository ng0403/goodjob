<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/custcomp_list_pop.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/oppt/opptCust_pop.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/saleIuserList.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custPosPop.js"></script>
<title>고객사 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<input type="hidden" id="iuserType" value="${iuserType}"/>
	<div id="title">
		<div class="caption">■ 직원 리스트</div>
		
			<form name="searchForm" method="get" action="">			
				<select name="keyfield">
					<option value="ct_id">직원ID</option>
					<option value="ct_nm">직원명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="custcomp_list_txt"> &nbsp;
				<button id="search_btn" type="submit" class="custcomp_list_bt">검색</button>
			</form>
		</div>
	
	
	<div class="custcomp_iuser_list_div">
		<table id="custcomp_iuser_list_table">
			<thead>
				<tr>
					<td style="width:25%;">직원ID</td>
					<td style="width:25%;">직원명</td>
					<td style="width:25%;">연락처</td>
					<td style="width:25%;">이메일</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="iuserList" items="${iuserList}"> 
				<tr>
					<td style="width:25%;" id="iuser_id">${iuserList.iuser_id}</td>
					<td style="width:25%;" id="iuser_nm">${iuserList.iuser_nm}</td>
					<td style="width:25%;" id="cell_ph">${iuserList.cell_ph1} - ${iuserList.cell_ph2} - ${iuserList.cell_ph3}</td>
					<td style="width:25%;" id="email">${iuserList.email1}@${iuserList.email2}</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>