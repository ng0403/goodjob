<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserList.js"></script>	
 --%>
  <style type="text/css">
@CHARSET "UTF-8";
html{
   font-family: 'Nanum Gothic', Dotum, "돋움", Gulim, "굴림", Verdana, Arial, "Trebuchet MS";
   border-collapse: collapse;
    border-spacing: 0;
    font-size:13px;
}

select{
    margin-left: 10px;
      background-color:#ffffff;
     color:#5F5F5F;
     border:1px solid #C0C4CB;
     padding:5px 5px;
     border-radius:5px 5px 5px 5px;
     width: auto;
}

#title .caption{
     color:#484848;
     font-weight:bold;
     border-bottom: 1px solid #dddddd;
     padding-bottom: 10px;
  }
  
.bt_position{
     margin-top: 7px;
     margin-right:10px;
     color:#484848;
     font-weight: bold;
     float: right;
     margin-bottom: 10px;
}  

 .int_search{
    position:relative;
   width:150px;
   height:24px;
   border:1px solid #bebebe;
   color:#333;
   border-radius: 5px 5px 5px 5px;
  }
  
  .iuser_serach_bt{
    float: right;
      background-color:#eaeaea;
     color:#353535;
     border:1px solid #C0C4CB;
     padding:5px 5px;
     border-radius:5px 5px 5px 5px;
     width: 45px;
     cursor: pointer;
     vertical-align: middle;
     margin-top: 1px;
     margin-right:5px;
}

.bs-example{
   padding-top: 10px;
   width: 100%;   
}

#mastertable{
   color:#484848;
   border: 2px solid #DDD;
   width: 100%;
   border-right:thin;
   height:180px;
   border-collapse: collapse;
}

#mastertable thead{
   text-align: center;
   float: left; 
   width:100%;
   border-bottom: 2px solid #dddddd;
   
}

#mastertable tr,
#mastertable tr td{
   height:10px;
}

#mastertable thead th,
#mastertable thead td {
   background-color: #F2F2F2;
   font-weight: bold;
}

#mastertable thead th,
#mastertable thead td {
   padding:5px;
}

#mastertable #usertbody tr,
#mastertable #usertbody tr td {
   text-align: center;
}

.bs-example #mastertable tbody{
   overflow-y:scroll;
   overflow-x:hidden;
   float: left;
   width: 100%;
   height: 200px;
   padding-left: 3.5px;
}

.bs-example #mastertable #usertbody td{
   padding:5px;
}

.bt_positionuserlist{
   float: right;
   margin-top: 10px;
   padding-right: 9px;
}

.iuser_bt{
    float: right;
      background-color:#eaeaea;
     color:#353535;
     border:1px solid #C0C4CB;
     padding:5px 5px;
     border-radius:5px 5px 5px 5px;
     width: 45px;
     margin-right: 5px;
     cursor: pointer;
     vertical-align: middle;
     
} 
</style>
 
 <title>리스트</title>
<script type="text/javascript">
/* $("#navisub11").show();
$("#naviuser").css("font-weight", "bold"); */
</script>
</head>
<body>
 
<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>

	<div id="title">
		<div class="caption">■ 직원관리</div>
		<div class="bt_position">
		<form name="searchForm" method="post" action="${ctx}/user">
			<select name="keyfield">
				<option value="u_id">직원ID</option>
				<option value="u_name">직원명</option>
				<option value="o_name">부서명</option>
			</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="search_btn" type="submit" class="iuser_serach_bt">검색</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/employee/employee_delete" >	
		<table id="mastertable" border = "1">
			<thead>
				<tr>
					<th><input id="checkall" type="checkbox"/></th>
					<td style="width:10%;">직원ID</td>
					<td style="width:10%;">직원코드</td>
					<td style="width:10%;">부서명</td>
					<td style="width:20%;">연락처</td>
					<td style="width:20%;">작성자</td>
					<td style="width:10%;">입사일</td>
					<td style="width:10%;">퇴사일</td>
					<td style="width:10%;">상태</td>
				</tr>
			</thead>
			<tbody id="usertbody" >
				<c:forEach var="employeeList" items="${employeeList}" >
				<tr onmouseover="this.style.background='#c0c4cb'" onmouseout="this.style.background='white'">
					<th scope="row"><input type="checkbox" name="del_code" value="${employeeList.USER_ID}"></th>
					<%-- <td style="width:10%;" id="user_id_a">
						<a href='#'>${employeeList.id_nm}</a>
					</td> --%>  
					<td  style="width:10%; cursor: pointer;" class="user_name_tag" id = "${employeeList.USER_ID}" onclick="openupdatePop(this.id);">${employeeList.USER_ID}
 					</td>
					<td style="width:10%;" class="user_name_tag">${employeeList.EMP_NO}</td>
					<td style="width:10%;" class="user_name_tag">${employeeList.POSITION_CD}</td>
					<td style="width:20%;" class="user_name_tag">${employeeList.WORK_PHONE_NO}</td>
					<td style="width:20%;" class="user_name_tag">${employeeList.C_USER_ID}</td>
					<td style="width:10%;" class="user_name_tag">${employeeList.JOIN_DAY}</td>
					<td style="width:10%;" class="user_name_tag">${employeeList.RETIRE_DAY}</td>
					<td style="width:10%;" class="user_name_tag">${employeeList.EMP_STATUS_CD}</td> 
 					<%-- <c:if test="${empty employeeList.AUTH_NM}">
						권한없음
					</c:if>
					<c:if test="${not empty employeeList.auth_nm}">
						${list.auth_nm}
					</c:if> --%>
					</td>
  					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>

		<!-- 기본 버튼 -->
	<div class="bt_positionuserlist">	
		<input type="button" id="iuserListAddBtn" class="iuser_bt" value="등록"/>
  		<input type="button" id="iuserDelBtn" class="iuser_bt" value="삭제"/>
	</div>
	
	
	<script type="text/javascript">
	
 
	$("#iuserListAddBtn").on("click", function(){  
	openPop();
	})
	
		$("#iuserListEditBtn").on("click", function(){  
 		openupdatePop();
		})
	
		
	$("#iuserDelBtn").on("click", function(){  
		var del_code = delAllForm.del_code;
		var cnt = 0;
		
		for( i = 0 ; i<del_code.length; i++)
		{
			if(del_code[i].checked == true){
  			cnt++; 
			}
		}
		
		if(cnt == 0){
			alert("삭제할 대상이 없습니다.");
		}else{
 		$('form').attr("action", "${ctx}/employee/employee_delete").submit(); 
		}
	})
  
 
		
	function openPop(){
		 
		var popUrl = "employee_pop";	//팝업창에 출력될 페이지 URL
		var popOption = "width=692, height=258, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
				window.open(popUrl,"",popOption); 
	}
	
	function openupdatePop(id){
		var check = id;  
		var popUrl = "employee_update_pop?USER_ID="+check;	//팝업창에 출력될 페이지 URL
		var popOption = "width=692, height=258, resizable=no, scrollbars=no, status=no, location=no;";    //팝업창 옵션(optoin)
				window.open(popUrl,"",popOption); 
 	}
	
	
	$("#checkall").on("click", function() {

		if ($("#checkall").prop("checked")) {

			$("input[name=del_code]").prop("checked", true);
		} else {
			$("input[name=del_code]").prop("checked", false);
		}

	}) 
	
</script>
 
	
	
	
</body>
</html>