$(function(){
	checkEvent();
	buttonEvent();
});

//각 클래스명으로 체크된 갯수
function auth_checkCount(selectNodeClass){
	var count=0;
	var checkList =	$('.'+selectNodeClass);

	for(var i=0; i<$(checkList).length; i++){
		if($(checkList[i]).is(':checked')){
			count++;
		}
	}	
	return count;
}

//체크노드 찾기
function auth_checkedNode(ClassName){
	var node;
	var checkList =	$('.'+ClassName);
	for(var i=0; i<checkList.length; i++){
		if($(checkList[i]).is(':checked')){
			node = checkList[i];
		}
	}
	return node;
}

//체크에 대한 이벤트처리
function checkEvent(){
	var ctx = $('#ctx').val();
	
	//트리이벤트
	$('#allCheck').click(function(){
		var subcheckboxs = $('.menuCheck'); 
		if($(this).is(':checked')){
			$(subcheckboxs).prop('checked',true);
		}else{
			$(subcheckboxs).prop('checked',false);
		}
	});
}

//버튼 이벤트
function buttonEvent(){	
var ctx = $('#ctx').val();
	
	//선택버튼 누를시 
	$('#choiceMenu').click(function(){
		var count = auth_checkCount('menuCheck');
		if(count == 1){
			var node = auth_checkedNode('menuCheck');
			var conf = confirm("정말 선택하시겠습니까??");
			if(conf){
				var p_menu_id = $(node).val();
				var p_menu_name = $(node).parent().parent().find('#menu_name').text();
				if($(opener.document).find('#menu_name').val() == p_menu_name){
					$(opener.document).find('#menu_level').children('option[value="1"]').prop('selected',true);
				}else{
					$(opener.document).find('#menu_level').children('option[value="2"]').prop('selected',true);
				}
				$(opener.document).find('#p_menu_id').val(p_menu_id);
				$(opener.document).find('#p_menu_name').val(p_menu_name);
				self.close();
			}
		}else if(count > 1){
			alert("하나의 항목만 선택해주세요.");
		}else{
			alert("항목을 선택해주세요.");
		}
	});

	//트리이벤트
	$('#restMenu').click(function(){
		var checkboxs = $('#mastertable').find('input[type="checkbox"]'); 
		$(checkboxs).prop('checked',false);
		self.close();
	});
}