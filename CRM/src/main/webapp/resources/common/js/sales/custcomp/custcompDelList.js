/**
 * 함수목록
 * custcompDelListbtn() 								: 삭제된 데이터 리스트
 * custcompDelList(page)								: 삭제된 데이터 리스트
 * ccDelDetail(cust_id)									: 삭제된 데이터 상세보기
 *
 * addForm() 											: 리스트 검색조건 추가
 * dellForm(obj) 										: 리스트 검색조건 삭제
 * schDelCustComp(event) 								: 검색 엔터키 기능
 * searchDelBtn((hBtn(page) 							: 검색버튼 클릭
 * chkCancel() 											: 전체 체크 해제
 * custcompAllCheck() 									: 고객사 전체 선택
 * chkCancel() 											: 전체 체크에서 체크해지 된 경우
 * custcompChkCancel() 									: 전체 체크 해제
 * checkCount() 										: 체크박스 개수
 * ccTabFunc(cust_id, cust_nm) 							: 탭 이동
 * dateFormat(timestamp) 								: 날짜 13자리를 yyyy-mm-dd형식으로 변환
 * paging() 											: 페이징
 * schPaging(ccPageNum) 								: 조회 페이징
**/

$(document).ready(function() {
	var ctx = $("#ctx").val();
	var cust_id = $("#nowCust_id").val();
	var page = $("#ccPageNum").val();
});	
/* 정렬 버튼 클릭 시 처리 함수 */
function setOrder(order_by,page){
	$("#order_by").val(order_by);
	if($("#order_sc").val()=='DESC'){
		$("#order_sc").val('ASC');
	}else{
		$("#order_sc").val('DESC');
	}
	custcompDelList(page);
}
//고객사 삭제된 데이터 리스트 출력
function custcompDelList(page) {
	var ctx = $("#ctx").val();
	$.ajax({
		type : 'post',
		url : ctx + '/custcompDelListAjax',
		data : {	
				    pageNum : page, 
					sch_cust_nm : $("#sch_cust_nm").val(), 
					sch_comp_num : $("#sch_comp_num").val(), 
					sch_corp_num : $("#sch_corp_num").val(),
					order_by : $("#order_by").val(),
					order_sc : $("#order_sc").val()
				},
				datatype : 'json',
		success:function(result){
			if(result.ccVOListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/custcompDelList';
			}else{
				//리스트 출력 시 버튼 상태 설정
				$("#functionBtn").css("display", "block");
				
				$("#ccDelListTbody").children().remove();
				$.each(result.ccVOList, function(i, cc){
				
					$("#ccDelListTbody").append("" +
							"<tr id='"+cc.cust_id+"'>"+
							"<td id='ccListTableNmTd' style='text-align: left; padding-left:8px;'><a onclick=\"ccDelDetail('"+cc.cust_id+"');\" id=cust_nm href='#' style='text-decoration: none;'>"+cc.cust_nm+"</a></td>"+
							"<td id=cust_nm style='text-align: center'>"+cc.comp_num+"</td>"+
							"<td style='text-align: center'>"+cc.corp_num+"</td>"+
							"<td style='text-align: center'>"+cc.rep_ph1+"-"+cc.rep_ph2+"-"+cc.rep_ph3+"</td>"+
							"<td style='text-align: center'>"+cc.sales_scale+"</td>"+
							"<td style='text-align: right; padding-right:8px'> "+cc.emp_qty+"</td>"+
							"<td style='text-align: center'>"+cc.indst+"</td>"+
							"<td style='text-align: center'>"+cc.fin_mdfy_id+"</td>"+
							"<td style='text-align: center'>"+cc.fin_mdfy_dt+"</td>+"+
//							"<td style='text-align: center'>"+cc.fst_reg_id+"</td>"+
//							"<td style='text-align: center'>"+cc.fst_reg_dt+"</td>"+
							"</tr >"
					);
				});
			}
			$("#pageSpace").children().remove();	
			$("#pageSpace").children().remove();
			var ccPageNum = result.ccPageNum;
			var startPageNum = result.page.startPageNum;
			var endPageNum = result.page.endPageNum;
			var firstPageCount = result.page.firstPageCount;
			var totalPageCount = result.page.totalPageCount;
			var prevPageNum = result.page.prevPageNum;
			var nextPageNum = result.page.nextPageNum;
			var prevStepPage = result.page.prevStepPage;
			var nextStepPage = result.page.nextStepPage;
			paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);
		},
		error:function(request){
			alert("error : " + request);
		}
	});
}

