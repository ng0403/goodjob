<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/home/home.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/home/home.js"></script>
<script src="${ctx}/resources/common/js/standard/d3.min.js"></script>

<title>CRM SOLUTION</title>
</head>
<body>
<div id="title">
<input type="hidden" id="ctx" value="${ctx}"/>
	<div class="caption">■ 홈</div></div>
	
	<div id="left_home" style="height: 40%;">
	   <div id="contract_title">
	   		<div id="hometext">
	   			■ 금일영업활동
	   		</div>
	   		<div id="homebtn">
		    	<input type="button" class="tiny ui button" value="상세보기" id="opptActBtn">
	   		</div>
	   </div>

	   <div id="tableline1" class="tableline">
			<table id="acttable">
				<thead>
					<tr>
						<th>영업활동명</th>
						<th>고객사</th>
						<th>시작일자</th>
						<th>종료일자</th>
					</tr>
				</thead>
				<tbody > <!-- id="acttable" -->
					<c:forEach items="${opptActList}" var="opptActList" begin="0" end="4">
						<tr>
							<td>${opptActList.SALES_ACTVY_NM}</td>
							<td>${opptActList.CUST_NM}</td>
							<td>${opptActList.STRT_D}</td>
							<td>${opptActList.END_D}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		 </div>
	  </div>
<!-- 	<div id="left_home"> -->
<!-- 	   <div id="contract_title"> -->
<!-- 	   ■ 계약실적 -->
<!-- 	   <input type="button" class="detailPopbtn" value="상세보기" id="estimResultBtn"> -->
<!-- 	   </div> -->

<!-- 	   <div id="tableline"> -->
<!-- 			<table id="goaltable"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<td rowspan="2">부서<-- 						<td rowspan="2">담당자</td> -->
<!-- 						<td colspan="2">전월</td> -->
<!-- 						<td colspan="2">당월</td> -->
<!-- 					</tr> -->
<!-- 					<tr> -->
<!-- 						<td>실적</td> -->
<!-- 						<td>이익</td> -->
<!-- 						<td>실적</td> -->
<!-- 						<td>이익</td> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 				<tbody> -->
<!-- 					<tr> -->
					
<%-- 						<td>${loginOrgNm}</td> --%>
<%-- 						<td>${loginIuserNm}</td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${contrResultSum.lastMonthSum}</fmt:formatNumber></td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${contrResultSum.lastMonthProfit}</fmt:formatNumber></td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${contrResultSum.thatMonthSum}</fmt:formatNumber></td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${contrResultSum.thatMonthSum}</fmt:formatNumber></td> --%>
<!-- 					</tr> -->
<!-- 				</tbody> -->
<!-- 			</table> -->
<!-- 		 </div> -->
<!-- 	  </div> -->
	  
<!-- 	  <div id="right_home"> -->
<!-- 	   <div id="contract_title"> -->
<!-- 	   ■ 영업 pipeline(3개월) -->
<!-- 	   <input type="button" class="detailPopbtn" value="상세보기" id="pipeLineBtn"> -->
<!-- 	   </div> -->
	   
<!-- 	   <div id="tableline"> -->
<!-- 			<table id="goaltable"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<td>부서</td><td>담당자</td><td>M+1</td><td>M+2</td><td>M+3</td> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 				<tbody> -->
<!-- 					<tr> -->
<%-- 						<td>${loginOrgNm}</td> --%>
<%-- 						<td>${loginIuserNm}</td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${pipeLineSum.oneMonth}</fmt:formatNumber></td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${pipeLineSum.twoMonth}</fmt:formatNumber></td> --%>
<%-- 						<td style="text-align: right;"><fmt:formatNumber>${pipeLineSum.threeMonth}</fmt:formatNumber></td> --%>
						
<!-- 					</tr> -->
<!-- 				</tbody> -->
<!-- 			</table> -->
<!-- 		</div> -->
<!-- 	  </div> -->
	  
	  <div id="right_home" style="height: 40%;">
	   <div id="contract_title">
		   <div id="hometext">
		   		■ 영업기회
		   </div>
		   <div id="homebtn">
		   		<input type="button" class="tiny ui button" id="oppt_detail" value="상세보기">
		   </div>
	   </div>
	   		<!-- 영업기회 상태 차트  -->
		<div id="chart_oppt_status" style="margin-left: 120px;"><!-- style="margin-top: 5%; margin-left: 19%;" -->
<!-- 			<h1>영업기회 상태 현황</h1> -->
				<svg id="myGraph" style="width: 450px; height: 215px;">
				</svg>
					<script src="${ctx}/resources/common/js/sales/oppt/opptChart.js"></script>
		</div> 
