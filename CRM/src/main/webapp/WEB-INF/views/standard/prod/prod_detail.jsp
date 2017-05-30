<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="flg" value="${flg }"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/tab_example.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/prod/prod_detail.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_detail.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_pop.js"></script>	
<script type="text/javascript" src="${ctx}/resources/common/js/standard/prod/prod_detail.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script>	
<title>Insert title here</title>
<style type="text/css">
.ui-datepicker{ font-size: 13px; width: 300px;}
.ui-datepicker select.ui-datepicker-month{ width:40%; font-size: 12px; }
.ui-datepicker select.ui-datepicker-year{ width:40%; font-size: 12px; } 
</style>
<!-- <script type="text/javascript">
function prodInserts(){
	var f = document.prodForm;
	f.method = 'post';
	f.action = "${ctx}/prodInsert";
	f.submit;
}
</script> -->
</head>
<body>
	<input type="hidden" id="ctx" value="${ctx}">
	<input type="hidden" id="flg" value="${flg}">
	<div id="write_est">
<!-- 	<div id="css_tabs"> -->
		<!-- 라디오 버튼 -->
<!-- 		<input id="tab1" type="radio" name="tab" checked="checked" /> <input -->
<!-- 			id="tab2" type="radio" name="tab" /> -->

		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
<!-- 		<label for="tab1">상세정보</label> -->
		<div id="title">
			<c:if test="${flg eq 'add'}">
				<div class="caption">
					<h3 class="ui header" style="background: #fff;">■ 기준정보 > 
					<a href="/prod" style="font-size: 19px; text-decoration:none; color: black;  font: bold;">상품/서비스</a>
					 > 상품/서비스 추가
					</h3>
				</div>
			</c:if>
			<c:if test="${flg eq 'detail'}">
				<div class="caption"><h3 class="ui header" style="background: #fff;">■ 기준정보 > 
					<a href="/prod" style="font-size: 19px; text-decoration:none; color: black;  font: bold;">상품/서비스</a>
					 > 상세정보
					</h3>
				</div>
			</c:if>
		</div>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 사용자상세부분-->
		<div id="tabDiv1" class="tab1_content">
		
			<form method="post" name="prodForm" id="prodForm" enctype="multipart/form-data">
				<div class="act_tab_bt_div">
					<input type="button" id="prodSaveBtn" class="tiny ui blue button" value="저장"/>
					<input type="button" id="prodModifyBtn" class="tiny ui button" value="편집"/>
					<input type="button" id="prodCancelBtn" class="tiny ui button" value="취소"/>
					<!-- <input type="button" id="prodAddBtn" class="btn-success-tel" value="추가"/> -->
				</div>
				<table id="act_tab_table" class="ui celled table">
					<tbody id="act_tab_tbody">
						<tr>
							<!-- 텍스트 박스 -->
							<th><span style="color:red;">*상품(서비스)명</span></th>
							<td>
								<div class="ui input focus">
									<input type="hidden" name="prod_id" id="prod_id" value="${prodDto.prod_id}">			
									<input type="text" name="prod_nm" id="prod_nm"
										class="act_nm" style="ms-ime-mode: disabled;" value="${prodDto.prod_nm}" disabled>
								</div>
							</td>							
							<!-- 셀렉트 박스 -->
							<th><span style="color:red;">*구분</span></th>
							<td>
								<div class="ui input focus">
									<input type="text" name="prod_div_cd_view" id="prod_div_cd_view" class="end_text" value="${prodDto.cd_nm}" disabled>
									
									<select name="prod_div_cd" id="prod_div_cd" class="code" style="display:none;">
										<c:forEach var="pscl" items="${prodServicecCodeList}">
											<c:choose>
												<c:when test="${prodDto.prod_div_cd eq pscl.code }">
													<option value="${pscl.code}" selected="selected">${pscl.cd_nm}</option>
												</c:when>
												<c:otherwise>
													<option value="${pscl.code}">${pscl.cd_nm}</option>
												</c:otherwise>
											</c:choose>
										</c:forEach>
									</select>	
								</div>							
							</td>							
			     		</tr>
						<tr>						
							<th><span style="color:red;">*카테고리</span></th>
							<td>
								<div class="ui input focus">
									<input type="hidden" name="cate_id" id="cate_id" class="oppt_txt_nm" value="${prodDto.cate_id}">
								    <input type="text" name="cate_nm" id="cate_nm" class="oppt_txt_nm" value="${prodDto.cate_nm}" disabled>							     
								</div>
								<input type="button" name="prod_cate" value="카테고리" class="tiny ui blue basic button" id="prod_cate" disabled>
							</td>
							<th><span style="color:red;">*판매가</span></th>
							<td>
								<div class="ui input focus">
									<input type="text" name="prod_price" id="prod_price" style='text-align: right;' class="customer_txt" value="${prodDto.prod_price}" disabled>
								</div>
							</td>							
						</tr>				
						<tr>							
							<th rowspan="3">설명</th>
							<td rowspan="3">
								<div class="ui input focus">
									<textarea rows="6" cols="60" style="resize: none;" name="prod_dtl_cont"
									 	id="prod_dtl_cont" class="prodTarea" disabled>
									 	${prodDto.prod_dtl_cont}								 	
									</textarea>
								</div>
							</td>
							<th style="height:30px;">url</th>
							<td id="url">
								<div class="ui input focus">
									<input type="text" id="prod_url" name="prod_url" class="end_text" value="${prodDto.prod_url}" disabled>
								</div>
							</td>					
						</tr>
						<tr>																			
							<th><!-- 이미지 --></th>
							<td id="image">
								<%-- <input type="hidden" name="attach_img_id" id="attach_img_id" value="${imgList.attach_id }">
								<input type="hidden" id="prod_img_nm" value="${imgList.prod_img_nm }">
								<input type="button" id="image_change" class="act_bt" value="이미지 변경" style="display: none;"/>
								
								<input type="file" name="prod_img" id="prod_img" class="prod_file" disabled> --%>
							</td>												
						</tr>
						<tr>													
					        <th><!-- 카달로그 --></th>
							<td id="catal">
								<%-- <input type="hidden" name="attach_catal_id" id="attach_catal_id" value="${catalList.attach_id }">
								<input type="hidden" id="prod_catal_nm" value="${catalList.prod_catal_nm }">	
								<input type="button" id="catal_change" class="act_bt" value="카탈로그 변경" style="display: none;"/>
					        
								<input type="file" name="prod_catal" id="prod_catal" class="prod_file" disabled> --%>
					        </td>												
						</tr>			
					</tbody>
				</table>
		</form>
	</div>
</div>
</body>
</html>


