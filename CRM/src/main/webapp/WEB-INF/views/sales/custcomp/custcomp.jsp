<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta content="blendTrans(Duration=0.0)" http-equiv="Page-Enter" />
<meta content="blendTrans(Duration=0.0)" http-equiv="Page-Exit" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<!-- 고객사 부분 js파일 -->
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomptab_js.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<title>고객사</title>

</head>   
<body style="overflow: auto;">

	<input type="hidden" id="ctx" 		value="${ctx}"/>
	<input type="hidden" id="page" 		value="${page}"/>
	<input type="hidden" id="ccPageNum" value="${ccPageNum}"/>
	<input type="hidden" id="flg" 		value="${flg}">
	<input type="hidden" id="schAddFlg"   value="${schAddFlg}">
	<input type="hidden" id="count" 	value="">
	<input type="hidden" id="user" 		value="${SessionID}">
	<input type="hidden" id="act_yn" 	value="Y">
	<div id="title"> 
		<div class="caption">
			<label id="listLabel" class="ui header">■ 고객사관리 > 고객사조회</label> 
		</div>
	</div>

	<div class="search_div"  id="search_div" >
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명"   id="sch_cust_nm" name="sch_cust_nm"  value="${sch_cust_nm}" onkeypress="schCustComp(event);">
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사업자번호" id="sch_comp_num" name="sch_comp_num" value="${sch_comp_num}"  maxlength="9" onkeypress="schCustComp(event);"  style='ime-mode:disabled;'>
			<i class="suitcase icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="법인번호"   id="sch_corp_num" name="sch_corp_num" value="${sch_corp_num}"  maxlength="9" onkeypress="schCustComp(event);" style='ime-mode:disabled;'>
			<i class="law icon"></i>
		</div>	
		
			<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
		<input type="button" id="custcomp_search" class="tiny ui blue button" value="조회" onclick="searchBtn('${ccPageNum}');" />
		
	</div>
	<form id="ccListExcelForm" name="ccListExcelForm" method="post"></form>	<!-- action="/custcomp" -->
	
	<form name="delForm" id="delForm" method="post" action="${ctx}/custcompDelete">
		<div id="tableline" class="tableline">
			<input type="hidden" id="order_by" name="order_by" value="${data.order_by}"/>
			<input type="hidden" id="order_sc" name="order_sc" value="${data.order_sc}"/>
			<table id="ccListTable" class="ui sortable celled table" cellspacing="0" >
				<thead>
					<tr>
						<th style="width: 3%; text-align: center;"><input type="checkbox"  id='ccListCheck'/></th>
						<th style="width: 16%" id="tblTh"  onclick="setOrder('cust_nm','${ccPageNum}')"> 고객사명</th>
						<th style="width: 12%"  id="tblTh"  onclick="setOrder('comp_num','${ccPageNum}')">사업자번호</th>
						<th style="width: 12%"  id="tblTh"  onclick="setOrder('corp_num','${ccPageNum}')">법인번호</th>
						<th style="width: 10%" id="tblTh"  onclick="setOrder('rep_ph','${ccPageNum}')">대표전화번호</th>
						<th style="width: 10%" id="tblTh"  onclick="setOrder('sales_scale','${ccPageNum}')">매출규모</th>
						<th style="width: 10%"  id="tblTh"  onclick="setOrder('emp_qty','${ccPageNum}')">직원수</th>
						<th style="width: 14%" id="tblTh"  onclick="setOrder('indst','${ccPageNum}')">산업군</th>
<!-- 						<th style="width: 8%"  id="tblTh" >영업 담당자</th> -->
<!-- 						<th style="width: 15%" id="tblTh" >등록일시</th> -->
					</tr>
				</thead>
				<tbody id="ccListTbody" class="tbody">
					<c:forEach var="cc" items="${ccVOList}">
						<tr>
							<td style="text-align: center;">
								<input type="checkbox" id="custcomp_del" name="custcomp_del" class="cust_check" value="${cc.cust_id}"   onclick="chkCancel();">
							</td>
							<td id="ccListTableNmTd" style="text-align: left; padding-left: 14px;">
								<a href="#" onclick="ccTabFunc('${cc.cust_id}', '${cc.cust_nm}');"  class="cnClick">${cc.cust_nm}</a>
							</td>
							<td style="text-align: center;">${cc.comp_num}</td><!-- 사업자번호 -->
							<td style="text-align: center;">${cc.corp_num}</td><!-- 법인번호 -->
							<td style="text-align: center;">${cc.rep_ph1}-${cc.rep_ph2}-${cc.rep_ph3}</td><!-- 대표전화번호 -->
							<td style="text-align: center;">${cc.sales_scale}</td><!-- 매출규모 -->
							<td style="text-align: right; padding-right: 8px;">${cc.emp_qty}</td><!-- 직원수 -->
							<td style="text-align: center;">${cc.indst}</td><!-- 산업군 -->
<%-- 							<td style="text-align: center;">${cc.iuser_nm}</td><!-- 영업담당자 --> --%>
<%-- 							<td style="text-align: center;">${cc.fst_reg_dt}</td><!-- 등록일시 --> --%>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		
		<div class="bottom_div">
			<div class="functionBtn_div">	
				<input type="button" value="추가" class="tiny ui button" id="addBtn" onclick="custcompInsert();" />
				<input type="button" value="삭제" class="tiny ui blue button" onclick="custcompDelete()" />
				<input type="button" value="삭제된 데이터" class="tiny ui blue button" onclick="custcompDelListbtn()" />
				<input type="button" value="엑셀출력" class="tiny ui blue button" id="exportBtn"  onclick="download_list_Excel('ccListExcelForm');" />	
			</div>
			
			<!-- 페이징 처리 -->
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
		        		<a href="javascript:custCompList(${page.prevPageNum})" class="icon item">
		        			<i class="left chevron icon"></i>
		        		</a>
		    		</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
						<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:custCompList('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:custCompList('${i}');" class="item" >${i}</a>
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
		       			<a href="javascript:custCompList(${page.nextPageNum})" class="icon item">
		       				<i class="right chevron icon"></i>
		       			</a>
		    		</c:when>
				</c:choose>
			</div>
		</div>
	</form>
</body>
</html>