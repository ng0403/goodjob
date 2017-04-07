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
	
	opptSaveBtn(ctx);
	//startDatePicker(ctx);
});

function opptSave()
{
	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
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
	
	$.ajax({
		type : 'post',
		url : '/opptInsert',
		data : {
			sales_oppt_id : sales_oppt_id,
			sales_oppt_nm : sales_oppt_nm,
			sales_lev_cd : sales_lev_cd,
			expt_sales_amt : expt_sales_amt,
			expt_fin_d : expt_fin_d,
			psblty_rate : psblty_rate,
			sales_oppt_stat_cd : sales_oppt_stat_cd,
			cust_id : cust_id,
			memo : memo
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
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $('#cust_id', opener.document).val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
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
			url : '/opptModfy',
			data : {
				sales_oppt_id : sales_oppt_id,
				sales_oppt_nm : sales_oppt_nm,
				sales_lev_cd : sales_lev_cd,
				expt_sales_amt : expt_sales_amt,
				expt_fin_d : expt_fin_d,
				psblty_rate : psblty_rate,
				sales_oppt_stat_cd : sales_oppt_stat_cd,
				cust_id : cust_id,
				memo : memo
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



















