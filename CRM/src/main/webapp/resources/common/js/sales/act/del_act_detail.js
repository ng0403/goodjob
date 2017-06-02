$(function(){
	var ctx = $('#ctx').val();
	var sales_actvy_id = $("#nowSales_actvy_id").val();
	
});


function delActDetail(sales_actvy_id)
{
	var ctx = $("#ctx").val();
	var at_select = $("#sales_actvy_type_nm");
	var at_select_option = "";
	var adiv_select = $("#sales_actvy_div_nm");
	var adiv_select_option = "";
	var astat_select = $("#sales_actvy_stat_nm");
	var astat_select_option = "";
	
	
	location.href = ctx + '/delActDetail?sales_actvy_id=' + sales_actvy_id;
}

/**
 * 복원버튼 눌렀을 때.
 * */
function restoreActBt(sales_actvy_id1)
{
	var ctx = $("#ctx").val();
	var pageNum = 1;
	var sales_actvy_id = sales_actvy_id1;
	var ynChk = confirm("복원하시겠습니까?");
	
	if(ynChk)
	{	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				sales_actvy_id : sales_actvy_id
			},
			datatype : 'json',
			url : ctx + '/delActRestore',
			success:function(result){
				alert("복원되었습니다.");
				
				alert("영업활동관리 페이지로 이동합니다.");
				location.href = ctx + "/actSaleList";
			
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}

/**
 * 삭제버튼 눌렀을 떄
 * */
function delActBt(sales_actvy_id1)
{
	var ctx = $("#ctx").val();
	var pageNum = 1;
	var sales_actvy_id = sales_actvy_id1;
	var ynChk = confirm("삭제하시겠습니까?" + "\n" + "확인버튼 클릭 시 복구가 불가능합니다.");
	
	if(ynChk)
	{	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				sales_actvy_id: sales_actvy_id
			},
			datatype : 'json',
			url : ctx + '/delActRestore',
			success:function(result){
				alert("완전히 삭제되었습니다.");
				
				alert("영업활동관리 삭제된 데이터 페이지로 이동합니다.");
				location.href = ctx + "/delActSaleList";
			
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}

/**
 * 취소버튼 눌렀을 떄
 * */
function delActCancelBt()
{
	var ctx = $("#ctx").val();
	var ynChk = confirm("취소하시겠습니까?");
	
	if(ynChk)
	{
		alert("삭제된 페이지 리스트로 이동합니다.");
		location.href = ctx + '/delActSaleList'; 
	}
}
