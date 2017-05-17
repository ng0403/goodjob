$(function(){
	var ctx = $('#ctx').val();
	var flg = $('#flg').val();
	if(flg == "add") prodAddFormLoad();
	else if(flg == "detail") prodDetailFormLoad();
	prodMakeBlock();
	prodAddBtn(ctx);
	prodCancelBtn(ctx);
//	prodUpdateBtn(ctx);
	prodSaveBtn(ctx);
	prodChange(ctx);
	prodModifyBtn(ctx);
	prodDeleteBtn();
	//prodIdClick(ctx);
	priceComma();
});
/* 샘플 
function actAddBtn(ctx){
	$("#addsavebtn").click(function() {	
	 	$("#act_tab_tbody input[type='text']").val('').attr("disabled", false);
		$("#sales_actvy_type_nm").attr("disabled", false);
		$('#actdiv_1').prop("checked", false);
		// 버튼 활성화
		$("#actBaseBtnDiv").css("display", "none");
	}); 
}*/
function priceComma(){
	var price = $("#prod_price").val();
	$("#prod_price").val(comma(price));
}

function priceUnComma(){
	var price = $("#prod_price").val();
	$("#prod_price").val(uncomma(price));
}

function prodCancelBtn(ctx){
	$("#prodCancelBtn").click(function() {
		location.href="/prod";
//		prodFormClr();
//		prodFormblock();
	});	
}

////페이지 입력 이동
//function pageInput(event) {
//	var keycode = (event.keyCode ? event.keyCode : event.which);
//		if (keycode == '13') {
//			var prodPageNum = $("#prodPageInput").val();
//			var endPageNum = $("#endPageNum").val();
//			var prod_nm = $("#sprod_nm").val();
//			var code = $("#scode").val();
//			if (parseInt(prodPageNum) > parseInt(endPageNum) || parseInt(prodPageNum) < 1) {
//				alert("페이지 정보를 다시 입력하세요.")
//				$("#prodPageInput").val("1");
//			} else {
//				if(prod_nm == '' && code == '0'){
//					prodPaging(prodPageNum);
//				} else {
//					prodPaging(prodPageNum);
//				}
//				
//			}
//		}
//	event.stopPropagation();
//}

function prodDeleteBtn(){
	var prodDeleteIdList=[];
	$("#prodDeleteBtn").click(function(){
		if($('#prod_list input[type=checkbox]:checked').length==0){
			alert("삭제할 상품을 선택해 주세요.");
			return;
		}else{
			if(confirm("삭제 하시겠습니까?")){
				$('#prod_list input[type=checkbox]:checked').each(function(){
					prodDeleteIdList.push($(this).val());
				});
				
				$.ajax({
					url : '/prodDelete',
					type : 'get',
					datatype : 'json',
					data : { prodDeleteIdList : prodDeleteIdList},
					success : function(result){
						alert(result+'건의 상품이 삭제되었습니다.');
						prodPaging($('#ccPageNum').val());
					},
					error:function(request){
						alert("error : " + request);
					}
				});
			}else{
				return;
			}
		}
	})
}

