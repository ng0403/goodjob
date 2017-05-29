/**
 * 함수목록
 * custcompDelModify() 							: 삭제된 데이터 복원(수정)
 * custcompDelDelBtn()							: 삭제된 데이터 완전 삭제
 * custcompCancelBtn(addFlag)					: 삭제된 데이터 취소버튼
*/
$(document).ready(function() {
	
	var ctx = $("#ctx").val();
	var flg = $("#flg").val();
	
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

