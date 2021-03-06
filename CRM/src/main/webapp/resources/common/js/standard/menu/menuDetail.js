$(function(){
	var ctx = $('#ctx').val();
	clickEvent(ctx);
	menuDetailFormEvent(ctx);
	menuDetailButtonEvent(ctx);
});

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
/* 정렬 버튼 클릭 시 처리 함수 */
function setOrder(order_by){
	$("#order_by").val(order_by);
	if($("#order_sc").val()=='DESC'){
		$("#order_sc").val('ASC');
	}else{
		$("#order_sc").val('DESC');
	}
	authMenuSearch();
}
function authMenuSearch(){
	var obj = {
			keyfield : $('#authMenuKeyfield').val(),
			keyword : $('#authMenuKeyword').val(),
			order_by : $("#order_by").val(),
			order_sc : $("#order_sc").val()
	}
	
	var data = JSON.stringify(obj);
	jQuery.ajaxSettings.traditional = true;	
	$.ajax({
		url: '/authMenuSearch',
		data: data,
		type: 'POST',
	    contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
	    dataType:'json',
	    success: function(result){
	    	var fst_reg_dt = null;
	    	$('#authMenuBody tr').remove();
	    	for(var i=0; i<$(result).length; i++){
	    		fst_reg_dt = dateFormat(Number(result[i].fst_reg_dt));
	    		
	       		var data = '<tr>'+
	       		'<td style="width: 15%;">'+result[i].menu_id+'</td>'+
				'<td style="width: 15%;">'+result[i].menu_nm+'</td>'+
				'<td style="width: 15%;">'+result[i].auth_id+'</td>'+
				'<td style="width: 15%;">'+result[i].auth_nm+'</td>'+
				'<td style="width: 7%;">'+result[i].creat_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].retrv_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].mdfy_yn+'</td>'+
				'<td style="width: 7%;">'+result[i].del_yn+'</td>'+
				'<td style="width: 12%;">'+result[i].deflt_yn+'</td>'+
//				'<td style="width: 12%;">'+result[i].fst_reg_id+'</td>'+
//				'<td style="width: 14%;">'+fst_reg_dt+'</td>
				'</tr>';
	       		$('#authMenuBody').append(data);	        		
	       	}
	    },
	    error: function(){
	    	alert("error");
	    }
	});
}
function clickEvent(ctx){
	//메뉴별권한 탭 클릭시 이벤트발생 
	$('#authMenuTab').click(function(){
		$.ajax({
			url: ctx+'/authMenuTabList',
			type: 'POST',
	        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
	        dataType:'json',
	        success: function(result){
	        	var fst_reg_dt = null;
	        	for(var i=0; i<$(result).length; i++){
	        	
	        		//날짜함수변환 
					fst_reg_dt = dateFormat(Number(result[i].fst_reg_dt));
					
	        		var data = '<tr>'+
	        		'<td style="width: 15%;">'+result[i].menu_id+'</td>'+
					'<td style="width: 15%;">'+result[i].menu_nm+'</td>'+
					'<td style="width: 15%;">'+result[i].auth_id+'</td>'+
					'<td style="width: 15%;">'+result[i].auth_nm+'</td>'+
					'<td style="width: 7%;">'+result[i].creat_yn+'</td>'+
					'<td style="width: 7%;">'+result[i].retrv_yn+'</td>'+
					'<td style="width: 7%;">'+result[i].mdfy_yn+'</td>'+
					'<td style="width: 7%;">'+result[i].del_yn+'</td>'+
					'<td style="width: 12%;">'+result[i].deflt_yn+'</td>'+
//					'<td style="width: 12%;">'+result[i].fst_reg_id+'</td>'+
//					'<td style="width: 14%;">'+fst_reg_dt+'</td>
					'</tr>';
	        		$('#authMenuBody').append(data);	        		
	        	}
	        },
	        error: function(){
	            alert("error");
	        }
		});
	});
	
	//메뉴별권한에서 검색버튼 누를시 이벤트발생
	$('#authMenuSearch').click(function(){
		authMenuSearch();
	});
}


//menuDetail페이지의 form태그들의 이벤트
function menuDetailFormEvent(ctx){
	//메뉴명 텍스트의 포커스/포커스아웃 될 경우
	$('#menu_name').blur(function(){
		var hasMenuName = validateMenuName(ctx, $(this).val());
		
		if($('#menu_mode').val() == 'insert'){
			if(hasMenuName == 'true'){
				alert("중복되는 메뉴명입니다.\n다시 입력해주세요.");
				$(this).focus();
			}
		}
	});
	
	//메뉴상세창의 메뉴레벨이 바뀔 경우
	$('#menu_level').change(function(){
		if($('#menu_level').children('option:selected').val() == '0001'){
			$('#p_menu_id').val($('#menu_id').val());
			$('#p_menu_name').val("");
			$('#p_menu_name').attr('disabled',true);
			$('#search_pMenuName_btn').hide();
		}else{
			$('#p_menu_id').val("");
			$('#p_menu_name').val("");
			$('#p_menu_name').attr('disabled',false);
			$('#search_pMenuName_btn').show();
		}
	});
}

