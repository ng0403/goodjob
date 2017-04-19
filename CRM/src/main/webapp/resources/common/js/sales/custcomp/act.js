$(function(){
	var ctx = $('#ctx').val();
	activeCancel();
	actButton(ctx);
	startDatePicker(ctx);
});

//영업기회 팝업창 띄우기
function ccOpptListPop(ctx){
//	window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val(),'ccOpptListPopwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	window.open(ctx+'/custEstActOpptList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}


function inputOpptNm(sales_oppt_id,sales_oppt_nm){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
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

//영업활동 추가 함수
//function ccActAdd() {
//	var sales_actvy_id = $('#sales_actvy_id').val();
//	var sales_actvy_nm = $('#sales_actvy_nm').val();
//	var sales_actvy_div_cd = $('#sales_actvy_div_nm').val();
//	var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
//	var sales_oppt_id = $('#sales_oppt_id').val();
//	var cust_id = $('#cust_id').val();
//	var sales_actvy_stat_cd = $('#sales_actvy_stat_nm').val();
//	var strt_d = $('#strt_d').val();
//	var strt_t_h = $('#strt_t_h').val();
//	var strt_t_m = $('#strt_t_m').val();
//	var strt_t = strt_t_h+":"+strt_t_m; 
//	var end_d = $('#end_d').val(); 
//	var end_t_h = $('#end_t_h').val();
//	var end_t_m = $('#end_t_m').val();
//	var end_t = end_t_h+":"+end_t_m; 
//	var memo = $('#memo').val();
//	var sales_oppt_nm = $('#sales_oppt_nm').val();
//	
//	console.log(cust_id);
//	
//	if(sales_actvy_nm==""||sales_actvy_nm==null){
//		alert("영업활동명을 입력해 주세요");
//		return false;
//	}else if(strt_d==""|strt_d==null){
//		alert("시작일자를 선택해 주세요");
//		return false;
//	}else if(strt_t_h=="0"|| strt_t_h==null){
//		alert("시작일자 시를 선택해 주세요");
//		return false;
//	}else if(strt_t_m=="0"|| strt_t_m==null){
//		alert("시작일자 분을 선택해 주세요");
//		return false;
//	}else if(end_d==""||end_d==null){
//		alert("종료일자를 선택해 주세요");
//		return false;
//	}else if(end_t_h=="0"|| end_t_h==null){
//		alert("종료일자 시를 선택해 주세요");
//		return false;
//	}else if(end_t_m=="0"|| end_t_m==null){
//		alert("종료일자 분을 선택해 주세요");
//		return false;
//	}
//	else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
//		alert("활동유형을 선택해 주세요");
//		return false;
//	}
//	else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
//		alert("상태를 선택해 주세요");
//		return false;
//	}       
//	$.ajax({
//		type : 'post',
//		data : {
//			sales_actvy_nm : sales_actvy_nm,
//			sales_actvy_div_cd : sales_actvy_div_cd,
//			sales_actvy_type_cd : sales_actvy_type_cd,
//			sales_oppt_id : sales_oppt_id,
//			cust_id : cust_id,
//			sales_actvy_stat_cd : sales_actvy_stat_cd,
//			strt_d : strt_d,
//			strt_t : strt_t,
//			end_d : end_d,
//			end_t : end_t,
//			memo : memo,
//			sales_oppt_nm : sales_oppt_nm
//		},
//		datatype : 'json',
//		url : '/custActiveAdd',
//		success:function(result){
//			alert("정상적으로 등록되었습니다.");
//			alert(sales_actvy_div_cd);
//			//var estim_id=$("#estim_id", opener.document).val();
//			//console.log(estim_id);
//			window.opener.actList(cust_id);
//			self.close();
//		},
//		error:function(request){
//			alert("error : " +request.status);
//		}
//	});
//}

//영업활동 추가
function activeAdd(ctx){
		var sales_actvy_nm = $('#sales_actvy_nm').val();
		var sales_actvy_div_cd = $('input[name=sales_actvy_div_cd]:checked').val();
		var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
		var sales_oppt_id = $('#sales_oppt_id').val();
		var cust_id = $('#cust_id').val();
		var sales_actvy_stat_cd = $('#sales_actvy_stat_cd').val();
		var strt_d = $('#strt_d').val();
		var strt_t_h = $('#strt_t_h').val();
		var strt_t_m = $('#strt_t_m').val();
		var strt_t = strt_t_h+":"+strt_t_m; 
		var end_d = $('#end_d').val(); 
		var end_t_h = $('#end_t_h').val();
		var end_t_m = $('#end_t_m').val();
		var end_t = end_t_h+":"+end_t_m; 
		var memo = $('#memo').val();
		var sales_oppt_nm = $('#sales_oppt_nm').val();

		if(sales_actvy_nm==""||sales_actvy_nm==null){
			alert("영업활동명을 입력해 주세요");
			return false;
		}else if(sales_actvy_div_cd==""|| sales_actvy_div_cd ==null){
			alert("영업활동구분을 선택해 주세요");
			return false;
		}else if(strt_d==""|strt_d==null){
			alert("시작일자를 선택해 주세요");
			return false;
		}else if(strt_t_h=="0"|| strt_t_h==null){
			alert("시작일자 시를 선택해 주세요");
			return false;
		}else if(strt_t_m=="0"|| strt_t_m==null){
			alert("시작일자 분을 선택해 주세요");
			return false;
		}else if(end_d==""||end_d==null){
			alert("종료일자를 선택해 주세요");
			return false;
		}else if(end_t_h=="0"|| end_t_h==null){
			alert("종료일자 시를 선택해 주세요");
			return false;
		}else if(end_t_m=="0"|| end_t_m==null){
			alert("종료일자 분을 선택해 주세요");
			return false;
		}else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
			alert("활동유형을 선택해 주세요");
			return false;
		}else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
			alert("상태를 선택해 주세요");
			return false;
		}       
		$.ajax({
			type : 'post',
			data : {
				sales_actvy_nm : sales_actvy_nm,
				sales_actvy_div_cd : sales_actvy_div_cd,
				sales_actvy_type_cd : sales_actvy_type_cd,
				sales_oppt_id : sales_oppt_id,
				cust_id : cust_id,
				sales_actvy_stat_cd : sales_actvy_stat_cd,
				strt_d : strt_d,
				strt_t : strt_t,
				end_d : end_d,
				end_t : end_t,
				memo : memo,
				sales_oppt_nm : sales_oppt_nm
			},
			datatype : 'json',
			url : ctx+'/opptActiveAdd',
			success:function(result){
				alert("정상적으로 등록되었습니다.");
				window.opener.actList(cust_id);
				self.close();
			},
			error:function(request){
				alert("error : " +request.status);
			}
		});
}
	
	
	
