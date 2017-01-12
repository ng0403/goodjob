<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>조직대표</title>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/oOrgList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/oOrgList.js"></script>
<script type="text/javascript">
$("#navisub11").show();
$("#naviorg").css("font-weight", "bold");
</script>	
</head>
<body id="aorgList">

<div id="title">
<br>
<div class="caption">■ 조직대표</div>
</div>

<div class="bt_position">		
	<form class="searchForm" name="searchForm" method="post" action="${ctx}/oOrgList">
		<select name="searchKey" class="selectField">
			<option value="iuser_nm">사용자명</option>
			<option value="position">직책</option>
			<option value="id_nm">사용자ID</option>
		</select>
			<input type="text" name="searchValue" class="boxTF" id="title_text" /> &nbsp;
			<button type="submit" id="search_btn" class="org_search_bt">검 색</button>
	</form>
</div>
											
		    <div class="bs-example_orglist" data-example-id="simple-table">
				   <table id="mastertable">
				        <thead>				
							<tr>
								<th><input id="allCheck" type="checkbox"/></th>
								<td style="width: 35%;">아이디</td>
								<td style="width: 35%;">사용자명</td>
								<td style="width: 30%;">직책</td>
							</tr>
								</thead>
								<tbody class="otbody">
									<c:forEach var="orgUser" items="${orgOlist}">
									<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
										<th scope="row"><input type="checkbox" class="ab" id="checkCode" name="checkCode" value="${orgUser.iuser_id}"></th>										
										<td style="width: 35%;">${orgUser.id_nm}</td>
										<td style="width: 35%;">${orgUser.iuser_nm}</td>
										<td style="width: 30%;">${orgUser.cd_nm}</td>
									</tr>											
									</c:forEach>
								</tbody>			
							</table>      
                 <div class="bt_position">
					<input type="button" class="org_ceo_bt" value="선택" id="oorgChoice"/>
					<input type="button" class="org_ceo_bt" value="취소" onclick="allChk(obj);"/>
				</div>      
                <div style="clear:both"></div>
            </div>		
</body>
</html>