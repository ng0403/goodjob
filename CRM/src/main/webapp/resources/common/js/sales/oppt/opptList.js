/**
 * 함수 목록
 * tabClick(); 						:	tab 클릭
 * opptAllCheck();  				:	영업기회 allCheck
 * chkCancel();						:	영업기회 allCheck 해지
 * opptPageInput(event);			:	페이지 input Enter 입력 처리
 * opptSearchInput(event);			:	영업기회 검색 input Enter 입력 처리
 * opptDelete(); 					:	영업기회 삭제
 * divide(opptId);					:	영업기회명 클릭시 호출 리스트 분류
 * viewDetail(opptId)				:	영업기회 상세정보 조회
 * searchBtn(page)					:	조회 버튼 클릭에 대한 검색어 입력 여부 확인
 * opportunityList(page)			:	영업기회 리스트 조회
 * estimList(opptId)				:	견적 리스트 조회
 * dateFormat(timestamp)			:	날짜 포맷 변환 함수
 * searchCustcompListPopup(ctx)		:	영업기회 고객 검색 팝업 open. 
 */

$(function(){
//	tabClick(); // tab 클릭시 checked 설정 및 tab에 맞는 함수 실행
	opptAllCheck(); //영업기회 all check 함수
});

function tabClick(){
	
	 //영업활동 탭 클릭
	$("#tab1").click( function() {
	  	var opptId = $("#salesId").val();
	  	$("#tab1").attr("checked",true);
	  	$("#tab2").attr("checked",false);
//	  	$("#tab3").attr("checked",false);
	  	if(opptId != ""){
	  		//상세정보 출력
	  		viewDetail(opptId);
//	  		readDetail();
	  	}
      });
	  //견적 탭 클릭
	  $("#tab2").click( function() {
		  	var opptId = $("#salesId").val();
		  	$("#tab1").attr("checked",false);
		  	$("#tab2").attr("checked",true);
		  	$("#tab3").attr("checked",false);
		  	if(opptId !=""){
		  		//영업기회 리스트 출력
		  		viewSalesActive(opptId);	
//		  		readDetail();
		  	}
      });
//	  //견적 탭 클릭
//	  $("#tab3").click( function() {
//		  	var opptId = $("#salesId").val();
//		  	$("#tab1").attr("checked",false);
//		  	$("#tab2").attr("checked",false);
//		  	$("#tab3").attr("checked",true);
//		  	
//		  	if(opptId !=""){
//		  		//견적 리스트 출력
//		  		estimList(opptId);
////		  		readDetail();
//		  	}
//    });
}


function opptAllCheck(){
	$("#opptAllSelect").click( function(){
		var chk = $(this).is(":checked"); //checked 된 경우 true, 아닌 경우 false
		if(chk){
			$("#listTable input[type=checkbox]").prop("checked",true);			
		}else{
			$("#listTable input[type=checkbox]").prop("checked",false);
		}
	});
}

//all 체크일때 하나라도 체크해지가 된 경우 all checkbox 체크 해제
function chkCancel(){
	$("#opptAllSelect").prop("checked", false);
}

//페이지 input에서 엔터로 리스트 호출 가능하게 하는 함수
function opptPageInput(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				event.preventDefault();
				var ccPageNum = $("#ccPageInput").val();
				var endPageNum = $("#endPageNum").val();
				if (parseInt(ccPageNum) > parseInt(endPageNum) || parseInt(ccPageNum) < 1) {
					alert("페이지 정보를 다시 입력하세요.")
					$("#ccPageInput").val("1");
				} else {
					opportunityList(ccPageNum);
				}
			}
}

//검색 input에서 엔터로 검색 조회 가능하게 하는 함수
function opptSearchInput(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			event.preventDefault();
			searchBtn(1);
		}
}

