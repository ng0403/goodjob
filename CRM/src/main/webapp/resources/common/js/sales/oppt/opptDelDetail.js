/**
 * 함수 목록
 * delete_comma(str)								:	콤마 제거
 * searchCustcompListPopup(ctx)					:	영업기회 검색창 고객 리스트 팝업
 * custcompListPopup(ctx)						:	영업기회 상세정보 고객 리스트 팝업
 * inputCustNm(custNm,custId,custType)			:	고객 이름 입력 함수
 * opptAddBtn()									:	영업기회 추가 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptMdfyBtn()								:	영업기회 편집 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptDelCancelBtn()								:	영업기회 취소 버튼 클릭 시 ( css, readonly, disabled -> true )
 * opptAdd()									:	영업기회 추가
 * opptDelModify()									:	영업기회 편집
 * readDetail()									:	detail form 비활성화 함수
 * actAllCheck()								:	영업활동 모두 선택
 * estimAllCheck()								:	견적 모두 선택
 * addOperatingA(ctx)							:	영업활동 추가 팝업
 * estimateAdd(ctx)								:	견적 추가 팝업
 * opptActiveDetailPopup(actvyId)				: 	영업활동 상세정보 팝업
 * opptEstimDetail(estimId)						:	영업기회별 견적 상세정보 팝업
 * opptActiveDelete()							:	영업활동 삭제								
 * opptEstimDelete()							:	견적 삭제
 * startCalendar(ctx)							:	달력 띄우기
 * comma(str)									:	컴마 입력 함수
 * uncomma(str)									:	컴마 해제 함수
 * viewSalesActive(opptId)						:	영업활동 리스트 조회
 * opptProdList(ctx)							:	영업기회별 상품 리스트 팝업
 * inputOpptProd(prod_id,prod_nm,prod_price)	:	영업기회별 상품 입력 함수
 * opptProdNmSelect(ctx)						:	상품명 클릭 시 부모창에 데이터 전송		
 * 
 * 
 */
$(function(){
	var opptButtonStatus = "";
	var ctx = $("#ctx").val();
//	addOperatingA(ctx);
	searchCustcompListPopup(ctx);
	custcompListPopup(ctx);	//고객 검색 버튼 (사용)
	startCalendar(ctx);
	opptProdList(ctx);
	
});

/**
 * 숫자 콤마 제거(Server 전달 시 필요)
 * @param str
 * @returns
 */
function delete_comma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}
var opptButtonStatus;				//편집인지 추가인지 버튼의 상태 저장
var opptProdDeleteProdId=[];		//편집 시 삭제된 상품의 상품ID List
var opptProdDeleteEstimId=[];		//편집 시 삭제된 상품의 상품ID List 
var opptProdAddId =[];		

//영업기회 검색창 고객 리스트 팝업
function searchCustcompListPopup(ctx){
	$('#searchCustomer').click(function(){
		window.open(ctx+'/opptSearchCustcompList','newwindow','width=770, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  
}


// 취소 버튼 기능
function opptDelCancelBtn(addFlag) {
	var addFlag = addFlag;
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		location.href = '/DelList';
		}
}

//영업기회 삭제된 데이터 복원 상세정보 수정 함수
function opptDelModify(){
	var sales_oppt_id = $("#salesId").val();
	var pageNum = 1;
	
	var ctx = $("#ctx").val();
	var ynChk = confirm("복원 시 상품 테이블은 유지되지 않습니다.");
	if(ynChk){	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				sales_oppt_id : sales_oppt_id,
				
			},
			datatype : 'json',
			url : ctx + '/opptDelModify',
			success:function(result){
				alert("복원되었습니다.");
				
					alert("영업기회 페이지로 이동합니다.");
					location.href = ctx + "/DelList";
				},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}
//영업기회 삭제된 데이터 완전 삭제
function opptDelDelBtn(){
	var sales_oppt_id = $("#salesId").val();
	var pageNum = 1;
	
	var ctx = $("#ctx").val();
	var ynChk = confirm("데이터 완전 삭제 시 복원은 불가능합니다. 확인 시 삭제합니다.");
	if(ynChk){	
		$.ajax({
			type : 'post',
			data : {
				pageNum : pageNum,
				sales_oppt_id : sales_oppt_id,
				
			},
			datatype : 'json',
			url : ctx + '/opptDelDelete',
			success:function(result){
				alert("데이터가 완전 삭제 되었습니다.");
				
//				if(act_flg == null )
//				{
					alert("영업기회 페이지로 이동합니다.");
					location.href = ctx + "/DelList";
//				}
//				else if(act_flg == 'cust_ed')
//				{
//					alert("영업기회 페이지로 이동합니다.");
//					location.href = ctx +'/custcompDetail?cust_id=' + cust_id;
//				}
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	};
}
//입력창 비활성화 함수
function readDetail(){
	$("#opptDelDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});

	$("#opptDelDetail select").attr({
		disabled:true,
	});	
	$("#opptDelDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});
	
	$("#opptDelDetail select").attr({
		disabled:true,
	});	
	$("#customer").attr("disabled",true);
	$("#psblty_rate").attr("disabled",true);
	$("#memo").attr("style","resize: none;");
}


//달력띄우기
function startCalendar(ctx){
	 $("#expt_fin_d").datepicker({
	        changeMonth: true, //콤보 박스에 월 보이기
	        changeYear: true, // 콤보 박스에 년도 보이기
	        showOn: 'button', // 우측에 달력 icon 을 보인다.
	        buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	        buttonImageOnly: true //달력에 icon 사용하기
	    }); 
	     //마우스를 손가락 손가락 모양으로 하고 여백주기
	    $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	   //날짜 형식을 0000-00-00으로 지정하기
	    $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	/*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/

}

//컴마 입력 함수
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//컴마 해제 함수
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}
	
	//숫자만 입력
	function onlyNumber(event){
	    event = event || window.event;
	    var keyID = (event.which) ? event.which : event.keyCode;
	    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 188 ){
//	    	alert("keyID : " + keyID);
//	    	event.target.value = comma(event.target.value);
	    	return;    	
	    } 
	    else{
	    	return false;
	    }
	}
	//숫자 아닌값 replace
	function removeChar(event){
	    event = event || window.event;
	    var keyID = (event.which) ? event.which : event.keyCode;
	    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ){
	    	return;
	    }
	    else{
//	    	event.target.value = comma(event.target.value);
	    	event.target.value = event.target.value.replace(/[^0-9]/g, "");
	    }
	}