//고객사 삭제된 데이터 상세보기
function ccDelDetail(cust_id) {
	var ctx = $("#ctx").val();
	location.href = ctx+'/custcompDelDetail?cust_id=' + cust_id;
}

// 서브메뉴 유지
$("#navisub4").show();
$("#navicustcomp").css("font-weight", "bold");

var count = 0;
var schAddFlg = 0;
var ccllist;

//고객사 검색 조건 추가
function addForm(){
	if(count<2){
		if($("#cust_nm").length > 0)
			{
			count = 0;
			}
		if($("#cust_nm0").length > 0)
			{
				count=1;
				}
		if(($("#cust_nm1").length > 0) && ($("#cust_nm0").length > 0))
			{
			alert("검색 조건은 최대 3개 입니다.");
			return;
			}
		var addedFormDiv = document.getElementById("search_div");
		var str = "";
			str+="<br><div class='ui left icon input'>";
			str+="<input type='text' placeholder='고객사명' style='margin-right: 7px;' class='inp_search' id='sch_cust_nm"+count+"' name='sch_cust_nm"+count+"' onkeypress='schDelCustComp(event);'/>";
		    str+="<i class='users icon'></i>";
		    str+="</div>";
		    str+="<div class='ui left icon input'>";
		    str+="<input type='text' placeholder='사업자번호' style='margin-right: 7px;' class='inp_search' id='sch_comp_num"+count+"' name='sch_comp_num"+count+"'  maxlength='9' onkeypress='schDelCustComp(event);' style='ime-mode:disabled;'/>";
		    str+="<i class='suitcase icon'></i>";
		    str+="</div>";
		    str+="<div class='ui left icon input'>";
		    str+="<input type='text' placeholder='법인번호' style='margin-right: 7px;' class='inp_search' id='sch_corp_num"+count+"' name='sch_corp_num"+count+"'  maxlength='9' onkeypress='schDelCustComp(event);' style='ime-mode:disabled;'/>";
		    str+="<i class='law icon'></i>";
		    str+="</div>";
		    str+="<label  onclick='dellForm(this)' id='schDelBth' class='tiny ui button' >"+'-'+"</label>";
		    
		    var addedDiv = document.createElement("div"); 	// 폼 생성
		    addedDiv.id = "added_"+count; 					// 폼 Div에 ID 부여 (삭제를 위해)
		    addedDiv.innerHTML  = str; 						// 폼 Div안에 HTML삽입
		    addedFormDiv.appendChild(addedDiv); 			// 삽입할 DIV에 생성한 폼 삽입
	
		    count++;
	}else{
		alert("검색 조건은 최대 3개 입니다.");
	}
}

//고객사 검색 조건 삭제
function dellForm(obj){
    var addedFormDiv = document.getElementById("search_div");
        addedFormDiv.removeChild(obj.parentNode); 				// 폼 삭제 
        --count;
}   

//검색어 입력 후 엔터 
function schDelCustComp(event){

	var sch_cust_nm = $("#sch_cust_nm").val();
	var sch_cust_nm0 = $("#sch_cust_nm0").val();
	var sch_cust_nm1 = $("#sch_cust_nm1").val(); 
	
	var sch_comp_num = $("#sch_comp_num").val(); 
	var sch_comp_num0 = $("#sch_comp_num0").val(); 
	var sch_comp_num1 = $("#sch_comp_num1").val(); 
	
	var sch_corp_num = $("#sch_corp_num").val();
	var sch_corp_num0 = $("#sch_corp_num0").val(); 
	var sch_corp_num1 = $("#sch_corp_num1").val();
	
	if ($("#sch_cust_nm").val() == '' && $("#sch_comp_num").val() == '' && $("#sch_corp_num").val() == '') {
		alert("검색어를 입력하세요.");
		$("#sch_cust_nm").focus();
	}
	
	if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm0){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm1){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}if(sch_cust_nm0 == null && sch_cust_nm1){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}
	if((sch_comp_num == '' || sch_comp_num == null) && sch_comp_num0){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}if((sch_comp_num == '' || sch_comp_num == null) && sch_comp_num1){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}if(sch_comp_num0 == null && sch_comp_num1){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}
	if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num0){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num1){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}if(sch_corp_num0 == null && sch_corp_num1){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}
	custcompDelList(1);
}

// 전체 체크 해제
function chkCancel() {
	$(document).ready(function() {
		$("#custcompCheck").prop("checked", false);
	});
}


