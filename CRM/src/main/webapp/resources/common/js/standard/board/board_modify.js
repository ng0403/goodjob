 
  

//보드 목록
 function board_list() {
	var BOARD_MNG_NO = $("#BOARD_MNG_NO").val();
	if(confirm("목록으로 가시겠습니까?")){
	location.href = "/boardInqr?BOARD_MNG_NO=" + BOARD_MNG_NO;
	}else
		{
		return false;
		}
	}
  
function board_save(){ 
 	   var formObj = $("form[role='form']");
 	   	if(confirm("수정하시겠습니까?")){
	 	$("form[name='modifyForm']").attr("action", "/board_modify").submit();
 	   	}else{
 	   		return false;
 	   	}
 }
	 