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
		
		$(document).on( 'click','.navibtn',function(event) {
			var navibtn=$(this).text();
			var allmenu = $('.sub_menu_bar').find('.hide1');
			allmenu.remove();
			if($(this).attr('href')=='#'){
				//event.preventDefault();
				var submenu = $(this).next("ul").html();
//				console.log(submenu);
				if ($(this).next("ul").find(".subbtn").length >= 1) {
					var menuT_sul = $("<ul>");
					menuT_sul.addClass("hide1");
//					console.log($(this).next("ul").attr("id"));
					menuT_sul.attr("id",$(this).next("ul").attr("id"));
					menuT_sul.attr("style","display: inline;");
					
					menuT_sul.append(submenu);
					$('.sub_menu_bar').append(menuT_sul);
//					if (submenu.is(":visible")) {
//						submenu.slideUp();
//					} else {
//						submenu.slideDown();
//					}
				}
			}
		});
		
	}
	
	function naviOutput(){
		$.post("navi", function(data){
			$("#test").html("");
			var count = 1;
			//console.log(data.menuList.menu.VO.menu_nm);
			$(data.menuList).each(function(){
				//console.log(data.menuList);
				var menu_nm = this.menu_nm;
				var menu_url = this.menu_url;
				var menuVO = this.menuVO;

				menuNaviOutput(menu_nm, menu_url, menuVO, count);
				count++;
			})
			count = 1;
		}).fail(function(){
			alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요.")
			location.href = '/home';
		})
	}
	
	function menuNaviOutput(menu_nm, menu_url, menuVO, count){
		
		var menuT_li = $("<li>");
		menuT_li.addClass("menuNavi");
		
		var menuT_a = $("<a>");
		menuT_a.addClass("navibtn");
	
		if(menuVO == null||menuVO == ''){
			menuT_a.attr("href", menu_url);
			menuT_a.html(menu_nm);
			
			menuT_li.append(menuT_a);
		}else{
			menuT_a.attr("href", '#');
			menuT_a.attr("data-num", count);
			menuT_a.html(menu_nm);
			
			var menuT_sul = $("<ul>");
			menuT_sul.addClass("hide1");
			menuT_sul.attr("id","navisub"+count);
			menuT_sul.attr("data-num", count);
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
			})
			menuT_li.append(menuT_a).append(menuT_sul);
//			$(".sub_menu_bar");
		}
		
		$("#test").append(menuT_li);
	}
		