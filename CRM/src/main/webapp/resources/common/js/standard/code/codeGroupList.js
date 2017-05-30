$(function(){
	var ctx = $('#ctx').val();
	allchk(ctx);
	
 	writecdgrpPopup(ctx);
	deletecdgrpClick(ctx); 
  	Deletecode(ctx);
	
	searchCodeList(ctx); //코드 검색
	searchcdgrpList(ctx); //코드그룹 검색
 	
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
 


//코드 그룹 검색
function searchcdgrpList(ctx){
	
	$('#search_btn').click(function(event){
		event.preventDefault();
		
		var cdgrpdata = {
				keyfield : $('#selectOption').val(),
				keyword : $('#title_text').val()
		}
		
		var jsonData = JSON.stringify(cdgrpdata);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/cdgrp',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("성공");
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
				
			}, error : function(data){
				alert(data);
			}
			
		});
		
	});
	
}

//코드 검색
function searchCodeList(ctx){
 	$('#userAuthSearch').click(function(event){
		event.preventDefault();
		var obj = {
				keyfield : $('#selectOption1').val(),
				keyword : $('#authuser_text').val()
		}
		
		var jsonData = JSON.stringify(obj);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/codesrc',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				$('#codemastertable tbody tr').remove();
			 	var args;
				for(var i=0; i<data.length;i++){
					var fst_reg_d = dateFormat(Number(data[i].fst_reg_d));
					args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data[i].code+'"></td>'
					    +'<td style="width: 15%;">'+data[i].cd_grp_id+'</td>' 
						+"<td style='width: 15%;'><a href='#' onclick=\"codeDetail('"+data[i].code+"','"+data[i].cd_grp_id+"' );\" id='cd_grd_id' value='"+ data[i].cd_grp_id +"'>"+data[i].code+"</a></td>"
						+'<td style="width: 15%;">'+data[i].cd_nm+'</td>'
						+'<td style="width: 30%;">'+data[i].cd_dtl_cont+ '</td>'
						+'<td style="width: 16%;">'+data[i].fst_reg_id +'</td>'
						+'<td style="width: 19%;">'+ data[i].fst_reg_dt +'</td></tr>'
						$('#codemastertable tbody').append(args);
				}                            
			   	$("#grp_id").val(data.cd_grp_id);
			},error : function(){
				alert("실패");
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
 		args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data.codevo[i].code+'"></td>'
		    +'<td style="width: 15%;">'+data.codevo[i].cd_grp_id+'</td>' 
			+"<td style='width: 15%;'><a href='#' onclick=\"codeDetail('"+data.codevo[i].code+"','"+data.codevo[i].cd_grp_id+"' );\" id='cd_grd_id' value='"+ data.codevo[i].cd_grp_id +"'>"+data.codevo[i].code+"</a></td>"
			+'<td style="width: 15%;">'+data.codevo[i].cd_nm+'</td>'
			+'<td style="width: 30%;">'+data.codevo[i].cd_dtl_cont+ '</td>'
			+'<td style="width: 16%;">'+data.codevo[i].fin_mdfy_id +'</td>'
			+'<td style="width: 19%;">'+ dateFormat(data.codevo[i].fin_mdfy_dt) +'</td></tr>'
			$('#codemastertable tbody').append(args);
	}                            
   	$("#grp_id").val(data.cd_grp_id);
 }



//코드 그룹 등록 팝업
function writecdgrpPopup(ctx){
	$('#writecdgrp').click(function(){
		window.open(ctx+'/cdgrpWritePopup','newwindow','width=800, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
 
//코드 그룹 등록
 	function cd_grp_insert(){
 	$('#active_flg_Y').click(function(){
		$('#active_flg_N').prop("checked", false);
	});
	$('#active_flg_N').click(function(){
		$('#active_flg_Y').prop("checked", false);
	});
  
 		var cd_grp_id= $('#cd_grp_id').val();
		var cd_grp_nm= $('#cd_grp_nm').val();
		
		if($('#active_flg_Y').is(":checked")){
			
			var act_yn = $('#active_flg_Y').val();
		}else{
			
			var act_yn = $('#active_flg_N').val();
		}
		
		window.opener.cdgrpSendConfirm(cd_grp_id, cd_grp_nm, act_yn);
		self.close();
 
	
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
			alert("등록 되었습니다.")
 			$('#codetable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = "<tr onclick=\"codeList('"+data[i].cd_grp_id +"');\"><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].cd_grp_id+"'></th>"
				+"<td style='width:30%;' id='authclick'><a href='#' onclick= \"cdgrpDetail('" + data[i].cd_grp_id + "');\">"+data[i].cd_grp_id+"</a></td>"
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
						var args = "<tr onclick=\"codeList('"+data[i].cd_grp_id +"');\"><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].cd_grp_id+"'></th>"
						+"<td style='width:30%;' id='authclick'><a href='#' onclick= \"cdgrpDetail('" + data[i].cd_grp_id + "');\">"+data[i].cd_grp_id+"</a></td>"
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
       if(cd_grp_id == "" || cd_grp_id == null)
    	   {
    	   alert("코드 그룹을 선택 후 추가버튼을 눌러 주세요.");
    	   return false;
    	   }
  		window.open('/codeWritePopup?cd_grp_id='+ cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

 		$('#writeauthuser').click(function(){ 
	
});

}

 

//코드 등록
function code_insert(){
 	$('#active_flg_Y').click(function(){
		$('#active_flg_N').prop("checked", false);
	});
	$('#active_flg_N').click(function(){
		$('#active_flg_Y').prop("checked", false);
	});
	
 		
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
 
	
}

//코드  등록 ajax
function codeSendConfirm(cd_grp_id, cd_nm, cd_dtl_cont, act_yn){
  	
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
 			alert("등록 되었습니다.");
			$('#codemastertable tbody tr').remove();
			for(var i=0; i<data.length;i++){
				var args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data[i].code+'"></td>'
			    +'<td style="width: 15%;">'+data[i].cd_grp_id+'</td>' 
				+"<td style='width: 15%;'><a href='#' id='cd_grd_id' value='"+ data[i].cd_grp_id +"'>"+data[i].code+"</a></td>"
				+'<td style="width: 15%;">'+data[i].cd_nm+'</td>'
				+'<td style="width: 30%;">'+data[i].cd_dtl_cont+ '</td>'
				+'<td style="width: 16%;">'+data[i].fst_reg_id +'</td>'
				+'<td style="width: 19%;">'+ dateFormat(data[i].fst_reg_dt) +'</td></tr>';
				
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
   window.open('/cdgrpDetailPopup?cd_grp_id='+ cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}
		
		
		
//코드 상세정보
function codeDetail(code, cd_grp_id){
     window.open('/codeDetailPopup?code='+ code +'&cd_grp_id='+cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

}

//코드그룹 수정
 function cdgrpModify(){
 	
	var cd_grp_id = $("#cd_grp_id").val();
 	var cd_grp_nm = $("#cd_grp_nm").val(); 
 	
	if($('#act_yn_y').is(":checked")){
		
		var act_yn = $('#act_yn_y').val();
	}else{
		
		var act_yn = $('#act_yn_n').val();
	} 
	window.opener.cdgrpUpdateConfirm(cd_grp_id, cd_grp_nm, act_yn);
	self.close(); 

}
 

function cdgrpUpdateConfirm(cd_grp_id, cd_grp_nm, act_yn){
 	var codejsonData = {
			"cd_grp_id" : cd_grp_id, "cd_grp_nm" : cd_grp_nm , "act_yn" : act_yn
		 }
		 
		 $.ajax({
				url : 'cdgrpModify',
				data : codejsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("수정 되었습니다.")
   				   $('#codetable tbody tr').remove();
						for(var i=0; i<data.cdgrpList.length;i++){
							var args = "<tr onclick=\"codeList('"+data.cdgrpList[i].cd_grp_id +"');\"><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data.cdgrpList[i].cd_grp_id+"'></th>"
							+"<td style='width:30%;' id='authclick'><a href='#' onclick=\"cdgrpDetail('"+data.cdgrpList[i].cd_grp_id +"');\">"+data.cdgrpList[i].cd_grp_id+"</a></td>"
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
	
	window.opener.codeUpdateConfirm(cd_nm, cd_dtl_cont, act_yn, code, cd_grp_id);
	self.close();
  
			 
}


function codeUpdateConfirm(cd_nm, cd_dtl_cont, act_yn, code, cd_grp_id){
 	var codejsonData = {
			"code" :code, "cd_grp_id" : cd_grp_id , "cd_nm" : cd_nm, "cd_dtl_cont" : cd_dtl_cont, "act_yn" : act_yn
		 }
		 
		 $.ajax({
				url : 'codeModify',
				data : codejsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("수정 되었습니다.");
					$('#codemastertable tbody tr').remove();
				 	var args;
 					for(var i=0; i<data.codelist.length;i++){
   						args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data.codelist[i].code+'"></td>'
						    +'<td style="width: 15%;">'+data.codelist[i].cd_grp_id+'</td>' 
							+"<td style='width: 15%;'><a href='#' onclick=\"codeDetail('"+data.codelist[i].code+"','"+data.codelist[i].cd_grp_id+"' );\" id='cd_grd_id' value='"+ data.codelist[i].cd_grp_id +"'>"+data.codelist[i].code+"</a></td>"
							+'<td style="width: 15%;">'+data.codelist[i].cd_nm+'</td>'
							+'<td style="width: 30%;">'+data.codelist[i].cd_dtl_cont+ '</td>'
							+'<td style="width: 16%;">'+data.codelist[i].fst_reg_id +'</td>'
							+'<td style="width: 19%;">'+ dateFormat(data.codelist[i].fst_reg_dt) +'</td></tr>'
							$('#codemastertable tbody').append(args);
					}                            
				   	$("#grp_id").val(data.cd_grp_id);
					
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
   window.open('/codeDetailPopup?code='+ code +'&cd_grp_id='+cd_grp_id,'newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

}


//코드 등록
function codeWriteConfirm(){
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
			alert("등록 되었습니다.")
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
  
 	