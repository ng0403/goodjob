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
		alert("save");
	});
}

