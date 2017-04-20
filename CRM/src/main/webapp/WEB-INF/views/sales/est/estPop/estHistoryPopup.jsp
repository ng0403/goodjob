<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="popFlg" value="${popFlg}" />

<link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/custcomp_actpop_css.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css">

<script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script>
<script type="text/javascript"src="${ctx}/resources/common/js/jquery-ui.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/est/opptAddPop.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>영업기회 등록</title>
</head>
<body <%-- onload='javscript:if(${flg eq "detail"}) opptDetail();' --%>>
	<input type="hidden" id="ctx" value="${ctx}">
	<div class="keymanview">
	<c:if test="${flg eq 'add'}">
		<div id="title">
			<div class="caption">● 영업기회 등록</div>
		</div>
	</c:if>
	<c:if test="${flg eq 'detail'}">
		<div id="title">
			<div class="caption">● 견적 상세정보</div>
		</div>
	</c:if>
	<input type="hidden" id="flg" value="${flg}">
		<div class="bt_position_popup">
			<div class="bs-example" data-example-id="simple-table">
				<table id="operatingapopuptable">
					<tbody id="tbody1">
						<!-- 상세보기 -->
						<tr>
							<th>영업기회명</th>
							<td> <!-- colspan="3" -->
								<input type="hidden" id="sales_oppt_id" value="${detail.sales_oppt_id}">
							<input type="text" name="sales_oppt_nm" value="${detail.sales_oppt_nm}" id="sales_oppt_nm" class="int2" style="ms-ime-mode: disabled; background-color: ">
							</td>
						</tr>
						<tr>
							<th>견적명</th>
							<td>
								<input type="text" name="estim_nm_detail" id="estim_nm" readonly="readonly" class="int2" value="${detail.estim_nm }">	
							 	<input type="hidden" id="estim_id" value="${detail.estim_id }">
							 </td>
						</tr>
						<tr>
							<th>고객사</th>
							<td>
								<c:choose>
									<c:when test="${flg eq 'add'}">
										<input type="text" name="cust_nm" id="cust_nm" value="${cust_nm}" class="int" readonly="readonly" />
										<input type="hidden" name="cust_id" id="cust_id" value="${cust_id}"/>
									</c:when>
									<c:when test="${flg eq 'detail'}">
										<input type="text" name="cust_nm" id="cust_nm" value="${detail.cust_nm}" class="int" readonly="readonly" />
										<input type="hidden" name="cust_id" id="cust_id" value="${detail.cust_id}"/>
									</c:when>
								</c:choose>
							</td>
						</tr>
						<tr>
<!-- 							<th>상태</th> -->
<!-- 							<td> -->
<!-- 								<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled" style="height: 24pt;"> -->
<!-- 									<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 									<c:forEach items="${osclist}" var="osclist"> --%>
<%-- 										<c:if test="${detail.sales_oppt_stat_cd == osclist.code}"> --%>
<%-- 							      			<option selected="selected" value="${osclist.code}">${osclist.cd_nm}</option> --%>
<%-- 							      		</c:if> --%>
<%-- 							      		<c:if test="${detail.sales_oppt_stat_cd != osclist.code}"> --%>
<%-- 							      			<option value="${osclist.code}">${osclist.cd_nm}</option> --%>
<%-- 							      		</c:if> --%>
<%-- 									</c:forEach> --%>
<!-- 								</select> -->
<%-- 								<c:forEach items="${osclist}" var="osclist"> --%>
<%-- 									<c:if test="${detail.sales_oppt_stat_cd == osclist.code}"> --%>
<%-- 										<input type="text" name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" value="${osclist.cd_nm}" class="int" readonly="readonly" /> --%>
<%-- 									</c:if> --%>
<%-- 								</c:forEach> --%>
<!-- 							</td> -->
							<th>견적단계</th>
							<td colspan="3">
								<c:forEach items="${elclist}" var="elclist">
									<c:if test="${detail.estim_lev_cd eq elclist.code }">
										<input type="text" name="estim_lev_cd_detail" id="estim_lev_cd_detail"  readonly="readonly" class="int3" value="${elclist.cd_nm }">
									</c:if>
								</c:forEach>
							</td>
						</tr>
						<tr>
