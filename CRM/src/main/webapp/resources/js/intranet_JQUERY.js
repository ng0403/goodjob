/**
 * 제이쿼리 영역
 */

//$(function(){
//	var sales_actvy_id = $("#nowSales_actvy_id").val();
//	startCalendar(ctx);
//	endCalendar(ctx);
//	actAddBtn();
//	actMdfyBtn();
//});

$(function(){
	var ctx = $('#ctx').val();
	var sales_actvy_id = $("#nowSales_actvy_id").val();

	$('#changePasswd').click(function(){
		passwdModal.show();
	});
	
	/**
	 * 2017. 04. 10
	 * #schcalendar : 달력 생성하는 곳(큰 틀)
	 *                ajax 부분 ( 스케쥴 받아와서 작성 )
	 *                처음 페이지 들어올 때 바로 호출됨.
	 *                여기서 이벤트 확인하면 될듯함.
	 * */
	//alert("CTX : " + ctx);
	$('#schcalendar').fullCalendar({
		
		header: {
			left: ' ',
			center: 'prev title next',
			right: 'month, basicWeek, basicDay'	/* right: 'today, month, basicWeek, basicDay' */
		},
		titleFormat: {
			month: 'yyyy년 MMMM',
			week: "yyyy년 MMMM d[yyyy]{'일 ~ '[mmm] dd일'}",
			day: "yyyy년 MMM d dddd"
		},
		monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames : ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
		dayNamesShort : ['일','월','화','수','목','금','토'],
		allDayText : '금일일정',
		minTime : 9,
		maxTime : 19,
		axisFormat : "HH:mm",
		editable: false,
		events: function(callback) {
			// 그려주는 부분.
			
			$.ajax({
				url : "/actSchedule",
				type : "POST",
				dataType : "json",
				success: function(data) {
	            	getPayDay();
	            	var events = [];
	            	
	            	for(var i=0; i<data.actSchList.length; i++)
	            	{
	            		// 일정 그려주는 부분.
	            		$('#schcalendar').fullCalendar('renderEvent', {id:data.actSchList[i].SALES_ACTVY_ID ,title : data.actSchList[i].SALES_ACTVY_NM, start : new Date(data.actSchList[i].STRT_D), end: new Date(data.actSchList[i].END_D), color:'#B7F0B1', textColor:'#000000'} );
	            	}
	                
	                //callback(events);
	            },
	            error: function(data){
	            	alert("실패 ");
	            }
	         
	        });
	    },
	    /**
	     * 페이지 이동으로 변경.
	     * */
	    dayClick: function(date) {
	    	window.open(ctx + '/actDetail','newwindow2','width=930, height=645, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	    	//location.href = ctx + '/actDetail';
		
	    },
	    /**
	     * 이벤트 클릭 시 상세보기 화면으로 이동.
	     * */
	    eventClick: function(data) {
	    	if(data.title)
	    	{
	    		window.open(ctx + '/actDetail?sales_actvy_id='+data.id,'newwindow2','width=930, height=645, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	    		//location.href = ctx + '/actDetail?sales_actvy_id='+data.id;
	    	}
	    }
	});
	
	
	$('#work-refresh').click(function(){
		refrashRow(userArticle, {param:{page : 1, email : $('#selectUser').val()}, url: getContextPath()+'/userArticle'});
	});

	$('#sview-refresh').click(function(){
		$('#schcalendar').fullCalendar('refetchEvents');
	});
	
	$('#contentsUpdate').click(function(){
		alert();
	});
	
	$('#tab_Home,#tab_Schedule,#tab_Etc,#tab_Lib,#tab_View').click(function(){
		var id = $(this).attr('id');
		$('#selectTab').val(id);
		$('.tab').find('li').each(function(){
			var $child = $(this).find('a'); 
			if($child.attr('id') == id){
				$(this).addClass('active');
				$('#'+ $child.attr('title')).show();
				if(id == 'tab_View'){
					$('#schcalendar').fullCalendar('refetchEvents');
				}
			}else{
				$(this).removeClass('active');
				$('#'+ $child.attr('title')).hide();
			}
		});
	});
	setInterval(function(){
		var date = new Date();
		$('#head-year').text(date.getFullYear());
		$('#head-month').text(date.getMonth()+1);
		$('#head-day').text(date.getDate());
		$('#head-hour').text(date.getHours());
		$('#head-min').text(date.getMinutes());
	},1000);
	
	$("#etc-print").click(function() {
	    window.print();
	});
	
	$('#mailFileAddBtn').click(function(){
		 $.ajaxFileUpload 
		    ( 
		        { 
		            url:getContextPath()+'/home/mailFileUpload.do', 
		            secureuri:false, 
		            type:'post',
		            fileElementId:'mailfile', 
		            dataType: 'json', 
		            success: function (data, status) 
		            {
		            	if(data.error == '' || data.error == null || data.error == 'undefined'){
		            		alert('등록이 완료되었습니다.');
		            		
		            		var span = document.createElement('span');
		            		$(span).text(data.realname);
		            		$(span).attr('realname',data.realname);
		            		$(span).attr('subname',data.subname);
		            		
		            		var html = $('#fileName').html();
		            		
		            		$('#fileName').html(html + '<span>&nbsp;' +  span.outerHTML + '<i class="icon-trashcan icon-small" style="cursor:pointer;" onclick="mailFileDelete(\''+trim(data.subname)+'\')"></i></span>');
		            	}else{
		            		alert(data.error);
		            	}
		            }, 
		            error: function (data, status, e) 
		            { 
		                alert(e); 
		            } 
		        } 
		    ); 
		     
		    return false;
	});

	$('#scheduleFileAddBtn').click(function(){
		$.ajaxFileUpload 
		( 
				{ 
					url:getContextPath()+'/home/mailFileUpload.do', 
					secureuri:false, 
					type:'post',
					fileElementId:'schedulefile', 
					dataType: 'json', 
					success: function (data, status) 
					{
						if(data.error == '' || data.error == null || data.error == 'undefined'){
							alert('등록이 완료되었습니다.');
							
							var span = document.createElement('span');
							$(span).text(data.realname);
							$(span).attr('realname',data.realname);
							$(span).attr('subname',data.subname);
							
							var html = $('#schedulefileName').html();
							
							$('#schedulefileName').html(html + '<span>&nbsp;' +  span.outerHTML + '<i class="icon-trashcan icon-small" style="cursor:pointer;" onclick="scheduleFileDelete(\''+trim(data.subname)+'\')"></i></span>');
						}else{
							alert(data.error);
						}
					}, 
					error: function (data, status, e) 
					{ 
						alert(e); 
					} 
				} 
		); 
		
		return false;
	});
});
	
