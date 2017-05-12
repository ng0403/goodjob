$(function(){
	var ctx = $('#ctx').val();
	var sales_actvy_id = $("#nowSales_actvy_id").val();
	
	startCalendar(ctx);
	endCalendar(ctx);
	actAddBtn();
	actMdfyBtn();
});

//추가버튼 클릭했을 때
function actAddBtn(){
	$("#actAddBtn").click(function() {
		$("#act_tab_tbody input[type='text']").css("background-color", "white");
		$("#memo").css("background-color", "white");
		$("#act_tab_tbody input[type='text']").val('').attr("disabled", false);
		
		$("#sales_actvy_type_nm").attr("disabled", false);
		$("#sales_actvy_type_nm").val("0");
		$("#actdiv_1").attr("disabled", false);
		$('#actdiv_1').prop("checked", false);
		$("#actdiv_2").attr("disabled", false);
		$('#actdiv_2').prop("checked", false);
		$("#sales_actvy_stat_nm").attr("disabled", false);
		$("#sales_actvy_stat_nm").val("0");
		$("#act_opp_nm").attr("disabled", false);
		$("#customer").attr("disabled", false);
		$("#strt_t_h").val("0");
		$("#strt_t_m").val("0");
		$("#strt_t_h").attr("disabled", false);
		$("#strt_t_m").attr("disabled", false);
		$("#end_t_h").val("0");
		$("#end_t_m").val("0");
		$("#end_t_h").attr("disabled", false);
		$("#end_t_m").attr("disabled", false);
		
		$("#sales_actvy_nm").attr("readonly", false);
		$("#memo").prop("readonly", false);
		$("#memo").prop("disabled", false);
		$("#memo").val("");
	
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
		$("#actAddBtnDiv").css("display", "block");
		$("#actMdfBtnDiv").css("display", "none");
	});
}

//편집버튼 클릭했을 때
function actMdfyBtn(){
	$("#actMdfBtn").click(function() {
		$("#act_tab_tbody input[type='text']").css("background-color", "white");
		$("#sales_oppt_nm").css("background-color","#EAEAEA");
		$("#cust_nm").css("background-color","#EAEAEA");
		$("#memo").css("background-color", "white");
		
		$('#sales_actvy_nm').attr("readonly", false);
		$("#act_tab_tbody input").attr("disabled", false);
		$("#sales_actvy_type_cd").attr("disabled", false);
		$("#actdiv_1").attr("disabled", false);
		$("#actdiv_2").attr("disabled", false);
		$("#sales_actvy_stat_cd").attr("disabled", false);
		$("#strt_t_h").attr("disabled",false);
		$("#strt_t_m").attr("disabled",false);
		$("#end_t_h").attr("disabled",false);
		$("#end_t_m").attr("disabled",false);
		$("#memo").attr("readonly", false);
		
		//할일을 클릭했을 때 영업기회명과 고객사 비활성화
		if($('#actdiv_1').is(':checked')){
			$("#sales_oppt_nm").css("background-color","#EAEAEA");
			$('#sales_oppt_nm').attr('disabled',true);
			$('#act_opp_nm').attr('disabled',true);
			$("#cust_nm").css("background-color","#EAEAEA");
			$("#cust_nm").attr('disabled',true);
			$("#customer").attr('disabled',true);
		}
		
		//버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "block");
	});
}

//추가에서 취소버튼 클릭했을 때
function actAddCancelBt(){
	$(document).ready(function() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	var ctx = $("#ctx").val();
	
	if(ynChk == true)
	{
		window.opener.location.href = ctx + '/act';
		self.close();
	}
  });
}

