/**
 * 함수 목록
 * activeAdd(ctx)											:	영업활동 추가
 * activeUpdate(ctx)										:	영업활동 편집
 * activeCancel()											:	영업활동 취소 버튼
 * actButton(ctx)											:	영업활동 저장(수정) 버튼 클릭 시
 * custActiveDetail()										:	영업활동명 클릭 시 detail값 가져오기
 * startDatePicker(ctx)										:	달력 표시
 * startDatePicker()										:	영업활동 사용되는 달력 버튼
 * dateFormat(timestamp)									:	date 포맷 변경
 * 
 * ccMngDetail(cust_id, iuser_id, org_nm, iuser_nm)			: 담당사원 상세보기(리스트에서 사원명 클릭 시)
 * posAddBtn()												: 담당사원 등록버튼 클릭 시 
 * mdfyClick()												: 담당사원 편집버튼 클릭 시
 * 
 * 
 * 
 */

$(function(){
	var ctx = $('#ctx').val();
	var page = $("#ccPageNum").val();
	activeCancel();
	CustCompMngButton(ctx);
	startDatePicker(ctx);
	iuserListPopup(ctx);	//직원 검색 버튼 (사용)
//	pocList(cust_id);
	compNmSelect(ctx);
});

//담당자 상세보기(리스트에서 사원명 클릭 시)
function ccMngDetail(cust_id, iuser_id, org_nm, iuser_nm) {
		
		 var cust_nm = $("#cust_nm").val();
		 var key_part = $("#key_part").val();
		 var cell_ph1 = $("#cell_ph1").val();
		 var cell_ph2 = $("#cell_ph2").val();
		 var cell_ph3 = $("#cell_ph3").val();
		 var email1 = $("#email1").val();
		 var email2 = $("#email2").val();
		 
		//버튼 활성화
		$("#AddBtnDiv").css("display", "none");
		$("#mdfyBtnDiv").css("display", "block");
		$("#saveBtnDiv").css("display", "none");
 		
		 var ccMngjsonData = {
					"cust_id" : cust_id, "cust_nm" :  cust_nm,
					"iuser_id" : iuser_id, "iuser_nm" : iuser_nm, 
					"org_nm" : org_nm,
					"key_part" : key_part, 
					"cell_ph1" : cell_ph1, "cell_ph2" : cell_ph2, "cell_ph3" : cell_ph3, 
					"email1" : email1, "email2" : email2
				 }
		
		$.ajax({
			url : '/custcompMngDetail',
			data : ccMngjsonData, 		//보낼 데이터값
			dataType : 'json',
			type : "POST", //
			success : function(data) {
				
				$('#cust_id').val(data.cust_id);
				$('#cust_nm').val(data.cust_nm);
  			   
				$('#iuser_id').val(data.iuser_id);  
				$('#iuser_nm').val(data.iuser_nm);  
  			    $('#org_nm').val(data.org_nm);
				$('#key_part').val(data.key_part);
				
				$('#cell_ph').val(data.cell_ph1 + "-" +data.cell_ph2 +"-"+data.cell_ph3);	
				$('#email').val(data.email1 +"@"+data.email2);
				
 			},
 			
			error : function(e) {
				alert("전송 중 오류가 발생했습니다.");
			}
		});
//	});
}

// 담당사원 편집버튼 클릭 시
function mdfyClick(){
		
		$("#tbody1 #key_part").attr({
			readonly:false,
			style:'background-color:white'
		});
		
		$("#saveBtnDiv").css("display", "block");
		$("#mdfyBtnDiv").css("display", "none");
}

