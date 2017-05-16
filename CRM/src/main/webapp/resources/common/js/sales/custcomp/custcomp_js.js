// 서브메뉴 유지
$("#navisub4").show();
$("#navicustcomp").css("font-weight", "bold");

var count = 0;
var schAddFlg = 0;
var ccllist;
//var ctx = $("#ctx").val();
$(document).ready(function() {
	var ctx = $("#ctx").val();
	var cust_id = $("#nowCust_id").val();
	pocList(cust_id);
	posList(cust_id);
	
	// 기업고객 리스트 체크박스 선택, 해제
	$("#ccListCheck").click(function(){
		// 만약 전체 선택 체크박스가 체크된 상태일 경우
		if($("#ccListCheck").prop("checked")){
			// 해당화면 전체 checkbox들을 체크해준다.
			$("input[type=checkbox]").prop("checked", true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			// 해당화면에 모든 checkbox들의 체크를 해제시킨다.
			$("input[type=checkbox]").prop("checked", false);
		}
	});
	
	//고객사 담당자 리스트 가져오기
	$("#tab1").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#pocTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			pocList(cust_id);
		}
	});
	
	//영업 담당자 리스트 가져오기
//	$("#tab2").click(function() {
//		var cust_id = $("#nowCust_id").val();
//		if(cust_id == ''){
//			var tbody = $('#posTableTbody');
//			tbody.children().remove();
//			var tbodyContent = "";
//			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
//			tbody.append(tbodyContent);
//		} else {
//			posList(cust_id);
//		}
//	});
	
	// 키맨 리스트 가져오기
	$("#tab3").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#keymanTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			keymanList(cust_id);
		}
	});
	
	// 영업기회 리스트 가져오기
	$("#tab4").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#opptTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			opptTabList(cust_id);
		}
	});
	
	// 영업활동 리스트 가져오기
	$("#tab5").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#actTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			actList(cust_id);
		}
	});
	
	// 견적 리스트 가져오기
	$("#tab6").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#estTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			estList(cust_id);
		}
	});
	
	// 계약 리스트 가져오기
//	$("#tab6").click(function() {
//		var cust_id = $("#nowCust_id").val();
//		if(cust_id == ''){
//			var tbody = $('#contTableTbody');
//			tbody.children().remove();
//			var tbodyContent = "";
//			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
//			tbody.append(tbodyContent);
//		} else {
//			contList(cust_id);
//		}
//	});
	

});


//고객사 검색 조건 추가
function addForm(){
	if(count<2){
//		$.ajax({
//			type : 'post',
//			url :'/ccllist',
//			datatype : 'json',
//			success:function(result){
				var addedFormDiv = document.getElementById("search_div");
				var str = "";
				
					str+="<br><div class='ui left icon input'>";
					str+="<input type='text' placeholder='고객사명' style='margin-right: 3px;' class='inp_search' autofocus='autofocus' id='sch_cust_nm"+count+"' name='sch_cust_nm"+count+"' onkeydown='schCustComp(event);'/>";
				    str+="<i class='users icon'></i>";
				    str+="</div>";
				    
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='사업자번호' style='margin-right: 3px;' class='inp_search' id='sch_comp_num"+count+"' name='sch_comp_num"+count+"'  maxlength='9' onkeydown='schCustComp(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;'/>";
				    str+="<i class='suitcase icon'></i>";
				    str+="</div>";
				    
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='법인번호' style='margin-right: 3px;' class='inp_search' id='sch_corp_num"+count+"' name='sch_corp_num"+count+"'  maxlength='9' onkeydown='schCustComp(event);' onkeyup='removeChar(event);' style='ime-mode:disabled;'/>";
				    str+="<i class='law icon'></i>";
				    str+="</div>";
				    
				    str+="<div class='ui left icon input'>";
				    str+="<input type='text' placeholder='영업담당자' style='margin-right: 3px;' class='inp_search' id='sch_iuser_nm"+count+"' name='sch_iuser_nm"+count+"' onkeydown='schCustComp(event);'/>";
				    str+="<i class='user icon'></i>";
				    str+="</div>";
				    
				    str+="<label  onclick='delForm(this)' id='schDelBth' class='tiny ui button' >"+'-'+"</label>";
				    
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

//검색 엔터키 기능
function schCustComp(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#sch_cust_nm").val() == '' && $("#sch_comp_num").val() == '' && $("#sch_corp_num").val() == '' && $("#sch_iuser_nm").val() == '') {
			alert("검색어를 입력하세요.")
			$("#sch_cust_nm").focus();
		} else {
			schPaging(1);
		}
	}
	event.stopPropagation();
}

