
$(document).ready(function() {
	
	var ctx = $("#ctx").val();

	estimateAdd(ctx);
	
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
			window.open(ctx+'/keymanPopup?cust_id='+cust_id+'&flag=0','newwindow','width=450, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업기회 추가 팝업
	$('#oppt_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();3
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/opptPopup?cust_id='+cust_id+'&flag=0','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업활동 추가 팝업
	$('#act_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/actPopup?cust_id='+cust_id+'&flag=0','newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 견적 추가 팝업
//	$('#estimateAdd').click(function(){
//		var cust_id = $("#nowCust_id").val();
//		var cust_nm = $("#nowCust_nm").val();
//		if(cust_id == ''){
//			alert('고객을 선택해주세요.');
//			return;
//		}else {
//			var cust_nm = $("#nowCust_nm").val();
//			window.open(ctx+'/custEstimatepopup?cust_id='+cust_id+'&cust_nm='+cust_nm+'&flag=0','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
//		}
//	});
	
	// 계약 추가 팝업
	$('#cont_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/contPopup?cust_id='+cust_id+'&flag=0','newwindow','width=420, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
			$("input[id=chk_cont_id]").prop("checked", true);
		} else {
			$("input[id=chk_cont_id]").prop("checked", false);
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
});

//고객사 담당자 상세정보
function pocDeatil(cust_id) {
	var ctx = $("#ctx").val();
	window.open(ctx+'/pocDeatilPopup?cust_id='+cust_id+'&flag=1','newwindow','width=450, height=460,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업 담당자 상세정보
function posDeatil(cust_id) {
	var ctx = $("#ctx").val();
	window.open(ctx+'/posDeatilPopup?sales_actvy_id='+sales_actvy_id+'&flag=1','newwindow','width=450, height=460,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 키맨 상세정보
function keymanDeatil(cust_id) {
	var ctx = $("#ctx").val();
	var cont_nm = $('#hcont_nm').val();
	
	window.open(ctx+'/keymanDetailPopup?cust_id='+cust_id+'&flag=1','newwindow','width=450, height=460,, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업기회 상세정보 팝업
function ccOpptDetail(sales_oppt_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/opptDetailPopup?sales_oppt_id='+sales_oppt_id+'&flag=1','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업활동 상세정보 팝업
function ccActDetail(sales_actvy_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/actDetailPopup?sales_actvy_id='+sales_actvy_id+'&flag=1','newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
				alert(list_cust_id);
				var list_cust_nm = $('#hcust_nm').val();
				var list_sales_oppt_nm = $('#hsales_oppt_nm').val();
				var pageNum=$('#pageNum').val();
				window.open(ctx+'/custEstimatepopup?list_sales_oppt_id='+list_sales_oppt_id+'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&pageNum='+pageNum+'&flag=0','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
			}
		});
}

// 견적 상세정보 팝업
function ccEstDetail(estim_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/custEstimatepopup?estim_id='+estim_id+'&flag=1','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 계약 상세정보 팝업
function ccContDetail(contr_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/contDetailPopup?contr_id='+contr_id+'&flag=1','newwindow','width=500, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
198
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

// 추가 버튼 기능
function custCompAddBtn() {
	
	//focus, css, readonly, disabled false 상태로 변경
	//값 초기화
	$("#custcomptbody #cust_nm").focus();
	$("#custcomptbody input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	}).val('');
	$("#custcomptbody select").attr({
		disabled:false,
		style:'background-color:white'
	});
	
	// 버튼 활성화
	$("#sales_scale_cd").children().eq(0).attr("selected", "selected").css("height", "24pt"); // 매출규모 코드 선택
	$("#indst_cd").children().eq(0).attr("selected", "selected"); // 산업군 코드 선택
	//$("#stat_cd").children().eq(0).attr("selected", "selected"); // 기업 상태 코드 선택
	$("#iuser_nm").attr("readonly", true);
//	$("#iuser_search").attr("disabled", false);
	
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
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
	
//	$("#custcomptbody #cust_nm, #custcomptbody #cust_div_cd").attr("readonly",false);
	
//	$("#cust_zip_cd").attr("readonly", true);
//	$("#cust_addr").attr("readonly", true);
//	$("#cust_dtl_addr").attr("readonly", true);
	
	//$("#sales_scale_cd").children().eq($("#hsales_scale_cd").val()).attr("selected", "selected"); // 매출규모 코드 선택
	//$("#indst_cd").children().eq($("#hindst_cd").val()).attr("selected", "selected"); // 산업군 코드 선택
	$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택
	
	$("#addr").attr("disabled", false);
	$("#iuser_nm").attr("readonly", true);
	$("#iuser_search").attr("disabled", false);
	
	//버튼 활성화
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");	
}

// 취소 버튼 기능
function custCompCancelBtn() {
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
	}
}

// 숫자값만 입력받기
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9) 
        return;
    else
        return false;
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

// 기업고객 추가
function addCustComp(ctx){
	
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
		var sales_scale_cd = $("#sales_scale_cd option:selected").text();
		var emp_qty = $("#emp_qty").val();
		var indst_cd1 = $("#indst_cd1").val();
		var biz_status = $("#biz_status").val();
		var indst_cd = $("#indst_cd option:selected").text();
		
		$('#custCompForm') 
		.attr('action','custcompAdd')
		.submit();
		
	});
}	
	
//		if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
//			alert("기업명을 입력해 주세요");
//			$("#cust_nm").focus();
//			return false;
//		} else if($("#comp_num").val() == '' || $("#comp_num").val() == null) {
//			alert("사업자번호를 입력해 주세요");
//			$("#comp_num").focus();
//			return false;
//		} else if($("#corp_num").val() == '' || $("#corp_num").val() == null) {
//			alert("법인번호를 입력해 주세요");
//			$("#corp_num").focus();
//			return false;
//		} else if($("#sales_scale_cd").val() == 0) {
//			alert("매출규모를 선택해 주세요");
//			$("#sales_scale_cd").focus();
//			return false;
//		} 
		/*else if($("#emp_qty").val() == '' || $("#emp_qty").val() == null) {
			alert("직원수를 입력해 주세요");
			$("#emp_qty").focus();
			return false;
		}*/ 
//		else if( $("#indst_cd").val() == 0){
//			alert("산업군을 선택해 주세요");
//			$("#indst_cd").focus();
//			return false;
//		}
		/* else if($("#homepage_url").val() == '' || $("#homepage_url").val() == null){
			alert("홈페이지를 입력해 주세요");
			return false;
		} */
//	else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph1").focus();
//			return false;
//		} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph2").focus();
//			return false;
//		} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph3").focus();
//			return false;
//		}
	/* else if($("#cust_zip_cd1").val() == ''|| $("#cust_zip_cd1").val() == null){
			alert("우편번호를 입력해 주세요");
			return false;
		} else if($("#cust_addr").val() == '' || $("#cust_addr").val() == null){
			alert("상세 주소를 입력해 주세요");
			$("#cust_addr").focus();
			return false;
		} */
//		else if($("#iuser_id_nm").val()  == '' || $("#iuser_id_nm").val()  == null){
//			alert("영업담당자를 입력해 주세요");
//			$("#iuser_search").focus();
//			return false;
//		} 
//		$.ajax({
//			type : 'post',
//			url : '/custcompAdd',
//			data : {
//				cust_nm : cust_nm,
//				cust_div_cd : cust_div_cd,
//				comp_num : comp_num,
//				corp_num : corp_num,
//				rep_ph1 : rep_ph1,
//				rep_ph2 : rep_ph2,
//				rep_ph3 : rep_ph3,
//				homepage_url : homepage_url,
//				cust_zip_cd : cust_zip_cd,
//				cust_addr : cust_addr,
//				cust_dtl_addr : cust_dtl_addr,
//				sales_scale_cd : sales_scale_cd,
//				emp_qty : emp_qty,
//				indst_cd : indst_cd,
//				biz_status : biz_status
//			},
//			
//			datatype : 'json',
//			success:function(result){
//				alert( cust_nm, cust_div_cd_nm, comp_num, comp_num, corp_num, 
//						rep_ph1, rep_ph2, rep_ph3, homepage_url, cust_zip_cd , cust_addr, cust_dtl_addr, 
//						sales_scale_cd_nm, emp_qty,  indst_cd_nm, biz_status );
//				
//				alert("기존고객이 추가되었습니다.");
//				location.href = ctx + "/custcomp";
//			},
//			error:function(request){
//				alert("error : " + request.status);
//			}

//		var custcompData = $("#custCompForm").serialize();
//		$.ajax({
//			url : 'custcompAdd',
//			type : 'POST',
//			data :  custcompData,
//			dataType : 'json',
//			success : function(data){
//				if(data.result == 'standard/home/session_expire'){
//					location.href = ctx + '/sessionExpire';
//				} else {
//					alert(data.inputResult);
//					ccCancel();
//					$("#sch_cust_nm").val('');
//					$("#sch_comp_num").val('');
//					$("#sch_corp_num").val('');
//					$("#sch_iuser_nm").val('');
//					location.href = ctx + "/custcomp";
//				}
//			},
//			error : function(data){
//				alert(data.inputResult);
//				history.back();
//			}
//		});
//

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
		var sales_scale_cd = $("#sales_scale_cd option:selected").text();
		var emp_qty = $("#emp_qty").val();
		//var indst_cd1 = $("#indst_cd1").val();
		var biz_status = $("#biz_status").val();
		var indst_cd = $("#indst_cd option:selected").text();
		
		
//		 var jsonData = JSON.stringify(obj);		//JSON Object 생성
//		    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
		    
		$('#custCompForm') 
		.attr('action','custcompModify')
		.submit();
		
	});
}
//	$(document).ready(function() {
//		if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
//			alert("기업명을 입력해 주세요");
//			$("#cust_nm").focus();
//			return false;
//		} else if($("#comp_num").val() == '' || $("#comp_num").val() == null) {
//			alert("사업자번호를 입력해 주세요");
//			$("#comp_num").focus();
//			return false;
//		} else if($("#corp_num").val() == '' || $("#corp_num").val() == null) {
//			alert("법인번호를 입력해 주세요");
//			$("#corp_num").focus();
//			return false;
//		} else if($("#sales_scale_cd").val() == 0) {
//			alert("매출규모를 선택해 주세요");
//			$("#sales_scale_cd").focus();
//			return false;
//		} 
		/*else if($("#emp_qty").val() == '' || $("#emp_qty").val() == null) {
			alert("직원수를 입력해 주세요");
			$("#emp_qty").focus();
			return false;
		}*/
//		else if( $("#indst_cd").val() == 0){
//			alert("산업군을 선택해 주세요");
//			$("#indst_cd").focus();
//			return false;
//		}
		/* else if($("#homepage_url").val() == '' || $("#homepage_url").val() == null){
			alert("홈페이지를 입력해 주세요");
			return false;
		} */
//		else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph1").focus();
//			return false;
//		} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph2").focus();
//			return false;
//		} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null){
//			alert("대표 전화번호를 모두 입력해 주세요");
//			$("#rep_ph3").focus();
//			return false;
//		}
		/* else if($("#cust_zip_cd").val() == ''|| $("#cust_zip_cd").val() == null){
			alert("우편번호를 입력해 주세요");
			return false;
		} else if($("#cust_addr").val() == '' || $("#cust_addr").val() == null){
			alert("상세 주소를 입력해 주세요");
			$("#cust_addr").focus();
			return false;
		} */
//		else if($("#iuser_id_nm").val()  == '' || $("#iuser_id_nm").val()  == null){
//			alert("영업담당자를 입력해 주세요");
//			$("#iuser_search").focus();
//			return false;
//		} else if($("#stat_cd").val()  == 0){
//			alert("기업상태를 선택해 주세요");
//			$("#stat_cd").focus();
//			return false;
//		}
		
//		var custcompData = { "cust_id": $("#cust_id").val(), "cust_nm": $("#cust_nm").val(), "comp_num":$("#comp_num").val()
//	 								, "corp_num":$("#corp_num").val(),"sales_scale_cd":$("#sales_scale_cd option:selected").val(),"emp_qty":$("#emp_qty").val()
//	 								, "indst_cd":$("#indst_cd option:selected").val(),"homepage_url":$("#homepage_url").val(),"rep_ph1":$("#rep_ph1").val()
//	 								, "rep_ph2":$("#rep_ph2").val(),"rep_ph3":$("#rep_ph3").val(),"cust_zip_cd1":$("#cust_zip_cd1").val(), "cust_zip_cd2":$("#cust_zip_cd2").val()
//	 								, "zip_cd_sri_num": $("#zip_cd_sri_num").val(), "cust_addr":$("#cust_addr").val(),"iuser_id_nm":$("#iuser_id_nm").val()
//	 								, "stat_cd":$("#stat_cd option:selected").val(), "ccPageNum":$("#ccPageNum").val()};
		
//		var custcompData = { "cust_id": $("#cust_id").val(), "cust_nm": $("#cust_nm").val(), "comp_num":$("#comp_num").val()
//					, "corp_num":$("#corp_num").val(),"sales_scale_cd":$("#sales_scale_cd option:selected").val(),"emp_qty":$("#emp_qty").val()
//					, "indst_cd":$("#indst_cd option:selected").val(),"homepage_url":$("#homepage_url").val(),"rep_ph1":$("#rep_ph1").val()
//					, "rep_ph2":$("#rep_ph2").val(),"rep_ph3":$("#rep_ph3").val(),"cust_zip_cd":$("#cust_zip_cd").val(), "cust_addr":$("#cust_addr").val()
//					, "cust_dtl_addr": $("#cust_dtl_addr").val(), "cust_div_cd":$("#cust_div_cd option:selected").val(),"biz_status":$("#biz_status").val()
//					, "main_prod":$("#main_prod").val(), "emp_qty":$("#emp_qty").val(), "ccPageNum":$("#ccPageNum").val()};
		
//		var ctx = $("#ctx").val();
//		$.ajax({
//			type : 'post',
//			data : {
//				pageNum : pageNum,
//				cust_id : cust_id,
//				cust_nm : cust_nm,
//				cust_zip_cd : cust_zip_cd,
//				cust_addr : cust_addr,
//				cust_dtl_addr : cust_dtl_addr,
//				cust_div_cd : cust_div_cd,
//				comp_num : comp_num,
//				corp_num : corp_num,
//				sales_scale_cd : sales_scale_cd,
//				homepage_url : homepage_url,
//				indst_cd : indst_cd,
//				biz_status : biz_status,
//				main_prod : main_prod,
//				emp_qty : emp_qty,
//				rep_ph1 : rep_ph1,
//				rep_ph2 : rep_ph2,
//				rep_ph3 : rep_ph3
//			},
//			datatype : 'json',
//			url : '/custcompModify',
//			success:function(result){
//				alert("수정되었습니다.");
//				
//				location.href= ctx + "/custcomp";
//				
//				// 버튼 활성화
//				$("#baseBtnDiv").css("display", "none");
//				$("#addBtnDiv").css("display", "block");
//				$("#mdfBtnDiv").css("display", "none");
//				
//				opportunityList(result.pageNum);
//				
//				// 수정된값 상세정보에 다시 넣기
//				$("#cust_nm").val(result.ccVO.cust_nm);
//				$("#comp_num").val(result.ccVO.comp_num);
//				$("#corp_num").val(result.ccVO.corp_num);
//				$("#emp_qty").val(result.ccVO.emp_qty);
//				$("#homepage_url").val(result.ccVO.homepage_url);
//				$("#rep_ph1").val(result.ccVO.rep_ph1);
//				$("#rep_ph2").val(result.ccVO.rep_ph2);
//				$("#rep_ph3").val(result.ccVO.rep_ph3);
//				$("#cust_zip_cd").val(result.ccVO.cust_zip_cd);
//				$("#cust_addr").val(result.ccVO.cust_addr);
//				$("#cust_dtl_addr").val(result.ccVO.cust_dtl_addr);
//				$("#biz_status").val(result.ccVO.biz_status);
//				$("#main_prod").val(result.ccVO.main_prod);
//				$("#iuser_nm").val(result.ccVO.iuser_nm);
//				
//				$("select[name=sales_scale_cd]").children().eq(result.ccVO.sales_scale_cd).attr("selected","selected").css("height", "24pt");
//				$("select[name=indst_cd]").children().eq(result.ccVO.indst_cd).attr("selected","selected").css("height", "24pt");
//				$("select[name=cust_div_cd]").children().eq(result.ccVO.cust_div_cd).attr("selected","selected").css("height", "24pt");
				
//				$("#cust_id").val(data.ccVO.cust_id); // 기업아이디
//				$("#cust_nm").val(data.ccVO.cust_nm).attr("readonly","readonly"); // 기업명
//				$("#comp_num").val(data.ccVO.comp_num).attr("readonly","readonly"); // 사업자번호
//				$("#corp_num").val(data.ccVO.corp_num).attr("readonly","readonly"); // 법인번호
//				$("#sales_scale_cd").children().eq(data.ccVO.sales_scale_cd).attr("selected", "selected"); // 매출규모 코드 선택
//				$("#emp_qty").val(data.ccVO.emp_qty).attr("readonly","readonly"); // 직원수
//				$("#indst_cd").children().eq(data.ccVO.indst_cd).attr("selected", "selected").attr("disabled", true); // 산업군 코드 선택
//				$("#homepage_url").val(data.ccVO.homepage_url).attr("readonly","readonly"); // 홈페이지
//				$("#rep_ph1").val(data.ccVO.rep_ph1).attr("readonly","readonly"); // 대표전화번호
//				$("#rep_ph2").val(data.ccVO.rep_ph2).attr("readonly","readonly");
//				$("#rep_ph3").val(data.ccVO.rep_ph3).attr("readonly","readonly");
//				$("#cust_zip_cd").val(data.ccVO.cust_zip_cd.substring(0, 5)); // 우편번호
//				$("#cust_addr").val(data.ccVO.cust_addr); // 우편번호 상 주소
//				$("#cust_dtl_addr").val(data.ccVO.cust_dtl_addr.substring(3, 6)); // 
//				$("#cust_div_cd").children().eq(data.ccVO.cust_div_cd).attr("selected", "selected"); 
//				$("#biz_status").val(data.ccVO.biz_status).attr("readonly","readonly"); 
//				$("#main_prod").val(data.ccVO.main_prod).attr("readonly","readonly");
//				$("#iuser_nm").val(data.ccVO.iuser_nm).attr("readonly","readonly"); // 영업담당자
//				$("#iuser_id_nm").val(data.ccVO.iuser_id_nm).attr("readonly","readonly"); // 영업담당자
//				$("#stat_cd").children().eq(data.ccVO.stat_cd).attr("selected", "selected"); // 기업 상태 코드 선택
//				
//				// 히든 속성에 value값 설정하기
//				$("#hcust_nm").val(data.ccVO.cust_nm); // 기업명
//				$("#hcomp_num").val(data.ccVO.comp_num); // 사업자번호
//				$("#hcorp_num").val(data.ccVO.corp_num); // 법인번호
//				$("#hsales_scale_cd").val(data.ccVO.sales_scale_cd); // 매출규모 코드 선택
//				$("#hemp_qty").val(data.ccVO.emp_qty); // 직원수
//				$("#hindst_cd").val(data.ccVO.indst_cd); // 산업군 코드 선택
//				$("#hhomepage_url").val(data.ccVO.homepage_url); // 홈페이지
//				$("#hrep_ph1").val(data.ccVO.rep_ph1); // 대표전화번호
//				$("#hrep_ph2").val(data.ccVO.rep_ph2);
//				$("#hrep_ph3").val(data.ccVO.rep_ph3);
//				$("#hcust_zip_cd").val(data.ccVO.cust_zip_cd); // 우편번호
//				$("#hcust_addr").val(data.ccVO.cust_zip_addr); // 우편번호 상 주소
//				$("#hcust_dtl_addr").val(data.ccVO.cust_addr); // 고객 주소
//				$("#hiuser_id_nm").val(data.ccVO.iuser_id_nm); // 영업담당자
//				$("#hiuser_nm").val(data.ccVO.iuser_nm); // 영업담당자
//				$("#biz_status").val(data.ccVO.biz_status); 
//				$("#main_prod").val(data.ccVO.main_prod); 
//				$("#cust_div_cd").val(data.ccVO.cust_div_cd); 
//				
//				readDetail();
//			},
//			error:function(request){
//				alert("error : " + request.status);
//			}
//		});
//	}
		
//		$.ajax({
//			url : ctx+'/custcompModify',
//			type : 'POST',
//			data :  custcompData,
//			dataType : 'json',
//			success : function(data){
//				if(data.updateResult == 'standard/home/session_expire'){
//					location.href = ctx + '/sessionExpire';
//				} else {
//					alert(data.updateResult);
//					$("#sch_cust_nm").val('');
//					$("#sch_comp_num").val('');
//					$("#sch_corp_num").val('');
//					$("#sch_iuser_nm").val('');
//					paging(data.ccPageNum);// 리스트 새로고침
//					
//					$("#mdfBtn").attr("disabled", false);
//					
//					// 버튼 재설정
//					$("#baseBtnDiv").css("display", "block");
//					$("#addBtnDiv").css("display", "none");
//					$("#mdfBtnDiv").css("display", "none");
//					$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
//					
//					$("#nowCust_id").val(data.ccVO.cust_id);
//					// 수정된값 상세정보에 다시 넣기
//					$("#cust_id").val(data.ccVO.cust_id); // 기업아이디
//					$("#cust_nm").val(data.ccVO.cust_nm).attr("readonly","readonly"); // 기업명
//					$("#comp_num").val(data.ccVO.comp_num).attr("readonly","readonly"); // 사업자번호
//					$("#corp_num").val(data.ccVO.corp_num).attr("readonly","readonly"); // 법인번호
//					$("#sales_scale_cd").children().eq(data.ccVO.sales_scale_cd).attr("selected", "selected"); // 매출규모 코드 선택
//					$("#emp_qty").val(data.ccVO.emp_qty).attr("readonly","readonly"); // 직원수
//					$("#indst_cd").children().eq(data.ccVO.indst_cd).attr("selected", "selected").attr("disabled", true); // 산업군 코드 선택
//					$("#homepage_url").val(data.ccVO.homepage_url).attr("readonly","readonly"); // 홈페이지
//					$("#rep_ph1").val(data.ccVO.rep_ph1).attr("readonly","readonly"); // 대표전화번호
//					$("#rep_ph2").val(data.ccVO.rep_ph2).attr("readonly","readonly");
//					$("#rep_ph3").val(data.ccVO.rep_ph3).attr("readonly","readonly");
//					$("#cust_zip_cd").val(data.ccVO.cust_zip_cd.substring(0, 5)); // 우편번호
//					$("#cust_addr").val(data.ccVO.cust_addr); // 우편번호 상 주소
//					$("#cust_dtl_addr").val(data.ccVO.cust_dtl_addr.substring(3, 6)); // 
//					$("#cust_div_cd").children().eq(data.ccVO.cust_div_cd).attr("selected", "selected"); 
//					$("#biz_status").val(data.ccVO.biz_status).attr("readonly","readonly"); 
//					$("#main_prod").val(data.ccVO.main_prod).attr("readonly","readonly");
//					$("#iuser_nm").val(data.ccVO.iuser_nm).attr("readonly","readonly"); // 영업담당자
//					$("#iuser_id_nm").val(data.ccVO.iuser_id_nm).attr("readonly","readonly"); // 영업담당자
//					$("#stat_cd").children().eq(data.ccVO.stat_cd).attr("selected", "selected"); // 기업 상태 코드 선택
//					
//					// 히든 속성에 value값 설정하기
//					$("#hcust_nm").val(data.ccVO.cust_nm); // 기업명
//					$("#hcomp_num").val(data.ccVO.comp_num); // 사업자번호
//					$("#hcorp_num").val(data.ccVO.corp_num); // 법인번호
//					$("#hsales_scale_cd").val(data.ccVO.sales_scale_cd); // 매출규모 코드 선택
//					$("#hemp_qty").val(data.ccVO.emp_qty); // 직원수
//					$("#hindst_cd").val(data.ccVO.indst_cd); // 산업군 코드 선택
//					$("#hhomepage_url").val(data.ccVO.homepage_url); // 홈페이지
//					$("#hrep_ph1").val(data.ccVO.rep_ph1); // 대표전화번호
//					$("#hrep_ph2").val(data.ccVO.rep_ph2);
//					$("#hrep_ph3").val(data.ccVO.rep_ph3);
//					$("#hcust_zip_cd").val(data.ccVO.cust_zip_cd); // 우편번호
//					$("#hcust_addr").val(data.ccVO.cust_zip_addr); // 우편번호 상 주소
//					$("#hcust_dtl_addr").val(data.ccVO.cust_addr); // 고객 주소
//					$("#hiuser_id_nm").val(data.ccVO.iuser_id_nm); // 영업담당자
//					$("#hiuser_nm").val(data.ccVO.iuser_nm); // 영업담당자
//					$("#biz_status").val(data.ccVO.biz_status); 
//					$("#main_prod").val(data.ccVO.main_prod); 
//					$("#cust_div_cd").val(data.ccVO.cust_div_cd); 
//				}
//			},
//			error : function(data){
//				alert(data.inputResult);
//				history.back();
//			}
//		});
//	});

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


//키맨 삭제
function keymanDelete() {
	var chked_val = [];
	$(":checkbox[id='kmChkbox']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#nowCust_id").val();
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
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/ccActDelete',
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
function custEstimDelete(){
	var salesId = $('#salesId').val();
	if(salesId == "" || salesId == null ){
		alert("삭제할 항목을 선택해주세요.");
	}else{
	if(confirm("삭제 하시겠습니까? ")){
		var opptId = $('#salesId').val();
		var estim_id = [];
		$('input[name=estim_id]:checked').each(function(){
			estim_id.push($(this).val());
		});
		$.ajax({
			type : 'get',
			data :  { estim_id : estim_id },
			datatype : 'json',
			url : 'custEstimDelete',
			success:function(result){
				alert("견적이 삭제되었습니다.");
				estimList(opptId);
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	   }
	}
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

