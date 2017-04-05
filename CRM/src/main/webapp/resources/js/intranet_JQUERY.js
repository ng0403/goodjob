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
	 * #schcalendar : 달력 생성하는 곳(큰 틀)
	 * */
	$('#schcalendar').fullCalendar({
		header: {
			left: ' ',
			center: 'prev title next',
			right: 'today, month, basicWeek, basicDay'
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
		events: function(start, end, callback) {
	        $.ajax({
	            url: ctx + "/act",
	            dataType: 'json',
	            data: {
	            	syear:start.getFullYear(),
		        	smonth:start.getMonth()+1,
		        	eyear:end.getFullYear(),
		        	emonth:end.getMonth()+1
	            },
	            success: function(response) {
 	            	getPayDay();
	                var events = [];
	                for(var i = 0 ; i < response.length ; i ++){
	                	var color;
	                	var textColor;
	                	var borderColor;
		                	console.log(response[i].strt_d);
		                	
		                	events.push({
	                        title: response[i].title,
	                        start: new Date(response[i].STARTTIME),
	                        end : new Date(response[i].ENDTIME),
	                        seq : response[i].SEQ,
	                        allDay: (new Date(response[i].STARTTIME).getHours()<8 || new Date(response[i].END).getHours()>19),
	                        color : color,
	                        textColor : textColor,
	                        borderColor:borderColor
	                    });
	                }
	                callback(events);
	            },
	          
	        });
	    },
	    /**
	     * 페이지 이동으로 변경.
	     * */
	    dayClick: function(date) {
	    	alert("date : " + date + " sales_actvy_id : " + sales_actvy_id);
	    	location.href = ctx + '/actDetail';
/*	    	
			scheduleParam = {seq : 0, title : '', contents : '', starttime : date.getTime(), endtime : date.getTime(), writer:''};
			$('#title').val(scheduleParam.title);
			$('#contents').val(scheduleParam.contents);
			spicker.select(date.getFullYear(),date.getMonth()+1,date.getDate());
			epicker.select(date.getFullYear(),date.getMonth()+1,date.getDate());
			$('#etcYn').attr('checked',false);
			writeModal.show();
			editorInit('contents');
*/			
	    }
//	    eventClick: function(calEvent, jsEvent, view) {
//	    	if(calEvent.seq != null){
//	    		
//	    		$.getJSON(getContextPath()+"/scheduleFiles",{seq:calEvent.seq},function(response){
//	    			var files;
//	    			files = response;
//	    		
//			    	$.getJSON(getContextPath()+"/getSchedule",{seq:calEvent.seq},function(response){
//			    		var article = response;
//				    	var sdate = new Date(article.STARTTIME);
//						var stime = sdate.getFullYear() + "년 " + (sdate.getMonth()+1) + "월 " + sdate.getDate() + "일";
//						var edate = new Date(article.ENDTIME);
//						var etime = edate.getFullYear() + "년 " + (edate.getMonth()+1) + "월 " + edate.getDate() + "일";
//						var fileHtml = '<div class="notify" style="margin-top:5px;">';
//						for(var i = 0 ; i < files.length ; i ++){
//							fileHtml += '&nbsp;&nbsp;<a href="javascript:scheduleFileDown('+files[i].seq+')">' + files[i].realname +'</a>&nbsp;&nbsp;';
//						}
//						fileHtml += '</div>';
//						$("#modal-contents").html('<div class="label label-red" style="min-width:300px;">' + stime + ' ~ ' + etime + '</div><br><div class="notify contents-view" style="margin-top:5px;">' + article.contents +'</div>'+fileHtml);
//						if(article.isWriter == null){
//							scheduleParam = {seq : article.SEQ,title : article.TITLE, contents : article.CONTENTS, starttime : article.STARTTIME, endtime : article.ENDTIME, files:files};
//							console.log("seq??" + article.SEQ);
//							var updateBtn = $('<a/>', {
//											    href: '#',
//											    name: 'updateBtn',
//											    id: 'updateBtn',
//											    html: '수정',
//											    addClass : 'btn btn-gray btn-small',
//											    onclick: 'javascript:contentsUpdate();'
//											});
//							var deleteBtn = $('<a/>', {
//											    href: '#',
//											    name: 'deleteBtn',
//											    id: 'deleteBtn',
//											    html: '삭제',
//											    addClass : 'btn btn-gray btn-small',
//											    onclick: 'javascript:contentsDelete('+article.SEQ+');'
//											});
//							var closeBtn = $('<a/>', {
//											    href: '#',
//											    name: 'closeBtn',
//											    id: 'closeBtn',
//											    html: 'Close',
//											    addClass : 'btn btn-gray btn-small',
//											    onclick: 'javascript:modal.hide();'
//											});
//							
//							$('#contentsBtn').html( updateBtn[0].outerHTML +  deleteBtn[0].outerHTML +  closeBtn[0].outerHTML);
//						}else{
//							
//							var closeBtn = $('<a/>', {
//							    href: '#',
//							    name: 'closeBtn',
//							    id: 'closeBtn',
//							    html: 'Close',
//							    addClass : 'btn btn-gray btn-small',
//							    onclick: 'javascript:modal.hide();'
//							});
//			
//							$('#contentsBtn').html( closeBtn[0].outerHTML);
//						}
//						$("#modal-title").html(article.title + '<span style="float:right;">'+'GUEST'+'</span>');
//						modal.show();
//			    	}).fail(function(jqxhr, textStatus, error){
//						 var err = textStatus + ", " + error;
//						 console.log( "Request Failed: " + err );
//						 location.href=getContextPath()+'/common/error.do?code='+textStatus;
//					});
//	    		});
//	    	}
//	    },
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
	
