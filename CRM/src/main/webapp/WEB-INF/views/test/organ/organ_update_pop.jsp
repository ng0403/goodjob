<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/orgDetail.css" type="text/css" />
<title>ORG 수정하기</title>
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
			<div id="tabDiv1" class="tab1_content" style="height: 250px;">
				<form method="post" id="joinform">
					<table class=table>
						<tbody id="tbody1">
							<c:forEach var="organCheck" items="${organCheck}">
							<tr>
								<th>조직ID</th>
								<td><input type="text" value="${organCheck.ORG_ID}" name="ORG_ID" id="ORG_ID" class="int"></input></td>
								
								<th>조직명</th>
								<td><input type="text" value="${organCheck.ORG_NAME}" name="ORG_NAME" id="ORG_NAME" class="int"></input></td>
							</tr>
							<tr>
								<th>상위조직ID</th>
								<td><input type="text" value="${organCheck.P_ORG_ID}" name="P_ORG_ID" id="P_ORG_ID" class="int" /></td>	
								
								<th>상위조직명</th>
								<td><input type="text" value="${organCheck.MAIN_GROUND}" name="MAIN_GROUND" id="MAIN_GROUND" class="int" /></td>
							</tr>
							<tr>
								<th>조직유형ID</th>
								<td><input type="text" class="int" value="${organCheck.ORG_TYPE_ID}" name="ORG_TYPE_ID" id="ORG_TYPE_ID" /></td>
								
								<th>대표사원ID</th>
								<td><input type="text" class="int" value="${organCheck.ORG_LEVEL_CD}" name="ORG_LEVEL_CD" id="ORG_LEVEL_CD" /></td>
							</tr>
							<tr >				
								<th>전화번호</th>
								<td><input type="text" value="${organCheck.PHONE_NO}" name="PHONE_NO" id="PHONE_NO" class="int" maxlength="15" /></td>
								
								<th>팩스번호</th>
								<td><input type="text" value="${organCheck.FAX_NO}" name="FAX_NO" id="FAX_NO" class="int" maxlength="15" /></td>							
							</tr>						
							<tr >						
								<th>주소</th>
								<td colspan="3">
									<input type="text" value="${organCheck.ZIP_NO}" name="ZIP_NO" id="ZIP_NO" class="int_zip" />
									<input type="hidden" id="zip_cd_sri_num" name="zip_cd_sri_num" />	
									<input type="button" class="org_btn" value="검색" id="orgaddr" onclick="organAdder_pop();"/>
									<input type="text" value="${organCheck.ADDR_DETAIL}" name="ADDR_DETAIL" id="ADDR_DETAIL" class="int_zipadd1" />
								</td>
							</tr>
							<tr >
								<th>활성화여부</th>
								<td style="padding : 10px 0px 0px 30px;">
								<input type="radio" value="${organCheck.ACTIVE_FLG}" name="ACTIVE_FLG"  id="ACTIVE_FLG_Y"  checked="checked" value="Y" />&nbsp;Y&nbsp;&nbsp;
								<input type="radio" value="${organCheck.ACTIVE_FLG}" name="ACTIVE_FLG"  id="ACTIVE_FLG_N" value="N" />&nbsp;N</td>
								<th>&nbsp;</th>
								<td>&nbsp;</td>
							</tr>
						</c:forEach>
					</tbody>							
				</table>
			</form>			  
		</div>
		
		<div class="bt_position_detail">
			<input type="button" id="closebtn" class="iuser_tab_bt" value="닫기"/>
			<input type="button" id="submitbtn" class="addsavebtn" value="저장"  />
		</div>	

     	<c:if test="${result=='success'}" var = "result"> 
			<script>window.close();
			
				opener.parent.location.href = "organList";
				
			</script>
		 </c:if>
		 
		 <script>
		 
		 $(document).ready(function() {
			 
				$("#submitbtn").on("click", function() {
					 
					$('form').attr("action", "${ctx}/organ/organ_update").submit(); 
					alert("저장완료");
				});
				
				$("#closebtn").on("click", function() {
					 
					window.close();
				});
			});
	   	</script>
	    
</body>
</html>