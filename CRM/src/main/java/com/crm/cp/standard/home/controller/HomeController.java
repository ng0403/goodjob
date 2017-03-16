package com.crm.cp.standard.home.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.cont.service.contrService;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.data_board.service.Data_boardService;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.notice.service.NoticeService;
import com.crm.cp.standard.schedule.service.ScheduleService;

@Controller
public class HomeController {
	
	@Autowired
	ScheduleService scheduleService;
	
	@Autowired
	NoticeService noticeService;
	
	@Autowired
	Data_boardService data_boardService;
	
	@Resource
	MenuService menuService;
	
	@Autowired
	OpptService opptService;
	
	@Autowired
	contrService contrService;
	
	@RequestMapping(value = "/home", method = RequestMethod.POST)
	public String noticeMain(@ModelAttribute IuserVO user, HttpSession session) 
	{
		session.setAttribute("user", user.getId_nm());
		System.out.println("POST /Home : ");
		
		return "redirect:/home";
	}
	
	@RequestMapping(value = "/orgtype", method = RequestMethod.POST)
	public String orgTypeMain(@ModelAttribute IuserVO user, HttpSession session) 
	{
		session.setAttribute("user", user.getId_nm());
		
		return "redirect:/notice";
	}
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public ModelAndView homePage(HttpSession session){
		if(session.getAttribute("user")==null){
			return new ModelAndView("redirect:/");
		}
		String userId = session.getAttribute("user").toString();
		List<OpptVO> opptList = opptService.opptList();
		System.out.println("opptList" + opptList);
		System.out.println("GET /Home : ");
		
		ModelAndView mov = new ModelAndView("home");
		List<MenuVO> menuList = menuService.selectAll(session);
		mov.addObject("menuList", menuList);
		mov.addObject("opptList", opptList);
		
		return mov;
		
	}
	
}
