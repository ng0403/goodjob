$(function(){
	var ctx = $('#ctx').val();
	actDeleteBtn(ctx);
//	sstartCalendar(ctx);
});

//영업활동 리스트 검색부분 시작일자
function sstartCalendar(ctx){
	$("#sstart_day").datepicker({
	     changeMonth: true, //콤보 박스에 월 보이기
	     changeYear: true, // 콤보 박스에 년도 보이기
	     showOn: 'button', // 우측에 달력 icon 을 보인다.
	     buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	     buttonImageOnly: true //달력에 icon 사용하기
	 }); 
	  //마우스를 손가락 손가락 모양으로 하고 여백주기
	 $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	 $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
/*	 $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

// Insert
function actInsertForm(act_flg) {
	var ctx = $("#ctx").val();
	
	location.href = ctx + '/actDetail?act_flg=' + act_flg;
}

// Insert 영업기회와 고객사 탭에서 넘어 올 경우. 
function actInsertForm2(act_flg, oppt_id, oppt_nm, cust_id, cust_nm)
{
	var ctx = $("#ctx").val();
	
	if(act_flg == "oppt")
	{
		location.href = ctx + '/actDetail?act_flg=' + act_flg + "&sales_oppt_id=" + oppt_id + "&sales_oppt_nm=" + oppt_nm + "&cust_id=" + cust_id + "&cust_nm=" + cust_nm;
	}
	else if(act_flg == "oppt_ed")
	{
		location.href = ctx + '/actDetail?act_flg=' + act_flg + "&sales_oppt_id=" + oppt_id + "&sales_oppt_nm=" + oppt_nm + "&cust_id=" + cust_id + "&cust_nm=" + cust_nm;
	}
	else if(act_flg == "cust")
	{
		location.href = ctx + '/actDetail?act_flg=' + act_flg + "&cust_id=" + cust_id + "&cust_nm=" + cust_nm;
	}
	else if(act_flg == "cust_ed")
	{
		location.href = ctx + '/actDetail?act_flg=' + act_flg + "&cust_id=" + cust_id + "&cust_nm=" + cust_nm;
	}
}

function actDeleteBtn(ctx)
{
	var actDeleteIdList=[];
	
	$('#act_del_btn').click( function(){
		
		if($('#act_list_tbody input[type=checkbox]:checked').length==0)
		{
			alert("삭제할 영업활동을 선택해 주세요.");
			return;
		}
		else
		{
			if(confirm("삭제 하시겠습니까?"))
			{
				$('#act_list_tbody input[type=checkbox]:checked').each(function(){
					actDeleteIdList.push($(this).val());
				});
			
				$.ajax({
					url : ctx+'/actDelete',
					type : 'post',
					datatype : 'json',
					data : { actDeleteIdList : actDeleteIdList},
					success : function(result){
						
						alert(result+'건의 영업활동이 삭제되었습니다.');
						
						schActPaging($('#actPageNum').val());
					},
					error:function(request){
						alert("error : " + request);
					}
				});
			}
			else
			{
				return;
			}
		}
	});
}

//모두체크
//function actAllChk()
//{
//	var checkbox=$('#act_list_table tbody').find('input[type=checkbox]');
//	
//	if($('#actCheck').is(":checked")){
//		$(checkbox).prop("checked", true);
//	}else{
//		$(checkbox).prop("checked", false);
//	}
//}

//전체 체크 해제
//function actChkCancel() {
//	$(document).ready(function() {
//		$("#actCheck").prop("checked", false);
//	});
//}

//체크박스 개수 검색함수
//function checkCount(){
// var count=0;
// var checkList = $('.act_chek');
//
// for(var i=0; i<checkList.size(); i++){
//    if($(checkList[i]).is(':checked')){
//       count++;
//    }
// }
// return count;
//};