// 전체 체크 해제
function chkCancel() {
	$(document).ready(function() {
		$("#custcompCheck").prop("checked", false);
	});
}

//고객사 리스트 출력
function custCompList(page){
//	readDetail();
//	alert(page);
	var ctx = $("#ctx").val();
	$.ajax({
		type : 'post',
		url : ctx + '/custCompAjax',
		data : {pageNum : page, sch_cust_nm : $("#sch_cust_nm").val(), sch_comp_num : $("#sch_comp_num").val(), sch_corp_num : $("#sch_corp_num").val(), sch_iuser_nm : $("#sch_iuser_nm").val()},
		datatype : 'json',
		success:function(result){
			//리스트 출력 시 버튼 상태 설정
			$("#functionBtn").css("display", "block");
			
			$("#ccListTbody").children().remove();
			$.each(result.ccVOList, function(i, cc){
			
				$("#ccListTbody").append("" +
						"<tr id='"+cc.cust_id+"'>"+
						"<th><input type=checkbox  id=custcomp_del name=custcomp_del value="+cc.cust_id+">" +
						"<input type=hidden id=list_cust_id value="+cc.cust_id+">" +
						"<input type=hidden id=cust_nm value="+cc.cust_nm+"></th>"+
						"<td id='ccListTableNmTd' style='text-align: left; padding-left:8px;'><a onclick=\"ccTabFunc('"+cc.cust_id+"');\" id=cust_nm href='#' style='text-decoration: none;'>"+cc.cust_nm+"</a></td>"+
						"<td id=cust_nm>"+cc.comp_num+"</td>"+
						"<td>"+cc.corp_num+"</td>"+
						"<td>"+cc.rep_ph1+"-"+cc.rep_ph2+"-"+cc.rep_ph3+"</td>"+
						"<td>"+cc.sales_scale+"</td>"+
						"<td>"+cc.emp_qty+"</td>"+
						"<td>"+cc.indst+"</td>"+
						"<td>"+cc.iuser_nm+"</td>"+
						"<td>"+cc.fst_reg_dt+"</td>+"+
						"</tr>"
				);
			});
			//페이지 리스트 갯수
			if(result.ccVOList.length < 10){
				for(var j = 0; j < 10-result.ccVOList.length; j++){
					$("#ccListTbody").append("<tr style='height:30px;'>"
							+"<th></th>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td><td></td><td></td><td></td>"
							+"<td></td></tr>");
				}
			}
			$("#pageSpace").children().remove();	
			$("#pageSpace").children().remove();
			var ccPageNum = result.ccPageNum;
			var startPageNum = result.page.startPageNum;
			var endPageNum = result.page.endPageNum;
			var firstPageCount = result.page.firstPageCount;
			var totalPageCount = result.page.totalPageCount;
			var prevPageNum = result.page.prevPageNum;
			var nextPageNum = result.page.nextPageNum;
			var prevStepPage = result.page.prevStepPage;
			var nextStepPage = result.page.nextStepPage;
			paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);
		},
		error:function(request){
			alert("error : " + request);
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
		prevPage.attr("href","javascript:custCompList("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:custCompList("+i+")");
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
		nextPage.attr("href","javascript:custCompList("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
}

//고객사 전체 선택
function custcompAllCheck(){
	$("#custcompSelect").click( function(){
		var chk = $(this).is(":checked"); //checked 된 경우 true, 아닌 경우 false
		if(chk){
			$("#ccListTbody input[type=checkbox]").prop("checked",true);			
		}else{
			$("#ccListTbody input[type=checkbox]").prop("checked",false);
		}
	});
}

//all 체크일때 하나라도 체크해지가 된 경우 all checkbox 체크 해제
function chkCancel(){
	$("#custcompSelect").prop("checked", false);
}

//전체 체크 해제
function custcompChkCancel() {
	$(document).ready(function() {
		$("#custcompCheck").prop("checked", false);
	});
}

//체크박스 개수 검색함수
function checkCount(){
   var count=0;
   var checkList = $('.cust_check');

   for(var i=0; i<checkList.size(); i++){
      if($(checkList[i]).is(':checked')){
         count++;
      }
   }
   return count;
};

//고객사 추가
function custcompInsertForm() {
	var ctx = $("#ctx").val();
	
	location.href = ctx + '/custcompDetail';
}

//고객사 삭제
function custcompDelete()
{
	var form = $('#delForm');
	
	if (checkCount() == 0)  {
		alert("삭제할 항목을 선택해주세요.");
	} else  {
		var delYN = confirm("정말 삭제하시겠습니까??");

		if(!delYN){
			return false;
		}
		form.submit();
	}	
}

// 기업고객 삭제
function custCompDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_cust_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				$.ajax({
					url : ctx+'/custCompDelete.do',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							location.href = ctx + "/custcomp";
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
	});
}

//탭 이동
function ccTabFunc(cust_id, cust_nm) {
	$("#nowCust_id").val(cust_id);
	viewDetail(cust_id);
	
	$(document).ready(function() {
		$("#nowCust_id").val(cust_id); // 현재 cust_id 저장
		$("#nowCust_nm").val(cust_nm); // 현재 cust_nm 저장
			
		if($("#tab1").is(":checked")){ 
			if(cust_id != '')	pocList(cust_id);	 // 고객사 담당자 불러오기
		} 
//		else if($("#tab2").is(":checked")){ 
//			if(cust_id != '')	posList(cust_id);	 // 영업 담당자 불러오기
//		} 
		  else if($("#tab3").is(":checked")){		
			if(cust_id != '')	keymanList(cust_id); // 키맨 불러오기
		} else if($("#tab4").is(":checked")){
			if(cust_id != '')	opptTabList(cust_id);   // 영업기회 불러오기
		} else if($("#tab5").is(":checked")){
			if(cust_id != '')	actList(cust_id);    // 영업활동 불러오기
		} else if($("#tab6").is(":checked")){
			if(cust_id != '')	estList(cust_id);    // 견적 불러오기
		}
	});
}

// 고객사 상세보기
function viewDetail(cust_id){
	var ctx = $("#ctx").val();
	location.href = ctx+'/custcompDetail?cust_id=' + cust_id;
}

// 조회 페이징
function schPaging(ccPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var sch_cust_nm = $("#sch_cust_nm").val();
		var sch_comp_num = $("#sch_comp_num").val();
		var sch_corp_num = $("#sch_corp_num").val();
		var sch_iuser_nm = $("#sch_iuser_nm").val();
		if(sch_cust_nm == '' && sch_comp_num == '' && sch_corp_num == '' && sch_iuser_nm == ''){
			alert("검색어를 입력하세요");
		} else{
			var allData = {"ccPageNum": ccPageNum, "sch_cust_nm": sch_cust_nm, "sch_comp_num":sch_comp_num
					, "sch_comp_num":sch_comp_num,"sch_corp_num":sch_corp_num,"sch_iuser_nm":sch_iuser_nm};
			var tbody = $('#ccListTbody');
			var tbodyContent = "";
			
			$.ajax({
				url : ctx+'/custcompPaging.do',
				type : 'POST',
				data : allData,
				dataType : "json",
				success : function(data) {
					if(data.result == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						if(data.ccVOListSize == 0){
							alert("검색결과가 없습니다.");
							location.href = ctx+'/custcomp';
						}else{
							tbody.children().remove();
							
							$("#sch_cust_nm").val(data.sch_cust_nm);
							$("#sch_comp_num").val(data.sch_comp_num);
							$("#sch_corp_num").val(data.sch_corp_num);
							$("#sch_iuser_nm").val(data.sch_iuser_nm);
							for (var i = 0; i < data.ccVOList.length; i++) {
								tbodyContent = "<tr>"
									+"<th><input type='checkbox' id='chk_cust_id' value='"+data.ccVOList[i].cust_id+"' onclick='chkCancel();'></th>"
									+"<td style='text-align: left; padding-left: 8px;'>"
									+"<a href='#' style='color: blue;' class='cnClick' onclick=\"ccTabFunc('"+data.ccVOList[i].cust_id+"', '"+data.ccVOList[i].cust_nm+"');\">"+data.ccVOList[i].cust_nm+"</a></td>"
									+"	<td>"+data.ccVOList[i].comp_num+"</td>"
									+"<td>"+data.ccVOList[i].corp_num+"</td>"
									+"<td>"+data.ccVOList[i].rep_ph1+"-"+data.ccVOList[i].rep_ph2+"-"+data.ccVOList[i].rep_ph3+"</td>"
									+"<td>"+data.ccVOList[i].sales_scale+"</td>"
									+"<td style='text-align: right; padding-right: 8px;'>"+data.ccVOList[i].emp_qty+"</td>"
									+"<td>"+data.ccVOList[i].indst+"</td>"
									+"<td>"+data.ccVOList[i].iuser_nm+"</td>"
									+"<td>"+data.ccVOList[i].fst_reg_dt+"</td></tr>";
								tbody.append(tbodyContent);
								$("#ccListCheck").prop("checked", false);
							}
							
							if(data.ccVOList.length < 5){
								for(var j = 0; j < 5-data.ccVOList.length; j++){
									tbodyContent ="<tr style='height:30px;'>"
										+"<th></th>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td></tr>";
									tbody.append(tbodyContent);
								}
							}
							var pageContent = "";
							// 페이징 다시그리기
							$("#pagingDiv").children().remove();
							
							if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
							} else if(data.ccPageNum == data.page.startPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							} else if(data.ccPageNum == data.page.endPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a> / "+data.page.endPageNum+"</a>"
								+"<a> ▶ </a>";
							} else {
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.ccPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							}
							$("#pagingDiv").append(pageContent);
						}
					}
				},
				error : function() {
					alert("전송중 오류가 발생했습니다.");
				}
			});//ajax
		}
	});//document.ready
}

