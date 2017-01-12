$(function() {
	var ctx = $('#ctx').val();
	noticebtnfunc(ctx);
	changecode(ctx)
	clicknoticetitle(ctx);
});

function noticebtnfunc(ctx){
	
	$('#directbtndiv').delegate('.numbtn', 'click', function(event){
		
		event.preventDefault();
		
		var num=$(this).text();
		var searchnotice = $('#searchnotice').val();
		var selectcode = $('#selectcode').val();
		
		if(searchnotice==undefined||searchnotice==''||searchnotice=='undefined'){
			searchnotice=='';
		}
		
		location.href=ctx+"/notice?currentPageNum="+num+"&searchnotice="+searchnotice+"&code="+selectcode;
		
	});
	
	$('#directbtndiv').delegate("#leftnumbtn", "click",function(event){
		event.preventDefault();
		var currentPageNum = $('#hcurrentPageNum').val();
		var pageBlockSize = $('#hpageBlockSize').val();
		var searchDboard = $('#searchDboard').val();
		
		if(currentPageNum-pageBlockSize<1){
			alert("첫 페이지 입니다.");
			return false;
		}
		location.href=ctx+"/notice?currentPageNum="+(Number(currentPageNum)-Number(pageBlockSize));
	});
	
	$('#directbtndiv').delegate("#rightnumbtn", "click",function(event){
		event.preventDefault();
		var currentPageNum = $('#hcurrentPageNum').val();
		var pageBlockSize = $('#hpageBlockSize').val();
		var totalcount = $('#htotalpagecount').val();
		var searchDboard = $('#searchDboard').val();

		if(Number(currentPageNum)+Number(pageBlockSize)>Number(totalcount)){
			alert("마지막 페이지 입니다.");
			return false;
		}
		location.href=ctx+"/notice?currentPageNum="+(Number(currentPageNum)+Number(pageBlockSize));
	});
	
	$('#notice_add').click(function(){
		location.href=ctx+"/noticewrite";
	});
	
	$('#searchnoticebtn').click(function(){
		
		var searchdnoticeinput = $('#searchnoticeinput').val();
		location.href=ctx+"/notice?currentPageNum=1&searchnotice="+searchdnoticeinput;
		
	});
	
}

function changecode(ctx){
	
	$('.noticeselectbox').change(function(){
		
		var code= $(this).val();
		var currentPageNum = $('#hcurrentPageNum').val();
		var searchnotice = $('#searchnotice').val();
		
		location.href=ctx+"/notice?currentPageNum="+ currentPageNum +"&searchnotice="+searchnotice+"&code="+code;
	});
}

function clicknoticetitle(ctx){
	
	$('.a_notice').click(function(event){
		
		event.preventDefault();
		
		var notice_id = $(this).parent().find("input[type='hidden']").val();
		var href = $(this).attr("href");
		
		$.ajax({
			
			url : ctx+'/noticeclickNum',				//보낼 URL
			dataType : 'text',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  notice_id,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'text/html; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				location.href=href;
				
			}, error : function(){
				alert("실패");
			}
			
		});
		
	});
	
}