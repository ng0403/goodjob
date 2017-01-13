<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" />
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserTab.js"></script>	
 --%>
 <title>Insert title here</title>
</head>
<body>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

	<input type="hidden" id="ctx" value="${ctx}">
	<div class="userpadding">
	<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" /> <input
			id="tab2" type="radio" name="tab" />

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">사용자상세</label> <label for="tab2" id="userAuthTab">사용자권한</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<form method="post" id="joinform" >
				<table class="table">
					<tbody id="tbody1">
						<tr>
							<th>사용자ID</th>
							<td>
 							<input type="text" name="USER_ID" id="USER_ID" class="iuser_txt" style=" width:90%" ></input></td>
							<th>사원번호</th>
							<td><input type="text" name="EMP_NO" id="EMP_NO"
								class="iuser_txt" style="width:90%"></input></td>
							<th>부서번호</th>
							<td><input type="text" name="POSITION_CD" id="POSITION_CD"
								class="iuser_txt" style="width:90%"></input></td>
							<th>구분</th>
							<td><input type="text" name="EMP_STATUS_CD" id="EMP_STATUS_CD" class="iuser_txt" style="width:90%"> 
 							</td>
						</tr>	
						<tr>
							<th>전화번호</th>
							<td><input type="text" name="WORK_PHONE_NO" id="WORK_PHONE_NO" class="iuser_txt" maxlength="12" style="width:90%" /> 
							    
							</td>
							 
							<th>입사일</th>
							<td><input type="text" name="JOIN_DAY" id="JOIN_DAY" class="iuser_txt" maxlength="4" style="width:90%" /> 
 							</td>
							<th>퇴사일</th>
							<td><input type="text" name="RETIRE_DAY" id="RETIRE_DAY" class="iuser_txt" style="width:90%" /> 
 							</td>
 							<th>작성자</th>
							<td><input type="text" name="C_USER_ID" id="C_USER_ID" class="iuser_txt" style="width:90%" /> 
 							</td>
 							 
						</tr>
						<tr> 
						 
						</tr>
					</tbody>
				</table>
				<div class="bt_position_authuser">
					<input type="button" id="submitbtn" class="iuser_tab_bt" value="추가"/>
					<input type="button" id="modifybtn" class="iuser_tab_bt" value="편집"/>
					<input type="reset" id="cancelbtn" class="iuser_tab_bt" value="취소"/>
					<input type="button" id="addsavebtn" class="iuser_tab_bt" value="저장"/>
					<input type="button" id="modifysavebtn" class="iuser_tab_bt" style="display:none;" value="저장"/>
				</div>
			</form>
		</div>
		
		<!-- 두 번째 탭 내용 사용자권한 리스트 -->
		<!-- <div id="tabDiv2" class="tab2_content">
		<div class="bt_position">
			<select name="keyfield" id="iuserKeyfield">
				<option value="au_id">권한ID</option>
				<option value="ua_id">사용자ID명</option>
			</select> <input id="iuserKeyword" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="iuserAuthSearch" class="iuser_tab_bt">검색</button>
		</div>
			<div id="title"></div>
			<div class="bs-example_authuser" data-example-id="simple-table">
				<form name="userForm" id="userForm" method="post" >
				<table id="mastertable">
					<thead>
						<tr>
							<th scope="row"></th>
							<th></th>
							<td style="width: 25%;">권한ID</td>
							<td style="width: 25%;">최초등록자</td>
							<td style="width: 25%;">최초등록일</td>
							<td style="width: 25%;">사용자ID</td>
						</tr>
					</thead>
					<tbody id="userAuthBody">
						
					</tbody>
				</table>
			</div>
		</div>
	</div>
	</div> -->
	
		 <c:if test="${result=='success'}" var = "result"> 
			<script>window.close();
			opener.parent.location.href = "employeelist";
			</script>
		 </c:if>
	
	<script>
		$(document).ready(function() {

			$("#submitbtn").on("click", function() {
			 
				$('form').attr("action", "${ctx}/employee/employee_write").submit();
				
				
			});
			
 
		});
	</script>
	
	
			
	
	

</body>
</html>


