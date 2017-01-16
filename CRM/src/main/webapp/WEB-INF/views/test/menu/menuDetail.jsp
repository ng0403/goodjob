<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="ctx" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${ctx}/resources/common/bootstrap-3.2.0/dist/css/bootstrap.min.css" type="text/css" />
<%-- <link rel="stylesheet" href="${ctx}/resources/common/bootstrap-3.2.0/dist/css/bootstrap-theme.min.css" type="text/css" /> --%>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-1.11.1.js"></script> --%>
<script src="https://code.jquery.com/jquery-1.11.1.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/resources/common/bootstrap-3.2.0/dist/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript"></script>
<%-- <script type="text/javascript" src="${ctx}/resources/common/js/jquery-ui.js"></script> --%>
<script type="text/javascript" src="${ctx}/resources/common/js/nexen/common.js"></script>
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css"	type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/header.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/menu.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/subMenu.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/content.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/standard/common.css" type="text/css" />
<link rel="stylesheet" href="${ctx}/resources/common/css/jquery-ui.css"/>

<title>Notice Detail</title>
<style type="text/css">
#inputDiv{margin-top: 10px;}
#titleSpan{ margin-left: 4%; font-size: 15px; font-weight: bold;}
#cusSpan{display:inline-block; width: 100px; text-align: right; }
#customerNo{width: 120px;}
#material_txt{width: 120px; }
#dbUpdateDate{float:left; width:100px; border: 0px; color: gray;}
#tableDiv{width:100%; margin:auto; overflow-x: scroll;}

#selectSpan{display:inline-block; width:110px; text-align: right;}
#btn_search{float:right; margin-right: 5px; margin-top: 5px;}
#excelDown{float: right; margin-right: 3%; margin-top: 5px;}

#inputDiv select{width: 128px;}
#inputDiv > label{display:inline-block; width: 100px; text-align: right;}
#noticeListTbody > td{height: 23px;}
	
.block_div{display:block; height: 10px; clear: both;}
</style>
</head>