//상품 전체 선택
function prodAllselect(){
	$("#prodListCheck").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#prod_list input[type=checkbox]").prop("checked",true);			
		}else{
			$("#prod_list input[type=checkbox]").prop("checked",false);
		}
	});
}
//상품 전체 선택 박스 해제
function chkCancel(){
	$("#prodListCheck").prop("checked", false);
}
function prodSearch(prodPageNum) {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var prod_nm = $("#sprod_nm").val();
		var code = $("#scode").val();
		var prodListContent = "";
			
		if(prod_nm == '' && code == ''){
			alert("검색어를 입력하세요.");
			return;
		}else{
			var data = {"prodPageNum" : prodPageNum, "prod_nm" : prod_nm, "code" : code};
			var tbody = $('#prod_list');
			var tbodyContent = "";
						
		$.ajax({
			url: '/prodListSearch',
			data : data,
			type:'POST',
			dataType : "json",
			success: function(result) {
				var fst_reg_dt = null;
				
				
				if(result.prodList.length == 0){
					alert("검색된 데이터가 없습니다.")
					//location.href = "/prod";
				}else{
					tbody.children().remove();

					$('#sprod_nm').val(result.prod_nm);
					$('#scode').val(result.code);
					
					for(var i = 0 ; i < result.prodList.length; i++){
						fst_reg_dt = dateFormat(Number(result.prodList[i].fst_reg_dt));
						
						tbodyContent = "<tr>"
							+"<td><input type='checkbox'></td>"
							+"<td id='list_prod_id'><a class='list_prod_id'>"+result.prodList[i].prod_nm
							+"<input type='hidden' class='list_prod_idh' name='"+result.prodList[i].prod_id+"' value='"+result.prodList[i].prod_id+"'/></a>"
							+"</td>"
							+"<td>"+result.prodList[i].cd_nm+"</td>"
							+"<td style='text-align: right;'>"+comma(result.prodList[i].prod_price)+"</td>"
							+"<td>"+result.prodList[i].cate+"</td>"
							+"<td>"+result.prodList[i].fst_reg_id+"</td>"
							+"<td>"+fst_reg_dt+"</td></tr>";
							/*+"<fmt:formatDate value='"+data.prodList[i].fst_reg_dt"' type='time' pattern='yyyy-MM-dd HH:mm:ss'/></td></tr>";*/
						tbody.append(tbodyContent);
						$('#prodListCheck').prop("checked",false);						
					}
					
					prodMakeBlock();
					
					var pageContent = "";
					// 페이징 다시그리기
					$("#pageSpace").children().remove();
					var ccPageNum = result.prodPageNum;
					var startPageNum = result.page.startPageNum;
					var endPageNum = result.page.endPageNum;
					var firstPageCount = result.page.firstPageCount;
					var totalPageCount = result.page.totalPageCount;
					var prevPageNum = result.page.prevPageNum;
					var nextPageNum = result.page.nextPageNum;
					var prevStepPage = result.page.prevStepPage;
					var nextStepPage = result.page.nextStepPage;
					paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);					
				}		
			},
			error : function() {
				alert("전송중 오류가 발생했습니다.");
			}	
		});
		}	
	});
}

function paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage){
	var endPageNo = $("<input>");
	endPageNo.attr({"type":"hidden","id":"endPageNum","value":endPageNum});
	var ccPageeNo = $("<input>");
	ccPageeNo.attr({"type":"hidden","id":"ccPageNum","value":ccPageNum});
	$("#pageSpace").append(endPageNo).append(ccPageeNo);
	
	var prevPage = $("<a>");
	prevPage.addClass("icon item");
	var prevI = $("<i>");
	prevI.addClass("left chevron icon");
	console.log(prevPageNum);
	console.log(firstPageCount);
	if(ccPageNum != firstPageCount){
		prevPage.attr("href","javascript:custCompList("+prevPageNum+")");
	}
	prevPage.append(prevI);
	$("#pageSpace").append(prevPage);
	for(var i = startPageNum; i <= endPageNum; i++){
		var ccPage = $("<a>");
		ccPage.addClass("item");
		ccPage.attr("href","javascript:custCompList("+i+")");
		ccPage.html(i);
		if(i == ccPageNum){
			var b = $("<b>");
			ccPage.attr("id","pNum");
			b.append(ccPage);
			$("#pageSpace").append(b);
		}else{
			$("#pageSpace").append(ccPage);
		}
	}
	var nextPage = $("<a>");
	nextPage.addClass("icon item");
	var nextI = $("<i>");
	nextI.addClass("right chevron icon");
	if(ccPageNum != totalPageCount){
		nextPage.attr("href","javascript:custCompList("+nextPageNum+")");
	}
	nextPage.append(nextI);
	$("#pageSpace").append(nextPage);
}
function prodPaging(prodPageNum) {	
//	$(document).ready(function() {
//		var ctx = $("#ctx").val();
		var data = {"prodPageNum":prodPageNum};
		var prod_nm = $("#sprod_nm").val();
		var code = $("#scode").val();
		var tbody = $('#prod_list');
		var tbodyContent = "";	
	
		$.ajax({
			url: '/prodListSearch',
			data : data,
			dataType : "json",
			type:'POST',
			success: function(result) {
				var fst_reg_dt = null;
				
				tbody.children().remove();
				
				for (var i = 0; i < result.prodList.length; i++) {
					fst_reg_dt = dateFormat(Number(result.prodList[i].fst_reg_dt));
					
					tbodyContent = "<tr>"
						+"<th><input type='checkbox'></th>"
						+"<td id='list_prod_id'><a class='list_prod_id'>"+result.prodList[i].prod_nm
						+"<input type='hidden' class='list_prod_idh' name='"+result.prodList[i].prod_id+"' value='"+result.prodList[i].prod_id+"'/></a>"
						+"</td>"
						+"<td>"+result.prodList[i].cd_nm+"</td>"
						+"<td style='text-align: right;'>"+comma(result.prodList[i].prod_price)+"</td>"
						+"<td>"+result.prodList[i].cate+"</td>"
						+"<td>"+result.prodList[i].fst_reg_id+"</td>"
						+"<td>"+fst_reg_dt+"</td></tr>";
						tbody.append(tbodyContent);
					$('#prodListCheck').prop("checked",false);						
				}
				
				prodMakeBlock();
				
				//var pageContent = "";
				// 페이징 다시그리기
//				$("#pageSpace").children().remove();
				$("#pageSpace").children().remove();
				var ccPageNum = result.prodPageNum;
				var startPageNum = result.page.startPageNum;
				var endPageNum = result.page.endPageNum;
				var firstPageCount = result.page.firstPageCount;
				var totalPageCount = result.page.totalPageCount;
				var prevPageNum = result.page.prevPageNum;
				var nextPageNum = result.page.nextPageNum;
				var prevStepPage = result.page.prevStepPage;
				var nextStepPage = result.page.nextStepPage;
				paging(ccPageNum, startPageNum, endPageNum, firstPageCount, totalPageCount, prevPageNum, nextPageNum, prevStepPage, nextStepPage);							
				},error: function(data){
					alert("전송중 오류가 발생했습니다.");                                                                                                                                                                                                                                                                                                                                                                              
				}
		});
//	});
}
function prodMakeBlock(){
	var blank = $("#prod_list tr").length;
	if( blank < 10){
		for(var j = 0; j < 10-blank; j++){
			var block ="<tr style='height:43px;'>"
				+"<th></th>"
				+"<td></td><td></td><td></td><td></td>"
				+"<td></td><td></td></tr>";
			$("#prod_list").append(block);
		}
	}
}



