$(function(){
	var ctx = $('#ctx').val();
	uauthInit();
	uauthModify();
	uauthModifyConfirm(ctx);
	uauthCancel();
	PopupEvent(ctx);
	userAuthGo();
	authGo();
	choiceAuth();
});

function uauthInit(){
	$('#uauth_confirm').hide();
//	$('#searchAuthIuser_iuserId').hide();
}

function uauthCancel(){
	$('#uauth_cancel').click(function(){
		self.close();
	});
}

function choiceAuth(){
	$("#userAuthList tr, #authList tr").click(function(){
		$("#userAuthList tr td, #authList tr td").attr("style","background:white");
		$(this).children().attr("style","background:#5CD1E5");
		
		$("#auth_id").val($(this).children().children().val())
		$("#auth_nm").val($(this).children().text());		
	})
}

function userAuthGo(){
	$("#userAuthGo").click(function(){
//		var auth_id = $("#authList tr").find("[style=background:#5CD1E5]").find("input[type=hidden]").val();
//		var auth_nm = $("#authList tr").find("[style=background:#5CD1E5]").text();
		var auth_id = $("#auth_id").val();
		var auth_nm = $("#auth_nm").val();
		console.log(auth_id);
		console.log(auth_nm);
		if(auth_id != null || auth_id != ''){
			var tr = $("#authList tr").find("[style=background:#5CD1E5]").parent("tr");
			tr.remove();
		
			var tr = $("<tr>");
			var td = $("<td>");
			var input = $("<input>");
			input.attr("type","hidden");
			input.attr("name","auth_id");
			input.val(auth_id);
			td.append(input);
			td.text(auth_nm);
			tr.append(td);
			
			$("#userAuthList").append(tr);
		}else{
			alert("추가할 권한을 선택 주세요");
		}
	})
}

function authGo(){
	$("#authGo").click(function(){
		var auth_id = $("#userAuthList tr").find("[style=background:#5CD1E5]").find("input[type=hidden]").val();
		var auth_nm = $("#userAuthList tr").find("[style=background:#5CD1E5]").text();
		if(auth_id != null || auth_id != ''){
			var tr = $("#userAuthList tr").find("[style=background:#5CD1E5]").parent("tr");
			tr.remove();
		
			var tr = $("<tr>");
			var td = $("<td>");
			var input = $("<input>");
			input.attr("type","hidden");
			input.attr("name","auth_id");
			input.val(auth_id);
			td.append(input);
			td.text(auth_nm);
			tr.append(td);
			
			$("#authList").append(tr);
		}else{
			alert("제거할 사용자권한을 선택 주세요");
		}
	})
}

function uauthModify(){
	$('.auth_bt_position').delegate('#uauth_modify', 'click', function(event){
		event.preventDefault();
//		$('#uauth_id').attr("disabled", false);
		//$('#uu_user_id').attr("disabled", false);
		$('#uauth_confirm').show();
//		$('#searchAuthIuser_authId').show();
		//$('#searchAuthIuser_iuserId').show();
	});
}

function uauthModifyConfirm(ctx){
	
	$('#uauth_confirm').click(function(event){
		
		event.preventDefault();
		var authData = $("#userAuthList").find("input[type=hidden]");
		var auth_id_data = new Array();
		for(var i = 0; i < authData.length; i++){
			var obj = new Object();
			obj.auth_id = $(authData[i]).val();
			auth_id_data.push(obj);
		}
		
		var obj = {
				auth_id_data : auth_id_data,
				iuser_id :$('#iuser_id').val(),
		}
		
		var jsonData = JSON.stringify(obj);

		jQuery.ajaxSettings.traditional = true;
		
		$.ajax(
				{
				url : ctx +'/authIuserEdit',						//보낼 URL
				dataType : 'json',							//응답 받을 데이터 형식
				type : 'POST',								//서버 요청 방식
				data :  jsonData,	
				contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
				success : function(data){
					window.opener.editUserAuth(data.userAuthList);
					self.close();
				},error : function(e){
					alert(e.responseText);
				}
			});
		
		
	});
}

function PopupEvent(ctx){
	$('#searchAuthIuser_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_iuserId').click(function(event){
		window.open(ctx+'/searchAuthIuser_iuserId','newwindow1','width=800, height=700, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}