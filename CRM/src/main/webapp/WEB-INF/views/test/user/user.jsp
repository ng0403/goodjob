<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%-- <c:set var="ctx" value="${pageContext.request.contextPath }" /> --%>
<%--<link rel="stylesheet" href="${ctx}/resources/common/css/standard/iuser/iuserList.css" type="text/css" />--%>
<%--<script type="text/javascript" src="${ctx}/resources/common/js/standard/iuser/iuserList.js"></script>	--%>
<title>����Ʈ</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviuser").css("font-weight", "bold");
</script>

 <style type="text/css">
@CHARSET "UTF-8";
html{
	font-family: 'Nanum Gothic', Dotum, "����", Gulim, "����", Verdana, Arial, "Trebuchet MS";
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
</head>
<body>

	<div id="title">
		<div class="caption">�� ����ڰ���</div>
		<div class="bt_position">
		<form name="searchForm" method="post" action="${ctx}/user">
			<select name="keyfield">
				<option value="u_id">�����ID��</option>
				<option value="u_name">����ڸ�</option>
				<option value="o_name">������</option>
			</select> <input id="title_text" type="text" name="keyword" class="int_search"> &nbsp;
			<button id="search_btn" type="submit" class="iuser_serach_bt">�˻�</button>
			</form>
		</div>
	</div>
	<div class="bs-example" data-example-id="simple-table">
	<!-- <form name="userForm" id="userForm" method="post" > -->
	<form name="delAllForm" id="delAllForm" method="post" action="${ctx}/iuserDelete" >	
		<table id="mastertable">
			<thead>
				<tr>
					<th><input id="allCheck" type="checkbox" onclick="allChk(this);"/></th>
					<td style="width:10%;">�����ID</td>
					<td style="width:10%;">����ڸ�</td>
					<td style="width:10%;">������</td>
					<td style="width:20%;">�̸���</td>
					<td style="width:20%;">����ó</td>
					<td style="width:10%;">����</td>
					<td style="width:10%;">����ڱ���</td>
					<td style="width:10%;">����</td>
				</tr>
			</thead>
			<tbody id="usertbody">
				<c:forEach var="list" items="${list}">
				<tr>
					<th scope="row"><input type="checkbox" class="ab" name="del_code" value="${list.iuser_id}"></th>
					<td style="width:10%;" id="user_id_a">
						<a href='#'>${list.id_nm}</a>
					</td>
					<td style="width:10%;" class="user_name_tag">${list.iuser_nm}</td>
					<td style="width:10%;" class="org_name_tag">${list.org_nm}</td>
					<td style="width:20%;" class="email_tag">${list.email1}@${list.email2}</td>
					<td style="width:20%;" class="cell_phone_tag">${list.cell_ph1}-${list.cell_ph2}-${list.cell_ph3}</td>
					<td style="width:10%;" class="auth_name_tag">
					<c:if test="${empty list.auth_nm}">
						���Ѿ���
					</c:if>
					<c:if test="${not empty list.auth_nm}">
						${list.auth_nm}
					</c:if>
					</td>
					<td style="width:10%;" class="code_name_tag">${list.cd_nm}</td>
					<td style="width:10%;" class="active_flag_tag">
					<c:if test="${list.act_yn=='Y'}">Ȱ��ȭ</c:if>
					<c:if test="${list.act_yn=='N'}">��Ȱ��ȭ</c:if>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
		</form>
	</div>

		<!-- �⺻ ��ư -->
	<div class="bt_positionuserlist">
		<input type="button" id="iuserListAddBtn" class="iuser_bt" value="���"/>
		<input type="button" id="iuserListEditBtn" class="iuser_bt" value="����"/>
		<input type="button" id="iuserDelBtn" class="iuser_bt" value="����"/>
	</div>
</body>
</html>