//추가하고 나서 처음으로 리셋
function actAddReset(){
	$(document).ready(function() {
	
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "block");
		$("#actAddBtnDiv").css("display", "none");
		$("#actMdfBtnDiv").css("display", "none");
		
		$("#act_tab_tbody input[type='text']").css("background-color", "#EAEAEA");
		$('#sales_actvy_nm').attr("disabled",true);
		$('#actdiv_1').attr("disabled",true);
		$('#actdiv_2').attr("disabled",true);
		$('#actdiv_1').prop("checked",false);
		$('#actdiv_2').prop("checked",false);
		$('#sales_actvy_type_nm').attr("disabled",true);
		$('#sales_oppt_nm').attr("disabled",true);
		$('#act_opp_nm').attr("disabled",true);
		$('#cust_nm').attr("disabled",true);
		$('#customer').attr("disabled",true);
		$('#sales_actvy_stat_nm').attr("disabled",true);
		$('#strt_d').attr("disabled",true);
		$('#strt_t_h').prop("checked", true);
		$('#strt_t_m').prop("checked", true);
		$('#end_d').attr("disabled",true);
		$('#end_t_h').attr("disabled",true);
		$('#end_t_m').attr("disabled",true);
		$('#memo').attr("disabled",true);
		
		$('#sales_actvy_nm').val("");
		$('#actdiv_1').val("");
		$('#actdiv_2').val("");
		$('#sales_actvy_type_nm').val("0");
		$('#sales_oppt_nm').val("");
		$('#cust_nm').val("");
		$('#sales_actvy_stat_nm').val("0");
		$('#strt_d').val("");
		$('#strt_t_h').val("0");
		$('#strt_t_m').val("0");
		$('#end_d').val("");
		$('#end_t_h').val("0");
		$('#end_t_m').val("0");
		$('#memo').val("");
  });
}

