<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<!-- 고객사 부분 js파일 -->
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcompDelList.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcompDelDetail.js"></script>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<!-- 새로운 공통 css 파일 -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<title>고객사</title>
<script>
$(function() {
	$('table').tablesort();
});		   	
</script>

</head>   
<body style="overflow: auto;">

	<input type="hidden" id="ctx" 		value="${ctx}"/>
	<input type="hidden" id="flg" 		value="${flg}">
	<input type="hidden" id="schAddFlg" value="${schAddFlg}">
	<input type="hidden" id="count" 	value="">
	<input type="hidden" id="act_yn" 	value="N">
	<div id="title">
		<div class="caption">
			<label id="listLabel" class="ui header">■ 고객 > 
				<a href="/custcomp" style="font-size: 14pt; text-decoration: none; ">고객사관리</a> >
				삭제된 데이터</label> 
		</div>
	</div>

	<div class="search_div"  id="search_div" >
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명"  id="sch_cust_nm" name="sch_cust_nm" onkeypress="schDelCustComp(event);">
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사업자번호" id="sch_comp_num" name="sch_comp_num"  maxlength="9" onkeypress="schDelCustComp(event);"  style='ime-mode:disabled;'>
			<i class="suitcase icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="법인번호"  id="sch_corp_num" name="sch_corp_num"  maxlength="9" onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="law icon"></i>
		</div>	
		
			<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
		<input type="button" id="custcomp_search" class="tiny ui blue button" value="조회" onclick="searchDelBtn('${ccPageNum}');" />
		
	</div>
	
	<form name="delForm" id="delForm" method="post" action="${ctx}/custcompDelete">
		<div id="tableline" class="tableline">
			<input type="hidden" id="order_by" name="order_by" value="${data.order_by}"/>
			<input type="hidden" id="order_sc" name="order_sc" value="${data.order_sc}"/>
			<table id="ccListTable" class="ui sortable celled table" cellspacing="0" >
				<thead>
					<tr>
						<th style="width: 14%" id="tblTh" onclick="setOrder('cust_nm','${ccPageNum}')"> 고객사명</th>
						<th style="width: 8%"  id="tblTh" onclick="setOrder('comp_num','${ccPageNum}')">사업자번호</th>
						<th style="width: 8%"  id="tblTh" onclick="setOrder('corp_num','${ccPageNum}')">법인번호</th>
						<th style="width: 8%" id="tblTh" onclick="setOrder('rep_ph','${ccPageNum}')">대표전화번호</th>
						<th style="width: 8%" id="tblTh" onclick="setOrder('sales_scale','${ccPageNum}')">매출규모</th>
						<th style="width: 5%"  id="tblTh" onclick="setOrder('emp_qty','${ccPageNum}')">직원수</th>
						<th style="width: 10%" id="tblTh" onclick="setOrder('indst','${ccPageNum}')">산업군</th>
						<th style="width: 7%" id="tblTh" onclick="setOrder('fin_mdfy_id','${ccPageNum}')">최종 수정자</th>
						<th style="width: 10%" id="tblTh" onclick="setOrder('fin_mdfy_dt','${ccPageNum}')">최종 수정일시</th>
<!-- 						<th style="width: 7%" id="tblTh" >등록자</th> -->
<!-- 						<th style="width: 10%" id="tblTh" >등록일시</th> -->
					</tr>
				</thead>
				<tbody id="ccDelListTbody" class="tbody">
					<c:forEach var="cc" items="${ccVOList}">
						<tr>
							<td id="ccListTableNmTd" style="text-align: left; padding-left: 14px;">
								<a href="#" onclick="ccDelDetail('${cc.cust_id}', '${cc.cust_nm}');"  class="cnClick">${cc.cust_nm}</a>
							</td>
							<td style="text-align: center;">${cc.comp_num}</td><!-- 사업자번호 -->
							<td style="text-align: center;">${cc.corp_num}</td><!-- 법인번호 -->
							<td style="text-align: center;">${cc.rep_ph1}-${cc.rep_ph2}-${cc.rep_ph3}</td><!-- 대표전화번호 -->
							<td style="text-align: center;">${cc.sales_scale}</td><!-- 매출규모 -->
							<td style="text-align: right; padding-right: 8px;">${cc.emp_qty}</td><!-- 직원수 -->
							<td style="text-align: center;">${cc.indst}</td><!-- 산업군 -->
							<td style="text-align: center;">${cc.fin_mdfy_id}</td><!-- 최종 수정자 -->
							<td style="text-align: center;">${cc.fin_mdfy_dt}</td><!-- 최종 수정일시 -->
<%-- 							<td style="text-align: center;">${cc.fst_reg_id}</td><!-- 등록자 --> --%>
<%-- 							<td style="text-align: center;">${cc.fst_reg_dt}</td><!-- 등록일시 --> --%>
						</tr>
					</c:forEach>
				</tbody>
			</table>
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
	</form>
</body>
</html>