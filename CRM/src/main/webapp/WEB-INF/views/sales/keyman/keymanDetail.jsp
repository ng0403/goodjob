<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>


   
<title>Insert title here</title>
</head>
<body>
<!-- <div id="title">
		<div class="caption">
		<h3 class="ui header" style="background: #fff;">■ 고객 > <a href="/contact" style="font-size: 14pt; text-decoration:none; color: blue;">연락처</a> > 연락처 상세 </h3>
		</div>
	</div>
 -->
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="nowCall_id"/>
	<input type="hidden" id="hCust_div_nm"/>
	<div id="css_tabs">
 		
		<form id="contactForm" method="post" role="form" >
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
 
        <!-- 개인고객 -->
        <div class="detailBtn">
		<div id="baseBtnDiv" class="bt_position_authuser">
  		    <input type="button" id="custpsonBtn" value="편집" class="tiny ui button" onclick="callCustBtn();"/>
		    <input type="button" id="custpsonAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="tiny ui button"/>
		    
 		</div> 
	 </div>
		<!-- 개인고객 추가 저장/취소 버튼  -->
		<div class="detailBtn">
		<div id="baseBtnDiv1" style="display: none;" class="bt_position_authuser">
 			<input type="button" id="custpsonAddSaveBtn" value="저장"  onclick="updateKeyman()" class="tiny ui blue button"/>
			<input type="button" id="custpsonAddCancelBtn" value="취소" onclick="callAddCancelBtn()" class="tiny ui button"/>
	    </div>
	  </div>
				
		<div class="call_tab_div" style="margin-top:100px">
			<table id="contactable">
				<tbody id="contactbody" class="ui celled table">
					<tr>  
						<th>
						<span style="color:red">*회사명</span>
						</th>
						<td>
						    <div class="ui input focus"> 
						    <input type="hidden" id="hcomp_nm"/>
						    <input type="hidden" name="cust_id" id="cust_id"/>
						    <input type="text" name="cust_nm" id="cust_nm" class="int" readonly="readonly" /> 
						    <input type="button" name="compSearch" value="회사" class="tiny ui blue basic button" id="comp_list_bt" disabled/>
							</div>
						</td> 
						
						
						
						<th><span style="color:red">*이름</span></th>
						<td>
						<div class="ui input focus">
						<input type="hidden" name="cont_id" id="cont_id"/>
       					<input type="text" name="cont_nm" id="cont_nm" class="int" readonly="readonly" />
					    <input type="button" name="contSearch" value="연락처" class="tiny ui blue basic button" id="cont_list_bt" disabled/>
						
						</div>
						</td>
		
						<!-- <th>구분</th>
						<td>
						   <input type="text" name="cust_div_nm" id="cust_div_nm" class="int"/>
						</td> -->
					
						</tr>
						
						<tr>
						
					<th>부서</th>
						<td> 
						<div class="ui input focus">
						    <input type="text" name="cdept_nm"  id="cdept_nm"  class="int" style='ime-mode:disabled;' readonly="readonly"/>
 						</div>
 						</td>	
						
					<th>직급</th>
						<td colspan="3">
						<div class="ui input focus">
 						    <input type="text" name="key_pos" id="key_pos" class="int"  readonly="readonly"/>
						</div>
						</td>	 
					</tr>		
						
					<tr>
					
						<th>역할</th>
						<td>
						<div class="ui input focus">
 						    <input type="text" name="key_part" id="key_part"  class="int" style='ime-mode:disabled;' readonly="readonly"/>
						</div>
						</td>
						<th>직무</th>
						<td>
						<div class="ui input focus">
						<input type="text" name="key_job" id="key_job" class="int"/>
						</div>
						</td>	 
					</tr> 
					 <tr>
					 <th>메모</th>
					 <td colspan="3">
					 <div class="ui input focus">
					 <input type="text" name="memo" id="memo" class="int" readonly="readonly"/>
					 </div>
					 </td>
					 </tr>
 				</tbody>
			</table>
			</div>
		  </div>
		</form>
 </body>
</html>