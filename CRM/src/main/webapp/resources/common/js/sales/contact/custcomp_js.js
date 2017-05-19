/* 
 * Company Customer JavaScript
 */
// 서브메뉴 유지
$("#navisub4").show();
$("#navicustcomp").css("font-weight", "bold");

$(document).ready(function() {
	var ctx = $("#ctx").val();
	keymanList();
	opptList();
	actListcontact();
  	//달력띄우기
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
	
	
	
	// 상품추가 수량, 금액 변경
	function prodChange(){
 		var countSum = 0;
		var salesPriceSum = 0;
		var discountSum = 0;
		var supplyPriceSum = 0;
		$("#opptProdtbody tr[class!=empty]").each(function(){
			var countObj=$(this).children().eq(2).children();
			var salesamtObj=$(this).children().eq(0).children().eq(1);
			var count = countObj.val();
 			if(count==""){
				count="0";
			}
			var sellamt =  $(this).children().eq(3).text();
			var disvalObj = $(this).children().eq(4).children().eq(0);
			var amt = $(this).children().eq(3).text();
			var salesamt = $(this).children().eq(0).children().eq(1).val();
			var sellamt =  parseInt(salesamt) * parseInt(count);			
			if(sellamt==""){
				sellamt="0";
			}
			amt = sellamt;
			$(this).children().eq(3).text(comma(amt));
			salesPriceSum = parseInt(sellamt) + parseInt(salesPriceSum);
			countSum = parseInt(count) + parseInt(countSum);
			var disval =  disvalObj.val();
			if(disval==""){
				disval="0";
			}
			var unit = $(this).children().eq(4).children().eq(1).val();
  			var disamt = 0;
			if(unit == "0001"){
 				 disamt = parseInt(amt) - parseInt(disval);
				 discountSum = parseInt(disval) + parseInt(discountSum);
			}else if(unit == "0002"){
 				var dis = parseInt(amt) * (parseInt(disval)/100);
				disamt = parseInt(amt) - parseInt(dis);
				 discountSum = parseInt(dis) + parseInt(discountSum);
			}else if(unit =="0"){
				disamt = parseInt(amt);
				$(this).children().eq(4).children().eq(0).val("0");
			}
			if(isNaN(disamt) || parseInt(disamt)<0){
				disamt="0";
			}
			$(this).children().eq(5).text(comma(disamt));
			 var realamt = $(this).children().eq(5).text();
			 supplyPriceSum = parseInt(disamt) + parseInt(supplyPriceSum);
 
		});
		$("#countSum").text(comma(countSum));
		$("#salesPriceSum").text(comma(salesPriceSum));
		$("#discountSum").text(comma(discountSum));
		$("#supplyPriceSum").text(comma(supplyPriceSum));	
	}
	
	//input값 bind시 상품 금액 변경 함수 호출
	function prodChacgeRealTime(){
		$("#opptProdtbody").bind('input', function() { 
			prodChange();
		});
	}
	
	prodChange();
	prodChacgeRealTime();
	
	
	// 기업고객 리스트 체크박스 선택, 해제
	$("#ccListCheck").click(function(){
		// 만약 전체 선택 체크박스가 체크된 상태일 경우
		if($("#ccListCheck").prop("checked")){
			// 해당화면 전체 checkbox들을 체크해준다.
			$("input[type=checkbox]").prop("checked", true);
		// 전체선택 체크박스가 해제된 경우
		} else {
			// 해당화면에 모든 checkbox들의 체크를 해제시킨다.
			$("input[type=checkbox]").prop("checked", false);
		}
	});
	
	// 상세정보 가져오기
	/*$("#tab1").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id != ''){
			ccDetail(cust_id);
		}
	});*/
	
	
	 
	// 키맨 리스트 가져오기
	$("#tab1").click(function() {
  		var cont_id = $("#cont_id").val();
 		if(cont_id == ''){
			var tbody = $('#keymanTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			keymanList(cont_id);
		}
	});
	
	// 영업기회 리스트 가져오기
	$("#tab2").click(function() {
 		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#opptTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			opptList(cust_id);
		}
	});
	
	// 영업활동 리스트 가져오기
	$("#tab3").click(function() {
 		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#actTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='10'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			actListcontact();
		}
	});
	
	// 견적 리스트 가져오기
	$("#tab5").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#estTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			estList(cust_id);
		}
	});
	
	// 계약 리스트 가져오기
	$("#tab6").click(function() {
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			var tbody = $('#contTableTbody');
			tbody.children().remove();
			var tbodyContent = "";
			tbodyContent = "<tr style='height: 150px;'><td colspan='9'>조회된 결과가 없습니다.</td></tr>";
			tbody.append(tbodyContent);
		} else {
			contList(cust_id);
		}
	});
	
});

