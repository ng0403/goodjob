$(function() {
	var ctx = $('#ctx').val();
	allChk();
	checkCount();
	userDetailClick(ctx);
	iuserListAdd();
	iuserListEdit(ctx);
	iuserDelete(ctx);
	iuserDelDelete(ctx);
	iuserDeleteRollBack(ctx);
});
function deletedList(){
	var ctx = $("#ctx").val();
	location.href = ctx+'/iUserDelList';
}
// 1.모두 체크
function allChk() {
	var test3 = $('#mastertable tbody').find('input[type=checkbox]');

	if ($('#allCheck').is(":checked")) {
		$(test3).prop("checked", true);
	} else {
		$(test3).prop("checked", false);
	}
}

function checkCount() {
	var count = 0;
	var checkList = $('.ab');
	for (var i = 0; i < checkList.length; i++) {
		if ($(checkList[i]).is(':checked')) {
			count++;
		}
	}
	return count;
};

//사용자관리 복원
function iuserDeleteRollBack(ctx) {
	$('#DelUserRollBack').click(function() {
		var form = $('#delDelAllForm');
		if (checkCount() == 0) {
			alert("복원할 항목을 선택해주세요.");
		} else {
			var n = confirm("정말 복원하시겠습니까?"+"\n"+"복원시 사용자의 상태가 활성화로 전환됩니다.");
			if(n){
				document.delDelAllForm.action ="iuserDelRollBack";
				form.submit();
			}
		}
	});
}

//function multiSubmit(index){
//	if(index == 1){
//		document
//	}
//}
//사용자관리 삭제
function iuserDelete(ctx) {
	$('#iuserDelBtn').click(function() {
		var form = $('#delAllForm');
		if (checkCount() == 0) {
			alert("삭제할 항목을 선택해주세요.");
		} else {
			var n = confirm("정말 삭제하시겠습니까?"+"\n"+"삭제 시 사용자의 상태가 비활성화로 전환됩니다.");
			if(n){
				
				document.delAllForm.action ="iuserDelete";
				form.submit();
			}
		}
	});
}
//삭제된 사용자 완전 삭제
function iuserDelDelete(ctx) {
	$('#iUserDelDelete').click(function() {
		var form = $('#delDelAllForm');
		if (checkCount() == 0) {
			alert("삭제할 항목을 선택해주세요.");
		} else {
			var n = confirm("정말 삭제하시겠습니까?"+"\n"+"확인버튼 클릭 시 복구가 불가능합니다.");
			if(n){
				document.delDelAllForm.action ="iuserDelDelete";
				form.submit();
			}
		}
	});
}

function userDetailClick(ctx) {
	$('#usertbody').delegate('a', 'click', function(event) {
		event.preventDefault();
		var ctx = $('#ctx').val();
		var userId = $(this).text();

		$.ajax({
			url : ctx + '/iuserDetail',
			data : userId, //보낼 데이터값
			dataType : 'json',
			type : "POST", //
			contentType : "application/json",
			success : function(data) {
				$('#iuser_id').val(data.iuser_id);
				$('#id_nm').val(data.id_nm);
				$('#iuser_nm').val(data.iuser_nm);
				$('#pwd').val(data.pwd);
				$('#user_type_cd').val(data.iuser_div_cd);
				$('#user_type_nm').val(data.iuser_div_nm);
				$('#userTypePop').attr("disabled", true);

				$('#home_phone1').val(data.ph1);
				$('#home_phone2').val(data.ph2);
				$('#home_phone3').val(data.ph3);
				$('#company_phone1').val(data.comp_ph1);
				$('#company_phone2').val(data.comp_ph2);
				$('#company_phone3').val(data.comp_ph3);
				$('#cell_phone1').val(data.cell_ph1);
				$('#cell_phone2').val(data.cell_ph2);
				$('#cell_phone3').val(data.cell_ph3);
				$('#email1').val(data.email1);
				$('#email2').val(data.email2);

				$('#org_id').val(data.org_id);
				$('#org_nm').val(data.org_nm);
				$('#orgPopup').attr("disabled", true);

				if (data.act_yn == "Y") {
					$('#active_flg_Y').prop("checked", true);
					$('#active_flg_N').prop("checked", false);
					$('#active_flg_N').attr("disabled", true);
				} else {
					$('#active_flg_Y').prop("checked", false);
					$('#active_flg_N').prop("checked", true);
					$('#active_flg_Y').attr("disabled", true);
				}

//				$('#auth_name').val(data.auth_id);
//				$('#auth_name').attr("disabled", true);
				$('#tabDiv1 input').attr("disabled", true);
//				$('#addsavebtn').attr("disabled", true);
				$('#modifybtn').attr("disabled", false);
				$('#cancelbtn').attr("disabled", false);
				$('#modifybtn').css('display','inline-block');
//				$('#modifysavebtn').css('display','none');
				$('#cancelbtn').css('display','inline-block');
				$('#addsavebtn').css('display','none');
				//권한 가져오기
			},
			error : function(e) {
				alert("오류발생");
			}
		});
	});
}

