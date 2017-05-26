$(function(){
	var ctx = $('#ctx').val();
	allchk(ctx);
	searchAuthList(ctx);
	writecdgrpPopup(ctx);
	deletecdgrpClick(ctx);
	searchAuthUserList(ctx);
	searchAuthMenuList(ctx);
	
	searchAuthMenuClick(ctx);
	writeAuthMenuPopup(ctx);
	ckDeleteAuthMenu(ctx);
	
	searchAuthUserClick(ctx);
	/*writeAuthUserPopup(ctx);*/
	Deletecode(ctx);
	
	
	codeWriteConfirm(); //코드 등록 함수
	cdgrpWriteConfirm(); // 코드그룹 등록 함수
 });

function AuthcheckCount(tabID) {
	var count = 0;
	var checkList = $('#'+tabID+' tbody').find('input[type="checkBox"]');
	for (var i = 0; i < checkList.length; i++) {
		if ($(checkList[i]).is(':checked')) {
			count++;
		}
	}
	return count;
};

function allchk(ctx){
	
	var test3=$('#codetable tbody').find('input[type=checkbox]');
	
	if($('#allCheck').is(":checked")){
		
		$(test3).prop("checked", true);

	}else{
		
		$(test3).prop("checked", false);

	}
}


function writecdgrpPopup(ctx){
	$('#writecdgrp').click(function(){
		window.open(ctx+'/cdgrpWritePopup','newwindow','width=800, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}




function editAuth(data){
	
	$('#authtable tbody tr').remove();
	for(var i=0; i<data.length;i++){
		var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
		+"<td style='width:30%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
		+"<td style='width:31%;'>"+data[i].auth_nm+"</td>";
		
		if(data[i].act_yn=='Y'){
			args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
		}else{
			args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
		}
		$('#authtable tbody').append(args);
	}
}

function searchAuthUserList(ctx){
	$('#userAuthSearch').click(function(event){
		event.preventDefault();
		var obj = {
				keyfield : $('#tabDiv1').find('select').val(),
				keyword : $('#authuser_text').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/authUser',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				editUserAuth(data);
			},error : function(){
				alert("실패");
			}
			
		});

	});
}

function searchAuthMenuList(ctx){
	$('#menuAuthSearch').click(function(){
		var obj = {
				keyfield : $('#tabDiv2').find('select').val(),
				keyword : $('#authmenu_text').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/authMenu',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				editAuthMenu(data)
			}
			,error : function(){
				alert("실패");
			}
			
		});
		
	});
}

function searchAuthMenuClick(ctx){
	$('#menumastertable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		
		var auth_id = $(this).parent().parent().children().children().eq(0).val();	// a태그 parent (상위 태그)로 가서 찾아가는 방식.
		var menu_id = $(this).parent().next().children('input').val();
		
		console.log(auth_id);
		console.log(menu_id);

		window.open(ctx+"/authMenuViewPopup?auth_id="+auth_id+"&menu_id="+menu_id,'newwindow','width=800, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
			+ (day < 10 ? "0" + day : day);

	return retVal
}



function editAuthMenu(data){

$('#menumastertable tbody tr').remove();
	for(var i=0; i<data.length; i++){
		var args = '<tr>'
			+'<td style="width:5%;"><input type="checkbox" id="ckselect" value="'+data[i].auth_id+'"><input type="hidden" id="auth_id" value="'+data[i].auth_id+'"></td>'
			+'<td style="width:20%;"><a href="#">'+data[i].auth_nm+'</a></td>'
			+'<td style="width:25%;"><input type="hidden" value="'+data[i].menu_id+'"/>'+data[i].menu_nm+'</td>'
			+'<td id="authmenuflg" style="width:10%;">'+data[i].deflt_yn+'</td>'
			+'<td id="authmenuflg" style="width:10%;">'+data[i].retrv_yn+'</td>'
			+'<td id="authmenuflg" style="width:10%;">'+data[i].creat_yn+'</td>'
			+'<td id="authmenuflg" style="width:10%;">'+data[i].mdfy_yn+'</td>'
			+'<td id="authmenuflg" style="width:10%;">'+data[i].del_yn+'</td></tr>';
		$('#menumastertable tbody').append(args);
	}
}


function insertAuthMenu(data){
	$('#menumastertable tbody tr').remove();

	for(var i=0; i<data.length; i++){
		var args = "<tr><th><input type='checkbox' id='ckselect' value='"+data[i].auth_id+"'></th>"
		+"<td style='width:20%;'><a href='#'>"+data[i].auth_id+"</a></td>"
		+"<td style='width:20%;'>"+data[i].auth_name+"</td>"
		+"<td style='width:20%;'>"+data[i].menu_name+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].retrieve_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].create_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].update_flg+"</td>"
		+"<td id='authmenuflg' style='width:10%;'>"+data[i].delete_flg+"</td></tr>";
		$('#menumastertable tbody').append(args);
	}
}