function prodIdClick(prod_id) {
	$("#prod_id").val(prod_id);
	$("#prod_detail").attr({
		"action":"prodRead",
		"method":"get"
	})
	$("#prod_detail").submit();
//		$("#prod_list").delegate(".list_prod_id","click", function() {		
		/*$(this).*/
//		$(".list_prod_idh").prop("hidden",false);
//		var prod_id = $(this).find('.list_prod_idh').val();
//		$(".list_prod_idh").prop("hidden",true);		
//		var data = new FormData();
//		data.append("prod_id",prod_id);
//
//		$.ajax({
//			url: ctx+'/prodRead',
//			data:data,
//			dataType : "json",
//			type:'POST',
//			mimeType:"multipart/form-data",
//			processData:false,
//			contentType:false,
//			success: function(data){
//				var prod_id = data.prod_id;
//				$("#prod_id").val(data.prod_id);
//				$("#prod_nm").val(data.prod_nm);
//				$("#prod_div_cd_view").val(data.cd_nm);
//				$("#prod_div_cd").val(data.prod_div_cd);
//				$("#cate_id").val(data.cate_id);
//				$("#cate_nm").val(data.cate_nm);
//				$("#prod_price").val(data.prod_price);
//				$("#prod_dtl_cont").val(data.prod_dtl_cont);
//				$("#prod_url").val(data.prod_url);
//				$("#prod_nm").prop("disabled",true);
//				$("#prod_div_cd").prop("disabled",false);
//				$("#prod_div_cd").css("visibility",'hidden');
//				$("#cate_id").prop("disabled",true);
//				$("#cate_nm").prop("disabled",true);
//				$("#prod_cate").prop("disabled",true);
//				$("#prod_price").prop("disabled",true);
//				$("#prod_dtl_cont").prop("disabled",true);				
//				$("#prod_url").prop("disabled",true);				
//				$("#prod_img").prop("disabled",true);
//				$("#prod_catal").prop("disabled",true);
//				$("#prod_div_cd_view").prop("hidden",false);
//				
//				$('.prod_file').css("display","none");
//				$('.filedown').remove();				
//				
//				$("#image_change").css('display','none');
//				$("#catal_change").css('display','none');
//				
//				if(data.prod_img_nm != null){
//				$('#image').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=img">'+data.prod_img_nm+'<img src="'+ctx+'/resources/image/disk.gif"></a>');
//				}
//				
//				if(data.prod_catal_nm != null){
//				$('#catal').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=catal">'+data.prod_catal_nm +'<img src="'+ctx+'/resources/image/disk.gif"></a>');
//				}
//			} 
//			
//			,error: function(request,status,error) {
//				alert("오류");
//				alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//			} 
//	 	}); 		
//		
//		
//
//		$("#prod_div_cd").css("display",'inline');
//		$("#prod_img").prop("hidden",true);
//		$("#prod_catal").prop("hidden",true);
//	});
}



