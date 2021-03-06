<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery.mCustomScrollbar.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/est/estList.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/estList.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script type="text/javascript"
	src="${ctx}/resources/common/js/jquery-ui.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<style type="text/css">
	.ui-datepicker{ font-size: 13px; width: 300px;}
	.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
	.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>

<title>견적</title>
</head>
<body style="overflow: auto;">
	<input type="hidden" id="ctx" value="${ctx}">
	<form id="estim_detail">
		<input type="hidden" id="estim_id" name="estim_id">
	</form>
	<div id="title">
		<div class="caption">
			<label id="listLabel" class="ui header">■ 견적 > 견적관리</label>
		</div>
	</div>
		<div class="search_div" id="search_div1">
			<div class="ui left icon input">
				<input type="text" placeholder="견적명" name="estim_nm" id="sestim_nm" value="${estim_nm}" onkeypress="estSearchInput(event);"> 
		    	<i class="file text outline icon"></i>
		    </div>
		    <div class="ui left icon input">
				<input type="text" placeholder="고객사명" name="cust_nm" id="cust_nm" value="${cust_nm}" readonly="readonly">
				<input type="hidden" id="cust_id" name="cust_id" value="">
		    	<i class="building outline icon"></i>
		    	<input type="button" style="padding-left:10px !important;" class="tiny ui blue basic button" id="cust_list_pop" value="고객">
		    </div>
		    <div class="ui left icon input">
				<select name="estim_lev_cd" id="sestim_lev_cd">
					<option value="">견적단계</option>
					<c:forEach items="${elclist}" var="elclist">
						<option value="${elclist.code}">${elclist.cd_nm}</option>
					</c:forEach>
				</select>
			</div>
			<div class="ui left icon input">
		    	<input type="text" placeholder="견적금액" name="sales_price_1" id="ssales_price_1" value="${sales_price_1}" onkeypress="estSearchInput(event);">
				<i class="won icon"></i>
			</div>
			<div class="ui left icon input">
				<select name="sales_price_2" id="ssales_price_2">
					<option value="">선택</option>
					<option value="1">원</option>
					<option value="10000">만원</option>
				</select>
			</div>
			<div class="ui left icon input">
				<input type="text" placeholder="견적유효일자" name="estim_valid_d" id="sestim_valid_d" readonly="readonly"/>
		    	<i class="checked calendar icon"></i>
		    </div>
		    <label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
		    <button type="submit" class="tiny ui blue button" id="searchlist" onclick="searchBtn('${ccPageNum}');">조회</button> 
