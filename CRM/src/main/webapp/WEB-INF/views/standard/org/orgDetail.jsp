<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사용자등록</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/orgDetail.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/orgDetail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/orgTree.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<%-- <script src="${ctx}/resources/common/js/standard/common/tablesort.js"></script> --%>

<!-- 주소 API를 위한 부분 추가 시작 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/search.min.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/popup.min.js"></script>
<script> 
	$(function() { 
		//주소 검색버튼 ID값 
		$("#postcodify_search").postcodifyPopUp(); 
	}); 
</script>
<!-- 주소 API를 위한 부분 추가 끝 -->
<script>
   $(function() {
      $('table').tablesort();
   });            
</script>	
</head>
<body>   
    <div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">조직상세</label>
		<label for="tab2" id="userAuthTab">조직별사용자</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
		 <div class="tabBody">
			<form id="orgInsertForm" method="post">
				<input type="hidden" id="org_insert_mode" name="org_flag"/>
				<div class="bt_position_detail">
					<input type="button" class="tiny ui blue button" value="저장" id="orgSubmitBtn"/>
					<input type="button" class="tiny ui button" value="편집" id="orgUpdateBtn"/>
					<input type="reset" class="tiny ui button" value="취소" id="orgResetBtn"/>
				</div>
				<table class=table>
					<tbody id="tbody1" class="ui sortable celled table">
						<tr class="orgDetail">
							<th><span style="color: red;">*조직ID</span></th>
							<td><input type="text" name="org_id" id="org_id" class="int" disabled="disabled"></input></td>
							<th><span style="color: red;">*조직명</span></th>
							<td><input type="text" name="org_name" id="org_name" class="int" disabled="disabled"></input></td>
						</tr>
						<tr class="orgDetail">
							<th>상위조직ID</th>
							<td><input type="text" class="int" name="p_org_id" id="p_org_id" disabled="disabled"/>
							</td>							
							<th><span style="color: red;">*조직유형ID</span></th>
							<td>
							<input type="text" class="int" name="org_type_id" id="org_type_id" disabled="disabled"/>
							</td>
						</tr>
						<tr class="orgDetail">	    		
							<th><span style="color: red;">*조직대표</span></th>
							<td>							
							<input type="text" class="int" name="user_id" id="user_id" disabled="disabled"/>
							<input type="button" class="tiny ui blue basic button" value="검색" id="oorg" onclick="OOrgName()"/>
							</td>
							<th>조직레벨</th>
							<td>
							<input type="text" class="int" name="code" id="code" disabled="disabled"/>
							</td>
						</tr>
						<tr class="orgDetail">				
							<th><span style="color: red;">*전화번호</span></th>
							<td>
								<input type="text" name="phone_no1" id="phone_no1" class="int_tel" maxlength="3" disabled="disabled"/>&nbsp;-
								<input type="text" name="phone_no2" id="phone_no2" class="int_tel" maxlength="4" disabled="disabled"/>&nbsp;-
								<input type="text" name="phone_no3" id="phone_no3" class="int_tel" maxlength="4" disabled="disabled"/>
							</td>
							<th>팩스번호</th>
							<td>
								<input type="text" name="fax_no1" id="fax_no1" class="int_tel" maxlength="3" disabled="disabled"/>&nbsp;-
								<input type="text" name="fax_no2" id="fax_no2" class="int_tel" maxlength="4" disabled="disabled"/>&nbsp;-
								<input type="text" name="fax_no3" id="fax_no3" class="int_tel" maxlength="4" disabled="disabled"/>
							</td>							
						</tr>						
						<tr class="orgDetail">						
							<th><span style="color: red;">*주소</span></th>
							<td colspan="3">
								<input type="hidden" id="zip_cd_sri_num" name="zip_cd_sri_num" disabled="disabled"/>	
