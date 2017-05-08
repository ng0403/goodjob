package com.crm.cp.standard.board.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.board.service.BNoticeService;
import com.crm.cp.utils.PagerVO;

@Controller
public class BNoticeController {
	
	@Autowired
	BNoticeService noticeService;
	
	//공지사항 전체 리스트
	@RequestMapping(value="/BNoticeInqr", method={RequestMethod.GET, RequestMethod.POST} )
	public ModelAndView Notice_List(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum, @RequestParam("BOARD_MNG_NO") String BOARD_MNG_NO, @RequestParam Map<String, Object> map,  HttpSession session ) {

		System.out.println("notice_list Entering" + map.toString());
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		map.put("pageNum", pageNum);
		map.put("sessionID", sessionID);   
 		PagerVO page= noticeService.getNoticeListCount(map);
		System.out.println("noticeListCOunt? " + page.toString());
		map.put("page", page);
		
		if(page.getEndRow() == 1){
			page.setEndRow(0);
		}
	
 		List<Object> noticelist = noticeService.list(map); 
 		System.out.println("NoticeList ? " + noticelist.toString());
 		System.out.println("map??" + map.toString()); 
		ModelAndView mov = new ModelAndView("Notice_List");
		mov.addObject("boardlist", noticelist);
		mov.addObject("page",  page);
		mov.addObject("pageNum",  pageNum);
		mov.addObject("BOARD_MNG_NO", BOARD_MNG_NO);
 		System.out.println("movvv??? " + mov.toString());
		return mov; 
	}

}
