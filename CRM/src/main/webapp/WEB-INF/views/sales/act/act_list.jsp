<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act02.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_list.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
	
<title>영업활동</title>
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="actPageNum" value="${actPageNum}">
	<input type="hidden" id="act_flg" value="${act_flg}">
	
	<%-- <form action="${ctx}/act" method="get" id="listForm"> --%>
	<div id="title">
		<div class="caption">■ 영업활동</div>
	</div>
    
	<div id="dboardbody">
		<div class="search_div">
			<select class="act_tab_select" name="act_search_div_id" id="act_search_div_id" >
				<option value="0" style="text-align: center;">==선택==</option>
				<option value="ssales_actvy_nm">영업활동명</option>
				<option value="sact_oppt_nm">영업기회명</option>
				<option value="sstart_day">시작일자</option>
			</select>
			<input type="text" class="act_txt_search" name="act_search_txt" id="act_search_txt" autofocus="autofocus" onkeydown="actSearchEnter(event);">
            
            
            <input type="button" id="search_btn" value="조회" class="act_bt" onclick="schActPaging(1);"/>
		</div>
	
<!-- 		<div class="search_div"> -->
<!-- 			<select name="ssales_actvy_stat_cd" id="ssales_actvy_stat_cd" class="act_tab_select" onkeydown="actSearchEnter(event);"> -->
<!-- 				<option value="0" style="text-align: center;">전체</option> -->
<%-- 					<c:forEach var="actStatCd" items="${actStatCd}"> --%>
<%-- 						 <option value="${actStatCd.sales_actvy_stat_cd}">${actStatCd.sales_actvy_stat_nm}</option> --%>
<%-- 				    </c:forEach> --%>
<!-- 			</select> -->
<!-- 			<input type="text" id="seachActSaleInput" name="seachActSaleInput" placeholder="검색어를 입력해주세요"> -->
<!-- 			<input type="button" id="search_btn" value="조회" class="act_bt" onclick="schActPaging(1);"/> -->
			
			
<!-- 	    </div> -->
	    <div id="functionBtn">
	    	<input type="button" id="act_del_btn" class="act_bt" style="float: right;" value="삭제" />
	    	<input type="button" class="act_bt" value="추가" style="float: right;" onclick="actInsertForm('${act_flg}');" />
<!-- 	    	<button type="button" class="act_bt" style="float: right;" id="actDelBtn" onclick="actDelete()">삭제</button> -->
	    </div>

		<div>
			<table id="dboardtable">
				<thead>
					<tr>
						<th rowspan="2" style="width: 2%; text-align: center;"><input id="actCheck" type="checkbox" onclick="actAllChk(this);" /></th>
						<td rowspan="2" style="width: 15%;">영업활동명</td>
						<td rowspan="2" style="width: 23%;">영업기회명</td>
						<td rowspan="2" style="width: 10%;">활동유형</td>
						<td style="width: 10%;">시작일자</td>
						<td style="width: 10%;">시작시간</td>
						<td rowspan="2" style="width: 5%;">상태</td>
					</tr>
					<tr>
						<td style="width: 10%;">종료일자</td>
						<td style="width: 10%;">종료시간</td>
					</tr>
				</thead>
				<tbody id="act_list_tbody" class="act_list_tbody">
					<c:forEach items="${actList}" var="actList">
						<tr>
							<td rowspan="2">
								<input type="checkbox" class="act_chek" name="act_del" value="${actList.sales_actvy_id}" onclick="actChkCancel();">
							</td>
							<td style="text-align: left; padding-left: 5px;" rowspan="2" class="act_nm_tag" onclick="actDetail('${actList.sales_actvy_id}','${act_flg}')">
								<input type="hidden" value="${actList.sales_actvy_id}" id="hi_act_id">
								<a style="color: blue; cursor: pointer;" class="actClick">${actList.sales_actvy_nm}</a>
							</td>
							<td style="text-align: left; padding-left: 5px;" rowspan="2" class="act_oppt_tag">${actList.sales_oppt_nm}</td>
							<td style="text-align: center;" rowspan="2" class="act_type_tag">${actList.sales_actvy_type_cd}</td>
							<td style="text-align: center;" class="act_starth_tag">${actList.strt_d}</td>
							<td style="text-align: center;" class="act_startm_tag">${actList.strt_t}</td>
							<td style="text-align: center;" rowspan="2" class="act_stat_tag">${actList.sales_actvy_stat_cd}</td>
						</tr>
						<tr>
							<td style="text-align: center;" class="act_endh_tag">${actList.end_d}</td>
							<td style="text-align: center;" class="act_endm_tag">${actList.end_t}</td>
						</tr>
						</c:forEach>
				</tbody>
			</table>
		</div>
		
		<!-- 페이징 처리 -->
		<div id="pageSpace" class="ui right floated pagination menu">
			<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
			<input type="hidden" id="actPageNum" value="${actPageNum}">
			<c:choose>
				<c:when test="${actPageNum eq page.firstPageCount}">
						<a class="icon item">
	       					<i class="left chevron icon"></i>
	       				</a>	
	    		</c:when>
				<c:when test="${actPageNum ne page.firstPageCount}">
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
				<c:when test="${actPageNum eq page.totalPageCount}">
					<a class="icon item">
	      				<i class="right chevron icon"></i>
	       			</a>	
	    		</c:when>
				<c:when test="${actPageNum ne page.totalPageCount}">
	      			<a href="javascript:custCompList(${page.nextPageNum})" class="icon item">
	      				<i class="right chevron icon"></i>
	       			</a>
	    		</c:when>
			</c:choose>
		</div>
	</div>
</body>
</html>