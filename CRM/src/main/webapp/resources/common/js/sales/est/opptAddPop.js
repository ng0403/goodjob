$(function(){
	
	$('#opptModfyButton').click(function() {
		$('#opptModfyButton').hide();
		$('#opptModfySaveBtn').show();
		
		opptActive();
	});
	prodList();
	modeChange();
	opptCancel();
	//startDatePicker(ctx);
});

//영업기회 취소 버튼
function opptCancel(){
	// 취소 버튼 눌렀을 때.
	$("#opptAdd_cancel, #opptModfy_cancel").click(function(){
		self.close();
	});
}

function modeChange(){
	var flg = $("#flg").val();
	if(flg == 'add'){
		$("#oppt_add_btn_div").show();
		$("#oppt_mdfy_btn_div").hide();
		opptActive();
	}else if(flg == 'detail'){
		$("#oppt_add_btn_div").hide();
		$("#oppt_mdfy_btn_div").show();
	}
}

function opptActive(){
	$('#sales_oppt_nm').attr("readonly", false);
	$('#sales_oppt_stat_cd').attr("disabled", false);
	$('#sales_lev_cd').attr("disabled", false);
	$('#expt_sales_amt').attr("readonly", false);
	$('#expt_fin_d').attr("readonly", false);
	$('#psblty_rate').attr("disabled", false);
	$('#memo').attr("readonly", false);
}

function opptSave(){
//	var sales_oppt_id = $("#sales_oppt_id").val();
	var sales_oppt_nm = $("#ales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
//	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id').val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var estim_id=$("#estim_id",opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
	/*var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();*/
	var total_sup_price = uncomma($("#supplyPriceSum").text());
	var prod_id = [];
	var prod_nm = [];
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var est_list = [];
	var discount_unit_cd = [];
	var unit_check =0;
	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}/*else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}*/else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
	$("#opptPrdtbody tr[class!=empty]").each(function(){
		var cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		
		discount_unit_cd.push(cd);
		
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		type : 'post',
		url : '/estimOpptAdd',
		data : {
//			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			sales_lev_cd : sales_lev_cd,
			total_sup_price : total_sup_price,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			cust_id : cust_id,
			memo : memo,
			estim_id : estim_id,
			est_list : est_list
		},
		datatype : 'json',
		success:function(result){
			alert("정상적으로 등록되었습니다.");
			window.opener.viewSalesActive(estim_id);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}

function opptMdfySave()
{
//	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#sales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
//	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id').val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	/*var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();*/
	var prod_id = [];
	var prod_nm = [];
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var total_sup_price = uncomma($("#supplyPriceSum").text());
	var est_list = [];
	var discount_unit_cd = [];
	var unit_check =0;
	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}/*else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}*/else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
	$("#opptPrdtbody tr[class!=empty]").each(function(){
		var cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	
	if(confirm("수정 하시겠습니까? "))
	{
		$.ajax({
			type : 'post',
			url : '/estimOpptModfy',
			data : {
				sales_oppt_id : sales_oppt_id,
				sales_oppt_nm : sales_oppt_nm,
				sales_lev_cd : sales_lev_cd,
//				expt_sales_amt : expt_sales_amt,
				total_sup_price : total_sup_price,
				expt_fin_d : expt_fin_d,
				psblty_rate : psblty_rate,
				sales_oppt_stat_cd : sales_oppt_stat_cd,
				cust_id : cust_id,
				memo : memo,
				est_list : est_list
			},
			datatype : 'json',
			success : function(result) {
				alert("정상적으로 수정되었습니다.");
				var estim_id=$("#estim_id",opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
				window.opener.viewSalesActive(estim_id);
				self.close();
			},
			error : function(request) {
				alert("error : " + request.status);
			}
		});
	}
	else
	{
		return false;
	}
}
//상품 입력 함수
function inputProd(prod_id,prod_nm,prod_price){
		$("#opptPrdtbody .empty").remove();
		var data = $('#eduCode').val();
		var tmp = data.replace("[", "");
		var tmp2 = tmp.replace("]", "");
		
		var arr = tmp2.split(',');
		unit = '<option value=0>선택</option>';
		for(var i=0; i<arr.length ; i=i+2){
			unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
		}
	$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
	var like = 0;
	if($("#opptPrdtbody tr").length == 0){
		if(buttonStatus=='modify'){
			prodAddId.push(prod_id);
		}
		$('#opptPrdtbody').append(
				'<tr id="priceline" class='+prod_id+' name="prt">'+
				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
				'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
				'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
				'<td style="width: 27%;" name="prod_price">'+prod_price+'</td>'+
				'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" value=0 onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
				 '<select id="unit" style="width: 25%;">'+
				 unit+
				 '</select>'+'</td>'+
				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
				'</tr>'
		);
		like = 1;
	}else{
		$("#estimatetbody tr").each(function(){
			var old_prodId = $(this).attr("class");
			if(prod_id == old_prodId){
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		if(like==0){
			if(buttonStatus=='modify'){
				prodAddId.push(prod_id);
			}
			$('#estimatetbody').append(
					'<tr id="priceline" class='+prod_id+' name="prt">'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
					'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;"  name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
					'<td style="width: 27%;" name="prod_price">'+prod_price+'</td>'+
					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount"  value=0  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
					'<select id="unit" style="width: 25%;" >'+
					 unit+
					 '</select>'+'</td>'+
					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
		}
	}
	makeBlock();
	prodChange();	
}

//상품 목록 리스트 팝업
function prodList(){
	$('#prodListBtn').click(function(){
		window.open('/estProdList','newwindow3','width=550, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//숫자 사이 쉼표 추가
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//숫자 사이 쉼표 삭제
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}