function prodModifyBtn(ctx){
	$('#prodModifyBtn').click(function() {
		if($("#prod_nm").val( )!= ''){
			$("#prod_nm").prop("disabled",false);
			$("#prod_div_cd").prop("disabled",false);
			$("#prod_div_cd").css("display",'inline');
			$("#prod_div_cd").css('visibility','');
//			$("#cate_id").prop("disabled",false);
//			$("#cate_nm").prop("disabled",false);
			$("#prod_cate").prop("disabled",false);
			$("#prod_price").prop("disabled",false);
			$("#prod_dtl_cont").prop("disabled",false);
			$("#prod_url").prop("disabled",false);
			$("#prod_div_cd_view").prop("hidden",true);
	
			$("#prod_img").prop("disabled",false);
			$("#prod_catal").prop("disabled",false);
			priceUnComma();
			$('#prodModifyBtn').hide();
			$('#prodSaveBtn').show();
//			$('#prodUpdateBtn').remove();
//			$('#prodSaveBtn').remove();
			
//			$('.act_tab_bt_div').append('<input type="button" id="prodUpdateBtn" class="btn-success-tel" value="저장"/>');

			$('#image_change').css('display','inline');
			$('#catal_change').css('display','inline');
			/*$('.prod_file').remove();
			$('#image').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=img">'+data.prod_img_nm+'<img src="'+ctx+'/resources/image/disk.gif"></a>');
			$('#catal').prepend('<a class="filedown" href="'+ctx+'/prodDownload?prod_id='+data.prod_id+'&mode=catal">'+data.prod_catal_nm +'<img src="'+ctx+'/resources/image/disk.gif"></a>');
*/
			
		}else{
			alert('상품을 선택해주세요.');
		}
		
	});
}

function inputProdNm(cateNm,cateId){
//	alert("call");	
	console.log(cateNm +","+cateId);
	$('#cate_nm').val(cateNm);
	$('#cate_id').val(cateId);
}
function prodAddBtn(ctx){
	$("#prodAddBtn").click(function(){
		location.href="/prodAddForm"	
	});
}
function prodAddFormLoad(){
	
	$("#prodModifyBtn").hide();
	$("#prod_nm").prop("disabled",false);
	$("#prod_div_cd").prop("disabled",false);
	$("#prod_div_cd").css("display",'inline');
	$("#prod_div_cd").css('visibility','');
//	$("#cate_id").prop("disabled",false);
//	$("#cate_nm").prop("disabled",false);
	$("#prod_cate").prop("disabled",false);
	$("#prod_price").prop("disabled",false);
	$("#prod_dtl_cont").prop("disabled",false);
	$("#prod_url").prop("disabled",false);
	$("#prod_div_cd_view").prop("hidden",true);

	$('.prod_file').remove();
	$('#image').prepend('<input type="file" name="prod_img" id="prod_img" class="prod_file" disabled>');	
	$('#catal').prepend('<input type="file" name="prod_catal" id="prod_catal" class="prod_file" disabled>');

	
	$("#prod_img").prop("disabled",false);
	$("#prod_catal").prop("disabled",false);
//	$('#prodUpdateBtn').remove();
//	$('#prodSaveBtn').remove();
//	$('.act_tab_bt_div').append('<input type="button" id="prodSaveBtn" class="act_bt" value="저장"/>');
	
	prodFormClr();
}

function prodDetailFormLoad(){
	$('#prodSaveBtn').hide();
	$('.prod_file').css("display","none");
	$('.filedown').remove();				
	
	$("#image_change").css('display','none');
	$("#catal_change").css('display','none');
	
	var prod_id = $("#prod_id").val();
	var prod_img_nm = $("#prod_img_nm").val();
	var prod_catal_nm = $("#prod_catal_nm").val();
	
	if(prod_img_nm != null){
	$('#image').prepend('<a class="filedown" href="/prodDownload?prod_id='+prod_id+'&mode=img">'+prod_img_nm+'<img src="/resources/image/disk.gif"></a>');
	}
	
	if(prod_catal_nm != null){
	$('#catal').prepend('<a class="filedown" href="/prodDownload?prod_id='+prod_id+'&mode=catal">'+prod_catal_nm +'<img src="/resources/image/disk.gif"></a>');
	}
//	'+ctx+'
}