// 담당사원 추가 시 고객사 검색
function compListPopup(ctx){

//	$('#comp_list_bt').click(function(){
		var pop_flg='d';
		window.open(ctx+'/custcompCustnmList?pop_flg='+pop_flg,'newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
//	});
}

//고객사명 리스트에서  tr를 클릭했을 때 부모창에 고객사명을 넣어주는 작업
function compNmSelect(ctx){
	$('#custcomp_list_table tbody tr').click(function(){
  		var custcompNm=$(this).find('#cust_nm').text();
		var custcompId=$(this).find('#cust_id').text();

		window.opener.inputCompNm2(custcompNm,custcompId);
		
		self.close();
		
	});
}

function inputCompNm2(custcompNm,custcompId){
	
	$('#cust_nm').val(custcompNm);
	$('#cust_id').val(custcompId);
}


////////////////////////////////////////////////////////////////////////////////////////
//영업기회 상세정보 고객 리스트 팝업 (고객 버튼클릭 시)
function iuserListPopup(ctx){
	$('#Manager').click(function(){
		window.open(ctx+'/custSaleActIuserList','newwindow2','width=770, height=345, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//직원팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function inputiuserNm(iuserId,iuserNm,iuserType, iuserOrgNm, iuserCellPh, iuserEmail){	
	if(iuserType == 'search'){
		$('#siuser_nm').val(iuserNm);
		$('#siuser_id').val(iuserId);
	}else if(iuserType == 'normal'){
		$('#iuser_nm').val(iuserNm);
		$('#iuser_id').val(iuserId);
		$('#org_nm').val(iuserOrgNm);
		$('#cell_ph').val(iuserCellPh);
		$('#email').val(iuserEmail);
	}
}

//고객사 담당사원  popup 저장(수정) 버튼 클릭 시
function CustCompMngButton(ctx){
	$('#ccMngButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add'){
//			alert("flag : " + flg);
			ccMngAdd(ctx);
		}else if(flg=='detail'){
//			alert("flag : " + flg);
			ccMngUpdate(ctx);
		}
	});
}

//담당사원 등록 버튼 클릭 시
function posAddBtn() {
	
	var ctx = $("#ctx").val();
	
	$("#tbody1 #key_part").attr({
		readonly:false,
		style:'background-color:white'
	});

	$("#Manager, #comp_list_bt").attr({
		disabled: false
	});
	
	$("#iuser_nm").val($("#hiuser_nm").val()).attr("readonly", true);
	$("#cust_nm").val($("#hcust_nm").val()).attr("readonly", true);
	$("#cell_ph").val($("#hcell_ph").val()).attr("readonly", true);
	$("#email").val($("#hemail").val()).attr("readonly", true);
	$("#org_nm").val($("#horg_nm").val()).attr("readonly", true);
	$("#key_part").val($("#hkey_part").val()).attr("readonly", false);
	
	//버튼 활성화
	$("#AddBtnDiv").css("display", "block");
	$("#mdfyBtnDiv").css("display", "none");
	$("#saveBtnDiv").css("display", "none");
	
}

//고객사 담당사원 등록
function ccMngAdd(ctx){

	var cust_id  = $('#cust_id').val();
	var cust_nm  = $('#cust_nm').val();
	var iuser_id = $('#iuser_id').val();
	var iuser_nm = $('#iuser_nm').val();
	var org_nm   = $('#org_nm').val();
	var key_part = $('#key_part').val();
		
	$.ajax({
		type : 'post',
		data : {
			iuser_id : iuser_id,
			cust_id : cust_id,
			key_part : key_part
		},
		datatype : 'json',
		url : ctx+'/ccMngAdd',
		success:function(result){
			alert("담당사원이 등록되었습니다.");
			ccMngPocList('1');
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
}

// 담당사원 수정
function mdfySave(ctx) {
	
	var cust_id  = $('#cust_id').val();
	var cust_nm  = $('#cust_nm').val();
	var iuser_id = $('#iuser_id').val();
	var iuser_nm = $('#iuser_nm').val();
	var org_nm   = $('#org_nm').val();
	var key_part = $('#key_part').val();
	
	alert(iuser_id);
	alert(key_part);
		
	$.ajax({
		type : 'post',
		data : {
			iuser_id : iuser_id,
			cust_id  : cust_id,
			key_part : key_part
		},
		datatype : 'json',
		url : ctx+'/ccMngModify',
		success:function(result){
			alert("담당사원이 수정되었습니다.");
			ccMngPocList('1');
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
	
	
}

//all 체크일때 하나라도 체크해지가 된 경우 all checkbox 체크 해제
function chkCancel(){
	$("#custcompSelect").prop("checked", false);
}

//체크박스 개수 검색함수
function checkCount(){
   var count=0;
   var checkList = $('.custMng_check');

   for(var i=0; i<checkList.size(); i++){
      if($(checkList[i]).is(':checked')){
         count++;
      }
   }
   return count;
};

//담당사원 삭제
function custMngDelete() {
	var ctx = $("#ctx").val();
	if($("input[name=custcompMng_del]:checked").length==0){
		alert("삭제할 담당사원을 선택해 주세요.");
		return false;
	}
	if(confirm("삭제 하시겠습니까? \n0데이터가 완전히 삭제됩니다.")){
	var ccMngDelList = [];
	var pageNum = $("#pageNum").val();
	$("input[name=custcompMng_del]:checked").each(function(){
		ccMngDelList.push($(this).val());
		ccMngDelList.push($("#user").val());
	});
	
	$.ajax({
		type : 'get',
		url : 'custMngDelete',
		data : {
			ccMngDelList : ccMngDelList,
				 pageNum : pageNum
			},
		dataType : 'json',
		success : function(result){
			alert("담당사원이 삭제되었습니다.");
			location.href = ctx + "/custcompMng";
		},
		error : function(request){
			alert("error : " + request);
		}
	});
	}
}


////////////////////////////////////////////////////////////////////////////////////////
//영업기회 팝업창 띄우기
function ccOpptListPop(ctx){
//	window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val(),'ccOpptListPopwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	window.open(ctx+'/custEstActOpptList?cust_id='+$('#cust_id').val()+'','newwindow2','width=940, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업활동 추가 시 고객사명 보이기
function inputOpptNm(sales_oppt_id,sales_oppt_nm){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
}

//영업활동탭에서 영업기회 추가 시 영업기회명 보이기
function inputOpptNm(opptNm,opptId){
//	alert("inputOpptNm: "+opptId+','+opptNm);
	$('#sales_oppt_id').val(opptNm);
	$('#sales_oppt_nm').val(opptId);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(sales_oppt_id,sales_oppt_nm){
	window.opener.inputOpptNm(sales_oppt_id,sales_oppt_nm);
	self.close();
}

function actListRefresh(cust_id) {
	window.opener.actList(cust_id);
	self.close();
}

//영업활동 취소 버튼
function activeCancel(){
	$("#activeAdd_cancel").click( function(){
		self.close();
	});
}

//영업활동 popup 저장(수정) 버튼 클릭 시
function actButton(ctx){
	$('#activeButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add'){
			//alert("flag : " + flg);
			activeAdd(ctx);
		}else if(flg=='detail'){
			//alert("flag : " + flg);
			activeUpdate(ctx);
		}
	});
}

//영업활동 pop에서 사용되는 datePicker
function startDatePicker(ctx){
	  $("#strt_d").datepicker({
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
	    /*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
	    $("#end_d").datepicker({
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
	    /*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/

}

	
//영업담당자 수정
function ccMngUpdate(ctx){
	var iuser_nm = $('#iuser_nm').val();
	var iuser_id = $('#iuser_id').val();
	var org_nm = $('#org_nm').val();
	var cust_id = $('#nowCust_id', opener.document).val();
	var cust_nm = $('#cust_nm').val();
	var key_part = $('#key_part').val();
		       
	$.ajax({
		type : 'post',
		data : {
			iuser_id : iuser_id,
			cust_id : cust_id,
			org_nm : org_nm,
			key_part : key_part
		},
		datatype : 'json',
		url : ctx+'/ccMngUpdate',
		success:function(result){
			alert("정상적으로 수정 되었습니다.");
			window.opener.pocList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
	
}

// 담당사원 리스트 ajaxList
function ccMngPocList(page) {
		
	var tbody = $('#pocTableTbody');
	var tbodyContent = "";
	var tabValue = $("#tabValue").val();
	
	$.ajax({
		url : 'custMngAjax',
		type : 'POST',
		data : {ccPageNum :page},
		dataType : "json",
		success : function(data) {
			tbody.children().remove();
			if(data.length == 0){
				tbodyContent = "<tr style='height: 75px;'><td colspan='10' style='width: 1320px; text-align: center;  vertical-align: middle;'>등록된 담당사원이 없습니다.</td></tr>";
				tbody.append(tbodyContent);
			}else{
				
				for (var i = 0; i < data.ccVOList.length; i++) {
					tbodyContent = 
						"<tr>" +
						"<td ><input type='checkbox' value='"+data.ccVOList[i].cust_id+":"+data.ccVOList[i].iuser_id+"' id='pocChkbox'  onclick='pocchkCancel();'></td>" +
						"<td >"+data.ccVOList[i].cust_nm+"</td>" +
						"<td ><a href='#' onclick=\"ccMngDetail('"+data.ccVOList[i].cust_id+"','"+data.ccVOList[i].iuser_id+"','"+data.ccVOList[i].org_nm+"','"+data.ccVOList[i].iuser_nm+"');\"  class='cnClick'>"+data.ccVOList[i].iuser_nm+"</td>" +
						"<td >"+data.ccVOList[i].org_nm+"</td>" +
						"<td >"+data.ccVOList[i].key_part+"</td>" +
						"<td style='text-align: center;'>"+data.ccVOList[i].cell_ph1+"-"+data.ccVOList[i].cell_ph2+"-"+data.ccVOList[i].cell_ph3+"</td>" +
						"<td >"+ data.ccVOList[i].email1 + "@"+ data.ccVOList[i].email2 +"</td>" +
						"</tr>"
						;
					tbody.append(tbodyContent);
					
				}
			}
		},
		error : function() {
			alert("전송중 오류가 발생했습니다.");
		}
	
	});
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
		prevPage.attr("href","javascript:ccMngPocList("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:ccMngPocList("+i+")");
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
		nextPage.attr("href","javascript:ccMngPocList("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
}

// 팝업창 자동 크기조절
function setWindowResize() {
	var Dwidth = parseInt(document.body.scrollWidth);
	var Dheight = parseInt(document.body.scrollHeight);
	var divEl = document.createElement("div");
	divEl.style.position = "absolute";
	divEl.style.left = "0px";
	divEl.style.top = "0px";
	divEl.style.width = "100%";
	divEl.style.height = "100%";
	  
	document.body.appendChild(divEl);
	
	window.resizeBy(Dwidth-divEl.offsetWidth, Dheight-divEl.offsetHeight);
	document.body.removeChild(divEl);
}
