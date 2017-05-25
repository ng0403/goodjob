/**
 * schActPaging				: 			피이징해주는 함수 (detail.js)
 * */

$(function(){
	var ctx = $('#ctx').val();
	actDeleteBtn(ctx);
	sstartCalendar(ctx);
});

//영업활동 리스트 검색부분 시작일자
function sstartCalendar(ctx){
	$("#ssale_actvy_strt").datepicker({
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

//검색 버튼 클릭 시 
function searchActBtn(page)
{
	var ssales_oppt_nm = $("#ssales_oppt_nm").val();
	var ssales_oppt_nm0 = $("#ssales_oppt_nm0").val();
	var ssales_oppt_nm1 = $("#ssales_oppt_nm1").val();
	var scust_id = $("#scust_id").val();
	var scust_id0 = $("#scust_id0").val();
	var scust_id1 = $("#scust_id1").val();
	var ssales_lev_cd = $("#ssales_lev_cd_select").val();
	var ssales_lev_cd0 = $("#ssales_lev_cd_select0").val();
	var ssales_lev_cd1 = $("#ssales_lev_cd_select1").val();
	var spsblty_rate = $("#spsblty_rate_select").val();
	var spsblty_rate0 = $("#spsblty_rate_select0").val();
	var spsblty_rate1 = $("#spsblty_rate_select1").val();
//	alert(ssales_oppt_nm);
//	alert(ssales_oppt_nm0);
//	alert(ssales_oppt_nm1);
	if((ssales_oppt_nm == '' || ssales_oppt_nm == null) && ssales_oppt_nm0){
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}if((ssales_oppt_nm == '' || ssales_oppt_nm == null) && ssales_oppt_nm1){
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}if(ssales_oppt_nm0 == null && ssales_oppt_nm1){
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}
	if((scust_id == '' || scust_id == null)  && scust_id0){
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}if((scust_id == '' || scust_id == null) && scust_id1){
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}if(scust_id0 == null && scust_id1){
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}
	if((ssales_lev_cd == '' || ssales_lev_cd == null) && ssales_lev_cd0){
		alert("영업기회단계를 앞에서부터 채워주세요.");
		return;
	}if((ssales_lev_cd == '' || ssales_lev_cd == null) && ssales_lev_cd1){
		alert("영업기회단계를 앞에서부터 채워주세요.");
		return;
	}if(ssales_lev_cd0 == null && ssales_lev_cd1){
		alert("영업기회단계를 앞에서부터 채워주세요.");
		return;
	}
	if((spsblty_rate == '' || spsblty_rate == null) && spsblty_rate0){
		alert("가능성을 앞에서부터 채워주세요.");
		return;
	}if((spsblty_rate == '' || spsblty_rate == null) && spsblty_rate1){
		alert("가능성을 앞에서부터 채워주세요.");
		return;
	}if(spsblty_rate0 == null && spsblty_rate1){
		alert("가능성을 앞에서부터 채워주세요.");
		return;
	}
		opportunityList(page);
//	}
}



/**
 * 영업활동 리스트 화면에서 추가버튼 눌렀을 때
 * */
function actInsertForm(act_flg) {
	var ctx = $("#ctx").val();
	
	location.href = ctx + '/actDetail?act_flg=' + act_flg;
}

/**
 * 영업기회, 고객사 - 영업활동 탭에서 넘어 올 경우.
 * */
function actInsertForm2(act_flg, oppt_id, oppt_nm, cust_id, cust_nm)
{
	var ctx = $("#ctx").val();
	
	if(act_flg == "oppt")			// 영업기회 - 영업활동 탭에서 추가버튼 눌렀을 시
	{
		location.href = ctx + '/actDetail?act_flg=' + act_flg + "&sales_oppt_id=" + oppt_id + "&sales_oppt_nm=" + oppt_nm + "&cust_id=" + cust_id + "&cust_nm=" + cust_nm;
	}
	else if(act_flg == "oppt_ed")	// 영업기회 - 영업활동 탭 리스트에서 영업활동을 클릭 했을 때
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

/**
 * 영업활동 리스트화면에서 삭제버튼 눌렀을 때
 * */
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
