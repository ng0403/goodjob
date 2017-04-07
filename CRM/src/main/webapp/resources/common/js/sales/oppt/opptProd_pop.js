/**
 * 함수 목록
 * OpptProdNmSelect(ctx)									:		상품명 선택 시 뷰모창에 값을 전달.
 * opptPrdtAdd(ctx)											:		영업기회별 상품 추가
 * opptPrdtUpdate(ctx)										:		영업기회별 상품 수정
 * opptPrdtInputProd(prod_id,prod_nm,prod_price)			:		영업기회별 상품 - 상품리스트 클릭 시
 */

$(function(){
	var ctx = $('#ctx').val();
	OpptProdNmSelect(ctx); 
//	opptProdList(ctx);
	opptProdChangeRealTime();
	prodallCheck();
	prodDelete();
	opptPrdtButton(ctx);
	opptPrdtCancel();
	startCalendar(ctx);
	/*견적 상품목록 수정에 사용되는 변수*/
	
});
var prodAddId = [];   		//추가된 상품의 상품Id List
var prodDeleteProdId = [];	//삭제된 상품의 상품Id List
var prodDeleteopptPrdtId = []; //삭제된 상품에 견적Id List

$(document).ready(function() {
	 var ctx = $("#ctx").val();
	$('#opptSelect').click(function(){
		window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	}); 
	
	// 상품추가 수량, 금액 실시간 변경
	$("#estimatetbody").bind('input', function(event) { 
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
	   opptProdChange();
	});
	
function OpptProdNmSelect(ctx){
	$('#oppt_product_list_table tbody tr').click(function(){
		
		var prod_id=$(this).find('#prod_id').text();
		var prod_nm=$(this).find('#prod_nm').text();
		var prod_price=$(this).find('#prod_price').text();
//		alert("opptProd_pop.js : " + prod_id+', ' + prod_nm+', ' + prod_price);
		window.opener.opptPrdtInputProd(prod_id,prod_nm,prod_price);
		self.close();
		
	});
}

//상품 입력 함수 (상품 리스트 tr 클릭 시 입력)
function opptPrdtInputProd(prod_id,prod_nm,prod_price){
	alert('상품추가 진입');
		var unit="";
		var flg = $('#flg').val();
		var data = $('#opptPrdtCode').val();
		var tmp = data.replace("[", "");
		var tmp2 = tmp.replace("]", "");
		var arr = tmp2.split(',');
		unit = '<option value=0>선택</option>';
		for(var i=0; i<arr.length ; i=i+2){
			unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
		}
	$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
//	alert(flg);
	var like = 0;
	if($("#opptPrdttbody tr").length == 0){
			if($('#flg').val()=='detail'){
				alert("prod_id : " + prod_id);
				prodAddId.push(prod_id);
			}
		$('#opptPrdttbody').append(
				'<tr id="priceline" class='+prod_id+'>'+
				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
				'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
				'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="opptPrdt_qty" id="opptPrdt_qty" min="1" max="100" value=1 ></td>'+			
				'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
				'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'
				+'<select id="unit" style="width: 30%;">'+ unit+ '</select>'+'</td>'+
				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
				'</tr>'
		);
		like = 1;
	}else{
		$("#opptPrdttbody tr").each(function(){		
			var old_prodId = $(this).attr("class");
			if(prod_id == old_prodId){
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		if(like==0){
			if($('#flg').val()=='detail'){
				prodAddId.push(prod_id);
			}
			$('#opptPrdttbody').append(
					
					'<tr id="priceline" class='+prod_id+'>'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
					'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="opptPrdt_qty" id="opptPrdt_qty" value=1  min="1" max="100"></td>'+			
					'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'+
					 '<select id="unit" style="width: 30%;">'+
					 unit+
					 '</select>'+'</td>'+
					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
		}
	}
	prodChange();
}

//상품 추가
function opptPrdtAdd(ctx){
	var pageNum = $('#pageNum').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var opptPrdt_qty = [];
	var prod_price = $('#prod_price').text();
	alert("판매가 : " + prod_price);
	var prod_price = [];
	var discount= [];
	var sup_price = [];
	var cust_id = $('#cust_id').val();
//	var estim_nm = $('#estim_nm').val();
	var opptPrdt_list = [];
	var memo = $('#memo').val();
	var discount_unit_cd = [];
	var unit_check =0;
//	if(prod_nm=="" || prod_nm==null){
//		alert("견적명을 입력해 주세요.");
//		return false;
//	}else 
//	if(sales_lev_cd=="0"|| sales_lev_cd==null){
//		alert("영업단계를 선택해 주세요");
//		return false;
//	}
//	else if(estim_valid_d==""|| estim_valid_d==null){
//		alert("견적유효일자를 선택해 주세요");
//		return false;
//	}
	$("#opptPrdttbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		opptPrdt_qty.push($(this).children().eq(2).children().val());
		prod_price.push($(this).children().eq(3).text());
		discount.push($(this).children().eq(4).children().val());
		sup_price.push($(this).children().eq(5).text());
		opptPrdt_list.push(prod_id.pop());
		opptPrdt_list.push(prod_nm.pop());
		opptPrdt_list.push(opptPrdt_qty.pop());
		opptPrdt_list.push(prod_price.pop());
		opptPrdt_list.push(discount.pop());
		opptPrdt_list.push(sup_price.pop());
		opptPrdt_list.push(discount_unit_cd.pop()); 
		alert("판매가 : " + prod_price);
		alert("prod_price : " + prod_price);
		alert("discount : " + discount);
		alert("sup_price" + sup_price);
		alert("opptPrdt_list : " + opptPrdt_list);
	});
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(opptPrdt_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		url : ctx+'/opptPrdtAdd',
		dataType : 'json',
		data : {
			cust_id : cust_id,
			opptPrdt_nm : opptPrdt_nm,
			sales_oppt_id : sales_oppt_id,
			memo : memo,
			opptPrdt_list : opptPrdt_list
		},
		success:function(){
			alert("정상적으로 등록되었습니다.");
			window.opener.opptPrdtList(sales_oppt_id);
			alert(pageNum);
			window.opener.opportunityList(pageNum);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status)
		}
	});
}
//견적 편집
function opptPrdtUpdate(ctx){
	var opptPrdt_id = $('#opptPrdt_id').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var opptPrdt_qty = [];
	var prod_price = $('#prod_price').text();
	var prod_price = [];
	var discount= [];
	var sup_price = [];
	var cust_id = $('#cust_id').val();
	var opptPrdt_nm = $('#opptPrdt_nm').val();
	var opptPrdt_list = [];
	var discount_unit_cd = [];
	var memo = $('#memo').val();
	var cd = 0;
	var unit_check=0;

//	if(opptPrdt_nm=="" || opptPrdt_nm==null){
//		alert("을 입력해 주세요.");
//		return false;
//	}
//	else if(estim_lev_cd=="0"|| estim_lev_cd==null){
//		alert("견적단계를 선택해 주세요");
//		return false;
//	}else if(estim_valid_d==""|| estim_valid_d==null){
//		alert("견적유효일자를 선택해 주세요");
//		return false;
//	}
	$("#opptPrdttbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		opptPrdt_qty.push($(this).children().eq(2).children().val());
		prod_price.push($(this).children().eq(3).text());
		discount.push($(this).children().eq(4).children().val());
		sup_price.push($(this).children().eq(5).text());
		opptPrdt_list.push(prod_id.pop());
		opptPrdt_list.push(prod_nm.pop());
		opptPrdt_list.push(opptPrdt_qty.pop());
		opptPrdt_list.push(prod_price.pop());
		opptPrdt_list.push(discount.pop());
		opptPrdt_list.push(sup_price.pop());
		opptPrdt_list.push(discount_unit_cd.pop());
	});
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(opptPrdt_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		url : ctx+'/opptopptPrdtUpdate',
		dataType : 'json',
		data : {
			opptPrdt_id : opptPrdt_id,
//			estim_valid_d : estim_valid_d,
//			estim_lev_cd : estim_lev_cd,
			cust_id : cust_id,
			opptPrdt_nm : opptPrdt_nm,
			sales_oppt_id : sales_oppt_id,
			prodAddId : prodAddId,
			prodDeleteProdId : prodDeleteProdId,
			prodDeleteopptPrdtId : prodDeleteopptPrdtId,
			memo : memo,
			opptPrdt_list : opptPrdt_list
		},
		success:function(){
			alert("정상적으로 수정 되었습니다.");
			window.opener.opptPrdtList(sales_oppt_id);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status)
		}
	});
	//input값 bind시 상품 금액 변경 함수 호출
	function prodChacgeRealTime(){
		$("#estimatetbody").bind('input', function() { 
			prodChange();
		});
	}
	//숫자만 입력
	function onlyNumber(event){
	    event = event || window.event;
	    var keyID = (event.which) ? event.which : event.keyCode;
	    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
	        return;
	    else
	        return false;
	}
	//숫자가 아닌 경우 input값 수정
	function removeChar(event) {
	    event = event || window.event;
	    var keyID = (event.which) ? event.which : event.keyCode;
	    if(event.target.value==''){
	    	event.target.value="0";
	    	prodChange();
	    }
	    else if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
	        return;
	    else{
	    	event.target.value = event.target.value.replace(/[^0-9]/g, "");    	
	    }
	}
	
	//input값 bind시 상품 금액 변경 함수 호출
	function opptProdChacgeRealTime(){
		$("#opptPrdttbody").bind('input', function() { 
			prodChange();
		});
	}
	// 상품추가 수량, 금액 변경
	function opptProdChange(){
		var countSum = 0;
		var salesPriceSum = 0;
		var discountSum = 0;
		var supplyPriceSum = 0;
		$("#opptPrdttbody tr[class!=empty]").each(function(){
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
}