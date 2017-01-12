<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custpson/custpson_css.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custpson/custpson_tab_css.css" type="text/css"/>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custpson/custpson_js.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>개인고객</title>
</head>
<body>
	<div id="title">
		<div class="caption">■ 고객 > <a href="${ctx}/custpson" class="pcnClick" style="color: blue;">개인고객</a></div>
	</div>
	
	<div class="search_div">
		<label for="s_cust_nm" class="tel_label_list">고객사</label>
		<input type="text" name="s_cust_nm" id="s_cust_nm" class="tel_search" onkeydown="schCustPson(event);" autofocus="autofocus"/>
		<label for="s_email" class="tel_label_list">이메일</label>  
		<input type="text" name="s_email" id="s_email" class="tel_search" onkeydown="schCustPson(event);"/> 
		<label for="s_cell_ph" class="tel_label_list">이동전화번호</label> 
		<input type="text" name="s_cell_ph" id="s_cell_ph" class="tel_search" onkeydown="schCustPson(event);"/>
		<label for="s_iuser_nm" class="tel_label_list">영업담당자</label> 
		<input type="text" name="s_iuser_nm" id="s_iuser_nm" class="tel_search" onkeydown="schCustPson(event);"/>
		<input type="button" value="조회" onclick="schPaging(1);" class="custpson_btn"/>
	</div>
	
	<div id="tableline">
		<table id="cpListTable" class="tabtable">
			<thead>
				<tr>
					<th style="width: 3%"><input type="checkbox" id="allChk"></th>
					<th style="width: 11%">고객명</th>
					<th style="width: 10%">생년월일</th>
					<th style="width: 17%">이메일</th>
					<th style="width: 10%">이동전화번호</th>
					<th style="width: 10%">전화번호</th>
					<th style="width: 8%">개인정보수집</th>
					<th style="width: 8%">마케팅활용</th>
					<th style="width: 8%">영업담당자</th>
					<th style="width: 15%">등록일시</th>
				</tr>
			</thead>
			<tbody id="custTbody">
				<c:forEach var="e" items="${custpson}">
					<tr>
						<td>
							<input type="checkbox" id="cust_id_chk" value="${e.cust_id}" onclick="chkCancel();"/>
						</td>
						<td style="text-align: left; padding-left: 8px;">
							<a href="#" onclick="cpTabFunc('${e.cust_id}', '${e.cust_nm}'); return false" style='color: blue;' class="pcnClick">${e.cust_nm}</a>
						</td>
						<td>${e.birth}</td>
						<td style="text-align: left; padding-left: 8px;">${e.email1}@${e.email2}</td>
						<td>${e.cell_ph1}-${e.cell_ph2}-${e.cell_ph3}</td>
						<td>${e.ph1}-${e.ph2}-${e.ph3}</td>
						<td>${e.cust_info_yn}</td>
						<td>${e.mkt_app_yn}</td>
						<td>${e.iuser_nm}</td>
						<td>${e.fst_reg_dt}</td>
					</tr>
				</c:forEach>
			
				<c:if test="${custpson.size() < 4}">
					<c:forEach begin="0" end="${4-custpson.size()}">
						<tr>
							<th></th>
							<td></td>
							<td></td>
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
	</div>
	
	<div id="pagingDiv">
		<!-- 페이징 처리 -->
		<input type="hidden" id="endPageNum" value="${page.endPageNum}" />
		<c:choose>
			<c:when test="${page.startPageNum == 1 && page.endPageNum == 1}">
				<input type='hidden' id='cpPageNum' value='${cpPageNum}'/>
				<a> ◀ </a><input type='text' id='cpPageInput' readonly='readonly' value='${page.startPageNum}' onkeypress="pageInput(event);"/>
				<span> / </span><a>${page.endPageNum}</a><a> ▶</a>
			</c:when>
			<c:when test="${cpPageNum == page.startPageNum}">
				<input type='hidden' id='cpPageNum' value='${cpPageNum}'/>
				<a>◀</a>
				<input type="text" id="cpPageInput" value="${page.startPageNum}" /><span> / </span>
				<a href="#" style="text-decoration: none;" onclick="paging('${page.endPageNum}');" id="pNum">${page.endPageNum} </a>
				<a href="#" style="text-decoration: none;" onclick="paging('${cpPageNum+1}');" id="pNum">▶</a>
			</c:when>
			<c:when test="${cpPageNum == page.endPageNum}">
				<input type='hidden' id='cpPageNum' value='${cpPageNum}'/>
				<a href="#" style="text-decoration: none;" onclick="paging('${cpPageNum-1}');" id="pNum">◀</a>
				<input type="text" id="cpPageInput" value="${page.endPageNum}" /><span> / </span>
				<a href="#" style="text-decoration: none;" onclick="paging('${page.endPageNum}');" id="pNum">${page.endPageNum}</a>
				<a> ▶</a>
			</c:when>
			<c:otherwise>
				<input type='hidden' id='cpPageNum' value='${cpPageNum}'/>
				<a href="#" style="text-decoration: none;" onclick="paging('${cpPageNum-1}');" id="pNum">◀</a>
				<input type="text" id="cpPageInput" value="${cpPageNum}" /><span> / </span>
				<a href="#" style="text-decoration: none;" onclick="paging('${page.endPageNum}');" id="pNum">${page.endPageNum}</a>
				<a href="#" style="text-decoration: none;" onclick="paging(${cpPageNum+1});" id="pNum"> ▶</a>
			</c:otherwise>
		</c:choose>
	</div>
	
	<div id="contact_button_position">
		<input type="button" value="삭제" style="float: right" onclick="custPsonDel(); return false" class="custpson_btn"/>
	</div>
</body>
</html>

























