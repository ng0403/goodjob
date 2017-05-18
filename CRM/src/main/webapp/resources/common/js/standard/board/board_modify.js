 
   $(document).ready(function(){
		var file_div = $('#file_div');
		alert(file_div.toSource());

   })


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

function deleteFile(FILE_CD){
	
	var file_div = $('#file_div'); 
	var divContent = "";
if(confirm("파일을 삭제 하시겠습니까?" + FILE_CD)){	
	$.ajax({
        url : '/file_remove',
        headers : {
              "Content-Type" : "application/json",
              "X-HTTP-Method-Override" : "POST"
           },
        data : FILE_CD,
        dataType : 'text',
        processData: false,
        contentType: false,
        type: 'POST',
        success : function(result) {
        	file_div.children().remove();
             if(result =="success")
              {
             	divContent += "<input type='file' multiple='multiple' name='filedata' id='filedata'> ";
             	file_div.append(divContent);
                }
           else{
              alert("오류!");
           }
        
        }
        })  
}
}
	 