//	var ctx = $("#ctx").val();
//	var pageNum = $('#pageNum').val();
//	var sales_actvy_nm = $('#sales_actvy_nm').val();
//	var sales_actvy_div_cd = $('#sales_actvy_div_cd').val();
//	var sales_actvy_type_cd = $('#sales_actvy_type_nm').val();
//	var sales_oppt_id = $('#sales_oppt_id').val();
//	var cust_id = $('#cust_id').val();
//	var sales_actvy_stat_cd = $('#sales_actvy_stat_nm').val();
//	var strt_d = $('#strt_d').val();
//	var strt_t_h = $('#strt_t_h').val();
//	var strt_t_m = $('#strt_t_m').val();
//	var end_d = $('#end_t_h').val();
//	var end_t_h = $('#end_t_h').val();
//	var end_t_m = $('#end_t_m').val();
//	var memo = $('#memo').val();
//	var act_list = [];
//	
//	var obj = {
//			sales_actvy_nm : $('#sales_actvy_nm').val(),
//			sales_actvy_div_cd : $("#sales_actvy_div_cd").val(),
//			sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
//			sales_oppt_id : $('#sales_oppt_id').val(),
//			cust_id : $('#cust_id').val(),
//			sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
//			strt_d : $('#strt_d').val(),
//			strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
//			end_d : $('#end_d').val(),
//			end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
//	        memo : $('#memo').val()
//		}
//			
//	if(obj.sales_actvy_nm==""||obj.sales_actvy_nm==null){
//		alert("영업활동명을 입력해 주세요");
//		return false;
//	}else if(obj.sales_actvy_type_cd=="0"||obj.sales_actvy_type_cd==null){
//		alert("활동유형을 선택해 주세요");
//		return false;
//	}else if(obj.sales_actvy_stat_cd=="0"||obj.sales_actvy_stat_cd==null){
//		alert("상태를 선택해 주세요");
//		return false;
//	}else if(obj.strt_d==""||obj.strt_d==null){
//		alert("시작일자를 선택해 주세요");
//		return false;
//	}else if(strt_t_h=="0"|| strt_t_h==null){
//		alert("시를 선택해 주세요");
//		return false;
//	}else if(strt_t_m=="0"|| strt_t_m==null){
//		alert("분을 선택해 주세요");
//		return false;
//	}else if(obj.end_d==""||obj.end_d==null){
//		alert("종료일자를 선택해 주세요");
//		return false;
//	}else if(end_t_h=="0"|| end_t_h==null){
//		alert("시를 선택해 주세요");
//		return false;
//	}else if(end_t_m=="0"|| end_t_m==null){
//		alert("분을 선택해 주세요");
//		return false;
//	}
//	
//    var jsonData = JSON.stringify(obj);		//JSON Object 생성
//    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
//	
//    var cust_nm = $("#cust_nm").val();
//    
//    var $form = $("<form>");
//    $form.attr({
//    	"action" : "/custActAdd",
//    	"method" : "post",
//    	"id" : "custActAdd"
//    })    
//    
//    var $cust_id = $("<input>");
//    $cust_id.attr({
//    	"type" : "hidden",
//    	"name" : "cust_id",
//    	"value" : cust_id
//    })
//    
//    var $sales_oppt_id = $("<input>");
//    $sales_oppt_id.attr({
//    	"type" : "hidden",
//    	"name" : "sales_oppt_id",
//    	"value" : sales_oppt_id
//    })
//    
//    var $sales_actvy_type_cd = $("<input>");
//    $sales_actvy_type_cd.attr({
//    	"type" : "hidden",
//    	"name" : "sales_actvy_type_cd",
//    	"value" : sales_actvy_type_cd
//    })
//    
//    var $sales_actvy_nm = $("<input>");
//    $sales_actvy_nm.attr({
//    	"type" : "hidden",
//    	"name" : "sales_actvy_nm",
//    	"value" : sales_actvy_nm
//    })
//    
//    var $sales_actvy_div_cd = $("<input>");
//    $sales_actvy_div_cd.attr({
//    	"type" : "hidden",
//    	"name" : "sales_actvy_div_cd",
//    	"value" : sales_actvy_div_cd
//    })
//    
//    var $sales_actvy_stat_cd = $("<input>");
//    $sales_actvy_stat_cd.attr({
//    	"type" : "hidden",
//    	"name" : "sales_actvy_stat_cd",
//    	"value" : sales_actvy_stat_cd
//    })
//    
//    var $strt_d = $("<input>");
//    $strt_d.attr({
//    	"type" : "hidden",
//    	"name" : "strt_d",
//    	"value" : strt_d
//    })
//    
//    var $strt_t_h = $("<input>");
//    $strt_t_h.attr({
//    	"type" : "hidden",
//    	"name" : "strt_t_h",
//    	"value" : strt_t_h
//    })
//    
//    var $strt_t_m = $("<input>");
//    $strt_t_m.attr({
//    	"type" : "hidden",
//    	"name" : "strt_t_m",
//    	"value" : strt_t_m
//    })
//    
//    var $end_d = $("<input>");
//    $end_d.attr({
//    	"type" : "hidden",
//    	"name" : "end_d",
//    	"value" : end_d
//    })
//    
//    var $end_t_h = $("<input>");
//    $end_t_h.attr({
//    	"type" : "hidden",
//    	"name" : "end_t_h",
//    	"value" : end_t_h
//    })
//    
//    var $end_t_m = $("<input>");
//    $end_t_m.attr({
//    	"type" : "hidden",
//    	"name" : "end_t_m",
//    	"value" : end_t_m
//    })
//    
//    var $memo = $("<input>");
//    $memo.attr({
//    	"type" : "hidden",
//    	"name" : "memo",
//    	"value" : memo
//    })
//    
//    var $act_list = $("<input>");
//    $act_list.attr({
//    	"type" : "hidden",
//    	"name" : "act_list",
//    	"id" : "act_list",
//    	"value" : act_list
//    })
//    
//    $form.append($cust_id).append($sales_oppt_id).append($sales_actvy_type_cd).append($sales_actvy_nm).append($sales_actvy_div_cd).append($sales_actvy_stat_cd).append($strt_d).append($strt_t_h).append($strt_t_m).append($end_d).append($end_t_h).append($end_t_m).append($memo).append($act_list);
//
//	$("body").append($form);
//	$form.submit();
    


    
//	$.ajax({
//		type : 'GET',
//		url : ctx+'/custActAdd',
//		data : jsonData,	
//		contentType : 'application/json; charset=UTF-8',
//		dataType : "json",
//		success : function(data) {
//	      alert(cust_nm +"에 대한 새로운 영업 활동이 등록 되었습니다.");
//	      actListRefresh(obj.cust_id);
//		url : ctx+'/custActAdd',
//		dataType : 'json',
//		data : {
//			cust_id : cust_id,
//			sales_oppt_id : sales_oppt_id,
//			sales_actvy_stat_cd : sales_actvy_stat_nm,
//			sales_actvy_type_cd : sales_actvy_type_nm,
//			sales_actvy_div_cd : sales_actvy_div_cd,
//			strt_d : strt_d,
//			strt_t : strt_t_h + strt_t_m,
//			end_d : end_d,
//			end_t : end_t_h + end_t_m,
//			memo : memo,
//			act_list : act_list
//		},
//		success:function(){
//			alert("정상적으로 등록되었습니다.");
//			window.opener.actList(cust_id);
//		},
//		error : function(request,status,error) {
//	          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//	      }
//	});
//}

