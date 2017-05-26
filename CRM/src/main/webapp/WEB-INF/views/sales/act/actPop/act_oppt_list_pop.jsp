<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }"/>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_list_pop.css" type="text/css" /> --%>
<!-- 테이블 th고정 CSS -->
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/tableThFixed.css" type="text/css" />

<!-- 테이블 th고정 자바스크립트 -->
<script type="text/javascript" src="${ctx}/resources/common/js/standard/common/tableThFixed.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_pop.js"></script>

<title>영업기회 리스트</title>
</head>
<body class="body">
   <input type="hidden" id="ctx" value="${ctx}"/>
   <div id="title" class="title">
      <div class="caption">
         <label class="label_header" >■ 영업기회 리스트</label>
<!--          <h3 class="ui header" style="background: #fff; padding: 10px;">■ 영업기회 리스트</h3> -->
      </div>
      
      <div class="act_oppt_search">
         <form name="searchForm" method="post" action="${ctx}/actOpptList">
            <select name="keyfield" style="background: #fff;">
                <option value="oppt_id">영업기회ID</option>
               <option value="oppt_nm">영업기회명</option>
            </select>
            <input id="search_text" type="text" name="keyword" class="inputText"> &nbsp;
            <button id="search_btn" type="submit" class="search_button">검색</button>
         </form>
      </div>
   
   <div class="custcomp_iuser_list_div"> <!-- class="act_oppt_list_div" -->
      <table id="act_oppt_list_table" class="thFixedtbl">
         <thead class="thead">
            <tr class="tr_table_fix_header">
               <th class="thead_th">영업기회ID</th>
               <th class="thead_th">영업기회명</th>
               <th class="thead_th">영업단계</th>
               <th class="thead_th">예상매출액</th>
               <th class="thead_th">예상마감일자</th>
               <th class="thead_th">가능성(%)</th>
               <th class="thead_th">상태</th>
            </tr>
         </thead>
         <tbody class="tbody">
            <c:forEach var="actOpptList" items="${actOpptList}"> 
            <tr class="up">
               <td class="tbody_tr_td" id="sales_oppt_id">${actOpptList.sales_oppt_id}</td>
               <td class="tbody_tr_td" id="sales_oppt_nm">${actOpptList.sales_oppt_nm}</td>
               <td class="tbody_tr_td">${actOpptList.sales_lev_cd}</td>
               <td class="tbody_tr_td">${actOpptList.expt_sales_amt}</td>
               <td class="tbody_tr_td">${actOpptList.expt_fin_d}</td>
               <td class="tbody_tr_td">${actOpptList.psblty_rate}</td>
               <td class="tbody_tr_td">${actOpptList.sales_oppt_stat_cd}</td>
            </tr>
         </c:forEach>
         </tbody>
      </table>
   </div>
   </div>
<!-- </div> -->
</body>
</html>