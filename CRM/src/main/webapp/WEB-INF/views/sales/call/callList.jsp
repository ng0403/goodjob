<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/call/callList.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	

<title>연락처</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<div class="caption">■ 연락처</div>
	</div>
	
	<div class="search_div">
	    <label for="inputEmail1" class="tel_label_list">이름</label>
	    <input type="text" name="call_name" id="call_name" class="tel_search" autofocus="autofocus" onkeydown="callSearchEnter(event);">
	    <label for="inputPassword1" class="tel_label_list">이메일</label>
	    <input type="email" name="call_email" id="call_email"  class="tel_search" onkeydown="callSearchEnter(event);">
	    <label for="inputPassword1" class="tel_label_list">이동전화번호</label>
	    <input type="text" name="call_tel" id="call_tel" class="tel_search" placeholder="" onkeydown="callSearchEnter(event);">
	    <label for="inputPassword1" class="tel_label_list">영업담당자</label>
	    <input type="text" name="call_iuser_nm" id="call_iuser_nm" class="tel_search" onkeydown="callSearchEnter(event);">
	    <button id="search_btn" type="submit" class="call_bt" onclick="searchAcnkEvent(1,'');">조회</button> 
	</div>
	<div class="initialSerach">
		<input type="hidden" id="acnk">
		  <table id="initialtable">
			  <tr style="height: 5%;">
			  	<td><a onclick="searchAcnkEvent(1, '전체');">전체</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㄱ');">ㄱ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㄴ');">ㄴ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㄷ');">ㄷ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㄹ');">ㄹ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅁ');">ㅁ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅂ');">ㅂ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅅ');">ㅅ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅇ');">ㅇ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅈ');">ㅈ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅊ');">ㅊ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅋ');">ㅋ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅌ');">ㅌ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅍ');">ㅍ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, 'ㅎ');">ㅎ</a></td>
			  	<td><a onclick="searchAcnkEvent(1, '미분류');">미분류</a></td>
			  </tr>
		  </table>
	</div>
	
	<div id="tableline">
		<table id="goaltable">
		<thead>
		<tr>
			<th><input id="callCheck" type="checkbox" onclick="callAllChk(this);"/></th>
			<td style="width:10%;">이름</td>
			<td style="width:10%;">구분</td>
			<td style="width:10%;">직급</td>
			<td style="width:10%;">회사명</td>
			<td style="width:15%;">이메일</td>
			<td style="width:10%;">전화번호</td>
			<td style="width:10%;">이동전화번호</td>
			<td style="width:10%;">담당자</td>
			<td style="width:15%;">등록일시</td>
		</tr>
		</thead>
		<tbody id="call_list_tbody">
		<c:forEach var="callList" items="${callList}">
		<tr>
			<th><input type="checkbox" id="call_chek" class="call_chek" name="call_del" value="${callList.call_id}" onclick="callChkCancel();"></th>
			<td style="width:10%; text-align: left; padding-left:5px;" onclick="callTabFunc('${callList.call_id}','${callList.cust_div_nm}')"><input type="hidden" value="${callList.call_id}"><input type="hidden" value="${callList.cust_div_nm}">
			<a style="color: blue; cursor: pointer;" class="callClick">${callList.call_nm}</a></td>
			<td style="width:10%; text-align: left; padding-left:5px;">${callList.cust_div_nm}</td>
			<td style="width:10%; text-align: center;">${callList.pos_nm}</td>
			<td style="width:10%; text-align: left; padding-left:5px;">${callList.comp_nm}</td>
			<td style="width:15%; text-align: left; padding-left:5px;">${callList.email1}@${callList.email2}</td>
			<td style="width:10%; text-align: center;">${callList.ph1}-${callList.ph2}-${callList.ph3}</td>
			<td style="width:10%; text-align: center;">${callList.cell_phone1}-${callList.cell_phone2}-${callList.cell_phone3}</td>
			<td style="width:10%; text-align: center;">${callList.iuser_id_nm}</td>
			<td style="width:15%; text-align:center;"><fmt:formatDate value="${callList.fst_reg_dt}" type="time" pattern="yyyy-MM-dd HH:mm"/></td>
		</tr>
		</c:forEach>
		</tbody>
		</table>
	</div>
	
	<div id="pager" class="call_page_div">
		<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
		<input type="hidden" id="callPageNum" value="${callPageNum}"/>
		<c:choose>
		<c:when test="${callPageNum == page.startPageNum}">
			<a style="text-decoration: none;">◀</a>
			<input type="text" id="callPageInput" class="call_page_txt" value="${page.startPageNum}" onkeypress="pageInputCall(event);"/>  
			<a href="#" onclick="callPaging('${page.endPageNum}')" style='text-decoration: none;'>/ ${page.endPageNum}</a>
			<a href="#" onclick="callPaging('${callPageNum+1}')" style='text-decoration: none;'>▶</a>
		</c:when>
		<c:when test="${callPageNum == page.endPageNum}">
			<a href="#" onclick="callPaging('${callPageNum-1}')" style="text-decoration: none;">◀</a>
			<input type="text" id="callPageInput" class="call_page_txt" value="${page.endPageNum}" onkeypress="pageInputCall(event);"/> 
			<a  href="#" onclick="callPaging('${page.endPageNum}')" style='text-decoration: none;'>/ ${page.endPageNum}</a>
			<a style="text-decoration: none;">▶</a>
		</c:when>
		<c:otherwise>
			<a href="#" onclick="callPaging('${callPageNum-1}')" style="text-decoration: none;">◀</a>
			<input type="text" id="callPageInput" class="call_page_txt" value="${callPageNum}" onkeypress="pageInputCall(event);"/>
			<a href="#" onclick="callPaging('${page.endPageNum}')" style='text-decoration: none;'>/ ${page.endPageNum}</a>
			<a href="#" onclick="callPaging('${callPageNum+1}')" style="text-decoration: none;">▶</a>
		</c:otherwise>
		</c:choose>
	</div>		
		
	<div id="contact_button_position">
			<input type="button" class="call_bt" id="call_delete" value="삭제" onclick="callCustKeyDelete();">
	</div>
</body>
</html>