//영업활동명 클릭 시 detail값 가져오는 함수
function custActiveDetail(){
//	$('#activeButton').val('수정');
//	var strt_t = $("#strt_t").val();
//	var end_t = $("#end_t").val();
//	$('#strt_t_h').val(strt_t.substring(0,2)).prop("selected",true);
//	$('#strt_t_m').val(strt_t.substring(3,5)).prop("selected",true);
//	$('#end_t_h').val(end_t.substring(0,2)).prop("selected",true);
//	$('#end_t_m').val(end_t.substring(3,5)).prop("selected",true);
	
	var sales_actvy_id = $('#sales_actvy_id').val();
	$.ajax({
		type : 'get',
		datatype : 'json',
		url : 'opptActiveDetail',
		data : {actvyId : actvyId},
		success:function(result){
				$('#flg').val(result.flg);
				if(result.flg=='detail'){
					$('#activeButton').val('수정');
				}
				var sales_actvy_div_cd = result.detail.sales_actvy_div_cd;
				var sales_actvy_type_cd = result.detail.sales_actvy_type_cd;
				var sales_actvy_stat_cd = result.detail.sales_actvy_stat_cd;
				var strt_t = result.detail.strt_t;
				var end_t = result.detail.end_t;
				var strt_d = result.detail.strt_d;
				var end_d = result.detail.end_d;
				$('#strt_d').val(strt_d);
				$('#end_d').val(end_d);
				$('#memo').val(result.detail.memo);
				
				$('input[name=sales_actvy_div_cd]').each(function(){
					var v =$(this).val();
					if(v==sales_actvy_div_cd){
						$(this).attr("checked",true);
					}
				});
				$('#cust_id').val(result.cust_id);
				$('#cust_nm').val(result.cust_nm);
				$('#sales_oppt_id').val(result.sales_oppt_id);
				$('#sales_actvy_nm').val(result.detail.sales_actvy_nm);
				
				$('#sales_actvy_type_cd').children().eq(sales_actvy_type_cd).attr("selected",true);
				$('#sales_actvy_stat_cd').children().eq(sales_actvy_stat_cd).attr("selected",true);
				$('#strt_t_h').children().eq(strt_t.substring(0,2)).attr("selected",true);
				$('#strt_t_m').children().eq(parseInt(strt_t.substring(3,4))+parseInt(1)).attr("selected",true);
				$('#end_t_h').children().eq(end_t.substring(0,2)).attr("selected",true);
				$('#end_t_m').children().eq(parseInt(end_t.substring(3,4))+parseInt(1)).attr("selected",true);
		},
		error:function(request){
			alert("error : " + request);
		}
	});
	
}