// 기업고객 상세보기 ajax 통신
function ccDetail(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		$("#mdfBtn").attr("disabled", false);
		
		// 버튼 재설정
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
		
		$.ajax({
			type : 'POST',
			url : ctx+'/custCompDetail',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				$("#nowCust_id").val(data.cust_id);
				$("#nowCust_nm").val(data.cust_nm);
				// 상세정보에 값 넣기
				$("#cust_id").val(data.cust_id); // 기업아이디
				$("#cust_nm").val(data.cust_nm).attr("readonly","readonly"); // 기업명
				$("#comp_num").val(data.comp_num).attr("readonly","readonly"); // 사업자번호
				$("#corp_num").val(data.corp_num).attr("readonly","readonly"); // 법인번호
				$("#sales_scale_cd").children().eq(data.sales_scale_cd).attr("selected", "selected"); // 매출규모 코드 선택
				$("#emp_qty").val(data.emp_qty).attr("readonly","readonly"); // 직원수
				$("#indst_cd").children().eq(data.indst_cd).attr("selected", "selected"); // 산업군 코드 선택
				$("#aHpUrl").prop("href", "http://"+data.homepage_url);
				$("#homepage_url").css({"cursor" : "pointer", "color" : "blue"}); // 홈페이지
				$("#homepage_url").val(data.homepage_url).attr("readonly","readonly"); // 홈페이지
				$("#rep_ph1").val(data.rep_ph1).attr("readonly","readonly"); // 대표전화번호
				$("#rep_ph2").val(data.rep_ph2).attr("readonly","readonly");
				$("#rep_ph3").val(data.rep_ph3).attr("readonly","readonly");
				$("#cust_zip_cd1").val(data.cust_zip_cd.substring(0, 3)); // 우편번호
				$("#cust_zip_cd2").val(data.cust_zip_cd.substring(3, 6)); // 우편번호
				$("#cust_zip_addr").val(data.cust_zip_addr).attr("readonly","readonly"); // 우편번호 상 주소
				$("#cust_addr").val(data.cust_addr); // 고객 주소
				$("#zip_cd_sri_num").val(data.zip_cd_sri_num); // 우편번호 일련번호
				$("#iuser_nm").val(data.iuser_nm).attr("readonly","readonly"); // 영업담당자
				$("#iuser_id_nm").val(data.iuser_id_nm).attr("readonly","readonly"); // 영업담당자
				$("#stat_cd").children().eq(data.stat_cd).attr("selected", "selected"); // 기업 상태 코드 선택
				
				// 히든 속성에 value값 설정하기
				$("#hcust_nm").val(data.cust_nm); // 기업명
				$("#hcomp_num").val(data.comp_num); // 사업자번호
				$("#hcorp_num").val(data.corp_num); // 법인번호
				$("#hsales_scale_cd").val(data.sales_scale_cd); // 매출규모 코드 선택
				$("#hemp_qty").val(data.emp_qty); // 직원수
				$("#hindst_cd").val(data.indst_cd); // 산업군 코드 선택
				$("#hhomepage_url").val(data.homepage_url); // 홈페이지
				$("#hrep_ph1").val(data.rep_ph1); // 대표전화번호
				$("#hrep_ph2").val(data.rep_ph2);
				$("#hrep_ph3").val(data.rep_ph3);
				$("#hcust_zip_cd").val(data.cust_zip_cd); // 우편번호
				$("#hcust_zip_addr").val(data.cust_zip_addr); // 우편번호 상 주소
				$("#hcust_addr").val(data.cust_addr); // 고객 주소
				$("#hiuser_id_nm").val(data.iuser_id_nm); // 영업담당자
				$("#hiuser_nm").val(data.iuser_nm); // 영업담당자
				$("#hstat_cd").val(data.stat_cd); // 기업 상태 코드 선택
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//고객사 담당사원 List ajax 통신
function pocList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#pocTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccPocList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				//고객사 담당자 리스트 그리기
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 고객사 담당자가 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}
				else
				{
					for (var i = 0; i < data.length; i++) {
						tbodyContent = "<tr>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].cust_id+":"+data[i].iuser_id+"' id='pocChkbox'  onclick='pocchkCancel();'></td>" +
						"<td style='width:10%; text-align: left; padding-left: 8px;'>"+data[i].cust_nm+"</td>" +
						"<td style='width:15%;'><a href='#' onclick=\"ccMngDetail('"+data[i].cust_id+"','"+data[i].iuser_id+"','"+data[i].iuser_nm+"');\" style='color:blue;' class='cnClick'>"+data[i].iuser_nm+"</td>" +
						"<td style='width:15%;'>"+data[i].key_part+"</td>" +
						"<td style='width:8%;'>"+data[i].fst_reg_id+"</td>" +
						"<td style='width:17%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

//영업 담당자 List ajax 통신
function posList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#posTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccPosList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				//영업 담당자 리스트 그리기
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 영업 담당자가 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					for (var i = 0; i < data.length; i++) {
						tbodyContent = "<tr>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].sales_actvy_id+":"+data[i].iuser_id+"' id='posChkbox'  onclick='posSalechkCancel();'></td>" +
						"<td style='width:10%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"posDeatil('"+data[i].sales_actvy_id+"','"+data[i].iuser_id+"');\" style='color:blue;' class='cnClick'>"+data[i].sales_actvy_nm+"</td>" +
						"<td style='width:15%;'>"+data[i].iuser_nm+"</td>" +
						"<td style='width:15%;'>"+data[i].key_part+"</td>" +
						"<td style='width:8%;'>"+data[i].fst_reg_id+"</td>" +
						"<td style='width:17%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 키맨 List ajax 통신
function keymanList(cust_id) {
 	$(document).ready(function() {
 		var ctx = $("#ctx").val();
		var tbody = $('#keymanTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccKeymanList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				// 키맨 리스트 그리기
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 키맨이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					for (var i = 0; i < data.length; i++) {
						tbodyContent = "<tr>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].cont_id+':'+data[i].cust_id+"' id='kmChkbox'  onclick='kmchkCancel();'></td>" +
						"<td style='width:10%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"keymanDeatil('"+data[i].cust_id+"','"+data[i].cont_id+"');\" style='color:blue;' class='cnClick'>"+data[i].cont_nm+"</td>" +
						"<td style='width:15%;'>"+data[i].key_part+"</td>" +
						"<td style='width:15%;'>"+data[i].key_pos+"</td>" +
						"<td style='width:10%;'>"+data[i].key_job+"</td>" +
						"<td style='width:12%;'>"+data[i].memo+"</td>" +
						"<td style='width:10%;'>"+data[i].fst_reg_id+"</td>" +
						"<td style='width:15%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}
// 영업기회 List ajax 통신
//function opptList(cust_id) {
//	$(document).ready(function() {
//		var ctx = $("#ctx").val();
//		var tbody = $('#opptTableTbody');
//		var tbodyContent = "";
//		$.ajax({
//			url : ctx+'/ccOpptList',
//			type : 'POST',
//			data : "cust_id="+cust_id,
//			dataType : "json",
//			success : function(data) {
//				tbody.children().remove();
//				if(data.length == 0){
//					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 영업기회가 없습니다.</td></tr>";
//					tbody.append(tbodyContent);
//				}else{
//					// 영업기회 리스트 그리기
//					for (var i = 0; i < data.length; i++) {
//						var expt_sales_amt = comma(data[i].expt_sales_amt);
//						
//						tbodyContent = "<tr>" +
//						"<td style='width:3%;'><input type='checkbox' value='"+data[i].sales_oppt_id+"' id='chk_oppt_id' onclick=\"opptChkCancel();\"></td>" +
//						"<td style='width:30%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccOpptDetail('"+data[i].sales_oppt_id+"');\" style='color:blue;' class='cnClick'>"+data[i].sales_oppt_nm+"</a></td>" +
//						"<td style='width:8%;'>"+data[i].sales_lev_cd_nm+"</td>" +
//						"<td style='width:12%; text-align: right; padding-right: 8px;'>"+expt_sales_amt+"</td>" +
//						"<td style='width:12%;'>"+data[i].expt_fin_d+"</td>" +
//						"<td style='width:7%;'>"+data[i].psblty_rate+"</td>" +
//						"<td style='width:7%;'>"+data[i].sales_oppt_stat_cd_nm+"</td>" +
//						"<td style='width:8%;'>"+data[i].fst_reg_id+"</td>" +
//						"<td style='width:15%;'>"+data[i].fst_reg_dt+"</td>" +
//						"</tr>";
//						tbody.append(tbodyContent);
//					}
//					if(data.length < 5){
//						for(var j = 0; j < 5-data.length; j++){
//							tbodyContent = "<tr style='height: 25px;'><td style='width:3%;'></td><td style='width:30%;'></td>" +
//							"<td style='width:8%;'></td><td style='width:12%;'></td><td style='width:12%;'></td>" +
//							"<td style='width:7%;'></td><td style='width:7%;'></td><td style='width:8%;'></td><td style='width:15%;'></td></tr>";
//							tbody.append(tbodyContent);
//						}
//					}
//				}
//			},
//			error : function() {
//				alert("전송중 오류가 발생했습니다.");
//			}
//		});
//	});
//}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function dateFormatTime(timestamp){
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
	                        + (day < 10 ? "0" + day : day) + " " 
	                        + (hour < 10 ? "0" + hour : hour) + ":"
	                        + (min < 10 ? "0" + min : min);
	return retVal
}

// 영업활동 List ajax 통신
function actList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#actTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccActList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='10'>등록된 영업활동이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 영업활동 리스트 그리기
					for (var i = 0; i < data.length; i++) {
					/*	var strt_d = dateFormat(Number(data[i].strt_d));
						var end_d = dateFormat(Number(data[i].end_d));
						var fst_reg_dt = dateFormatTime(Number(data[i].fst_reg_dt));*/
						var strt_t = data[i].strt_t;
						var end_t = data[i].end_t;
						
						if(strt_t == null){
							strt_t = '';
						}
						if(end_t == null){
							end_t = '';
						}
						tbodyContent = "<tr>"
							+ "<td rowspan='2'><input type='checkbox' value='"+data[i].sales_actvy_id+"' id='chk_act_id' onclick=\"actChkCancel();\"></td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccActDetail('"+data[i].sales_actvy_id+"');\" style='color:blue;' class='cnClick'>"+data[i].sales_actvy_nm+"</a></td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_div_nm+"</td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'>"+data[i].sales_oppt_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_type_nm+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].strt_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+strt_t+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_stat_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_id+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_dt+"</td>"
							+ "</tr><tr>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].end_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+end_t+"</td></tr>";
						tbody.append(tbodyContent);
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 견적 List ajax 통신
function estList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#estTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccEstimList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='8'>등록된 견적이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 견적 리스트 그리기
					for (var i = 0; i < data.length; i++) {
					//	var sales_price = comma(data[i].sales_price);
						tbodyContent = "<tr>"
							+ "<th><input type='checkbox' value='"+data[i].estim_id+"' id='chk_est_id' onclick='estChkCancel();'></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccEstDetail('"+data[i].estim_id+"');\"  style='color:blue;' class='cnClick'>"+data[i].estim_nm+"</td>"
							+ "<td>"+data[i].estim_lev_cd_nm+"</td>"
							+ "<td>"+data[i].estim_qty+"</td>"
							+ "<td>"+data[i].sales_price+"</td>"
							+ "<td>"+data[i].estim_valid_d+"</td>"
							+ "<td>"+data[i].memo+"</td>"
							+ "<td>"+data[i].fst_reg_id+"</td>"
							+ "<td>"+data[i].fst_reg_dt+"</td>"
							+ "</tr>";
						tbody.append(tbodyContent);
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 계약 List ajax 통신
function contList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#contTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccContList',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='8'>등록된 계약이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 계약 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var contr_amt = comma(data[i].contr_amt);
						tbodyContent = "<tr>"
							+ "<th><input type='checkbox' value='"+data[i].contr_id+"' id='chk_cont_id' onclick=\"contChkCancel();\"></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccContDetail('"+data[i].contr_id+"');\" style='color:blue;' class='cnClick'>"+data[i].contr_nm+"</a></td>"
							+ "<td>"+data[i].contr_num+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+data[i].contr_qty+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+contr_amt+"</td>"
							+ "<td>"+data[i].contr_d+"</td>"
							+ "<td>"+data[i].fst_reg_id+"</td>"
							+ "<td>"+data[i].fst_reg_dt+"</td>"
							+ "</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr>"
								+ "<th></th>"
								+ "<td></td><td></td><td></td>"
								+ "<td></td><td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

