package com.crm.cp.sales.contact.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.contact.service.ContactService;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class ContactController {

	@Resource
	MenuService menuService;
	
	@Resource
	ContactService contactService;
	
	//연락처 전체 리스트
	@RequestMapping(value="contact" , method=RequestMethod.GET)
	public ModelAndView contactList(HttpSession session, @RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum){
		
		System.out.println("contact entering");
		System.out.println("contactPageNum" + contactPageNum);
		
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		System.out.println("step1");
		
		Map<String,Object> contactMap = new HashMap<String,Object>();
		contactMap.put("contactPageNum", contactPageNum);
		
		PagerVO page  = contactService.ContactListCount(contactMap);
		System.out.println("page " + page.toString());
		contactMap.put("page", page);
		
		List<ContactVO> contactList = contactService.contactAllList(contactMap);
		System.out.println("contactList" + contactList.toString());
 		
		mov = new ModelAndView("contact");
		mov.addObject("contactList", contactList);
		mov.addObject("contactPageNum", contactPageNum);
		mov.addObject("page",page);
		
		System.out.println("mov?????? " + mov.toString());
 		
		return mov; 
	}
}
