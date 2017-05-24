/**
 * 키맨추가 관련 js파일
 */

$(function(){
	var ctx = $('#ctx').val();
	contactListPopup(ctx);
});

function keymanListRefresh(cust_id) {
 	window.opener.keymanList(cust_id);
	self.close();
}

//연락처 상세정보 고객 리스트 팝업
function contactListPopup(ctx){
 	$('#contact').click(function(){
		window.open('/contactListPop','newwindow1',
				     'width=770, height=330, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//연락처 리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업 추가할 것
function contactNmSelect(cont_id,cont_nm){
 	window.opener.inputcontactNm(cont_id,cont_nm);
	self.close();
}

//연락처 리스트 부모창에서 받아온 정보 입력 추가할 것.
function inputcontactNm(cont_id,cont_nm){ 
 	$('#cont_id').val(cont_id);
	$('#cont_nm').val(cont_nm);
	$('#act_oppt_nm').attr('disabled',false).attr('readonly', false);
}

//키맨 생성 추가할 것
function keymanAdd() {
  	$(document).ready(function() {
	var ctx = $("#ctx").val();
	var cust_id = $("#cust_id").val();
	var keymanData = {"cont_id":$("#cont_id").val(), "cust_id": $("#cust_id").val(),
			"key_part": $("#key_part").val(), "key_pos": $("#key_pos").val(), "key_job" : $("#key_job").val(), 
			"memo":$("#memo").val()};
	
		$.ajax({
			url : ctx+'/addKeymancustcomp',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				//alert("성공!");
				if(data.addResult == 'standard/home/session_expire'){
					alert("세션이 만료되었습니다.");
					alert("로그인 페이지로 이동합니다.");
					alert("keyman.js_ keymanAdd");
					location.href = ctx + '/';
				} else {
					alert(data.addResult);
					keymanListRefresh(cust_id);
				}
			}, error : function(data){
				alert(data.addResult);
			}
		});
	});
}

//키맨 수정 추가할 것.
function keymanMdfy1(a, b) {
 	$(document).ready(function() {
		var ctx = $("#ctx").val();
		 
		var keymanData = {"cont_id":b, "cust_id": a, "key_part": $("#key_part").val(), "key_pos": $("#key_pos").val()
				,  "memo":$("#memo").val()};
		
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/ccmdfyKeyman',
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
					self.close();
					keymanListRefresh(a);
				}
			}, error : function(data){
				alert(data.mdfyResult);
			}
		});
	});
}

//키맨 삭제 추가할 것.
function keymanDelete() {
	var chked_val = [];
 	$(":checkbox[id='kmChkbox']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#cust_id").val();
		
		$.ajax({
			url : ctx+'/ccdelKeyman',
			type : 'POST',
			data :  JSON.stringify(chked_val),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				if(data.deleteResult == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				} else {
					alert(data.deleteResult);
					keymanList(cust_id);
				}
			},
			error : function(data){
				alert(data.deleteResult);
				history.back();
			}
		});
	} else {
		return;
	}
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