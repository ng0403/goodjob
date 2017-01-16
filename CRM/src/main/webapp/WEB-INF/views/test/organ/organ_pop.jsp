<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/orgDetail.css" type="text/css" />
<title>사용자등록</title>
</head>
<body>   
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
	<input type="hidden" id="ctx" value="${ctx}">
	<div class="userpadding">
    <div id="css_tabs">
    
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> 
		<input id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">조직상세</label>
		<label for="tab2" id="userAuthTab" style="width:120px;">조직별사용자</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
			<form method="post" id="joinform" >
				<table class="table">
					<tbody id="tbody1">
						<tr>
							<th>조직ID</th>
							<td><input type="text" name="ORG_ID" id="ORG_ID" class="int"></input></td>
							<th>조직명</th>
							<td><input type="text" name="ORG_NAME" id="ORG_NAME" class="int"></input></td>
						</tr>
						<tr >
							<th>상위조직ID</th>
							<td><input type="text" name="P_ORG_ID" id="P_ORG_ID" class="int" /></td>	
							<th>상위조직명</th>
							<td><input type="text" name="MAIN_GROUND" id="MAIN_GROUND" class="int" /></td>	
						</tr>
						<tr >
							<th>조직유형ID</th>
							<td><input type="text" class="int" name="ORG_TYPE_ID" id="ORG_TYPE_ID" /></td>
							<th>대표사원ID</th>
							<td><input type="text" class="int" name="ORG_LEVEL_CD" id="ORG_LEVEL_CD" /></td>
						</tr>
						<tr >				
							<th>전화번호</th>
							<td><input type="text" name="PHONE_NO" id="PHONE_NO" class="int" maxlength="15" /></td>
							<th>팩스번호</th>
							<td><input type="text" name="FAX_NO" id="FAX_NO" class="int" maxlength="15" /></td>							
						</tr>						
						<tr >						
							<th>주소</th>
							<td colspan="3">
								<input type="text" name="ZIP_NO" id="ZIP_NO" class="int_zip" />
								<input type="hidden" id="zip_cd_sri_num" name="zip_cd_sri_num" />	
								<input type="button" class="org_btn" value="검색" id="orgaddr" onclick="organAdder_pop();"/>
								<input type="text" name="ADDR_DETAIL" id="ADDR_DETAIL" class="int_zipadd1" />
							</td>
						</tr>
						<tr >
							<th>활성화여부</th>
							<td style="padding : 10px 0px 0px 30px;">
								<input type="radio" name="ACTIVE_FLG"  id="ACTIVE_FLG_Y"  checked="checked" value="Y" />&nbsp;Y&nbsp;&nbsp;
								<input type="radio" name="ACTIVE_FLG"  id="ACTIVE_FLG_N" value="N" />&nbsp;N
							</td>
							<th>&nbsp;</th>
							<td>&nbsp;</td>
						</tr>
					</tbody>							
				</table>
			</form>
				  
			<div class="bt_position_detail">
				<input type="button" id="submitbtn"  class="iuser_tab_bt" value="저장"/>
				<input type="button" id="closebtn" class="iuser_tab_bt" value="닫기"/>
			</div>				  
			</div>
			</div>
			
			<div id="tabDiv2" class="tab2_content">
		    	<div class="bt_position">
					<select id="searchKey" name="searchKey" class="selectField">
						<option value="orgName">조직명</option>
						<option value="userName">사용자명</option>
					</select> 
					<input id="title_text" type="text" name="searchValue" class="int_search"> &nbsp;
					<input id="orgUserAuthSearch" type="button" class="org_btn" value="검색"/>
		     	</div>
				
				<div class="bs-example_orglist" data-example-id="simple-table">
				 	<table id="mastertable">
						<thead>
							<tr>
							    <th scope="row"></th>
								<td style="width: 20%;">조직명</td>
								<td style="width: 20%;">조직대표</td>
								<td style="width: 20%;">사용자</td>
								<td style="width: 20%;">연락처</td>
								<td style="width: 20%;">이메일</td>
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
     </div>	
     
     <c:if test="${result=='success'}" var = "result"> 
			<script>window.close();
			opener.parent.location.href = "organList";
			</script>
	 </c:if>	
	 
	<script>
	 
	$(document).ready(function() {
		
		$("#submitbtn").on("click", function() {
			
			if(ORG_ID.value== "" && ORG_NAME.value == "" && MAIN_GROUND.value == "" && ORG_TYPE_ID.value == "" && ORG_LEVEL_CD.value == "" && PHONE_NO.value == "" && FAX_NO.value == "")
			{
				alert("값을 입력해 주세요");	
				
			} else{
				
				$('form').attr("action", "${ctx}/organ/organ_write").submit();		
			} 
			
			alert("추가 완료");
			
		});
		
		$("#closebtn").on("click", function() {
			 
			window.close();
		});
	});
	</script>	
	
</body>
</html>