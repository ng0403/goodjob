  $(document).ready(function(){

	 replyPaging(1); 
})
 
 
//댓글 리스트 그냥 페이징
function replyPaging(boardPageNum) {
   	var ctx = $("#ctx").val();
  	var BOARD_NO = $("#BOARD_NO").val();
 	var tbody = $('#reply_list_tbody');
	var tbodyContent = "";
  	var boardData = { "boardPageNum": boardPageNum, "BOARD_NO" : BOARD_NO
 			        };
	
	$.ajax({
		url : '/search_replyInqr',
		type : 'POST',
		data : boardData,
		success : function(data) {
   				tbody.children().remove();
			
			 for (var i = 0; i < data.reply_list.length; i++) { 
 				tbodyContent +='<tr><th class="col-sm-1">' + data.reply_list[i].created_BY + '</th>'
 				+ '<th class="col-sm-10">' + data.reply_list[i].reply_CONTENT+ '<span style="float:right" class="glyphicon glyphicon-remove" id = '+data.reply_list[i].reply_NO+' onclick="remove_reply(this.id);"></span></th></tr>';
        		}
 			   tbody.append(tbodyContent);
 	 
			
			if(data.reply_list.length < 10){
 				for(var i=0; i<10-data.replyListSize; i++){
					tbodyContent='<tr style="height: 35.5px;"><td scope="row" style="width:10%"></td>' 
 						+'<td style="width:10%;"></td></tr>';
					tbody.append(tbodyContent);
				}		
			}
			
			var pageContent = ""; 
			
			//시작
			
			$("#pageSpace").children().remove();
			var ccPageNum = data.boardPageNum;
 			var startPageNum = data.page.startPageNum;
			var endPageNum = data.page.endPageNum;
			var firstPageCount = data.page.firstPageCount;
 			var totalPageCount = data.page.totalPageCount;
 			var prevPageNum = data.page.prevPageNum;
 			var nextPageNum = data.page.nextPageNum;
 			var prevStepPage = data.page.prevStepPage;
 			var nextStepPage = data.page.nextStepPage;
 			paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);
			 
		},
		error : function() {
			alert("제가 문제입니다 페이징");
		}
	});
} 
 

function paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage){
	var endPageNo = $("<input>");
	endPageNo.attr({"type":"hidden","id":"endPageNum","value":endPageNum});
	var ccPageeNo = $("<input>");
	ccPageeNo.attr({"type":"hidden","id":"ccPageNum","value":ccPageNum});
	$("#pageSpace").append(endPageNo).append(ccPageeNo);
	
	var stepPrev = $("<a>");
	stepPrev.addClass("prev");
	stepPrev.html("◀◀");
	if(ccPageNum != firstPageCount){
		stepPrev.attr("href","javascript:boardPaging("+prevStepPage+")");
	}
	$("#pageSpace").append(stepPrev);
	var prevPage = $("<a>");
	prevPage.addClass("prev");
	prevPage.html("◀");
	console.log(prevPageNum);
	console.log(firstPageCount);
	if(ccPageNum != firstPageCount){
		prevPage.attr("href","javascript:boardPaging("+prevPageNum+")");
	}
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.attr("href","javascript:boardPaging("+i+")");
		ccPage.html(i);
		if(i == ccPageNum){
			var b = $("<b>");
			ccPage.addClass("choice");
			ccPage.attr("id","pNum");
			b.append(ccPage);
			$("#pageSpace").append(b);
		}else{
			$("#pageSpace").append(ccPage);
		}
	}
	var nextPage = $("<a>");
	nextPage.addClass("next");
	nextPage.html("▶");
	if(ccPageNum != totalPageCount){
		nextPage.attr("href","javascript:boardPaging("+nextPageNum+")");
	}
	$("#pageSpace").append(nextPage);
	var stepNext = $("<a>");
	stepNext.addClass("next");
	stepNext.html("▶▶");
	if(ccPageNum != totalPageCount){
		stepNext.attr("href","javascript:boardPaging("+nextStepPage+")");
	}
	$("#pageSpace").append(stepNext);
}


//댓글 추가
		function reply_add(){  	
		 var BOARD_MNG_NO = $("#BOARD_MNG_NO").val();
 		 var BOARD_NO = $("#BOARD_NO").val(); 
		 var REPLY_CONTENT_OBJ = $("#reply_content");
		 var REPLY_CONTENT = REPLY_CONTENT_OBJ.val();
 	  	 var CREATED_BY = "${SessionID}" ;
	  	$.ajax({
			type:'POST',
			url:'/reply_add',
			headers: { 
			      "Content-Type": "application/json",
			      "X-HTTP-Method-Override": "POST" },
			dataType:'text',
			processData: false,
			contentType: false,
			data:  JSON.stringify({"board_NO":BOARD_NO, "reply_CONTENT":REPLY_CONTENT, "created_BY":CREATED_BY, "board_MNG_NO":BOARD_MNG_NO}),
			success:function(result){
				alert("succsss");
				replyPaging(1);
	   			 $("#reply_content").blur(); 

				} 
		          
			      });
		} 
	 
	 
	 
