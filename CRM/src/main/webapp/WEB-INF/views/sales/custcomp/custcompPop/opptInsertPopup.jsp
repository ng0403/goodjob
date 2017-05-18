<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<c:set var="popFlg" value="${popFlg}" />

<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/act/act_oppt_prod.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/sales/oppt/estimate_popup.css" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css"> --%>
<%-- <link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/common_list.css" type="text/css" /> --%>

<%-- <script src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> --%>
<%-- <script type="text/javascript"src="${ctx}/resources/common/js/jquery-ui.js"></script> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/sales/act/act_detail.js"></script> --%>

<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/oppt_prod_pop.js"></script>
<script type="text/javascript" src="${ctx}/resources/common/js/sales/custcomp/opptInsertPop.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>영업기회 등록</title>
</head>
<body>

	<div class="keymanview" style="width: 98%; padding-left: 10px;">
	<c:if test="${popFlg eq 'add'}">
		<div id="title">
<!-- 			<div class="caption">● 영업기회 등록</div> -->
			<h3 class="ui header" style="background: #fff; padding-top: 10px; padding-left: 10px;">■ 영업기회 등록</h3>
			<input type="hidden" id="flg" name="flg" value="${popFlg}">
			<input type="hidden" id="eduList" name="eduList" value="${eduList}">
			<input type="hidden" id="eduCode" name="eduCode" value="${eduCode}">
		</div>
	</c:if>
	<c:if test="${popFlg eq 'popDetail'}">
		<div id="title">
