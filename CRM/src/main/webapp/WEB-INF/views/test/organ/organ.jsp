<!-- 
업 무 명 : organ 조직조회 화면
작 성 자 : 송영화(yhsong@coreplus.co.kr)
작 성 일 : 2017.01.16
수 정 자 : -
수 정 일 : -
내    용 : 조직에 대한 조회정보를 보여준다.
참고사항 : 없음
-->
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<title>조직</title>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/organ.css" type="text/css" />
</head>
<body id="aorgList">
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

	<div id="title">
	<div class="caption">■ 조직대표</div></div>
	<div class="bt_position">		
		<form class="searchForm" name="searchForm" method="post" action="${ctx}/test/organ">
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
    	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/organ/organ_delete" >
		   <table id="mastertable">
		        <thead>				
					<tr>
						<th><input id="checkall" type="checkbox" /></th>
						<td style="width: 10%;">조직ID</td>
						<td style="width: 20%;">조직명</td>
						<td style="width: 20%;">상위조직명</td>
						<td style="width: 10%;">조직유형</td>
						<td style="width: 10%;">조직레벨</td>
						<td style="width: 10%;">전화번호</td>
						<td style="width: 10%;">팩스번호</td>
						<td style="width: 10%;">상태</td>
					</tr>
				</thead>
				<tbody class="otbody">
					<c:forEach var="organList" items="${List}">
						<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
							<th scope="row"><input type="checkbox" name="ORG_ID" class="ab" name="del_code" value="${organList.ORG_ID}"></th>			
							<td style="width: 10%;" class="user_name_tag" id="${organList.ORG_ID}" onclick="openUpdatePop(this.id);">
								${organList.ORG_ID}
							</td>
							<td style="width: 20%;" class="user_name_tag">${organList.ORG_NAME}</td>
							<td style="width: 20%;" class="user_name_tag">${organList.MAIN_GROUND}</td>
							<td style="width: 10%;" class="user_name_tag">${organList.ORG_TYPE_ID}</td>
							<td style="width: 10%;" class="user_name_tag">${organList.ORG_LEVEL_CD}</td>
							<td style="width: 10%;" class="user_name_tag">${organList.PHONE_NO}</td>
							<td style="width: 10%;" class="user_name_tag">${organList.FAX_NO}</td>
							<td style="width: 10%;" class="user_name_tag">${organList.ACTIVE_FLG}</td>
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