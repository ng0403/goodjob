<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserList.css" type="text/css" />
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserList.js"></script>	 --%>
 
 <title>코드리스트</title>
<script type="text/javascript">
/* $("#navisub11").show();
$("#naviuser").css("font-weight", "bold"); */
$(function(){
	$("#code_add_fbtn").on("click", function(){  
	 
		var popUrl = "insertPop";	//팝업창에 출력될 페이지 URL
		var popOption = "width=370, height=500, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)
			window.open(popUrl,"",popOption);
	})
	
	$("#code_del_fbtn").on("click", function(){
		var del_code = "";
		  $( "input[name='del_code']:checked" ).each (function (){
			  del_code = del_code + $(this).val()+"," ;
		  });
		  /* del_code = del_code.substring(0,del_code.lastIndexOf( ",")); //맨끝 콤마 지우기 */
		  del_code = del_code.split(","); //맨끝 콤마 지우기
		if(del_code == ""){
			alert("삭제할 대상을 선택해 주세요");
			return false;
		}else{
			$("#delAllForm").submit();
		}
	})
	
	// 1.모두 체크
	/* 체크박스 전체선택, 전체해제 */
	$("#allCheck").on("click", function(){
	      if( $("#allCheck").is(':checked') ){
	        $("input[name=del_code]").prop("checked", true);
	      }else{
	        $("input[name=del_code]").prop("checked", false);
	      }
	})
})	
</script>

</head>
<body>
	<div id="title">
		<div class="caption">■ 공통코드</div>
		<div class="bt_position">
		<form name="searchForm" method="post" action="${ctx}/user">
			<select name="keyfield">
				<option value="code">코드</option>
				<option value="code_name">코드명</option>
			</select>
			<input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="code_inqr_fbtn" type="submit" class="iuser_serach_bt">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post" action="delete" >	
		<table id="mastertable">
			<%-- <colgroup>
				<col width="5%">
				<col width="10%">
				<col width="10%">
				<col width="15%">
				<col width="50%">
				<col width="10%">
			</colgroup> --%>
			<thead>
				<tr>
					<th style="width:5%;"><input id="allCheck" type="checkbox"/></th>
					<td style="width:10%;">코드</td>
					<td style="width:10%;">코드 이름</td>
					<!-- <td style="width:10%;">시작일자</td> -->
					<!-- <td style="width:10%;">종료일자</td> -->
					<td style="width:15%;">전시순서</td>
					<td style="width:50%;">코드설명</td>
					<td style="width:10%;">활성화여부</td>
				</tr>
			</thead>
			<tbody id="usertbody">
				<c:forEach var="codeList" items="${codeList}">
				<tr>
					<th scope="row" style="width:5%;"><input type="checkbox" class="ab" name="del_code" value="${codeList.code}"></th>
					<td style="text-align: left; width:10%;">
						<input type="hidden" id="code" name="code" value='${codeList.code}'>
						<a href="#" onclick="window.open('updatePop?code=${codeList.code}','newwindow','width=370, height=500');" class="a_notice">${codeList.code}</a>
					</td>
					<td style="width:10%;">${codeList.code_name}</td>
					<td style="width:15%;">${codeList.display_seq}</td>
					<td style="width:50%;">${codeList.code_desc}</td>
					<td style="width:10%;">${codeList.active_flg}</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>

		<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">
		<input type="button" id="code_add_fbtn" class="iuser_bt" value="등록"/>
		<!-- <input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정"/> -->
		<input type="button" id="code_del_fbtn" class="iuser_bt" value="삭제"/>
	</div>
</body>
</html>