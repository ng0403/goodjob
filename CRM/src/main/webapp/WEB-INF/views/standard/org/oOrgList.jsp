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
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" /> --%>
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">

<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/oOrgList.js"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>
<script type="text/javascript">
$("#navisub11").show();
$("#naviorg").css("font-weight", "bold");
</script>	

</head>
<body id="aorgList">
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff; padding: 10px;">■ 조직대표</h3>
		</div>
	</div>

	<div class="bt_position">
		<form class="searchForm" name="searchForm" method="post" action="${ctx}/oOrgList">
			<select name="searchKey" class="selectField" style="background: #fff;">
				<option value="iuser_nm">사용자명</option>
				<option value="position">직책</option>
				<option value="id_nm">사용자ID</option>
			</select>
			<input type="text" name="searchValue" class="inputText" id="title_text" /> &nbsp;
			<button type="submit" id="search_btn" class="tiny ui orange button">검 색</button>
		</form>
	</div>
											
		    <div class="bs-example_orglist" data-example-id="simple-table">
				   <table id="mastertable" class="ui celled table">
				        <thead>				
							<tr>
								<th>
									<input id="allCheck" type="checkbox"/>
								</th>
								<th style="width: 30.3%;">아이디</th>
								<th style="width: 30.3%;">사용자명</th>
								<th style="width: 40%;">직책</th>
							</tr>
								</thead>
								<tbody class="otbody">
									<c:forEach var="orgUser" items="${orgOlist}">
									<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
										<th scope="row" style="width: 3%;">
											<input type="checkbox" class="ab" id="checkCode" name="checkCode" value="${orgUser.iuser_id}">
										</th>										
										<td style="width: 30%;">${orgUser.id_nm}</td>
										<td style="width: 30%;">${orgUser.iuser_nm}</td>
										<td>${orgUser.cd_nm}</td>
									</tr>											
									</c:forEach>
								</tbody>
							</table>      
                 <div class="bt_position">
					<input type="button" class="button search_btn" value="선택" id="oorgChoice"/>
					<input type="button" class="button search_btn" value="취소" onclick="allChk(obj);"/>
				</div>      
                <div style="clear:both"></div>
            </div>		
</body>
</html>