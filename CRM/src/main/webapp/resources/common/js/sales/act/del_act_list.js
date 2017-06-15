/**
 * schActPaging				: 			피이징해주는 함수 (detail.js)
 * */

$(function(){
	var ctx = $('#ctx').val();
	//actSaleListMakeBlock();
	actDeleteBtn(ctx);
	sstartCalendar(ctx);
});

var count = 0;
var actTypeCode;

// 테이블 빈공간 그려주는 부분
//function actSaleListMakeBlock()
//{
//	var blank = $("#act_list_tbody tr").length;
//	
//	if( blank/2 < 10)
//	{
//		for(var j = 0; j < 10-(blank/2); j++)
//		{
//			var block ="<tr>"
//					 + "<td rowspan='2'></td>"
//					 + "<td rowspan='2'></td>"
//					 + "<td rowspan='2'></td>"
//					 + "<td></td><td></td>"
//					 + "<td rowspan='2'></td>"
//					 +"<tr>" + "<td></td><td></td></tr>";
//			$("#act_list_tbody").append(block);
//		}
//	}
//}


//영업활동 리스트 검색부분 시작일자
function sstartCalendar(ctx)
{
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
}

function sstartCalendar0(ctx, count)
{
	var id = "#ssale_actvy_strt" + count;
	console.log(count);
	console.log(id);
	
	$(id).datepicker({
		changeMonth: true, //콤보 박스에 월 보이기
		changeYear: true, // 콤보 박스에 년도 보이기
		showOn: 'button', // 우측에 달력 icon 을 보인다.
		buttonImage: '/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
		buttonImageOnly: true //달력에 icon 사용하기
	}); 
	//마우스를 손가락 손가락 모양으로 하고 여백주기
	$('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	$.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	/*	 $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

//검색 버튼 클릭 시 
function searchDelActBtn(page)
{
	// 영업활동 시작일자
	var ssale_actvy_strt  = $("#ssale_actvy_strt").val();
	var ssale_actvy_strt0 = $("#ssale_actvy_strt").val();
	var ssale_actvy_strt1 = $("#ssale_actvy_strt").val();
	
	// 활동유형
	var ssales_lev_cd_select  = $("#ssales_lev_cd_select").val();
	var ssales_lev_cd_select0 = $("#sales_actvy_type_cd0").val();
	var ssales_lev_cd_select1 = $("#sales_actvy_type_cd1").val();
	
	// 영업활동명
	var ssales_actvy_nm  = $('#ssales_actvy_nm').val();
	var ssales_actvy_nm0 = $('#ssales_actvy_nm0').val();
	var ssales_actvy_nm1 = $('#ssales_actvy_nm1').val();
	
	// 영업기회명
	var ssales_oppt_nm = $("#ssales_oppt_nm0").val();
	var ssales_oppt_nm0 = $("#ssales_oppt_nm0").val();
	var ssales_oppt_nm1 = $("#ssales_oppt_nm1").val();
	
	// 고객사
	var scust_id  = $("#scust_id").val();
	var scust_id0 = $("#scust_id0").val();
	var scust_id1 = $("#scust_id1").val();
	
	// 예외처리
	if((ssale_actvy_strt == '' || ssale_actvy_strt == null) && ssale_actvy_strt0)
	{
		alert("영업시작일자를 앞에서부터 선택해주세요.");
		return false;
	}
	if((ssale_actvy_strt == '' || ssale_actvy_strt == null) && ssale_actvy_strt1)
	{
		alert("영업시작일자를 앞에서부터 선택해주세요.");
		return false;
	}
	if((ssales_lev_cd_select == '' || ssales_lev_cd_select == null) && ssales_lev_cd_select0)
	{
		alert("활동유형을 앞에서부터 선택해주세요.");
		return false;
	}
	if((ssales_lev_cd_select == '' || ssales_lev_cd_select == null) && ssales_lev_cd_select1)
	{
		alert("활동유형을 앞에서부터 선택해주세요.");
		return false;
	}
	if((ssales_actvy_nm == '' || ssales_actvy_nm == null) && ssales_actvy_nm0)
	{
		alert("영업활동명을 앞에서부터 채워주세요.");
		return false;
	}
	if((ssales_actvy_nm == '' || ssales_actvy_nm == null) && ssales_actvy_nm1)
	{
		alert("영업활동명을 앞에서부터 채워주세요.");
		return false;
	}
	if((ssales_oppt_nm == '' || ssales_oppt_nm == null) && ssales_oppt_nm0)
	{
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}
	if((ssales_oppt_nm == '' || ssales_oppt_nm == null) && ssales_oppt_nm1)
	{
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}
	if(ssales_oppt_nm0 == null && ssales_oppt_nm1)
	{
		alert("영업기회명을 앞에서부터 채워주세요.");
		return;
	}
	if((scust_id == '' || scust_id == null)  && scust_id0)
	{
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}
	if((scust_id == '' || scust_id == null) && scust_id1)
	{
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}
	if(scust_id0 == null && scust_id1)
	{
		alert("고객명을 앞에서부터 채워주세요.");
		return;
	}
	
	searchDelActSaleList(page);
}
/* 정렬 버튼 클릭 시 처리 함수 */
function setOrder(order_by,page){
	$("#order_by").val(order_by);
	if($("#order_sc").val()=='DESC'){
		$("#order_sc").val('ASC');
	}else{
		$("#order_sc").val('DESC');
	}
	searchDelActSaleList(page);
}
//영업활동 리스트 출력
function searchDelActSaleList(page)
{
	var ctx = $("#ctx").val();
	var act_flg = $('#act_flg').val();
	var tbody = $('#act_list_tbody');
	var tbodyContent = "";

	$.ajax({
		url : '/delactPaging',
		type : 'POST',
		data : {
			pageNum : page,
			ssale_actvy_strt   : $('#ssale_actvy_strt').val(),
			ssale_actvy_strt0  : $('#ssale_actvy_strt0').val(),
			ssale_actvy_strt1  : $('#ssale_actvy_strt1').val(),
			sactvy_type_select   : $('#sactvy_type_select').val(),
			sactvy_type_select0  : $('#sactvy_type_select0').val(),
			sactvy_type_select1  : $('#sactvy_type_select1').val(),
			ssales_actvy_nm   : $('#ssales_actvy_nm').val(),
			ssales_actvy_nm0  : $('#ssales_actvy_nm0').val(),
			ssales_actvy_nm1  : $('#ssales_actvy_nm1').val(),
			ssales_oppt_nm    : $('#ssales_oppt_nm').val(),
			ssales_oppt_nm0   : $('#ssales_oppt_nm0').val(),
			ssales_oppt_nm1   : $('#ssales_oppt_nm1').val(),
			scust_id   : $('#scust_id').val(),
			scust_id0  : $('#scust_id0').val(),
			scust_id1  : $('#scust_id1').val(),
			order_by : $("#order_by").val(),
			order_sc : $("#order_sc").val()
	
		},
		success : function(data) {
			tbody.children().remove();
			
			if(data.actListSize == 0)
			{
				alert("검색결과가 없습니다.");
				
				//actSaleListMakeBlock();
			}
			else
			{
				for(var i = 0; i < data.actList.length; i++) 
				{
					tbodyContent = "<tr>"
//						+"<td rowspan='2' style='width:2%;'><input type='checkbox' class='act_chek' name='act_del' value='"+data.actList[i].sales_actvy_id+"' onclick='actChkCancel();'></td>"
						+"<td rowspan='2' style='width:15%; text-align: left; padding-left:5px;' class='act_nm_tag' >"
						+"<input type='hidden' value="+data.actList[i].sales_actvy_id+" id='hi_act_id'>"					
						+"<a id='act_id_a' style='color: blue; cursor: pointer;' onclick=actDetail('"+data.actList[i].sales_actvy_id+"','"+act_flg+"')>"+data.actList[i].sales_actvy_nm+"</a></td>";
					
				    	if(data.actList[i].sales_oppt_nm == 'null' || data.actList[i].sales_oppt_nm == null || data.actList[i].sales_oppt_nm == "")
				    	{
				    		tbodyContent += "<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'></td>";
				    	}
				    	else
				    	{
				    		tbodyContent +="<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'>"+data.actList[i].sales_oppt_nm+"</td>";
				    	}
				    	
				    	tbodyContent +="<td style='width:10%; text-align: center;' class='act_starth_tag'>"+data.actList[i].strt_d+"</td>";
				    	
				    	if(data.actList[i].strt_t == 'null' || data.actList[i].strt_t == null || data.actList[i].strt_t == "" || data.actList[i].strt_t == "0")
				    	{
				    		tbodyContent += "<td class='act_startm_tag' style='width:10%; text-align: center;'> </td>";
				    	}
				    	else
				    	{
				    		tbodyContent +="<td class='act_startm_tag' style='width:10%; text-align: center;'>"+data.actList[i].strt_t+"</td>";
				    	}
				    	
					    tbodyContent +="<td rowspan='2' class='act_type_tag' style='width:5%; text-align: center;'>"+data.actList[i].fin_mdfy_id+"</td>"
					    +"<td rowspan='2' class='act_stat_tag' style='width:5%; text-align: center;'>"+data.actList[i].fin_mdfy_dt+"</td>"
	                    +"</tr><tr>";
					    
					    if(data.actList[i].end_d == 'null' || data.actList[i].end_d == null || data.actList[i].end_d == "" || data.actList[i].end_d == "0")
					    {
					    	tbodyContent += "<td class='act_endh_tag' style='width:10%; text-align: center;'></td>";
					    }
					    else
					    {
					    	tbodyContent += "<td class='act_endh_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_d+"</td>";
					    }
	                    
					    if(data.actList[i].end_t == 'null' || data.actList[i].end_t == null || data.actList[i].end_t == "" || data.actList[i].end_t == "0:0")
					    {
					    	tbodyContent += "<td class='act_endm_tag' style='width:10%; text-align: center;'></td>";
					    }
					    else
					    {
					    	tbodyContent +="<td class='act_endm_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_t+"</td></tr>";
					    }
					    tbody.append(tbodyContent);
					}
						
					if (data.actList.length < 10) 
					{
						for (var j = 0; j < 10 - data.actList.length; j++)
						{
							// 테이블 tr 빈공간 그려주는 부분.
							//actSaleListMakeBlock();
						}
					}
					
					var pageContent = "";

					// 페이징 다시그리기
					$("#pageSpace").children().remove();
					
					var actPageNum = data.ccPageNum;
					var startPageNum = data.page.startPageNum;
					var endPageNum = data.page.endPageNum;
					var firstPageCount = data.page.firstPageCount;
					var totalPageCount = data.page.totalPageCount;
					var prevPageNum = data.page.prevPageNum;
					var nextPageNum = data.page.nextPageNum;
					var prevStepPage = data.page.prevStepPage;
					var nextStepPage = data.page.nextStepPage;
					
					paging(actPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);
				}
			},
			error : function(request, status, error) {
				alert("페이징code:" + request.status + "\n" + "message:"+ request.responseText + "\n" + "error:" + error);
			}	
	});
}


//영업활동 검색 조건 추가
function addSearchActForm()
{
	if(count < 2)
	{
		$.ajax({
			type : 'post',
			url :'/actTypeCode',
			datatype : 'json',
			success:function(result){
				var addedFormDiv = document.getElementById("search_div");
				
				var str = "";
				    str+="<div class='ui left icon input'>";	// 시작일자
				    str+="<input type='text' placeholder='시작일자' id='ssale_actvy_strt"+count+"' name='ssale_actvy_strt"+count+"'class='ssale_actvy_strt' style='width: 100px;' readonly='readonly'>";
				    str+="</div>";
				    
				    str+="&nbsp;&nbsp;&nbsp;&nbsp;<div class='ui left icon input'>";	// 유형선택
				    str+="<select class='ssales_actvy_type_cd' name='sactvy_type_select"+count+"' id='sactvy_type_select"+count+"' style='height: 35px; background: #fff;'>";
				    str+="<option value=''>"+'활동유형'+"</option>";
				   
				    $.each(result.actTypeCd, function(i, list){
				    	str+="<option value="+list.sales_actvy_type_cd+" >"+list.sales_actvy_type_nm+"</option>";
				    });
				    str+="</div>";
				    
				    str+="<div class='ui left icon input'>";	// 영업활동
				    str+="<input type='text' placeholder='영업활동명' id='ssales_actvy_nm"+count+"'>";
				    str+="</div>";
				    
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='영업기회명'  style='width:180px;' onkeypress='opptSearchInput(event);' id='ssales_oppt_nm"+count+"' name='ssales_oppt_nm"+count+"' readonly='readonly'>";
				    str+="</div>";
				    str+="<input type='button' class='tiny ui blue basic button' id='act_opp_nm' value='영업기회'>";
				    
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='고객명' autofocus='autofocus' id='scust_nm"+count+"' name='scust_nm"+count+"' value='' style='margin-left: 3px;'>";
				    str+="<input type='hidden' class='tel_search' id='scust_id"+count+"' name='scust_id"+count+"' value=''>";
				    str+="</div>";
				    str+="<input type='button' class='tiny ui blue basic button' id='customer' value='고객'>";
				    
				    str+="<label onclick='delSearchActForm(this);' class='tiny ui button' style='margin-left: 3px !important;'>"+'X'+"</label>";
				    
					var addedDiv = document.createElement("div"); // 폼 생성
					
					addedDiv.id = "added_" + count; 	// 폼 Div에 ID 부여 (삭제를 위해)
					addedDiv.innerHTML = str; 			// 폼 Div안에 HTML삽입
					addedFormDiv.appendChild(addedDiv); // 삽입할 DIV에 생성한 폼 삽입

					// 달력 그려주는 함수.
				    sstartCalendar0(ctx, count);
					
					count++;
			
			},
			error:function(request){
				alert("error : " + request);
			}
		});
	}else{
		alert("검색 조건은 최대 3개 입니다.");
//	}
	}

//    document.listForm.count.value=count;
    // 다음 페이지에 몇개의 폼을 넘기는지 전달하기 위해 히든 폼에 카운트 저장
}
//영업기회 검색 조건 삭제
function delSearchActForm(obj){
    var addedFormDiv = document.getElementById("search_div");
    addedFormDiv.removeChild(obj.parentNode); // 폼 삭제 
    --count;
//
//    if(count >=1){ // 현재 폼이 두개 이상이면
//               var addedDiv = document.getElementById("added_"+(--count));
//               // 마지막으로 생성된 폼의 ID를 통해 Div객체를 가져옴
//               addedFormDiv.removeChild(addedDiv); // 폼 삭제 
//    }else{ // 마지막 폼만 남아있다면
//               document.baseForm.reset(); // 폼 내용 삭제
//    }
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
						alert("해당 영업활동을 삭제했습니다.");
						searchActSaleList($('#actPageNum').val());
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

/**
 * 삭제된 페이지로 이동
 * */
function delActListOpen()
{
	var ctx = $('#ctx').val();
	
	location.href = ctx + '/delActSaleList';
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