// 영업기회 삭제
function opptDelete(){
	var ctx = $("#ctx").val();
	if($("input[name=list_sales_oppt_id]:checked").length==0){
		alert("삭제할 영업기회를 선택해 주세요.");
		return false;
	}
	if(confirm("삭제 하시겠습니까? ")){
	var opptidList = [];
	var pageNum = $("#pageNum").val();
	$("input[name=list_sales_oppt_id]:checked").each(function(){
		opptidList.push($(this).val());
	});
	
	$.ajax({
		type : 'get',
		url : 'opptDelete',
		data : {
				 opptidList : opptidList,
				 pageNum : pageNum
			},
		dataType : 'json',
		success : function(result){
			alert("영업기회가 삭제되었습니다.");
			location.href = ctx + "/oppt";
		},
		error : function(request){
			alert("error : " + request);
		}
	});
	}
	
}

//현재 checked된 탭에 맞는 함수 실행
function divide(opptId){
	$("#salesId").val(opptId);
//	readDetail();
//	if($("#tab1").attr("checked")){
		viewDetail(opptId);
		viewSalesActive(opptId);
		estimList(opptId);
//	}
//	else 
//		if($("#tab2").attr("checked")){
//		viewSalesActive(opptId);
//	}else if($("#tab3").attr("checked")){
//		estimList(opptId);
//	}
}


//영업기회 상세정보 출력
function viewDetail(opptId){
	var ctx = $("#ctx").val();
	location.href = ctx+'/opptDetail?opptId='+opptId;
}

//추가 페이지 이동
function AddCustomerOpen(){
	var ctx = $("#ctx").val();
	location.href = ctx+'/opptDetail';
}