function menuDetailButtonEvent(ctx){
	$('#edit_menu').click(function(){
		menuForm_disable(false);
		$('#menu_mode').val('update');
		$('#edit_menu').hide();
		$('#submit_menu').show();
	});
	
	//저장버튼 누를시 DB저장 및 텍스트 클리어
	$('#submit_menu').click(function(){
		var flag=true;
		
		if($('#menu_mode').val() == 'insert'){
			var node = $('#menuInsertForm').find('input[type="text"]');
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if(!$(this).is(':disabled') && $(this).val() == ''){
					flag = false;
				}
			});
			
			if(flag == true){
				var data = JSON.stringify(serializeObject($('#menuInsertForm').serializeArray()));
				jQuery.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/menuInsert',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	var list = menu_checkNodeList('subCheck');
			        	if($(list).length == 0){
			        		$(menu_checkedNode('masterCheck')).val(result.menu_id);
			        	}else{
			        		$(menu_checkedNode('subCheck')).val(result.menu_id);
			        	}
			        	
			        	if(result.insertMenuOk != 1 && insertMenuAuthOk != 1){
			        		alert("올바르게 저장되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 저장되었습니다.");
			        	}
			        	
			        	//저장후 입력한 노드에 대한 메뉴이름 목록에 재지정
						var menu_level = $('#menu_level').children('option:selected').val();
						if(menu_level == '0001'){
							$(menu_checkedNode('masterCheck')).next().text($('#menu_name').val());
						}else{
							$(menu_checkedNode('subCheck')).next().text($('#menu_name').val());
						}
						
						//메뉴 목록 체크 및 disable 해제, 입력창 클리어
						$('#menuTree').find('input[type="checkbox"]').prop('checked',false);
						$('#menuTree').find('input[type="checkbox"]').prop('disabled',false);
						$('#menuTree').find('input[tyoe="radio"]').children().prop('selected',false);
						$('#menu_mode').val('waiting');
						$('#menuInsertForm').each(function() {
							this.reset();
							naviOutput();
				        });
			        },
			        error: function(request,status,error){
			            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			        }
				});
			}else{
				alert("빈 공간을 입력해주세요!!");
			}
		}else if($('#menu_mode').val() == 'update'){
			var node = $('#menuInsertForm').find('input[type="text"]:not(#auth_id)');
			
			//텍스트 입력 공백 확인
			$(node).each(function(){
				if(!$(this).attr('id') == 'p_menu_name' && $('#menu_level').val() == '0001'){
					if($(this).val() == ''){
						flag = false;
					}
				}
			});
			
			if(flag == true){
				var data = JSON.stringify(serializeObject($('#menuInsertForm').serializeArray()));
				jQuery.ajaxSettings.traditional = true;
				$.ajax({
					url: ctx+'/menuUpdate',
					type: 'POST',
			        data: data,
			        contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			        dataType:'json',
			        success: function(result){
			        	if(result.updateMenuOk != 1 ){
			        		alert("올바르게 수정되지 않았습니다.");
			        	}else{
			        		alert("입력정보가 수정되었습니다.");
							naviOutput();
			        	}
			        },
			        error: function(){
			            alert("error");
			        }
				});
				
				//저장후 입력한 노드에 대한 메뉴이름 목록에 재지정
				var menu_level = $('#menu_level').children('option:selected').val();
				if(menu_level == '0001'){	//메뉴레벨1로 선택하여 수정했을 경우
					var menuID = $('#menuInsertForm').find('#menu_id').val();
					var node = selectNode("menuTree", "masterCheck", menuID);
					
					if($(node).length == 1 ){	//상위메뉴에 있는 정보 그대로 수정할 경우
						if($('.menu_active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
							$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
						}else{
							$(node).next().css('text-decoration','line-through');
						}
						$(node).next().text($("#menu_name").val());
					}else{	//하위메뉴를 상위메뉴로 수정할 경우
						//하위노드를 상위노드로 옮기기
						var node1 = $(selectNode("menuTree", "subCheck", menuID)).parent();
						var masterImgNode = $(selectNode("menuTree", "subCheck", menuID)).parent().parent().parent().children('img');
						if($('.menu_active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
							$(node1).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
						}else{
							$(node1).next().css('text-decoration','line-through');
						}
						var tmp = $(node1).detach();
						$(tmp).prepend('<img class="no_menuFlag" src="'+ctx+'/resources/image/no_treebtn.png"/>');
						$(tmp).children('input').prop('class','masterCheck');
						$(tmp).children('a').prop('class','master_menu');
//						console.log($(tmp).html());
						$(tmp).html($(tmp).html().replace(/&nbsp;/g, ''));
//						console.log($(tmp).html().replace(/&nbsp;/g, ''));
						
						$('#menuTree').last().append(tmp);
						
						//기존에 있던 상위노드 이미지 전환
						var childCount = $(masterImgNode).children('li').length;
						if(childCount == 0){
							$(masterImgNode).prop('src',ctx+'/resources/image/no_treebtn.png');
						}
					}
				}else{	//메뉴레벨2로 선택하여 수정했을 경우
					var menuID = $('#menuInsertForm').find('#menu_id').val();
					p_menuID = $('#p_menu_id').val();
					var node = selectNode("menuTree", "subCheck", menuID);
					if($(node).length == 1 ){	//하위메뉴에 있는 정보 그대로 수정할 때
						var currentMasterNode = $(selectNode("menuTree", "subCheck", menuID)).parent().parent().parent();
						if($(currentMasterNode).find('.masterCheck').val() == p_menuID){	//현재보이는 상위메뉴와 입력한 정보의 상위메뉴가 같으면
							if($('.menu_active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
								$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
							}else{
								$(node).next().css('text-decoration','line-through');
							}
							$(node).next().text($("#menu_name").val());
						}else{	//다른상위메뉴 아래로 옮길 경우
							if($('.menu_active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
								$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
							}else{
								$(node).next().css('text-decoration','line-through');
							}
							$(node).next().text($("#menu_name").val());
							var tmp = $(node).parent().detach();
							var masterNode = $(selectNode("menuTree", "masterCheck", p_menuID)).parent();
							if($(masterNode).find('ul').length == 0){	//이동할 상위메뉴에 하위메뉴 리스트가 없는 경우
								$(masterNode).append('<ul class="menutree_sub"></ul>');
								$(masterNode).find('ul').append(tmp);
							}else{	//이동할 상위메뉴에 하위메뉴 리스트가 있는 경우
								$(masterNode).find('ul').append(tmp);
							}
						}
					}else{	//상위메뉴를 하위메뉴로 수정할 때
						var node1 = $(selectNode("menuTree", "masterCheck", menuID)).parent();	//이동할 노드
						var nodelist = $(node1).find('li');	//이동노드의 자식리스트
						var masterNode = $(selectNode("menuTree", "masterCheck", p_menuID)).parent();	//이동할 상위메뉴위치
						
						if($(nodelist).length == 0){	//이동노드의 자식이 없는 경우
							if($('.menu_active_flg_Y').is(':checked')){	//활성화여부가 Y일 경우
								$(node).next().css('text-decoration','none');	//글씨에 가운데 직선 삽입
							}else{
								$(node).next().css('text-decoration','line-through');
							}
							//상위노드를 하위노드로 옮기기
							var tmp = $(node1).detach();
							if($(masterNode).find('ul').length == 0){	//이동할 상위메뉴에 하위메뉴 리스트가 없는 경우
								$(masterNode).append('<ul class="menutree_sub"></ul>');
								$(masterNode).find('ul').append(tmp);
							}else{	//이동할 상위메뉴에 하위메뉴 리스트가 있는 경우
								$(masterNode).find('ul').append(tmp);
							}
							$(tmp).find('img').remove();
							$.trim($(tmp));
							$(tmp).prepend('&nbsp;&nbsp;&nbsp;&nbsp;');
							$(tmp).children('input').prop('class','subCheck');
							$(tmp).children('a').prop('class','sub_menu');
						}else{	//자식노드가 있을 경우
							alert('하위메뉴가 있는 상위메뉴는 하위메뉴가 될 수 없습니다.');
						}
					}
				}
				
				//메뉴 목록 체크 및 disable 해제, 입력창 클리어
				$('#menuTree').find('input[type="checkbox"]').prop('checked',false);
				$('#menuTree').find('input[type="checkbox"]').prop('disabled',false);
				$('#menuTree').find('input[tyoe="radio"]').children().prop('selected',false);
				$('#submit_menu').hide();
				$('#menu_mode').val('waiting');
				$('#menuInsertForm').each(function() {
					this.reset();
		        });
			}else{
				alert("빈 공간을 입력해주세요!!");
			}
		}
	});
	
	//취소버튼 누를시 생성된 노드 삭제 및 텍스트 클리어
	$('#reset_menu').click(function(){
		if($('#menu_mode').val() == 'insert'){
			if(menu_checkCount('subCheck') == 0 ){
				var node = menu_checkedNode('masterCheck');
				$(node).parent().remove();
			}else{
				var node = menu_checkedNode('subCheck');
				$(node).parent().remove();
			}
			$('#menuTree').find('input[type="checkbox"]').prop('checked',false);
			$('#menuTree').find('input[type="checkbox"]').prop('disabled',false);
		}
		$('#menu_mode').val('waiting');
		$('#menuInsertForm').each(function() {
			this.reset();
        });
		$('#submit_menu').hide();
	});
	
	//권한ID 검색버튼 누를시 팝업창 띄움
	$('#search_authID_btn').click(function(){
		authId_Popup(ctx);
	});
	
	//상위메뉴명 검색버튼 누를시 팝업창 띄움
	$('#search_pMenuName_btn').click(function(){
		pMenuName_Popup(ctx);
	});
}

function serializeObject(a)
{
    var o = {};
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}