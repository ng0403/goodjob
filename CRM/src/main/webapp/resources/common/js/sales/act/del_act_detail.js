$(function(){
	var ctx = $('#ctx').val();
	var sales_actvy_id = $("#nowSales_actvy_id").val();
	
	startCalendar(ctx);
	endCalendar(ctx);
	actAddBtn();
	actMdfyBtn();
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
 * 삭제버튼 눌렀을 떄
 * */
function delActBt(sales_actvy_id1)
{
	var ctx = $("#ctx").val();
	var pageNum = 1;
	var sales_actvy_id = sales_actvy_id1;
	var ynChk = confirm("삭제하시면 복원불가합니다. 그래도 삭제하시겠습니까?");
	
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
				alert("완전 삭제되었습니다.");
				
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
	
	location.href = ctx + '/delActSaleList'; 
}
