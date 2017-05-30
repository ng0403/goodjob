
$(document).ready(function(){
	var ctx = $('#ctx').val();
	var cust_id = $("#nowCust_id").val();
	//var cust_nm1 = $('#cust_nm', opener.document).val();
	
//	$('#cust_nm').val(cust_nm1);
	$('#opptModfySaveBtn').hide();
	
	$('#opptModfyButton').click(function() {
		
		//alert("여기");
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
	
	opptAllChck();
	chkCancel();
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

/**
 * 
 * 위 전역변수와 ready안에 있는 부분
 * */
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
	window.open('/prodList','newwindow3','width=770, height=340, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//영업기회 탭에서 추가버튼 눌렀을 때.
function opptInsertPop()
{
	$("#operatingapopuptable input[type='text']").attr({
		disabled:false,
		style:'background-color:white'
	});
	
	window.open('/opptInsertPopup','newwindowpop','width=1045, height=435, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//컴마 입력 함수
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 영업기회
// Deatil 화면 Tab부분 Ajax로 그려주는 부분.
function opptTabList(cust_id)
{
	$.ajax({
		type : 'post',
		url : '/opptTabajax',
//		data : {
//			cust_id : cust_id
//		},
		data : "cust_id="+cust_id,
		datatype : 'json',
		success:function(result){
			//리스트 출력 시 버튼 상태 설정
//			$("#activeOpptList").children().remove();
			$("#activeOpptList").children().remove();
			
			//고객사 영업기회탭 리스트 그리기
			if(result.length == 0){
				alert("리스트없음");
				tbodyContent = "<tr style='height: 75px;'><td colspan='10' style='width: 1320px;'>등록된 영업기회가 없습니다.</td></tr>";
				tbody.append(tbodyContent);
			}
			else {
				
				$.each(result.opptList, function(i, list){
					
					for (var i = 0; i < result.length; i++) {
						
						//$("#activeOpptList").append("" +
						tbodyContent =
								"<tr id='"+list.sales_oppt_id+"'>"+
								"<td style='width:20px;text-align: center; vertical-align: middle; '>" +
								"<input type=checkbox  id=list_sales_oppt_id name=list_sales_oppt_id value="+list.sales_oppt_id+">" +
								"<input type=hidden id=list_cust_id value="+list.cust_id+">" +
								"<input type=hidden id=list_sales_lev_cd value="+list.sales_lev_cd+">" +
								"</td>"+	//opptTabDetail('"+list.sales_oppt_id+"');'
								
								"<td style='width:280px; text-align: left;vertical-align: middle; padding-left:5px;'class='oppt_nm_class' >" +
								"	<a href=javascript:viewDetail2('"+'cust_ed'+"','"+list.sales_oppt_id+"','"+list.cust_id+"') id='list_sales_oppt_nm'  style='text-decoration: none;'>"+list.sales_oppt_nm+"</a></td>"+
								"<td style='width: 111px;'>"+list.sales_oppt_stat_cd_nm+"</td>"+
								"<td style='width: 130px;'>"+list.sales_lev_cd_nm+"</td>"+
								"<td style='width: 131px;'>"+list.fst_reg_dt+"</td>+"+
								"<td style='width: 112px;'>"+list.expt_fin_d+"</td>"+
								"<td style='width: 105px;'>"+list.psblty_rate+"%"+"</td>"+
								"</tr>";
								tbody.append(tbodyContent);
						//);
					}
				});
			}
			
		},
		error : function() {
			alert("전송중 오류가 발생했습니다.");
		}
	});
}

//영업기회 상세정보 고객 리스트 팝업
function opptCustPopup(ctx)
{
	
	window.open(ctx+'/opptCustPopup','newwindowOpptCust','width=770, height=415, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//상세정보가 클릭돼있을 때 상세정보함수 불러오기
function actTabFunc(sales_actvy_id) {

	$(document).ready(function() {
		$("#nowSales_actvy_id").val(sales_actvy_id); // 현재 sales_actvy_id 저장
			
		if($("#tab1").is(":checked")){ // 상세정보 불러오기
			if(sales_actvy_id != '')  actDetail(sales_actvy_id);
		} 
	});
}

function opptTabDetail(sales_oppt_id)
{
	window.open('/opptDetailPop?sales_oppt_id='+sales_oppt_id,'newwindows','width=1000, height=435, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}


function actOpptDelBt()
{
	var custId  = $('#cust_id').val();
	
	//alert("custID : " + custId);
	
	if($("input[name=list_sales_oppt_id]:checked").length==0)
	{
		alert("삭제할 영업기회를 선택해 주세요.");
		return false;
	}
	else
	{
		if(confirm("삭제 하시겠습니까? "))
		{
			var opptidList = [];
			//var opptId = $('#salesId').val();
			var sales_actvy_id = [];
		
			$("input[name=list_sales_oppt_id]:checked").each(function(){
				opptidList.push($(this).val());
			});
			
			$.ajax({
				type : 'get',
				url : 'opptTabDelete',
				data : {
					opptidList : opptidList
				},
				dataType : 'json',
				success : function(result){
					alert("영업기회가 삭제되었습니다.");
					opptTabList(custId);
				},
				error : function(request){
					alert("error : " + request);
				}
			});
		}
	}
}

function opptAllChck(){
	$("#actOpptAllSelect").click( function(){
		var chk = $(this).is(":checked"); //checked 된 경우 true, 아닌 경우 false
		
		if(chk){
			$("#activeOpptList input[type=checkbox]").prop("checked",true);			
		}
		else{
			$("#activeOpptList input[type=checkbox]").prop("checked",false);
		}
	});
}

//all 체크일때 하나라도 체크해지가 된 경우 all checkbox 체크 해제
function chkCancel(){
	$("#actOpptAllSelect").prop("checked", false);
}