<!-- 			<label for="scompNam" class="tel_label_list">견적명</label> -->
<%-- 			<input type="text" class="tel_search" name="estim_nm" id="sestim_nm" value="${estim_nm}" autofocus="autofocus" onkeypress="estSearchInput(event);">  --%>
<!-- 		    <label for="inputPassword1" class="tel_label_list">견적단계</label> -->
<!-- 			<select class="tel_search" name="estim_lev_cd" id="sestim_lev_cd"> -->
<!-- 				<option value="">선택</option> -->
<%-- 				<c:forEach items="${elclist}" var="elclist"> --%>
<%-- 					<option value="${elclist.code}">${elclist.cd_nm}</option> --%>
<%-- 				</c:forEach> --%>
<!-- 			</select> -->
<!-- 			<label for="inputPassword1" class="tel_label_list">견적금액</label> -->
<%-- 	    	<input type="text" class="tel_search" name="sales_price_1" id="ssales_price_1" value="${sales_price_1}" onkeypress="estSearchInput(event);"> --%>
<!-- 			<select class="tel_search" name="sales_price_2" id="ssales_price_2"> -->
<!-- 				<option value="">선택</option> -->
<!-- 				<option value="1">원</option> -->
<!-- 				<option value="10000">만원</option> -->
<!-- 			</select> -->
<!-- 			<label for="start_day" class="tel_label_list">견적유효일자</label> -->
<!-- 			<input type="text" name="estim_valid_d" id="sestim_valid_d" class="tel_search" readonly="readonly"/> -->
<%-- 		   value = "<fmt: parseDate  value="${estim_valid_d}" pattern="yy/MM/dd"/>"  --%>
<!-- 		    <label id="schAddBtn" onclick="addForm();">+</label> -->
<!-- 		    <button type="submit" class="btn-success-tel" id="searchlist" onclick="searchBtn(1);">조회</button>  -->
		</div>
		<div id="search_div2" style="padding-bottom: 10px;">
			<div class="ui left icon input">
				<input type="text" placeholder="견적명" name="estim_nm1" id="sestim_nm1" value="${estim_nm}" onkeypress="estSearchInput(event);"/> 
		    	<i class="file text outline icon"></i>
		    </div>
		    <div class="ui left icon input">
				<input type="text" placeholder="고객사명" name="cust_nm" id="cust_nm1" value="${cust_nm}" readonly="readonly">
				<input type="hidden" id="cust_id1" name="cust_id" value="">
				<i class="building outline icon"></i>
				<input type="button" style="padding-left:10px !important;" class="tiny ui blue basic button" id="cust_list_pop1" value="고객">
		    </div>
		    <div class="ui left icon input">
				<select name="estim_lev_cd1" id="sestim_lev_cd1">
					<option value="">견적단계</option>
					<c:forEach items="${elclist}" var="elclist">
						<option value="${elclist.code}">${elclist.cd_nm}</option>
					</c:forEach>
				</select>
			</div>
			<div class="ui left icon input">
		    	<input type="text" placeholder="견적금액" name="sales_price_1" id="ssales_price_11" value="${sales_price_1}" onkeypress="estSearchInput(event);"/>
				<i class="won icon"></i>
			</div>
			<div class="ui left icon input">
				<select name="sales_price_2" id="ssales_price_21">
					<option value="">선택</option>
					<option value="1">원</option>
					<option value="10000">만원</option>
				</select>
			</div>
			<div class="ui left icon input">
				<input type="text" placeholder="견적유효일자" name="estim_valid_d" id="sestim_valid_d1" readonly="readonly"/>
		    	<i class="checked calendar icon"></i>
		    </div>
		    <label id="schAddBtn1" class="tiny ui button" onclick="delForm(this.id);">-</label>
		</div>
		<div id="search_div3" style="padding-bottom: 10px;">
			<div class="ui left icon input">
				<input type="text" placeholder="견적명" name="estim_nm2" id="sestim_nm2" value="${estim_nm}" onkeypress="estSearchInput(event);"/> 
		    	<i class="file text outline icon"></i>
		    </div>
		    <div class="ui left icon input">
				<input type="text" placeholder="고객사명" name="cust_nm" id="cust_nm2" value="${cust_nm}" readonly="readonly">
				<input type="hidden" id="cust_id2" name="cust_id" value="">
				<i class="building outline icon"></i>
				<input type="button" style="padding-left:10px !important;" class="tiny ui blue basic button" id="cust_list_pop2" value="고객">
		    </div>
		    <div class="ui left icon input">
				<select name="estim_lev_cd2" id="sestim_lev_cd2">
					<option value="">견적단계</option>
					<c:forEach items="${elclist}" var="elclist">
						<option value="${elclist.code}">${elclist.cd_nm}</option>
					</c:forEach>
				</select>
			</div>
			<div class="ui left icon input">
		    	<input type="text" placeholder="견적금액" name="sales_price_1" id="ssales_price_12" value="${sales_price_1}" onkeypress="estSearchInput(event);"/>
				<i class="won icon"></i>
			</div>
			<div class="ui left icon input">
				<select name="sales_price_2" id="ssales_price_22">
					<option value="">선택</option>
					<option value="1">원</option>
					<option value="10000">만원</option>
				</select>
			</div>
			<div class="ui left icon input">
				<input type="text" placeholder="견적유효일자" name="estim_valid_d" id="sestim_valid_d2" readonly="readonly"/>
		    	<i class="checked calendar icon"></i>
		    </div>
		   <label id="schAddBtn2" class="tiny ui button" onclick="delForm(this.id);">-</label>
		</div>
