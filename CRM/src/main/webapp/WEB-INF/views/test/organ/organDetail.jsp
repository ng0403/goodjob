<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사용자등록</title>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/orgDetail.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/orgDetail.js"></script>	
<script type="text/javascript">

function organAdder_pop(){
	var popUrl = "organAdder_pop";
	var popOption = "width=1380, height=450, resize=no, scrollbars=no, status=no;";
	window.open(popUrl, "", popOption);
}
</script>
</head>
<body>   
    <div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">조직상세</label>
		<label for="tab2" id="userAuthTab" style="width:120px;">조직별사용자</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
		 <div class="tabBody">
	
			<form id="orgInsertForm" method="post">
				<input type="hidden" id="org_insert_mode" name="org_flag"/>
				<table class=table>
					<tbody id="tbody1">
						<tr class="orgDetail">
							<th>조직ID</th>
							<td><input type="text" name="org_id" id="org_id" class="int"></input></td>
							<th>조직명</th>
							<td><input type="text" name="org_name" id="org_name" class="int"></input></td>
						</tr>
						<tr class="orgDetail">
							<th>상위조직ID</th>
							<td><input type="text" class="int" name="p_org_id" id="p_org_id" />
							</td>							
							<th>조직유형ID</th>
							<td>
							<input type="text" class="int" name="org_type_id" id="org_type_id" />
							</td>
						</tr>
						<tr class="orgDetail">	    		
							<th>조직대표</th>
							<td>							
							<input type="text" class="int" name="user_id" id="user_id" />
							
							</td>
							<th>조직레벨</th>
							<td>
							<input type="text" class="int" name="code" id="code" />
							</td>
						</tr>
						<tr class="orgDetail">				
							<th>전화번호</th>
							<td>
								<input type="text" name="phone_no1" id="phone_no1" class="int" maxlength="15" />
							</td>
							<th>팩스번호</th>
							<td>
								<input type="text" name="fax_no1" id="fax_no1" class="int" maxlength="15" />
							</td>							
						</tr>						
						<tr class="orgDetail">						
							<th>주소</th>
							<td colspan="3">
								<input type="text" name="zip_no1" id="post1" class="int_zip" />
								<input type="hidden" id="zip_cd_sri_num" name="zip_cd_sri_num" />	
								<input type="button" class="org_btn" value="검색" id="orgaddr" onclick="organAdder_pop();"/>
								<input type="text" name="addr_detail1" id="addr" class="int_zipadd1" />
								<input type="text" name="addr_detail2" id="addr_detail" class="int_zipadd2" />
							</td>
						</tr>
						<tr class="orgtypeDetail">
							<th>조직타입ID</th>
							<td><input type="text" id="org_type_id2" name="org_type_id2"  class="int" />
								<input type="hidden" class="int" name="p_org_id" id="p_org_id" />
							</td>
							<th>조직타입명</th>
							<td><input type="text" name="org_type_name" id="org_type_name" class="int" ></input></td>
						</tr>
						<tr class="orgtypeDetail">
							<th>활성화여부</th>
							<td style="padding : 10px 0px 0px 30px;">
							<input type="radio" name="active_flg2"  id="active_flg2_Y"  checked="checked" value="Y" />&nbsp;Y&nbsp;&nbsp;
							<input type="radio" name="active_flg2"  id="active_flg2_N" value="N" />&nbsp;N</td>
							<th>&nbsp;</th>
							<td>&nbsp;</td>
						</tr>
						</tbody>							
					</table>
				  </form>
				  
					<div class="bt_position_detail">
						<input type="button" class="org_btn" value="저장" id="orgSubmitBtn"/>
						<input type="button" class="org_btn" value="편집" id="orgUpdateBtn"/>
						<input type="reset" class="org_btn" value="취소" id="orgResetBtn"/>
					</div>				  
				</div>
			
				</div>
				<div id="tabDiv2" class="tab2_content">
			    <div class="bt_position">
				<select id="searchKey" name="searchKey" class="selectField">
					<option value="orgName">조직명</option>
					<option value="userName">사용자명</option>
				</select> <input id="title_text" type="text" name="searchValue" class="int_search"> &nbsp;
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
</body>
</html>