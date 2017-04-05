$(function(){
	var ctx = $('#ctx').val();
	opptPopCancel();
	opptSaveBtn(ctx);
	startDatePicker(ctx);
});

//영업활동 취소 버튼
function opptPopCancel(){
	$("#opptAdd_cancel").click( function(){
		self.close();
	});
	
	$('opptModfy_cancel').click( function(){
		self.close();
	});
}

function opptSaveBtn(ctx)
{
	$('#opptSaveButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add')
		{
			alert("flag : " + flg);
			activeAdd(ctx);
		}
		else if(flg=='detail')
		{
			alert("flag : " + flg);
			activeUpdate(ctx);
		}
	});
}

//영업기회 상세정보 고객 리스트 팝업
function opptCustPopup(ctx)
{
	$('#customer').click(function(){
		window.open(ctx+'/opptCustPopup','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}