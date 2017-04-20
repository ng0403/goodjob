
$(document).ready(function() {
	 var ctx = $("#ctx").val();
	 custSaleActSelect(ctx);
	 
	//영업담당자 추가 시 영업활동 팝업 리스트 
	$('#custSaleActSelect').click(function(){
		window.open(ctx+'/custSaleActList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

	}); 
	
}); 

//영업담당자 탭에서 영업활동 추가 시 영업활동명 보이기
function inputOpptNm(sales_actvy_nm){
	alert("inputOpptNm: "+ sales_actvy_nm);
	$('#sales_actvy_nm').val(sales_actvy_nm);
	//$('#sales_actvy_id').val(sales_actvy_id);
}

//영업활동리스트 tr를 클릭했을 때 영업활동명 텍스트를 넣어주는 작업
function custSaleActSelect(ctx){
	$('#dboardtable tbody tr').click(function(){
		var sales_actvy_nm=$(this).find('#sales_actvy_nm').text();
//		var sales_actvy_id=$(this).find('#sales_actvy_id').text();
		
		alert(sales_actvy_nm);
		//var opptId=$(this).find('#sales_oppt_nm').text();
		window.opener.inputOpptNm(sales_actvy_nm);
		self.close();
	});
}