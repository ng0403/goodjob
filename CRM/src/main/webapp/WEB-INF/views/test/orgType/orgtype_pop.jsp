<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserTab.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserTab.js"></script>

<title>Insert title here</title>
</head>
<body>
	<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
	<input type="hidden" id="ctx" value="${ctx}">

	<div class="userpadding">

		<div id="css_tabs">
			<!-- 라벨 : 화면에 표시되는 탭 제목 -->
			<label for="tab1">조직유형</label>

			<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
			<div id="tabDiv1" class="tab1_content">
				<form action="orgtypeAdd" method="post" id="joinform">
					<table class="table">
						<tbody id="tbody1">
							<tr>
								<th>조직유형ID</th>
								<td>
									<input type="text" name="org_type_id" id="org_type_id" class="iuser_txt" style="ms-ime-mode: disabled;"></input></td>
								<th>조직유형명</th>
								<td>
									<input type="text" name="org_type_name" id="org_type_name" class="iuser_txt"></input></td>
								<th>상위조직유형ID</th>
								<td>
									<input type="text" name="p_org_type_id" id="p_org_type_id" class="iuser_txt"></input>
								</td>
							</tr>
							<tr>
							</tr>
						</tbody>
					</table>
					<br>
					
					<div class="bt_position_authuser">
						<input type="button" id="orgtype_add_fbtn" class="iuser_tab_bt" value="추가"/>
						<input type="button" id="modifybtn" class="iuser_tab_bt" value="편집"/>
						<input type="reset" id="orgtypeadd_rest_nfbtn" class="iuser_tab_bt" value="리셋"/>
						<input type="button" id="orgtypeadd_cancel_nfbtn" class="iuser_tab_bt" value="취소"/>
						<input type="button" id="modifysavebtn" class="iuser_tab_bt" style="display:none;" value="저장"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<c:if test="${result=='success'}" var = "result"> 
			<script>window.close();
			opener.parent.location.href = "orgtypeInqr";
			</script>
	</c:if>
		 
	<script type="text/javascript">
		$("#orgtype_add_fbtn").on("click", function(){ 
			$("#joinform").submit();
		});
	
		$("#orgtypeadd_cancel_nfbtn").on("click", function(){  
			self.close();	// 창 닫기
		});
	</script>

</body>
</html>


