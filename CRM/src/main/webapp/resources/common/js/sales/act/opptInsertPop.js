$(function(){
	var ctx = $('#ctx').val();
	var cust_id1 = $('#cust_id', opener.document).val();
	var cust_nm1 = $('#cust_nm', opener.document).val();
	
	$('#cust_nm').val(cust_nm1);
	$('#opptModfySaveBtn').hide();
	
	$('#opptModfyButton').click(function() {
		$('#opptModfyButton').hide();
		$('#opptModfySaveBtn').show();
		
		$('#sales_oppt_nm').attr("readonly", false);
		$('#sales_oppt_stat_cd').attr("disabled", false);
		$('#sales_lev_cd').attr("disabled", false);
		$('#expt_sales_amt').attr("readonly", false);
		$('#expt_fin_d').attr("readonly", false);
		$('#psblty_rate').attr("disabled", false);
		$('#memo').attr("readonly", false);
	});
	
	// 취소 버튼 눌렀을 때.
	$("#opptAdd_cancel").click(function(){
		window.opener.location.href = '/actDetail';
		self.close();
	});
	
	$('#opptModfy_cancel').click(function(){
		window.opener.location.href = '/actDetail';
		self.close();
	});
	
	//opptSaveBtn(ctx);
	//startDatePicker(ctx);
});

var prodAddId = [];   		//추가된 상품의 상품Id List
var prodDeleteProdId = [];	//삭제된 상품의 상품Id List

/**
 * 숫자 콤마 제거(Server 전달 시 필요)
 * @param str
 * @returns
 */
function delete_comma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

//숫자 사이 쉼표 추가
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//컴마 해제 함수
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

//달력띄우기
function startCalendar(ctx)
{
	 $("#expt_fin_d").datepicker({
		 changeMonth: true, //콤보 박스에 월 보이기
		 changeYear: true, // 콤보 박스에 년도 보이기
		 showOn: 'button', // 우측에 달력 icon 을 보인다.
		 buttonImage: '/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
		 buttonImageOnly: true //달력에 icon 사용하기
	  }); 
	   
	 //마우스를 손가락 손가락 모양으로 하고 여백주기
	 $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	  
	 //날짜 형식을 0000-00-00으로 지정하기
	 $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	/*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/

}

function opptSave()
{
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var total_sup_price = delete_comma($("#supplyPriceSum").text());
	
	var prod_id = [];
	var prod_nm = [];
	var sales_price = [];
	var discount  = [];
	var sup_price = [];
	var estim_qty = [];
	var est_list  = [];
	var discount_unit_cd = [];
	var unit_check = 0;

//	if(sales_oppt_nm == "" || sales_oppt_nm == null)
//	{
//		alert("영업기회명을 입력해 주세요.");
//		return false;
//	}
//	else if(cust_id == "" || cust_id == null)
//	{
//		alert("고객을 선택해 주세요.");
//		return false;
//	}
//	else if(sales_oppt_stat_cd == "0" || sales_oppt_stat_cd == null)
//	{
//		alert("영업기회 상태를 선택해 주세요.");
//		return false;
//	}
//	else if(sales_lev_cd == "0" || sales_lev_cd == null)
//	{
//		alert("영업단계를 선택해 주세요.");
//		return false;
//	}
//	else if(sales_lev_cd == "" || sales_lev_cd == null)
//	{
//		alert("예상마감일자를 선택해 주세요.");
//		return false;
//	} 
//	else if(psblty_rate == "0" || psblty_rate == null)
//	{
//		alert("가능성을 선택해 주세요.");
//		return false;
//	}	
	
	$("#opptProdtbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount.pop());
		est_list.push(discount_unit_cd.pop());
		
	});
	
	$.ajax({
		type : 'post',
		url : '/opptInsert',
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
			alert("정상적으로 등록되었습니다.");
			
			var cust_id = $('#cust_id', opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
			window.opener.opptTabList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}

function opptMdfySave()
{
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var total_sup_price = delete_comma($("#supplyPriceSum").text());
	
	var prod_id = [];
	var prod_nm = [];
	var sales_price = [];
	var discount  = [];
	var sup_price = [];
	var estim_qty = [];
	var est_list  = [];
	var discount_unit_cd = [];
	var unit_check = 0;
	
	$("#opptProdtbody tr").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		
		if(cd =='0')
		{
			unit_check++;
		}
		discount_unit_cd.push(cd);
		
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount.pop());
		est_list.push(discount_unit_cd.pop());
		
	});
	
/*
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
	}else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
*/	
	if(confirm("수정 하시겠습니까? "))
	{
		$.ajax({
			type : 'post',
			url : '/opptTabModfy',
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
			success : function(result) {
				alert("정상적으로 수정되었습니다.");

				var cust_id = $('#cust_id', opener.document).val(); // 부모창에서
																	// cust_id
																	// 받아오는 부분.
				window.opener.opptTabList(cust_id);
				self.close();

			},
			error : function(request) {
				alert("error : " + request.status);
			}
		});
	}
	else
	{
		return false;
	}
}

//상품 리스트 조회
function opptProdList()
{
	window.open('/prodList','newwindow3','width=550, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}















