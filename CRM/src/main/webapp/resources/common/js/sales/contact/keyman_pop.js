/**
 * 함수 목록
 * custNmSelect(ctx)			:	고객명 선택 시
 * custSearch(ctx,custType)		:	고객 검색
 * 
 */

$(function(){
	custNmSelect(ctx);
	custSearch(ctx,custType);
 	var ctx = $("#ctx").val();

});

//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function keyNmSelect(ctx){
	$('#keyman_list_table tbody tr').click(function(){
 		var custType = $('#custType').val();
		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();
 		//준석수정
		window.opener.inputCustNm(custId,custNm,custType);
		self.close();
		
	});
}


//키맨리스트 tr를 클릭했을 때 키맨아이디 텍스트를 넣어주는 작업
function keyNmSelect(ctx){
	$('#keyman_list_table tbody tr').click(function(){
   /* 		var custType = $('#custType').val();
*/		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();
  		//준석수정
		window.opener.inputCustNm(custId, custNm);
		self.close();
		
	});
}


//영업기회 리스트 tr를 클릭했을 때 영업기회아이디 텍스트를 넣어주는 작업
function OpptNmSelect(oppt_id, cust_id){
	$('#comp_list_table1 tbody tr').click(function(){
    /* 	 var custType = $('#custType').val();
*/		var opptNm=$(this).find('#sales_oppt_nm').text();
/*		var opptId=$(this).find('#oppt_id').text();*/
		/*var custId=$(this).find('#cust_id').text();*/
  		//준석수정
		window.opener.inputOpptNm(oppt_id, opptNm, cust_id);
		self.close();
		
	});
}


//고객 popup 검색 버튼 누를 시 action 실행
function custSearch(ctx,custType){
	$('#search_btn').click(function(){
		alert("dddd");
		var custType = $('#custType').val();
		if(custType == 'search'){
			$('#searchForm').attr("action","opptSearchCustcompList");
		}else if(custType == 'normal'){
			$('#searchForm').attr("action","opptCustcompList");
			
		}
	});
}