<!-- </form> -->
	    
	    <div id="tableline">
		    <input type="hidden" id="order_by" name="order_by" value="${data.order_by}"/>
			<input type="hidden" id="order_sc" name="order_sc" value="${data.order_sc}"/>
			<table id="goaltable" class="ui sortable celled table" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th style="width: 3%;text-align: center;"><input type="checkbox" id="estimAllSelect" ></th>
						<th style="width: 27%;" id="tblTh" onclick="setOrder('estim_nm','${ccPageNum}')">견적명</th>
						<th style="width: 15%;" id="tblTh" onclick="setOrder('cust_nm','${ccPageNum}')">고객사명</th>
						<th style="width: 10%;" id="tblTh" onclick="setOrder('estim_lev_cd_nm','${ccPageNum}')">견적단계</th>
						<th style="width: 10%;" id="tblTh" onclick="setOrder('estim_qty','${ccPageNum}')">견적수량</th>
						<th style="width: 15%;" id="tblTh" onclick="setOrder('sales_price','${ccPageNum}')">견적금액</th>
						<th style="width: 15%;" id="tblTh" onclick="setOrder('estim_valid_d','${ccPageNum}')">견적유효일자</th>
<!-- 						<th style="width: 9%;" id="tblTh">등록자</th> -->
<!-- 						<th style="width: 14%;" id="tblTh">등록일시</th> -->
					</tr>
				</thead>
				<tbody id="estList">
					<c:forEach var="result" items="${list}" >
						<tr>
							<td style="text-align: center;"><input type="checkbox" value="${result.estim_id}" onclick="javascript:chkCancel();"></td>
							<td style='text-align: left; padding-left:5px;'>
								<a style='text-decoration: none; color: blue;' href="javascript:estDetail('${result.estim_id}');">
								<c:out value="${result.estim_nm}" /></a></td>
							<td style='text-align: left;'>${result.cust_nm}</td>
							<td><c:out value="${result.estim_lev_cd_nm}" /></td>
							<td style='text-align: right;padding-right:5px;'><c:out value="${result.estim_qty}" /></td>
							<td style='text-align: right;padding-right:5px;'><fmt:formatNumber value="${result.sales_price}" /></td>
							<td style='text-align: center;'><c:out value="${result.estim_valid_d}" /></td>
