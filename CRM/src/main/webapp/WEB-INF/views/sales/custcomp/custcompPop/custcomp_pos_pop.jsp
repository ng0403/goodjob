<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/custPosPop.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/custcomp/custcomp_actpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" />
<title>영업 담당자</title>
<script type="text/javascript">
$(document).ready(function(){
	var flg = ${flg};
	if(flg == 1)//상세정보를 눌렀을 경우
	{
		$('#custSaleActSelect').css('display', 'block');
		$('#custSaleActSelect').css('display', 'none');
	} else if(flg == 0)//신규추가를 눌렀을 경우
		{
		
		$("#custSaleActSelect").css("display", "block");
		$("#custIuserSelect").css("display", "block");
	
		
	}
});
</script>

</head>
<body onload='javscript:if(${flg == "detail"}) custSaleActDetail();'>
<div class="keymanview">
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<input type="hidden" id="custType" value="${custType}"/>
	<input type="hidden" id="sales_actvy_id" value="${sales_actvy_id}">

	<div id="title">
		<div class="caption">● 영업담당자 등록</div>
	</div>
	<div class="bt_position_popup">
   		<div class="bs-example" data-example-id="simple-table">
  
	 		<table id="operatingapopuptable">  			
				<tbody id="tbody1">
					<tr>  
						<th>고객사</th>
						<td><input type="text" name="cust_nm" id="cust_nm" class="int" value="${cust_nm}" readonly="readonly">
							<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}">
					</tr>
					<tr>
						<th>영업활동명</th>																	
						<td>
							<input type="hidden" name="sales_actvy_id" id="sales_actvy_id" value="${sales_actvy_id}">
							<input type="text" name="sales_actvy_nm"  id="sales_actvy_nm" class="int" value="${detail.sales_actvy_nm}" >
							<input type="button" name="cust_sale_act" id="custSaleActSelect" class="btn-success-tel" value="영업활동" >
						</td>
					</tr>
					<tr>
						<th>사원명</th>																	
						<td>
							<input type="hidden" name="iuser_id"    id="iuser_id" class="int" value="${detail.iuser_id}" >
							<input type="text" name="iuser_nm"    id="iuser_nm" class="int" value="${detail.iuser_nm}" >
							<input type="button" name="iuser_id"  id="custIuserSelect" class="btn-success-tel" value="사원" >
						</td>
					</tr>
					<tr>
						<th>역할명</th>																	
						<td><input type="text" name="key_part" id="key_part" class="int" value="${detail.key_part}" ></td>
					</tr>
<!-- 					<tr> -->
<!-- 						<th>영업활동 구분</th> -->
<!-- 						<td> -->
<%-- 							<c:forEach items="${actDivCd}" var="list"> --%>
<%-- 								<input type="radio" id = "" name="sales_actvy_div_cd" class="sales_actvy_div_cd" value="${list.sales_actvy_div_cd}"/>${list.sales_actvy_div_nm}&nbsp;  --%>
<%-- 							</c:forEach>  --%>
<!-- 						</td> -->
<!-- 					</tr> -->
<!-- 					<tr> -->
<!-- 						<th>영업활동 유형</th> -->
<!-- 						<td><select name="sales_actvy_type_cd" id="sales_actvy_type_cd" class="time"> -->
<!-- 								<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 									<c:forEach items="${actTypeCd}" var="list"> --%>
<%-- 										<option value="${list.sales_actvy_type_cd}">${list.sales_actvy_type_nm}</option>							 --%>
<%-- 									</c:forEach> --%>
<!-- 							</select> -->
<!-- 						</td> -->
<!-- 					</tr> -->
<!-- 					<tr> -->
<!-- 						<th>영업활동 상태</th> -->
<!-- 						<td><select name="sales_actvy_stat_cd" id="sales_actvy_stat_cd" class="time"> -->
<!-- 								<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 									<c:forEach items="${actStatCd}" var="list"> --%>
<%-- 										<option value="${list.sales_actvy_stat_cd}">${list.sales_actvy_stat_nm}</option> --%>
<%-- 									</c:forEach> --%>
<!-- 							</select> -->
<!-- 						</td> -->
<!-- 					</tr> -->
<!-- 					<tr> -->
<!-- 						<th>메모</th> -->
<%-- 						<td><textarea class="memo" id="memo" name="memo" rows="5" cols="35" style="resize: none;">${detail.memo}</textarea></td> --%>
<!-- 					</tr> -->
				</tbody>
			</table>
		</div>
		<div class="act_bt_position">
			<input type="button" class="cust_oppt_btn" value="저장" id="activeButton"/>
			<input type="button" class="cust_oppt_btn" value="취소" id="activeAdd_cancel"/>
		</div>
	</div>
</div>


</body>
</html>