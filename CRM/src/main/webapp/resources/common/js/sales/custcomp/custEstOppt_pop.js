/**
 * 함수 목록
 * actOpptNmSelect(ctx)			:		영업기회명 클릭 시
 * 
 */

$(function(){
	var ctx = $('#ctx').val();
	custOpptNmSelect(ctx);
});

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function custOpptNmSelect(ctx){
	$('#cust_oppt_list_table tbody tr').click(function(){
		var opptNm=$(this).find('#sales_oppt_id').text();
		var opptId=$(this).find('#sales_oppt_nm').text();
		window.opener.inputOpptNm(opptNm,opptId);
		self.close();
	});
}
