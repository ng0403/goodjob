/**
 * 함수 목록
 * OpptProdNmSelect(ctx)		:		상품명 선택 시	
 * 
 */

$(function(){
	OpptProdNmSelect(ctx); 
});

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