<!-- 								<input type="text" name="zip_no1" id="post1" class="int_zip" disabled="disabled"/> -->
<!-- 							&nbsp;-&nbsp;							 -->
<!-- 								<input type="text" name="zip_no2" id="post2" class="int_zip" disabled="disabled" /></input>	 -->
<!-- 								<input type="button" class="tiny ui blue basic button" value="검색" id="orgaddr" onclick="orgTreeAddr_pop();"/> -->
<!-- 								<input type="text" name="addr_detail1" id="addr" class="int_zipadd1" disabled="disabled"/> -->
<!-- 								<input type="text" name="addr_detail2" id="addr_detail" class="int_zipadd2" disabled="disabled"/> -->
							
							
								<!-- 우편번호 												 css를위한부분 필요한class명추가    -->
								<input type="text"   name="zip_no1"    	  id="post1" 		 class="postcodify postcodify_postcode5" maxlength="5" style="width: 65px; text-align: center;" disabled="disabled"/>
								<!-- 주소검색 버튼                                팝업을 위해 ID값 추가 -->
								<input type="button" name="postcodify_search" id="postcodify_search" class="tiny ui blue basic button" value="검색"  style="margin-left: 5px;" />
									&nbsp;
								<!-- 기본 도로명 주소 -->									 <!-- 기본주소에 추가할 clss명 -->
								<input type="text" name="org_addr"      id="org_addr"      class="postcodify postcodify_address"    style="background: #fff; width: 330px;" disabled="disabled"/>
								<!-- 상세주소 -->											 <!-- 상세주소에 추가할 clss명 -->
								<input type="text" name="org_addr_dtl"  id="org_addr_dtl"  class="postcodify postcodify_details"    style="background: #fff; width: 230px; margin-left: 5px;margin-right: 5px" disabled="disabled"/>
								<!-- 참고용 주소 -->										 <!-- 참고용주소에 추가할 clss명 -->
								<input type="text" name="org_addr_info" id="org_addr_info" class="postcodify postcodify_extra_info" style="background: #fff; width: 100px;" disabled="disabled"/>
							</td>
						</tr>
						<tr class="orgDetail">
							<th><span style="color: red;">*활성화여부</span></th>
							<td style="padding : 10px 0px 0px 30px;" colspan="3">
							<input type="radio" name="active_flg" checked="checked" id="active_flg_Y" value="Y" disabled="disabled"/>&nbsp;Y&nbsp;&nbsp;
							<input type="radio" name="active_flg" id="active_flg_N" value="N" disabled="disabled"/>&nbsp;N</td>
						</tr>
						<tr class="orgtypeDetail">
							<th>조직타입ID</th>
							<td><input type="text" id="org_type_id2" name="org_type_id2"  class="int" disabled="disabled"/>
								<input type="hidden" class="int" name="p_org_id" id="p_org_id" disabled="disabled"/>
							</td>
							<th>조직타입명</th>
							<td><input type="text" name="org_type_name" id="org_type_name" class="inputText" disabled="disabled"></input></td>
						</tr>
						<tr class="orgtypeDetail">
							<th><span style="color: red;">*활성화여부</span></th>
							<td style="padding : 10px 0px 0px 30px;">
							<input type="radio" name="active_flg2"  id="active_flg2_Y"  checked="checked" value="Y" disabled="disabled"/>&nbsp;Y&nbsp;&nbsp;
							<input type="radio" name="active_flg2"  id="active_flg2_N" value="N" disabled="disabled"/>&nbsp;N</td>
							<th>&nbsp;</th>
							<td>&nbsp;</td>
						</tr>
						</tbody>							
					</table>
				  </form>				  
				</div>
			
				</div>
				<div id="tabDiv2" class="tab2_content">
			    <div class="bt_position">
			    	<div class="ui left icon input">
						<select id="searchKey" name="searchKey" class="selectField">
							<option value="orgName">조직명</option>
							<option value="userName">사용자명</option>
						</select> 
						<input id="title_text" type="text" name="searchValue" class="inputText"> &nbsp;
					</div>
				<input id="orgUserAuthSearch" type="button" class="tiny ui blue button" value="검색"/>
		        </div>
			    <div class="bs-example_orglist" data-example-id="simple-table">
				   <table id="mastertable" class="ui sortable celled table">
								<thead>
									<tr>
										<th style="width: 15.2%;">조직명</th>
										<th style="width: 15%;">조직대표</th>
										<th style="width: 9.8%;">사용자</th>
										<th style="width: 19.9%;">연락처</th>
										<th style="width: 41%;border-right:none;">이메일</th>
										<th style="width: 0%;border-left:none;"></th>
									</tr>
								</thead>
								<tbody>
									<%-- <c:forEach var="orgUser" items="${orgUser}">
									<tr>					
										<td style="width: 20%;">${orgUser.org_name}</td>
										<td style="width: 20%;">${orgUser.code_name}</td>
										<td style="width: 20%;">${orgUser.user_name}</td>
										<td style="width: 20%;">${orgUser.cell_phone}</td>
										<td style="width: 20%;">${orgUser.email}</td>
									</tr>											
									</c:forEach> --%>
								</tbody>				
							</table>      
                       
                <div style="clear:both"></div>
            </div>
        </div>	
     </div>				
</body>
</html>