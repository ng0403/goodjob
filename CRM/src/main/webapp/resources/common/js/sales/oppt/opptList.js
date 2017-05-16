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
 * inputCustNm(custNm,leadId,custId,custType)	: 고객 팝업 선택시 값 채워주는 부분. 
 */

$(function(){
	opptAllCheck(); //영업기회 all check 함수
	searchCustcompListPopup();
//	searchCustcompListPopup0();
//	searchCustcompListPopup1();
});
var count = 0;
var schAddFlg = 0;
var otllist;
var ctx = $("#ctx").val();


//영업기회 검색 조건 추가
function addForm(){
	if(count<2){
		
		$.ajax({
			type : 'post',
			url :'/otllist',
			datatype : 'json',
			success:function(result){
				var addedFormDiv = document.getElementById("search_div");
				var str = "";
				    str+="<br><div class='ui left icon input'>";
				    str+="<input type='text' placeholder='영업기회명' autofocus='autofocus' style='width:325px;' onkeypress='opptSearchInput(event);' id='ssales_oppt_nm"+count+"' name='ssales_oppt_nm"+count+"' autofocus='autofocus' value=''>";
				    str+="<i class='database icon'></i>";
				    str+="</div>";
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='고객명' autofocus='autofocus' id='scust_nm"+count+"' name='scust_nm"+count+"' value='' style='margin-left: 3px;'>";
				    str+="<i class='users icon'></i>";
				    str+="<input type='hidden' class='tel_search' id='scust_id"+count+"' name='scust_id"+count+"' value=''>";
				    str+="</div>";
				    str+="<input type='button' class='tiny ui orange button' id='searchCustomer"+count+"' value='고객' >";
				    str+="<select name='ssales_lev_cd_select"+count+"' id='ssales_lev_cd_select"+count+"' style='margin-left: 3px !important;'>";
				    str+="<option value=''>"+'영업기회단계'+"</option>";
				    $.each(result.otllist,function(i,list){
				    	str+="<option value="+list.code+" >"+list.cd_nm+"</option>";
				    	});
				    str+="</select>";
				    str+="<select name='spsblty_rate"+count+"' id='spsblty_rate_select"+count+"' style='margin-left: 3px !important;'>";
				    str+="<option value=''>"+'가능성'+"</option>";
				    str+="<option value='10'>"+'10'+"</option>";
				    str+="<option value='20'>"+'20'+"</option>";
				    str+="<option value='30'>"+'30'+"</option>";
				    str+="<option value='40'>"+'40'+"</option>";
				    str+="<option value='50'>"+'50'+"</option>";
				    str+="<option value='60'>"+'60'+"</option>";
				    str+="<option value='70'>"+'70'+"</option>";
				    str+="<option value='80'>"+'80'+"</option>";
				    str+="<option value='90'>"+'90'+"</option>";
				    str+="<option value='100'>"+'100'+"</option>";
				    str+="</select>";
				    str+="<label onclick='delForm(this);' class='tiny ui button'>"+'X'+"</label>";
				    
					  var addedDiv = document.createElement("div"); // 폼 생성
					    addedDiv.id = "added_"+count; // 폼 Div에 ID 부여 (삭제를 위해)
					    addedDiv.innerHTML  = str; // 폼 Div안에 HTML삽입
					    addedFormDiv.appendChild(addedDiv); // 삽입할 DIV에 생성한 폼 삽입

					    count++;
			
			},
			error:function(request){
				alert("error : " + request);
			}
		});
	}else{
		alert("검색 조건은 최대 3개 입니다.");
//	}
	}

//    document.listForm.count.value=count;
    // 다음 페이지에 몇개의 폼을 넘기는지 전달하기 위해 히든 폼에 카운트 저장
}
//영업기회 검색 조건 삭제
function delForm(obj){
    var addedFormDiv = document.getElementById("search_div");
    addedFormDiv.removeChild(obj.parentNode); // 폼 삭제 
    --count;
//
//    if(count >=1){ // 현재 폼이 두개 이상이면
//               var addedDiv = document.getElementById("added_"+(--count));
//               // 마지막으로 생성된 폼의 ID를 통해 Div객체를 가져옴
//               addedFormDiv.removeChild(addedDiv); // 폼 삭제 
//    }else{ // 마지막 폼만 남아있다면
//               document.baseForm.reset(); // 폼 내용 삭제
//    }
}

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
//	  //영업기회별 상품
//	  $("#tab2").click( function() {
//		  	var opptId = $("#salesId").val();
//		  	$("#tab1").attr("checked",false);
//		  	$("#tab2").attr("checked",true);
//		  	$("#tab3").attr("checked",false);
//		  	if(opptId !=""){
//		  		//영업기회 리스트 출력
////		  		viewSalesActive(opptId);
//		  		opptprdtList(opptId);
////		  		readDetail();
//		  	}
//      });
	  //견적 탭 클릭
	  $("#tab2").click( function() {
		  	var opptId = $("#salesId").val();
		  	$("#tab1").attr("checked",false);
		  	$("#tab2").attr("checked",false);
//		  	$("#tab3").attr("checked",true);
		  	
		  	if(opptId !=""){
		  		//견적 리스트 출력
		  		estimList(opptId);
//		  		readDetail();
		  	}
    });
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
	viewDetail(opptId);
}
//현재 checked된 탭에 맞는 함수 실행
function divideDetail(opptId){
	$("#salesId").val(opptId);
	if($("#tab1").attr("checked")){
	viewDetail(opptId);
	viewSalesActive(opptId);
	estimList(opptId);
	}
		else if($("#tab2").attr("checked")){
		estimList(opptId);
	}
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
	var ctx = $("#ctx").val();
//	alert($("#ssales_oppt_nm").val());
//	alert($("#ssales_oppt_nm0").val());
//	alert($("#ssales_oppt_nm1").val());
//	alert($("#scust_id").val());
//	alert($("#scust_id0").val());
//	alert($("#scust_id1").val());
//	alert($("#ssales_lev_cd_select").val());
//	alert($("#ssales_lev_cd_select0").val());
//	alert($("#ssales_lev_cd_select1").val());
//	alert($("#spsblty_rate_select").val());
//	alert($("#spsblty_rate_select0").val());
//	alert($("#spsblty_rate_select1").val());
	$.ajax({
		type : 'post',
		url : ctx + '/opptajax',
		data : {pageNum : page
			, ssales_oppt_nm : $("#ssales_oppt_nm").val()
			, ssales_oppt_nm0 : $("#ssales_oppt_nm0").val()
			, ssales_oppt_nm1 : $("#ssales_oppt_nm1").val()
			, scust_id : $("#scust_id").val()
			, scust_id0 : $("#scust_id0").val()
			, scust_id1 : $("#scust_id1").val()
			, ssales_lev_cd : $("#ssales_lev_cd_select").val()
			, ssales_lev_cd0 : $("#ssales_lev_cd_select0").val()
			, ssales_lev_cd1 : $("#ssales_lev_cd_select1").val()
			, spsblty_rate : $("#spsblty_rate_select").val()
			, spsblty_rate0 : $("#spsblty_rate_select0").val()
			, spsblty_rate1 : $("#spsblty_rate_select1").val()
		},
		datatype : 'json',
		success:function(result){
			alert("검색완료");
			//리스트 출력 시 버튼 상태 설정
			$("#baseBtnDiv").css("display", "none");
			$("#NewAddBtnDiv").css("display", "block");
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
						"<td>"+list.fst_reg_id+"</td>"+
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
	console.log(prevPageNum);
	console.log(firstPageCount);
	if(ccPageNum != firstPageCount){
		prevPage.attr("href","javascript:opportunityList("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:opportunityList("+i+")");
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
		nextPage.attr("href","javascript:opportunityList("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
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
				"<td rowspan='2'>"+data.fst_reg_id+"</td>"+
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
						'<td>'+data.fst_reg_id+'</td>'+
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
//function searchCustcompListPopup1(ctx){
//	var ctx = $("#ctx").val();
//	var count;
//}
//영업기회 검색창 고객 리스트 팝업
function searchCustcompListPopup(ctx){
	var ctx = $("#ctx").val();
	var count;

	$('#searchCustomer').click(function(){
		var pop_flg='n';
		window.open(ctx+'/opptSearchCustcompList?pop_flg='+pop_flg,'newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});
	
}
////영업기회 검색창 고객 리스트 팝업
	$(document).on("click", "#searchCustomer0", function(){
		var pop_flg = '0';
		window.open('/opptSearchCustcompList?pop_flg='+pop_flg,'newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  
	$(document).on("click", "#searchCustomer1", function(){
		var pop_flg = '1';
		window.open('/opptSearchCustcompList?pop_flg='+pop_flg,'newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  

//고객 이름 입력 함수
function inputCustNm(custNm,custId,custType, pop_flg){	
	if(custType == 'search'){
		if(pop_flg == 'n'){
			$('#scust_nm').val(custId);
			$('#scust_id').val(custNm);
		}if(pop_flg == '0')
			{
				$('#scust_nm0').val(custId);
				$('#scust_id0').val(custNm);
			}if(pop_flg=='1')
				{
					$('#scust_nm1').val(custId);
					$('#scust_id1').val(custNm);
				}
	}else if(custType == 'normal'){
		if(pop_flg == null){
			$('#cust_nm').val(custId);
			$('#cust_id').val(custNm);
		}if(pop_flg == '0')
			{
				$('#cust_nm0').val(custId);
				$('#cust_id0').val(custNm);
			}if(pop_flg=='1')
				{
					$('#cust_nm1').val(custId);
					$('#cust_id1').val(custNm);
				}
	}
}

