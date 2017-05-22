<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_list_pop.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_pop.js"></script>	
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>카테고리 리스트</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 카테고리 리스트</div>
		
		<div class="act_oppt_search">
			<form name="searchForm" method="post" action="${ctx}/actOpptList">
				<select name="keyfield">
				    <option value="oppt_id">카테고리ID</option>
					<option value="oppt_nm">카테고리명</option>
				</select>
				<input id="search_text" type="text" name="keyword" class="inputText" style="background: white;"> &nbsp;
				<button id="search_btn" type="submit" class="tiny ui orange button">검색</button>
			</form>
		</div>
	
	<div class="act_oppt_list_div">
		<table id="act_oppt_list_table" class="ui celled table">
			<thead>
				<tr>
					<td style="width: 233px;">카테고리ID</td>
					<td style="width: 232px;">카테고리명</td>
					<td style="width: 540px;">내용</td>
					<!-- <td style="width:10%;">등록일시</td> -->
					
				</tr>
			</thead>
			<tbody>
				<c:forEach var="prodCateList" items="${prodCateList}"> 
				<tr>
					<td style="width:23%;" id="cate_id">${prodCateList.cate_id}</td>
					<td style="width:23%;" id="cate_nm">${prodCateList.cate_nm}</td>
					<td style="width:50%;">${prodCateList.cate_dtl_cont}</td>
					<%-- <td style="width:10%;"><fmt:formatDate value="${actOpptList.fst_reg_dt}" pattern="yyyy-MM-dd"/></td> --%>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</div>
	</div>

</body>
</html>