//취소버튼 클릭했을 때 상세정보 보여주기
function actMdfyCancelBt(){
	// 취소 버튼 기능
	$(document).ready(function() {
		
		var ynChk = confirm("수정을 취소하시겠습니까?");
		var salesId = $("#sales_actvy_id").val()
		
		if(ynChk)
		{
			window.opener.location.href = '/act';
			self.close();
			
			//location.href = '/actDetail?sales_actvy_id=' + salesId;
		}
	});
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day) + " "+ (hour==0 ? "00" : hour )+":"+(min==0 ? "00" : min);

	return retVal
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat_D(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function actTabInit(){
	$('#sales_actvy_nm').attr('disabled',true);
	$('#actdiv_1').attr('disabled',true);
	$('#actdiv_2').attr('disabled',true);
	$('#sales_actvy_type_nm').attr('disabled',true);
	$('#sales_oppt_nm').attr('disabled',true);
	$('#act_opp_nm').attr('disabled',true);
	$('#cust_nm').attr('disabled',true);
	$('#customer').attr('disabled',true);
	$('#sales_actvy_stat_nm').attr('disabled',true);
	$('#strt_d').attr('disabled',true);
	$('#strt_t_h').attr('disabled',true);
	$('#strt_t_m').attr('disabled',true);
	$('#end_d').attr('disabled',true);
	$('#end_t_h').attr('disabled',true);
	$('#end_t_m').attr('disabled',true);
	$('#memo').attr('disabled',true);
}

//시작일자 달력띄우기
function startCalendar(ctx){
	$("#strt_d").datepicker({
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

//종료일자 달력띄우기
function endCalendar(ctx){
	$("#end_d").datepicker({
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
	/* $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

//영업활동명을 클릭했을 때 상세정보
function actDetail(sales_actvy_id) {		
	var ctx = $("#ctx").val();
	var at_select = $("#sales_actvy_type_nm");
	var at_select_option = "";
	var adiv_select = $("#sales_actvy_div_nm");
	var adiv_select_option = "";
	var astat_select = $("#sales_actvy_stat_nm");
	var astat_select_option = "";
	
	location.href = ctx + '/actDetail?sales_actvy_id=' + sales_actvy_id;
	
}

//페이지 입력 이동
function pageInputAct(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var actPageNum = $("#actPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var ssales_actvy_nm = $("#ssales_actvy_nm").val();
			var ssales_actvy_div_cd = $("#ssales_actvy_div_cd").val();
			var sact_oppt_nm = $("#sact_oppt_nm").val();
			var sstart_day   = $("#sstart_day").val();
			var ssales_actvy_stat_cd = $("#ssales_actvy_stat_cd").val();
			if (parseInt(actPageNum) > parseInt(endPageNum) || parseInt(actPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#actPageInput").val("1");
			} else {
				if(ssales_actvy_nm == '' && ssales_actvy_div_cd == '0' && sact_oppt_nm == '' && sstart_day == ''&& ssales_actvy_stat_cd == '0'){
					actPaging(actPageNum);
				} else {
					actPaging(actPageNum);
				}
				
			}
		}
	event.stopPropagation();
}

/**
 * 페이징 수정.
 * */
//영업활동 페이징
function actPaging(actPageNum) {
	var ctx = $("#ctx").val();
	var tbody = $('#act_list_tbody');
	var tbodyContent = "";
	var act_search_div_id = $("#act_search_div_id").val();
	var act_search_txt  = $("#act_search_txt").val();
	
	var actData = { "actPageNum": actPageNum, 
					"act_search_div_id": act_search_div_id, 
					"act_search_txt" : act_search_txt
				  };
	
	$.ajax({
		url : ctx+'/actPaging',
		type : 'POST',
		data : actData,
		success : function(data) {
//			var start_d  = null;
//			var end_d = null;
//			var reg_dt = null;

			if(data.actListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/act';
			}else{
				tbody.children().remove();
			
			for (var i = 0; i < data.actList.length; i++) {
				/*start_d = dateFormat_D(Number(data.actList[i].strt_d));
				end_d = dateFormat_D(Number(data.actList[i].end_d));
				reg_dt = dateFormat(Number(data.actList[i].fst_reg_dt));*/
				
				tbodyContent = "<tr>"
									+"<th rowspan='2' style='width:2%;'><input type='checkbox' class='act_chek' name='act_del' value='"+data.actList[i].sales_actvy_id+"' onclick='actChkCancel();'></th>"
									+"<td rowspan='2' style='width:15%; text-align: left; padding-left:5px;' class='act_nm_tag' onclick=actDetail('"+data.actList[i].sales_actvy_id+"')>"
									+"<input type='hidden' value="+data.actList[i].sales_actvy_id+" id='hi_act_id'>"
									+"<a id='act_id_a' style='color: blue; cursor: pointer;' class='actClick'>"+data.actList[i].sales_actvy_nm+"</a></td>"
									+"<td rowspan='2' style='width:10%; text-align: center;' class='act_div_tag'>"+data.actList[i].sales_actvy_div_cd+"</td>";
									
								    if(data.actList[i].sales_oppt_nm == 'null' || data.actList[i].sales_oppt_nm == null || data.actList[i].sales_oppt_nm == ""){
								    	tbodyContent += "<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'></td>";
									}else{
										tbodyContent +="<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'>"+data.actList[i].sales_oppt_nm+"</td>";
									}
								    
								    tbodyContent +="<td rowspan='2' style='width:10%; text-align: center;' class='act_type_tag'>"+data.actList[i].sales_actvy_type_cd+"</td>"
									+"<td style='width:10%; text-align: center;' class='act_starth_tag'>"+data.actList[i].strt_d+"</td>";
									
								    if(data.actList[i].strt_t == 'null' || data.actList[i].strt_t == null || data.actList[i].strt_t == "" || data.actList[i].strt_t == "0"){
								    	tbodyContent += "<td class='act_startm_tag' style='width:10%; text-align: center;'></td>";
									}else{
										tbodyContent +="<td class='act_startm_tag' style='width:10%; text-align: center;'>"+data.actList[i].strt_t+"</td>";
									}
									
								    tbodyContent +="<td rowspan='2' class='act_stat_tag' style='width:5%; text-align: center;'>"+data.actList[i].sales_actvy_stat_cd+"</td>"
									+"<td rowspan='2' class='act_reg_tag' style='width:5%; text-align: center;'>"+data.actList[i].fst_reg_id_nm+"</td>"
				                    +"<td rowspan='2' class='act_dt_tag' style='width:10%; text-align: center;'>"+data.actList[i].fst_reg_dt+"</td></tr>"
				                    +"<tr>"
				                    +"<td class='act_endh_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_d+"</td>";
				                    
				                    if(data.actList[i].end_t == 'null' || data.actList[i].end_t == null || data.actList[i].end_t == "" || data.actList[i].end_t == "0"){
								    	tbodyContent += "<td class='act_endm_tag' style='width:10%; text-align: center;'></td>";
									}else{
										tbodyContent +="<td class='act_endm_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_t+"</td>";
									}
			   tbody.append(tbodyContent);
			}
			
			if(data.actList.length < 5){
				for(var j = 0; j < 5-data.actList.length; j++){
					tbodyContent ="<tr style='height:36px;'>"
						+"<th></th>"
						+"<td></td><td></td><td></td><td></td>"
						+"<td></td><td></td><td></td><td></td>"
						+/*"<td></td></tr>"*/
						+"<tr>"
						+"<td></td></tr>";
					tbody.append(tbodyContent);
				}
			}
			
			// directbtndiv
			var pageContent = "";
			// 페이징 다시그리기
			$("#directbtndiv").children().remove();

			if(data.page.startPageNum == 1 && data.page.endPageNum == 1)
			{
				pageContent = "<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>" 
				+"<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				+"<a> ◀ </a><input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
				+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
			}
			else if(data.actPageNum == data.page.startPageNum)
			{
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
								+"<a> ◀ </a> <input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
			} 
			else if(data.actPageNum == data.page.endPageNum)
			{
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
				                +"<a href='#' onclick=actPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
								+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a> ▶ </a>";
			} 
			else 
			{
				pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
				                +"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
								+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
								+"<a href='#' onclick=actPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=actPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
			}
			$("#directbtndiv").append(pageContent);
		  }
		},
		error : function(request,status,error) {
	          alert("페이징code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	});
}

//영업활동 조회 페이징
function schActPaging(actPageNum) {
	var ctx   = $("#ctx").val();
	var tbody = $('#act_list_tbody');
	var act_search_div_id = $("#act_search_div_id").val();
	var act_search_txt    = $("#act_search_txt").val();
	var tbodyContent = "";
	
	var actData = { "actPageNum": actPageNum, 
			"act_search_div_id": act_search_div_id, 
			"act_search_txt" : act_search_txt
	};
	
	$.ajax({
		url : ctx+'/actPaging',
		type : 'POST',
		data : actData,
		success : function(data) {
			/*
			var start_d  = null;
			var end_d = null;
			var reg_dt = null;
			var sstart_day  = null;*/
			
			if(data.actListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/act';
			}
			else
			{
				tbody.children().remove();
				
			/*	sstart_day = dateFormat_D(Number(data.sstart_day));*/
				
				$("#sact_oppt_nm").val(data.sact_oppt_nm);
				$("#ssales_actvy_div_cd").val(data.ssales_actvy_div_cd);
				$("#ssales_actvy_nm").val(data.ssales_actvy_nm);
				$("#sstart_day").val(data.sstart_day);
				$("#ssales_actvy_stat_cd").val(data.ssales_actvy_stat_cd);
				
				tbody.children().remove();
				
				for (var i = 0; i < data.actList.length; i++) {
					/*start_d = dateFormat_D(Number(data.actList[i].strt_d));
					end_d = dateFormat_D(Number(data.actList[i].end_d));
					reg_dt = dateFormat(Number(data.actList[i].fst_reg_dt));*/
					
					tbodyContent = "<tr>"
						+"<th rowspan='2' style='width:2%;'><input type='checkbox'></th>"
						+"<td rowspan='2' style='width:15%; text-align: left; padding-left:5px;' class='act_nm_tag' onclick=actTabFunc('"+data.actList[i].sales_actvy_id+"')>"
						+"<input type='hidden' value="+data.actList[i].sales_actvy_id+" id='hi_act_id'>"
						+"<a id='act_id_a' style='color: blue; cursor: pointer;' class='actClick'>"+data.actList[i].sales_actvy_nm+"</a></td>"
						+"<td rowspan='2' style='width:10%; text-align: center;' class='act_div_tag'>"+data.actList[i].sales_actvy_div_cd+"</td>"; 
					
					if(data.actList[i].sales_oppt_nm == 'null' || data.actList[i].sales_oppt_nm == null || data.actList[i].sales_oppt_nm == ""){
						tbodyContent += "<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'></td>";
					}else{
						tbodyContent +="<td class='act_oppt_tag' style='width:23%; text-align: left; padding-left:5px;' rowspan='2'>"+data.actList[i].sales_oppt_nm+"</td>";
					}
					
					tbodyContent +="<td rowspan='2' style='width:10%; text-align: center;' class='act_type_tag'>"+data.actList[i].sales_actvy_type_cd+"</td>"
					+"<td style='width:10%; text-align: center;' class='act_starth_tag'>"+data.actList[i].strt_d+"</td>";
					
					if(data.actList[i].strt_t == 'null' || data.actList[i].strt_t == null || data.actList[i].strt_t == "" || data.actList[i].strt_t == "0"){
						tbodyContent += "<td class='act_startm_tag' style='width:10%; text-align: center;'></td>";
					}else{
						tbodyContent +="<td class='act_startm_tag' style='width:10%; text-align: center;'>"+data.actList[i].strt_t+"</td>";
					}
					
					tbodyContent +="<td rowspan='2' class='act_stat_tag' style='width:5%;'>"+data.actList[i].sales_actvy_stat_cd+"</td>"
					+"<td rowspan='2' class='act_reg_tag' style='width:5%; text-align: center;'>"+data.actList[i].fst_reg_id_nm+"</td>"
					+"<td rowspan='2' class='act_dt_tag' style='width:10%; text-align: center;'>"+data.actList[i].fst_reg_dt+"</td></tr>"
					+"<tr>"
					+"<td class='act_endh_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_d+"</td>";
					
					if(data.actList[i].end_t == 'null' || data.actList[i].end_t == null || data.actList[i].end_t == "" || data.actList[i].end_t == "0"){
						tbodyContent += "<td class='act_endm_tag' style='width:10%; text-align: center;'></td>";
					}else{
						tbodyContent +="<td class='act_endm_tag' style='width:10%; text-align: center;'>"+data.actList[i].end_t+"</td>";
					}
					tbody.append(tbodyContent);
				}
				
				if(data.actList.length < 5){
					for(var j = 0; j < 5-data.actList.length; j++){
						tbodyContent ="<tr style='height:32px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+/*"<td></td></tr>"*/
							+"<tr>"
							+"<td></td></tr>";
						tbody.append(tbodyContent);
					}
				}
				
				
				var pageContent = "";
				// 페이징 다시그리기
				$("#act_page_div").children().remove();
				
				if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
					pageContent = "<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>" 
					+"<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<a> ◀ </a><input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
					+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
				} else if(data.actPageNum == data.page.startPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a> ◀ </a> <input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>" 
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
				} else if(data.actPageNum == data.page.endPageNum){
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
					+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.page.endPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a> ▶ </a>";
				} else {
					pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
					+"<input type='hidden' id='actPageNum' value='"+data.actPageNum+"'/>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum-1)+") id='pNum' style='text-decoration: none; color: blue;'> ◀ </a>"
					+"<input type='text' id='actPageInput' class='act_page_txt' value='"+data.actPageNum+"' onkeypress=\"pageInputAct(event);\"/>"
					+"<a href='#' onclick=schActPaging("+data.page.endPageNum+") id='pNum' style='text-decoration: none; color: blue;'> / "+data.page.endPageNum+"</a>"
					+"<a href='#' onclick=schActPaging("+(data.actPageNum+1)+") id='pNum' style='text-decoration: none; color: blue;'> ▶ </a>";
				}
				$("#act_page_div").append(pageContent);
			}
		},
		error : function(request,status,error) {
	          alert("조회페이징code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	      }
	});
}

//검색 엔터키 기능
function actSearchEnter(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#act_search_txt").val() == '') {
			alert("검색어를 입력하세요.")
			$("#act_search_txt").focus();
		} else {
			schActPaging(1);
		}
	}
	event.stopPropagation();
}

function actInsertClick(){
	$('#actAddBtn').click(function(){
		$('#actAddSaveBtn').css("display", "inline-block");
		$('#actCancelBtn').attr("disabled", false);
		$('#actModifyBtn').css("display", "none");
		$('#actAddBtn').css("display", "none");
		
		actContentEmpty();
		
		$('#sales_actvy_nm').attr('disabled',false);
		$('#actdiv_1').attr('disabled',false);
		$('#actdiv_2').attr('disabled',false);
		$('#sales_actvy_type_nm').attr('disabled',false);
		$('#sales_oppt_nm').attr('disabled',false);
		$('#act_opp_nm').attr('disabled',false);
		$('#cust_nm').attr('disabled',false);
		$('#customer').attr('disabled',false);
		$('#sales_actvy_stat_nm').attr('disabled',false);
		$('#strt_d').attr('disabled',false);
		$('#strt_t_h').attr('disabled',false);
		$('#strt_t_m').attr('disabled',false);
		$('#end_d').attr('disabled',false);
		$('#end_t_h').attr('disabled',false);
		$('#end_t_m').attr('disabled',false);
		$('#memo').attr('disabled',false);
	});

}

//영업활동 등록
function actInsert(ctx) {
	$(document).ready(function() {
//		var actTbody = $('#act_list_tbody');
//		var actListContent = "";
//		var strt_t_h = $('#strt_t_h').val();
//		var strt_t_m = $('#strt_t_m').val();
//		var end_t_h = $('#end_t_h').val();
//		var end_t_m = $('#end_t_m').val();
//		
		if($('#actdiv_1').is(':checked')) {
			var sales_actvy_div_nm1=$('#actdiv_1').val();
		} else {
			var sales_actvy_div_nm1=$('#actdiv_2').val();		
		}	
		
		if($('#sales_actvy_nm').val() == "" || $('#sales_actvy_nm').val() == null)
		{
			alert("영업활동명을 입력해 주세요");
			return false;
		}
		else if($('#sales_actvy_type_cd').val() == "0" || $('#sales_actvy_type_cd').val() == null)
		{
			alert("활동유형을 선택해 주세요");
			return false;			
		}
		else if($('#sales_actvy_stat_cd').val() == "0"|| $('#sales_actvy_stat_cd').val() == null)
		{
			alert("상태를 선택해 주세요");
			return false;
		}
		else if($('#strt_d').val() == "" || $('#strt_d').val() == null)
		{
			alert("시작일자를 선택해 주세요");
			return false;
		}
		else if($('#strt_t_h').val() == "0" || $('#strt_t_h').val() == null)
		{
			alert("시를 선택해 주세요");
			return false;
		}
		else if($('#strt_t_m').val() == "0" || $('#strt_t_m').val() == null)
		{
			alert("분을 선택해 주세요");
			return false;
		}

		var strt_t = $('#strt_t_h').val()+":"+$('#strt_t_m').val();
		var end_t = $('#end_t_h').val()+":"+$('#end_t_m').val();
		
		$.ajax({
			type : 'POST',
			url : '/actInsert',
			data : {
				sales_actvy_nm : $('#sales_actvy_nm').val(),
				sales_actvy_div_cd : sales_actvy_div_nm1,
				sales_actvy_type_cd : $('#sales_actvy_type_cd').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				cust_id : $('#cust_id').val(),
				sales_actvy_stat_cd : $('#sales_actvy_stat_cd').val(),
				strt_d : $('#strt_d').val(),
				strt_t : strt_t,
				strt_t_h : $('#strt_t_h').val(),
				strt_t_m : $('#strt_t_m').val(),
				end_d : $('#end_d').val(),
				end_t : end_t,
				end_t_h : $('#end_t_h').val(),
				end_t_m : $('#end_t_m').val(),
		        memo : $('#memo').val()
			},
			dataType : "json",
			success : function(data) {
				
				var ynChk = confirm("해당 정보를 추가하시겠습니까?");
				if(ynChk)
				{
					alert("영업활동이 등록되었습니다.");
					
					window.opener.location.href = '/act';
					self.close();
				}
				else
				{
					alert("취소되었습니다.");
				}
				
			},
			error : function(request,status,error) {
		          alert("활동등록code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		    }
		});

	});
}

/**
 * 영업활동 수정 버트 클릭 시
 * */
function actModify(ctx)
{
	if($('#actdiv_1').is(':checked')) {
		var sales_actvy_div_nm1=$('#actdiv_1').val();
	} else {
		var sales_actvy_div_nm1=$('#actdiv_2').val();		
	}	
	
	if($('#sales_actvy_nm').val() == "" || $('#sales_actvy_nm').val() == null)
	{
		alert("영업활동명을 입력해 주세요");
		return false;
	}
//	else if($('#sales_actvy_type_cd').val() == "0" || $('#sales_actvy_type_cd').val() == null)
//	{
//		alert("활동유형을 선택해 주세요");
//		return false;			
//	}
//	else if($('#sales_actvy_stat_cd').val() == "0"|| $('#sales_actvy_stat_cd').val() == null)
//	{
//		alert("상태를 선택해 주세요");
//		return false;
//	}
//	else if($('#strt_d').val() == "" || $('#strt_d').val() == null)
//	{
//		alert("시작일자를 선택해 주세요");
//		return false;
//	}
//	else if($('#strt_t_h').val() == "0" || $('#strt_t_h').val() == null)
//	{
//		alert("시를 선택해 주세요");
//		return false;
//	}
//	else if($('#strt_t_m').val() == "0" || $('#strt_t_m').val() == null)
//	{
//		alert("분을 선택해 주세요");
//		return false;
//	}
//	else if($('#end_d').val() == "" || $('#end_d').val() == null)
//	{
//		alert("종료일자를 선택해 주세요");
//		return false;
//	}
//	else if($('#end_t_h').val() == "0" || $('#end_t_h').val() == null)
//	{
//		alert("시를 선택해 주세요");
//		return false;
//	}
//	else if($('#end_t_m').val() =="0" || $('#end_t_m').val() == null)
//	{
//		alert("분을 선택해 주세요");
//		return false;
//	}

	var strt_t = $('#strt_t_h').val()+":"+$('#strt_t_m').val();
	var end_t = $('#end_t_h').val()+":"+$('#end_t_m').val();
	
	$.ajax({
		type : 'POST',
		url : '/actEdit',
		data : {
			sales_actvy_id : $('#sales_actvy_id').val(),
			sales_actvy_nm : $('#sales_actvy_nm').val(),
			sales_actvy_div_cd : sales_actvy_div_nm1,
			sales_actvy_type_cd : $('#sales_actvy_type_cd').val(),
			sales_oppt_id : $('#sales_oppt_id').val(),
			cust_id : $('#cust_id').val(),
			sales_actvy_stat_cd : $('#sales_actvy_stat_cd').val(),
			strt_d : $('#strt_d').val(),
			strt_t : strt_t,
			strt_t_h : $('#strt_t_h').val(),
			strt_t_m : $('#strt_t_m').val(),
			end_d : $('#end_d').val(),
			end_t : end_t,
			end_t_h : $('#end_t_h').val(),
			end_t_m : $('#end_t_m').val(),
	        memo : $('#memo').val()
		},
		dataType : "json",
		success : function(data) {
			var ynChk = confirm("해당 정보를 수정하시겠습니까?");
			
			if(ynChk)
			{
				alert("정상 수정되었습니다.");
				
				window.opener.location.href = '/act';
				self.close();
			}
			else
			{
				alert("취소되었습니다.");
			}
			
		},
		error : function(request,status,error) {
	          alert("활동등록code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	});
}

/**
 * 영업활동 삭제 버튼 클릭 시
 * */
function actDelBt(sales_actvy_id)
{
	var dsales_actvy_id = sales_actvy_id;
	
	$.ajax({
		type : 'POST',
		url : '/actDelete',
		data : {
			sales_actvy_id : dsales_actvy_id,
		},
		dataType : "json",
		success : function(data) {
			var ynChk = confirm("해당 정보를 삭제하시겠습니까?");
			
			if(ynChk)
			{
				alert("해당 영업활동이 삭제되었습니다.");
				
				window.opener.location.href = '/act';
				self.close();
			}
			else
			{
				alert("취소되었습니다.");
			}
			
		},
		error : function(request,status,error) {
	          alert("활동등록code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	});
	
}


//활동구분 클릭했을 때 활성화 비활성화 설정해주기
function actDivCheck()
{
	if($('#actdiv_1').is(':checked')){
		 $("#sales_oppt_nm").css("background-color","#EAEAEA");
	     $('#sales_oppt_nm').attr("disabled",true);
	     $('#sales_oppt_nm').val("");
	     $('#sales_oppt_id').val("");
		 $('#act_opp_nm').attr("disabled",true);
		 $("#cust_nm").css("background-color", "#EAEAEA");
		 $('#cust_nm').attr("disabled",true);
		 $('#cust_nm').val("");
		 $('#cust_id').val("");
		 $('#customer').attr("disabled",true);
	}else{
		 $("#sales_oppt_nm").css("background-color","white");
		 $("#cust_nm").css("background-color", "white");
		 $('#sales_oppt_nm').attr("disabled",false);
		 $('#act_opp_nm').attr("disabled",false);
		 $('#cust_nm').attr("disabled",false);
		 $('#customer').attr("disabled",false);
	}
}

function reset()
{
	 $('#sales_actvy_nm').val("");
	 $('#actdiv_1').prop("checked",false);
	 $('#actdiv_2').prop("checked",false);
	 $('#sales_actvy_type_nm').val("0");
	 $('#sales_oppt_nm').val("");
	 $('#cust_nm').val("");
	 $('#sales_actvy_stat_nm').val("0");
	 $('#strt_d').val("");
	 $('#strt_t_h').val("0");
	 $('#strt_t_m').val("0");
	 $('#end_d').val("");
	 $('#end_t_h').val("0");
	 $('#end_t_m').val("0");
	 $('#memo').val("");
}

function searchActDiv(){
	if($('#ssales_actvy_div_cd').val()=='0001'){
		$('#sact_oppt_nm').attr("disabled",true);
	}else{
		$('#sact_oppt_nm').attr("disabled",false);
	}
}


// 수정 버튼 눌렀을 시 ajax부분 (기존)
//$(document).ready(function() {
//var actTbody = $('#act_list_tbody');
//var actListContent = "";
//
//if($('#actdiv_1').is(':checked')){
//	var sales_actvy_div_nm1=$('#actdiv_1').val();
//	
//} else {
//	var sales_actvy_div_nm1=$('#actdiv_2').val();		
//}		
//var obj = {
//		sales_actvy_id : $("#nowSales_actvy_id").val(),
//		sales_actvy_nm : $('#sales_actvy_nm').val(),
//		sales_actvy_div_cd : sales_actvy_div_nm1,
//		sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
//		sales_oppt_id : $('#sales_oppt_id').val(),
//		sales_oppt_nm : $('#sales_oppt_nm').val(),
//		cust_id : $('#cust_id').val(),
//		sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
//		strt_d : $('#strt_d').val(),
//		strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
//		end_d : $('#end_d').val(),
//		end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
//        memo : $('#memo').val()/*,
//        actPageNum : $('#actPageNum').val()*/
//}
//
//var jsonData = JSON.stringify(obj);		//JSON Object 생성
//jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
//
//});


