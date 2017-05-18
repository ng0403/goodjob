$(function(){
	var ctx = $('#ctx').val();
	PopupEvent(ctx);
	authUserInsert(ctx);
	authUserCancel();
});

function PopupEvent(ctx){
	$('#searchAuthIuser_authId').click(function(event){
		window.open(ctx+'/searchAuthIuser_authId','newwindow1','width=750, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	$('#searchAuthIuser_iuserId').click(function(event){
		window.open(ctx+'/searchAuthIuser_iuserId','newwindow1','width=1250, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

function userAuthGo(){
	$("#userAuthGo").click(function(){
		var auth_id = $("#authList tr").find("[style=background:#5CD1E5]").find("input[type=hidden]").val();
		var auth_nm = $("#authList tr").find("[style=background:#5CD1E5]").text();
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

function choiceAuth(){
	$("#userAuthList tr, #authList tr").click(function(){
		$("#userAuthList tr td, #authList tr td").attr("style","background:white");
		$(this).children().attr("style","background:#5CD1E5");
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

function authListOut(){
	var obj = {
			iuser_id : $('#iuser_id').val()
	}
	
	var jsonData = JSON.stringify(obj);
	$.ajax({
		
		url : '/authListAjax',						//보낼 URL
		dataType : 'json',							//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  jsonData,	
		contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
		success : function(data){
			$('#authList').html("");
			for(var i=0; i<data.authList.length;i++){
				var auth_id = data.authList[i].auth_id;
				var auth_nm = data.authList[i].auth_nm;
				
				var tr = $("<tr>");
				var td = $("<td>");
				var input = $("<input>");
				input.attr("type","hidden");
				input.attr("name","auth_id");
				input.val(auth_id);
				td.append(input);
				td.text(auth_nm);
				tr.append(td);
				
				$('#authList').append(tr);
			}
			$('#userAuthList').html("");
			for(var i=0; i<data.userAuthList.length;i++){
				var auth_id = data.userAuthList[i].auth_id;
				var auth_nm = data.userAuthList[i].auth_nm;
				
				var tr = $("<tr>");
				var td = $("<td>");
				var input = $("<input>");
				input.attr("type","hidden");
				input.attr("name","auth_id");
				input.val(auth_id);
				td.append(input);
				td.text(auth_nm);
				tr.append(td);
				
				$('#userAuthList').append(tr);
			}
			
		},error : function(e){
			alert("시스템에 문제가 발생하였습니다. 잠시후에 다시 시도해 주세요.")
		}
		
	});
}

function authUserInsert(ctx){
	$('#authUserInsert').click(function(){
		if($('#uu_user_id').val()==null || $('#uu_user_id').val()==""){
			alert("사용자 ID를 검색해주세요");
			return false;
		}
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
		
		$.ajax({
			
			url : ctx +'/authUserInsertData',						//보낼 URL
			dataType : 'json',							//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,	
			contentType : 'application/json;charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("등록 되었습니다.");	
				window.opener.editUserAuth(data);
				self.close();
				
			},error : function(e){
				alert("이미 있는 정보입니다.")
			}
			
		});
	});
}

function authUserCancel(){
	$('#authUserCancel').click(function(){
		self.close();
	});
}