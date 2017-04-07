/**
 * 키맨추가 관련 js파일
 */
function keymanListRefresh() {
 	window.opener.keymanList();
	self.close();
}
function keymancancle(){
	var a = confirm("취소하시겠습니까?");
	if(a){
		self.close();
	}else
		{
		
		}
}

function keymanAdd() {
	$(document).ready(function() {
 	var cont_id = $("#cont_id").val();
 	var ctx = $("#ctx").val();
 	var keymanData = { "cont_id": cont_id, "key_part": $("#key_part").val(), "key_pos": $("#key_pos").val()
				, "memo":$("#memo").val()};
	
		$.ajax({
			url : ctx+'/addKeyman',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.addResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					alert("keyman.js_ keymanAdd");
					location.href = ctx + '/';
				} else {
					alert(data.addResult);
					keymanListRefresh();
				}
			}, error : function(data){
				alert(data.addResult);
			}
		});
	});
}

function keymanMdfy(a) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		 
		var keymanData = { "cust_id": a, "key_part": $("#key_part").val(), "key_pos": $("#key_pos").val()
				,  "memo":$("#memo").val()};
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/mdfyKeyman',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				if(data.mdfyResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					alert("keyman.js_ keymanMdfy");
					location.href = ctx + '/';
				} else {
					alert(data.mdfyResult);
					keymanListRefresh();
				}
			}, error : function(data){
				alert(data.mdfyResult);
			}
		});
	});
}

//전체 체크 해제
function kmchkCancel() {
	$(document).ready(function() {
		$("#keymanListCheck").prop("checked", false);
	});
}

$(document).ready(function() {
	// 기업고객 리스트 체크박스 선택, 해제
	$("#keymanListCheck").click(function(){
		// 만약 전체 선택 체크박스가 체크된 상태일 경우
		if($("#keymanListCheck").prop("checked")){
			// 해당화면 전체 checkbox들을 체크해준다.
			$("input[id=kmChkbox]").prop("checked", true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			// 해당화면에 모든 checkbox들의 체크를 해제시킨다.
			$("input[id=kmChkbox]").prop("checked", false);
		}
	});
});