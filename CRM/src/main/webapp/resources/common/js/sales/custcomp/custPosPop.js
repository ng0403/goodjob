$(function(){
	var ctx = $('#ctx').val();
	//activeCancel();
	actButton(ctx);
	//startDatePicker(ctx);
	
});


$(document).ready(function() {
	 var ctx = $("#ctx").val();
	 var iuserType = $('#iuserType').val();
	 custSaleActSelect(ctx);
	 custSaleActSelect(ctx);
	 custIuserSelect(ctx);
	 custIuserSearch(ctx,iuserType);
	 
	//영업담당자 추가 시 영업활동 팝업 리스트 
	$('#custSaleActSelect').click(function(){
		window.open(ctx+'/custSaleActList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');

	}); 
	
	//영업담당자 추가 시 사원 팝업 리스트 
	$('#custIuserSelect').click(function(){
		window.open(ctx+'/custSaleActIuserList','newwindow2','width=760, height=360, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}); 


//영업담당자 탭에서 영업활동 추가 시 영업활동명 보이기
function inputOpptNm(sales_actvy_nm, sales_actvy_id){
	$('#sales_actvy_nm').val(sales_actvy_nm);
	$('#sales_actvy_id').val(sales_actvy_id);
}

//영업활동리스트 tr를 클릭했을 때 영업활동명 텍스트를 넣어주는 작업
function custSaleActSelect(ctx){
	$('#dboardtable tbody tr').click(function(){
		var sales_actvy_nm=$(this).find('#sales_actvy_nm').text();
		var sales_actvy_id=$(this).find('#sales_actvy_id').val();
		
		window.opener.inputOpptNm(sales_actvy_nm, sales_actvy_id);
		self.close();
	});
}


//영업담당자 popup 저장(수정) 버튼 클릭 시
function actButton(ctx){
	$('#activeButton').click(function(){
		var flg = $('#flg').val();
		if(flg=='add'){
			//alert("flag : " + flg);
			sleActiveAdd(ctx);
		}else if(flg=='detail'){
			//alert("flag : " + flg);
			activeUpdate(ctx);
		}
	});
}



//사원 팝업 이름 클릭 시 디테일 페이지에 고객이름 입력 함수
function inputiuserNm(iuserId, iuserNm, iuserType, iuserCellPh, iuserEmail){	
	if(iuserType == 'search'){
		$('#siuser_nm').val(iuserNm);
		$('#siuser_id').val(iuserId);
	}else if(iuserType == 'normal'){
		$('#iuser_nm').val(iuserNm);
		$('#iuser_id').val(iuserId);
		$('#cell_ph').val(iuserCellPh);
		$('#email').val(iuserEmail);
	}
//	alert("inputiuserNm: "+ iuser_id);
//	$('#iuser_id').val(iuser_id);
}

//사원 리스트 tr를 클릭했을 때 사원명 텍스트를 넣어주는 작업
function custIuserSelect(ctx){
	
	$('#custcomp_iuser_list_table tbody tr').click(function(){
		var iuserType = $('#iuserType').val();
		var iuserNm=$(this).find('#iuser_nm').text();
		var iuserId=$(this).find('#iuser_id').text();
		var iuserCellPh=$(this).find('#cell_ph').text();
		var iuserEmail=$(this).find('#email').text();
		window.opener.inputiuserNm(iuserId,iuserNm,iuserType, iuserCellPh, iuserEmail);
		self.close();
	});
}

//고객 popup 검색 버튼 누를 시 action 실행
function custIuserSearch(ctx,iuserType){
	$('#search_btn').click(function(){
		
		if(iuserType == 'search'){
			$('#searchForm').attr("action","opptSearchCustIusercompList");
		}else if(iuserType == 'normal'){
			$('#searchForm').attr("action","opptCustcompIuserList");
			
		}
	});
}

// 영업담당자 추가 
function sleActiveAdd(ctx){
	
	var cust_id = $('#cust_id').val();
	var sales_actvy_id = $('#sales_actvy_id').val();
	var sales_actvy_nm = $('#sales_actvy_nm').val();
	var iuser_id = $('#iuser_id').val();
	var iuser_nm = $('#iuser_nm').val();
	var key_part  = $('#ckey_part').val();
//	var sales_actvy_div_cd  = $('#sales_actvy_div_cd').val();
//	var sales_actvy_type_cd  = $('#sales_actvy_type_cd').val();
//	var sales_actvy_stat_cd  = $('#sales_actvy_stat_cd').val();
//	var memo  = $('#memo').val();

//	if(cust_id==""||cust_id==null){
//		alert("영업활동명을 입력해 주세요");
//		return false;
//	}else if(sales_actvy_id==""|| sales_actvy_id ==null){
//		alert("영업활동구분을 선택해 주세요");
//		return false;
//	}else if(sales_actvy_nm==""|sales_actvy_nm==null){
//		alert("시작일자를 선택해 주세요");
//		return false;
//	}else if(iuser_id=="0"|| iuser_id==null){
//		alert("시작일자 시를 선택해 주세요");
//		return false;
//	}else if(key_part=="0"|| key_part==null){
//		alert("시작일자 분을 선택해 주세요");
//		return false;
//	}else if(sales_actvy_div_cd==""||sales_actvy_div_cd==null){
//		alert("종료일자를 선택해 주세요");
//		return false;
//	}else if(sales_actvy_type_cd=="0"|| sales_actvy_type_cd==null){
//		alert("종료일자 시를 선택해 주세요");
//		return false;
//	}else if(sales_actvy_stat_cd=="0"|| sales_actvy_stat_cd==null){
//		alert("종료일자 분을 선택해 주세요");
//		return false;
//	}else if(memo=="0"||memo==null){
//		alert("상태를 선택해 주세요");
//		return false;
//	}
	
//	alert("sales_actvy_id : " + sales_actvy_id);
	
	$.ajax({
		type : 'post',
		data : {
			cust_id : cust_id,
			sales_actvy_id : sales_actvy_id,
			sales_actvy_nm : sales_actvy_nm,
			iuser_id : iuser_id,
			iuser_nm : iuser_nm,
			key_part : key_part
		
		},
		datatype : 'json',
		url : ctx+'/custPosAdd',
		success:function(result){
			alert("정상적으로 등록되었습니다.");
			window.opener.posList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
}


//영업활동명 클릭 시 detail값 가져오는 함수
function custSaleActDetail(){
	var sales_actvy_id = $('#sales_actvy_id').val();
	var iuser_id = $('#iuser_id').val();
	$.ajax({
		type : 'get',
		datatype : 'json',
		url : 'custActiveDetail',
		data : {sales_actvy_id : sales_actvy_id},
		success:function(result){
				$('#flg').val(result.flg);
				if(result.flg=='detail')
				{
					$('#activeButton').val('수정');
				}
				
				var key_part = result.detail.key_part;
				
				$('input[name=sales_actvy_div_cd]').each(function(){
					var v =$(this).val();
					
					if(v==sales_actvy_div_cd)
					{
						$(this).attr("checked",true);
					}
				});
				
				$('#cust_id').val(result.cust_id);
				$('#cust_nm').val(result.cust_nm);
				$('#sales_oppt_id').val(result.sales_oppt_id);
				$('#sales_actvy_nm').val(result.detail.sales_actvy_nm);
				$('#ckey_part').val(result.detail.key_part);
				
		},
		error:function(request){
			alert("error : " + request);
		}
	});
	
}

function activeUpdate(ctx){
	
	var cust_id = $('#cust_id').val();
	var sales_actvy_id = $('#sales_actvy_id').val();
	var sales_actvy_nm = $('#sales_actvy_nm').val();
	var iuser_id = $('#iuser_id').val();
	var iuser_nm = $('#iuser_nm').val();
	var key_part  = $('#ckey_part').val();

//	if(sales_actvy_nm==""||sales_actvy_nm==null){
//		alert("영업활동명을 입력해 주세요");
//		return false;
//	}else if(sales_actvy_div_cd==""|| sales_actvy_div_cd ==null){
//		alert("영업활동구분을 선택해 주세요");
//		return false;
//	}else if(strt_d==""|strt_d==null){
//		alert("시작일자를 선택해 주세요");
//		return false;
//	}else if(strt_t_h=="0"|| strt_t_h==null){
//		alert("시작일자 시를 선택해 주세요");
//		return false;
//	}else if(strt_t_m=="0"|| strt_t_m==null){
//		alert("시작일자 분을 선택해 주세요");
//		return false;
//	}else if(end_d==""||end_d==null){
//		alert("종료일자를 선택해 주세요");
//		return false;
//	}else if(end_t_h=="0"|| end_t_h==null){
//		alert("종료일자 시를 선택해 주세요");
//		return false;
//	}else if(end_t_m=="0"|| end_t_m==null){
//		alert("종료일자 분을 선택해 주세요");
//		return false;
//	}else if(sales_actvy_type_cd=="0"||sales_actvy_type_cd==null){
//		alert("활동유형을 선택해 주세요");
//		return false;
//	}else if(sales_actvy_stat_cd=="0"||sales_actvy_stat_cd==null){
//		alert("상태를 선택해 주세요");
//		return false;
//	}
		       
	$.ajax({
		type : 'post',
		data : {
			cust_id : cust_id,
			sales_actvy_id : sales_actvy_id,
			sales_actvy_nm : sales_actvy_nm,
			iuser_id : iuser_id,
			iuser_nm : iuser_nm,
			key_part : key_part
		},
		datatype : 'json',
		url : ctx+'/custSaleActUpdate',
		success:function(result){
			alert("정상적으로 수정 되었습니다.");
			window.opener.posList(cust_id);
			self.close();
		},
		error:function(request){
			alert("error : " +request.status);
		}
	});
	
}