//영업활동 수정
//function ccActMdfy(){
//	$(document).ready(function() {
//		var ctx = $("#ctx").val();
// 		var obj = {
//				sales_actvy_id : $("#sales_actvy_id").val(),
//				sales_actvy_nm : $('#sales_actvy_nm').val(),
//				sales_actvy_div_cd : $("#sales_actvy_div_cd").val(),
//				sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
//				sales_oppt_id : $('#sales_oppt_id').val(),
//				sales_oppt_nm : $('#sales_oppt_nm').val(),
//				cust_id : $('#cust_id').val(),
//				sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
//				strt_d : $('#strt_d').val(),
//				strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
//				end_d : $('#end_d').val(),
//				end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
//		        memo : $('#memo').val()
//			}
//	    var jsonData = JSON.stringify(obj);		//JSON Object 생성
//	    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
//	    var cust_nm = $("#cust_nm").val();
//		$.ajax({
//			type : 'POST',
//			url : ctx+'/custActiveUpdate',
//			data : jsonData,
//			contentType : 'application/json; charset=UTF-8',
//			dataType : "json",
//			success : function(data) {
//				alert(cust_nm +"에 대한 영업 활동이 수정 되었습니다.");
//				actListRefresh(obj.cust_id);
//			},
//			error : function(request,status,error) {
//		          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//		      }
//	});
//});
//}

