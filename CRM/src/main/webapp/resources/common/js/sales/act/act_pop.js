$(function(){
	var ctx = $('#ctx').val();
	
	actOpptListPopup(ctx);
	sactOpptListPopup(ctx)
	custcompListPopup(ctx);
	actOpptNmSelect(ctx);
	custNmSelect(ctx);
	
});

//영업기회 리스트 팝업
function actOpptListPopup(ctx)
{
	$('#act_opp_nm').click(function(){
		var flg = $('#flg').val();
		var act_flg = $('#act_flg').val();
		var inputCust = $('#inputCust').val();
		
		// 화면마다 영업기회 popup 클릭 이벤트 값 변경
		if(act_flg == 'oppt' || act_flg == 'oppt_ed' || act_flg == 'cust' || act_flg == 'cust_ed')
		{
			inputCust = 'true';
		}
		
		if(inputCust == 'true')
		{
			var cust_id = $('#cust_id').val();
			window.open(ctx+'/actOpptList?cust_id='+cust_id,'newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
		else
		{
			alert('고객을 먼저 선택해주세요.');
			return;
		}
	});
}

function inputOpptNm(opptNm,opptId,estimId){
	
	// Detail
	$('#sales_oppt_nm').val(opptNm);
	$('#sales_oppt_id').val(opptId);
	$('#estim_id').val(estimId);
	
	// List
	$('#ssales_oppt_nm').val(opptNm);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(ctx){
	$('#act_oppt_list_table tbody tr').click(function(){
		
		var opptNm=$(this).find('#sales_oppt_nm').text();
		var opptId=$(this).find('#sales_oppt_id').text();
		var estimId=$(this).find('#estim_id').text();

		window.opener.inputOpptNm(opptNm,opptId,estimId);
		
		self.close();
		
	});
}

//고객사리스트 팝업창 띄우기
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/custcompList','newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function inputCustNm(custNm,custId)
{
	// Detail
	$('#cust_nm').val(custNm);
	$('#cust_id').val(custId);
	
	// List
	$('#scust_nm').val(custNm);
	$('#scust_id').val(custId);
	
	$('#inputCust').val('true');
	console.log($('#inputCust').val());
}

//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function custNmSelect(ctx){
	$('#custcomp_list_table tbody tr').click(function(){
		
		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();

		window.opener.inputCustNm(custNm,custId);
		
		self.close();
		
	});
}

//영업기회 팝업창 띄우기
function sactOpptListPopup(ctx){
	$('#sact_opp_nm').click(function(){
		window.open(ctx+'/actOpptList','newwindow','width=1100, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}