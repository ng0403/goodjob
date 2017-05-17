<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script> --%>

<!-- 페이지 공통 js파일 -->
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/common/listSort.js"></script> --%>
<!-- 고객사 부분 js파일 -->
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script>

<!-- 새로운 공통 css 파일 -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<!-- 기존 공통 css 파일 -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<!-- 고객사부분 css파일 -->
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_css.css" type="text/css" /> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/table.js"></script> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/table.css" type="text/css" /> --%>

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
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 고객 > 고객사</h3>
<%-- 			>  <a href="${ctx}/custcomp" class="cnClick" style="color: blue;">기존고객</a> --%>
		</div>
	</div>

	<div class="search_div"  id="search_div" >
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명"  id="sch_cust_nm" name="sch_cust_nm" onkeypress="schCustComp(event);">
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사업자번호" id="sch_comp_num" name="sch_comp_num"  maxlength="9" onkeypress="schCustComp(event);"  style='ime-mode:disabled;'>
			<i class="suitcase icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="법인번호"  id="sch_corp_num" name="sch_corp_num"  maxlength="9" onkeypress="schCustComp(event);" style='ime-mode:disabled;'>
			<i class="law icon"></i>
		</div>	
<!-- 		<div class="ui left icon input">	 -->
<!-- 			<input type="text" placeholder="영업담당자" id="sch_iuser_nm" name="sch_iuser_nm" onkeypress="schCustComp(event);" > -->
<!-- 			<i class="user icon"></i> -->
<!-- 		</div>	 -->
			
<!-- 			<label for="sch_cust_nm" class="tel_label_list">고객사명</label> -->
<!-- 				<input type="text" class="inp_search" autofocus="autofocus" id="sch_cust_nm" name="sch_cust_nm" onkeydown="schCustComp(event);"/>  -->
<!-- 			<label for="sch_comp_num" class="tel_label_list">사업자번호</label>  -->
<!-- 				<input type="text" class="inp_search" id="sch_comp_num" name="sch_comp_num"  maxlength="9" onkeydown="schCustComp(event);" onkeyup='removeChar(event);' style='ime-mode:disabled;'/>  -->
<!-- 			<label for="sch_corp_num" class="tel_label_list">법인번호</label>  -->
<!-- 				<input type="text" class="inp_search" id="sch_corp_num" name="sch_corp_num"  maxlength="9" onkeydown="schCustComp(event);" onkeyup='removeChar(event);' style='ime-mode:disabled;'/>  -->
<!-- 			<label for="sch_iuser_nm" class="tel_label_list">영업담당자</label>  -->
<!-- 				<input type="text" class="inp_search" id="sch_iuser_nm" name="sch_iuser_nm" onkeydown="schCustComp(event);"/> -->
			
			<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
		
		<input type="button" id="custcomp_search" class="tiny ui orange button" value="조회" onclick="searchBtn('${pageNum}');" />
		
<!-- 			<select name="ssales_actvy_stat_cd" id="ssales_actvy_stat_cd" class="tab_select" onkeydown="custcompSearchEnter(event);"> -->
<!-- 				<option value="all" style="text-align: center;">전체</option> -->
<!-- 				<option value="cust_nm" style="text-align: center;">고객사명</option> -->
<!-- 				<option value="comp_num" style="text-align: center;">사업자번호</option> -->
<!-- 				<option value="corp_num" style="text-align: center;">법인번호</option> -->
<!-- 				<option value="iuser_nm" style="text-align: center;">영업담당자</option> -->
<!-- 			</select> -->
			
<!-- 			<input type="text" id="seachInput" name="seachCustcompSaleInput" placeholder="검색어를 입력해주세요"> -->
<!-- 			<input type="button" id="search_btn" value="조회" class="custcomp_bt" onclick="schCustcompPaging(1);"/> -->
	</div>
	
	<form name="delForm" id="delForm" method="post" action="${ctx}/custcompDelete">
		<div id="tableline" class="tablewh">
			<table id="ccListTable" class="ui sortable celled table" cellspacing="0" >
				<thead>
					<tr>
						<th style="width: 3%; text-align: center;"><input type="checkbox"  id='ccListCheck'/></th>
						<th style="width: 16%" id="tblTh" > 기업명</th>
						<th style="width: 8%"  id="tblTh" >사업자번호</th>
						<th style="width: 8%"  id="tblTh" >법인번호</th>
						<th style="width: 10%" id="tblTh" >대표전화번호</th>
						<th style="width: 10%" id="tblTh" >매출규모</th>
						<th style="width: 8%"  id="tblTh" >직원수</th>
						<th style="width: 14%" id="tblTh" >산업군</th>
<!-- 						<th style="width: 8%"  id="tblTh" >영업 담당자</th> -->
						<th style="width: 15%" id="tblTh" >등록일시</th>
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
							<td style="text-align: center;">${cc.fst_reg_dt}</td><!-- 등록일시 -->
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		
		<div class="bottom_div">
			<div class="functionBtn_div">	
				<input type="button" value="추가" class="tiny tiny ui orange button" onclick="custcompInsertForm();" />
				<input type="button" value="삭제" class="tiny tiny ui orange button" onclick="custcompDelete()" />
<!-- 				<input type="button" value="엑셀" class="tiny ui orange button" id="exportBtn"   onclick=""  />	 -->
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