<!-- 	   <div id="tableline"> -->
<!-- 			<table id="goaltable"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<td>영업기회명</td><td>영업단계</td><td>예정일자</td><td>부서</td><td>담당자</td> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 				<tbody> -->
<%-- 				<c:forEach items="${opptList}" var="opptList" begin="0" end="4"> --%>
<!-- 					<tr> -->
<%-- 						<td>${opptList.sales_oppt_nm}</td> --%>
<%-- 						<td>${opptList.sales_lev_cd_nm}</td> --%>
<%-- 						<td>${opptList.expt_fin_d}</td> --%>
<%-- 						<td>${opptList.org_nm}</td> --%>
<%-- 						<td>${opptList.cust_id}</td> --%>
<!-- 					</tr> -->
<%-- 				</c:forEach> --%>
<!-- 				</tbody> -->
<!-- 			</table> -->
<!-- 		</div> -->
	  </div>
	  
<!-- 	  <div id="right_home"> -->
<!-- 	   <div id="contract_title"> -->
<!-- 	   ■ 일정/약속 -->
<!-- 	   <input type="button" class="detailPopbtn" id="schedule_detail" value="상세보기"> -->
<!-- 	   </div> -->
<!-- 	   <div id="tableline"> -->
<!-- 			<table id="goaltable" class="scheduletable"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<td>약속유형</td><td>약속내용</td><td>일자</td><td>담당부서</td><td>담당자</td> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 				<tbody> -->
<!-- 					<tr> -->
<%-- 						<td>${schedule.CD_NM}</td> --%>
<%-- 						<td>${schedule.SCHEDULE_CONT}</td> --%>
<%-- 						<td><fmt:formatDate value="${schedule.SCHEDULE_DT}" pattern="yyyy-MM-dd HH:mm"/></td> --%>
<%-- 						<td>${schedule.ORG_NM}</td> --%>
<%-- 						<td id="scheduleId">${schedule.FST_REG_ID_NM}</td> --%>
<!-- 					</tr> -->
<!-- 				</tbody> -->
<!-- 			</table> -->
<!-- 		</div> -->
<!-- 	  </div> -->
	  <div id="left_home" style="height: 40%;">
	   <div id="contract_title">
	   		<div id="hometext">
	   			■ 공지사항
	   		</div>
	   		<div id="homebtn">
	   			<input type="button" class="tiny ui button" id="notice_detail" value="상세보기">
	   		</div>
	   </div>
	   
	   <div id="tableline">
			<table id="goaltable" class="noticetable">
				<thead>
					<tr>
						<td>글번호</td><td>제목</td><td>게시자</td><td>작성일</td><td>조회수</td>
					</tr>
				</thead>
				<tbody>
				<c:forEach items="${boardVO}" var="boardVO" begin="0" end="5"> 
					<tr>
					   <td>${boardVO.BOARD_NO}</td>
						<td>
							<a href="/boardDetail?BOARD_NO=${boardVO.BOARD_NO}" class="noticebtn" style="text-decoration: none;">${boardVO.TITLE}</a>
						</td>
 						<td>${boardVO.CREATED_BY}</td>
						<td>${boardVO.CREATED}</td>
						<td>${boardVO.VIEW_CNT}</td>
 					</tr>
 					</c:forEach>
				</tbody>
			</table>
		</div>
	  </div>
	  <div id="right_home"  style="height: 40%;">
	   <div id="contract_title">
	   		<div id="hometext">
	   			■ 자료실
	   		</div>	
	   		<div id="homebtn">
	   			<input type="button" class="tiny ui button" id="dboard_detail" value="상세보기">
	   		</div>	
	   </div>
	   
	   <div id="tableline">
			<table id="goaltable" class="dboardtable">
				<thead>
					<tr>
						<td>글번호</td><td>제목</td><td>게시자</td><td>작성일</td><td>조회수</td>
					</tr>
				</thead>
				<tbody>
			<c:forEach items="${fBoardList}" var="fBoardList" begin="0" end="5">  
					<tr>
						<td>${fBoardList.BOARD_NO}</td>
						<td>
							<a href="/boardDetail?BOARD_NO=${fBoardList.BOARD_NO}" class="dboardbtn" style="text-decoration: none;">${fBoardList.TITLE}</a>
						</td>
						<td>${fBoardList.CREATED_BY}</td>
						<td>${fBoardList.CREATED}</td>
						<td>${fBoardList.VIEW_CNT}</td>
 					</tr>
			</c:forEach>
				</tbody>
			</table>
		</div>
	  </div>
</body>
</html>