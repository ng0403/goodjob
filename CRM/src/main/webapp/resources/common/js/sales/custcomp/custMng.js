/**
 * 함수 목록
 * activeAdd(ctx)					:	영업활동 추가
 * activeUpdate(ctx)				:	영업활동 편집
 * activeCancel()					:	영업활동 취소 버튼
 * actButton(ctx)					:	영업활동 저장(수정) 버튼 클릭 시
 * custActiveDetail()				:	영업활동명 클릭 시 detail값 가져오기
 * startDatePicker(ctx)				:	달력 표시
 * startDatePicker()				:	영업활동 사용되는 달력 버튼
 * dateFormat(timestamp)			:	date 포맷 변경
 */

$(function(){
	var ctx = $('#ctx').val();
	activeCancel();
	CustCompMngButton(ctx);
	startDatePicker(ctx);
	iuserListPopup(ctx);	//직원 검색 버튼 (사용)
});


////////////////////////////////////////////////////////////////////////////////////////
//영업기회 상세정보 고객 리스트 팝업 (고객 버튼클릭 시)
function iuserListPopup(ctx){
	$('#Manager').click(function(){
		window.open(ctx+'/custCompIuserList','newwindow2','width=760, height=360, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//직원팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function inputiuserNm(iuserId,iuserNm,iuserType, iuserCellPh, iuserEmail){	
	if(iuserType == 'search'){
		$('#siuser_nm').val(iuserNm);
		$('#siuser_id').val(iuserId);
	}else if(iuserType == 'normal'){
		$('#iuser_nm').val(iuserNm);
		$('#iuser_id').val(iuserId);
		$('#cell_ph').val(iuserCellPh);
		$('#email').val(iuserEmail);
	}
}

//고객사 담당사원  popup 저장(수정) 버튼 클릭 시
function CustCompMngButton(ctx){
	$('#ccMngButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add'){
			alert("flag : " + flg);
			ccMngAdd(ctx);
		}else if(flg=='detail'){
			alert("flag : " + flg);
			ccMngUpdate(ctx);
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////
//영업기회 팝업창 띄우기
function ccOpptListPop(ctx){
//	window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val(),'ccOpptListPopwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	window.open(ctx+'/custEstActOpptList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업활동 추가 시 고객사명 보이기
function inputOpptNm(sales_oppt_id,sales_oppt_nm){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
}

//영업활동탭에서 영업기회 추가 시 영업기회명 보이기
function inputOpptNm(opptNm,opptId){
	alert("inputOpptNm: "+opptId+','+opptNm);
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
			alert("flag : " + flg);
			activeAdd(ctx);
		}else if(flg=='detail'){
			alert("flag : " + flg);
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
//고객사 담당사원 리스트 조회
//function pocList(custId){
//	$("#pocTableTbody").children().remove();	
//	$.ajax({  
//		type : 'GET',
//		url : 'ccMngList',
//		data : {custId : custId},
//		dataType : 'json', 
//		success:function(result){
//			var content = "";
//			if(result.ccMngList.length==0){
//				content = "<tr style='height: 150px;'><td colspan='10'>등록된 고객사 담당사원이 없습니다.</td></tr>";	
//			}
//			else{
//			$.each(result.ccMngList,function(i,data){
//				content +="<tr>"+
//				"<th><input type='checkbox' value="+data.iuser_id+" name='iuser_id'></th>"+ 
//				"<td>"+data.cust_nm+"</td>"+
//				"<td style='text-align: left; padding-left: 5px;'>" +
//				"<a style='text-decoration: none;'>"+data.iuser_nm+"</a></td>"+
//				"<td>"+data.key_part+"</td>"+
//				"<td>"+data.fst_reg_id+"</td>"+
//				"<td>"+data.fin_reg_dt+"</td>"+
//				"</tr>"
//			});
//			
//			if(result.ccMngList.length < 5){
//				for(var j = 0; j < 5-result.ccMngList.length; j++){
//					content += "<th></th>"+ 
//					"<td></td>"+
//					"<td></td>"+
//					"<td></td>"+
//					"<td></td>"+
//					"<td></td>"+
//					"</tr>";
//					
//					}
//				}
//			}	
//			$("#pocTableTbody").append(content);
//		},
//		error:function(request){
//			alert("error : " + request.status);
//		}
//	});
//}
//고객사 담당사원 추가
function ccMngAdd(ctx){
		var iuser_nm = $('#iuser_nm').val();
		var iuser_id = $('#iuser_id').val();
		var cust_id = $('#cust_id').val();
		var cust_nm = $('#cust_nm').val();
		var key_part = $('#key_part').val();
		

		if(cust_nm==""||cust_nm==null){
			alert("고객사를 입력해 주세요");
			return false;
		}else if(iuser_nm==""|| iuser_nm ==null){
			alert("담당직원을 입력해 주세요");
			return false;
		}       
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
				alert("정상적으로 등록되었습니다.");
				window.opener.pocList(cust_id);
				self.close();
			},
			error:function(request){
				alert("error : " +request.status);
			}
		});
}
	




//영업활동 편집
function ccMngUpdate(ctx){
	var iuser_nm = $('#iuser_nm').val();
	var iuser_id = $('#iuser_id').val();
	var cust_id = $('#cust_id').val();
	var cust_nm = $('#cust_nm').val();
	var key_part = $('#key_part').val();
	

	if(cust_nm==""||cust_nm==null){
		alert("고객사를 입력해 주세요");
		return false;
	}else if(iuser_nm==""|| iuser_nm ==null){
		alert("담당직원을 입력해 주세요");
		return false;
	}
		       
	$.ajax({
		type : 'post',
		data : {
			iuser_id : iuser_id,
			cust_id : cust_id,
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
