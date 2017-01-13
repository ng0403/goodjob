<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>조직</title>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/oOrgList.css" type="text/css" />
<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/oOrgList.js"></script>
	
<style type="text/css">
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
 	 width: 85px;
}

#title .caption{
  	color:#484848;
  	font-weight:bold;
  	border-bottom: 1px solid #dddddd;
  	padding-bottom: 10px;
  }

.bt_position_popup{
     margin-top: 7px;
     margin-right:10px;
     color:#484848;
     font-weight: bold;
     float: right;
     margin-bottom: 10px;
}  

 #title_text{
    position:relative;
	width:150px;
	height:24px;
	border:1px solid #bebebe;
	color:#333;
	border-radius: 5px 5px 5px 5px;
  }
  
.org_search_bt{
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
  
.bs-example_orglist #mastertable{
	width:100%;
	border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #DDD;
}

.bs-example_orglist #mastertable thead{
	float: left; 
	width:100%;
}

.bs-example_orglist #mastertable thead tr{
	height:35px;
}

.bs-example_orglist #mastertable thead td{
	font-weight: bold;
	vertical-align: bottom;
    border-bottom: 2px solid #dddddd;
    padding: 8px;
}

#mastertable thead th,
#mastertable thead td {
	background-color: #F2F2F2;
	font-weight: bold;
}

.bs-example_orglist #mastertable tbody tr:hover{
	background-color:#ebe7e7;
}

.bs-example_orglist #mastertable #userAuthBody tr:hover{
	background-color:#ebe7e7;
}
.bs-example_orglist #mastertable tbody{
	overflow-y:scroll;
	overflow-x:hidden;
	float: left;
	width: 100%;
	height: 200px;
}
.bs-example_orglist #mastertable tbody tr{
	display: table;
	width: 100%;

}

.bs-example_orglist #mastertable tbody td{
/* 	width: 25%; */
	padding: 8px;
    line-height: 1.428571429;
    vertical-align: top;
    border-top: 1px solid #dddddd;
    padding-left:20px;
    text-align: left;
}

.bs-example_orglist #mastertable thead tr th{
  vertical-align: center;
  border-bottom: 2px solid #dddddd;
}

.bt_position{
     margin-top: 7px;
     margin-right:10px;
     color:#484848;
     font-weight: bold;
     float: right;
     margin-bottom: 10px;
}  

.org_ceo_bt{
  	 background-color:#eaeaea;
 	 color:#353535;
 	 border:1px solid #C0C4CB;
 	 padding:5px 5px;
 	 border-radius:5px 5px 5px 5px;
 	 width: 45px;
 	 cursor: pointer;
 	 vertical-align: middle;
 	 margin-top: 1px;
}

</style>
</head>
<body id="aorgList">

<div id="title">
<br>
<div class="caption">■ 조직대표</div>
</div>

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
				   <table id="mastertable">
				        <thead>				
							<tr>
								<th><input id="allCheck" type="checkbox"/></th>
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
										<th scope="row"><input type="checkbox" class="ab" id="checkCode" name="checkCode"></th>			
										<td style="width: 10%;">${organList.ORG_ID}</td>
										<td style="width: 20%;">${organList.ORG_NAME}</td>
										<td style="width: 20%;">${organList.MAIN_GROUND}</td>
										<td style="width: 10%;">${organList.ORG_TYPE_ID}</td>
										<td style="width: 10%;">${organList.ORG_LEVEL_CD}</td>
										<td style="width: 10%;">${organList.PHONE_NO}</td>
										<td style="width: 10%;">${organList.FAX_NO}</td>
										<td style="width: 10%;">${organList.ACTIVE_FLG}</td>
									</tr>											
									</c:forEach>
								</tbody>			
							</table>      
           
				<!-- 기본 버튼 -->
				<div class="bt_positionuserlist">
					<input type="button" id="iuserListAddBtn" class="iuser_bt" value="등록" onclick="organ_pop()" />
					<input type="button" id="iuserListEditBtn" class="iuser_bt" value="수정"/>
					<input type="button" id="iuserDelBtn" class="iuser_bt" value="삭제"/>
				</div>  
                <div style="clear:both"></div>
            </div>		
            <script type="text/javascript">
			$("#iuserListAddBtn").on("click", function(){  
				 
				var popUrl = "organ_pop";	//팝업창에 출력될 페이지 URL
				var popOption = "width=1380, height=450, resize=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)
						window.open(popUrl,"",popOption);
				})
			
			</script>
</body>
</html>