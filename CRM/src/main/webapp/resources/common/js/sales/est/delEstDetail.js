$(function(){	
	var buttonStatus = "";
	var ctx = $("#ctx").val();

});

/**
 * 복원버튼 눌렀을 때.
 * */
function restoreEstBtn(estim_id1)
{
	var ctx = $("#ctx").val();
	var estim_id = estim_id1;
	var ynChk = confirm("복원하시겠습니까?");
	
	if(ynChk)
	{	
		$.ajax({
			type : 'post',
			data : {
				estim_id : estim_id
			},
			datatype : 'json',
			url : ctx + '/delEstRestore',
			success:function(result){
				alert("복원되었습니다.");
				
				alert("견적관리 삭제된 데이터 페이지로 이동합니다.");
				location.href = ctx + '/delEstInqr';
			
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
function deEstDelBtn(estim_id1)
{
	var ctx = $("#ctx").val();
	var estim_id = estim_id1;
	var ynChk = confirm("삭제하시면 복원불가합니다. 그래도 삭제하시겠습니까?");
	
	if(ynChk)
	{	
		$.ajax({
			type : 'post',
			data : {
				estim_id: estim_id
			},
			datatype : 'json',
			url : ctx + '/delEstDelete',
			success:function(result){
				alert("완전 삭제되었습니다.");
				
				alert("견적관리 삭제된 데이터 페이지로 이동합니다.");
				location.href = ctx + '/delEstInqr';
			
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
function delCancel_Click()
{
	var ctx = $("#ctx").val();
	
	location.href = ctx + '/delEstInqr';
}
