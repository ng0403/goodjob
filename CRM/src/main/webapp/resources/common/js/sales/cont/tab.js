function contAdd(){
	$("#contTable input[type=text]").css("background-color", "white");
	$("#contTable textarea").css("background-color", "white");
	$('#contr_nm').attr('readonly', false).val('');
	$('#cust_nm').attr('readonly', false).val('');
	$('#customer').attr('disabled', false);
	$('#sales_oppt_nm').attr('readonly', false).val('');
	//$('#act_oppt_nm').attr('disabled',false);
	$('#contr_qty').attr('readonly', false).val('');
	$('#contr_amt').attr('readonly', false).val('');
	$('#contr_d_detail').attr('readonly', false).val('');
	$('#memo').attr('readonly', false).val('');
	
	// 버튼 활성화
	$("#contBaseBtnDiv").css("display", "none");
	$("#contAddBtnDiv").css("display", "block");
	$("#contMdfBtnDiv").css("display", "none");
}
  
function contSave() {
		alert("인서트");
		
	    var formObj = $("form[role='form']");

		 formObj.attr("action", "/cont_add");
		 formObj.attr("method", "post");
		 formObj.submit();  
	 
	} 
function updateCont() {
 
	alert("수정 되었습니다.");
	  var formObj = $("form[role='form']");

		 formObj.attr("action", "/contUpdate");
		 formObj.attr("method", "post");
		 formObj.submit();   
	
}

//고객사리스트 팝업창 띄우기
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/contCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes');
	});
}

//영업기회 팝업창 띄우기
function actOpptListPopup(ctx){
	$('#act_oppt_nm').click(function(){ 
		window.open(ctx+'/contActOpptList?cust_id='+$('#cust_id').val(),'newwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}



function contMdfy(){
 	$("#contTable input[type=text]").css("background-color", "white");
	$("#contTable textarea").css("background-color", "white");
	$('#contr_nm').attr('readonly', false);
	$('#cust_nm').attr('readonly', false);
	$('#customer').attr('disabled', false);
	$('#sales_oppt_nm').attr('readonly', false); 
	$('#act_oppt_nm').attr('disabled',false);
	$('#act_oppt_nm').attr('readonly',false);
	$('#contr_qty').attr('readonly', false);
	$('#contr_amt').attr('readonly', false);
	$('#contr_d_detail').attr('readonly', false);
	$('#memo').attr('readonly', false);
	//버튼 활성화
	$("#contBaseBtnDiv").css("display", "none");
	$("#contAddBtnDiv").css("display", "none");
	$("#contMdfyBtnDiv").css("display", "block");
}

function contCancel(){
	var ynChk = confirm("정말 취소하시겠습니까?");
	
	location.href = "/cont";
	/*if(ynChk){
		$("#contTable input[type=text]").css("background-color", "#EAEAEA");
		$("#contTable textarea").css("background-color", "#EAEAEA");
		$('#contr_nm').val($('#hcontr_nm').val()).attr('readonly',true);
		$('#cust_nm').val($('#hcust_nm').val()).attr('readonly',true);
		$('#cust_id').val($('#hcust_id').val());
		$('#customer').attr('disabled', true);
		$('#sales_oppt_nm').val($('#hsales_oppt_nm').val()).attr('readonly',true);
		$('#sales_oppt_id').val($('#hsales_oppt_id').val());
		$('#estim_id').val($('#hestim_id').val());
		$('#act_oppt_nm').attr('disabled',true);
		$('#contr_qty').val($('#hcontr_qty').val()).attr('readonly',true);
		$('#contr_amt').val($('#hcontr_amt').val()).attr('readonly',true);
		$('#contr_d_detail').val($('#hcontr_d_detail').val()).attr('readonly',true);
		$('#memo').val($('#hmemo').val()).attr('readonly',true);
		
		$("#contBaseBtnDiv").css("display", "block");
		$("#contAddBtnDiv").css("display", "none");
		$("#contMdfyBtnDiv").css("display", "none");*/
/*	}*/
}