<!-- 			<div class="caption">● 영업기회 상세보기</div> -->
			<h3 class="ui header" style="background: #fff; padding-top: 10px; padding-left: 10px;">■ 영업기회 상세보기</h3>
			<input type="hidden" id="flg" name="flg" value="${popFlg}">
			<input type="hidden" id="eduList" name="eduList" value="${eduList}">
			<input type="hidden" id="eduCode" name="eduCode" value="${eduCode}">
		</div>
	</c:if>
		<div class="bt_position_popup" >
			<div class="bs-example" data-example-id="simple-table">
				<form action="opptPopForm" method="post">
				<table id="operatingapopuptable" class="ui celled table"   style="margin-bottom: 15px;"  >
					<tbody id="tbody1">
					<!-- 영업기회 TAB 등록 -->
						<c:if test="${popFlg eq 'add'}">
							<tr>
								<th>영업기회명</th>
								<td> <!-- colspan="3" -->
									<input type="text" name="sales_oppt_nm" id="sales_oppt_nm" class="inputText" >
								</td>
							</tr>
							<tr>	
								<th>고객사</th>
								<td>
									<input type="text" name="cust_nm" id="cust_nm" class="inputText" readonly="readonly">
									<input type="button" class="tiny ui orange basic button" id="customerPop" value="고객" disabled="disabled" onclick="opptCustPopup('${ctx}');">
								</td>
							</tr>
							<tr>
								<th>상태</th>
								<td>
									<input type="hidden" id="hsales_oppt_stat_cd" value="0">
									<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" style="height: 24pt; background: #fff;">
										<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach items="${osclist}" var="list">
											<option value="<c:out value="${list.code}" />"
												 <c:if test="${detail.sales_oppt_stat_cd == list.code }">selected="selected"</c:if>>
												 ${list.cd_nm}
											 </option>
										</c:forEach>
									</select>
								</td>
							</tr>
							<tr>
								<th>영업단계</th>
								<td>
									<input type="hidden" id="hsales_lev_cd" value="0">
										<select name="sales_lev_cd" id="sales_lev_cd" style="height: 24pt; background: #fff;">
											<option value="0" style="text-align: center;">==선택==</option>
											<c:forEach items="${otllist}" var="list">
												<option value="<c:out value="${list.code}" />"
												 <c:if test="${detail.sales_lev_cd == list.code }">selected="selected"</c:if>>
													 ${list.cd_nm}
												 </option>
											</c:forEach>
										</select>
								</td>
							</tr>
								<th>예상마감일자</th>
								<td  >
									<input type="hidden" id="hexpt_fin_d">
									<input type="text" name="expt_fin_d" id="expt_fin_d" class="inputText" >
								</td>
							</tr>	
							<tr>
								<th>가능성</th>
								<td>
									<input type="hidden" id="hpsblty_rate">
									<select id="psblty_rate" name="psblty_rate" style="height: 24pt; background: #fff;">
										<option value="0" style="text-align: center;">==선택==</option>
										<option <c:if test="${detail.psblty_rate == 10 }">selected="selected"</c:if>>10</option>
										<option <c:if test="${detail.psblty_rate == 20 }">selected="selected"</c:if>>20</option>
										<option <c:if test="${detail.psblty_rate == 30 }">selected="selected"</c:if>>30</option>
										<option <c:if test="${detail.psblty_rate == 40 }">selected="selected"</c:if>>40</option>
										<option <c:if test="${detail.psblty_rate == 50 }">selected="selected"</c:if>>50</option>
										<option <c:if test="${detail.psblty_rate == 60 }">selected="selected"</c:if>>60</option>
										<option <c:if test="${detail.psblty_rate == 70 }">selected="selected"</c:if>>70</option>
										<option <c:if test="${detail.psblty_rate == 80 }">selected="selected"</c:if>>80</option>
										<option <c:if test="${detail.psblty_rate == 90 }">selected="selected"</c:if>>90</option>
										<option <c:if test="${detail.psblty_rate == 100 }">selected="selected"</c:if>>100</option>
									</select>	
								</td>
							</tr>
							<tr>
								<th>메모</th>
								<td colspan="8" rowspan="2">
									<input type="hidden" id="hmemo">
									<textarea name="memo" id="memo" class="inputText" value="${detail.memo}" style="overflow: auto; resize: none; width: 98%;"></textarea>
								</td>
							</tr>
						</c:if>
						
						
						
						<!-- 상세보기 -->
						<c:if test="${popFlg eq 'popDetail'}">
							<tr>
								<th>영업기회명</th>
								<td> <!-- colspan="3" -->
									<input type="hidden" id="hsales_oppt_nm" value="${opDetail.sales_oppt_nm}">
									<input type="hidden" id="hsales_oppt_id" value="${opDetail.sales_oppt_id}">
									<input type="text" name="sales_oppt_nm" value="${opDetail.sales_oppt_nm}" id="sales_oppt_nm" class="inputText" style="ms-ime-mode: disabled; background-color: ">
								</td>
								<th>고객사</th>
								<td>
									<input type="hidden" id="hcust_nm" value="${opDetail.cust_nm}">
									<input type="hidden" id="hcust_id" value="${opDetail.cust_id}">
									<input type="hidden" id="hlead_id" value="${opDetail.lead_id}">
									<input type="hidden" name="cust_id" id="cust_id" value="${opDetail.cust_id}"/>
									<input type="hidden" name="lead_id" id="lead_id" value="${opDetail.lead_id}"/>
									
									<input type="text" name="cust_nm" id="cust_nm" value="${opDetail.cust_nm}" class="inputText" readonly="readonly" />
								</td>
							</tr>
							<tr>
								<th>상태</th>
								<td>
									<input type="hidden" id="hsales_oppt_stat_cd" value="0">
									<select name="sales_oppt_stat_cd" id="sales_oppt_stat_cd" disabled="disabled" style="height: 24pt; background: #fff;">
										<option value="0" style="text-align: center;">==선택==</option>
										<c:forEach items="${osclist}" var="osclist">
											<c:if test="${opDetail.sales_oppt_stat_cd == osclist.code}">
								      			<option selected="selected" value="${osclist.code}">${osclist.cd_nm}</option>
								      		</c:if>
								      		<c:if test="${opDetail.sales_oppt_stat_cd != osclist.code}">
								      			<option value="${osclist.code}">${osclist.cd_nm}</option>
								      		</c:if>
										</c:forEach>
									</select>
								</td>
						
								<th>영업단계</th>
								<td>
								<input type="hidden" id="hsales_lev_cd" value="0">
										<select name="sales_lev_cd" id="sales_lev_cd" disabled="disabled" style="height: 24pt; background: #fff;">
											<option value="0" style="text-align: center;">==선택==</option>
											<c:forEach items="${otllist}" var="otllist">
												<option value="<c:out value="${otllist.code}" />"
												 <c:if test="${opDetail.sales_lev_cd == otllist.code }">selected="selected"</c:if>>
													 ${otllist.cd_nm}
												 </option>
											</c:forEach>
										</select>
								</td>
							</tr>
							<tr>
								<th>예상마감일자</th>
								<td colspan="8">
									<input type="hidden" id="hexpt_fin_d">
									<input type="text" name="expt_fin_d" id="expt_fin_d" value="${opDetail.expt_fin_d}" readonly="readonly" class="inputText">
								</td>
							</tr>	
							<tr>
								<th>가능성</th>
								<td colspan="8">
									<input type="hidden" id="hpsblty_rate">
									<select id="psblty_rate" name="psblty_rate" disabled="disabled" style="height: 24pt; background: #fff;">
										<option value="0" style="text-align: center;">==선택==</option>
										<option <c:if test="${opDetail.psblty_rate == 10 }">selected="selected"</c:if>>10</option>
										<option <c:if test="${opDetail.psblty_rate == 20 }">selected="selected"</c:if>>20</option>
										<option <c:if test="${opDetail.psblty_rate == 30 }">selected="selected"</c:if>>30</option>
										<option <c:if test="${opDetail.psblty_rate == 40 }">selected="selected"</c:if>>40</option>
										<option <c:if test="${opDetail.psblty_rate == 50 }">selected="selected"</c:if>>50</option>
										<option <c:if test="${opDetail.psblty_rate == 60 }">selected="selected"</c:if>>60</option>
										<option <c:if test="${opDetail.psblty_rate == 70 }">selected="selected"</c:if>>70</option>
										<option <c:if test="${opDetail.psblty_rate == 80 }">selected="selected"</c:if>>80</option>
										<option <c:if test="${opDetail.psblty_rate == 90 }">selected="selected"</c:if>>90</option>
										<option <c:if test="${opDetail.psblty_rate == 100 }">selected="selected"</c:if>>100</option>
									</select>	
								</td>
							</tr>
							<tr>
								<th>메모</th>
								<td colspan="8" rowspan="2">
									<input type="hidden" id="hmemo">
									<textarea name="memo" class="inputText"  id="memo" readonly="readonly" style="overflow: auto; resize: none; width: 98%;">${opDetail.memo}</textarea>
								</td>
							</tr>
						</c:if>
						
					</tbody>
				</table>
				</form>
			</div>
			<hr style="border-bottom: 1px solid rgba(34, 36, 38, 0.1); "/>
			<div>
				<table id= "estimatehead" class="ui celled table" style="margin-top: 10px;">
							<tr ">
								<th style="width: 3%;">V</th>
								<th style="width: 32%;">품목명</td>
								<th style="width: 8%;">수량</td>
								<th style="width: 27%;">판매가</td>
								<th style="width: 15%;">할인</td>
								<th style="width: 15%;">공급가</td>
							</tr>
							<tr id="totalprice" style="background: #ffffbb;">
								<td><input type="checkbox" id="allSelect"></td>
								<td>계:</td>
								<td id="countSum">0</td>
								<td id="salesPriceSum" >0</td>
								<td id="discountSum">0</td>
								<td id="supplyPriceSum">0</td>
							</tr>
				</table>
			</div> 
			<div id = "estimatediv">
					<table id="estimatetable">
						<tbody id="opptProdtbody">
							<c:forEach items="${prodlist}" var="prodlist">
								<tr id="priceline" class="${prodlist.prod_id}">
									<th style="width: 3%;">
										<input type="checkbox" name="prod_id" id="prod_id" value="${prodlist.prod_id}"> 
										<input type="hidden" id="prod_price"  value="${prodlist.prod_price}" >
									</th>
										<td style="width: 32%;" id="prod_nm">${prodlist.prod_nm}</td>
										<td style="width: 8%;">
											<input type=number class="inputText" style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" min="1" max="100" value="${prodlist.prod_qty}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)' >
										</td>
										<td style="width: 27%;" >${list.prod_price}</td>
										<td style="width: 15%;" >
											<input type=number class="inputText" style="width: 50%;  text-align: center;" id="discount" name="discount" min="0" max="100" value="${prodlist.discount}"  onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)'>
						
										<select id="unit" name="discount_unit_cd" style="width: 30%; background: #fff;">
											<c:if test="${popFlg eq 'popDetail'}">
												<option value="0" >선택</option>
												<c:forEach items="${eduList}" var="list2">
													<c:if test="${list2.code == prodlist.discount_unit_cd}">
														<option value="${list2.code}" class="seloption" selected="selected">${list2.cd_nm}</option>
													</c:if>
													<c:if test="${list2.code != prodlist.discount_unit_cd}">
														<option value="${list2.code}">${list2.cd_nm}</option>
													</c:if>
												</c:forEach>
											</c:if>
										</select>

										</td>
										<td style="width: 15%;" id="sup_price" name="sup_price">
											${prodlist.sup_price}
										</td>
								 </tr>
							 </c:forEach> 
						</tbody>
					</table>
			</div>
			
			<div class="estimate_bt_position" style="padding-top: 10px;">
			 
					<input type="button" class="tiny ui orange button"  value="상품추가" id="prodListBtn" onclick="opptProdList()" />
					<input type="button" class="tiny ui button" value="상품삭제" id="prodDelete"/>
			</div>
			
