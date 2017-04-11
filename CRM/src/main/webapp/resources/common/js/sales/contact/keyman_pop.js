/**
 * 함수 목록
 * custNmSelect(ctx)			:	고객명 선택 시
 * custSearch(ctx,custType)		:	고객 검색
 * 
 */

$(function(){
	custNmSelect(ctx);
	custSearch(ctx,custType);
});

//고객사리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function keyNmSelect(ctx){
	$('#custcomp_list_table tbody tr').click(function(){
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
	$('#comp_list_table tbody tr').click(function(){
  /* 		var custType = $('#custType').val();
*/		var custNm=$(this).find('#cust_nm').text();
		var custId=$(this).find('#cust_id').text();
  		//준석수정
		window.opener.inputCustNm(custId, custNm);
		self.close();
		
	});
}


//고객 popup 검색 버튼 누를 시 action 실행
function custSearch(ctx,custType){
	$('#search_btn').click(function(){
		var custType = $('#custType').val();
		if(custType == 'search'){
			$('#searchForm').attr("action","opptSearchCustcompList");
		}else if(custType == 'normal'){
			$('#searchForm').attr("action","opptCustcompList");
			
		}
	});
}