// 검색 엔터키 기능
function schCustComp(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		if ($("#sch_cust_nm").val() == '' && $("#sch_comp_num").val() == '' && $("#sch_corp_num").val() == '' && $("#sch_iuser_nm").val() == '') {
			alert("검색어를 입력하세요.")
			$("#sch_cust_nm").focus();
		} else {
			schPaging(1);
		}
	}
	event.stopPropagation();
}

// 전체 체크 해제
function chkCancel() {
	$(document).ready(function() {
		$("#ccListCheck").prop("checked", false);
	});
}

// 기업고객 삭제
function custCompDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_cust_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				$.ajax({
					url : ctx+'/custCompDelete.do',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							location.href = ctx + "/custcomp";
						}
					},
					error : function(data){
						alert(data.deleteResult);
						history.back();
					}
				});
			} else {
				return;
			}
		}
	});
}

//탭 이동
function ccTabFunc(cust_id, cust_nm) {
	$("#nowCust_id").val(cust_id);
	viewDetail(cust_id);
	
//	$(document).ready(function() {
//		$("#nowCust_id").val(cust_id); // 현재 cust_id 저장
//		$("#nowCust_nm").val(cust_nm); // 현재 cust_nm 저장
//			
//		if($("#tab1").is(":checked")){ // 상세정보 불러오기
//			if(cust_id != '')	ccDetail(cust_id);
//		} else if($("#tab2").is(":checked")){ // 키맨 불러오기
//			if(cust_id != '')	keymanList(cust_id);
//		} else if($("#tab3").is(":checked")){
//			if(cust_id != '')	opptList(cust_id); // 영업기회 불러오기
//		} else if($("#tab4").is(":checked")){
//			if(cust_id != '')	actList(cust_id); // 영업활동 불러오기
//		} else if($("#tab5").is(":checked")){
//			if(cust_id != '')	estList(cust_id); // 견적 불러오기
//		} else if($("#tab6").is(":checked")){
//			if(cust_id != '')	contList(cust_id); // 계약 불러오기
//		}
//	});
}

function viewDetail(cust_id){
	var ctx = $("#ctx").val();
	location.href = ctx+'/custcompDetail?cust_id=' + cust_id;
}



//페이지 입력 이동
function pageInput(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			var ccPageNum = $("#ccPageInput").val();
			var endPageNum = $("#endPageNum").val();
			var sch_cust_nm = $("#sch_cust_nm").val();
			var sch_comp_num = $("#sch_comp_num").val();
			var sch_corp_num = $("#sch_corp_num").val();
			var sch_iuser_nm = $("#sch_iuser_nm").val();
			if (parseInt(ccPageNum) > parseInt(endPageNum) || parseInt(ccPageNum) < 1) {
				alert("페이지 정보를 다시 입력하세요.")
				$("#ccPageInput").val("1");
			} else {
				if(sch_cust_nm == '' && sch_comp_num == '' && sch_corp_num == '' && sch_iuser_nm == ''){
					paging(ccPageNum);
				} else {
					schPaging(ccPageNum);
				}
				
			}
		}
	event.stopPropagation();
}

