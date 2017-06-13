<%@ page import="java.text.SimpleDateFormat"%>
<%@ page contentType="text/html; charset=UTF-8" isELIgnored="false" pageEncoding="UTF-8" %>
<%@ page import="org.springframework.web.util.UriUtils" %>
<%@ page import="java.util.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
	SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ( "yyyyMMddHHmmss", Locale.KOREA );
	Date currentTime = new Date();
	String mTime = mSimpleDateFormat.format (currentTime);
	response.setHeader("Content-Disposition", "attachment; filename="+UriUtils.encodeFragment("고객사_","UTF-8")+mTime+".xls;'");
	response.setHeader("Content-Description", "JSP Generated Data");
	response.setContentType("application/vnd.ms-excel");
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
.custcompExcelTbl {
	border: thin solid black;
}
.header{
	border: thin solid black;
	background-color: #f9ffff;
	text-align: center;
}
.body{
	border: thin solid black;
	text-align: center;
}
</style>
</head>
<body>
<table class="custcompExcelTbl">
	<thead>
		<tr>
			<th class="header"> No </th>
			<td class="header" style="width: 10%;">고객사명</td>
			<td class="header" style="width: 10%;">사업자번호</td>
			<td class="header" style="width: 10%;">법인번호</td>
			<td class="header" style="width: 10%;">대표전화번호</td>
			<td class="header" style="width: 10%;">매출규모</td>
			<td class="header" style="width: 10%;">직원수</td>
			<td class="header" style="width: 10%;">산업군</td>
			<td class="header" style="width: 10%;">수정일</td>
		</tr>
	</thead>
	<tbody>
		<c:if test="${not empty custcompExcel}">			
			<c:forEach var="custcompExcel" items="${custcompExcel}" >
				<tr>
					<td class="body"><c:out value="${custcompExcel.RNUM}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.CUST_NM}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.COMP_NUM}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.CORP_NUM}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.REP_PH1}-${custcompExcel.REP_PH2}-${custcompExcel.REP_PH3}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.SALES_SCALE}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.EMP_QTY}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.INDST}"></c:out></td>
					<td class="body"><c:out value="${custcompExcel.FIN_MDFY_DT}"></c:out></td>
				</tr>
			</c:forEach>
		</c:if>
			
		<c:if test="${custcompExcel.size() == 0}">
			<tr style="cursor: default; background-color: white;">
				<td colspan="9" style="height: 100%; text-align: center;"><b>검색 결과가 없습니다.</b></td>
			</tr>
		</c:if>
	</tbody>
	</table>
</body>
</html>