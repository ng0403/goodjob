 	var count = 0;


$(function(){
	var ctx = $('#ctx').val();	
  });

$(document).ready(function(){
	$("#english").hide();
	if($("#act_yn").val() == 'Y')
		{
		$("#contactRecov").css("display", "none");
 		}
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
		var checkbox=$('#goaltable tbody').find('input[type=checkbox]');
		
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
					contactPaging(contactPageNum);
				} else {
					contactPaging(contactPageNum);
				}
			}
		}
	event.stopPropagation();
}
	
// 초성 검색 페이징
function searchAcnkEvent(contactPageNum, keyword){
  		var ctx = $("#ctx").val();
		var cont_nm = $("#search_cont_nm").val();
 		var email = $("#email").val();
		var ph = $("#ph").val();
		
		var cont_nm0 = $("#cont_nm0").val();
		var email0 = $("#email0").val();
		var ph0 = $("#ph0").val();
		var cont_nm1 = $("#cont_nm1").val();
		var email1 = $("#email1").val();
		var ph1 = $("#ph1").val();
		var act_yn = $("#act_yn").val();
  		var callData = { "contactPageNum": contactPageNum, 
				"keyword": keyword,
		        "cont_nm": cont_nm, 
		        "email":email, 
		        "ph":ph,
		        "cont_nm0" : cont_nm0, "email0" : email0, "ph0" : ph0, "cont_nm1" : cont_nm1, "email1" : email1, "ph1" : ph1,
		        "act_yn" :act_yn
 		        };
		
		if(keyword == '전체'){
			location.href = ctx + '/contact';
			return;
		}else{
			var tbody = $('#call_list_tbody');
			var tbodyContent = "";
			
			$.ajax({
				url: ctx+'/searchKeyword',
				type: 'POST',
				data: callData,
				dataType:'json',
				success: function(data){
  					if(data.contactListSize == 0){
						alert("조회된 결과가 없습니다.");
						location.href = ctx+'/contact';
					} else {
						tbody.children().remove();
						
						$("#cont_nm").val(data.cont_nm);
						$("#email").val(data.email);
						$("#ph").val(data.ph);
 						for(var i=0; i<data.contactList.length; i++){
  							tbodyContent +='<tr><th  style="text-align:center" ><input type="checkbox"id="call_chek" class="call_chek" name="contact_del" value="'+data.contactList[i].cont_id+'"></th>';
  											if(data.contactList[i].company_nm =="null" || data.contactList[i].company_nm == null || data.contactList[i].company_nm == ""){
 												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;"></td>';
  							         		}
 											else{
 												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">' + data.contactList[i].company_nm +'</td>'; 
 											}
 							
 											tbodyContent+="<td><a href='#' onclick=contactDetailClick('"+data.contactList[i].cont_id+"'); style='color: black; cursor: pointer; width:20%;' class='callClick'>" + data.contactList[i].cont_nm +"</a></td>";
 											
  											
 											if((data.contactList[i].email1 == null || data.contactList[i].email1 =="null" || data.contactList[i].email1 =="") && (data.contactList[i].email2 == null || data.contactList[i].email2 == "" || data.contactList[i].email2 =="null")){
  												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">@</td>';

  											}
  											else if(data.contactList[i].email1 == null || data.contactList[i].email1 =="null" || data.contactList[i].email1 =="" ){
  												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">@'+data.contactList[i].email2+'</td>';

  											}
 											else if(data.contactList[i].email2 == null || data.contactList[i].email2 =="null" || data.contactList[i].email2 =="" ){
  												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.contactList[i].email1+'@</td>';
 											}
 											else if(data.contactList[i].email2 != "null" && data.contactList[i].email1 != "null"){
  												tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.contactList[i].email1+'@'+data.contactList[i].email2+'</td>';

 											} 
  											
  											if((data.contactList[i].ph1 == "null" || data.contactList[i].ph1 == "" || data.contactList[i].ph1 == null) && (data.contactList[i].ph2 == "" || data.contactList[i].ph =="null" || data.contactList[i].ph2 == null) && (data.contactList[i].ph3 == null || data.contactList[i].ph3 =="" || data.contactList[i].ph3 =="null"))
  												{
  											  tbodyContent+='<td style="width:10%; text-align: center;"></td>'

  											}else if(data.contactList[i].ph1 == "null" || data.contactList[i].ph1 =="" || data.contactList[i].ph1 ==null)
  												{
  											 tbodyContent+='<td style="width:10%; text-align: center;">-'+data.contactList[i].ph2+'-'+data.contactList[i].ph3+'</td>'	
  											}else if(data.contactList[i].ph2 == "null" || data.contactList[i].ph2 =="" || data.contactList[i].ph2 ==null)
												{
  	  											 tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].ph1+'-'+ +'-'+data.contactList[i].ph3+'</td>'	
  	  											}else if(data.contactList[i].ph2 == "null" || data.contactList[i].ph2 =="" || data.contactList[i].ph2 ==null)
												{
  	  	  											 tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].ph1+'-'+data.contactList[i].ph2+'-</td>'	
  	  	  											}else{
  	  	 											tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].ph1+'-'+data.contactList[i].ph2+'-'+data.contactList[i].ph3+'</td>'
	
  	  	  											} 
  											
  											if((data.contactList[i].cell_ph1 == "null" || data.contactList[i].cell_ph1 == "" || data.contactList[i].cell_ph1 == null) && (data.contactList[i].cell_ph2 == "" || data.contactList[i].cell_ph2 =="null" || data.contactList[i].cell_ph2 == null) && (data.contactList[i].cell_ph3 == null || data.contactList[i].cell_ph3 =="" || data.contactList[i].cell_ph3 =="null"))
  	  												{
   	  	  											  tbodyContent+='<td style="width:10%; text-align: center;"></td>'

  	  	  											}else if(data.contactList[i].cell_ph1 == "null" || data.contactList[i].cell_ph1 =="" || data.contactList[i].cell_ph1 ==null)
  	  	  												{
   	  	  											 tbodyContent+='<td style="width:10%; text-align: center;">-'+data.contactList[i].cell_ph2+'-'+data.contactList[i].cell_ph3+'</td>'	
  	  	  											}else if(data.contactList[i].cell_ph2 == "null" || data.contactList[i].cell_ph2 =="" || data.contactList[i].cell_ph2 == null)
  	  													{
   	  	  	  											 tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].cell_ph1+'-'+ +'-'+data.contactList[i].cell_ph3+'</td>'	
  	  	  	  											}else if(data.contactList[i].cell_ph3 == "null" || data.contactList[i].cell_cell_ph3 =="" || data.contactList[i].cell_ph3 ==null)
  	  													{
   	  	  	  	  											 tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].cell_ph1+'-'+data.contactList[i].cell_ph2+'-</td>'	
  	  	  	  	  											}else{
   	  	  	  	 											tbodyContent+='<td style="width:10%; text-align: center;">'+data.contactList[i].cell_ph1+'-'+data.contactList[i].cell_ph2+'-'+data.contactList[i].cell_ph3+'</td>'
  	  	  	  	  											}
  												
 
							tbody.append(tbodyContent);
						    tbodyContent = "";

						}
 						
						/*if(data.contactListSize < 10){
   							for(var i=0; i<10-data.contactListSize; i++){
   								tbodyContent='<tr style="height: 35.5px;"><th></th>'
   									+'<td style="width:10%;"></td>'
   									+'<td style="width:10%;"></td>'
   									+'<td style="width:10%;"></td>'
   									+'<td style="width:10%;"></td>'
   									+'<td style="width:10%;"></td>' 
   									+'<td style="width:15%;"></td></tr>';
								tbody.append(tbodyContent);
							}
						}    */
						
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
				 	
						 
					}
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
				str+="<input type='text' placeholder='이름' style='margin-right: 3px;' class='inp_search'd id='cont_nm"+count+"' name='cont_nm"+count+"' onkeydown='contactSearchEnter(event);'/>";
			    str+="<i class='user icon'></i>";
			    str+="</div>";
			    
			    str+="<div class='ui left icon input'>";
			    str+="<input type='text' placeholder='이메일' style='margin-right: 3px;' class='inp_search' id='email"+count+"' name='email"+count+"'  maxlength='9' onkeydown='contactSearchEnter(event);'   style='ime-mode:disabled;'/>";
			    str+="<i class='mail icon'></i>";
			    str+="</div>";
			    
			    str+="<div class='ui left icon input'>";
			    str+="<input type='text' placeholder='이동전화번호' style='margin-right: 3px;' class='inp_search' id='ph"+count+"' name='ph"+count+"'  maxlength='9' onkeydown='contactSearchEnter(event);'   style='ime-mode:disabled;'/>";
			    str+="<i class='mobile icon'></i>";
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

 
// 연락처 리스트 그냥 페이징
function contactPaging(contactPageNum) {
    var ctx = $("#ctx").val();
	var tbody = $('#call_list_tbody');
	var tbodyContent = "";
	var cont_nm = $("#cont_nm").val();
	var email = $("#email").val();
	var ph = $("#ph").val();
	var act_yn = $("#act_yn").val();
   	var contactData = { "contactPageNum": contactPageNum, 
			        "cont_nm": cont_nm, 
			        "email":email, 
			        "ph":ph, "act_yn" : act_yn
 			        };
	
	$.ajax({
		url : ctx+'/contactPaging',
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
				
				tbodyContent +='<tr><td style="width:20px; text-align:center"><input type="checkbox" id="call_chek" class="call_chek" name="contact_del" value="'+data.contactList[i].cont_id+'"></td>'
				    +'<td style="width:20%; text-align: left; padding-left:5px;">' + data.contactList[i].company_nm +'</td>'  
				    +"<td style='width:20%;'><a href='#' onclick=contactDetailClick('"+data.contactList[i].cont_id+"'); style='color: black; cursor: pointer;' class='callClick'>" + data.contactList[i].cont_nm +"</a></td>";
        			tbodyContent+='<td style="width:20%; text-align: left; padding-left:5px;">'+data.contactList[i].email1+'@'+data.contactList[i].email2+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.contactList[i].ph1+'-'+data.contactList[i].ph2+'-'+data.contactList[i].ph3+'</td>'
        			+'<td style="width:10%; text-align: center;">'+data.contactList[i].cell_ph1+'-'+data.contactList[i].cell_ph2+'-'+data.contactList[i].cell_ph3+'</td>';
        			if(data.contactList[i].act_yn == 'N'){
        				tbodyContent+= '<td style="width:10%; text-align: center;">'+dateFormat(data.contactList[i].fin_mdfy_dt)+'</td>';
 
        			}
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
		prevPage.attr("href","javascript:contactPaging("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:contactPaging("+i+")");
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
		nextPage.attr("href","javascript:contactPaging("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
} 
 

//연락처 삭제
function contactDelete(){
	var ctx = $("#ctx").val();
	if($("input[name=contact_del]:checked").length==0){
		alert("삭제할 영업기회를 선택해 주세요.");
		return false;
	}
	if(confirm("삭제 하시겠습니까? ")){
	var contactidList = [];
	var pageNum = $("#pageNum").val();
	$("input[name=contact_del]:checked").each(function(){
 		contactidList.push($(this).val());
	});
	
	$.ajax({
		type : 'get',
		url : 'contactDelete',
		data : {
			contactidList : contactidList,
				 pageNum : pageNum
			},
		dataType : 'json',
		success : function(result){
			alert("연락처가 삭제되었습니다.");
			contactPaging('1');
 		},
		error : function(request){
			alert("error : " + request);
		}
	});
	}
	
}



//연락처 상세보기
function contactDetailClick(a) {
	$('#call_list_tbody').delegate('a', 'click', function(event) {
		event.preventDefault();
		var ctx = $('#ctx').val();
		var cont_id = a;
 		
		$.ajax({
			url : '/contactDetail',
			data : cont_id, //보낼 데이터값
			dataType : 'json',
			type : "POST", //
			contentType : "application/json",
			success : function(data) {
				
				$('#cont_id').val(data.cont_id);
  			    $('#cont_nm').val(data.cont_nm);  
				$('#company_nm').val(data.company_nm);
				$('#ph1').val(data.ph1);
				$('#ph2').val(data.ph2);
				$('#ph3').val(data.ph3);
				
				$('#cell_ph1').val(data.ph1);	
				$('#cell_ph2').val(data.ph2);
				$('#cell_ph3').val(data.ph3);
				
				$('#email1').val(data.email1);
				$('#email2').val(data.email2); 
				
				var js_func = "ContactRecovery('"+data.cont_id+"');";
			    var clickEvent = new Function(js_func);
 
				$("#contactRecov").attr('onclick', '').click(clickEvent);
 			},
 			
			error : function(e) {
				alert("오류발생");
			}
		});
	});
}



//연락처 수정
function updateCont() {
	 
 		 var cont_id = $("#cont_id").val();
 		 var cont_nm = $("#cont_nm").val();
 		 var company_nm = $("#company_nm").val();
		 var ph1 = $("#ph1").val();
		 var ph2 = $("#ph2").val();
		 var ph3 = $("#ph3").val();
		 var cell_ph1 = $("#cell_ph1").val();
		 var cell_ph2 = $("#cell_ph2").val();
		 var cell_ph3 = $("#cell_ph3").val();
		 var email1 = $("#email1").val();
		 var email2 = $("#email2").val();
		 
		 var contactjsonData = {
			"cont_id" : cont_id ,"cont_nm" : cont_nm, "company_nm" : company_nm, "ph1" : ph1, "ph2" : ph2, "ph3" : ph3
			, "cell_ph1" : cell_ph1, "cell_ph2" : cell_ph2 , "cell_ph3" : cell_ph3, "email1" : email1, "email2" : email2
		 }
		 
		 $.ajax({
				url : 'contactUpdate',
				data : contactjsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("수정 되었습니다.");
 					
 					
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
					
					$("#baseBtnDiv1").css("display", "none");
					$("#baseBtnDiv").css("display", "block");
					
					
					contactPaging();
 	 			},
	 			
				error : function(e) {
					alert("오류발생");
				}
			});	  
		 
}


//연락처 추가 버튼
function contactAddp(){
 	
	$('#company_nm').attr("readonly", false);
	$('#cont_nm').attr("readonly", false);
	$('#email1').attr("readonly", false);
	$('#email2').attr("readonly", false);
	$('#cell_ph1').attr("readonly", false);
	$('#cell_ph2').attr("readonly", false);
	$('#cell_ph3').attr("readonly", false);
	$('#ph1').attr("readonly", false);
	$('#ph2').attr("readonly", false);
	$('#ph3').attr("readonly", false);
		
	$('#cont_nm').attr("disabled",false);
	$('#email1').attr("disabled",false);
	$('#email2').attr("disabled",false);
	$('#cell_phone1').attr("disabled",false);
	$('#cell_phone2').attr("disabled",false);
	$('#cell_phone3').attr("disabled",false);
	$('#ph_phone1').attr("disabled",false);
	$('#ph_phone2').attr("disabled",false);
	$('#ph_phone3').attr("disabled",false);

	
	$('#company_nm').css("background-color", "white");
	$('#cont_nm').css("background-color", "white"); 
 	$('#email1').css("background-color", "white"); 
	$('#email2').css("background-color", "white"); 
	$('#cell_ph1').css("background-color", "white"); 
	$('#cell_ph2').css("background-color", "white"); 
	$('#cell_ph3').css("background-color", "white"); 
	$('#ph1').css("background-color", "white"); 
	$('#ph2').css("background-color", "white"); 
	$('#ph3').css("background-color", "white"); 
	
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

//연락처 추가 저장.
function contactInsert() { 
	
	 var cont_id = $("#cont_id").val();
	 var cont_nm = $("#cont_nm").val();
	 var company_nm = $("#company_nm").val();
	 var ph1 = $("#ph1").val();
	 var ph2 = $("#ph2").val();
	 var ph3 = $("#ph3").val();
	 var cell_ph1 = $("#cell_ph1").val();
	 var cell_ph2 = $("#cell_ph2").val();
	 var cell_ph3 = $("#cell_ph3").val();
	 var email1 = $("#email1").val();
	 var email2 = $("#email2").val();
  
	 if(cont_nm == null || cont_nm =="")
		 {
		 alert("이름을 입력해 주세요.");
		 return false;
		 } 
	 
	 if(ph1 != null || ph1 !=""){ 
		 if(ph2 == null || ph2 ==""){
		 alert("전화번호를 입력해 주세요.");
		 return false;
	 }
	 if(ph3 == null || ph3 == "" ){
		 alert("전화번호를 입력해 주세요.");
		 return false;
	 }
	}
	 
	 if($("#email1").val().length != 0) {
 		 if(email2 == null || email2 == ""){
			 alert("이메일을 전부 입력해 주세요.");
			 return false;
		 }
	}
	 
	 if($("#cell_ph1").val().length != 0){
		 if(cell_ph2 == null || cell_ph2 == ""){
			 alert("휴대폰 번호를 전부 입력해 주세요.");
			 return false;
		 }else if(cell_ph3 == null || cell_ph3 ==""){
			 alert("휴대폰 번호를 전부 입력해 주세요.");
			 return false;
		 }
	 }
		 
		 
	
	var contactjsonData = {
			"cont_id" : cont_id ,"cont_nm" : cont_nm, "company_nm" : company_nm, "ph1" : ph1, "ph2" : ph2, "ph3" : ph3
			, "cell_ph1" : cell_ph1, "cell_ph2" : cell_ph2 , "cell_ph3" : cell_ph3, "email1" : email1, "email2" : email2
		 }
		 
		 $.ajax({
				url : 'contactInsert',
				data : contactjsonData, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
 				success : function(data) { 
 					alert("저장되었습니다.");
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
					
					$("#btn_2").css("display", "none"); 
					$("#btn_1").css("display", "block");
					
					contactPaging();
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
		
 	}
	
	});
}


//연락처 삭제된 데이터 보기. 
function contactDeleteList() {
  	location.href = '/contactDeleteList'; 
}


//연락처 복원
function ContactRecovery(cont_id) {
 	 
	$.ajax({
		url : '/contactRecovery',
		type : 'POST',
		data : cont_id,
		dataType : 'json',
		success : function(data) {
 			 alert('복원이 완료되었습니다.');
 			 contactDeleteList('1');
  
		},
		error : function() {
			alert("오류");
		}
	});
	
}


function toggleEnglish(){ 
 $("#english").show();
 $("#korean").hide();
}
function toggleKorean(){
	 $("#english").hide(); 
	 $("#korean").show();
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