<%-- 			<c:if test="${popFlg eq 'add'}"> --%>
<!-- 				<div class="estimate_bt_position">  -->
<!-- 					<input type="button" class="btn btn-default"  value="상품추가" id="prodListBtn" onclick="opptProdList()" /> -->
<!-- 					<input type="button" class="btn btn-default" value="상품삭제" id="prodDelete"/> -->
<!-- 				</div> -->
<%-- 			</c:if> --%>
<%-- 			<c:if test="${popFlg eq 'popDetail'}"> --%>
<!-- 				<div class="estimate_bt_position2"> -->
<!-- 					<input type="button" class="btn btn-success" value="저장" id="opptEstimButton"/> -->
<!-- 					<input type="button" class="btn btn-default" value="취소" id="estimate_cancel"/> -->
<!-- 				</div> -->
<%-- 			</c:if> --%>

			<hr style="border-bottom: 1px solid rgba(34, 36, 38, 0.1); margin-bottom: 10px;"/>
			
			<c:if test="${popFlg eq 'add'}">
				<div class="act_bt_position">
<%-- 					<input type="button" class="cust_oppt_btn" value="등록" id="opptSaveButton" onclick="opptSaveBtn('${ctx}')"/> --%>
					<input type="button" class="tiny ui orange button" value="등록" id="opptSaveButton" onclick="opptSave()"/>
					<input type="button" class="tiny ui button" value="취소" id="opptAdd_cancel" />
				</div>
			</c:if>
			<c:if test="${popFlg eq 'popDetail'}">
				<div class="act_bt_position">
					<input type="button" class="tiny ui orange button" value="편집" id="opptModfyButton" />
					<input type="button" class="tiny ui orange button" value="저장" id="opptModfySaveBtn" onclick="opptMdfySave()" />
					<input type="button" class="tiny ui button" value="취소" id="opptModfy_cancel" />
				</div>
			</c:if>
			
		</div>

	</div>
</body>
</html>