function writeAuthMenuPopup(ctx){
	$('#writeauthmenu').click(function(){
		alert("hi");
		window.open(ctx+'/authmenuwritePopup','newwindow','width=800, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

}

function ckDeleteAuthMenu(ctx){
	
	$('#deleteauthmenu').click(function(){
		if(AuthcheckCount('menumastertable') == 0){
			alert('삭제할 항목을 선택해주세요.');
		}else{
			var ckdata = $('#menumastertable tbody').find('input[type=checkbox]');
			var data = new Array();
			for(var i=0; i<ckdata.length; i++){
				if($(ckdata[i]).is(':checked')){
					var obj = new Object();
					obj.auth_id = $(ckdata[i]).val();
					obj.menu_id = $(ckdata[i]).parent().next().next().next().children('input[type="hidden"]').val();
					data.push(obj);
				}
			}
			var jsonData = JSON.stringify(data);
			jQuery.ajaxSettings.traditional = true;

			$.ajax({
				url : ctx+'/authMenuDelete',					//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert('삭제되었습니다.');
					editAuthMenu(data);
				},error : function(e){
					alert(e.responseText);
				}

			});
		}
	});
	
}

/*사용자권한 상세 등록 삭제*/
function searchAuthUserClick(ctx){
	$('#ausermastertable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		
		var userId=$(this).parent().parent().children().children().val();
		var userNm=$(this).text();
		console.log(userId);
		console.log(userNm);
		window.open(ctx+"/authUserViewPopup?userId="+userId+"&userNm="+userNm,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
//		window.open(ctx+"/authUserViewPopup?authUser="+$(this).text()+"&userId="+userId,'newwindow','width=400, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
 


//코드 그룹 검색
function searchcdgrpList(ctx){
	
	$('#search_btn').click(function(event){
		event.preventDefault();
		
		var cdgrpdata = {
				keyfield : $('#selectOption').val(),
				keyword : $('#title_text').val()
		}
		
		var jsonData = JSON.stringify(authdata);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/auth',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				$('#authtable tbody tr').remove();

				for(var i=0; i<data.length;i++){
					var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
					+"<td style='width:30%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
					+"<td style='width:31%;'>"+data[i].auth_nm+"</td>";
					
					if(data[i].act_yn=='Y'){
						args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
					}else{
						args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
					}
					$('#authtable tbody').append(args);

				}
				
			}, error : function(data){
				alert(data);
			}
			
		});
		
	});
	
}




//코드그룹명 클릭시 코드 리스트 출력.
function codeList(cd_grp_id){
 	$.ajax({
		
		url : '/codeList',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  cd_grp_id,						//파라미터 { 'aaa' : 'bbb' }
		contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
		success : function(data){
			editCode(data);
		},error : function(){
			alert("실패");
		}
		
	});
}

//코드 리스트 출력
function editCode(data){
  	$('#codemastertable tbody tr').remove();
 	var args;
	for(var i=0; i<data.codevo.length;i++){
		var fst_reg_d = dateFormat(Number(data.codevo[i].fst_reg_d));
		args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data.codevo[i].code+'"></td>'
		    +'<td style="width: 15%;">'+data.codevo[i].cd_grp_id+'</td>' 
			+"<td style='width: 15%;'><a href='#' onclick=\"codeDetail('"+data.codevo[i].code+"','"+data.codevo[i].cd_grp_id+"' );\" id='cd_grd_id' value='"+ data.codevo[i].cd_grp_id +"'>"+data.codevo[i].code+"</a></td>"
			+'<td style="width: 15%;">'+data.codevo[i].cd_nm+'</td>'
			+'<td style="width: 30%;">'+data.codevo[i].cd_dtl_cont+ '</td>'
			+'<td style="width: 16%;">'+data.codevo[i].fst_reg_id +'</td>'
			+'<td style="width: 19%;">'+ data.codevo[i].fst_reg_dt +'</td></tr>'
			$('#codemastertable tbody').append(args);
	}                            
   	$("#grp_id").val(data.cd_grp_id);
 }
 
//코드 그룹 등록
function cdgrpWriteConfirm(){
	alert("코드 그룹 등록");
	$('#active_flg_Y').click(function(){
		$('#active_flg_N').prop("checked", false);
	});
	$('#active_flg_N').click(function(){
		$('#active_flg_Y').prop("checked", false);
	});
	
	$('#cd_grp_confirm').click(function(){
		
		var cd_grp_id= $('#cd_grp_id').val();
		var cd_grp_nm= $('#cd_grp_nm').val();
		
		if($('#active_flg_Y').is(":checked")){
			
			var act_yn = $('#active_flg_Y').val();
		}else{
			
			var act_yn = $('#active_flg_N').val();
		}
		
		window.opener.cdgrpSendConfirm(cd_grp_id, cd_grp_nm, act_yn);
		self.close();
		
	});
	
}

//코드 그룹 등록 ajax
function cdgrpSendConfirm(cd_grp_id, cd_grp_nm, act_yn){
	alert("코드 그룹 등록 ajax");
	
	var ctx = $('#ctx').val();
	
	var cdgrpdata = {
			"cd_grp_id" : cd_grp_id,
			"cd_grp_nm" : cd_grp_nm,
			"act_yn" : act_yn
	}
 	
 	$.ajax({
		url : 'cdgrpInsert',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  cdgrpdata,						//파라미터 { 'aaa' : 'bbb' }
		success : function(data){
			alert("입력 성공")
			$('#codetable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].cd_grp_id+"'></th>"
				+"<td style='width:30%;' id='authclick'><a href='#' onclick='codeList('data[i].cd_grp_id');'>"+data[i].cd_grp_id+"</a></td>"
				+"<td style='width:31%;'>"+data[i].cd_grp_nm+"</td>";
				
				if(data[i].act_yn=='Y'){
					args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
				}else{
					args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
				}
				$('#codetable tbody').append(args);
			}
		},
		error : function(data){
			alert("오류" + data);
		}
		
	});
	

}


//코드그룹 삭제
function deletecdgrpClick(ctx){
	
	$('.auth_bt_position').delegate('#deleteauth', 'click', function(event){
	
		event.preventDefault();
		
		var authcheck = $('#codetable tbody').find('input[type=checkbox]');
		
		var data = [];

		for(var i=0, b=0; i<authcheck.length; i++){	
		
			if($(authcheck[i]).is(':checked')){
				data[b]=$(authcheck[i]).val();
				b++;
			}
			
		}
		
		if(data == null || data == ""){
			alert("체크된 값이 없습니다.");
			return false;
		}
		
		var jsonData = JSON.stringify(data);

		jQuery.ajaxSettings.traditional = true;
		
		$.ajax(
				{
				url : ctx+'/cdgrpDelete',				//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert("삭제하였습니다.");
					$('#codetable tbody tr').remove();
				  
					for(var i=0; i<data.length;i++){
						var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].cd_grp_id+"'></th>"
						+"<td style='width:30%;' id='authclick'><a href='#' onclick='codeList('"+ data[i].cd_grp_id + "');'>"+data[i].cd_grp_id+"</a></td>"
						+"<td style='width:31%;'>"+data[i].cd_grp_nm+"</td>";
						
						if(data[i].act_yn=='Y'){
							args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
						}else{
							args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
						}
						$('#codetable tbody').append(args);
					}
					
				},error : function(data){
					alert("에러");
				}
		
				});
	});
}