function iuserListAdd(){
	$('#iuserListAddBtn').click(function(){
		$('#iuser_id').val("");
		$('#id_nm').val("");
		$('#iuser_nm').val("");
		$('#pwd').val("");
		$('#user_type_cd').val("");
		$('#org_id').val("");
		$('#home_phone1').val("");
		$('#home_phone2').val("")+"-"+$('#home_phone3').val("");
		$('#company_phone1').val("")+"-"+$('#company_phone2').val("")+"-"+$('#company_phone3').val("");
		$('#cell_phone1').val("")+"-"+$('#cell_phone2').val("")+"-"+$('#cell_phone3').val("");
		$('#email1').val("") + "@"+$('#email2').val("");
		$('#tabDiv1 input').attr("disabled", false);
//		$('#auth_name').attr("disabled", false);
		$('#addsavebtn').attr("disabled", false);
		$('#modifybtn').attr("disabled", true);
		$('#submitbtn').attr("disabled", true);
		$('#addsavebtn').css("display", "inline-block");
		$('#modifysavebtn').css("display", "none");
		$('#modifybtn').css("display", "none");
		$('#modifysavebtn').css('display','none');
		$('#orgPopup').attr("disabled", false);
		$('#org_nm').attr("readonly", true);
		$('user_type_nm').attr("readonly", true);
		$('#tabDiv1 input[type="text"]').css("background", "rgb(255, 255, 255)");
		$('#tabDiv1 input[type="password"]').css("background", "rgb(255, 255, 255)");
//		$('#tabDiv1 input[type="button"]').css("background", "rgb(255, 255, 255)");
	});
}

function iuserListEdit(ctx){
	$('#iuserListEditBtn').click(function(){
		if(checkCount() == 0){
			alert('수정할 정보를 체크하여 주세요.');
		}else if(checkCount() == 1){
			var checkbox = $('#usertbody tr').find('input[type="checkbox"]:checked');
			var userId = $(checkbox).parent().next().children().text()

			$.ajax({
				url : ctx + '/iuserDetail',
				data : userId, //보낼 데이터값
				dataType : 'json',
				type : "POST", //
				contentType : "application/json",
				success : function(data) {
					$('#iuser_id').val(data.iuser_id);
					$('#id_nm').val(data.id_nm);
					$('#iuser_nm').val(data.iuser_nm);
					$('#pwd').val(data.pwd);
					$('#user_type_cd').val(data.iuser_div_cd);
					$('#userTypePop').attr("disabled", true);

					$('#home_phone1').val(data.ph1);
					$('#home_phone2').val(data.ph2);
					$('#home_phone3').val(data.ph3);
					$('#company_phone1').val(data.comp_ph1);
					$('#company_phone2').val(data.comp_ph2);
					$('#company_phone3').val(data.comp_ph3);
					$('#cell_phone1').val(data.cell_ph1);
					$('#cell_phone2').val(data.cell_ph2);
					$('#cell_phone3').val(data.cell_ph3);
					$('#email1').val(data.email1);
					$('#email2').val(data.email2);

					$('#org_id').val(data.org_id);
					$('#orgPopup').attr("disabled", true);

					if (data.act_yn == "Y") {
						$('#active_flg_Y').prop("checked", true);
						$('#active_flg_N').prop("checked", false);
						$('#active_flg_N').attr("disabled", true);
					} else {
						$('#active_flg_Y').prop("checked", false);
						$('#active_flg_N').prop("checked", true);
						$('#active_flg_Y').attr("disabled", true);
					}

//					$('#auth_name').val(data.auth_id);
//					$('#auth_name').attr("disabled", true);
					$('#tabDiv1 input').attr("disabled", true);
					$('#addsavebtn').attr("disabled", true);
					$('#modifybtn').attr("disabled", false);
					$('#modifybtn').css("display", "inline-block");
					$('#cancelbtn').css("display", "inline-block");
					$('#addsavebtn').css("display", "none");
					//권한 가져오기
				},
				error : function(e) {
					alert("오류발생");
				}
			});
		}else{
			alert('수정할 정보를 하나만 선택하여 주세요.');
		}
	});
}