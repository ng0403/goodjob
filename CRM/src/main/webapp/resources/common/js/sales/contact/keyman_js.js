/**
 * 키맨추가 관련 js파일
 */
function keymanListRefresh() {
 	window.opener.keymanList();
	self.close();
}
function keymancancle(){
	var a = confirm("취소하시겠습니까?");
	if(a){
		self.close();
	}else
		{
		
		}
}

function keymanAdd() {
	$(document).ready(function() {
 	var cont_id = $("#cont_id").val();
 	var ctx = $("#ctx").val();
 	var keymanData = {"cust_id": $("#cust_id").val(), "cont_id": cont_id, "key_part": $("#key_part").val(),
 					  "key_pos": $("#key_pos").val(), "key_job" : $("#key_job").val(), "memo":$("#memo").val()
 			};
	
		$.ajax({
			url : ctx+'/addKeyman',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.addResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					alert("keyman.js_ keymanAdd");
					location.href = ctx + '/';
				} else {
					alert(data.addResult);
					keymanListRefresh();
				}
			}, error : function(data){
				alert(data.addResult);
			}
		});
	});
}

function keymanMdfy(a) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		 
		var keymanData = { "cust_id": a, "key_part": $("#key_part").val(), "key_pos": $("#key_pos").val()
				,  "memo":$("#memo").val()};
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/mdfyKeyman',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.mdfyResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					alert("keyman.js_ keymanMdfy");
					location.href = ctx + '/';
				} else {
					alert(data.mdfyResult);
					keymanListRefresh();
				}
			}, error : function(data){
				alert(data.mdfyResult);
			}
		});
	});
}

//전체 체크 해제
function kmchkCancel() {
	$(document).ready(function() {
		$("#keymanListCheck").prop("checked", false);
	});
}

$(document).ready(function() {
	// 기업고객 리스트 체크박스 선택, 해제
	$("#keymanListCheck").click(function(){
		// 만약 전체 선택 체크박스가 체크된 상태일 경우
		if($("#keymanListCheck").prop("checked")){
			// 해당화면 전체 checkbox들을 체크해준다.
			$("input[id=kmChkbox]").prop("checked", true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			// 해당화면에 모든 checkbox들의 체크를 해제시킨다.
			$("input[id=kmChkbox]").prop("checked", false);
		}
	});
});



//영업기회 상세정보 고객 리스트 팝업
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/opptCustcompList','newwindow1','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//키맨 상세정보 고객 리스트 팝업
function keymanListPopup(){
	$('#customer').click(function(){
		var cont_id = $("#cont_id",opener.document).val();
 		window.open('/keymancompList?cont_id='+cont_id,'newwindow1','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}



function inputCustNm(cust_id,cust_nm){
	
	$('#cust_id').val(cust_id);
	$('#cust_nm').val(cust_nm);
	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}

function inputKeyNm(cust_id){
 	$('#cust_id').val(cust_id);
 	alert("inputKeyNm " + cust_id);
 	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}


//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function custNmSelect(cust_id, cust_nm){
	window.opener.inputCustNm(cust_id,cust_nm);
	self.close();
}



//영업기회 추가 함수
function ccOpptAddcontact() {
	var sales_oppt_id = $("#salesId").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var lead_id = $("#lead_id").val();
	var memo = $("#memo").val();

	$.ajax({
		type : 'post',
		url : 'opptAddcontact',
		data : {
			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			sales_lev_cd : sales_lev_cd,
			expt_sales_amt : expt_sales_amt,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			cust_id : cust_id,
 			memo : memo
		},
		datatype : 'json',
		success : function(result) {
			alert("새로운 영업기회가 등록 되었습니다.");
			opptListRefresh(cust_id);
		},
		error : function(request) {
			alert("error : " + request.status);
		}

	});

}

 
//영업활동 삭제
function opptActiveDeletecontact() {
	var chked_val = [];
	$(":checkbox[id='chk_act_id']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#cust_id").val();
 		$.ajax({
			url : ctx+'/opptActiveDeletecontact',
			type : 'POST',
			data :  JSON.stringify(chked_val),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				if(data.deleteResult == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				} else {
					alert(data.deleteResult);
					actListcontact(cont_id);
				}
			},
			error : function(data){
				alert(data.deleteResult);
				history.back();
			}
		});
	} else {
		return;
	}
}
