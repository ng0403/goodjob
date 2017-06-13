<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custMng.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<title>Insert title here</title>
<style type="text/css">
#tableline2 {
	height: 260px;
}
</style>
</head>
<body>
<input type="hidden" id="nowCust_id" value="${custcompDetail.cust_id}" />
<input type="hidden" id="nowCust_nm" value="${custcompDetail.cust_nm}" />
<input type="hidden" id="ctx" value="${ctx}">
<input type="hidden" id="flg" value="${flg}">
<input type="hidden" id="tabValue" value="${tabValue}">

	<div id="title">
		<!-- 신규추가를 눌렀을 경우 -->
			<div class="caption">
				<label id="listLabel" class="ui header">
					■ 고객사관리 
<!-- 					> <a href="/custcomp" style="font-size: 14pt; text-decoration: none; ">고객사관리</a> -->
<!-- 					> 고객사 상세정보 </a> -->
					> 담당사원  
				</label>
			</div>
	</div>
	
	<div class="search_div"  id="search_div" >
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명" id="sch_cust_nm" name="sch_cust_nm" onkeypress="schDelCustComp(event);"  style='ime-mode:disabled;'>
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사원명"  id="sch_iuser_nm" name="sch_iuser_nm" onkeypress="schDelCustComp(event);">
			<i class="user icon"></i>
		</div>	
		<select name="org_id" id="org_id_cd" style="height: 30px; margin-right: 4px; background: #fff;">
	    	<option value="">부서명</option>
	      	<c:forEach items="${OrgCd}" var="list">
				<option value="${list.org_id}" >${list.org_nm}</option>
			</c:forEach>
	    </select>
		<div class="ui left icon input">	
			<input type="text" placeholder="역할명"  id="sch_key_part" name="sch_key_part"  onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="browser icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="이메일"  id="sch_email" name="sch_email" onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="mail icon"></i>
		</div>	
			<label id="schAddBtn" class="tiny ui button" onclick="addForm();">+</label>
		<input type="button" id="custcomp_search" class="tiny ui blue button" value="조회" onclick="searchBtn('${ccPageNum}');" />
	</div>
	
	<div class="search_div2"  id="search_div2" style="margin-bottom: 5px;">
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명" id="sch_cust_nm0" name="sch_cust_nm0" onkeypress="schDelCustComp(event);"  style='ime-mode:disabled;'>
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사원명"  id="sch_iuser_nm0" name="sch_iuser_nm0" onkeypress="schDelCustComp(event);">
			<i class="user icon"></i>
		</div>	
		<select name="org_id" id="org_id_cd0" style="height: 30px; margin-right: 4px; background: #fff;">
	    	<option value="">부서명</option>
	      	<c:forEach items="${OrgCd}" var="list">
				<option value="${list.org_id}" >${list.org_nm}</option>
			</c:forEach>
	    </select>
		<div class="ui left icon input">	
			<input type="text" placeholder="역할명"  id="sch_key_part0" name="sch_key_part0"  onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="browser icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="이메일"  id="sch_email0" name="sch_email0" onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="mail icon"></i>
		</div>	
			<label id="schAddBtn" class="tiny ui button" onclick="delForm(this.id);">-</label>
	</div>

	<div class="search_div3"  id="search_div3" style="margin-bottom: 5px;">
		<div class="ui left icon input">
			<input type="text" placeholder="고객사명" id="sch_cust_nm1" name="sch_cust_nm1" onkeypress="schDelCustComp(event);"  style='ime-mode:disabled;'>
			<i class="users icon"></i>
		</div>	
		<div class="ui left icon input">
			<input type="text" placeholder="사원명"  id="sch_iuser_nm1" name="sch_iuser_nm1" onkeypress="schDelCustComp(event);">
			<i class="user icon"></i>
		</div>	
		<select name="org_id" id="org_id_cd1" style="height: 30px; margin-right: 4px; background: #fff;">
	    	<option value="">부서명</option>
	      	<c:forEach items="${OrgCd}" var="list">
				<option value="${list.org_id}" >${list.org_nm}</option>
			</c:forEach>
	    </select>
		<div class="ui left icon input">	
			<input type="text" placeholder="역할명"  id="sch_key_part1" name="sch_key_part1"  onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="browser icon"></i>
		</div>	
		<div class="ui left icon input">	
			<input type="text" placeholder="이메일"  id="sch_email1" name="sch_email1" onkeypress="schDelCustComp(event);" style='ime-mode:disabled;'>
			<i class="mail icon"></i>
		</div>	
			<label id="schAddBtn" class="tiny ui button" onclick="delForm(this.id);">-</label>
	</div>




	<div id="tabDiv5" class="tab5_content" style="width: 100%;">
		<div id="tableline2">
			<table class="ui sortable celled table" > 
				<thead>
					<tr class="tr_table_fix_header">
						<th style="width: 3%"><input type="checkbox"  id='pocListCheck' ></th>
						<th style="width: 15%">고객사명</th>
						<th style="width: 10%">사원명</th>
						<th style="width: 12%">부서명</th>
						<th style="width: 15%">역할명</th>
						<th style="width: 13%">연락처</th>
						<th style="width: 17%">이메일</th>
					</tr>
				</thead>
				<tbody id= "pocTableTbody" class="tbody" style="height: 230px;">