// 페이징
function paging(ccPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var allData = {"ccPageNum": ccPageNum};
		var tbody = $('#ccListTbody');
		var tbodyContent = "";
		
		$.ajax({
			url : ctx+'/custcompPaging.do',
			type : 'POST',
			data : allData,
			dataType : "json",
			success : function(data) {
				if(data.result == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				}else{
					tbody.children().remove();
					
					for (var i = 0; i < data.ccVOList.length; i++) {
						tbodyContent = "<tr>"
							+"<th><input type='checkbox' id='chk_cust_id' value='"+data.ccVOList[i].cust_id+"' onclick='chkCancel();'></th>"
							+"<td style='text-align: left; padding-left: 8px;'>"
							+"<a href='#' onclick=\"ccTabFunc('"+data.ccVOList[i].cust_id+"', '"+data.ccVOList[i].cust_nm+"');\" style='color: black;' class='cnClick'>"+data.ccVOList[i].cust_nm+"</a></td>"
							+"	<td>"+data.ccVOList[i].comp_num+"</td>" 
							+"<td>"+data.ccVOList[i].corp_num+"</td>"
							+"<td>"+data.ccVOList[i].rep_ph1+"-"+data.ccVOList[i].rep_ph2+"-"+data.ccVOList[i].rep_ph3+"</td>"
							+"<td>"+data.ccVOList[i].sales_scale+"</td>"
							+"<td style='text-align: right; padding-right: 8px;'>"+data.ccVOList[i].emp_qty+"</td>"
							+"<td>"+data.ccVOList[i].indst+"</td>"
							+"<td>"+data.ccVOList[i].iuser_nm+"</td>"
							+"<td>"+data.ccVOList[i].fst_reg_dt+"</td></tr>";
						tbody.append(tbodyContent);
						$("#ccListCheck").prop("checked", false);
					}
					
					if(data.ccVOList.length < 5){
						for(var j = 0; j < 5-data.ccVOList.length; j++){
							tbodyContent ="<tr style='height:30px;'>"
								+"<th></th>"
								+"<td></td><td></td><td></td><td></td>"
								+"<td></td><td></td><td></td><td></td>"
								+"<td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
					var pageContent = "";
					// 페이징 다시그리기
					$("#pagingDiv").children().remove();
					
					if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
						pageContent = "<input type='hidden' id='ccPageNum' value='"+data.ccPageNum+"'/><input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a> ◀ </a><input type='text' id='ccPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
						+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
					} else if(data.ccPageNum == data.page.startPageNum){
						pageContent = "<input type='hidden' id='ccPageNum' value='"+data.ccPageNum+"'/><input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a> ◀ </a><input type='text' id='ccPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
						+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
						+"<a href='#' onclick=paging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
					} else if(data.ccPageNum == data.page.endPageNum){
						pageContent = "<input type='hidden' id='ccPageNum' value='"+data.ccPageNum+"'/><input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a href='#' onclick=paging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
						+"<input type='text' id='ccPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
						+"<a> / "+data.page.endPageNum+"</a>"
						+"<a> ▶ </a>";
					} else {
						pageContent = "<input type='hidden' id='ccPageNum' value='"+data.ccPageNum+"'/><input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
						+"<a href='#' onclick=paging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
						+"<input type='text' id='ccPageInput' value='"+data.ccPageNum+"' onkeypress=\"pageInput(event);\"/>"
						+"<a href='#' onclick=paging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
						+"<a href='#' onclick=paging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
					}
					$("#pagingDiv").append(pageContent);
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 조회 페이징
function schPaging(ccPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var sch_cust_nm = $("#sch_cust_nm").val();
		var sch_comp_num = $("#sch_comp_num").val();
		var sch_corp_num = $("#sch_corp_num").val();
		var sch_iuser_nm = $("#sch_iuser_nm").val();
		if(sch_cust_nm == '' && sch_comp_num == '' && sch_corp_num == '' && sch_iuser_nm == ''){
			alert("검색어를 입력하세요");
		} else{
			var allData = {"ccPageNum": ccPageNum, "sch_cust_nm": sch_cust_nm, "sch_comp_num":sch_comp_num
					, "sch_comp_num":sch_comp_num,"sch_corp_num":sch_corp_num,"sch_iuser_nm":sch_iuser_nm};
			var tbody = $('#ccListTbody');
			var tbodyContent = "";
			
			$.ajax({
				url : ctx+'/custcompPaging.do',
				type : 'POST',
				data : allData,
				dataType : "json",
				success : function(data) {
					if(data.result == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						if(data.ccVOListSize == 0){
							alert("검색결과가 없습니다.");
							location.href = ctx+'/custcomp';
						}else{
							tbody.children().remove();
							
							$("#sch_cust_nm").val(data.sch_cust_nm);
							$("#sch_comp_num").val(data.sch_comp_num);
							$("#sch_corp_num").val(data.sch_corp_num);
							$("#sch_iuser_nm").val(data.sch_iuser_nm);
							for (var i = 0; i < data.ccVOList.length; i++) {
								tbodyContent = "<tr>"
									+"<th><input type='checkbox' id='chk_cust_id' value='"+data.ccVOList[i].cust_id+"' onclick='chkCancel();'></th>"
									+"<td style='text-align: left; padding-left: 8px;'>"
									+"<a href='#' style='color: black;' class='cnClick' onclick=\"ccTabFunc('"+data.ccVOList[i].cust_id+"', '"+data.ccVOList[i].cust_nm+"');\">"+data.ccVOList[i].cust_nm+"</a></td>"
									+"	<td>"+data.ccVOList[i].comp_num+"</td>"
									+"<td>"+data.ccVOList[i].corp_num+"</td>"
									+"<td>"+data.ccVOList[i].rep_ph1+"-"+data.ccVOList[i].rep_ph2+"-"+data.ccVOList[i].rep_ph3+"</td>"
									+"<td>"+data.ccVOList[i].sales_scale+"</td>"
									+"<td style='text-align: right; padding-right: 8px;'>"+data.ccVOList[i].emp_qty+"</td>"
									+"<td>"+data.ccVOList[i].indst+"</td>"
									+"<td>"+data.ccVOList[i].iuser_nm+"</td>"
									+"<td>"+data.ccVOList[i].fst_reg_dt+"</td></tr>";
								tbody.append(tbodyContent);
								$("#ccListCheck").prop("checked", false);
							}
							
							if(data.ccVOList.length < 5){
								for(var j = 0; j < 5-data.ccVOList.length; j++){
									tbodyContent ="<tr style='height:30px;'>"
										+"<th></th>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td><td></td><td></td><td></td>"
										+"<td></td></tr>";
									tbody.append(tbodyContent);
								}
							}
							var pageContent = "";
							// 페이징 다시그리기
							$("#pagingDiv").children().remove();
							
							if(data.page.startPageNum == 1 && data.page.endPageNum == 1){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' readonly='readonly' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a> / "+data.page.endPageNum+"</a><a> ▶ </a>";
							} else if(data.ccPageNum == data.page.startPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a> ◀ </a><input type='text' id='ccPageInput' value='"+data.page.startPageNum+"' onkeypress=\"pageInput(event);\"/>" 
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							} else if(data.ccPageNum == data.page.endPageNum){
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.page.endPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a> / "+data.page.endPageNum+"</a>"
								+"<a> ▶ </a>";
							} else {
								pageContent = "<input type='hidden' id='endPageNum' value='"+data.page.endPageNum+"'/>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum-1)+") id='pNum'> ◀ </a>"
								+"<input type='text' id='ccPageInput' value='"+data.ccPageNum+"' onkeypress=\"pageInput(event);\"/>"
								+"<a href='#' onclick=schPaging("+data.page.endPageNum+") id='pNum'> / "+data.page.endPageNum+"</a>"
								+"<a href='#' onclick=schPaging("+(data.ccPageNum+1)+") id='pNum'> ▶ </a>";
							}
							$("#pagingDiv").append(pageContent);
						}
					}
				},
				error : function() {
					alert("전송중 오류가 발생했습니다.");
				}
			});//ajax
		}
	});//document.ready
}

// 기업고객 상세보기 ajax 통신
function ccDetail(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		$("#mdfBtn").attr("disabled", false);
		
		// 버튼 재설정
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
		
		$.ajax({
			type : 'POST',
			url : ctx+'/custCompDetail.do',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				$("#nowCust_id").val(data.cust_id);
				$("#nowCust_nm").val(data.cust_nm);
				// 상세정보에 값 넣기
				$("#cust_id").val(data.cust_id); // 기업아이디
				$("#cust_nm").val(data.cust_nm).attr("readonly","readonly"); // 기업명
				$("#comp_num").val(data.comp_num).attr("readonly","readonly"); // 사업자번호
				$("#corp_num").val(data.corp_num).attr("readonly","readonly"); // 법인번호
				$("#sales_scale_cd").children().eq(data.sales_scale_cd).attr("selected", "selected"); // 매출규모 코드 선택
				$("#emp_qty").val(data.emp_qty).attr("readonly","readonly"); // 직원수
				$("#indst_cd").children().eq(data.indst_cd).attr("selected", "selected"); // 산업군 코드 선택
				$("#aHpUrl").prop("href", "http://"+data.homepage_url);
				$("#homepage_url").css({"cursor" : "pointer", "color" : "blue"}); // 홈페이지
				$("#homepage_url").val(data.homepage_url).attr("readonly","readonly"); // 홈페이지
				$("#rep_ph1").val(data.rep_ph1).attr("readonly","readonly"); // 대표전화번호
				$("#rep_ph2").val(data.rep_ph2).attr("readonly","readonly");
				$("#rep_ph3").val(data.rep_ph3).attr("readonly","readonly");
				$("#cust_zip_cd1").val(data.cust_zip_cd.substring(0, 3)); // 우편번호
				$("#cust_zip_cd2").val(data.cust_zip_cd.substring(3, 6)); // 우편번호
				$("#cust_zip_addr").val(data.cust_zip_addr).attr("readonly","readonly"); // 우편번호 상 주소
				$("#cust_addr").val(data.cust_addr); // 고객 주소
				$("#zip_cd_sri_num").val(data.zip_cd_sri_num); // 우편번호 일련번호
				$("#iuser_nm").val(data.iuser_nm).attr("readonly","readonly"); // 영업담당자
				$("#iuser_id_nm").val(data.iuser_id_nm).attr("readonly","readonly"); // 영업담당자
				$("#stat_cd").children().eq(data.stat_cd).attr("selected", "selected"); // 기업 상태 코드 선택
				
				// 히든 속성에 value값 설정하기
				$("#hcust_nm").val(data.cust_nm); // 기업명
				$("#hcomp_num").val(data.comp_num); // 사업자번호
				$("#hcorp_num").val(data.corp_num); // 법인번호
				$("#hsales_scale_cd").val(data.sales_scale_cd); // 매출규모 코드 선택
				$("#hemp_qty").val(data.emp_qty); // 직원수
				$("#hindst_cd").val(data.indst_cd); // 산업군 코드 선택
				$("#hhomepage_url").val(data.homepage_url); // 홈페이지
				$("#hrep_ph1").val(data.rep_ph1); // 대표전화번호
				$("#hrep_ph2").val(data.rep_ph2);
				$("#hrep_ph3").val(data.rep_ph3);
				$("#hcust_zip_cd").val(data.cust_zip_cd); // 우편번호
				$("#hcust_zip_addr").val(data.cust_zip_addr); // 우편번호 상 주소
				$("#hcust_addr").val(data.cust_addr); // 고객 주소
				$("#hiuser_id_nm").val(data.iuser_id_nm); // 영업담당자
				$("#hiuser_nm").val(data.iuser_nm); // 영업담당자
				$("#hstat_cd").val(data.stat_cd); // 기업 상태 코드 선택
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 키맨 List ajax 통신
function keymanList() {
	var cont_id = $("#cont_id").val();
	$(document).ready(function() {
 		var ctx = $("#ctx").val();
		var tbody = $('#keymanTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : '/keymanList',
			type : 'POST',
			data : "cont_id="+cont_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				// 키맨 리스트 그리기
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 키맨이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					for (var i = 0; i < data.length; i++) {
						tbodyContent = "<tr>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].cont_id+':'+data[i].cust_id+"' id='kmChkbox'  onclick='kmchkCancel();'></td>" +
						"<td style='width:10%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"keymanDeatil('"+data[i].cust_id+"','"+data[i].cont_id+"');\" style='color:black;' class='cnClick'>"+data[i].cust_nm+"</td>" +
						"<td style='width:7%;'>"+data[i].key_pos+"</td>" +
 						"<td style='width:20%;'>"+data[i].memo+"</td>" +
						"<td style='width:10%;'>"+data[i].fst_reg_id+"</td>" +
						"<td style='width:15%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr style='height: 25px;'><td style='width:3%;'></td><td style='width:10%;'></td><td style='width:7%;'></td>" +
							"<td style='width:10%;'></td><td style='width:10%;'></td><td style='width:15%;'></td> " +
							"</tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 영업기회 List ajax 통신
function opptList() {
 	$(document).ready(function() {
 		var cont_id = $("#cont_id").val();
 		var ctx = $("#ctx").val();
		var tbody = $('#opptTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : '/ccOpptListcontact',
			type : 'POST',
			data : "cont_id="+cont_id,	
			dataType : "json",
			success : function(data) {
 				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='9'>등록된 영업기회가 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 영업기회 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var expt_sales_amt = comma(data[i].expt_sales_amt);
						
						tbodyContent = "<tr>" +
						"<td style='width:3%;'><input type='checkbox' value='"+data[i].sales_oppt_id+"' id='chk_oppt_id' onclick=\"opptChkCancel();\"></td>" +
						"<td style='width:30%; text-align: left; padding-left: 8px;'><a href='#' onclick=\"contactopptTabDetail('"+data[i].sales_oppt_id+"');\" style='color:black;' class='cnClick'>"+data[i].sales_oppt_nm+"</a></td>" +
						"<td style='width:8%;'>"+data[i].sales_lev_cd_nm+"</td>" +
						"<td style='width:12%; text-align: right; padding-right: 8px;'>"+expt_sales_amt+"</td>" +
						"<td style='width:12%;'>"+data[i].expt_fin_d+"</td>" +
						"<td style='width:7%;'>"+data[i].psblty_rate+"</td>" +
						"<td style='width:7%;'>"+data[i].sales_oppt_stat_cd_nm+"</td>" +
						"<td style='width:8%;'>"+data[i].fst_reg_id+"</td>" +
						"<td style='width:15%;'>"+data[i].fst_reg_dt+"</td>" +
						"</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr style='height: 25px;'><td style='width:3%;'></td><td style='width:30%;'></td>" +
							"<td style='width:8%;'></td><td style='width:12%;'></td><td style='width:12%;'></td>" +
							"<td style='width:7%;'></td><td style='width:7%;'></td><td style='width:8%;'></td><td style='width:15%;'></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}

function dateFormatTime(timestamp){
	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
	                        + (day < 10 ? "0" + day : day) + " " 
	                        + (hour < 10 ? "0" + hour : hour) + ":"
	                        + (min < 10 ? "0" + min : min);
	return retVal
}

// 영업활동 List ajax 통신
function actListcontact() {
	$(document).ready(function() {
		var cont_id = $("#cont_id").val();
 		var ctx = $("#ctx").val();
		var tbody = $('#actTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : '/ccActListcontact',
			type : 'POST',
			data : "cont_id="+cont_id,
			dataType : "json",
			success : function(data) {
 				tbody.children().remove();
 				var a = data.length;
  				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='10'>등록된 영업활동이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 영업활동 리스트 그리기
 					for (var i = 0; i < data.length; i++) {
						/*	var strt_d = dateFormat(Number(data[i].strt_d));
						var end_d = dateFormat(Number(data[i].end_d));
						var fst_reg_dt = dateFormatTime(Number(data[i].fst_reg_dt));*/
						var strt_t = data[i].strt_t;
						var end_t = data[i].end_t;
						
						/*if(strt_t == null){
							strt_t = '';
						}
						if(end_t == null){
							end_t = '';
						}*/
 						tbodyContent = "<tr>"
							+ "<td rowspan='2'><input type='checkbox' value='"+data[i].sales_actvy_id+"' id='chk_act_id' onclick=\"actChkCancel();\"></td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccActDetail('"+data[i].sales_actvy_id+"');\" style='color:black;' class='cnClick'>"+data[i].sales_actvy_nm+"</a></td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_div_nm+"</td>"
							+ "<td rowspan='2' style='text-align: left; padding-left: 8px;'>"+data[i].sales_oppt_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_type_nm+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].strt_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+strt_t+"</td>"
							+ "<td rowspan='2'>"+data[i].sales_actvy_stat_nm+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_id+"</td>"
							+ "<td rowspan='2'>"+data[i].fst_reg_dt+"</td>"
							+ "</tr><tr>"
							+ "<td style='height:12px; padding:5px;'>"+data[i].end_d+"</td>"
							+ "<td style='height:12px; padding:5px;'>"+end_t+"</td></tr>";
						tbody.append(tbodyContent);
 
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr style='height: 25px;'>"
								+ "<td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "<td style='height:12px; padding:5px;'></td><td style=' height:12px; padding:5px;'></td>" 
								+	"<td rowspan='2'></td>"
								+ "<td rowspan='2'></td><td rowspan='2'></td>"
								+ "</tr><tr style='height: 25px;'><td></td><td></td></tr>";
							tbody.append(tbodyContent);

						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 견적 List ajax 통신
function estList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#estTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccEstList.do',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='8'>등록된 견적이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 견적 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var sales_price = comma(data[i].sales_price);
						tbodyContent = "<tr>"
							+ "<th><input type='checkbox' value='"+data[i].estim_id+"' id='chk_est_id' onclick='estChkCancel();'></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccEstDetail('"+data[i].estim_id+"');\"  style='color:black;' class='cnClick'>"+data[i].estim_nm+"</td>"
							+ "<td>"+data[i].estim_lev_cd_nm+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+data[i].estim_qty+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+sales_price+"</td>"
							+ "<td>"+data[i].estim_valid_d+"</td>"
							+ "<td>"+data[i].fst_reg_id+"</td>"
							+ "<td>"+data[i].fst_reg_dt+"</td>"
							+ "</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr>"
								+ "<th></th>"
								+ "<td></td><td></td><td></td>"
								+ "<td></td><td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

// 계약 List ajax 통신
function contList(cust_id) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var tbody = $('#contTableTbody');
		var tbodyContent = "";
		$.ajax({
			url : ctx+'/ccContList.do',
			type : 'POST',
			data : "cust_id="+cust_id,
			dataType : "json",
			success : function(data) {
				tbody.children().remove();
				if(data.length == 0){
					tbodyContent = "<tr style='height: 150px;'><td colspan='8'>등록된 계약이 없습니다.</td></tr>";
					tbody.append(tbodyContent);
				}else{
					// 계약 리스트 그리기
					for (var i = 0; i < data.length; i++) {
						var contr_amt = comma(data[i].contr_amt);
						tbodyContent = "<tr>"
							+ "<th><input type='checkbox' value='"+data[i].contr_id+"' id='chk_cont_id' onclick=\"contChkCancel();\"></th>"
							+ "<td style='text-align: left; padding-left: 8px;'><a href='#' onclick=\"ccContDetail('"+data[i].contr_id+"');\" style='color:black;' class='cnClick'>"+data[i].contr_nm+"</a></td>"
							+ "<td>"+data[i].contr_num+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+data[i].contr_qty+"</td>"
							+ "<td style='text-align: right; padding-right: 8px;'>"+contr_amt+"</td>"
							+ "<td>"+data[i].contr_d+"</td>"
							+ "<td>"+data[i].fst_reg_id+"</td>"
							+ "<td>"+data[i].fst_reg_dt+"</td>"
							+ "</tr>";
						tbody.append(tbodyContent);
					}
					if(data.length < 5){
						for(var j = 0; j < 5-data.length; j++){
							tbodyContent = "<tr>"
								+ "<th></th>"
								+ "<td></td><td></td><td></td>"
								+ "<td></td><td></td><td></td><td></td></tr>";
							tbody.append(tbodyContent);
						}
					}
				}
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}
		});
	});
}

//모두체크
function actAllChk(){
	  
	var checkbox=$('#act_list_table tbody').find('input[type=checkbox]');
	
	if($('#actCheck').is(":checked")){
		$(checkbox).prop("checked", true);
	}else{
		$(checkbox).prop("checked", false);
	}
}

//전체 체크 해제
function actChkCancel() {
	$(document).ready(function() {
		$("#actCheck").prop("checked", false);
	});
}

//체크박스 개수 검색함수
function checkCount(){
   var count=0;
   var checkList = $('.act_chek');

   for(var i=0; i<checkList.size(); i++){
      if($(checkList[i]).is(':checked')){
         count++;
      }
   }
   return count;
};

//Insert
function custcompInsertForm() {
	//var ctx = $("#ctx").val();
	
	alert("durldurl");
	
	//focus, css, readonly, disabled false 상태로 변경
	//값 초기화
	$("#custcomptbody #cust_nm").focus();
	$("#custcomptbody input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	}).val('');
	$("#custcomptbody select").attr({
		disabled:false,
		style:'background-color:white'
	});
	
	// 버튼 활성화
	$("#sales_scale_cd").children().eq(0).attr("selected", "selected").css("height", "24pt"); // 매출규모 코드 선택
	$("#indst_cd").children().eq(0).attr("selected", "selected"); // 산업군 코드 선택
	//$("#stat_cd").children().eq(0).attr("selected", "selected"); // 기업 상태 코드 선택
	$("#iuser_nm").attr("readonly", true);
	$("#iuser_search").attr("disabled", false);
	
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
	
	location.href = ctx + '/custcompDetail';
}

//delete
function custcompDelete()
{
	var form = $('#delForm');
		
	if (checkCount() == 0) 
	{
		alert("삭제할 항목을 선택해주세요.");
	} 
	else 
	{
		var delYN = confirm("정말 삭제하시겠습니까??");
			
		if(!delYN)
		{
			return false;
		}
	
		form.submit();
	}	
}


//영업 기회 insert 이게 진짜.
function contactopptSave()
{
  	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
 	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
/*	var cust_id = $('#cust_id', opener.document).val();*/
	var cust_id = $("#cust_id").val();
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

	if(sales_oppt_nm == "" || sales_oppt_nm == null)
	{
		alert("영업기회명을 입력해 주세요.");
		return false;
	}
	else if(cust_id == "" || cust_id == null)
	{
		alert("고객을 선택해 주세요.");
		return false;
	}
	else if(sales_oppt_stat_cd == "0" || sales_oppt_stat_cd == null)
	{
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}
	else if(sales_lev_cd == "0" || sales_lev_cd == null)
	{
		alert("영업단계를 선택해 주세요.");
		return false;
	}
	else if(expt_fin_d == "" || expt_fin_d == null)
	{
		alert("예상마감일자를 선택해 주세요.");
		return false;
	} 
	else if(psblty_rate == "0" || psblty_rate == null)
	{
		alert("가능성을 선택해 주세요.");
		return false;
	}
/*	else if($("#prod_nm").val() == "" || $("#prod_nm").val() == null)
	{
		alert("상품을 추가해 주세요.");
		return false;
	}*/
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
		url : '/contactopptInsert',
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
			opptListRefresh(cust_id); 

			var cust_id = $('#cust_id', opener.document).val();	// 부모창에서 cust_id 받아오는 부분.
			/*window.opener.opptTabList(cust_id);
			self.close();*/
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}

//영업기회 수정 이게 진짜.
function contactopptMdfySave()
{
 	var ctx = $("#ctx").val();
	var sales_oppt_id = $("#hsales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
/*	var cust_id = $('#cust_id', opener.document).val();*/
	var cust_id = $("#cust_id").val();
 	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	
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
			url : '/contactopptModfy',
			data : {
				sales_oppt_id : sales_oppt_id,
				sales_oppt_nm : sales_oppt_nm,
				sales_lev_cd : sales_lev_cd,
				expt_sales_amt : expt_sales_amt,
				expt_fin_d : expt_fin_d,
				psblty_rate : psblty_rate,
				sales_oppt_stat_cd : sales_oppt_stat_cd,
				cust_id : cust_id,
				memo : memo,
				est_list:est_list
			},
			datatype : 'json',
			success : function(result) {
				alert("정상적으로 수정되었습니다.");

				var cust_id = $('#cust_id', opener.document).val(); // 부모창에서
																	// cust_id
																	// 받아오는 부분.
				/*window.opener.opptTabList(cust_id);*/
				opptListRefresh(cust_id); 
 				/*self.close();*/

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