$(function(){
	var flg = $("#flg").val();
	$('#opptModfyButton').click(function() {
		$('#opptModfyButton').hide();
		$('#opptModfySaveBtn').show();
		
		opptActive();
	});
	var ctx = $("#ctx").val();
	prodList();
	modeChange();
	opptCancel();
	prodChacgeRealTime();
	startCalendar(ctx);
	prodChange();
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
	var sales_oppt_nm = $("#sales_oppt_nm").val();
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
	var estim_id=$("#estim_id",opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
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
				estim_id : estim_id,
				est_list : est_list
			},
			datatype : 'json',
			success : function(result) {
				alert("정상적으로 수정되었습니다.");
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
//		if(buttonStatus=='modify'){
//			prodAddId.push(prod_id);
//		}
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
		$("#opptPrdtbody tr").each(function(){
			var old_prodId = $(this).attr("class");
			if(prod_id == old_prodId){
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		if(like==0){
//			if(buttonStatus=='modify'){
//				prodAddId.push(prod_id);
//			}
			$('#opptPrdtbody').append(
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
function makeBlock(){
	for(var i=$("#opptPrdtbody tr").length; i <= 4; i++){
		$('#opptPrdtbody').append(
				'<tr id="priceline" class="empty">'+
				'<th style="width: 3%;"></th>'+
				'<td style="width: 32%;"></td>'+
				'<td style="width: 8%;"></td>'+
				'<td style="width: 27%;"></td>'+
				'<td style="width: 15%;"></td>'+
				'<td style="width: 15%;"></td>'+
				'</tr>'
				);
	}
}
//상품 금액 변경
function prodChange(){
	var countSum = 0;
	var salesPriceSum = 0;
	var discountSum = 0;
	var supplyPriceSum = 0;
	$("#opptPrdtbody tr[class!=empty]").each(function(){
		var countObj=$(this).children().eq(2).children();
		var salesamtObj=$(this).children().eq(0).children().eq(1);
		var count = countObj.val();
		if(count==""){
			count="0";
		}
		var sellamt =  $(this).children().eq(3).text();
		var disvalObj = $(this).children().eq(4).children().eq(0);
		var amt = $(this).children().eq(3).text();
		var salesamt = $(this).children().eq(0).children().eq(1).val();
		var sellamt =  parseInt(salesamt) * parseInt(count);			
		if(sellamt==""){
			sellamt="0";
		}
		amt = sellamt;
		$(this).children().eq(3).text(comma(amt));
		salesPriceSum = parseInt(sellamt) + parseInt(salesPriceSum);
		countSum = parseInt(count) + parseInt(countSum);
		var disval =  disvalObj.val();
		if(disval==""){
			disval="0";
		}
		var unit = $(this).children().eq(4).children().eq(1).val();
		var disamt = 0;
		if(unit == "0001"){
			 disamt = parseInt(amt) - parseInt(disval);
			 discountSum = parseInt(disval) + parseInt(discountSum);
		}else if(unit == "0002"){
			var dis = parseInt(amt) * (parseInt(disval)/100);
			disamt = parseInt(amt) - parseInt(dis);
			 discountSum = parseInt(dis) + parseInt(discountSum);
		}else if(unit =="0"){
			disamt = parseInt(amt);
			$(this).children().eq(4).children().eq(0).val("0");
		}
		if(isNaN(disamt) || parseInt(disamt)<0){
			disamt="0";
		}
		$(this).children().eq(5).text(comma(disamt));
		 var realamt = $(this).children().eq(5).text();
		 supplyPriceSum = parseInt(disamt) + parseInt(supplyPriceSum);
	});
	$("#countSum").text(comma(countSum));
	$("#salesPriceSum").text(comma(salesPriceSum));
	$("#discountSum").text(comma(discountSum));
	$("#supplyPriceSum").text(comma(supplyPriceSum));	
}
//상품 금액 실시간 변경
function prodChacgeRealTime(){
	$("#opptPrdtbody").bind('input', function(event) { 
//		alert("bind");
		var size = event.target.value;
	    var target = $(event.target);
	    var id = target.attr("id");
	    var count = target.parent().parent().children().eq(2).children().val();
	    var salesamt = target.parent().parent().children().eq(0).children().eq(1).val();
	    var sellamt =  parseInt(salesamt) * parseInt(count);
	    var unit = target.parent().children().eq(1).val();
	   if(id=='discount'){
		   if(unit=='0001'){
			   if(parseInt(size)>parseInt(sellamt)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);  
			   }
		   }else if(unit=='0002'){
			   if(parseInt(size) > parseInt(100)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);
			   }
		   }
	   }else if(id=='estim_qty'){
		   if(parseInt(count) >= parseInt(100)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = event.target.value.substr(0, event.target.value.length-1);			   
		   }else if(parseInt(count) <= parseInt(0)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = "1";	
		   }
		   
	   }
//	   event.target.value = comma(event.target.value);
//	   alert(event.target.value);
	    prodChange();
	});
}

//상품 목록 리스트 팝업
function prodList(){
	$('#prodListBtn').click(function(){
		window.open('/estProdList','newwindow3','width=770, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
//달력띄우기
function startCalendar(ctx){
//	 $("#expt_fin_d").datepicker({
//	        changeMonth: true, //콤보 박스에 월 보이기
//	        changeYear: true, // 콤보 박스에 년도 보이기
//	        showOn: 'button', // 우측에 달력 icon 을 보인다.
//	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
//	        buttonImageOnly: true //달력에 icon 사용하기
//	    }); 
//	     //마우스를 손가락 손가락 모양으로 하고 여백주기
//	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
//	   //날짜 형식을 0000-00-00으로 지정하기
//	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
//	    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');
	    
	    $("#expt_fin_d").datepicker({
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