<!-- 					<tr style='height: 75px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr> -->
					<c:forEach var="mngList" items="${custcompMngList}">
						<tr>
							<td >
								<input type="checkbox" id="custcompMng_del" name="custcompMng_del" class="custMng_check" value="${mngList.cust_id}:${mngList.iuser_id}" onclick="chkCancel();" >
							</td>
							<td>${mngList.cust_nm }</td>
							<td>
								<a href='#' onclick="ccMngDetail('${mngList.cust_id}', '${mngList.iuser_id}', '${mngList.org_nm}', '${mngList.iuser_nm}');" class='cnClick'>
								${mngList.iuser_nm}
							</td>
							<td >${mngList.org_nm}</td>
							<td>${mngList.key_part}</td>
							<td style="text-align: center;">${mngList.cell_ph1}-${mngList.cell_ph2}-${mngList.cell_ph3}</td>
							<td>${mngList.email1}@${mngList.email2}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		
		<div id="bottomDiv">
			<div class="bt_position_authuser" style="margin-top: 10px; float: left;">
				<input type="button" id="poc_popBtn"  class="tiny ui button" value="담당사원 등록" onclick="posAddBtn('${custcompDetail.cust_id}','${custcompDetail.cust_nm}', 'tabValue.value');"/>
				<input type="button" id="deletePocbtn" class="tiny ui blue button" value="삭제" onclick="custMngDelete();"/>
			</div>
			
			<!-- 페이징 처리 -->
			<div id="pageSpace" class="ui right floated pagination menu" style=" margin-top: 10px; float: right; margin-bottom: 15px;" >
				<input type="hidden" id="endPageNum" value="${page.endPageNum}"/>
				<input type="hidden" id="ccPageNum" value="${ccPageNum}">
				<c:choose>
					<c:when test="${ccPageNum eq page.firstPageCount}">
						<a class="icon item">
	        				<i class="left chevron icon"></i>
	        			</a>	
		    		</c:when>
					<c:when test="${ccPageNum ne page.firstPageCount}">
		        		<a href="javascript:ccMngPocList(${page.prevPageNum})" class="icon item">
		        			<i class="left chevron icon"></i>
		        		</a>
		    		</c:when>
				</c:choose>
				<c:forEach var="i" begin="${page.startPageNum }" end="${page.endPageNum}" step="1">
					<c:choose>
						<c:when test="${i eq ccPageNum }">
							<b>
								<a  href="javascript:ccMngPocList('${i}');" id="pNum" class="item">${i}</a>
							</b>
						</c:when>
						<c:otherwise>
							<a  href="javascript:ccMngPocList('${i}');" class="item" >${i}</a>
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
		       			<a href="javascript:ccMngPocList(${page.nextPageNum})" class="icon item">
		       				<i class="right chevron icon"></i>
		       			</a>
		    		</c:when>
				</c:choose>
			</div>
			</div>
		</div>

</body>
</html>