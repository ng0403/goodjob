<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
 
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />	

<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contact_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contactTab.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/sales/contact/contactList.js"></script> 

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script> 
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> 
  

<script>
   $(function() {
      $('table').tablesort();
   });            
</script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

 
<title>연락처</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;">■ 고객 > 연락처</h3> 
		</div>
	</div>
 
	
	<div class="search_div" id = "search_div">
	<div class="ui left icon input">
			<input type="text" placeholder="이름" id="cont_nm1" name="cont_nm" onkeydown="contactSearchEnter(event);">
			<i class="user icon"></i>
	</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="이메일" id="email" name="email" onkeydown="contactSearchEnter(event);">
			<i class="mail icon"></i>
	</div>
	<div class="ui left icon input">
			<input type="text" placeholder="이동전화번호" id="ph" name="ph" onkeydown="contactSearchEnter(event);">
			<i class="mobile icon"></i>
	</div>	
 	    	<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>		
	 <button id="search_btn" type="submit" class="tiny ui orange button" onclick="searchAcnkEvent(1,'');">조회</button> 
	    
	</div>
	
	<div class="initialSerach">
		<input type="hidden" id="acnk">
		  <table id="initialtable">
			  <tr style="height: 5%; text-align:center">
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
	
	<div>
		<table id="goaltable" class="ui sortable celled table">
		<thead>
		<tr style="text-align:center">
			<th style="width:3%"><input id="callCheck" type="checkbox" onclick="callAllChk(this);"/></th>
			<th style="width:20%;">회사명</th> 
			<th style="width:20%;">이름</th>
			<th style="width:20%;">이메일</th>
			<th style="width:10%;">전화번호</th>
			<th style="width:10%;">이동전화번호</th>
 			<th style="width:10%;">등록일시</th>
		</tr>
		</thead>
		<tbody id="call_list_tbody" class="tbody">
		<c:forEach var="contactList" items="${contactList}">
 		<tr>
			<td style="text-align:center"><input type="checkbox" id="call_chek" class="call_chek" id="call_del" name="call_del" value="${contactList.cont_id}" onclick="callChkCancel();"></td>
			<td style="width:20%; text-align: left; padding-left:5px;">${contactList.company_nm}</td>
			<td style="width:20%; text-align: left; padding-left:5px;" ><a href='#' style="color:black" onclick="contactDetailClick('${contactList.cont_id}')">${contactList.cont_nm}</a></td>
 			<td style="width:20%; text-align: left; padding-left:5px;">${contactList.email1}@${contactList.email2}</td>
			<td style="width:10%; text-align: center;">${contactList.ph1}-${contactList.ph2}-${contactList.ph3}</td>
			<td style="width:10%; text-align: center;">${contactList.cell_ph1}-${contactList.cell_ph2}-${contactList.cell_ph3}</td>
 			<td style="width:10%; text-align:center;"><fmt:formatDate value="${contactList.fst_reg_dt}" type="time" pattern="yyyy-MM-dd HH:mm"/></td>
		</tr>
		</c:forEach>
		</tbody>
		</table>
		</div>
		<div class="bottom_div">
	       <div class="functionBtn_div" id="btn_1">
	        <input type="button" class="tiny ui orange button" id="contactAdd_bt"  value="추가" onclick="contactAddp();"/>
			<input type="button" class="tiny ui orange button" id="call_delete" value="삭제" onclick="callCustKeyDelete();">
	    </div> 
	     <div class="functionBtn_div" id="btn_2" style="display:none">
	 	    <input type="button" id="contactsave" value="저장" class="tiny ui orange button" onclick="contactInsert();"/>
			<input type="button" class="tiny ui orange button" id="call_delete" value="삭제" onclick="callCustKeyDelete();">
	    </div> 
	 
	     <div id="pageSpace" class="ui right floated pagination menu">
				<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
				<input type="hidden" id="ccPageNum" value="${ccPageNum}">
				<c:choose>
					<c:when test="${ccPageNum eq page.firstPageCount}">
						<a class="icon item">
	        				<i class="left chevron icon"></i>
	        			</a>	
		    		</c:when>
					<c:when test="${ccPageNum ne page.firstPageCount}">
		        		<a href="javascript:contactPaging(${page.prevPageNum})" class="icon item">
		        			<i class="left chevron icon"></i>
		        		</a>
		    		</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
						<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:contactPaging('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:contactPaging('${i}');" class="item" >${i}</a>
						</c:otherwise>
					</c:choose>
				</c:forEach>
				<c:choose>
					<c:when test="${ccPageNum eq page.totalPageCount}">
							<a class="icon item">
		        				<i class="right chevron icon"></i>
		        			</a>	
		    		</c:when>
					<c:when test="${ccPageNum ne page.totalPageCount}">
		       			<a href="javascript:contactPaging(${page.nextPageNum})" class="icon item">
		       				<i class="right chevron icon"></i>
		       			</a>
		    		</c:when>
				</c:choose>
			</div>
	
	</div>
	
	
	
 
</body>
</html>