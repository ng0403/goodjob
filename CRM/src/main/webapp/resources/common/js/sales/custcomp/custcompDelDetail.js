/**
 * 함수목록
 * custcompDelModify() 							: 삭제된 데이터 복원(수정)
 * custcompDelDelBtn()							: 삭제된 데이터 완전 삭제
 * custcompCancelBtn(addFlag)					: 삭제된 데이터 취소버튼
*/
$(document).ready(function() {
	
	var ctx = $("#ctx").val();
	var flg = $("#flg").val();
	
//	custActiveAdd(ctx);
//	estimateAdd(ctx);
//	custPosAdd(ctx);
//	addCustManager(ctx);
//	custCompAddBtn();
//	custcompDelModify();
//	custcompDelDelBtn();
//	custcompCancelBtn(addFlag);
	
});

//고객사 삭제된 데이터 복원(상세정보 수정)
function custcompDelModify(){
	var cust_id = $("#cust_id").val();
	var pageNum = 1;
	
	var ctx = $("#ctx").val();
	var ynChk = confirm("복원 시 상품 테이블은 유지되지 않습니다.");
	if(ynChk){	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				cust_id : cust_id,
			},
			datatype : 'json',
			url : ctx + '/custcompDelModify',
			success:function(result){
				alert("복원되었습니다.");
				
					alert("삭제된 데이터 페이지로 이동합니다.");
					location.href = ctx + "/custcompDelList";
				},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}

//고객사 삭제된 데이터 완전 삭제
function custcompDelDelBtn(){
	var cust_id = $("#cust_id").val();
	var pageNum = 1;
	
	var ctx = $("#ctx").val();
	var ynChk = confirm("데이터 완전 삭제 시 복원은 불가능합니다. 확인 시 삭제합니다.");
	if(ynChk){	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				cust_id : cust_id,
				
			},
			datatype : 'json',
			url : ctx + '/custcompDelDelete',
			success:function(result){
				alert("데이터가 완전 삭제 되었습니다.");
				
					alert("삭제된 데이터 페이지로 이동합니다.");
					location.href = ctx + "/custcompDelList";
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}

//삭제된 데이터 상세정보 > 취소 버튼 기능
function custcompCancelBtn(flg) {
	var flg = flg;
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		if(flg == 0)	// 추가할 때
		{
			location.href = '/custcomp';
		}
		else if(flg == 1)	// 상세보기 화면일 경우
		{
			alert("고객사 페이지로 이동합니다.")
			location.href = '/custcomp';
		}
	}
}

//고객명 클릭 시 detail값 가져오는 함수
function ccMngDetail(cust_id,iuser_id,org_nm,iuser_nm){
	var list_cust_nm = $('#nowCust_nm').val();
	window.open('custMngDetailPopup?list_cust_id='+cust_id+'&list_cust_nm='+list_cust_nm+'&org_nm='+org_nm+
				'&list_iuser_id='+iuser_id+'&list_iuser_nm='+iuser_nm,
				'newwindow1','width=770, height=310, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
		
		history.back(-1);
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
		alert("정상적으로 저장되었습니다.");
		
	});
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
}

