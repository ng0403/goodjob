<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet"
	href="${ctx}/resources/common/css/sales/oppt/pipeLine_list_popup.css" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<input type="hidden" id="ctx" value="${ctx}" />
<div id="tableline">
<br>
<div>
	<span>�� ���� pipeline</span>
	</div>
			<table id="goaltable">
				<thead>
					<tr>
						<td>�μ�</td>
						<td>�����</td>
						<td>M+1</td>
						<td>M+2</td>
						<td>M+2</td>
					</tr>
					
				</thead>
				<tbody>
					
						<c:forEach var="list" items="${pipeLineList}">
							<c:choose>
								<c:when test="${list.org_id ne null && list.iuser_nm ne null && list.org_nm ne null}">
								<tr class="normal">
									<td></td>
									<td>${list.iuser_nm}</td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.oneMonth}" groupingUsed="true"/></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.twoMonth}" groupingUsed="true" /></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.threeMonth}" groupingUsed="true" /></td>
								</tr>
								</c:when>
								<c:when test="${list.org_id eq null && list.iuser_nm eq null && list.org_nm ne null}">
								<tr class="teamSum" style="background-color: #FFFFC6">	
									<td>${list.org_nm}</td>
									<td>�� ��</td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.oneMonth}" groupingUsed="true"/></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.twoMonth}" groupingUsed="true" /></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.threeMonth}" groupingUsed="true" /></td>	
								</tr>
								</c:when>
								<c:when test="${list.org_id eq null && list.iuser_nm eq null && list.org_nm eq null}">
								<tr class="allSum" style="background-color: #BBFFFF;">	
									<td colspan="2">��</td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.oneMonth}" groupingUsed="true"/></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.twoMonth}" groupingUsed="true" /></td>
									<td style="text-align: right;"><fmt:formatNumber value="${list.threeMonth}" groupingUsed="true" /></td>	
								</tr>
								</c:when>
								</c:choose>
								</c:forEach>
								
				</tbody>
			</table>
		 </div>
	
	  



</body>
</html>