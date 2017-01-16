<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<title>Insert title here</title>
</head>
<body>
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<div id="title">
	<div class="caption">■ 스타벅스</div></div>
	<div class="bt_position">		
		<form class="searchForm" name="searchForm" method="post" action="${ctx}/test/organ">
			<select name="searchKey" class="selectField">
				<option value="iuser_nm">아이디</option>
				<option value="position">직책</option>
				<option value="id_nm">사용자ID</option>
			</select>
			<input type="text" name="searchValue" class="boxTF" id="title_text" /> &nbsp;
			<button type="submit" id="search_btn" class="org_search_bt">검 색</button>
		</form>
	</div>
												
    <div class="bs-example_orglist" data-example-id="simple-table">
    	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/organ/organ_delete" >
		   <table id="mastertable">
		        <thead>				
					<tr>
						<th><input id="checkall" type="checkbox" /></th>
						<td style="width: 20%;">아이디</td>
						<td style="width: 20%;">비밀번호</td>
						<td style="width: 20%;">전화번호</td>
						<td style="width: 20%;">주소</td>
						<td style="width: 20%;">비고</td>
					</tr>
				</thead>
				<tbody class="otbody">
					<c:forEach var="starList" items="${starList}">
						<tr>
							<th scope="row"><input type="checkbox" name="ST_ID" class="ab" name="del_code" value="${starList.ST_ID}"></th>			
							<td style="width: 20%;" class="user_name_tag" id="${starList.ST_ID}" onclick="openUpdatePop(this.id);">
								${starList.ST_ID}
							</td>
							<td style="width: 20%;" class="user_name_tag">${starList.ST_PW}</td>
							<td style="width: 20%;" class="user_name_tag">${starList.ST_PHONE}</td>
							<td style="width: 20%;" class="user_name_tag">${starList.ST_ADDR}</td>
							<td style="width: 20%;" class="user_name_tag">${starList.ST_ETC}</td>
						</tr>											
					</c:forEach>
				</tbody>			
			</table>   
		</form>   
     </div>     
	<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">
		<input type="button" id="iuserListAddBtn"  class="iuser_bt" value="등록"  />
		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정"  />
		<input type="button" id="iuserDelBtn"      class="iuser_bt" value="삭제" />
	</div>  
    <div style="clear:both"></div>
    
    <script type="text/javascript">
    	
    $("#iuserListAddBtn").on("click", function(){  
		
		openPop();
		
	})
	
	$("#iuserListEditBtn").on("click", function(){  
		
		openUpdatePop();
	
	})
	
	$("#iuserDelBtn").on("click", function(){  
		
		$('form').attr("action", "${ctx}/organ/organ_delete").submit(); 
		
	})	

	function openPop() {
		
		var popUrl = "organ_pop"; 		//팝업창에 출력될 페이지 URL
		var popOption = "width=1380, height=450, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)

		window.open(popUrl, "", popOption);
	}
	
	function openUpdatePop(id){
		
		var check = id;  
		var popUrl = "organ_update_pop?ORG_ID="+check;	//팝업창에 출력될 페이지 URL
		var popOption = "width=1380, height=450, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
				window.open(popUrl,"",popOption); 
	}
		
	$("#checkall").on("click", function() {

		if ($("#checkall").prop("checked")) {

			$("input[name=ORG_ID]").prop("checked", true);
			
		} else {
			
			$("input[name=ORG_ID]").prop("checked", false);
		}

	})
    
    </script>
    

</body>
</html>