package com.crm.cp.test.orgtype.controller;

import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.test.orgtype.service.OrgTypeService;

@Controller("orgtype.OrgTypeController")
@RequestMapping(value="/orgtype")
public class OrgTypeController {
	
	@Autowired
	OrgTypeService orgtypeService;

	@RequestMapping(value="/orgtypeList", method=RequestMethod.GET)
	public ModelAndView noticeListPage(HttpSession session, Locale locale, @RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice, @RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("orgType 진입");
		
		orgtypeService.searchListNotice();
		
		ModelAndView mov = new ModelAndView("test/orgType/organizationTypeList");
		
		return mov;
		
	}
}
