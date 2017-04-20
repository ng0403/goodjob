/**
 * 함수 목록
 * prodList(ctx)								:	상품 리스트 팝업
 * opptInputProd(prod_id,prod_nm,prod_price)	:	상품 입력 함수
 * prodChange()									:	상품 목록 금액 변경		
 * opptProdChargeRealTime()							:	상품 input 변경시 상품 금액 변경 함수 호출
 * onlyNumber(event)							:	숫자만 입력
 * removeChar(event)							:	숫자가 아닌 경우 값 변경
 * prodallCheck()								:	상품 목록 모두 선택
 * prodDelete()									:	상품 삭제
 * opptEstimButton(ctx)							:	저장(수정) 버튼 클릭
 * estimCancel()								:	취소 버튼 클릭
 * OpptProdNmSelect(ctx)						:	상품명 클릭 시
 */

$(document).ready(function() {

	var ctx = $('#ctx').val();
	
	$("#opptProdtbody").bind('input', function(event) { 
		var size = event.target.value;
	    var target = $(event.target);
	    var id = target.attr("id");
	    var count = target.parent().parent().children().eq(2).children().val();
	    var salesamt = target.parent().parent().children().eq(0).children().eq(1).val();
	    var sellamt =  parseInt(salesamt) * parseInt(count);
	    var unit = target.parent().children().eq(1).val();
	    
	    if(id=='discount')
 	    {
	    	if (unit == '0001') 
	    	{
	    		if (parseInt(size) > parseInt(sellamt)) 
	    		{
	    			alert("판매가 보다 높게 지정할 수 없습니다.");
	    			
	    			event.target.value = event.target.value.substr(0, event.target.value.length - 1);
	    		}
	    	} 
	    	else if (unit == '0002') 
	    	{
	    		if (parseInt(size) > parseInt(100)) 
	    		{
	    			alert("판매가 보다 높게 지정할 수 없습니다.");
	    			event.target.value = event.target.value.substr(0, event.target.value.length - 1);
	    		}
			}
		} 
	    else if (id == 'estim_qty') 
	    {
	    	if (parseInt(count) >= parseInt(100)) 
	    	{
	    		alert("수량은 1~99까지 가능합니다.");
	    		event.target.value = event.target.value.substr(0, event.target.value.length - 1);
	    	} 
	    	else if (parseInt(count) <= parseInt(0)) 
	    	{
				alert("수량은 1~99까지 가능합니다.");
				event.target.value = "1";
			}
	   }
	   
	   opptProdUpdate();
	});
	
	opptProdNmSelect(ctx);	// 상품 팝업에서 클릭 했을 때.
	opptProdChargeRealTime();
	opptProdUpdate();
	//prodallCheck();
	//opptProdDelete();
	//opptProdUpdate();
});	

/*견적 상품목록 수정에 사용되는 변수*/
var opptProdAddId = [];   		//추가된 상품의 상품Id List
var opptProdDeleteProdId = [];	//삭제된 상품의 상품Id List
var opptProdDeleteOpptId = []; //삭제된 상품에 견적Id List