//코드 등록 팝업
function writecode(){
       var cd_grp_id = $("#grp_id").val();
  		window.open('/codeWritePopup?cd_grp_id='+ cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

 		$('#writeauthuser').click(function(){ 
	
});

}

 

//코드 등록
function codeWriteConfirm(){
	alert("여길");
	$('#active_flg_Y').click(function(){
		$('#active_flg_N').prop("checked", false);
	});
	$('#active_flg_N').click(function(){
		$('#active_flg_Y').prop("checked", false);
	});
	
	$('#cd_grp_confirm').click(function(){
		
		var cd_grp_id= $('#cd_grp_id').val();
		var cd_nm = $("#cd_nm").val();
		var cd_dtl_cont= $('#cd_dtl_cont').val();
		
		if($('#active_flg_Y').is(":checked")){
			
			var act_yn = $('#active_flg_Y').val();
		}else{
			
			var act_yn = $('#active_flg_N').val();
		}
		
		window.opener.codeSendConfirm(cd_grp_id, cd_nm, cd_dtl_cont, act_yn);
		self.close();
		
	});
	
}

//코드  등록 ajax
function codeSendConfirm(cd_grp_id, cd_nm, cd_dtl_cont, act_yn){
	alert("코드 등록 ajax"); 
 	
	var cdgrpdata = {
			"cd_grp_id" : cd_grp_id,
			"cd_nm" : cd_nm,
			"cd_dtl_cont" : cd_dtl_cont,
			"act_yn" : act_yn
	}
 	
 	$.ajax({
		url : 'codeInsert',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  cdgrpdata,						//파라미터 { 'aaa' : 'bbb' }
		success : function(data){
 			alert("입력 성공");
			$('#codemastertable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data[i].code+'"></td>'
			    +'<td style="width: 15%;">'+data[i].cd_grp_id+'</td>' 
				+"<td style='width: 15%;'><a href='#' id='cd_grd_id' value='"+ data[i].cd_grp_id +"'>"+data[i].code+"</a></td>"
				+'<td style="width: 15%;">'+data[i].cd_nm+'</td>'
				+'<td style="width: 30%;">'+data[i].cd_dtl_cont+ '</td>'
				+'<td style="width: 16%;">'+data[i].fst_reg_id +'</td>'
				+'<td style="width: 19%;">'+ data[i].fst_reg_dt +'</td></tr>';
				
				/*if(data[i].act_yn=='Y'){
					args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
				}else{
					args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
				}*/
				$('#codemastertable tbody').append(args);
			}
		},
		error : function(data){
			alert("오류" + data);
		}
		
	});
	

}


//코드 삭제
function Deletecode(ctx){
 	$('#deleteauthuser').click(function(){
		if(AuthcheckCount('codemastertable') == 0){
			alert('삭제할 항목을 선택해주세요.');
		}else{
			var ckdata = $('#codemastertable tbody').find('input[type=checkbox]');
			var data = new Array();
			for(var i=0; i<ckdata.length; i++){
				if($(ckdata[i]).is(':checked')){
					var obj = new Object();
					var cd_grp_id = $("#grp_id").val();
					alert(cd_grp_id);
					obj.code = $(ckdata[i]).val();
/*					obj.id_nm = $(ckdata[i]).parent().next().next().next().next().text();
*/					data.push(obj);
					data.push(cd_grp_id);
				}
			}
			var jsonData = JSON.stringify(data);
			jQuery.ajaxSettings.traditional = true;

			$.ajax({		
				url : ctx+'/codeDelete',					//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert('삭제되었습니다.' );
					editUserAuth(data);
				},error : function(e){
					alert(e.responseText);
				}

			});
		}
		
	});
	
} 

