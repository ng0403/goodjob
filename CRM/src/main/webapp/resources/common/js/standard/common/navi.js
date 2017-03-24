	var num=0;

	$(function() {
		init();
		/*asideDate(num);*/
		naviOutput();
	});

	function init() {
		
		//$( "#datepicker" ).datepicker();
		
		$('#leftgo').click(function(event){
			
			event.preventDefault();
			
			var today = new Date();
			
			num--;
			if(num+today.getMonth()<0){
				num=-today.getMonth()+11
			}
			
			
			
			$('#leftgo').append("<span></span>");
			$('#caltable tbody').remove();
			$('#caltable').append("<tbody>");
			asideDate(num);
			$('#caltable').append("</tbody>");

		});
		
		$('#rightgo').click(function(event){
			
			event.preventDefault();
			
			var today = new Date();
			
			num++;
			if(num+today.getMonth()>11){
				num=-today.getMonth()
			}
			
	
			$('#leftgo').append("<span></span>");
			$('#caltable tbody').remove();
			$('#caltable').append("<tbody>");
			asideDate(num);
			$('#caltable').append("</tbody>");

		});
		
		$(".naviT").delegate('.navibtn', 'click',function(event) {
			var navibtn=$(this).text();
			if($(this).attr('href')=='#'){
				event.preventDefault();
			}
			
			var allmenu = $('#test').find('.hide1');
			allmenu.hide();
			
			var submenu = $(this).next("ul");
			if ($(this).next("ul").find(".subbtn").length >= 1) {
				if (submenu.is(":visible")) {
					submenu.slideUp();
				} else {
					submenu.slideDown();
				}
			}
		});
		
	}
	
	function naviOutput(){
		$.post("/navi", function(data){
			$("#test").html("");
			var count = 1;
			//console.log(data.menuList.menu.VO.menu_nm);
			$(data.menuList).each(function(){
				//console.log(data.menuList);
				var menu_nm = this.menu_nm;
				var menu_url = this.menu_url;
				var menuVO = this.menuVO;

				menuNaviOutput(menu_nm, menu_url, menuVO, count);
			})
			count = 1;
		}).fail(function(){
			alert("메뉴 목록을 불러오는데 실패하였습니다. 잠시 후에 다시 시도해 주세요.")
		})
	}
	
	function menuNaviOutput(menu_nm, menu_url, menuVO, count){
		
		var menuT_li = $("<li>");
		menuT_li.addClass("navi");
		
		var menuT_a = $("<a>");
		menuT_a.addClass("navibtn");
	
		if(menuVO == null||menuVO == ''){
			menuT_a.attr("href", menu_url);
			menuT_a.html(menu_nm); 	
			
			menuT_li.append(menuT_a);
		}else{
			menuT_a.attr("href", '#');
			menuT_a.html(menu_nm);
			
			var menuT_sul = $("<ul>");
			menuT_sul.addClass("hide1");
			menuT_sul.attr("id","navisub"+count);
			$(menuVO).each(function(){
				var menuT_sli = $("<li>");
				menuT_sli.addClass("subbtn");
				
				var menuT_sa = $("<a>");
				var sMenu_nm = this.menu_nm;
				var sMenu_url = this.menu_url;

				menuT_sa.html(sMenu_nm);
				menuT_sa.attr("href",sMenu_url);
				menuT_sa.attr("id","navi"+sMenu_url);
				
				menuT_sli.append(menuT_sa);
				menuT_sul.append(menuT_sli);
				count++;
			})
			menuT_li.append(menuT_a).append(menuT_sul);
		}
		
		$("#test").append(menuT_li);
	}
		