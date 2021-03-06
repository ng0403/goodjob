package com.crm.cp.standard.home.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.service.contrService;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.board.service.BNoticeService;
import com.crm.cp.standard.board.service.BoardService;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.standard.home.service.HomeService;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.schedule.service.ScheduleService;

@Controller
public class HomeController {
	
	@Autowired
	ScheduleService scheduleService;
	
	@Autowired
	BNoticeService noticeService;
	
	@Autowired
	BoardService boardService;
	
	@Resource
	MenuService menuService;
	
	@Autowired
	OpptService opptService;
	
	@Autowired
	contrService contrService;

	@Autowired
	HomeService homeService;
	
	@RequestMapping(value = "/home", method = RequestMethod.POST)
	public String noticeMain(@ModelAttribute IuserVO user
			, HttpSession session
			, HttpServletRequest request) 
	{
		
		String ip = request.getHeader("X-FORWARDED-FOR");
		
		if(ip == null || ip.length() == 0){
			ip = request.getHeader("Proxy-Client-IP");
		}
		if(ip == null || ip.length() == 0){
			ip = request.getHeader("WL-Proxy-Client-IP");//웹로직
			
		}
		if(ip == null || ip.length() == 0){
			ip = request.getRemoteAddr();
			
		}
		System.out.println(session.getId());
		System.out.println("접속자의 ip 주소 : " + ip);
		session.setAttribute("user", user.getId_nm());
		System.out.println("POST /Home : ");
		System.out.println("접속된 사용자 ID : " + user.getId_nm());
		
		return "redirect:/home";
	}
	
	@RequestMapping(value = "/orgtype", method = RequestMethod.POST)
	public String orgTypeMain(@ModelAttribute IuserVO user, HttpSession session) 
	{
		session.setAttribute("user", user.getId_nm());
		
		return "redirect:/notice";
	}
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public ModelAndView homePage(HttpSession session
			, HttpServletRequest request){
		if(session.getAttribute("user")==null){
			return new ModelAndView("redirect:/");
		}
		String ip = request.getHeader("X-FORWARDED-FOR");
		
		if(ip == null || ip.length() == 0){
			ip = request.getHeader("Proxy-Client-IP");
		}
		if(ip == null || ip.length() == 0){
			ip = request.getHeader("WL-Proxy-Client-IP");//웹로직
			
		}
		if(ip == null || ip.length() == 0){
			ip = request.getRemoteAddr();
			
		}
		
		System.out.println("접속자의 ip 주소 : " + ip);
		String userId = session.getAttribute("user").toString();
		//차트에서 사용하는 데이터 리스트
		List<OpptVO> opptList = opptService.opptList();
		List<ActVO> opptActList = homeService.opptActList();
		System.out.println("opptList" + opptList);
		System.out.println("opptActList" + opptActList);
		System.out.println("GET /Home : ");
		List<BoardVO> boardVO = noticeService.noticeList(); 
		List<BoardVO> fboardVO = boardService.fileboardList();
		
		ModelAndView mov = new ModelAndView("home");
		List<MenuVO> menuList = menuService.selectAll(session);
		mov.addObject("menuList", menuList);
		mov.addObject("opptList", opptList);
		mov.addObject("opptActList", opptActList);
		mov.addObject("boardVO", boardVO);
		mov.addObject("fBoardList", fboardVO);
		
		return mov;
		
	}
	
}