//상품 입력 함수 (상품 리스트 tr 클릭 시 입력)
function opptInProd(prod_id, prod_nm, prod_price)
{
	$("#opptProdtbody .empty").remove();
	//var unit ="";
	//var flg  = $('#flg').val();
	var data = $('#eduCode').val();
	var tmp  = data.replace("[", "");
	var tmp2 = tmp.replace("]", "");
	var arr  = tmp2.split(',');
	var unit = '<option value=0>선택</option>';
	
	for(var i=0; i<arr.length ; i=i+2)
	{
		unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
	}
	
	var t = $('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
	
	var like = 0;
	
	if($("#opptProdtbody tr").length == 0)
	{
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
		like = 1;
	}
	else
	{
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
	
	opptProdUpdate();
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
		
		alert(unit);
		
		if(unit == "0001")
		{
			disamt = parseInt(amt) - parseInt(disval);
			discountSum = parseInt(disval) + parseInt(discountSum);
		}
		else if(unit == "0002")
		{
			var dis = parseInt(amt) * (parseInt(disval)/100);
			disamt = parseInt(amt) - parseInt(dis);
			discountSum = parseInt(dis) + parseInt(discountSum);
		}
		else if(unit =="0")
		{
			disamt = parseInt(amt);
			$(this).children().eq(4).children().eq(0).val("0");
		}
		if(isNaN(disamt) || parseInt(disamt)<0)
		{
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

//input값 bind시 상품 금액 변경 함수 호출
function opptProdChargeRealTime()
{
	$("#opptProdtbody").bind('input', function(){
		opptProdUpdate();
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

//상품 목록 모두 선택
function prodallCheck(){
	$("#allSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#opptPrdtbody input[type=checkbox]").prop("checked",true);			
		}else{
			$("#opptPrdtbody input[type=checkbox]").prop("checked",false);
		}
	});
}

//상품 목록 삭제
function opptProdDelete(){
	$("#opptProdDelete").click(function(){
		if(confirm("삭제 하시겠습니까? ")){
			var estimId = $('#estim_id').val();
			$("#opptPrdtbody input[type=checkbox]:checked").each( function(){
				var classVal =  $(this).val();
				$("."+classVal).remove();
				
				if($('#flg').val()=='detail'){
					opptProdDeleteProdId.push(classVal);
					opptProdDeleteOpptId.push(estimId);
				}
			});
			opptProdUpdate();	
		}
	});
}


function opptProdNmSelect(ctx){
	$('#oppt_product_list_table tbody tr').click(function(){
		var prod_id=$(this).find('#prod_id').text();
		var prod_nm=$(this).find('#prod_nm').text();
		var prod_price=$(this).find('#prod_price').text();
		
		window.opener.opptInProd(prod_id, prod_nm, prod_price);
		self.close();
	});
}




////////////////////////////////////////////////////////////////////////////////////////////
//상품 입력 함수 (상품 리스트 tr 클릭 시 입력)
//function opptInputProd(prod_id,prod_nm,prod_price){
//
//		var unit="";
//		var flg = $('#flg').val();
//		var data = $('#eduCode').val();
//		var tmp = data.replace("[", "");
//		var tmp2 = tmp.replace("]", "");
//		var arr = tmp2.split(',');
//		unit = '<option value=0>선택</option>';
//		for(var i=0; i<arr.length ; i=i+2){
//			unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
//		}
//	$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
//	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
//	
//	var like = 0;
//	if($("#opptPrdtbody tr").length == 0){
//			if($('#flg').val()=='add'){
//				
//				opptProdAddId.push(prod_id);
//			}
//		$('#opptPrdtbody').append(
//				'<tr id="priceline" class='+prod_id+'>'+
//				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
//				'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
//				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
//				'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" min="1" max="100" value=1 ></td>'+			
//				'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
//				'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'+
//				 '<select id="unit" style="width: 30%;">'+ unit+ '</select>'+'</td>'+
//				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+ '</tr>'
//		);
//		like = 1;
//	}else{
//		$("#opptPrdtbody tr").each(function(){		
//			var old_prodId = $(this).attr("class");
//			if(prod_id == old_prodId){
//				var count = $(this).children().eq(2).children().val();
//				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
//				like=1;
//			}
//		});
//		if(like==0){
//			if($('#flg').val()=='detail'){
//				opptProdAddId.push(prod_id);
//			}
//			$('#opptPrdtbody').append(
//					
//					'<tr id="priceline" class='+prod_id+'>'+
//					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+'>'+ 
//					'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
//					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
//					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" value=1  min="1" max="100"></td>'+			
//					'<td style="width: 27%;"  name="prod_price">'+prod_price+'</td>'+
//					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" min="0" max="100" value=0>'+
//					 '<select id="unit" style="width: 30%;">'+ unit+ '</select>'+'</td>'+
//					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
//					'</tr>'
//			);
////			makeBlock();
//		}
//	}
//	opptProdUpdate();
//}