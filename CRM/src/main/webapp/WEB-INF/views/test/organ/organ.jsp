<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>조직</title>
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
	<form class="searchForm" name="searchForm" method="post" action="${ctx}/oOrgList">
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
								<td style="width: 35%;">아이디</td>
								<td style="width: 35%;">사용자명</td>
								<td style="width: 30%;">직책</td>
							</tr>
								</thead>
								<tbody class="otbody">
									<c:forEach var="orgUser" items="${orgOlist}">
									<tr onMouseOver="style.backgroundColor='#ebe7e7'" onMouseOut="style.backgroundColor=''">
										<th scope="row"><input type="checkbox" class="ab" id="checkCode" name="checkCode" value="${orgUser.iuser_id}"></th>										
										<td style="width: 35%;">${orgUser.id_nm}</td>
										<td style="width: 35%;">${orgUser.iuser_nm}</td>
										<td style="width: 30%;">${orgUser.cd_nm}</td>
									</tr>											
									</c:forEach>
								</tbody>			
							</table>      
                 <div class="bt_position">
					<input type="button" class="org_ceo_bt" value="선택" id="oorgChoice"/>
					<input type="button" class="org_ceo_bt" value="취소" onclick="allChk(obj);"/>
				</div>      
                <div style="clear:both"></div>
            </div>		
</body>
</html>