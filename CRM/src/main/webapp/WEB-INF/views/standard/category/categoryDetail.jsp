<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>상품/서비스 상세정보</title>
<script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/standard/category/categoryDetail.js"></script>

<link rel="stylesheet" href="${ctx}/resources/common/css/standard/category/categoryDetail.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script> -->
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

</head>
<body>
<div id="css_tabs">
		<!-- 라디오 버튼 -->
		<input id="tab1" type="radio" name="tab" checked="checked" />
		<!-- 라벨 : 화면에 표시되는 탭 제목 -->
		<label for="tab1">카테고리 상세정보</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div id="tabDiv1" class="tab1_content">
	    
	    <div id="cateMasterDiv">
		    <div class="bt_position_detail">
				<input type="button" class="tiny ui blue button" value="저장" id="cateSubmitBtn" />
				<input type="button" class="tiny ui button" value="편집" id="cateUpdateBtn" />
				<input type="reset" class="tiny ui button" value="취소" id="cateResetBtn" />
			</div>
		<form id="cateInsertForm" method="post">
			<input type="hidden" id="cate_insert_mode"/>
			<table class="ui sortable celled table">
				<tbody class="tbody">
					<tr class="cate_text">
						<th class="cate_nm_th1">카테고리명</th>
						<td class="cate_text_td1">
							<input type="hidden" name="cate_id" id="cate_id" />
							<input type="text" name="cate_nm" id="cate_nm" class="cate_nm_text"/>
						</td>
						<th class="cate_nm_th2">부모 카테고리</th>
						<td class="cate_text_td2">
							<input type="hidden" name="up_cate_id" id="up_cate_id"/>
							<input type="text" name="up_cate_nm" id="up_cate_nm" class="cate_nm_text"/>
							<input type="button" value="검색" id="upCateSearch" class="tiny ui blue button"/>
						</td>
					</tr>
					<tr class="cate_contents">
						<th>설명</th>
						<td colspan="4"><textarea rows="10" cols="68" name="cate_dtl_cont" id="cate_dtl_cont" class="txtarea_cont"></textarea></td>							
					</tr>
					<tr>
						<th class="cate_nm_th1">활성화</th>
						<td colspan="3">
							Y<input type="radio" name="act_yn" id="act_y" value="Y">&nbsp;
							N<input type="radio" name="act_yn" id="act_n" value="N">
						</td>							
					</tr>
				</tbody>							
			</table>
		</form>	
		</div>
		</div>
		
	</div>
</body>
</html>