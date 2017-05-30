<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/org/orgTree.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common/sfa_common_list.css" type="text/css" />

<script type="text/javascript" src="${ctx}/resources/common/js/standard/org/orgTree.js"></script>

<link rel="stylesheet" type="text/css" href="${ctx}/resources/common/Semantic/semantic.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="${ctx}/resources/common/Semantic/semantic.js"></script>

<title>리스트</title>
<script type="text/javascript">
$("#navisub11").show();
$("#naviorg").css("font-weight", "bold");
</script>
</head>
<body>
	<input id="ctx" type="hidden" value="${ctx}"/>
	<input id="org_mode" type="hidden" value="waiting"/>
	<div id="title">
		<div class="caption">
			<h3 class="ui header" style="background: #fff;">■ 기준정보 > 조직관리</h3>
		</div>
	</div>
	
	<div id="orgTreeForm">
		<ul id="orgTree">
			<c:forEach var="treeOne" items="${TreeList}">
				<li>
					<c:set var="two_count" value="0"/>
					<c:forEach var="sub" items="${TreeListTwo}">
						<c:if test="${treeOne.org_id == sub.up_org_id}">
							<c:set var="two_count">${two_count+1}</c:set>
						</c:if>
					</c:forEach>
					<c:if test="${two_count == 0}">
						<img class="no_f_orgFlag" src="${ctx}/resources/image/no_treebtn.png"/>
					</c:if>
					<c:if test="${two_count != 0}">
						<img class="f_orgFlag" src="${ctx}/resources/image/treebtn1.png"/>
					</c:if>
					<input type="checkbox" class="masterCheck" id="chk_org_id" value="${treeOne.org_id}"/>
					<c:if test="${treeOne.act_yn == 'Y'}">
						<%-- <a class="master_org">${treeOne.org_nm}</a>	 --%>
						<a class="sub_org">${treeOne.org_nm}</a>	
					</c:if>
					<c:if test="${treeOne.act_yn == 'N'}">
						<%-- <a class="master_org"><del>${treeOne.org_nm}</del></a> --%>
						<a class="sub_org"><del>${treeOne.org_nm}</del></a>
					</c:if>
					<c:if test="${!empty TreeListTwo}">
					<ul class="orgtree_sub">					
						<c:forEach var="sub" items="${TreeListTwo}">
							<c:if test="${treeOne.org_id == sub.up_org_id}">
								<li class='hh' style="margin-left:15px;">
																										
									<input type="checkbox" class="subCheck" value="${sub.org_id}"/>
									<c:if test="${sub.act_yn == 'Y'}">
										<a class="sub_org">${sub.org_nm}</a>
									</c:if>
									<c:if test="${sub.act_yn == 'N'}">
										<a class="sub_org"><del>${sub.org_nm}</del></a>
									</c:if>
									<%-- <c:if test="${!empty TreeListThird}">
										<ul class="orgtree_super_sub">
										<c:forEach var="third" items="${TreeListThird}">
										<c:if test="${sub.org_id == third.up_org_id}">
											<li>
												<c:set var="fourth_count" value="0"/>
												<c:forEach var="fourth" items="${TreeListFourth}">
													<c:if test="${third.org_id == fourth.up_org_id}">
														<c:set var="fourth_count">${fourth_count+1}</c:set>
													</c:if>
												</c:forEach>
												<c:if test="${fourth_count == 0}">
													<img class="no_ss_orgFlag" src="${ctx}/resources/image/no_treebtn.png"/>
												</c:if>
												<c:if test="${fourth_count != 0}">
													<img class="ss_orgFlag" src="${ctx}/resources/image/treebtn1.png"/>
												</c:if>
												<input type="checkbox" class="ssubCheck" value="${third.org_id}"/>
												<c:if test="${third.act_yn == 'Y'}">		
													<a class="super_sub_org">${third.org_nm}</a>
												</c:if>
												<c:if test="${third.act_yn == 'N'}">		
													<a class="super_sub_org"><del>${third.org_nm}</del></a>
												</c:if>	
												<c:if test="${!empty TreeListFourth}">
													<ul class="orgtree_super_ssub">
														<c:forEach var="fourth" items="${TreeListFourth}">
															<c:if test="${third.org_id == fourth.up_org_id}">
																<li>
																	<input type="checkbox" class="s_ssubCheck" value="${fourth.org_id}"/>
																	<c:if test="${fourth.act_yn == 'Y'}">		
																		<a class="super_s_sub_org">${fourth.org_nm}</a>
																	</c:if>
																	<c:if test="${fourth.act_yn == 'N'}">		
																		<a class="super_s_sub_org"><del>${fourth.org_nm}</del></a>
																	</c:if>	
																</li>
															</c:if>
														</c:forEach>
													</ul>
												</c:if>										
											</li>
										</c:if>
										</c:forEach>
										</ul>
									</c:if>	 --%>							
								</li>
							</c:if>
						</c:forEach>
						</ul>
					</c:if>
					
				</li>
			</c:forEach>
		</ul>
	</div>	
	<p>
	<br>
		<!-- 기본 버튼 -->
	<div class="org_bt_position">
		<button type="button" class="tiny ui button" id="orgAddBtn">추가</button>
		<button type="button" class="tiny ui blue button" id="orgDelBtn">삭제</button>
		<button type="button" class="tiny ui button" id="orgAllCancelBtn">선택취소</button>
	</div>
</body>
</html>