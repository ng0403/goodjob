$(function(){
	var ctx = $('#ctx').val();
	var cust_id1 = $('#cust_id', opener.document).val();
	var cust_nm1 = $('#cust_nm', opener.document).val();
	
	$('#cust_nm').val(cust_nm1);
	$('#opptModfySaveBtn').hide();
	
	$('#opptModfyButton').click(function() {
		$('#opptModfyButton').hide();
		$('#opptModfySaveBtn').show();
		
		$('#sales_oppt_nm').attr("readonly", false);
		$('#sales_oppt_stat_cd').attr("disabled", false);
		$('#sales_lev_cd').attr("disabled", false);
		$('#expt_sales_amt').attr("readonly", false);
		$('#expt_fin_d').attr("readonly", false);
		$('#psblty_rate').attr("disabled", false);
		$('#memo').attr("readonly", false);
	});
	
	// 취소 버튼 눌렀을 때.
	$("#opptAdd_cancel").click(function(){
 		if(confirm("취소 하시겠습니까?")){
		self.close();
 		}
	});
	
	$('#opptModfy_cancel').click(function(){
 		if(confirm("취소 하시겠습니까?")){
 		self.close();
 		}
	});
	
	//opptSaveBtn(ctx);
	//startDatePicker(ctx);
});

var prodAddId = [];   		//추가된 상품의 상품Id List
var prodDeleteProdId = [];	//삭제된 상품의 상품Id List

/**
 * 숫자 콤마 제거(Server 전달 시 필요)
 * @param str
 * @returns
 */
function delete_comma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

//컴마 해제 함수
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

function opptSave()
{
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
		url : '/opptInsert',
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

function opptMdfySave()
{
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
/*
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
	}else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
*/	
	if(confirm("수정 하시겠습니까? "))
	{
		$.ajax({
			type : 'post',
			url : '/opptModfy',
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
				alert("정상적으로 수정되었습니다.");

				var cust_id = $('#cust_id', opener.document).val(); // 부모창에서
																	// cust_id
																	// 받아오는 부분.
				window.opener.opptTabList(cust_id);
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

//상품 리스트 조회
function opptProdList()
{
  	window.open('/contactprodList','newwindow3','width=800, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
  	opptProdNmSelect();
}

//상품 목록의 input값 변동에 따른 실시간 update
function opptProdUpdate(){	
 	var countSum = 0;
	var salesPriceSum = 0;
	var discountSum = 0;
	var supplyPriceSum = 0;
	
	$("#opptProdtbody tr[class!=empty]").each(function(){
		var countObj=$(this).children().eq(2).children();
		var salesamtObj=$(this).children().eq(0).children().eq(1);
		var count = countObj.val();
		
		if(count=="")
		{
			count="0";
		}
		
		var sellamt =  $(this).children().eq(3).text();
		var disvalObj = $(this).children().eq(4).children().eq(0);
		var amt = $(this).children().eq(3).text();
		var salesamt = $(this).children().eq(0).children().eq(1).val();
		var sellamt =  parseInt(salesamt) * parseInt(count);
		
		if(sellamt=="")
		{
			sellamt="0";
		}
		
		amt = sellamt;
		
		// 판매가 콤마 찍어서 출력해주는 부분.
		$(this).children().eq(3).text(comma(amt));
		
		salesPriceSum = parseInt(sellamt) + parseInt(salesPriceSum);
		countSum = parseInt(count) + parseInt(countSum);
		
		var disval =  disvalObj.val();
		
		if(disval=="")
		{
			disval="0";
		}
		
		var unit = $(this).children().eq(4).children().eq(1).val();
		var disamt = 0;
		
		if(unit == "0001")
		{
			//alert("원");
			
			disamt = parseInt(amt) - parseInt(disval);
			discountSum = parseInt(disval) + parseInt(discountSum);
		}
		else if(unit == "0002")
		{
			//alert("%");
			
			var dis = parseInt(amt) * (parseInt(disval)/100);
			disamt = parseInt(amt) - parseInt(dis);
			discountSum = parseInt(dis) + parseInt(discountSum);
		}
		else if(unit =="0")
		{
			//alert(" 0 ");
			disamt = parseInt(amt);
			$(this).children().eq(4).children().eq(0).val("0");
		}
		if(isNaN(disamt) || parseInt(disamt)<0)
		{
			disamt="0";
		}
		
		//alert("unit : " + unit + " disamt : " + disamt);
		
		$(this).children().eq(5).text(comma(disamt));
		
		var realamt = $(this).children().eq(5).text();
		supplyPriceSum = parseInt(disamt) + parseInt(supplyPriceSum);
		
		//alert("supplyPriceSum : " + supplyPriceSum);
	});
	
	$("#countSum").text(comma(countSum));
	$("#salesPriceSum").text(comma(salesPriceSum));
	$("#discountSum").text(comma(discountSum));
	$("#supplyPriceSum").text(comma(supplyPriceSum));
	
}

//input값 bind시 상품 금액 변경 함수 호출
function opptProdChargeRealTime()
{
 	//opptPrdtbody
	$("#opptProdtbody").bind('input', function(){
		opptProdUpdate();
	});
}
 
opptProdUpdate();
opptProdChargeRealTime();


//저장(수정) 버튼 클릭
function opptEstimSave(){
 	$('#opptEstimButton').click(function(){
		var ctx = $('#ctx').val();
		var flg = $('#flg').val();
		alert(flg);
		if(flg=='popDetail'){
			alert('입장');
			opptEstimUpdate1(ctx);
		}else if(flg=='add'){
			opptEstimAdd(ctx);
		}
	});
}


//상품 입력 함수 (상품 리스트 tr 클릭 시 입력)
function opptInProd(prod_id, prod_nm, prod_price)
{
	var unit ="";
	var flg  = $('#flg').val();
	var data = $('#eduCode').val();
 	var tmp  = data.replace("[", "");
	var tmp2 = tmp.replace("]", "");
	var arr  = tmp2.split(',');
	
	unit = '<option value=0>선택</option>';
	
	for(var i=0; i<arr.length ; i=i+2)
	{
		unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
	}
	
	var t = $('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
	
	//alert("opptInsertPop.js : " + t);
	
	var like = 0;
	
	if($("#opptProdtbody tr").length == 0)
	{
		// 여기 들어옴.
		//alert("opptInsertPop.js - if");
		
		if($('#flg').val()=='add')
		{
			prodAddId.push(prod_id);
		}
		
		$('#opptProdtbody').append(
				'<tr id="priceline" class='+prod_id+'>'+
				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
				'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
				'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" min="1" max="100" value=1 ></td>'+			
				'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
				'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'+
				 '<select id="unit" style="width: 30%;">'+ unit+ '</select>'+'</td>'+
				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+ '</tr>'
		);
		alert(unit);
		alert(prod_nm);
		like = 1;
	}
	else
	{
		//alert("opptInsertPop.js - else");

		$("#opptProdtbody tr").each(function(){		
			var old_prodId = $(this).attr("class");
			
			if(prod_id == old_prodId)
			{
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		
		if(like==0)
		{
			if($('#flg').val()=='detail')
			{
				prodAddId.push(prod_id);
			}
			$('#opptProdtbody').append(
					
					'<tr id="priceline" class='+prod_id+'>'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
					'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" value=1  min="1" max="100"></td>'+			
					'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'+
					 '<select id="unit" style="width: 30%;">'+ unit+ '</select>'+'</td>'+
					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
		}
	}
	
	//alert("opptProdUpdate() 들어가기 전");
	opptProdUpdate();
	
	
	
}














