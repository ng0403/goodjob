/**
 * 함수 목록
 * estimAllselect()					:	견적 전체 선택		
 * chkCancel()						:	견적 전체 선택 박스 해제
 * estPageInput(event)				:	페이지 input Enter 입력 처리			
 * estSearchInput(event)			:	견적 검색 input Enter 입력 처리
 * searchBtn(page)					:	조회 버튼 클릭에 대한 검색어 입력 여부 확인
 * estimDeleteBtn(ctx)				:	견적 삭제
 * list(page)						:	견적 리스트 조회
 * estDetail(estim_id)				:	견적 상세정보 출력
 * startCalendar(ctx)				:	달력 띄우기
 */

	var count = 0;

$(function(){
	var ctx = $('#ctx').val();
	estimAllselect();
	estimDeleteBtn(ctx);
	startCalendar(ctx);
	$("#search_div2, #search_div3").hide();
	custcompListPopup(ctx);
});
/* 정렬 버튼 클릭 시 처리 함수 */
function setOrder(order_by,page){
//	console.log(order_by);
//	console.log($("#order_by").val());
//	console.log($("#order_sc").val());
	$("#order_by").val(order_by);
	if($("#order_sc").val()=='DESC'){
		$("#order_sc").val('ASC');
	}else{
		$("#order_sc").val('DESC');
	}
	list(page);
}
//고객사 리스트 팝업
function custcompListPopup(ctx){
	$('#cust_list_pop').click(function(){
		window.open(ctx+'/estCustcompList?act_yn=all','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	$('#cust_list_pop1').click(function(){
		window.open(ctx+'/estCustcompList?flg=1&act_yn=all','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	$('#cust_list_pop2').click(function(){
		window.open(ctx+'/estCustcompList?flg=2&act_yn=all','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//고객명 입력 함수
function inputCustNm(custNm,custId){
	$('#cust_nm').val(custNm);
	$('#cust_id').val(custId);
}
function inputCustNm1(custNm,custId){
	$('#cust_nm1').val(custNm);
	$('#cust_id1').val(custId);
}
function inputCustNm2(custNm,custId){
	$('#cust_nm2').val(custNm);
	$('#cust_id2').val(custId);
}

//견적 전체 선택
function estimAllselect(){
	$("#estimAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#estList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#estList input[type=checkbox]").prop("checked",false);
		}
	});
}

//견적 전체 선택 박스 해제
function chkCancel(){
	$("#estimAllSelect").prop("checked", false);
}
//견적 리스트 조회
function list(page){
	var estim_nm = $("#sestim_nm").val();
	var cust_nm = $('#cust_nm').val();
	var estim_lev_cd = $("#sestim_lev_cd").val();
	var sales_price_1 =  $("#ssales_price_1").val();
	var sales_price_2 =  $("#ssales_price_2").val();
	var estim_valid_d = $("#sestim_valid_d").val();
	var estim_nm1 = $("#sestim_nm1").val();
	var cust_nm1 = $('#cust_nm1').val();
	var estim_lev_cd1 = $("#sestim_lev_cd1").val();
	var sales_price_11 =  $("#ssales_price_11").val();
	var sales_price_21 =  $("#ssales_price_21").val();
	var estim_valid_d1 = $("#sestim_valid_d1").val();
	var estim_nm2 = $("#sestim_nm2").val();
	var cust_nm2 = $('#cust_nm2').val();
	var estim_lev_cd2 = $("#sestim_lev_cd2").val();
	var sales_price_12 =  $("#ssales_price_12").val();
	var sales_price_22 =  $("#ssales_price_22").val();
	var estim_valid_d2 = $("#sestim_valid_d2").val();
	var order_by = $("#order_by").val();
	var order_sc = $("#order_sc").val();
	$.ajax({
		type : 'GET',
		url : '/delEstListAjax',
		data : {
			ccPageNum : page, 
			estim_nm : estim_nm,
			cust_nm : cust_nm,
			estim_lev_cd : estim_lev_cd, 
			sales_price_1 : sales_price_1, 
			sales_price_2 : sales_price_2, 
			estim_valid_d : estim_valid_d,
			estim_nm1 : estim_nm1,
			cust_nm1 : cust_nm1,
			estim_lev_cd1 : estim_lev_cd1, 
			sales_price_11 : sales_price_11, 
			sales_price_21 : sales_price_21, 
			estim_valid_d1 : estim_valid_d1,
			estim_nm2 : estim_nm2,
			cust_nm2 : cust_nm2,
			estim_lev_cd2 : estim_lev_cd2, 
			sales_price_12 : sales_price_12, 
			sales_price_22 : sales_price_22, 
			estim_valid_d2 : estim_valid_d2,
			order_by : order_by,
			order_sc : order_sc
		},
		datatype : 'json',
		success:function(result){
//			$("#sestim_nm").val(result.searchInfo.estim_nm);
//			$("#sestim_lev_cd").val(result.searchInfo.estim_lev_cd);
//			$("#ssales_price_1").val(result.searchInfo.sales_price_1);
//			$("#ssales_price_2").val(result.searchInfo.sales_price_2);
//			$("#sestim_valid_d").val(result.searchInfo.estim_valid_d);
			
			$("#estList").children().remove();
			$.each(result.list,function(i,data){
				//console.log(data);
				$("#estList").append("" +	
				 "<tr>"+
//					"<th><input type='checkbox' value="+data.estim_id+"></th>"+
					"<td style='text-align: left; padding-left:5px;'>"+
					"<a style='text-decoration: none;' href=javascript:estDetail('"+data.estim_id+"');>"+
						data.estim_nm+"</a></td>"+
					"<td>"+data.cust_nm+"</td>"+
					"<td>"+data.estim_lev_cd_nm+"</td>"+
					"<td style='text-align: right;padding-right:5px;'>"+data.estim_qty+"</td>"+
					"<td style='text-align: right;padding-right:5px;'>"+comma(data.sales_price)+"</td>"+
					"<td  style='text-align: center;'>"+data.estim_valid_d+"</td>"+
					"<td>"+data.fin_mdfy_id+"</td>"+
					"<td  style='text-align: center;'>"+data.fin_mdfy_dt+"</td>"+
				"</tr>"
				);
			});
//			if(result.list.length < 10){
//				for(var i=0 ;  i < 10-result.list.length ; i++){
//					$("#estList").append("" +
//							 "<td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//								"<td></td>"+
//							"</tr>");
//			   }
//			}
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
//			var page = '';
//			page = "<input type='hidden' id='endPageNum' value="+result.page.endPageNum+">"+
//				   "<input type='hidden' id='ccPageNum' value="+result.ccPageNum+">";
//			if (result.ccPageNum == result.page.startPageNum  && result.ccPageNum != result.page.endPageNum) {
//				page += "<a id='pNum'> ◀ </a>" +
//				"<input type='text' id='ccPageInput' size='1px' value="+result.page.startPageNum+" onkeypress=\"estPageInput(event);\"> "+ "<a> / </a> " +
//				"<a href=javascript:list("+result.page.endPageNum+"); id='pNum' >"+result.page.endPageNum+"</a>"+ 
//				"<a href=javascript:list("+(parseInt(result.ccPageNum)+parseInt(1))+"); id='pNum'> ▶ </a>";
//			}else if (result.ccPageNum == result.page.endPageNum) {
//				page += "<a href=javascript:list("+(result.ccPageNum-1)+"); id='pNum' > ◀ </a>"+
//				"<input type='text' id='ccPageInput' size='1px' value="+result.page.endPageNum+" onkeypress=\"estPageInput(event);\">"+ "<a> / </a> " +
//				"<a  href=javascript:list("+result.page.endPageNum+"); id='pNum'>"+result.page.endPageNum+"</a>"+ 
//				"<a id='pNum'> ▶ </a>";
//			}else {
//				page += "<a href=javascript:list("+(result.ccPageNum-1)+"); id='pNum' > ◀ </a>"+
//				"<input type='text' id='ccPageInput' size='1px' value="+result.ccPageNum+" onkeypress=\"estPageInput(event);\"> "+ "<a> / </a> " +
//				"<a href=javascript:list("+result.page.endPageNum+"); id='pNum'>"+result.page.endPageNum+"</a>"+ 
//				"<a href=javascript:list("+(parseInt(result.ccPageNum)+parseInt(1))+"); id='pNum'> ▶ </a>";
//			}
//			$("#pageSpace").append(page);
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
		prevPage.attr("href","javascript:list("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:list("+i+")");
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
		nextPage.attr("href","javascript:list("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
}
//검샏조건 추가
function addForm(){
	if(count == 0){
		$("#search_div2").show();
		count++;
	}else if(count == 1){
		$("#search_div3").show();
		count++;
	}else if(count >= 2){
		alert("검색조건을 더 이상 추가할 수 없습니다.");
		count = 2;
	}else{
		count = 0;
	}
}

//검샏조건 제거
function delForm(message){
	console.log(count);
	console.log(message);
	console.log($("#"+message+"").parent("div"));
	$("#"+message+"").parent("div").find("input:text").val("");
	$("#"+message+"").parent("div").find("select").index(0);
	$("#"+message+"").parent("div").hide();
	console.log(count);
	count--;
}
//조회 버튼 클릭에 대한 검색어 입력 여부 확인
function searchBtn(page){
	var estim_nm = $("#sestim_nm").val();
	var cust_id = $("#cust_id").val();
	var estim_lev_cd = $("#sestim_lev_cd").val();
	var sales_price_1 =  $("#ssales_price_1").val();
	var sales_price_2 =  $("#ssales_price_2").val();
	var estim_valid_d = $("#sestim_valid_d").val();
	if(estim_nm == '' && cust_id == '' && estim_lev_cd == '' && sales_price_1 == '' && sales_price_2 == '' && estim_valid_d ==''){
		alert("첫번째 검색조건을 입력하세요");
		$("#sestim_nm").focus();
		return;
	}else{
		list(page);
	}
}
//견적 삭제
function estimDeleteBtn(ctx){
	var estimDeleteIdList=[];
	$('#estimDeleteBtn').click( function(){
		if($('#estList input[type=checkbox]:checked').length==0){
			alert("삭제할 견적을 선택해 주세요.");
			return;
		}else{
		if(confirm("삭제 하시겠습니까?")){
			$('#estList input[type=checkbox]:checked').each(function(){
				estimDeleteIdList.push($(this).val());
			});
			
			$.ajax({
				url : ctx+'/estDelete',
				type : 'get',
				datatype : 'json',
				data : { estimDeleteIdList : estimDeleteIdList},
				success : function(result){
					alert(result+'건의 견적이 삭제되었습니다.');
					list($('#ccPageNum').val());
				},
				error:function(request){
					alert("error : " + request);
				}
			});
		}else{
			return;
		  }
		}
	});
}

//견적 상세정보 출력
function estDetail(estim_id){
	$("#estim_id").val(estim_id);
	$("#estim_detail").attr({
		"action":"estDetail",
		"method":"get"
	})
	$("#estim_detail").submit();
}
function startCalendar(ctx){
	 $("#sestim_valid_d").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
	    
	    $("#sestim_valid_d1").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
	    
	    $("#sestim_valid_d2").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
}
//컴마 입력 함수
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}


/**
 * 삭제 페이지 관리 해주는 부분. 
 */
function estDelList()
{
	var ctx = $('#ctx').val();
	
	location.href = ctx + '/delEstInqr';
}

function delEstDetail(estim_id)
{
	var ctx = $('#ctx').val();
	
	location.href = ctx + '/delEstDetail?estim_id=' + estim_id;
}