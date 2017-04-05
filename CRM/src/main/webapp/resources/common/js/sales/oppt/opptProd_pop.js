/**
 * 함수 목록
 * OpptProdNmSelect(ctx)		:		상품명 선택 시	
 * opptPrdtAdd(ctx)				:		영업기회별 상품 추가
 * opptPrdtUpdate(ctx)			:		영업기회별 상품 수정
 */

$(function(){
	var ctx = $('#ctx').val();
	OpptProdNmSelect(ctx); 
	prodList(ctx);
	prodChacgeRealTime();
	prodallCheck();
	prodDelete();
	opptEstimButton(ctx);
	estimCancel();
	startCalendar(ctx);
	/*견적 상품목록 수정에 사용되는 변수*/
	
});
var prodAddId = [];   		//추가된 상품의 상품Id List
var prodDeleteProdId = [];	//삭제된 상품의 상품Id List
var prodDeleteEstimId = []; //삭제된 상품에 견적Id List
function OpptProdNmSelect(ctx){
	$('#product_list_table tbody tr').click(function(){
		
		var prod_id=$(this).find('#prod_id').text();
		var prod_nm=$(this).find('#prod_nm').text();
		var prod_price=$(this).find('#prod_price').text();
		alert("55");
		alert("opptProd_pop.js : " + prod_id+', ' + prod_nm+', ' + prod_price);
		
		window.opener.opptInputProd(prod_id,prod_nm,prod_price);
		
		self.close();
		
	});
}



//견적 추가
function opptPrdtAdd(ctx){
	var pageNum = $('#pageNum').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	alert("판매가 : " + prod_price);
	var sales_price = [];
	var discount= [];
	var sup_price = [];
//	var estim_valid_d = $('#estim_valid_d').val();
	var sales_lev_cd = $('#sales_lev_cd').val();
	var cust_id = $('#cust_id').val();
//	var estim_nm = $('#estim_nm').val();
//	var est_list = [];
//	var memo = $('#memo').val();
	var discount_unit_cd = [];
	var unit_check =0;
//	if(prod_nm=="" || prod_nm==null){
//		alert("견적명을 입력해 주세요.");
//		return false;
//	}else 
	if(sales_lev_cd=="0"|| sales_lev_cd==null){
		alert("영업단계를 선택해 주세요");
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		return false;
	}
	$("#opptprdttbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push($(this).children().eq(2).children().val());
		sales_price.push($(this).children().eq(3).text());
		discount.push($(this).children().eq(4).children().val());
		sup_price.push($(this).children().eq(5).text());
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop()); 
		alert("판매가 : " + prod_price);
		alert("sales_price : " + sales_price);
		alert("discount : " + discount);
		alert("sup_price" + sup_price);
		alert("est_list : " + est_list);
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
		url : ctx+'/opptEstimAdd',
		dataType : 'json',
		data : {
			estim_valid_d : estim_valid_d,
			estim_lev_cd : estim_lev_cd,
			cust_id : cust_id,
			estim_nm : estim_nm,
			sales_oppt_id : sales_oppt_id,
			memo : memo,
			est_list : est_list
		},
		success:function(){
			alert("정상적으로 등록되었습니다.");
			window.opener.estimList(sales_oppt_id);
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
	var estim_id = $('#estim_id').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var estim_valid_d = $('#estim_valid_d').val();
	var estim_lev_cd = $('#estim_lev_cd').val();
	var cust_id = $('#cust_id').val();
	var estim_nm = $('#estim_nm').val();
	var est_list = [];
	var discount_unit_cd = [];
	var memo = $('#memo').val();
	var cd = 0;
	var unit_check=0;

	if(estim_nm=="" || estim_nm==null){
		alert("견적명을 입력해 주세요.");
		return false;
	}else if(estim_lev_cd=="0"|| estim_lev_cd==null){
		alert("견적단계를 선택해 주세요");
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		return false;
	}
	$("#estimatetbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push($(this).children().eq(2).children().val());
		sales_price.push($(this).children().eq(3).text());
		discount.push($(this).children().eq(4).children().val());
		sup_price.push($(this).children().eq(5).text());
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
		url : ctx+'/opptEstimUpdate',
		dataType : 'json',
		data : {
			estim_id : estim_id,
			estim_valid_d : estim_valid_d,
			estim_lev_cd : estim_lev_cd,
			cust_id : cust_id,
			estim_nm : estim_nm,
			sales_oppt_id : sales_oppt_id,
			prodAddId : prodAddId,
			prodDeleteProdId : prodDeleteProdId,
			prodDeleteEstimId : prodDeleteEstimId,
			memo : memo,
			est_list : est_list
		},
		success:function(){
			alert("정상적으로 수정 되었습니다.");
			window.opener.estimList(sales_oppt_id);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status)
		}
	});
}