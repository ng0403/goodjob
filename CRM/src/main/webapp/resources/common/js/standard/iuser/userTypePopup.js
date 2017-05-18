$(function() {
	allChecked();
	checkCount();
	codeChoice();
	checkClear();
});

//사용자구분 코드 선택
function searchCheckNode(){
	var node;
	var checkList = $('.ab');
	
	for(var i=0; i<checkList.length; i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
};
//사용자구분 이름 선택
function searchCheckNode2(){
	var node2;
	var checkList2 = $('.cd');
	
	for(var i=0; i<checkList2.length; i++){
//		if($(checkList2[i]).is(':checked')){
			node2 = checkList2[i];
			alert(node2);
//		}
	}
	return node2;
};

function checkCount() {
	var count = 0;
	var checkList = $('.ab');
	for (var i = 0; i < checkList.length; i++) {
		if ($(checkList[i]).is(':checked')) {
			count++;
		}
	}
	return count;
};

function allChecked(){
	$('#allCheck').click(function(){
		if($('#allCheck').is(':checked')){
			$('.ab').prop('checked',true);
		}else{
			$('.ab').prop('checked',false);
		}
	});
}

function checkClear(){
	$('#codeClear').click(function(){
		$('#allCheck').prop('checked',false);
		$('.ab').prop('checked',false);
	});
}

function codeChoice() {
	$('#mastertable tbody tr').click(function(){
		var code=$(this).find('#code').text();
		var codeNm=$(this).find('#cd_nm').text();
		$(opener.document).find('#user_type_cd').val(code);
		$(opener.document).find('#user_type_nm').val(codeNm);
		self.close();
		
	});
}
