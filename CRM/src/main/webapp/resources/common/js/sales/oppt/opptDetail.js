/**
 * 함수 목록
 * delete_comma(str)								:	콤마 제거
 * searchCustcompListPopup(ctx)					:	영업기회 검색창 고객 리스트 팝업
 * custcompListPopup(ctx)						:	영업기회 상세정보 고객 리스트 팝업
 * inputCustNm(custNm,custId,custType)			:	고객 이름 입력 함수
 * opptAddBtn()									:	영업기회 추가 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptMdfyBtn()								:	영업기회 편집 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptCancelBtn()								:	영업기회 취소 버튼 클릭 시 ( css, readonly, disabled -> true )
 * opptAdd()									:	영업기회 추가
 * opptModify()									:	영업기회 편집
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
 * estimList(opptId)							:	영업기회별 견적 리스트 조회
 * opptProdList(ctx)							:	영업기회별 상품 리스트 팝업
 * inputOpptProd(prod_id,prod_nm,prod_price)	:	영업기회별 상품 입력 함수
 * opptProdNmSelect(ctx)						:	상품명 클릭 시 부모창에 데이터 전송		
 * 
 * 
 */
$(function(){
	var opptButtonStatus = "";
	var ctx = $("#ctx").val();
	addOperatingA(ctx);
	actAllCheck();
	estimAllCheck();
	opptprdtAllCheck
	searchCustcompListPopup(ctx);
	custcompListPopup(ctx);	//고객 검색 버튼 (사용)
	estimateAdd(ctx);
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

//편집 시 추가된 상품의 상품ID List
//상품 목록 리스트 팝업
function opptProdList(ctx){
	$('#opptProdListBtn').click(function(){
		window.open(ctx+'/opptPrdtOpen','newwindow3','width=550, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//영업기회 검색창 고객 리스트 팝업
function searchCustcompListPopup(ctx){
	$('#searchCustomer').click(function(){
		window.open(ctx+'/opptSearchCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  
}
/////////////////////////////////////
//영업기회 상세정보 고객 리스트 팝업 (고객 버튼클릭 시)
function custcompListPopup(ctx){

	$('#customer').click(function(){
		var pop_flg='d';
		window.open(ctx+'/opptCustcompList?pop_flg='+pop_flg,'newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//고객팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function inputCustNm1(custId,custNm,custType,pop_flg){	
	if(custType == 'search'){
		$('#scust_nm').val(custNm);
		$('#scust_id').val(custId);
	}else if(custType == 'normal'){
		$('#cust_nm').val(custNm);
		$('#cust_id').val(custId);
	}
}

//추가 버튼 기능
function opptAddBtn() {
	//focus, css, readonly, disabled false 상태로 변경
	//값 초기화
	$("#opptDetail #sales_oppt_nm").focus();
	$("#opptDetail input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	}).val('');
	$("#opptDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	// 버튼 활성화
	$("#opptDetail #cust_nm,#opptDetail #expt_fin_d").attr("readonly",true);
	$("#customer").attr("disabled",false);
	$("#opptProdListBtn").attr("disabled",false);
	$("#opptProdDelete").attr("disabled",false);
	$("#memo").attr("style","resize: none; background-color:white;");
	$("#sales_oppt_stat_cd").children().eq(0).attr("selected", "selected").css("height", "24pt");
	$("#sales_lev_cd").children().eq(0).attr("selected", "selected").css("height", "24pt");
	$("#psblty_rate").children().eq(0).attr("selected", "selected").css("height", "24pt");

	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
	$("#NewAddBtnDiv").css("display", "none");
}

// 편집 버튼 기능
function opptMdfyBtn() {
	//focus, css, readonly, disabled false 상태로 변경
	$("#opptDetail #sales_oppt_nm").focus();
	$("#opptDetail input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	});
	$("#opptDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	//버튼 활성화
	$("#opptDetail #cust_nm,#opptDetail #expt_fin_d").attr("readonly",true);
	$("#customer").attr("disabled",false);
	$("#psblty_rate").attr("disabled",false);
	$("#opptPrdtbody tr").each(function(){
		$(".discount").attr("readonly",false);
		$(".unit").attr("disabled",false);
	});
	$("#opptProdListBtn").attr("disabled",false);
	$("#opptProdDelete").attr("disabled",false);
	$("#memo").attr("style","resize: none; background-color:white;");
	
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#NewAddBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");	

}

// 취소 버튼 기능
function opptCancelBtn(addFlag) {
	var addFlag = addFlag;
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		if(addFlag == 0)	// 추가할 때
		{
			location.href = '/oppt';
		}
		else if(addFlag == 1)	// 상세보기 화면일 경우
		{
			location.href = '/oppt';
			
		}
		
	}
}

//영업기회추가 저장 함수
function opptAdd(){
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#salesId").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var total_sup_price = delete_comma($("#supplyPriceSum").text());
	var prod_id = [];
	var prod_nm = [];
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var est_list = [];
	var discount_unit_cd = [];
	var unit_check =0;
	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
	$("#opptPrdtbody tr[class!=empty]").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		
		discount_unit_cd.push(cd);
		
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		type : 'post',
		url : 'opptAdd',
		data : {
			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			total_sup_price : total_sup_price,
			sales_lev_cd : sales_lev_cd,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			cust_id : cust_id,
			memo : memo,
			est_list : est_list
		},
		datatype : 'json',
		success:function(result){
			alert("영업기회가 추가되었습니다.");
			location.href = ctx + "/oppt";
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});

}
//영업기회 상세정보 수정 함수
function opptModify(){
	var sales_oppt_id = $("#salesId").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var pageNum = 1;/*$("#pageNum").val();*/
	var prod_id = [];
	var prod_nm = [];
	var estim_qty = [];
	var prod_price = $('#prod_price').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var total_sup_price = delete_comma($("#supplyPriceSum").text());
	var est_list = [];
	var discount_unit_cd = [];
	var unit_check =0;
	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
	$("#opptPrdtbody tr[class!=empty]").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	
	var ctx = $("#ctx").val();
	$.ajax({
		type : 'post',
		data : {
			pageNum : pageNum,
			cust_id : cust_id,
			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			total_sup_price : total_sup_price,
			sales_lev_cd : sales_lev_cd,
			expt_sales_amt : expt_sales_amt,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			memo : memo,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			est_list : est_list
		},
		datatype : 'json',
		url : ctx + '/opptModify',
		success:function(result){
			alert("수정되었습니다.");
			
			location.href= ctx + "/oppt";
			},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}
//입력창 비활성화 함수
function readDetail(){
	$("#opptDetail_M input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});

	$("#opptDetail_M select").attr({
		disabled:true,
	});	
	$("#opptDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});
	
	$("#opptDetail select").attr({
		disabled:true,
	});	
	$("#customer").attr("disabled",true);
	$("#psblty_rate").attr("disabled",true);
	$("#memo").attr("style","resize: none;");
}

//영업활동 모두 선택
function actAllCheck(){
	$("#actAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#activeList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#activeList input[type=checkbox]").prop("checked",false);
		}
	});
}

//영업기회별 견적 모두 선택
function estimAllCheck(){
	$("#estimAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#estimList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#estimList input[type=checkbox]").prop("checked",false);
		}
	});
}
//영업기회별 상품 모두 선택
function opptprdtAllCheck(){
	$("#opptprdtAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#opptprdtList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#opptprdtList input[type=checkbox]").prop("checked",false);
		}
	});
}

//영업활동 추가 팝업
function addOperatingA(ctx){
	$('#act_opp_nm').click(function(){
		var salesId = $('#salesId').val();
		if(salesId == "" || salesId == null ){
			alert("영업기회를 선택해주세요.");
		}else{
		var list_sales_oppt_id = $('#salesId').val();
//		var list_cust_id = $('#'+list_sales_oppt_id+' #hcust_id').val();
		var list_cust_id = $('#hcust_id').val();
		var list_cust_nm = $('#hcust_nm').val();
//		var list_cust_nm = $('#'+hsales_oppt_id+' #hcust_nm').text();
		
		window.open(ctx+'/opptActivePopup?list_sales_oppt_id='+list_sales_oppt_id+
				'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm,'newwindow','width=510, height=630, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
}
//견적 추가 팝업
function estimateAdd(ctx){
	$('#estimateAdd').click(function(){
		var hsales_lev_cd = $("#hsales_lev_cd").val();
		var salesId = $('#salesId').val();
		var sales_lev_cd = $('#'+salesId+' #list_sales_lev_cd').val();
		if(salesId == "" || salesId == null ){
			alert("영업기회를 선택해주세요.");
		}else if(sales_lev_cd == "0001" || sales_lev_cd == "0004"){
			alert("영업단계가 \"제안\", \"견적\"일 때 견적 추가가 가능합니다.");
		}else{
		var list_sales_oppt_id = $('#salesId').val();
		var list_cust_id = $('#hcust_id').val();//list_sales_oppt_id;
		var list_cust_nm = $('#hcust_nm').val();
		var list_sales_oppt_nm = $('#hsales_oppt_nm').val();
		var pageNum=$('#pageNum').val();
		window.open(ctx+'/opptEstimatepopup?list_sales_oppt_id='+list_sales_oppt_id+'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&pageNum='+pageNum+'&flag=0','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
			}
		});
}
//영업활동 상세정보 팝업
function opptActiveDetailPopup(actvyId){
	var popup;
	var sales_oppt_nm = $('#hsales_oppt_nm').val();
	popup=window.open('opptActiveDetailPopup?actvyId='+actvyId +'&sales_oppt_nm='+sales_oppt_nm
			,'newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업기회별 견적 상세정보 팝업
function opptEstimDetail(estimId){
	var ctx = $('#ctx').val();
	var list_sales_oppt_id = $('#salesId').val();
	var list_cust_id = $('#hcust_id').val();
	var list_cust_nm = $('#hcust_nm').val();
	var list_sales_oppt_nm = $('#hsales_oppt_nm').val();
	window.open(ctx+'/opptEstimDetail?list_sales_oppt_id='+list_sales_oppt_id+'&estimId='+estimId+'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&flag=1','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}
//영업활동 삭제
function opptActiveDelete(){
	var salesId = $('#salesId').val();
	if(salesId == "" || salesId == null ){
		alert("영업기회를 선택해주세요.");
	}else{
	if(confirm("삭제 하시겠습니까? ")){
		var opptId = $('#salesId').val();
		var sales_actvy_id = [];
		
		$('input[name=sales_actvy_id]:checked').each(function(){
			sales_actvy_id.push($(this).val());
		});
		$.ajax({
			type : 'get',
			data :  { sales_actvy_id : sales_actvy_id },
			datatype : 'json',
			url : 'opptActiveDelete',
			success:function(result){
				alert("삭제되었습니다.");
				viewSalesActive(opptId);
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	  }
	}
}

//영업기회별 견적 삭제
function opptEstimDelete(){
	var salesId = $('#salesId').val();
	if(salesId == "" || salesId == null ){
		alert("영업기회를 선택해주세요.");
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
			url : 'opptEstimDelete',
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
//견적 리스트 조회
function estimList(opptId){
	$('#estimList').children().remove();
	$.ajax({
		type : 'get',
		url : 'estimList',
		data : { sales_oppt_id : opptId },
		dataType : 'json',
		success:function(result){
			var content ="";
			if(result.length==0){
				content = "<tr class='headerLock' style='height: 150px;'><td colspan='8'>등록된 견적이 없습니다.</td></tr>";
			}else{
			$.each(result,function(i,data){
				content += '<tr class="headerLock">'+	
						'<th style="width: 3% !important;"><input type=checkbox name=estim_id value='+data.estim_id+'></th>'+
						'<td style="text-align: left; padding-left: 5px; width: 30% !important;"><a style="text-decoration: none;" href=javascript:opptEstimDetail("'+data.estim_id+'");>'+data.estim_nm+'</a></td>'+
						'<td style="width: 11% !important;">'+data.estim_lev_cd+'</td>'+
						'<td style="width: 10% !important;">'+data.estim_qty+'</td>'+
						'<td style="text-align: right; padding-right: 5px; width: 15% !important;">'+comma(data.sales_price)+'</td>'+
						'<td style="width: 10% !important;">'+data.estim_valid_d+'</td>'+
						'<td style="width: 9% !important;">'+data.fst_reg_id+'</td>'+
						'<td style="width: 10% !important;">'+data.fst_reg_dt+'</td>'+
						'</tr>';
			});
			if(result.length < 5){
				for(var j = 0; j < 5-result.length; j++){
					content += "<tr class='headerLock'>"
						+ "<th style='width: 3% !important;'></th>"
						+ "<td style='width: 30% !important;'></td>" 
						+ "<td style='width: 11% !important;'></td>"
						+ "<td style='width: 10% !important;'></td>"
						+ "<td style='width: 15% !important;'></td>"
						+ "<td style='width: 10% !important;'></td>"
						+ "<td style='width: 9% !important;'></td>"
						+ "<td style='width: 10% !important;'></td>"
						+ "</tr>";
				}
			}	
			}	
			$('#estimList').append(content);
		},
		error:function(request){
			alert('error :' + request.status);
		}
	});
}
//영업활동 리스트 조회
function viewSalesActive(opptId){
	$("#activeList").children().remove();	
	$.ajax({  
		type : 'GET',
		url : 'opptSalesActiveList',
		data : {opptId : opptId},
		dataType : 'json', 
		success:function(result){
			var content = "";
			if(result.actList.length==0){
				content = "<tr style='height: 150px;'><td colspan='10'>등록된 영업활동이 없습니다.</td></tr>";	
			}
			else{
			$.each(result.actList,function(i,data){
				start_d = data.strt_d;
				end_d = data.end_d;
				reg_dt = data.fst_reg_dt;
				content +="<tr>"+
				"<th rowspan='2' style='width: 3% !important;'><input type='checkbox' value="+data.sales_actvy_id+" name='sales_actvy_id'></th>"+ 
				"<td rowspan='2' style='text-align: left; padding-left: 5px; width: 20% !important;'>" +
				"<a style='text-decoration: none;' href=javascript:opptActiveDetailPopup('"+data.sales_actvy_id+"')>"+data.sales_actvy_nm+"</a></td>"+
				"<td rowspan='2' style='width: 8% !important;'>"+data.sales_actvy_div_nm+"</td>"+
				"<td rowspan='2' style='text-align: left; padding-left: 5px; width: 20%;'>"+data.sales_oppt_nm+"</td>"+
				"<td rowspan='2' style='width: 8% !important;'>"+data.sales_actvy_type_nm+"</td>"+
				"<td style='width: 9% !important;'>"+start_d+"</td>"+
				"<td style='width: 9% !important;'>"+data.strt_t+"</td>"+
				"<td rowspan='2' style='width: 6% !important;'>"+data.sales_actvy_stat_nm+"</td>"+
				"<td rowspan='2' style='width: 7% !important;'>"+data.fst_reg_id+"</td>"+
				"<td rowspan='2' style='width: 10% !important;'>"+reg_dt+"</td>"+
				"</tr>"+
				"<tr>"+
				"<td style='width: 9% !important;'>"+end_d+"</td>"+
				"<td style='width: 9% !important;'>"+data.end_t+"</td>"+
				"</tr>";	
			});
			
			if(result.actList.length < 5){
				for(var j = 0; j < 5-result.actList.length; j++){
					content += "<tr>"+
								"<th rowspan='2' style='width: 3% !important;'></th>"+ 
								"<td rowspan='2' style='text-align: left; padding-left: 5px; width: 20% !important;'></td>"+
								"<td rowspan='2' style='width: 8% !important;'></td>"+
								"<td rowspan='2' style='text-align: left; padding-left: 5px; width: 20%;'></td>"+
								"<td rowspan='2' style='width: 8% !important;'></td>"+
								"<td style='width: 9% !important;'></td>"+
								"<td style='width: 9% !important;'></td>"+
								"<td rowspan='2' style='width: 6% !important;'></td>"+
								"<td rowspan='2' style='width: 7% !important;'></td>"+
								"<td rowspan='2' style='width: 10% !important;'></td>"+
								"</tr>"+
								"<tr>"+
								"<td style='width: 9% !important;'></td>"+
								"<td style='width: 9% !important;'></td>"+
								"</tr>";
					}
				}
			}	
			$("#activeList").append(content);
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
	
	//상품 입력 함수
	function opptInputProd(prod_id,prod_nm,prod_price){
			$("#opptPrdtbody .empty").remove();
			var data = $('#eduCode').val();
			var tmp = data.replace("[", "");
			var tmp2 = tmp.replace("]", "");
			
			var arr = tmp2.split(',');
			unit = '<option value=0>선택</option>';
			for(var i=0; i<arr.length ; i=i+2){
				unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
			}
		$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_price));
		$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
		var like = 0;
		if($("#opptPrdtbody tr").length == 0){
			if(opptButtonStatus=='modify'){
				opptProdAddId.push(prod_id);
			}
			$('#opptPrdtbody').append(
					'<tr id="priceline" class='+prod_id+' name="prt">'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
					'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
					'<td style="width: 27%;" name="prod_price">'+prod_price+'</td>'+
					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: right;" id="discount" class="discount" name="discount" value=0 onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
					 '<select id="unit" class="unit" style="width: 25%;">'+
					 unit+
					 '</select>'+'</td>'+
					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
			like = 1;
		}else{
			$("#opptPrdtbody tr").each(function(){
				var old_prodId = $(this).attr("class");
				if(prod_id == old_prodId){
					var count = $(this).children().eq(2).children().val();
					$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
					like=1;
				}
			});
			if(like==0){
				if(opptButtonStatus=='modify'){
					opptProdAddId.push(prod_id);
				}
				$('#opptPrdtbody').append(
						'<tr id="priceline" class='+prod_id+' name="prt">'+
						'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
						'<input type="hidden" id="prod_price" value='+prod_price+'>'+'</th>'+
						'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
						'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;"  name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
						'<td style="width: 27%;" name="prod_price" value="prod_price">'+prod_price+'</td>'+
						'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: right;" id="discount" class="discount" name="discount"  value=0  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
						'<select id="unit" class="unit" style="width: 15%;" >'+ unit+ '</select>'+'</td>'+'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+'</tr>'
				);
			}
		}
		opptProdChange();	
	}
	//상품 전체 선택
	function prodallCheck(){
		$("#allSelect").click( function(){
			var chk = $(this).is(":checked");
			if(chk){
				$("#opptPrdtbody tr[class!=empty] input[type=checkbox]").prop("checked",true);			
			}else{
				$("#opptPrdtbody tr[class!=empty] input[type=checkbox]").prop("checked",false);
			}
		});
	}
	//상품 전체 선택 박스 해제 함수
	function prodChkCancel(){
		$("#allSelect").prop("checked",false);
	}
	//상품 삭제
	function prodDelete(){
		$("#opptProdDelete").click(function(){
		var chkCount = $("#opptPrdtbody input[type=checkbox]:checked").length; 
		if(chkCount == 0){
			alert("상품을 체크해주세요.");
		}else{
			if(confirm("삭제 하시겠습니까? ")){
				$("#opptPrdtbody input[type=checkbox]:checked").each( function(){
					var classVal =  $(this).val();
					$("."+classVal).remove();
					if(opptButtonStatus=='modify'){
						opptProdDeleteProdId.push(classVal);
						opptProdDeleteEstimId.push($('#estim_id').val());
					}
				});
					opptProdChange();	
			}
			}
		});
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

//	function inputCustNm(custNm,custId){
//		
//		$('#cust_nm').val(custNm);
//		$('#cust_id').val(custId);
//	}
	

}
