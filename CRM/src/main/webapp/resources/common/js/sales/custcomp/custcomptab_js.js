/**
 * 함수목록
 * ccMngDetail(cust_id,iuser_id,org_nm,iuser_nm) 	: 고객명 클릭 시 detail값 
 * pocDeatil(cust_id) 								: 고객사담당자 상세정보
 * addCustManager(ctx) 								: 고객사별 담당사원 추가 팝업
 * custMngDelete() 									: 키맨 삭제
 * keymanDeatil(cust_id,cont_id, cont_nm) 			: 키맨 상세정보 
 * keymanDelete()									: 키맨 삭제
 * opptChkCancel() 									: 영업기회 전체 선택해제
 * ccOpptDetail(sales_oppt_id) 						: 영업기회 상세정보 
 * ccOpptDel(ctx) 									: 영업기회 삭제
 * actChkCancel()  									: 영업활동 전체선택 해제
 * ccActDetail(sales_actvy_id) 						: 영업활동 상세정보
 * custActiveAdd(ctx) 								: 영업활동 추가 팝업
 * ccActDel(ctx) 		 							: 영업활동 삭제
 * estChkCancel() 									: 견적 전체선택 해제
 * ccEstDetail(estim_id) 							: 견적 상세정보
 * estimateAdd(ctx) 								: 견적 추가 팝업
 * ccEstDel(ctx) 									: 견적 삭제
 * contChkCancel()  								: 계약 전체선택 해제
 * ccContDetail(contr_id) 							: 계약 상세정보
 * ccContDel(ctx) 									: 계약 삭제
 * posSalechkCancel() 								: 영업담당자 전체선택 해제
 * posDeatil(sales_actvy_id, iuser_id) 				: 영업담당자 상세정보
 * custPosAdd(ctx) 									: 영업담당자 추가 팝업
 * posDelete() 										: 영업담당자 삭제
 * addCustComp(ctx) 								: 기업고객 추가
 * mdfyCustComp(ctx) 								: 기업고객 수정
 * custCompMdfyBtn() 								: 편집버튼
 * custCompCancelBtn() 								: 취소버튼
 * onlyNumber(event) 								: 숫자만 입력받는 함수
 * readDetail() 									: 입력창 비활성화
 * 
**/
$(document).ready(function() {
	
	var ctx = $("#ctx").val();
	var flg = $("#flg").val();
	
	custActiveAdd(ctx);
//	estimateAdd(ctx);
	custPosAdd(ctx);
	addCustManager(ctx);
	
	// 우편번호 검색 팝업
	$('#addr').click(function(){
		window.open(ctx+'/ccAddrListPop','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	// 직원검색 팝업
	$('#iuser_search').click(function(){
		window.open(ctx+'/iuserSearchPop','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	// 키맨 추가 팝업
	$('#keyman_pop_btn').click(function(){

		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/keymanPopup?cust_id='+cust_id+'&flag=0',
						'newwindow','width=770, height=385, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업활동 추가 팝업
	$('#act_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/actPopup?cust_id='+cust_id+'&flag=0',
						'newwindow','width=770, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 계약 추가 팝업
	$('#cont_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/contPopup?cust_id='+cust_id+'&flag=0',
					     'newwindow','width=770, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 기업고객 영업기회 탭 리스트 체크박스 선택, 해제
	$("#ccOpptListCheck").click(function(){
		if($("#ccOpptListCheck").prop("checked")){
			$("input[id=chk_oppt_id]").prop("checked", true);
		} else {
			$("input[id=chk_oppt_id]").prop("checked", false);
		}
	});
	
	// 기업고객 영업활동 탭 리스트 체크박스 선택, 해제
	$("#ccActListCheck").click(function(){
		if($("#ccActListCheck").prop("checked")){
			$("input[id=chk_act_id]").prop("checked", true);
		} else {
			$("input[id=chk_act_id]").prop("checked", false);
		}
	});
	
	// 기업고객 견적 탭 리스트 체크박스 선택, 해제
	//견적 모두 선택
	$("#ccEstListCheck").click(function(){
		if($("#ccEstListCheck").prop("checked")){
			$("input[id=chk_est_id]").prop("checked", true);
		} else {
			$("input[id=chk_cust_id]").prop("checked", false);
		}
	});
	
	// 기업고객 계약 탭 리스트 체크박스 선택, 해제
	$("#ccContListCheck").click(function(){
		if($("#ccContListCheck").prop("checked")){
			$("input[id=chk_cont_id]").prop("checked", true);
		} else {
			$("input[id=chk_cont_id]").prop("checked", false);
		}
	});
	
	// 영업담당자 탭 리스트 체크박스 선택, 해제
	$("#posListCheck").click(function(){
		if($("#posListCheck").prop("checked")){
			$("input[id=posChkbox]").prop("checked", true);
		} else {
			$("input[id=posChkbox]").prop("checked", false);
		}
	});
	// 고객담당자 탭 리스트 체크박스 선택, 해제
	$("#pocListCheck").click(function(){
		if($("#pocListCheck").prop("checked")){
			$("input[id=pocChkbox]").prop("checked", true);
		} else {
			$("input[id=pocChkbox]").prop("checked", false);
		}
	});
	
});

//고객사별 담당사원 추가 팝업
function addCustManager(ctx){
	$('#poc_pop_btn').click(function(){
		
		var custId = $('#nowCust_id').val();
		if(custId == "" || custId == null ){
			alert("고객사를 선택해주세요.");
		}else{
			var list_cust_id = $('#nowCust_id').val();
			var list_cust_nm = $('#nowCust_nm').val();
	
			window.open(ctx+'/custMngPopup?list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm,
					'newwindow1','width=770, height=310, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
}

//고객명 클릭 시 detail값 가져오는 함수
function ccMngDetail(cust_id,iuser_id,org_nm,iuser_nm){
	
	var list_cust_nm = $('#nowCust_nm').val();
	
	window.open('custMngDetailPopup?list_cust_id='+cust_id+'&list_cust_nm='+list_cust_nm+'&org_nm='+org_nm+
				'&list_iuser_id='+iuser_id+'&list_iuser_nm='+iuser_nm,
				'newwindow1','width=770, height=310, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//키맨 삭제
function custMngDelete() {
	var ccMngDelList = [];
	$(":checkbox[id='pocChkbox']:checked").each(function(index, item){
		ccMngDelList[index] = item.value;
	});
	if(ccMngDelList.length == 0){
		alert("삭제할 항목을 선택해주세요.");
		return false;
	}
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#nowCust_id").val();
		$.ajax({
			url : ctx+'/custMngDelete',
			type : 'POST',
			data :  {ccMngDelList :ccMngDelList},
			dataType : 'json',
			success : function(data){
				if(data.deleteResult == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				} else {
					pocList(cust_id);
				}
			},
			error : function(request){
				alert(request.status);
			}
		});
	} else {
		return;
	}
}
function pocchkCancel(){
	$("#pocListCheck").prop("checked", false);
}

//고객사 담당자 상세정보
function pocDeatil(cust_id) {
	var ctx = $("#ctx").val();
	window.open(ctx+'/pocDeatilPopup?cust_id='+cust_id+'&flag=1',
				'newwindow','width=770, height=385,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업 담당자 상세정보
function posDeatil(sales_actvy_id, iuser_id) {
	var ctx = $("#ctx").val();
	var cust_id = $("#nowCust_id").val();
	window.open(ctx+'/custPosDetailPopup?sales_actvy_id='+sales_actvy_id+'&iuser_id='+iuser_id+'&cust_id='+cust_id+'&flag=1',
				'newwindow','width=770, height=460,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//키맨 상세정보 팝업
function keymanDeatil(cust_id,cont_id, cont_nm) {
	var ctx = $("#ctx").val();
	//var cont_nm = $("#cont_nm").val();
	window.open(ctx+'/keymanDetailPopup?cust_id='+cust_id+'&flag=1'+'&cont_id=' + cont_id+'&cont_nm=' + cont_nm,
				'newwindow','width=770, height=385,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업기회 상세정보 팝업
function ccOpptDetail(sales_oppt_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/opptDetailPopup?sales_oppt_id='+sales_oppt_id+'&flag=1',
				'newwindowDetail','width=925, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업활동 상세정보 팝업
function ccActDetail(sales_actvy_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/custActiveDetailPopup?sales_actvy_id='+sales_actvy_id+'&flag=1',
				'newwindow','width=770, height=635, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 견적 상세정보 팝업
function ccEstDetail(estim_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/custEstimDetail?estim_id='+estim_id+'&flag=1',
				'newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//계약 상세정보 팝업
function ccContDetail(contr_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/contDetailPopup?contr_id='+contr_id+'&flag=1','newwindow','width=500, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}


//영업담당자 추가 팝업
function custPosAdd(ctx){
	$('#pos_pop_btn').click(function(){
		
		var list_sales_oppt_id = $('#salesId').val();
		var list_cust_id = $('#nowCust_id').val();
		var list_cust_nm = $('#nowCust_nm').val();
		
		window.open(ctx+'/custPosPopup?list_sales_oppt_id='+list_sales_oppt_id+
				'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&flag=1', 'newwindow','width=510, height=630, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		
	});
}


//영업활동 추가 팝업
function custActiveAdd(ctx){
	$('#act_cust_nm').click(function(){
		
		var list_sales_oppt_id = $('#salesId').val();
		var list_cust_id = $('#nowCust_id').val();
		var list_cust_nm = $('#cust_nm').val();
		
		window.open(ctx+'/custActivePopup?list_sales_oppt_id='+list_sales_oppt_id+
					'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&flag=1',
					'newwindow','width=770, height=635, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		
	});
}

//견적 추가 팝업
function estimateAdd(ctx){
	$('#estimateAdd').click(function(){
		var hsales_lev_cd = $("#hsales_lev_cd").val();
		var salesId = $('#salesId').val();
		var sales_lev_cd = $('#'+salesId+' #list_sales_lev_cd').val();
		var list_cust_id = $('#nowCust_id').val();
		
			if(list_cust_id == "" || list_cust_id == null ){
				alert("고객사를 선택해주세요.");
			} else if(sales_lev_cd == "0001" || sales_lev_cd == "0004"){
				alert("영업단계가 \"제안\", \"견적\"일 때 견적 추가가 가능합니다.");
			} else {
				var list_sales_oppt_id = $('#salesId').val();
				var list_cust_id = $('#nowCust_id').val();//list_sales_oppt_id;
				//alert(list_cust_id);
				var list_cust_nm = $('#hcust_nm').val();
				var list_sales_oppt_nm = $('#hsales_oppt_nm').val();
				var pageNum=$('#pageNum').val();
				window.open(ctx+'/custEstimatepopup?list_sales_oppt_id='+list_sales_oppt_id+'&list_cust_id='+list_cust_id+
						'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&pageNum='+pageNum+'&flag=0',
						'newwindow','width=970, height=485, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
			}
		});
}

//영업담당자 전체 체크 해제
function posSalechkCancel() {
	$(document).ready(function() {
		$("#posListCheck").prop("checked", false);
	});
}

// 영업기회 전체 체크 해제
function opptChkCancel() {
	$(document).ready(function() {
		$("#ccOpptListCheck").prop("checked", false);
	});
}

// 영업활동 전체 체크 해제
function actChkCancel() {
	$(document).ready(function() {
		$("#ccActListCheck").prop("checked", false);
	});
}

// 견적 전체 체크 해제
function estChkCancel() {
	$(document).ready(function() {
		$("#ccEstListCheck").prop("checked", false);
	});
}

// 계약 전체 체크 해제
function contChkCancel() {
	$(document).ready(function() {
		$("#ccContListCheck").prop("checked", false);
	});
}

//뒤로 버튼 기능
function custCompBackBtn() {
	history.back(-1);
}


// 편집 버튼 기능
function custCompMdfyBtn() {
	
	//focus, css, readonly, disabled false 상태로 변경
	$("#custcomptbody #cust_nm").focus();
	$("#custcomptbody input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	});
	$("#custcomptbody select").attr({
		disabled:false,
		style:'background-color:white'
	});
	
	//$("#sales_scale_cd").children().eq($("#hsales_scale_cd").val()).attr("selected", "selected"); // 매출규모 코드 선택
	//$("#indst_cd").children().eq($("#hindst_cd").val()).attr("selected", "selected"); // 산업군 코드 선택
	$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택
	
	$("#addr").attr("disabled", false);
	$("#iuser_nm").attr("readonly", true);
	$("#iuser_search").attr("disabled", false);
	$("#postcodify_search").attr("disabled", false);

	
	//버튼 활성화
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");	
}

// 취소 버튼 기능
function custCompCancelBtn() {
	var ctx = $("#ctx").val();
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
		$("#addr").attr("disabled", true);
		$("#iuser_search").attr("disabled", true);
		
		// 상세정보에 값 넣기
		$("#cust_nm").val($("#hcust_nm").val()).attr("readonly", true); // 기업명
		$("#comp_num").val($("#hcomp_num").val()).attr("readonly", true); // 사업자번호
		$("#corp_num").val($("#hcorp_num").val()).attr("readonly", true); // 법인번호
		$("#sales_scale_cd").children().eq($("#hsales_scale_cd").val()).attr("selected", "selected"); // 매출규모 코드 선택
		$("#emp_qty").val($("#hemp_qty").val()).attr("readonly", true); // 직원수
		$("#indst_cd").children().eq($("#hindst_cd").val()).attr("selected", "selected"); // 산업군 코드 선택
		$("#homepage_url").val($("#hhomepage_url").val()).attr("readonly", true); // 홈페이지
		$("#rep_ph1").val($("#hrep_ph1").val()).attr("readonly", true); // 대표전화번호
		$("#rep_ph2").val($("#hrep_ph2").val()).attr("readonly", true);
		$("#rep_ph3").val($("#hrep_ph3").val()).attr("readonly", true);
		$("#cust_zip_cd1").val($("#hcust_zip_cd").val().substring(0, 3)).attr("readonly", true); // 우편번호
		$("#cust_zip_cd2").val($("#hcust_zip_cd").val().substring(3, 6)).attr("readonly", true); // 우편번호
		$("#cust_zip_addr").val($("#hcust_zip_addr").val()).attr("readonly", true); // 우편번호 상 주소
		$("#cust_addr").val($("#hcust_addr").val()).attr("readonly", true); // 고객 주소
		$("#iuser_nm").val($("#hiuser_nm").val()).attr("readonly", true); // 영업담당자
		$("#iuser_id_nm").val($("#hiuser_id_nm").val()).attr("readonly", true); // 영업담당자
		$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택
		
//		history.back(-1);
		location.href = ctx+'/custcomp';
	}
}

// 숫자값만 입력받기
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9) {
    	return;
    } else {
    	alert("숫자만 입력이 가능합니다.");
    	return false;
    }
}
function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function ccCancel(){
	$(document).ready(function() {
		// 버튼 활성화
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA").val('');
		$("#custcomptbody input[type='hidden']").val('');
		$("#addr").attr("disabled", true);
		$("#iuser_search").attr("disabled", true);
		$("#sales_scale_cd").children().eq(0).attr("selected", "selected"); // 매출규모 코드 선택
		$("#indst_cd").children().eq(0).attr("selected", "selected"); // 산업군 코드 선택
		$("#stat_cd").children().eq(0).attr("selected", "selected"); // 기업 상태 코드 선택
	});
}

// 고객사 추가(저장버튼 클릭 시)
function addCustComp(ctx){
	
	$(document).ready(function() {
		
		var cust_nm = $("#cust_nm").val();
		var cust_div_cd = $("#cust_div_cd option:selected").val();
		var comp_num = $("#comp_num").val();
		var corp_num = $("#corp_num").val();
		var rep_ph1 = $("#rep_ph1").val();
		var rep_ph2 = $("#rep_ph2").val();
		var rep_ph3 = $("#rep_ph3").val();
		var homepage_url = $("#homepage_url").val();
		var cust_zip_cd = $("#cust_zip_cd").val();
		var cust_addr = $("#cust_addr").val();
		var cust_dtl_addr = $("#cust_dtl_addr").val();
		var cust_info_addr = $("#cust_info_addr").val();
		var sales_scale_cd = $("#sales_scale_cd option:selected").text();
		var emp_qty = $("#emp_qty").val();
		var indst_cd1 = $("#indst_cd1").val();
		var biz_status = $("#biz_status").val();
		var indst_cd = $("#indst_cd option:selected").text();
		
		var temp = comp_num.toString(); 
		var compNum = temp.length;
		
		var temp2 = corp_num.toString(); 
		var corpNum = temp2.length;

	 
		
		if (cust_nm == '' || cust_nm == null) {
			alert("고객사명을 입력하세요.");
			$("#cust_nm").focus();
		} 
		
		
		
		
		
		
		else if (cust_div_cd == '' || cust_div_cd == null || cust_div_cd == 0 ) 
		{
			alert("고객사구분을 입력하세요.");
			$("#custcomptbody #cust_div_cd").focus();
		} 
		 else if (compNum < 9 ) {
			 alert("사업자번호의 자릿수가 부족합니다.");
			 $("#custcomptbody #comp_num").focus();
		 } 
		 else if (corpNum < 9 ) {
			 alert("법인번호의 자릿수가 부족합니다.");
			 $("#custcomptbody #corp_num").focus();
		 } 
		 else		 
		{
			
			$('#custCompForm') 
			.attr('action','custcompAdd')
			.submit();
			alert("정상적으로 저장되었습니다.");
		}
	});
}	

//글자수 제한 함수
function cont_focus() {
	var str = document.board.content.value.length;
	var con = document.board.content.value;
	
	if(str >=25) {
		alert("최대 25자까지만 작성할 수 있습니다.");
		document.board.content.value = con.substring(0, 25);
		document.board.content.focus();
	} 
}

//한글 자릿수 세는 함수 
function fnChkByte(obj) {
//<textarea name="introduce" id="introduce" style="width:450px; height:80px" onkeyup="fnChkByte(this);">
    var maxByte = 600; //최대 입력 바이트 수
    var str = obj.value;
    var str_len = str.length;
 
    var rbyte = 0;
    var rlen = 0;
    var one_char = "";
    var str2 = "";
 
    for (var i = 0; i < str_len; i++) {
        one_char = str.charAt(i);
 
        if (escape(one_char).length > 4) {
            rbyte += 2; //한글2Byte
        } else {
            rbyte++; //영문 등 나머지 1Byte
        }
 
        if (rbyte <= maxByte) {
            rlen = i + 1; //return할 문자열 갯수
        }
    }
 
    if (rbyte > maxByte) {
        alert("한글 " + (maxByte / 2) + "자 / 영문 " + maxByte + "자를 초과 입력할 수 없습니다.");
        str2 = str.substr(0, rlen); //문자열 자르기
        obj.value = str2;
        fnChkByte(obj, maxByte);
    } else {
        document.getElementById('byteInfo').innerText = rbyte;
    }
}




// 기업고객 수정
function mdfyCustComp(ctx){
	
	$(document).ready(function() {
		
		var cust_nm = $("#cust_nm").val();
		var cust_div_cd = $("#cust_div_cd option:selected").text();
		var comp_num = $("#comp_num").val();
		var corp_num = $("#corp_num").val();
		var rep_ph1 = $("#rep_ph1").val();
		var rep_ph2 = $("#rep_ph2").val();
		var rep_ph3 = $("#rep_ph3").val();
		var homepage_url = $("#homepage_url").val();
		var cust_zip_cd = $("#cust_zip_cd").val();
		var cust_addr = $("#cust_addr").val();
		var cust_dtl_addr = $("#cust_dtl_addr").val();
		var cust_info_addr = $("#cust_info_addr").val();
		var sales_scale_cd = $("#sales_scale_cd option:selected").text();
		var emp_qty = $("#emp_qty").val();
		//var indst_cd1 = $("#indst_cd1").val();
		var biz_status = $("#biz_status").val();
		var indst_cd = $("#indst_cd option:selected").text();
		    
		$('#custCompForm') 
		.attr('action','custcompModify')
		.submit();
		alert("정상적으로 저장되었습니다.");
	});
}


//입력창 비활성화 함수
function readDetail(){
	$("#custcompDetail input[type='text'],textarea,input[type='date']").attr({
		renly:true,
		style:'background-color: #eaeaea'  
	});

	$("#custcompDetail select").attr({
		disabled:true,
	});	
	$("#custcompDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});
	
	$("#custcompDetail select").attr({
		disabled:true,
	});	
//	$("#customer").attr("disabled",true);
//	$("#memo").attr("style","resize: none;");
}

//영업담당자 삭제
function posDelete() {
	var chked_val = [];
 	$(":checkbox[id='posChkbox']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#nowCust_id").val();
		var sales_actvy_id = $("#sales_actvy_id").val();
		//alert("영업담당자 삭제 : " + cust_id);
		$.ajax({
			url : ctx+'/custSaleActDelete',
			type : 'POST',
			data :  JSON.stringify(chked_val),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				if(data.deleteResult == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				} else {
					alert(data.deleteResult);
					posList(cust_id);
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


//키맨 삭제
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
			url : ctx+'/delKeyman',
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

//영업기회 삭제
function ccOpptDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_oppt_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/ccOpptDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							opptList(cust_id);
							opptChkCancel();
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

//영업활동 삭제
function ccActDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_act_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#cust_id").val();
				$.ajax({
					url : '/custActiveDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							actList(cust_id);
							actChkCancel();
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

//견적 삭제
function ccEstDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_est_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#cust_id").val();
				$.ajax({
					url : ctx+'/custEstimDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							estList(cust_id);
							estChkCancel();
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

//계약 삭제
function ccContDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_cont_id']:checked").each(function(index, item){//체크박스 아이디
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/contListDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						alert(data.deleteResult);
						contList(cust_id);
					},
					error : function(data){
						alert(data.deleteResult);
						contList(cust_id);
					}
				});
			} else {
				return;
			}
		}
	});
}