<%-- 							<td><c:out value="${result.fst_reg_id}" /></td> --%>
<%-- 							<td><c:out value="${result.fst_reg_dt}" /></td> --%>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
<!-- 페이징 처리 -->
		<div class="bottom_div">
			<div class="functionBtn_div">
				<input type="button" id="addBtn" value="추가" class="tiny ui button" onclick="estAddBtn();"/>
				<input type="button" id="estimDeleteBtn" class="tiny ui blue button" value="삭제">	
				<input type="button" id="estimDelList" class="tiny ui blue button" value="삭제된 데이터" onclick="estDelList()">
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
			       		<a href="javascript:list(${page.prevPageNum})" class="icon item">
			       			<i class="left chevron icon"></i>
			       		</a>
			    	</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
							<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:list('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:list('${i}');" class="item" >${i}</a>
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
			      			<a href="javascript:list(${page.nextPageNum})" class="icon item">
			      				<i class="right chevron icon"></i>
			       			</a>
			    	</c:when>
				</c:choose>
<%-- 				<c:choose> --%>
<%-- 					<c:when test="${ccPageNum eq page.totalPageCount}"> --%>
<!-- 		       			<a class="next">▶▶</a> -->
<%-- 		    		</c:when> --%>
<%-- 					<c:when test="${ccPageNum ne page.totalPageCount}"> --%>
<%-- 		       			<a href="javascript:list(${page.nextStepPage})" class="next">▶▶</a> --%>
<%-- 		    		</c:when> --%>
<%-- 				</c:choose> --%>
<%-- 			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/> --%>
<%-- 			<input type="hidden" id="ccPageNum" value="${ccPageNum}"> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${ccPageNum eq page.firstPageCount}"> --%>
<!-- 	        		<a class="prev">◀◀</a> -->
<%-- 	    		</c:when> --%>
<%-- 				<c:when test="${ccPageNum ne page.firstPageCount}"> --%>
<%-- 	        		<a href="javascript:list(${page.prevStepPage})" class="prev">◀◀</a> --%>
<%-- 	    		</c:when> --%>
<%-- 			</c:choose> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${ccPageNum eq page.firstPageCount}"> --%>
<!-- 	        		<a class="prev">◀</a> -->
<%-- 	    		</c:when> --%>
<%-- 				<c:when test="${ccPageNum ne page.firstPageCount}"> --%>
<%-- 	        		<a href="javascript:list(${page.prevPageNum})" class="prev">◀</a> --%>
<%-- 	    		</c:when> --%>
<%-- 			</c:choose> --%>
<%-- 			<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1"> --%>
<%-- 				<c:choose> --%>
<%-- 					<c:when test="${i eq ccPageNum }"> --%>
<!-- 						<b> -->
<%-- 							<a  href="javascript:list('${i}');" id="pNum" class="choice">${i}</a> --%>
<!-- 						</b> -->
<%-- 					</c:when> --%>
<%-- 					<c:otherwise> --%>
<%-- 						<a  href="javascript:list('${i}');">${i}</a> --%>
<%-- 					</c:otherwise> --%>
<%-- 				</c:choose> --%>
<%-- 			</c:forEach> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${ccPageNum eq page.totalPageCount}"> --%>
<!-- 	       			<a class="next">▶</a> -->
<%-- 	    		</c:when> --%>
<%-- 				<c:when test="${ccPageNum ne page.totalPageCount}"> --%>
<%-- 	       			<a href="javascript:list(${page.nextPageNum})" class="next">▶</a> --%>
<%-- 	    		</c:when> --%>
<%-- 			</c:choose> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${ccPageNum eq page.totalPageCount}"> --%>
<!-- 	       			<a class="next">▶▶</a> -->
<%-- 	    		</c:when> --%>
<%-- 				<c:when test="${ccPageNum ne page.totalPageCount}"> --%>
<%-- 	       			<a href="javascript:list(${page.nextStepPage})" class="next">▶▶</a> --%>
<%-- 	    		</c:when> --%>
<%-- 			</c:choose> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${ccPageNum == page.startPageNum && ccPageNum != page.endPageNum}"> --%>
<%-- 			<%-- 	<c:when test="${ccPageNum == page.startPageNum}"> --%>
<!-- 					<a id="pNum"> ◀ </a> -->
<%-- 					<input type="text" id="ccPageInput" value="${page.startPageNum}" onkeypress="estPageInput(event);" /><a> / </a>  --%>
<%-- 					<a  href="javascript:list('${page.endPageNum}');" id="pNum" >${page.endPageNum}</a> --%>
<%-- 					<a href="javascript:list('${ccPageNum+1}');" id="pNum"> ▶ </a> --%>
<%-- 				</c:when> --%>
<%-- 				<c:when test="${ccPageNum == page.endPageNum}"> --%>
<%-- 					<a href="javascript:list('${ccPageNum-1}');" id="pNum"> ◀ </a> --%>
<%-- 					<input type="text" id="ccPageInput" value="${page.endPageNum}" onkeypress="estPageInput(event);"/><a> / </a>  --%>
<%-- 					<a href="javascript:list('${page.endPageNum}');" id="pNum">${page.endPageNum}</a> --%>
<!-- 					<a id="pNum"> ▶ </a> -->
<%-- 				</c:when> --%>
<%-- 				<c:otherwise> --%>
<%-- 					<a href="javascript:list('${ccPageNum-1}');" id="pNum" > ◀ </a> --%>
<%-- 					<input type="text" id="ccPageInput" value="${ccPageNum}" onkeypress="estPageInput(event);"/><a> / </a>  --%>
<%-- 					<a href="javascript:list('${page.endPageNum}');" id="pNum">${page.endPageNum}</a> --%>
<%-- 					<a href="javascript:list('${ccPageNum+1}');" id="pNum"> ▶ </a> --%>
<%-- 				</c:otherwise> --%>
<%-- 			</c:choose> --%>
			</div>
		</div>
</body>
</html>