//영업활동 편집
function activeUpdate(ctx){
	alert("hihihi");
	var sales_actvy_id = $('#sales_actvy_id').val();
	var sales_actvy_nm = $('#sales_actvy_nm').val();
	var sales_actvy_div_cd = $('input[name=sales_actvy_div_cd]:checked').val();
	var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
	var sales_oppt_id = $('#sales_oppt_id').val();
	var cust_id = $('#cust_id').val();
	var sales_actvy_stat_cd = $('#sales_actvy_stat_cd').val();
	var strt_d = $('#strt_d').val();
	var strt_t_h = $('#strt_t_h').val();
	var strt_t_m = $('#strt_t_m').val();
	var strt_t = strt_t_h+":"+strt_t_m; 
	var end_d = $('#end_d').val(); 
	var end_t_h = $('#end_t_h').val();
	var end_t_m = $('#end_t_m').val();
	var end_t = end_t_h+":"+end_t_m; 
	var memo = $('#memo').val();
	var sales_oppt_nm = $('#sales_oppt_nm').val();

	if(sales_actvy_nm==""||sales_actvy_nm==null){
		alert("영업활동명을 입력해 주세요");
		return false;
	}else if(sales_actvy_div_cd==""|| sales_actvy_div_cd ==null){
		alert("영업활동구분을 선택해 주세요");
		return false;
	}else if(strt_d==""|strt_d==null){
		alert("시작일자를 선택해 주세요");
		return false;
	}else if(strt_t_h=="0"|| strt_t_h==null){
		alert("시작일자 시를 선택해 주세요");
		return false;
	}else if(strt_t_m=="0"|| strt_t_m==null){
		alert("시작일자 분을 선택해 주세요");
		return false;
	}else if(end_d==""||end_d==null){
		alert("종료일자를 선택해 주세요");
		return false;
	}else if(end_t_h=="0"|| end_t_h==null){
		alert("종료일자 시를 선택해 주세요");
		return false;
	}else if(end_t_m=="0"|| end_t_m==null){
		alert("종료일자 분을 선택해 주세요");
		return false;
	}else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
		alert("활동유형을 선택해 주세요");
		return false;
	}else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
		alert("상태를 선택해 주세요");
		return false;
	}
		       
	$.ajax({
		type : 'post',
		data : {
			sales_actvy_id : sales_actvy_id,
			sales_actvy_nm : sales_actvy_nm,
			sales_actvy_div_cd : sales_actvy_div_cd,
			sales_actvy_type_cd : sales_actvy_type_cd,
			sales_oppt_id : sales_oppt_id,
			cust_id : cust_id,
			sales_actvy_stat_cd : sales_actvy_stat_cd,
			strt_d : strt_d,
			strt_t : strt_t,
			end_d : end_d,
			end_t : end_t,
			memo : memo,
			sales_oppt_nm : sales_oppt_nm
		},
		datatype : 'json',
		url : ctx+'/opptActiveUpdate',
		success:function(result){
			alert("정상적으로 수정 되었습니다.");
			window.opener.actList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
	
}

//function ccActClose(){
//	var chk = confirm("정말 취소 하시겠습니까?");
//	if(chk){
//		self.close();
//	}else{
//		return;
//	}
//}
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