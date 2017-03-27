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
		var prod_sales_amt=$(this).find('#prod_sales_amt').text();
		alert("55");
		alert("opptProd_pop.js : " + prod_id+', ' + prod_nm+', ' + prod_sales_amt);
		
		window.opener.opptInputProd(prod_id,prod_nm,prod_sales_amt);
		
		self.close();
		
	});
}