<body>
	<div class="tab-content" id="myTabContent">
        <div  class="tab-pane fade active in" id="noticeDetail" align="center" role="tabpanel" aria-labelledby="myModalLabel">
        <span style="font-size:15px;float:left;margin-left:1%;margin-top:1%;">
		<strong>Notice Detail</strong></span>
		<input type="button" class="btn btn-default" onclick="clearTdFunc();" data-dismiss="modal" value="Close" style="font-size:11px;float:right;margin-right:1%;margin-top:1%;"/>
	    <input type="hidden" value="${create_by}" id="create_by" name="create_by"/>
	    <div class="block_div"></div><div class="block_div"></div>
		<c:set var="flag" value="${flag}" />
			<table class="table table-bordered" id="noticeDetailTable" style="font-size:11.8px;width: 90%">
				<colgroup>
					<col width="15%" />
					<col width="35%" />
					<col width="15%" />
					<col width="35%" />
				</colgroup>

				<tbody>
					<tr>
						<th scope="row">No</th>
						<td>${notice_no}</td>
						<th scope="row">Hits</th>
						<td>${hit_cnt}</td>
					</tr>

					<tr>
						<th scope="row">Sales Group</th>
						<td>${sales_group_nm}</td>
						<th scope="row">Sales Office</th>
						<td>${sales_office_nm}</td>
					</tr>

					<tr>
						<th scope="row">Created By</th>
						<td>${create_by_nm}</td>
						<th scope="row">Created</th>
						<td>${create_date}</td>
					</tr>
					<tr>
						<th scope="row">Attach File</th>
						<td colspan="3">
						    <input type="hidden" id="notice_no"	value="${notice_no}"> 
						        <a href="/nexen/downloadFile?notice_no=${notice_no}" name="file">${file_name}</a>&nbsp;&nbsp;${file_size}kB
						</td>
					</tr>
					<tr>
						<th scope="row">Subject</th>
						<td colspan="3">${subject}</td>
					</tr>

					<tr height="150px">
						<th scope="row">Content</th>
						<td colspan="3">${content}</td>
					</tr>
                    <c:if test="${flag2==1}">
					<tr>
						<td colspan="4" align="right">
						
						<a data-target="#noticeUpdate"	role="tab" id="noticeUpdate-tab" data-toggle="tab"
							aria-controls="special" aria-expanded="false" class="btn btn-default" style="font-size:11px;margin-right:0%;">Modify</a>
						
						</td>
					</tr>
					</c:if>
				</tbody>
			</table>
		</div>

        <!-- notice modify 창 -->
		<div role="tabpanel" class="tab-pane fade" id="noticeUpdate" aria-labelledby="noticeUpdate-tab">
            <span id="updateTitle" style="float:left; margin-left:1%;margin-top:1%; font-size:15px;">
		    <strong>Notice Modify</strong>
		    </span>
		    <input type="button" class="btn btn-default" data-dismiss="modal" style="float:right;margin-right:1%;margin-top:1%;font-size:11px;" value="Close" onclick="clearTdFunc1();"/>
		    
			<div class="block_div"></div><div class="block_div"></div>
			<form name="frm2" action="/nexen/noticeUpdate" enctype="multipart/form-data" method="post">
				<div align="center">
					<table class="table table-bordered" id="noticeUpdateTable" style="font-size:11.8px;width: 90%;">
						<colgroup>
							<col width="15%" />
							<col width="35%" />
							<col width="15%" />
							<col width="35%" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row">No</th>
								<td>${notice_no}<input type="hidden" id="notice_no"
									name="notice_no" value="${notice_no}">
								</td>
								<th scope="row">Hits</th>
								<td>${hit_cnt}</td>
							</tr>
							<tr>
								<th scope="row">Sales Group</th>
								<td>${sales_group_nm}</td>
								<th scope="row">Sales Office</th>
								<td>${sales_office_nm}</td>
							</tr>
							<tr>
								<th scope="row">Created By</th>
								<td>${create_by_nm}</td>
								<th scope="row">Created</th>
								<td>${create_date}</td>
							</tr>
							<tr>
								<th scope="row">Attach File</th>
								<td colspan="2" style="text-align:left;font-size:11.5px;"><input type="file" name="file" style="width:70%;">&nbsp;
								<input type="checkbox" id="yfile" name="yfile" onchange="fn_checkYN();"/>I will not attach file.
								<input type="hidden" name="yfilehidden" id="yfilehidden" value="n"/>
								<input type="hidden" name="userNo" id="userNo" value="${userNo}"/>
								<td style="text-align:left;">&nbsp;${file_name}&nbsp;&nbsp;${file_size}kb</td>
							</tr>
							<tr>
								<th scope="row">Subject</th>
								<td colspan="3"><input type="text" id="subject"
									name="subject" style="width: 80%" value="${subject}" /></td>
							</tr>
							<tr>
								<th scope="row">Content</th>
								<td colspan="3" class="view_text"><textarea rows="10"
										cols="100" title="내용" id="content" name="content">${content}</textarea>
								</td>
							</tr>
							<tr>
								<td align="right" colspan="4"> 
								<input type="button" value="Delete" class="btn btn-default" onclick="fn_deleteBoard()" style="float:right;margin-right:0%;font-size:11px;">
								<input type="submit" class="btn btn-default" value="Save" style="font-size:11px;float:right;margin-right:1%;"/>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</div>
	</div>  

	<script type="text/javascript">
	/* 글 삭제 */	
	function fn_deleteBoard() {
		window.location.href = "/nexen/noticeDelete?userNo=${userNo}&notice_no="+${notice_no};
	}
		
	/* 공지사항 detail 창 닫을 때 내용 삭제 */
	function clearTdFunc(){
		$('#noticeDetailTable').empty();
	}
	/* 공지사항 update 창 닫을 때 내용삭제 */
	function clearTdFunc1(){
		$('#noticeUpdateTable').empty();
		$('#updateTitle').empty();
	}
	/* 글 수정시 기존 첨부 파일 삭제 여부 */
	function fn_checkYN() {
		var aaa = $('input[name=yfile]').is(":checked");
		$('input[name=yfilehidden]').val('n');
		if (aaa) {
			$('input[name=yfilehidden]').val('y');
		} else {
			$('input[name=yfilehidden]').val('n');
		}
	}
	</script>
</body>
</html>