function prodChange(ctx) {
	$("#image_change").click(function() {
		$('#prod_img').remove();
		$('#image').append('<input type="file" name="prod_img" id="prod_img" class="prod_file">');
		$('#image_change').css('disable','none');
		
	});
	$("#catal_change").click(function() {
		$('#prod_catal').remove();
		$('#catal').append('<input type="file" name="prod_catal" id="prod_catal" class="prod_file">');
		$('#catal_change').css('disable','none');
	});	
}
//function prodUpdateBtn(ctx){
//	$(".act_tab_bt_div").delegate('#prodUpdateBtn','click', function() {	
//		var data = new FormData();
//		$("#prod_id").prop("hidden",false);
//		var prod_id = $("#prod_id").val();		
//		$("#prod_id").prop("hidden",true);
//				
//		data.append("prod_id",$("#prod_id").val());
//		data.append("cate_id",$("#cate_id").val());
//		data.append("prod_nm",$("#prod_nm").val());
//		data.append("prod_div_cd",$("#prod_div_cd").val());
//		data.append("prod_price",$("#prod_price").val());
//		data.append("prod_url",$("#prod_url").val());
//		data.append("prod_dtl_cont",$("#prod_dtl_cont").text());
//		data.append("prod_img",$("#prod_img").get(0).files[0]);
//		data.append("prod_catal",$("#prod_catal").get(0).files[0]);	
//		
//		
//		$.ajax({
//			url: ctx+'/prodUpdate',
//			data:data,
//			type:'POST',
//			mimeType:"multipart/form-data",
//			processData:false,
//			contentType:false,
//			success: function(data) {
//				alert("성공 : ");
//			}
//			
//			,error: function(request,status,error) {
//				alert("오류");
//				alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//			} 
//	 	});
//		prodFormblock();
//		prodFormClr();
//		
//		
//	});
//}
function prodSaveBtn(){
	var flg = $("#flg").val();
	
	$(".act_tab_bt_div").on('click','#prodSaveBtn', function() {
		if(flg == "add"){
			$("#prodForm").attr("action", "prodFileUpload");
			$("#prodForm").submit();
		}else if(flg == "detail"){
			$("#prodForm").attr("action", "prodUpdate");
			$("#prodForm").submit();
		}
		
//		var data = new FormData();
//
//		data.append("cate_id",$("#cate_id").val());
//		data.append("prod_nm",$("#prod_nm").val());
//		data.append("prod_div_cd",$("#prod_div_cd").val());
//		data.append("prod_price",$("#prod_price").val());
//		data.append("prod_url",$("#prod_url").val());
//		data.append("prod_dtl_cont",$("#prod_dtl_cont").text());
//		data.append("prod_img",$("#prod_img").get(0).files[0]);
//		data.append("prod_catal",$("#prod_catal").get(0).files[0]);
//		
//		$.ajax({
//			url: '/prodFileUpload',
//			data:data,
//			type:'POST',
//			mimeType:"multipart/form-data",
//			processData:false,
//			contentType:false,
//			success: function(data) {
//				prodPaging(1);				
//			}			
//			,error: function(request,status,error) {
//				alert("오류");
//				alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//			} 
//	 	}); 		
//		prodFormblock();
//		prodFormClr();
	});	
}
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day) + " "+ (hour==0 ? "00" : hour )+":"+(min==0 ? "00" : min);

	return retVal
}

function prodFormblock(){
	$("#prod_nm").prop("disabled",true);
	$("#prod_div_cd").prop("disabled",false);
	$("#prod_div_cd").css("visibility",'hidden');
	$("#cate_id").prop("disabled",true);
	$("#cate_nm").prop("disabled",true);
	$("#prod_cate").prop("disabled",true);
	$("#prod_price").prop("disabled",true);
	$("#prod_dtl_cont").prop("disabled",true);
	$("#prod_url").prop("disabled",true);
	$("#prod_img").prop("disabled",true);
	$("#prod_catal").prop("disabled",true);
	$("#prod_div_cd_view").prop("hidden",false);
	$('.prod_file').remove();
	$('#image').prepend('<input type="file" name="prod_img" id="prod_img" class="prod_file" disabled>');	
	$('#catal').prepend('<input type="file" name="prod_catal" id="prod_catal" class="prod_file" disabled>');
	$("#image_change").css('display','none');
	$("#catal_change").css('display','none');
}


function prodFormClr() {
	$("#prod_nm").val('');
	$("#prod_div_cd_view").val('');
/*	$("#prod_div_cd").val('');*/
	$("#cate_id").val('');
	$("#cate_nm").val('');
	$("#prod_price").val('');
	$("#prod_dtl_cont").val('');
	$("#prod_url").val('');
	$("#prod_img").val('');
	$("#prod_catal").val('');
	$('.filedown').remove();
}
//컴마 입력 함수
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//컴마 해제 함수
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}