$(function(){
	var ctx = $('#ctx').val();
	allchk(ctx);
	searchAuthList(ctx);
	searchAuthClick(ctx);
	writeAuthPopup(ctx);
	deleteAuthClick(ctx);
	searchAuthUserList(ctx);
	searchAuthMenuList(ctx);
	
	searchAuthMenuClick(ctx);
	writeAuthMenuPopup(ctx);
	ckDeleteAuthMenu(ctx);
	
	searchAuthUserClick(ctx);
	writeAuthUserPopup(ctx);
	DeleteAuthUser(ctx);
	
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
	
	var test3=$('#authtable tbody').find('input[type=checkbox]');
	
	if($('#allCheck').is(":checked")){
		
		$(test3).prop("checked", true);

	}else{
		
		$(test3).prop("checked", false);

	}
}
/* 정렬 버튼 클릭 시 처리 함수 */
function setOrder(order_by,flg){
	$("#order_by").val(order_by);
	if($("#order_sc").val()=='DESC'){
		$("#order_sc").val('ASC');
	}else{
		$("#order_sc").val('DESC');
	}
	if(flg=='auth')authList();
	else if(flg=='userAuth')authUserList();
	else if(flg=='authMenu')authMenuList();
}
function authList(){
	var authdata = {
			keyfield : $('#selectOption').val(),
			keyword : $('#title_text').val(),
			order_by : $("#order_by").val(),
			order_sc : $("#order_sc").val()
	}
	
	var jsonData = JSON.stringify(authdata);
	jQuery.ajaxSettings.traditional = true;
	
	$.ajax({
		
		url : '/auth',					//보낼 URL
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
}
function searchAuthList(ctx){
	
	$('#search_btn').click(function(event){
		event.preventDefault();
		
		authList();
		
	});
	
}

function writeAuthPopup(ctx){
	$('#writeauth').click(function(){
		window.open(ctx+'/authwritePopup','newwindow','width=800, height=300, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function pauthSendConfirm(pauth_id, pauth_name, pauth_flg){
	
	var ctx = $('#ctx').val();
	
	var authdata = {
			auth_id : pauth_id,
			auth_nm : pauth_name,
			act_yn : pauth_flg
	}
	
	var jsonData = JSON.stringify(authdata);
	jQuery.ajaxSettings.traditional = true;
	
	$.ajax({
		
		url : ctx+'/authInsert',					//보낼 URL
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
		},
		error : function(data){
			alert(data);
		}
		
	});
	

}

function deleteAuthClick(ctx){
	
	$('.auth_bt_position').delegate('#deleteauth', 'click', function(event){
	
		event.preventDefault();
		
		var authcheck = $('#authtable tbody').find('input[type=checkbox]');
		
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
				url : ctx+'/authDelete',				//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					
					$('#authtable tbody tr').remove();
					for(var i=0; i<data.length;i++){
						var args = "<tr><td style='width:9%;' scope='row'><input type='checkbox' class='ab' id='checkauth' value='"+data[i].auth_id+"'></th>"
						+"<td style='width:30%;' id='authclick'><a href='#'>"+data[i].auth_id+"</a></td>"
						+"<td style='width:31%;'>"+data[i].auth_nm+"</td>";
						
						if(data[i].act_yn=='Y'){
							args+="<td style='width:30%;'>"+"활성화"+"</td></tr>";
						}else{
							args+="<td style='width:35%;'>"+"비활성화"+"</td></tr>";
						}
						$('#authtable tbody').append(args);
					}
					
				},error : function(data){
					alert("에러");
				}
		
				});
	});
}

function searchAuthClick(ctx){
	$('#authtable tbody').delegate('a', 'click', function(event){
		event.preventDefault();
		window.open(ctx+"/authViewPopup?auth="+$(this).text(),'newwindow','width=800, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
function authUserList(){
	var order_by = $("#order_by").val();
	if(order_by=='fin_mdfy_dt'){
		order_by = 'fst_reg_d';
	}
	var obj = {
			keyfield : $('#tabDiv1').find('select').val(),
			keyword : $('#authuser_text').val(),
			order_by : order_by,
			order_sc : $("#order_sc").val()
	}
	
	var jsonData = JSON.stringify(obj);
	jQuery.ajaxSettings.traditional = true;
	
	$.ajax({
		
		url : '/authUser',					//보낼 URL
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
}
function searchAuthUserList(ctx){
	$('#userAuthSearch').click(function(event){
		event.preventDefault();
		
		authUserList();
	});
}
function authMenuList(){
	var order_by = $("#order_by").val();
	if(order_by=='fin_mdfy_dt'){
		order_by = 'fst_reg_d';
	}
	var obj = {
			keyfield : $('#tabDiv2').find('select').val(),
			keyword : $('#authmenu_text').val(),
			order_by : order_by,
			order_sc : $("#order_sc").val()
	}
	
	var jsonData = JSON.stringify(obj);
	jQuery.ajaxSettings.traditional = true;
	
	$.ajax({
		
		url : '/authMenu',					//보낼 URL
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
}
function searchAuthMenuList(ctx){
	$('#menuAuthSearch').click(function(){
		
		authMenuList();
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

function editUserAuth(data){
	$('#ausermastertable tbody tr').remove();
	for(var i=0; i<data.length;i++){
		var fst_reg_d = dateFormat(Number(data[i].fst_reg_d));
		
		var args = '<tr><td style="width: 5%;"><input type="checkbox" id="ckselect" value="'+data[i].iuser_id+'"></td>'
			+'<td style="width: 15%;"><a href="#">'+data[i].id_nm+'</a></td>'
			+'<td style="width: 15%;">'+data[i].iuser_nm+'</td>'
			+'<td style="width: 30%;">'+data[i].auth_nm+ '</td>'
			+'<td style="width: 16%;">'+data[i].fst_reg_id+'</td>'
			+'<td style="width: 19%;">'+fst_reg_d+'</td></tr>'
		$('#ausermastertable tbody').append(args);
	}
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

function writeAuthUserPopup(ctx){
	$('#writeauthuser').click(function(){
		window.open(ctx+'/authUserWritePopup','newwindow','width=900, height=500, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});

}

function DeleteAuthUser(ctx){
	$('#deleteauthuser').click(function(){
		if(AuthcheckCount('ausermastertable') == 0){
			alert('삭제할 항목을 선택해주세요.');
		}else{
			var ckdata = $('#ausermastertable tbody').find('input[type=checkbox]');
			var data = new Array();
			for(var i=0; i<ckdata.length; i++){
				if($(ckdata[i]).is(':checked')){
					var obj = new Object();
					obj.iuser_id = $(ckdata[i]).val();
//					obj.id_nm = $(ckdata[i]).parent().next().next().next().next().text();
					data.push(obj);
				}
			}
			var jsonData = JSON.stringify(data);
			jQuery.ajaxSettings.traditional = true;

			$.ajax({		
				url : ctx+'/authUserDelete',					//보낼 URL
				dataType : 'json',						//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
				contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					alert('삭제되었습니다.');
					editUserAuth(data);
				},error : function(e){
					alert(e.responseText);
				}

			});
		}
		
	});
	
}