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
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custcomp_js.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<title>기존고객</title>

</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}"/>
	<div id="title">
		<div class="caption">■ 고객 > 기존고객
<%-- 			>  <a href="${ctx}/custcomp" class="cnClick" style="color: blue;">기존고객</a> --%>
		</div>
	</div>
	
	<div class="search_div">
<!-- 		<label for="sch_cust_nm" class="tel_label_list">고객사명</label> -->
<!-- 		<input type="text" class="tel_search" autofocus="autofocus" id="sch_cust_nm" name="sch_cust_nm" onkeydown="schCustComp(event);"/>  -->
<!-- 		<label for="sch_comp_num" class="tel_label_list">사업자번호</label>  -->
<!-- 		<input type="text" class="tel_search" id="sch_comp_num" name="sch_comp_num"  maxlength="9" onkeydown="schCustComp(event);" onkeyup='removeChar(event);' style='ime-mode:disabled;'/>  -->
<!-- 		<label for="sch_corp_num" class="tel_label_list">법인번호</label>  -->
<!-- 		<input type="text" class="tel_search" id="sch_corp_num" name="sch_corp_num"  maxlength="9" onkeydown="schCustComp(event);" onkeyup='removeChar(event);' style='ime-mode:disabled;'/>  -->
<!-- 		<label for="sch_iuser_nm" class="tel_label_list">영업담당자</label>  -->
<!-- 		<input type="text" class="tel_search" id="sch_iuser_nm" name="sch_iuser_nm" onkeydown="schCustComp(event);"/> -->
<!-- 		<input type="button" id="custcomp_search" class="custcomp_btn" value="조회" onclick="schPaging(1);" /> -->
			
			<select name="ssales_actvy_stat_cd" id="ssales_actvy_stat_cd" class="tab_select" onkeydown="custcompSearchEnter(event);">
				<option value="all" style="text-align: center;">전체</option>
				<option value="cust_nm" style="text-align: center;">고객사명</option>
				<option value="comp_num" style="text-align: center;">사업자번호</option>
				<option value="corp_num" style="text-align: center;">법인번호</option>
				<option value="iuser_nm" style="text-align: center;">영업담당자</option>
			</select>
			
			<input type="text" id="seachInput" name="seachCustcompSaleInput" placeholder="검색어를 입력해주세요">
			<input type="button" id="search_btn" value="조회" class="custcomp_bt" onclick="schCustcompPaging(1);"/>
			
	</div>
	
	<div id="functionBtn">	
		<input type="button" value="엑셀저장" onclick="" class="custcomp_functionBtn" />
		<input type="button" value="삭제" class="custcomp_functionBtn" onclick="custcompDelete()" />
		<input type="button" value="추가" class="custcomp_functionBtn" onclick="custcompInsertForm();" />