//코드 상세정보
function cdgrpDetail(cd_grp_id){
	alert("hello detail");
  window.open('/cdgrpDetailPopup?cd_grp_id='+ cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}
		
		
		
//코드 상세정보
function codeDetail(code, cd_grp_id){
	alert("hello detail");
    window.open('/codeDetailPopup?code='+ code +'&cd_grp_id='+cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

}

//코드그룹 수정
function cdgrpModify(){
	var cd_grp_id = $("#cd_grp_id").val();
 	var cd_grp_nm = $("#cd_grp_nm").val();
	var act_yn = $("#act_yn").val();
 	
	if($('#act_yn_y').is(":checked")){
		
		var act_yn = $('#act_yn_y').val();
	}else{
		
		var act_yn = $('#act_yn_n').val();
	} 
 
	 var codejsonData = {
				"cd_grp_id" : cd_grp_id, "cd_grp_nm" : cd_grp_nm , "act_yn" : act_yn
			 }
			 
			 $.ajax({
					url : 'cdgrpModify',
					data : codejsonData, //보낼 데이터값
					dataType : 'json',
					type : "POST", //
	 				success : function(data) { 
   						 alert("수정하였습니다."); 
   						$('#codetable tbody tr').remove();
   						for(var i=0; i<data.cdgrpList.length;i++){
   							var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data.cdgrpList[i].cd_grp_id+"'></th>"
   							+"<td style='width:30%;' id='authclick'><a href='#' onclick='codeList('data.cdgrpList[i].cd_grp_id');'>"+data.cdgrpList[i].cd_grp_id+"</a></td>"
   							+"<td style='width:31%;'>"+data.cdgrpList[i].cd_grp_nm+"</td>";
   							
   							if(data.cdgrpList[i].act_yn=='Y'){
   								args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
   							}else{
   								args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
   							}
   							$('#codetable tbody').append(args);
   						}
   						self.close();
 
		 			},
		 			
					error : function(e) {
						alert("오류발생");
					}
				});	  
			 
}

function syhello(){
	alert("외쳐라");
}

//코드 수정
function codeUpdate() {
	
	var cd_nm = $("#cd_nm").val();
 	var cd_dtl_cont = $("#cd_dtl_cont").val();
	var act_yn = $("#act_yn").val();
	var code= $("#code").val();
	var cd_grp_id = $("#cd_grp_id").val();
	
	if($('#act_yn_y').is(":checked")){
		
		var act_yn = $('#act_yn_y').val();
	}else{
		
		var act_yn = $('#act_yn_n').val();
	}
 
 
	 var codejsonData = {
				"code" :code, "cd_grp_id" : cd_grp_id , "cd_nm" : cd_nm, "cd_dtl_cont" : cd_dtl_cont, "act_yn" : act_yn
			 }
			 
			 $.ajax({
					url : 'codeModify',
					data : codejsonData, //보낼 데이터값
					dataType : 'json',
					type : "POST", //
	 				success : function(data) { 
						alert("수정이 성공하였습니당");
		  			    self.close();
		 			},
		 			
					error : function(e) {
						alert("오류발생");
					}
				});	  
			 
}


function closebtn() {
	
	if(confirm("창을 닫으시겠습니까?"))
		{
		self.close();
	  }
}



//코드 상세정보
function codeDetail(code, cd_grp_id){
	alert("hello detail");
  window.open('/codeDetailPopup?code='+ code +'&cd_grp_id='+cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

}


//코드 등록
function codeWriteConfirm(){
	alert("여길");
	$('#active_flg_Y').click(function(){
		$('#active_flg_N').prop("checked", false);
	});
	$('#active_flg_N').click(function(){
		$('#active_flg_Y').prop("checked", false);
	});
	
	$('#cd_grp_confirm').click(function(){
		
		var cd_grp_id= $('#cd_grp_id').val();
		var cd_nm = $("#cd_nm").val();
		var cd_dtl_cont= $('#cd_dtl_cont').val();
		
		if($('#active_flg_Y').is(":checked")){
			
			var act_yn = $('#active_flg_Y').val();
		}else{
			
			var act_yn = $('#active_flg_N').val();
		}
		
		window.opener.codeSendConfirm(cd_grp_id, cd_nm, cd_dtl_cont, act_yn);
		self.close();
		
	});
	
}

//코드  등록 ajax
function codeSendConfirm(cd_grp_id, cd_nm, cd_dtl_cont, act_yn){
	alert("코드 등록 ajax"); 
	
	var cdgrpdata = {
			"cd_grp_id" : cd_grp_id,
			"cd_nm" : cd_nm,
			"cd_dtl_cont" : cd_dtl_cont,
			"act_yn" : act_yn
	}
	
	$.ajax({
		url : 'codeInsert',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  cdgrpdata,						//파라미터 { 'aaa' : 'bbb' }
		success : function(data){
			alert("입력 성공");
			$('#codemastertable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data[i].code+'"></td>'
			    +'<td style="width: 15%;">'+data[i].cd_grp_id+'</td>' 
				+"<td style='width: 15%;'><a href='#' id='cd_grd_id' value='"+ data[i].cd_grp_id +"'>"+data[i].code+"</a></td>"
				+'<td style="width: 15%;">'+data[i].cd_nm+'</td>'
				+'<td style="width: 30%;">'+data[i].cd_dtl_cont+ '</td>'
				+'<td style="width: 16%;">'+data[i].fst_reg_id +'</td>'
				+'<td style="width: 19%;">'+ data[i].fst_reg_dt +'</td></tr>';
				
				/*if(data[i].act_yn=='Y'){
					args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
				}else{
					args+="<td style='width:30%;'>"+"비활성화"+"</td></tr>";
				}*/
				$('#codemastertable tbody').append(args);
			}
		},
		error : function(data){
			alert("오류" + data);
		}
		
	});
	

}
//코드 수정
function codeUpdate() {
	
	var cd_nm = $("#cd_nm").val();
	var cd_dtl_cont = $("#cd_dtl_cont").val();
	var act_yn = $("#act_yn").val();
	var code= $("#code").val();
	var cd_grp_id = $("#cd_grp_id").val();
	
	if($('#act_yn_y').is(":checked")){
		
		var act_yn = $('#act_yn_y').val();
	}else{
		
		var act_yn = $('#act_yn_n').val();
	}


	 var codejsonData = {
				"code" :code, "cd_grp_id" : cd_grp_id , "cd_nm" : cd_nm, "cd_dtl_cont" : cd_dtl_cont, "act_yn" : act_yn
			 }
			 
			 $.ajax({
					url : 'codeModify',
					data : codejsonData, //보낼 데이터값
					dataType : 'json',
					type : "POST", //
	 				success : function(data) { 
						alert("수정이 성공하였습니당");
		  			    self.close();
		 			},
		 			
					error : function(e) {
						alert("오류발생");
					}
				});	  
			 
}


 	