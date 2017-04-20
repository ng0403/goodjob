/**
 * 키맨추가 관련 js파일
 */
function keymanListRefresh() {
 	window.opener.keymanList();
	self.close();
}

function opptListRefresh(){
 	window.opener.opptList();
	self.close();
}

function actListRefresh(){
	window.opener.actListcontact();
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

//키맨 수정
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

//영업기회 상세정보 고객 리스트 팝업
function opptListPopup(){
	$('#oppt').click(function(){
		var cont_id = $("#cont_id",opener.document).val();
 		window.open('/opptListPop?cont_id='+cont_id,'newwindow1','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}



function inputCustNm(cust_id,cust_nm){
	
	$('#cust_id').val(cust_id);
	$('#cust_nm').val(cust_nm);
	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}

function inputKeyNm(cust_id){
 	$('#cust_id').val(cust_id);
 	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}
 
function inputOpptNm(oppt_id, opptNm, cust_id){
 	$('#oppt_id').val(oppt_id);
 	$('#oppt_nm').val(opptNm);
 	$('#cust_id').val(cust_id);
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



function contactopptSave()
{
	alert("hi");
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var total_sup_price = delete_comma($("#supplyPriceSum").text());
	
	var prod_id = [];
	var prod_nm = [];
	var sales_price = [];
	var discount  = [];
	var sup_price = [];
	var estim_qty = [];
	var est_list  = [];
	var discount_unit_cd = [];
	var unit_check = 0;

//	if(sales_oppt_nm == "" || sales_oppt_nm == null)
//	{
//		alert("영업기회명을 입력해 주세요.");
//		return false;
//	}
//	else if(cust_id == "" || cust_id == null)
//	{
//		alert("고객을 선택해 주세요.");
//		return false;
//	}
//	else if(sales_oppt_stat_cd == "0" || sales_oppt_stat_cd == null)
//	{
//		alert("영업기회 상태를 선택해 주세요.");
//		return false;
//	}
//	else if(sales_lev_cd == "0" || sales_lev_cd == null)
//	{
//		alert("영업단계를 선택해 주세요.");
//		return false;
//	}
//	else if(sales_lev_cd == "" || sales_lev_cd == null)
//	{
//		alert("예상마감일자를 선택해 주세요.");
//		return false;
//	} 
//	else if(psblty_rate == "0" || psblty_rate == null)
//	{
//		alert("가능성을 선택해 주세요.");
//		return false;
//	}	
	
	$("#opptProdtbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount.pop());
		est_list.push(discount_unit_cd.pop());
		
		
	});
	
	$.ajax({
		type : 'post',
		url : '/contactopptInsert',
		data : {
			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			total_sup_price : total_sup_price,
			sales_lev_cd : sales_lev_cd,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			cust_id : cust_id,
			memo : memo,
			est_list : est_list
		},
		datatype : 'json',
		success:function(result){
			alert("정상적으로 등록되었습니다.");
			
			var cust_id = $('#cust_id', opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
			window.opener.opptTabList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
	
	
	 
}
