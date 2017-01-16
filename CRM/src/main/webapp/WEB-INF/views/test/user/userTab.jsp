<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" />
 <title>Insert title here</title>
 <c:if test="${result=='1'}" var = "result"> 
	<script type="text/javascript">
		window.close();
		opener.parent.location.href = "userlist";
	</script>
 </c:if>
 
<script>
	$(document).ready(function() {
		var entry_flg = ${entry_flg}
		var tmp = $('#USER_ID').val();
		if(tmp != 'NULL'){
			$("#submitbtn").on("click", function() {
				$('form').attr("action", "${ctx}/usertest/userInsert").submit();
			});
		}else{
			alert("사용자 아이디가 없습니다.");
		}
		var tmp = $('#USER_ID').val();
		$("#modifysavebtn").on("click", function() {
			$('form').attr("action", "${ctx}/usertest/userMdfy?user_id = "+tmp).submit();
		});
		
		if(entry_flg == 1)
		{
			alert("ENTRY_FLG 신규추가 : " + entry_flg);
			$('#modifybtn').button({disabled: true});
			$('#addsavebtn').button({disabled: true});
			$('#joinform').find('input[type="text"]').attr('disabled',false).attr('readonly', false);
		
		}else if(entry_flg == 2){
			alert("ENTRY_FLG 편집: " + entry_flg);
			
		//	$('#joinform').find('input[type="text"]').attr('disabled',true);
		//	$('#joinform').find('input[type="password"]').attr('disabled',true);
		//	$('#joinform').find('input[type="email"]').attr('disabled',true);
			$('#modifybtn').button({disabled: false});
			$('#addsavebtn').button({disabled: true});
			$('#cancelbtn').button({disabled: true});
			$('#submitbtn').attr('disabled',false);
			
    }
			$("#modifybtn").click(function(){
				alert("편집버튼 클릭");
				if (entry_flg == 2){
					$('.tab1_content input').attr('disabled', false);
					$('#USER_ID').attr("readonly", true);
					$('#addsavebtn').button({disabled: false});
					$('#modifybtn').attr("disabled", true);
					$('#submitbtn').button({disabled: true});
			    }
			});
		
	var user_id = $('#user_id_h').val();
	
		
		
	});

 </script>
</head>
<body>
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
							<td><input type="hidden" id="user_id_h" value="${USER_ID}">
							<input type="hidden" id="active_flg" value="${ACTIVE_FLG}">
 							<input type="text" name="USER_ID" id="USER_ID" class="iuser_txt" style=" width:90%" value="${USER_ID}"></input></td>
							<th>사용자 이름</th>
							<td><input type="text" name="USER_NAME" id="USER_NAME" class="iuser_txt" style="width:90%" value="${USER_NAME}"></input></td>
							<th>비밀번호</th>
							<td><input type="password" name="PWD" id="PWD" class="iuser_txt" style="width:90%" value="${PWD}"></input></td>
							<th>이메일</th>
							<td><input type="email" name="EMAIL" id="EMAIL" class="iuser_txt" style="width:90%" value="${EMAIL}"> 
 							</td>
							<th>자택 전화번호</th>
							<td><input type="text" name="HOME_PHONE" id="HOME_PHONE" class="iuser_txt" maxlength="12" style="width:90%" value="${HOME_PHONE}" />
							</td>
						</tr>	
						<tr>
							<th>휴대 전화번호</th>
							<td><input type="text" name="CELL_PHONE" id="CELL_PHONE" class="iuser_txt" maxlength="12" style="width:90%" value="${CELL_PHONE}" /> 
							</td>
							<th>회사 전화번호</th>
							<td><input type="text" name="COMPANY_PHONE" id="COMPANY_PHONE" class="iuser_txt" maxlength="12" style="width:90%" value="${COMPANY_PHONE}"/> 
							</td>
							<th>선호 채널</th>
							<td><input type="text" name="P_CHANNEL_CD" id="P_CHANNEL_CD" class="iuser_txt" maxlength="12" style="width:90%" value="${P_CHANNEL_CD}"/> 
							</td>
							<th>사용자 구분</th>
							<td><input type="text" name="USER_TYPE_CD" id="USER_TYPE_CD" class="iuser_txt" maxlength="12" style="width:90%" value="${USER_TYPE_CD}"/> 
							</td>
							<th>조직ID</th>
							<td><input type="text" name="ORG_ID" id="ORG_ID" class="iuser_txt" maxlength="12" style="width:90%" value="${ORG_ID}"/> 
							</td>
							
							
						</tr>
						<tr> 
						 
						</tr>
					</tbody>
				</table>
				<div class="bt_position_authuser">
					<input type="button" id="submitbtn" class="iuser_tab_bt" value="추가"/>
					<input type="button" id="modifybtn" class="iuser_tab_bt" value="편집" />
					<input type="reset" id="cancelbtn" class="iuser_tab_bt" value="취소"/>
					<input type="button" id="addsavebtn" class="iuser_tab_bt" value="저장"/>
					<input type="button" id="modifysavebtn" class="iuser_tab_bt" style="display:none;" value="저장"/>
				</div>
			</form>
		</div>
		

	

	
	
			
	
	

</body>
</html>


