 	var count = 0;


$(function(){
	var ctx = $('#ctx').val();	
	compListPopup(ctx); 
	callAllChk();
	contListPopup(ctx);
  });

$(document).ready(function(){
	$("#english").hide();
	 
 
});
//13자리 날짜 변환 함수
function dateFormat(timestamp) {
  	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
 	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day) + " "+ (hour==0 ? "00" : hour )+":"+(min==0 ? "00" : min );

	return retVal
}
 

//모두체크
function callAllChk(){
	$(document).ready(function() {  
		var checkbox=$('#keymantable tbody').find('input[type=checkbox]');
		
		if($('#callCheck').is(":checked")){
			$(checkbox).prop("checked", true);
		}else{
			$(checkbox).prop("checked", false);
		}
	});
}

//전체 체크 해제
function callChkCancel() {
	$(document).ready(function() {
		$("#callCheck").prop("checked", false);
	});
}


//체크박스 개수 검색함수
function checkCount(){
	   var count=0;
	   var checkList = $('.call_chek');
	   for(var i=0; i<checkList.size(); i++){
	      if($(checkList[i]).is(':checked')){
	         count++;
	      }
	   }
	   return count;
	};

//페이지 입력 이동
function pageInputCall(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var contactPageNum = $("#contactPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var cont_nm = $("#cont_nm").val();
			var email = $("#email").val();
			var ph = $("#ph").val();
 			if (parseInt(callPageNum) > parseInt(endPageNum) || parseInt(callPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#callPageInput").val("1");
			} else {
				if(cont_nm == '' && email == '' && call_tel == ''){
					keymanPaging(contactPageNum);
				} else {
					keymanPaging(contactPageNum);
				}
			}
		}
	event.stopPropagation();
}
	
// 초성 검색 페이징
function searchAcnkEvent(keymanPageNum, keyword){
  		var ctx = $("#ctx").val();
  		
		var cont_nm = $("#search_cont_nm").val();
		var cust_nm = $("#search_cust_nm").val();
		
		var cont_nm0 = $("#search_cont_nm0").val();
		var cust_nm0 = $("#search_cust_nm0").val();
		
		var cont_nm1 = $("#search_cont_nm1").val(); 
		var cust_nm1 = $("#search_cust_nm1").val();
		
		
  		var callData = { "keymanPageNum": keymanPageNum, 
				"keyword": keyword, "cust_nm" : cust_nm, "cont_nm" : cont_nm, cust_nm0 : cust_nm0, cont_nm0 : cont_nm0, cust_nm1:cust_nm1, cont_nm1:cont_nm1
  		        };
		
		if(keyword == '전체'){
			location.href = ctx + '/keyman';
			return;
		}else{
			var tbody = $('#keyman_list_tbody');
			var tbodyContent = "";
			
			$.ajax({
				url: ctx+'/searchKeywordKM',
				type: 'POST',
				data: callData,
				dataType:'json',
				success: function(data){
  					if(data.keymanListSize == 0){
						alert("조회된 결과가 없습니다.");
						location.href = ctx+'/contact';
					} else {
						tbody.children().remove();
						
						for (var i = 0; i < data.keymanList.length; i++) {
							 
							  tbodyContent +='<tr><td style="width:3%; text-align:center"><input type="checkbox" id="call_chek" class="call_chek" name="contact_del" value="'+data.keymanList[i].cont_id+'"></td>'
							    +'<td style="text-align: left; padding-left:5px;">' + data.keymanList[i].cust_nm +'</td>'  
							    +"<td><a href='#' onclick=\"keymanDetailClick('"+data.keymanList[i].cont_id+"' , '"+data.keymanList[i].cust_id+"')\"; style='cursor: pointer;' class='callClick'>" + data.keymanList[i].cont_nm +"</a></td>";
			        			tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.keymanList[i].cdept_nm+'</td>'
			        			+'<td style="width:20%; text-align: center;">'+data.keymanList[i].key_pos+'</td>'
			        			+'<td style="width:20%; text-align: center;">'+data.keymanList[i].key_part+'</td>'
			        			+'<td style="width:10%; text-align: center;">'+data.keymanList[i].key_job+'</td>'; 
			  
						}
  												
 
							tbody.append(tbodyContent);
						    tbodyContent = "";

						}
 					 
						$("#pageSpace").children().remove();
						var ccPageNum = data.ccPageNum;
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
				error: function(){
					alert("error");
				}
			});
		}
}
 

//검색 엔터키 기능
function contactSearchEnter(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	
 	if (keycode == '13') {
		if ($("#cont_nm1").val() == '' && $("#email").val() == '' && $("#ph").val() == '' ) {
			alert("검색어를 입력하세요.")
			$("#cont_nm1").focus();
		} else {
			searchAcnkEvent(1,'');
		}
	}
	event.stopPropagation();
}


//고객사 검색 조건 추가
function addForm(){
	if(count<2){

				var addedFormDiv = document.getElementById("search_div");
				var str = "";
				str+="<br><div class='ui left icon input'>";
				str+="<input type='text' placeholder='고객사' style='margin-right: 3px;' class='inp_search'd id='search_cust_nm"+count+"' name='search_cust_nm"+count+"' onkeydown='contactSearchEnter(event);'/>";
			    str+="<i class='user icon'></i>";
			    str+="</div>";
			    
			    str+="<div class='ui left icon input'>";
			    str+="<input type='text' placeholder='이름' style='margin-right: 3px;' class='inp_search' id='search_cont_nm"+count+"' name='search_cont_nm"+count+"'  maxlength='9' onkeydown='contactSearchEnter(event);'   style='ime-mode:disabled;'/>";
			    str+="<i class='mail icon'></i>";
			    str+="</div>";
			    
			   
			    
			    str+="<label  onclick='delForm(this)' id='schDelBth' class='ui button' >"+'-'+"</label>";

			    
				    var addedDiv = document.createElement("div"); 	// 폼 생성
				    addedDiv.id = "added_"+count; 					// 폼 Div에 ID 부여 (삭제를 위해)
				    addedDiv.innerHTML  = str; 						// 폼 Div안에 HTML삽입
				    addedFormDiv.appendChild(addedDiv); 			// 삽입할 DIV에 생성한 폼 삽입

				    count++;
//			},
//			error:function(request){
//				alert("error : " + request);
//			}
//		});
	}else{
		alert("검색 조건은 최대 3개 입니다.");

	}
	//    document.listForm.count.value=count;
    // 다음 페이지에 몇개의 폼을 넘기는지 전달하기 위해 히든 폼에 카운트 저장
}


//고객사 검색 조건 삭제
function delForm(obj){
    var addedFormDiv = document.getElementById("search_div");
        addedFormDiv.removeChild(obj.parentNode); 				// 폼 삭제 
        --count;
} 

 
// 키맨 리스트 그냥 페이징
function keymanPaging(keymanPageNum) {
    var ctx = $("#ctx").val();
	var tbody = $('#keyman_list_tbody');
	var tbodyContent = "";
 
	
	$.ajax({
		url : ctx+'/keymanPaging',
		type : 'POST',
		data : keymanPageNum,
		success : function(data) {
 			if(data.contactListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/keyman';
			}else{ 
 				
				tbody.children().remove();
			
			for (var i = 0; i < data.keymanList.length; i++) {
 
				  tbodyContent +='<tr><td style="width:3%; text-align:center"><input type="checkbox" id="call_chek" class="call_chek" name="contact_del" value="'+data.keymanList[i].cont_id+'"></td>'
				    +'<td style="text-align: left; padding-left:5px;">' + data.keymanList[i].cust_nm +'</td>'  
				    +"<td><a href='#' onclick=\"keymanDetailClick('"+data.keymanList[i].cont_id+"' , '"+data.keymanList[i].cust_id+"')\"; style='cursor: pointer;' class='callClick'>" + data.keymanList[i].cont_nm +"</a></td>";
        			tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.keymanList[i].cdept_nm+'</td>'
        			+'<td style="width:20%; text-align: center;">'+data.keymanList[i].key_pos+'</td>'
        			+'<td style="width:20%; text-align: center;">'+data.keymanList[i].key_part+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.keymanList[i].key_job+'</td>';
        	 
  
			}
				                   
			   tbody.append(tbodyContent);
			}
	  
			var pageContent = "";
			
			
			//시작
			
			$("#pageSpace").children().remove();
			var ccPageNum = data.keymanPageNum;
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


//페이징
function paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage){
 	var endPageNo = $("<input>");
	endPageNo.attr({"type":"hidden","id":"endPageNum","value":endPageNum});
	var ccPageeNo = $("<input>");
	ccPageeNo.attr({"type":"hidden","id":"ccPageNum","value":ccPageNum});
	$("#pageSpace").append(endPageNo).append(ccPageeNo);
	
	var prevPage = $("<a>");
	prevPage.addClass("icon item");
	var prevI = $("<i>");
	prevI.addClass("left chevron icon");
	console.log(prevPageNum);
	console.log(firstPageCount);
	if(ccPageNum != firstPageCount){
		prevPage.attr("href","javascript:keymanPaging("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:keymanPaging("+i+")");
		ccPage.html(i);
		if(i == ccPageNum){
			var b = $("<b>");
			ccPage.attr("id","pNum");
			b.append(ccPage);
			$("#pageSpace").append(b);
		}else{
			$("#pageSpace").append(ccPage);
		}
	}
	var nextPage = $("<a>");
	nextPage.addClass("icon item");
	var nextI = $("<i>");
	nextI.addClass("right chevron icon");
	if(ccPageNum != totalPageCount){
		nextPage.attr("href","javascript:keymanPaging("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
} 
 

//키맨 삭제
function keymanDelete(){
	var ctx = $("#ctx").val();
	if($("input[name=contact_del]:checked").length==0){
		alert("삭제할 연락처를 선택해 주세요.");
		return false;
	}
	
	
	if(confirm("삭제 하시겠습니까? ")){
	var contactidList = [];
	var pageNum = $("#pageNum").val();
	/*$("input[name=contact_del]:checked").each(function(){
 		contactidList.push($(this).val());
	});*/
	
	var chked_val = [];
 	$(":checkbox[id='call_chek']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	
	 
	$.ajax({
		type : 'POST',
		url : 'KeymanDelete',
		data :JSON.stringify(chked_val),
		dataType : 'json',
	    contentType : 'application/json', 
		success : function(result){
			var delsize = $("input[name=contact_del]:checked").length;
			/*alert(delsize + "개의 연락처가 삭제되었습니다.");*/
			alert("연락처가 삭제되었습니다.");
			keymanPaging('1');
 		},
		error : function(request){
			alert("error : " + request);
		}
	});
	}
	
}



//연락처 상세보기
function keymanDetailClick(a, b) {
/*	$('#call_list_tbody').delegate('a', 'click', function(event) {
		event.preventDefault();
*/		var ctx = $('#ctx').val();
		var cont_id = a;
		var cust_id = b;
 		 var keymanjsonData = {
					"cont_id" : cont_id , "cust_id" : cust_id}
 		
		$.ajax({
			url : '/keymanDetail',
			data : keymanjsonData, //보낼 데이터값
			dataType : 'json',
			type : "POST", //
 			success : function(data) {
				
				$('#cont_id').val(data.cont_id);
  			    $('#cont_nm').val(data.cont_nm);  
				$('#cust_nm').val(data.cust_nm); 
				$('#cust_id').val(data.cust_id);
				$('#cdept_nm').val(data.cdept_nm);	
				$('#key_part').val(data.key_part);
				$('#key_pos').val(data.key_pos);
				
				$('#key_job').val(data.key_job);
				$('#memo').val(data.memo); 
				
				/*var js_func = "ContactRecovery('"+data.cont_id+"');";
			    var clickEvent = new Function(js_func);
 
				$("#contactRecov").attr('onclick', '').click(clickEvent);*/
 			},
 			
			error : function(e) {
				alert("오류발생");
			}
		});
	/*});*/
}



//키맨 수정
function updateKeyman() {
	 
 		 var cont_id = $("#cont_id").val();
 		 var cont_nm = $("#cont_nm").val();
 		 var cust_id = $("#cust_id").val();
  		 var cust_nm = $("#cust_nm").val();
		 var cdept_nm = $("#cdept_nm").val();
		 var key_part = $("#key_part").val();
		 var key_pos = $("#key_pos").val();
		 var key_job = $("#key_job").val();
		 var memo = $("#memo").val();
		  
		 
		 
		 var keymanjsonData = {
			"cont_id" : cont_id ,"cont_nm" : cont_nm, "cust_nm" : cust_nm, "cust_id" : cust_id, "cdept_nm" : cdept_nm,
			"key_part" : key_part, "key_pos" : key_pos, "key_job" : key_job, "memo" : memo
		 }
		 
		 $.ajax({
				url : 'keymanUpdate',
				data : keymanjsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("수정 되었습니다."); 
 					 
 					$("#cont_id").val("");
 			 		$("#cont_nm").val("");
 			 		$("#cust_id").val("");
 			 		$("#cust_nm").val("");
 					$("#cdept_nm").val("");
 					$("#key_part").val("");
 				    $("#key_pos").val("");
 					$("#key_job").val("");
 					$("#memo").val("");
					
 					$('#cont_nm').css("background-color", "#EAEAEA"); 
				 	$('#cust_nm').css("background-color", "#EAEAEA"); 
					$('#cdept_nm').css("background-color", "#EAEAEA"); 
					$('#key_part').css("background-color", "#EAEAEA"); 
					$('#key_pos').css("background-color", "#EAEAEA"); 
					$('#key_job').css("background-color", "#EAEAEA"); 
					$('#memo').css("background-color", "#EAEAEA"); 
					 
					
					$('#cont_nm').attr("readonly", true);
					$('#cust_nm').attr("readonly", true);
					$('#cdept_nm').attr("readonly", true);
					$('#key_part').attr("readonly", true);
					$('#key_pos').attr("readonly", true);
					$('#key_job').attr("readonly", true);
					$('#memo').attr("readonly", true);
					 
					
					$("#baseBtnDiv1").css("display", "none");
					$("#baseBtnDiv").css("display", "block");
					
					
					keymanPaging();
 	 			},
	 			
				error : function(e) {
					alert("오류발생");
				}
			});	  
		 
}


//연락처 추가 버튼
function keymanAddp(){
 	
 		$("#cont_nm").val("");
 		$("#cust_nm").val("");
		$("#cdept_nm").val("");
		$("#key_part").val("");
	    $("#key_pos").val("");
		$("#key_job").val("");
		$("#memo").val("");
	
   /* $('#cont_nm').css("background-color", "white"); */
 	$('#cdept_nm').css("background-color", "white"); 
	$('#key_part').css("background-color", "white"); 
	$('#key_pos').css("background-color", "white"); 
	$('#key_job').css("background-color", "white"); 
	$('#memo').css("background-color", "white");  
	 
    /*$('#cont_nm').attr("readonly", false);*/
	/*$('#cust_nm').attr("readonly", false);*/
	$('#cdept_nm').attr("readonly", false);
	$('#key_part').attr("readonly", false);
    $('#key_pos').attr("readonly", false);
	$('#key_job').attr("readonly", false);
	$('#memo').attr("readonly", false); 
	
	$('#cont_nm').attr("disabled",false);
	$('#comp_list_bt').attr("disabled",false);
	$('#cust_nm').attr("disabled",false);
	$('#cdept_nm').attr("disabled",false);
	$('#key_part').attr("disabled",false);
	$('#key_pos').attr("disabled",false);
	$('#key_job').attr("disabled",false);
	$('#memo').attr("disabled",false);
	$('#cont_list_bt').attr("disabled", false); 
	
	$("#btn_1").css("display", "none");
	$("#btn_2").css("display", "block");
	
	
	 
	$('#company_nm').val("");
	$('#cont_nm').val("");
	$('#email1').val("");
	$('#email2').val("");
	$('#cell_ph1').val("");
	$('#cell_ph2').val("");
	$('#cell_ph3').val("");
	$('#ph1').val("");
	$('#ph2').val("");
	$('#ph3').val(""); 
}

//연락처 저장 취소 버튼.
function contInsertCancel() {
	
	$('#company_nm').attr("readonly", true);
	$('#cont_nm').attr("readonly", true);
	$('#email1').attr("readonly", true);
	$('#email2').attr("readonly", true);
	$('#cell_ph1').attr("readonly", true);
	$('#cell_ph2').attr("readonly", true);
	$('#cell_ph3').attr("readonly", true);
	$('#ph1').attr("readonly", true);
	$('#ph2').attr("readonly", true);
	$('#ph3').attr("readonly", true);
	$("#comp_list_bt").attr("disabled", true);
	 
	$('#company_nm').css("background-color", "#EAEAEA");
	$('#cont_nm').css("background-color", "#EAEAEA"); 
 	$('#email1').css("background-color", "#EAEAEA"); 
	$('#email2').css("background-color", "#EAEAEA"); 
	$('#cell_ph1').css("background-color", "#EAEAEA"); 
	$('#cell_ph2').css("background-color", "#EAEAEA"); 
	$('#cell_ph3').css("background-color", "#EAEAEA"); 
	$('#ph1').css("background-color", "#EAEAEA"); 
	$('#ph2').css("background-color", "#EAEAEA"); 
	$('#ph3').css("background-color", "#EAEAEA"); 
	
	$("#btn_1").css("display", "block");
	$("#btn_2").css("display", "none");
	
	
	 
	$('#company_nm').val("");
	$('#cont_nm').val("");
	$('#email1').val("");
	$('#email2').val("");
	$('#cell_ph1').val("");
	$('#cell_ph2').val("");
	$('#cell_ph3').val("");
	$('#ph1').val("");
	$('#ph2').val("");
	$('#ph3').val(""); 
}

//키맨 추가 저장.
function keymanInsert() {  
	
	 var cont_id = $("#cont_id").val();
 	 var cont_nm = $("#cont_nm").val();
	 var cust_id = $("#cust_id").val();
     var cust_nm = $("#cust_nm").val();
	 var cdept_nm = $("#cdept_nm").val();
	 var key_part = $("#key_part").val();
	 var key_pos = $("#key_pos").val();
	 var key_job = $("#key_job").val();
	 var memo = $("#memo").val();
  	 
	 if(cont_nm == null || cont_nm =="")
		 {
		 alert("이름을 입력해 주세요.");
		 return false;
		 } 
	if(cust_nm == null || cust_nm =="")
		{
		alert("회사명을 입력해 주세요.");
		return false;
		}
	 
	 
	var keymanjsonData = {
			 "cont_id" : cont_id, "cont_nm" : cont_nm, "cust_nm" : cust_nm, "cust_id" :cust_id, "cdept_nm" : cdept_nm, "key_part" : key_part, "key_pos" : key_pos,
			 "key_job" : key_job, "memo" : memo
		 }
		 
		 $.ajax({
				url : 'keymanInsert',
				data : keymanjsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("연락처가 추가되었습니다.");
 					$("#cont_id").val("");
 			 		$("#cont_nm").val("");
 			 		$("#cust_id").val("");
 			 		$("#cust_nm").val("");
 					$("#cdept_nm").val("");
 					$("#key_part").val("");
 				    $("#key_pos").val("");
 					$("#key_job").val("");
 					$("#memo").val("");
					
 					$('#cont_nm').css("background-color", "#EAEAEA"); 
				 	$('#cust_nm').css("background-color", "#EAEAEA"); 
					$('#cdept_nm').css("background-color", "#EAEAEA"); 
					$('#key_part').css("background-color", "#EAEAEA"); 
					$('#key_pos').css("background-color", "#EAEAEA"); 
					$('#key_job').css("background-color", "#EAEAEA"); 
					$('#memo').css("background-color", "#EAEAEA"); 
					 
					
					$('#cont_nm').attr("readonly", true);
					$('#cust_nm').attr("readonly", true);
					$('#cdept_nm').attr("readonly", true);
					$('#key_part').attr("readonly", true);
					$('#key_pos').attr("readonly", true);
					$('#key_job').attr("readonly", true);
					$('#memo').attr("readonly", true);
					
					
					$("#comp_list_bt").attr("disabled", true);
					$("#btn_2").css("display", "none"); 
					$("#btn_1").css("display", "block");
					
					keymanPaging();
	 			},
	 			
				error : function(e) {
					alert("오류발생");
				}
			});	  
}


//취소버튼
function callAddCancelBtn(){
 	$(document).ready(function() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		
		$('#company_nm').css("background-color", "#EAEAEA");
		$('#cont_nm').css("background-color", "#EAEAEA"); 
	 	$('#email1').css("background-color", "#EAEAEA"); 
		$('#email2').css("background-color", "#EAEAEA"); 
		$('#cell_ph1').css("background-color", "#EAEAEA"); 
		$('#cell_ph2').css("background-color", "#EAEAEA"); 
		$('#cell_ph3').css("background-color", "#EAEAEA"); 
		$('#ph1').css("background-color", "#EAEAEA"); 
		$('#ph2').css("background-color", "#EAEAEA"); 
		$('#ph3').css("background-color", "#EAEAEA"); 
		
		
		$('#company_nm').attr("readonly", true);
		$('#cont_nm').attr("readonly", true);
		$('#email1').attr("readonly", true);
		$('#email2').attr("readonly", true);
		$('#cell_ph1').attr("readonly", true);
		$('#cell_ph2').attr("readonly", true);
		$('#cell_ph3').attr("readonly", true);
		$('#ph1').attr("readonly", true);
		$('#ph2').attr("readonly", true);
		$('#ph3').attr("readonly", true);
		$("#comp_list_bt").attr("disabled", true);

		
		 $('#cont_nm').val("");  
			$('#company_nm').val("");
			$('#ph1').val("");
			$('#ph2').val("");
			$('#ph3').val("");
			
			$('#cell_ph1').val("");	
			$('#cell_ph2').val("");
			$('#cell_ph3').val("");
			
			$('#email1').val("");
			$('#email2').val("");
			
			$("#baseBtnDiv1").css("display", "none");
			$("#baseBtnDiv").css("display", "block");
			
		
 	}
	
	});
}


//연락처 삭제된 데이터 보기. 
function contactDeleteList() {
  	location.href = '/contactDeleteList'; 
}


//연락처 복원
function ContactRecovery(cont_id) {

	if(confirm("복원 하시겠습니까?")){
	 
	$.ajax({
		url : '/contactRecovery',
		type : 'POST',
		data : cont_id,
		dataType : 'json',
		success : function(data) {
 	 			 /*contactDeleteList('1');*/
 				 alert('복원 되었습니다.');
 				 alert("연락처 페이지로 이동합니다. ");
				  location.href = '/contact';
 		  
		},
		error : function() {
			alert("오류");
		}
	});
	
	} 	
	
}


function toggleEnglish(){ 
 $("#english").show();
 $("#korean").hide();
}
function toggleKorean(){
	 $("#english").hide(); 
	 $("#korean").show();
}


function removeAbsol(){
	 var cont_id = $("#cont_id").val(); 
	 
	 if(confirm("삭제하시겠습니까?" + "\n" + "확인버튼 클릭 시 복구가 불가능합니다.")){
		$.ajax({
			url : '/contact_delete_absol',
			type : 'POST',
			data : cont_id,
			success : function(data) {
	 		 
				keymanPaging();
			},
			error : function() {
				alert("제가 문제입니다 페이징");
			}
		});
	 }
	 
}


//편집 버튼 눌렀을 때
function callCustBtn(){
      	 $("#contactbody input[type='text']").css("background-color", "white");
		
  		$("#company_nm").css("background-color", "#EAEAEA");
  		$("#cont_nm").css("background-color", "#EAEAEA");
 		
 		$('#cont_nm').attr("readonly", false);
		$('#cust_nm').attr("readonly", false);
		$('#cdept_nm').attr("readonly", false);
		$('#key_part').attr("readonly", false);
 		$('#key_pos').attr("readonly", false);
		$('#key_job').attr("readonly", false);
		$('#memo').attr("readonly", false); 
		
		$('#cont_nm').attr("disabled",false);
		$('#cust_nm').attr("disabled",false);
		$('#cdept_nm').attr("disabled",false);
		$('#key_part').attr("disabled",false);
		$('#key_pos').attr("disabled",false);
		$('#key_job').attr("disabled",false);
		$('#memo').attr("disabled",false);
  
		//내용초기화
		/*$('#call_nm').val("");
		$('#pos_nm').val("");
		$('#comp_nm').val("");
		$('#email1').val("");
		$('#email2').val("");
		$('#cell_phone1').val("");
		$('#cell_phone2').val("");
		$('#cell_phone3').val("");
		$('#ph_phone1').val("");
		$('#ph_phone2').val("");
		$('#ph_phone3').val("");
		$('#iuser_nm').val("");
		$('#stat_cd').val("0");
		$('#cust_info_yn').attr("checked",false);
		$('#mkt_app_yn').attr("checked",false);
		$('#cust_zip_cd1').val("");
		$('#cust_zip_cd2').val("");
		$('#cust_zip_addr').val("");
		$('#cust_addr').val("");*/
		
		// 버튼 활성화
 		$("#baseBtnDiv").css("display", "none");
 		$("#baseBtnDiv1").css("display", "block");
}


//회사 리스트 팝업
function compListPopup(ctx){

	$('#comp_list_bt').click(function(){
		var pop_flg='d';
		window.open(ctx+'/opptCustcompList?pop_flg='+pop_flg,'newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//연락처 리스트 팝업
function contListPopup(ctx){

	$('#cont_list_bt').click(function(){
		var pop_flg='d';
		var cust_id = $("#cust_id").val();
		window.open(ctx+'/ContactList?pop_flg='+pop_flg+'&cust_id='+cust_id,'newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		
	});
}



//고객팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function inputCustNm1(custId,custNm,custType,pop_flg){	
	if(custType == 'search'){
		$('#scust_nm').val(custNm);
		$('#scust_id').val(custId);
		$('#company_nm').val(custNm);
	}else if(custType == 'normal'){
		$('#cust_nm').val(custNm);
		$('#cust_id').val(custId);
		$('#company_nm').val(custNm);
	}
}

//고객팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function contactNmSelect(cont_id,cont_nm){	
	 
 		$('#cont_nm', opener.document).val(cont_nm);
		$('#cont_id', opener.document).val(cont_id);
		self.close();
}

/*function contactDeleteList(contactPageNum){
	
	var tbody = $('#call_list_tbody');
	var tbodyContent = "";
	var cont_nm = $("#cont_nm").val();
	var email = $("#email").val();
	var ph = $("#ph").val();
 	var contactData = { "contactPageNum": contactPageNum, 
			        "cont_nm": cont_nm, 
			        "email":email, 
			        "ph":ph,
 			        };
	
	$.ajax({
		url : '/contactDeleteList',
		type : 'POST',
		data : contactData,
		success : function(data) {
 			if(data.contactListSize == 0){
				alert("검색결과가 없습니다.");
				location.href = ctx+'/contact';
			}else{
				tbody.children().remove();
			
				$("#cont_nm").val(data.cont_nm);
				$("#email").val(data.email);
				$("#ph").val(data.ph);
 				
				tbody.children().remove();
			
			for (var i = 0; i < data.contactList.length; i++) {
				
				tbodyContent +='<tr><td style="width:20px; text-align:center"><input type="checkbox" id="call_chek" class="call_chek" name="call_del" value="'+data.contactList[i].cont_id+'"></td>'
				    +'<td style="width:20%; text-align: left; padding-left:5px;">' + data.contactList[i].company_nm +'</td>'  
				    +"<td style='width:20%;'><a href='#' onclick=contactDetailClick('"+data.contactList[i].cont_id+"'); style='color: black; cursor: pointer;' class='callClick'>" + data.contactList[i].cont_nm +"</a></td>";
        			tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.contactList[i].email1+'@'+data.contactList[i].email2+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.contactList[i].ph1+'-'+data.contactList[i].ph2+'-'+data.contactList[i].ph3+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.contactList[i].cell_ph1+'-'+data.contactList[i].cell_ph2+'-'+data.contactList[i].cell_ph3+'</td>'
         			+'<td style="width:10%; text-align: center;">'+dateFormat(data.contactList[i].fst_reg_dt)+'</td></tr>';
        		}
				                   
			   tbody.append(tbodyContent);
			} 
			
			var pageContent = "";
			
			
			//시작
			
			$("#pageSpace").children().remove();
			var ccPageNum = data.contactPageNum;
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

}*/
