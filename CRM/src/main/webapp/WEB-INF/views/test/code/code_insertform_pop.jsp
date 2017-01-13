
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserTab.js"></script>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>	
<title>Insert title here</title>
</head>
<style type="text/css">
#css_tabs .tab1_content{
    border:1px solid #ddd;
    height:280px;
}
</style>
<script type="text/javascript">
$(function(){
	$("#code_add_fbtn").on("click", function(){  
	 	$("#insertform").submit();
		
	})
	
	$("#code_cancle_nfbtn").on("click", function(){  
		window.close();
		
	})
})	
</script>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<div class="userpadding">
	<div id="css_tabs">
		<label for="tab1">코드등록</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
			<form action="insert"  method="post" id="insertform" >
				<table class="table">
					<tbody id="tbody1">
						<tr>
							<th>코드</th>
							<td>
							<!-- <input type="hidden" name="UESR_ID" id="USER_ID"/> -->
							<input type="text" name="code" id="code" class="iuser_txt"></input></td>
						</tr>
						<tr>
							<th>코드명</th>
							<td><input type="text" name="code_name" id="code_name"
								class="iuser_txt"></input></td>
						</tr>
						<tr>	
							<th>전시순서</th>
							<td><input type="text" name="dispaly_seq" id="display_seq"
								class="iuser_txt"></input></td>
						</tr>
						<tr>	
							<th>코드설명</th>
							<td><input type="text" name="code_desc" id="code_desc" class="iuser_txt"> 
							</td>
						</tr>
						<tr>	
							<th>활성여부</th>
							<td><input type="text" name="active_flg" id="active_flg" class="iuser_txt"> 
							</td>
						</tr>
					</tbody>
				</table>
				<div class="bt_position_authuser">
					<input type="button" id="code_add_fbtn" class="iuser_tab_bt" value="저장"/>
					<!-- <input type="button" id="modifybtn" class="iuser_tab_bt" value="편집"/> -->
					<input type="reset" id="code_cancle_nfbtn" class="iuser_tab_bt" value="취소"/>
					<!-- <input type="button" id="addsavebtn" class="iuser_tab_bt" value="저장"/> -->
					<!-- <input type="button" id="modifysavebtn" class="iuser_tab_bt" style="display:none;" value="저장"/> -->
				</div>
			</form>
		</div>
	</div>
	</div>

</body>
</html>