<!-- 							<th>영업단계</th> -->
<!-- 							<td> -->
<!-- 								<select name="sales_lev_cd" id="sales_lev_cd" disabled="disabled" style="height: 24pt;"> -->
<!-- 									<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 									<c:forEach items="${otllist}" var="otllist"> --%>
<%-- 										<option value="${otllist.code}" --%>
<%-- 											<c:if test="${detail.sales_lev_cd == otllist.code }">selected="selected"</c:if>> --%>
<%-- 												 ${otllist.cd_nm} --%>
<!-- 										</option> -->
<%-- 									</c:forEach> --%>
<!-- 								</select> -->
<%-- 								<c:forEach items="${otllist}" var="otllist"> --%>
<%-- 									<c:if test="${detail.sales_lev_cd == otllist.code }"> --%>
<%-- 										<input type="text"  name="sales_lev_cd" id="sales_lev_cd" value="${otllist.cd_nm}" class="int" readonly="readonly" /> --%>
<%-- 									</c:if> --%>
<%-- 								</c:forEach> --%>
<!-- 							</td> -->
							<th>견적유효일자</th>
							<td><label for="start_day" class="oppt_txt_nm"></label>
								<input type="text" name="estim_valid_d_detail" id="estim_valid_d_detail"
								class="int" readonly="readonly" value="${detail.estim_valid_d }">
							</td>
						</tr>
						<tr>
							<th>참고사항</th> 
							<td colspan="3"><input type="text" name="memo" id="memo" style="width: 90%;" readonly=readonly
	 							class="int_detail_ad" value="${detail.memo}">
	 						</td>
	 					</tr>
<!-- 						<tr> -->
<!-- 							<th>예상매출액</th> -->
<!-- 							<td> -->
<%-- 								<input type="text" name="expt_sales_amt" id="expt_sales_amt" value="${opDetail.expt_sales_amt}" class="int"  readonly="readonly"/> --%>
<!-- 							</td> -->
<!-- 						</tr> -->
<!-- 						<tr> -->
<!-- 							<th>예상마감일자</th> -->
<!-- 							<td> -->
<%-- 								<input type="text" name="expt_fin_d" id="expt_fin_d" value="${detail.expt_fin_d}" readonly="readonly" class="int"> --%>
<!-- 							</td> -->
<!-- 						</tr>	 -->
<!-- 						<tr> -->
<!-- 							<th>가능성</th> -->
<!-- 							<td> -->
<!-- 								<select id="psblty_rate" name="psblty_rate" disabled="disabled" style="height: 24pt;"> -->
<!-- 									<option value="0" style="text-align: center;">==선택==</option> -->
<%-- 									<c:forEach var="i" begin="10" end="100" step="10"> --%>
<%-- 										<c:choose> --%>
<%-- 											<c:when test="${detail.psblty_rate eq i }"> --%>
<%-- 												<option value="${i }" selected="selected">${i }</option> --%>
<%-- 											</c:when> --%>
<%-- 											<c:otherwise> --%>
<%-- 												<option value="${i }">${i }</option> --%>
<%-- 											</c:otherwise> --%>
<%-- 										</c:choose> --%>
<%-- 									</c:forEach> --%>
<!-- 								</select>	 -->
<%-- 								<c:forEach var="i" begin="10" end="100" step="10"> --%>
<%-- 									<c:if test="${detail.psblty_rate eq i }"> --%>
<%-- 										<input type="text" id="psblty_rate" name="psblty_rate" value="${i }" readonly="readonly" class="int">% --%>
<%-- 									</c:if> --%>
<%-- 								</c:forEach> --%>
<!-- 							</td> -->
<!-- 						</tr> -->
<!-- 						<tr> -->
<!-- 							<th>메모</th> -->
<!-- 							<td colspan="2" rowspan="2"> -->
<!-- 								<input type="hidden" id="hmemo"> -->
<%-- 								<textarea name="memo" class="memo" id="memo" readonly="readonly" style="overflow: auto; resize: none;">${detail.memo}</textarea> --%>
<!-- 							</td> -->
<!-- 						</tr> -->
						<tr>
							<th>
							</th>
						</tr>
					</tbody>
				</table>
			</div>

<!-- 			<div class="act_bt_position" id="oppt_add_btn_div"> -->
<!-- 				<input type="button" class="cust_oppt_btn" value="등록" id="opptSaveButton" onclick="opptSave()"/> -->
<!-- 				<input type="button" class="cust_oppt_btn" value="취소" id="opptAdd_cancel" /> -->
<!-- 			</div> -->
		
			<div class="act_bt_position" id="oppt_mdfy_btn_div">