//검색 버튼 클릭 시 
function searchBtn(page){
	
	var ssales_oppt_nm = $("#ssales_oppt_nm").val();
	var scust_id = $("#scust_id").val();
	var ssales_lev_cd_select =  $("#ssales_lev_cd_select").val();
	var spsblty_rate_select = $("#spsblty_rate_select").val();
	
//	if(ssales_oppt_nm == '' && scust_id == '' && ssales_lev_cd_select == '' && spsblty_rate_select ==''){
//		alert("검색어를 입력하세요");
//		$("#ssales_oppt_nm").focust();
//		return;
//	}else{
		opportunityList(page);
//	}
}
//컴마 입력 함수
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//컴마 해제 함수
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}
//영업기회 리스트 출력
function opportunityList(page){
//	readDetail();
	var ctx = $("#ctx").val();
	$.ajax({
		type : 'post',
		url : ctx + '/opptajax',
		data : {pageNum : page, ssales_oppt_nm : $("#ssales_oppt_nm").val(), scust_id : $("#scust_id").val(), ssales_lev_cd : $("#ssales_lev_cd_select").val(), spsblty_rate : $("#spsblty_rate_select").val()},
		datatype : 'json',
		success:function(result){
			//리스트 출력 시 버튼 상태 설정
			$("#baseBtnDiv").css("display", "block");
			$("#addBtnDiv").css("display", "none");
			$("#mdfBtnDiv").css("display", "none");
			
			$("#listTable").children().remove();
			$.each(result.oplist,function(i,list){
			
				$("#listTable").append("" +
						"<tr id='"+list.sales_oppt_id+"'>"+
						"<th><input type=checkbox  id=list_sales_oppt_id name=list_sales_oppt_id value="+list.sales_oppt_id+">" +
						"<input type=hidden id=list_cust_id value="+list.cust_id+">" +
						"<input type=hidden id=list_sales_lev_cd value="+list.sales_lev_cd+"></th>"+
						"<td class='oppt_nm_class' style='text-align: left; padding-left:5px;'><a onclick=\"divide('"+list.sales_oppt_id+"');\" id=list_sales_oppt_nm href='#' style='text-decoration: none;'>"+list.sales_oppt_nm+"</a></td>"+
						"<td id=list_cust_nm>"+list.cust_nm+"</td>"+
						"<td>"+list.sales_lev_cd_nm+"</td>"+
						"<td style='text-align: right; padding-right:5px;'>"+comma(list.expt_sales_amt)+"</td>"+
						"<td>"+list.expt_fin_d+"</td>"+
						"<td>"+list.psblty_rate+"</td>"+
						"<td>"+list.sales_oppt_stat_cd_nm+"</td>"+
						"<td>"+list.fst_reg_id_nm+"</td>"+
						"<td>"+list.fst_reg_dt+"</td>+"+
						"</tr>"
				);
			});
			//페이지 리스트 갯수
			if(result.oplist.length < 10){
				for(var j = 0; j < 10-result.oplist.length; j++){
					$("#listTable").append("<tr style='height:30px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td></tr>");
				}
			}
			$("#pageSpace").children().remove();	
			var page = '';
			page = "<input type='hidden' id='endPageNum' value="+result.page.endPageNum+">"+
				   "<input type='hidden' id='pageNum' value="+result.searchInfo.pageNum+">";
			if (result.searchInfo.pageNum == result.page.startPageNum  && result.searchInfo.pageNum != result.page.endPageNum) {
				page += "<a id='pNum'>◀</a><a>&nbsp;</a>" +												
				"<input type='text' id='ccPageInput' size='1px' value="+result.page.startPageNum+" onkeypress=\"opptPageInput(event);\"> "+ "<a>/</a> " +
				"<a href='#' onclick=\"opportunityList("+result.page.endPageNum+");\" id='pNum' >"+result.page.endPageNum+"</a><a>&nbsp;</a>"+ 
				"<a href='#' onclick=\"opportunityList("+(parseInt(result.searchInfo.pageNum)+parseInt(1))+");\" id='pNum'>▶</a>";
			}else if (result.searchInfo.pageNum == result.page.endPageNum) {
				page += "<a href='#' onclick=\"opportunityList("+(result.searchInfo.pageNum-1)+");\" id='pNum'>◀</a><a>&nbsp;</a>"+
				"<input type='text' id='ccPageInput' size='1px' value="+result.page.endPageNum+" onkeypress=\"opptPageInput(event);\" >"+ "<a>/</a> " +
				"<a href='#' onclick=\"opportunityList("+result.page.endPageNum+")\" id='pNum'>"+result.page.endPageNum+"</a><a>&nbsp;</a>"+ 
				"<a id='pNum'>▶</a>";
			}else {
				page += "<a href='#' onclick=\"opportunityList("+(result.searchInfo.pageNum-1)+");\" id='pNum' >◀</a><a>&nbsp;</a>"+
				"<input type='text' id='ccPageInput' size='1px' value="+result.searchInfo.pageNum+" onkeypress=\"opptPageInput(event);\"> "+ "<a>/</a> " +
				"<a href='#' onclick=\"opportunityList("+result.page.endPageNum+");\" id='pNum'>"+result.page.endPageNum+"</a><a>&nbsp;</a>"+ 
				"<a href='#' onclick=\"opportunityList("+(parseInt(result.searchInfo.pageNum)+parseInt(1))+");\" id='pNum'>▶</a>";
			}
			$("#pageSpace").append(page);
		},
		error:function(request){
			alert("error : " + request);
		}
	});
}
//영업활동 리스트 조회
function viewSalesActive(opptId){
	$("#activeList").children().remove();	
	$.ajax({  
		type : 'GET',
		url : 'opptSalesActiveList',
		data : {opptId : opptId},
		dataType : 'json', 
		success:function(result){
			var content = "";
			if(result.actList.length==0){
				content = "<tr style='height: 150px;'><td colspan='10'>등록된 영업활동이 없습니다.</td></tr>";	
			}
			else{
			$.each(result.actList,function(i,data){
				start_d = data.strt_d;
				end_d = data.end_d;
				reg_dt = data.fst_reg_dt;
				//영업활동 리스트 추가
				content +="<tr>"+
				"<th rowspan='2'><input type='checkbox' value="+data.sales_actvy_id+" name='sales_actvy_id'></th>"+ 
				"<td rowspan='2' style='text-align: left; padding-left: 5px;'>" +
				"<a style='text-decoration: none;' href=javascript:opptActiveDetailPopup('"+data.sales_actvy_id+"')>"+data.sales_actvy_nm+"</a></td>"+
				"<td rowspan='2'>"+data.sales_actvy_div_nm+"</td>"+
				"<td rowspan='2' style='text-align: left; padding-left: 5px;'>"+data.sales_oppt_nm+"</td>"+
				"<td rowspan='2'>"+data.sales_actvy_type_nm+"</td>"+
				"<td>"+start_d+"</td>"+
				"<td>"+data.strt_t+"</td>"+
				"<td rowspan='2'>"+data.sales_actvy_stat_nm+"</td>"+
				"<td rowspan='2'>"+data.fst_reg_id_nm+"</td>"+
				"<td rowspan='2'>"+reg_dt+"</td>"+
				"</tr>"+
				"<tr>"+
				"<td>"+end_d+"</td>"+
				"<td>"+data.end_t+"</td>"+
				"</tr>";	
			});
			
			if(result.actList.length < 5){
				for(var j = 0; j < 5-result.actList.length; j++){
					content += "<th rowspan='2'></th>"+ 
					"<td rowspan='2'></td>"+
					"<td rowspan='2'></td>"+
					"<td rowspan='2'></td>"+
					"<td rowspan='2'></td>"+
					"<td></td>"+
					"<td></td>"+
					"<td rowspan='2'></td>"+
					"<td rowspan='2'></td>"+
					"<td rowspan='2'></td>"+
					"</tr>"+
					"<tr>"+
					"<td></td>"+
					"<td></td>"+
					"</tr>";
					
					}
				}
			}	
			$("#activeList").append(content);
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}	
//견적 리스트 조회
function estimList(opptId){
	$('#estimList').children().remove();
	$.ajax({
		type : 'get',
		url : 'estimList',
		data : { sales_oppt_id : opptId },
		dataType : 'json',
		success:function(result){
			var content ="";
			if(result.length==0){
				content = "<tr style='height: 150px;'><td colspan='8'>등록된 견적이 없습니다.</td></tr>";
			}else{
			$.each(result,function(i,data){
				content += '<tr>'+	
						'<th><input type=checkbox name=estim_id value='+data.estim_id+'></th>'+
						'<td style="text-align: left; padding-left: 5px;"><a style="text-decoration: none;" href=javascript:opptEstimDetail("'+data.estim_id+'");>'+data.estim_nm+'</a></td>'+
						'<td>'+data.estim_lev_cd+'</td>'+
						'<td>'+data.estim_qty+'</td>'+
						'<td style="text-align: right; padding-right: 5px;">'+comma(data.sales_price)+'</td>'+
						'<td>'+data.estim_valid_d+'</td>'+
						'<td>'+data.fst_reg_id_nm+'</td>'+
						'<td>'+data.fst_reg_dt+'</td>'+
						'</tr>';
			});
			if(result.length < 5){
				for(var j = 0; j < 5-result.length; j++){
					content += "<tr>"
						+ "<th></th>"
						+ "<td></td><td></td><td></td>"
						+ "<td></td><td></td><td></td><td></td></tr>";
				}
			}	
			}	
			$('#estimList').append(content);
		},
		error:function(request){
			alert('error :' + request.status);
		}
	});
}
//영업기회 검색창 고객 리스트 팝업
function searchCustcompListPopup(ctx){
	$('#searchCustomer').click(function(){
		alert("고객 검색 버튼 클릭");
		window.open(ctx+'/opptSearchCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  
}

//영업활동 날짜 포맷 변환에 사용되는 함수
//function dateFormat(timestamp) {
//	var date = new Date(timestamp);
//	var year = date.getFullYear();
//	var month = date.getMonth() + 1;
//	var day = date.getDate();
//	var hour = date.getHours();
//	var min = date.getMinutes();
//	var sec = date.getSeconds();
//	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
//			+ (day < 10 ? "0" + day : day);
//	return retVal
//}