//검색 버튼 클릭 시 
function searchDelBtn(page){

	var sch_cust_nm =   $("#sch_cust_nm").val();
	var sch_cust_nm0 =  $("#sch_cust_nm0").val();
	var sch_cust_nm1 =  $("#sch_cust_nm1").val(); 
	var sch_comp_num =  $("#sch_comp_num").val(); 
	var sch_comp_num0 = $("#sch_comp_num0").val(); 
	var sch_comp_num1 = $("#sch_comp_num1").val(); 
	var sch_corp_num =  $("#sch_corp_num").val();
	var sch_corp_num0 = $("#sch_corp_num0").val(); 
	var sch_corp_num1 = $("#sch_corp_num1").val();
	
	if ($("#sch_cust_nm").val() == '' && $("#sch_comp_num").val() == '' && $("#sch_corp_num").val() == '') {
		alert("검색어를 입력하세요.");
		$("#sch_cust_nm").focus();
	}if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm0){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm1){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}if(sch_cust_nm0 == null && sch_cust_nm1){
		alert("고객사명을 앞에서부터 채워주세요.");
		return;
	}
	if((sch_comp_num == '' || sch_comp_num == null)  && sch_comp_num0){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}if((sch_comp_num == '' || sch_comp_num == null) && sch_comp_num1){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}if(sch_comp_num0 == null && sch_comp_num1){
		alert("사업자번호를 앞에서부터 채워주세요.");
		return;
	}
	if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num0){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num1){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}if(sch_corp_num0 == null && sch_corp_num1){
		alert("법인번호를 앞에서부터 채워주세요.");
		return;
	}
	
	custcompDelList(page);
}