<!-- 				<input type="button" class="cust_oppt_btn" value="편집" id="opptModfyButton" /> -->
<!-- 				<input type="button" class="cust_oppt_btn" value="저장" id="opptModfySaveBtn" onclick="opptMdfySave()" /> -->
				<input type="button" class="cust_oppt_btn" value="닫기" id="opptModfy_cancel" />
			</div>
			
		</div>
		<div class="estProDiv">
			<!-- <div>
			<table id="estimatehead" class="estimatehead" style="border-collapse: collapse;">
				<tr style="background-color: #eaeaea">
					<th style="width: 3%;"><input type="checkbox" id="prodallCheck"></th>
					<td style="width: 32%;">품목명</td>
					<td style="width: 8%;">수량</td>
					<td style="width: 18%;">판매가</td>
					<td style="width: 24%;">할인</td>
					<td style="width: 15%;">공급가</td>
				</tr>
			</table>
			</div>  -->
			
			<div id="estimatediv">
				<input type="hidden" id="eduCode" value="${eduCode}">
				<table id="estimatetable" class="estimatetable" style="border-collapse: collapse;">
					<thead id="estimatehead">
						<tr style="background-color: #eaeaea; text-align: center;">
							<th style="width: 3%;"><input type="checkbox" id="prodallCheck"></th>
							<td style="width: 32%;">품목명</td>
							<td style="width: 8%;">수량</td>
							<td style="width: 18%;">판매가</td>
							<td style="width: 24%;">할인</td>
							<td style="width: 15%;">공급가</td>
						</tr>
					</thead>
					<tbody id="opptPrdtbody" class="estimatetbody">
				 		<c:forEach items="${prodList}" var="list">
							<tr id="priceline" class="${list.prod_id}">
								<th style="width: 3%;">
									<input type="checkbox" name="prod_id" id="prod_id" value="${list.prod_id}" onclick="prodChkCancel();"> 
									<input type="hidden" id="prod_price"  value="${list.prod_price}" >
								</th>
								<td style="width: 32%;" id="prod_nm">${list.prod_nm}</td>
								<td style="width: 8%;">
									<input type="number" name="estim_qty" id="estim_qty" class="estim_qty" min="1" max="100" value="${list.estim_qty}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)' >
								</td>
								<td style="width: 18%;" >${list.sales_price}</td>
								<td style="width: 24%;" >
									<input type="number" id="discount" class="discount" name="discount" min="0" max="100" value="${list.discount}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
									<select id="unit" class="unit" name="discount_unit_cd">
										<c:if test="${flg eq 'detail'}">
											<option value="0" >선택</option>
											<c:forEach items="${eduList}" var="list2">
												<c:if test="${list2.code == list.discount_unit_cd}">
													<option value="${list2.code}" class="seloption">${list2.cd_nm}</option>
												</c:if>
												<c:if test="${list2.code != list.discount_unit_cd}">
													<option value="${list2.code}">${list2.cd_nm}</option>
												</c:if>
											</c:forEach>
										</c:if>
									</select>
								</td>
								<td style="width: 15%;" id="sup_price" >${list.sup_price}</td>
					 		</tr>
					 	</c:forEach> 
					</tbody>
					<tfoot>
						<tr id="totalprice" style="text-align: center; background-color: #FAED7D; height: 22px;">
							<td colspan="2">계:</td>
							<td id="countSum">0</td>
							<td id="salesPriceSum" >0</td>
							<td id="discountSum">0</td>
							<td id="supplyPriceSum">0</td>
						</tr>
					</tfoot>
				</table>
					<!-- <table id="estimatehead" class="estimatefoot"  style="border-collapse: collapse;">
						<tr id="totalprice">
							<td style="width: 220px;" colspan="2">계:</td>
							<td style="width: 40px;" id="countSum">0</td>
							<td style="width: 94px;" id="salesPriceSum" >0</td>
							<td style="width: 126.9px;" id="discountSum">0</td>
							<td style="width: 78px;" id="supplyPriceSum">0</td>
						</tr>
					</table> -->
			</div>
<!-- 			<div class="estimate_bt_position">  -->
<!-- 				<input type="button" style="float: right; margin-right: 50px;" class="btn-success-tel" value="상품삭제" id="prodDelete"/> -->
<!-- 				<input type="button" style="float: right; margin-right: 10px;" class="btn-success-tel" value="상품추가" id="prodListBtn"/> -->
<%-- 				<input type="button" class="est_list_bt"  value="상품추가" onclick="prodList('${ctx}');"/> --%>
<!-- 				<input type="button" class="est_list_bt" value="상품삭제" onclick="prodDelete();"/> -->
<!-- 			</div> -->
		</div>

	</div>
</body>
</html>