<!-- 		<input type="button" value="편집" onclick="" class="custcomp_bt" /> -->
<!-- 		<input type="button" value="저장" onclick="custcompInsertForm();" class="custcomp_bt" /> -->
	</div>
	
	<form name="delForm" id="delForm" method="post" action="${ctx}/custcompDelete">
		<div id="tableline">
			<table id="ccListTable" class="tabtable">
				<thead>
					<tr>
						<th style="width: 3%"><input type="checkbox"  id='ccListCheck'/></th>
						<th style="width: 16%">기업명</th>
						<th style="width: 8%">사업자번호</th>
						<th style="width: 8%">법인번호</th>
						<th style="width: 10%">대표전화번호</th>
						<th style="width: 10%">매출규모</th>
						<th style="width: 8%">직원수</th>
						<th style="width: 14%">산업군</th>
						<th style="width: 8%">영업 담당자</th>
						<th style="width: 15%">등록일시</th>
					</tr>
				</thead>
				<tbody id="ccListTbody">
					<c:forEach var="cc" items="${ccVOList}">
						<tr>
							<th><input type="checkbox" id="chk_cust_id" value="${cc.cust_id}" onclick="chkCancel();"></th>
							<td id="ccListTableNmTd" style="text-align: left; padding-left: 8px;">
								<a href="#" onclick="ccTabFunc('${cc.cust_id}', '${cc.cust_nm}');" style="color: blue;" class="cnClick">${cc.cust_nm}</a>
							</td>
							<td style="text-align: center;">${cc.comp_num}</td><!-- 사업자번호 -->
							<td style="text-align: center;">${cc.corp_num}</td><!-- 법인번호 -->
							<td style="text-align: center;">${cc.rep_ph1}-${cc.rep_ph2}-${cc.rep_ph3}</td><!-- 대표전화번호 -->
							<td style="text-align: center;">${cc.sales_scale}</td><!-- 매출규모 -->
							<td style="text-align: right; padding-right: 8px;">${cc.emp_qty}</td><!-- 직원수 -->
							<td style="text-align: center;">${cc.indst}</td><!-- 산업군 -->
							<td style="text-align: center;">${cc.iuser_nm}</td><!-- 영업담당자 -->
							<td style="text-align: center;">${cc.fst_reg_dt}</td><!-- 등록일시 -->
						</tr>
					</c:forEach>
					<c:if test="${ccVOList.size() < 5}">
						<c:forEach begin="0" end="${5-ccVOList.size()}">
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
		
				<!-- 페이징 처리 -->
		<div id="pageSpace">
			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="ccPageNum" value="${ccPageNum}">
			<c:choose>
				<c:when test="${ccPageNum eq page.firstPageCount}">
	        		<a class="prev">◀◀</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.firstPageCount}">
	        		<a href="javascript:opportunityList(${page.prevStepPage})" class="prev">◀◀</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${ccPageNum eq page.firstPageCount}">
	        		<a class="prev">◀</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.firstPageCount}">
	        		<a href="javascript:opportunityList(${page.prevPageNum})" class="prev">◀</a>
	    		</c:when>
			</c:choose>
			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
				<c:choose>
					<c:when test="${i eq ccPageNum }">
						<b>
							<a  href="javascript:opportunityList('${i}');" id="pNum" class="choice">${i}</a>
						</b>
					</c:when>
					<c:otherwise>
						<a  href="javascript:opportunityList('${i}');">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${ccPageNum eq page.totalPageCount}">
	       			<a class="next">▶</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.totalPageCount}">
	       			<a href="javascript:opportunityList(${page.nextPageNum})" class="next">▶</a>
	    		</c:when>
			</c:choose>
			<c:choose>
				<c:when test="${ccPageNum eq page.totalPageCount}">
	       			<a class="next">▶▶</a>
	    		</c:when>
				<c:when test="${ccPageNum ne page.totalPageCount}">
	       			<a href="javascript:opportunityList(${page.nextStepPage})" class="next">▶▶</a>
	    		</c:when>
			</c:choose>
<!-- 			<div id="pageSpace"> -->
<%-- 			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/> --%>
<%-- 			<input type="hidden" id="pageNum" value="${pageNum}"> --%>
<%-- 			<c:choose> --%>
<%-- 			<c:when test="${pageNum == page.startPageNum && pageNum != page.endPageNum}"> --%>
<!-- 				<a id="pNum" style="text-decoration: none;"> ◀ </a> -->
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${page.startPageNum}" onkeypress="opptPageInput(event);"/><a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" >${page.endPageNum}</a> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum+1}');" id="pNum" style="text-decoration: none;"> ▶ </a> --%>
<%-- 			</c:when> --%>
<%-- 			<c:when test="${pageNum == page.endPageNum}"> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum-1}');" id="pNum" style="text-decoration: none;"> ◀ </a> --%>
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${page.endPageNum}" onkeypress="opptPageInput(event);"/> <a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" style="text-decoration: none;">${page.endPageNum}</a> --%>
<!-- 				<a id="pNum" style="text-align: none;"> ▶ </a> -->
<%-- 			</c:when> --%>
<%-- 			<c:otherwise> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum-1}');" id="pNum" style="text-decoration: none;"> ◀ </a> --%>
<%-- 				<input type="text" id="ccPageInput" size="1px" value="${pageNum}" onkeypress="opptPageInput(event);"/><a style="text-decoration: none;"> / </a>  --%>
<%-- 				<a href="#" onclick="opportunityList('${page.endPageNum}');" id="pNum" style="text-decoration: none;">${page.endPageNum}</a> --%>
<%-- 				<a href="#" onclick="opportunityList('${pageNum+1}');" id="pNum" style="text-decoration: none;"> ▶ </a> --%>
<%-- 			</c:otherwise> --%>
<%-- 			</c:choose> --%>
		</div>
		
	</form>

</body>
</html>