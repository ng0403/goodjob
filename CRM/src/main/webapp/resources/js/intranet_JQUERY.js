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

//function getFormatDate(date)
//{
//	var year = date.getFullYear();                 //yyyy
//	var month = (1 + date.getMonth());             //M
//	var day = date.getDate();  					   //d
//	
//	month = month >= 10 ? month : '0' + month;     // month 두자리로 저장
//	day = day >= 10 ? day : '0' + day;             //day 두자리로 저장
//
//	return  year + '-' + month + '-' + day;
//
//}
//
function getFormatHour(){
	var d = new Date();
	
	var hour = (d.getHours()); 				   //d
	
	return hour;
}

function getFormatMin(){
	var d = new Date();
	
	var tmp = parseInt((d.getMinutes()/10));
	var min = tmp + '0';
	
	return min;
	
}


$(function(){
	var sales_actvy_id = $("#nowSales_actvy_id").val();
	var ctx = $('#ctx').val();
	var events = [];

//	$('#changePasswd').click(function(){
//		passwdModal.show();
//	});
	
//	$.ajax({
//		url : "/actSchedule",
//		type : "POST",
//		dataType : "json",
//		success: function(data) {
//        	getPayDay();
//        	
//        	for(var i=0; i<data.actSchList.length; i++)
//        	{
//        		events[i] = {id:data.actSchList[i].SALES_ACTVY_ID, title : data.actSchList[i].SALES_ACTVY_NM, start : new Date(data.actSchList[i].STRT_D), end: new Date(data.actSchList[i].END_D)};
//        		
//        		$('#schcalendar').fullCalendar('renderEvent', {id:data.actSchList[i].SALES_ACTVY_ID, title : data.actSchList[i].SALES_ACTVY_NM, start : new Date(data.actSchList[i].STRT_D), end: new Date(data.actSchList[i].END_D)} );
//        	}
//        },
//        error: function(data){
//        	alert("실패 ");
//        }
//    });
//	
	/**
	 * 2017. 04. 10
	 * #schcalendar : 달력 생성하는 곳(큰 틀)
	 *                ajax 부분 ( 스케쥴 받아와서 작성 )
	 *                처음 페이지 들어올 때 바로 호출됨.
	 *                여기서 이벤트 확인하면 될듯함.
	 * */
	$('#schcalendar').fullCalendar({
		header: {
			left: ' ',
			center: 'prev title next',
			right: 'month, agendaWeek, agendaDay'
		},
//		header: {
//			left: ' ',
//			center: 'prev title next',
//			right: 'month, agendaWeek, agendaDay, listMonth'
//		},
//		header: {
//			left: ' ',
//			center: 'prev title next',
//			right: 'month, basicWeek, basicDay'	/* right: 'today, month, basicWeek, basicDay' */
//		},
		titleFormat: {
			month: 'yyyy년 MMMM',
			week: "yyyy년 MMMM d[yyyy]{'일 ~ '[mmm] dd일'}",
			day: "yyyy년 MMM d dddd"
		},
		monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames : ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
		dayNamesShort : ['일','월','화','수','목','금','토'],
		navLinks: true,
		editable: true,		// Drag????
//		eventLimit: true,
		droppable:true,
		draggable:true,		
		scrollTime: '00:00',
		events: function(start, end, callback) {
			$.ajax({
				url : "/actSchedule",
				type : "POST",
				dataType : "json",
				success: function(data) {
		        	getPayDay();
		        	
		        	for(var i=0; i<data.actSchList.length; i++)
		        	{
//		        		events[i] = {id:data.actSchList[i].SALES_ACTVY_ID, title : data.actSchList[i].SALES_ACTVY_NM, start : new Date(data.actSchList[i].STRT_D), end: new Date(data.actSchList[i].END_D)};
		        		$('#schcalendar').fullCalendar('renderEvent', 
		        					{id:data.actSchList[i].SALES_ACTVY_ID, title : data.actSchList[i].SALES_ACTVY_NM, 
		        					 start : new Date(data.actSchList[i].STRT_D), end: new Date(data.actSchList[i].END_D)});
		        		
		        		
		        	}
		        },
		        error: function(data){
		        	alert("실패 ");
		        }
		    });
	    },
	    dayClick: function(date) {		// 페이지 이동으로 변경.
	    	var dtmp = new Date(date);
	    	var year = dtmp.getFullYear();                 //yyyy
	    	var month = (1 + dtmp.getMonth());             //M
	    	var day = dtmp.getDate();  					   //d
	    	
	    	month = month >= 10 ? month : '0' + month;     // month 두자리로 저장
	    	day = day >= 10 ? day : '0' + day;             //day 두자리로 저장
	    
	    	var d = year + '-' + month + '-' + day;
	    	var h = getFormatHour();
	    	var m = getFormatMin();

	    	//window.open(ctx + '/actDetail','newwindow2','width=930, height=645, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	    	location.href = '/actDetail?date=' + d + "&hour=" + h + "&min=" + m;
		
	    },
	    eventClick: function(data) {	// 이벤트 클릭 시 상세보기 화면으로 이동.
	    	if(data.title)
	    	{
	    		//window.open(ctx + '/actDetail?sales_actvy_id='+data.id,'newwindow2','width=930, height=645, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	    		location.href = '/actDetail?sales_actvy_id='+data.id;
	    	}
	    },
		eventMouseover: function( event, jsEvent, view) { 
//			console.log("eventMouseover");
		},
		eventMouseout: function( event, jsEvent, view) { 
//			console.log("eventMouseout");
		},
		eventDrop: function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) {
			console.log(event);
			console.log(event.id);
			console.log(event.start);
			console.log(event.end);
			
			var dtmp1 = new Date(event.start);
			
			var year1 = dtmp1.getFullYear();                 //yyyy
	    	var month1 = (1 + dtmp1.getMonth());             //M
	    	var day1 = dtmp1.getDate();  					 //d

	    	month1 = month1 >= 10 ? month1 : '0' + month1;     // month 두자리로 저장
	    	day1 = day1 >= 10 ? day1 : '0' + day1;             //day 두자리로 저장
	    	
	    	if(event.end != null)
	    	{
				var dtmp2 = new Date(event.end);
	    		var year2 = dtmp2.getFullYear();                 //yyyy
	    		var month2 = (1 + dtmp2.getMonth());             //M
	    		var day2 = dtmp2.getDate();  					 //d
	    		
	    		month2 = month2 >= 10 ? month2 : '0' + month2;     // month 두자리로 저장
	    		day2 = day2 >= 10 ? day2 : '0' + day2;             //day 두자리로 저장
	    		
	    	}
	    	
	    	var start = year1 + '-' + month1 + '-' + day1;		// start
    		var end = year2 + '-' + month2 + '-' + day2;		// end
    		
    		// 달력 object 날짜 변경 시 수정해주는 ajax
    		$.ajax({
    			url : '/actSchEdit',
    			type : 'POST',
    			data : {
    				sales_actvy_id : event.id,
    				strt_d : start,
    				end_d : end
    			},
    			dataType : "json",
    			success : function(data) {
    				alert("수정되었습니다.");
    			},
    			error : function(request,status,error) {
    		          alert("활동등록code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    		    }
    		});
	    	
		},
		eventResize:function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) { 
			console.log("eventResize");
		}
	});
	
//	setInterval(function(){
//		var date = new Date();
//		$('#head-year').text(date.getFullYear());
//		$('#head-month').text(date.getMonth()+1);
//		$('#head-day').text(date.getDate());
//		$('#head-hour').text(date.getHours());
//		$('#head-min').text(date.getMinutes());
//	},1000);

});
	