//페이징
function paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage){
	var endPageNo = $("<input>");
	endPageNo.attr({"type":"hidden","id":"endPageNum","value":endPageNum});
	var ccPageeNo = $("<input>");
	ccPageeNo.attr({"type":"hidden","id":"ccPageNum","value":ccPageNum});
	$("#pageSpace").append(endPageNo).append(ccPageeNo);
	
	var prevPage = $("<a>");
	prevPage.addClass("icon item");
	var prevI = $("<i>");
	prevI.addClass("left chevron icon");
	if(ccPageNum != firstPageCount){
		prevPage.attr("href","javascript:custcompList("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:custcompList("+i+")");
		ccPage.html(i);
		if(i == ccPageNum){
			var b = $("<b>");
			ccPage.attr("id","pNum");
			b.append(ccPage);
			$("#pageSpace").append(b);
		}else{
			$("#pageSpace").append(ccPage);
		}
	}
	var nextPage = $("<a>");
	nextPage.addClass("icon item");
	var nextI = $("<i>");
	nextI.addClass("right chevron icon");
	if(ccPageNum != totalPageCount){
		nextPage.attr("href","javascript:custcompList("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
}

//고객사 삭제된 데이터 리스트
function custcompDelListbtn() {
	var ctx = $("#ctx").val();
	location.href = ctx + '/custcompDelList';
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function dateFormatTime(timestamp){
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
	                        + (day < 10 ? "0" + day : day) + " " 
	                        + (hour < 10 ? "0" + hour : hour) + ":"
	                        + (min < 10 ? "0" + min : min);
	return retVal
}

//조회 페이징
function schPaging(ccPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var sch_cust_nm   = $("#sch_cust_nm").val();
		var sch_cust_nm0  = $("#sch_cust_nm0").val();
		var sch_cust_nm1  = $("#sch_cust_nm1").val();
		var sch_comp_num  = $("#sch_comp_num").val();
		var sch_comp_num0 = $("#sch_comp_num0").val();
		var sch_comp_num1 = $("#sch_comp_num1").val();
		var sch_corp_num  = $("#sch_corp_num").val();
		var sch_corp_num0 = $("#sch_corp_num0").val();
		var sch_corp_num1 = $("#sch_corp_num1").val();

		if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm0){
			alert("고객사명을 앞에서부터 채워주세요.");
			return;
		}if((sch_cust_nm == '' || sch_cust_nm == null) && sch_cust_nm1){
			alert("고객사명을 앞에서부터 채워주세요.");
			return;
		}if(sch_cust_nm0 == null && sch_cust_nm1){
			alert("고객사명을 앞에서부터 채워주세요.");
			return;
		}
		if((sch_comp_num == '' || sch_comp_num == null)  && sch_comp_num0){
			alert("사업자번호를 앞에서부터 채워주세요.");
			return;
		}if((sch_comp_num == '' || sch_comp_num == null) && sch_comp_num1){
			alert("사업자번호를 앞에서부터 채워주세요.");
			return;
		}if(sch_comp_num0 == null && sch_comp_num1){
			alert("사업자번호를 앞에서부터 채워주세요.");
			return;
		}
		if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num0){
			alert("법인번호를 앞에서부터 채워주세요.");
			return;
		}if((sch_corp_num == '' || sch_corp_num == null) && sch_corp_num1){
			alert("법인번호를 앞에서부터 채워주세요.");
			return;
		}if(sch_corp_num0 == null && sch_corp_num1){
			alert("법인번호를 앞에서부터 채워주세요.");
			return;
		} else{
			var allData = {
							"ccPageNum": ccPageNum, 
							"sch_cust_nm": sch_cust_nm, "sch_cust_nm0": sch_cust_nm0, "sch_cust_nm1": sch_cust_nm1, 
							"sch_comp_num":sch_comp_num, "sch_comp_num0":sch_comp_num0, "sch_comp_num1":sch_comp_num1, 
							"sch_comp_num":sch_comp_num, "sch_comp_num0":sch_comp_num0, "sch_comp_num1":sch_comp_num1,
							"sch_corp_num":sch_corp_num, "sch_corp_num0":sch_corp_num0, "sch_corp_num1":sch_corp_num1
						  };
			var tbody = $('#ccDelListTbody');
			var tbodyContent = "";
			
			$.ajax({
				url : ctx+'/custcompPaging',
				type : 'POST',
				data : allData,
				dataType : "json",
				success : function(data) {
					if(data.result == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						if(data.ccVOListSize == 0){
							alert("검색결과가 없습니다.");
							location.href = ctx+'/custcompDelList';
						}else{
							tbody.children().remove();
							
							$("#sch_cust_nm").val(data.sch_cust_nm);
							$("#sch_cust_nm0").val(data.sch_cust_nm0);
							$("#sch_cust_nm1").val(data.sch_cust_nm1);
							$("#sch_comp_num").val(data.sch_comp_num);
							$("#sch_comp_num0").val(data.sch_comp_num0);
							$("#sch_comp_num1").val(data.sch_comp_num1);
							$("#sch_corp_num").val(data.sch_corp_num);
							$("#sch_corp_num0").val(data.sch_corp_num0);
							$("#sch_corp_num1").val(data.sch_corp_num1);
							for (var i = 0; i < data.ccVOList.length; i++) {
								tbodyContent = "<tr>"
									+"<th><input type='checkbox' id='chk_cust_id' value='"+data.ccVOList[i].cust_id+"' onclick='chkCancel();'></th>"
									+"<td style='text-align: left; padding-left: 8px;'>"
									+"<a href='#' style='color: blue;' class='cnClick' onclick=\"ccTabFunc('"+data.ccVOList[i].cust_id+"', '"+data.ccVOList[i].cust_nm+"');\">"+data.ccVOList[i].cust_nm+"</a></td>"
									+"	<td>"+data.ccVOList[i].comp_num+"</td>"
									+"<td>"+data.ccVOList[i].corp_num+"</td>"
									+"<td>"+data.ccVOList[i].rep_ph1+"-"+data.ccVOList[i].rep_ph2+"-"+data.ccVOList[i].rep_ph3+"</td>"
									+"<td>"+data.ccVOList[i].sales_scale+"</td>"
									+"<td style='text-align: right; padding-right: 8px;'>"+data.ccVOList[i].emp_qty+"</td>"
									+"<td>"+data.ccVOList[i].indst+"</td>"
									"<td >"+cc.fin_mdfy_id+"</td>+"+
									"<td >"+cc.fin_mdfy_dt+"</td>+"+
//									"<td >"+cc.fst_reg_id+"</td>+"+
//									"<td >"+cc.fst_reg_dt+"</td>+"+
									+"</tr>";
								tbody.append(tbodyContent);
								$("#ccListCheck").prop("checked", false);
							}
							
							if(data.ccVOList.length < 5){
								for(var j = 0; j < 5-data.ccVOList.length; j++){
									tbodyContent ="<tr style='height:30px;'>"
										+"<th></th>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td><td></td><td></td><td></td>"
										+"</tr>";
									tbody.append(tbodyContent);
								}
							}
							var pageContent = "";
							// 페이징 다시그리기
							$("#pagingDiv").children().remove();
							
							if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
							} else if(data.ccPageNum == data.page.startPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							} else if(data.ccPageNum == data.page.endPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a> / "+data.page.endPageNum+"</a>"
								+"<a> ▶ </a>";
							} else {
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.ccPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							}
							$("#pagingDiv").append(pageContent);
						}
					}
				},
				error : function() {
					alert("전송중 오류가 발생했습니다.");
				}
			});//ajax
		}
	});//document.ready
}

