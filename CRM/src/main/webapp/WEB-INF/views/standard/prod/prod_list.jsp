<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/prod/prod.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_detail.js"></script>
<script type="text/javascript">
$("#navisub11").show();
$("#naviprod").css("font-weight", "bold");
</script>
<title>상품(서비스)</title>
</head>
<body>
	<form id="prod_detail">
		<input type="hidden" name="prod_id" id="prod_id">
	</form>
	<div id="title">
		<div class="caption">■ 상품(서비스)</div>
	</div>
	<div class="search_div">
		<label for="prod_nm" class="prod_label_search">상품(서비스)명</label>
		<input type="text" id="sprod_nm" class="sprod_nm">
	    <label for="prod_div" class="prod_label_search">구분</label>
		<select name="code" id="scode" class="code">
			<c:forEach var="pscl" items="${prodServicecCodeList}">
				<option value="${pscl.code}">${pscl.cd_nm}</option>
			</c:forEach>
		</select>
		<input type="button" id="prod_search" class="btn-success-tel" value="조회" onclick="prodSearch(1);" />
<!-- 			    <button id="search_btn" type="submit" class="act_bt">조회</button>  -->
	</div>
	<div id="contact_button_position">
			<input type="button" id="prodAddBtn" class="btn-success-tel" value="추가"/>
			<input type="button" id="estimDeleteBtn" class="btn-success-tel" value="삭제">	
	</div>
	  	
	<div id="act_list_div">
		<table id="act_list_table" class="tabtable">
			<thead>
				<tr>
					<th><input type="checkbox"  id='prodListCheck'/></th>
					<td>상품(서비스)명</td>
					<td >구분</td>
					<td >판매가</td>
					<td >카테고리</td>
					<td >등록자</td>
					<td >등록일시</td>
				</tr>
			</thead>
			<tbody id="prod_list">
				<c:forEach items="${prodList}" var="prodList">
					<tr>
						<th><input type="checkbox"></th>
						<td id="list_prod_id">
							<a class="list_prod_id" href="javascript:prodIdClick('${prodList.prod_id}');">
								${prodList.prod_nm}
							</a>
						</td>
						<td>${prodList.cd_nm}</td>
						<td>${prodList.prod_price}</td>
						<td>${prodList.cate}</td>
						<td>${prodList.fst_reg_id_nm}</td>
						<td>
							<fmt:formatDate value="${prodList.fst_reg_dt}" type="time" pattern="yyyy-MM-dd HH:mm:ss"/></td>
							<%-- <td >${prodList.fst_reg_dt}</td> --%>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
				
	<!-- 페이징 처리 --> 
	<div id="pageSpace">
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
		<input type="hidden" id="startPageNum" value="${page.startPageNum}"/>
		<input type="hidden" id="prodPageNum" value="${prodPageNum}"/>
			<c:choose>
				<c:when test="${page.startPageNum == 1 && page.endPageNum == 1}">
					<input type='hidden' id='endPageNum' value="${page.endPageNum}"/>
					<a> ◀ </a>
					<input type='text' id='prodPageInput' readonly='readonly' value="${page.startPageNum }"
					 onkeypress="pageInput(event);" class="prod_page_txt"/>
					<label> / ${page.endPageNum}▶ </label>				
				</c:when>
				<c:when test="${prodPageNum == page.startPageNum && prodPageNum != page.endPageNum}">
					 <a id="pNum"  style="text-decoration: none;"> ◀ </a>
					 <input type="text" id="prodPageInput" size="1px" value="${page.startPageNum}" class="prod_page_txt" /><a> / </a> 
					 <a href="#" onclick="prodPaging(${page.endPageNum});" id="pNum" style="text-decoration: none;">${page.endPageNum}</a>
					 <a href="#" onclick="prodPaging(${prodPageNum+1});" id="pNum" style="text-decoration: none;"> ▶ </a>
				</c:when>
				<c:when test="${prodPageNum == page.endPageNum}">
					<a href="#" onclick="prodPaging(${prodPageNum-1});" id="pNum" style="text-decoration: none;"> ◀ </a>
					<input type="text" id="prodPageInput" size="1px" value="${page.endPageNum}" class="prod_page_txt" style="text-decoration: none;"/><a> / </a> 
					<a>${page.endPageNum}</a>
					<a id="pNum" style="text-decoration: none;"> ▶ </a>
				</c:when>
				<c:otherwise>
					<a href="#" onclick="prodPaging('${prodPageNum-1}')" id="pNum" > ◀ </a>
					<input type="text" id="prodPageInput" class="prod_page_txt" value="${prodPageNum}" onkeypress="pageInput(event);"/>  
					<a href="#" onclick="prodPaging('${page.endPageNum}')" id="pNum"> / ${page.endPageNum}</a>
					<a href="#" onclick="prodPaging('${prodPageNum+1}')" id="pNum"> ▶ </a>
				</c:otherwise>
			</c:choose>
	

<%-- 
	<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
	<c:choose>
	<c:when test="${prodPageNum == page.startPageNum}">
		<a id="pNum">◀</a>&nbsp;
		<input type="text" id="prodPageInput" class="prod_page_txt" value="${page.startPageNum}"/> / 
		<a  href="${ctx}/prod?prodPageNum=${page.endPageNum}" id="pNum" >${page.endPageNum}</a>&nbsp;
		<a href="${ctx}/prod?prodPageNum=${prodPageNum+1}" id="pNum">▶</a>
	</c:when>
	<c:when test="${prodPageNum == page.endPageNum}">
		<a href="${ctx}/prod?prodPageNum=${prodPageNum-1}" id="pNum">◀</a>&nbsp;
		<input type="text" id="prodPageInput" class="prod_page_txt" value="${page.endPageNum}"/> / 
		<a  href="${ctx}/prod?prodPageNum=${page.endPageNum}" id="pNum">${page.endPageNum}</a>&nbsp;
		<a id="pNum">▶</a>
	</c:when>
	<c:otherwise>
		<a href="${ctx}/prod?pageNum=${prodPageNum-1}" id="pNum" >◀</a>&nbsp;
		<input type="text" id="prodPageInput" class="prod_page_txt" value="${prodPageNum}"/> / 
		<a  href="${ctx}/prod?prodPageNum=${page.endPageNum}" id="pNum">${page.endPageNum}</a>&nbsp;
		<a href="${ctx}/prod?prodPageNum=${prodPageNum+1}" id="pNum">▶</a>
	</c:otherwise>
	</c:choose> --%>
	<!-- 페이징 처리 -->	
	</div>
<!-- <div class="act_tab_bt_div">
					<input type="button" id="prodSaveBtn" class="act_bt_flag" value="저장"/>
					<input type="button" id="prodCancelBtn" class="act_bt" value="취소"/>
					<input type="button" id="prodModifyBtn" class="act_bt" value="편집"/>
					<input type="button" id="prodAddBtn" class="act_bt" value="추가"/>
</div> -->
</body>
</html>