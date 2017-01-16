package com.crm.cp.test.star.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.star.service.StarService;

@Controller
@RequestMapping(value="/star")
public class StarController {
	
	@Autowired
	StarService starService;
	
	public ModelAndView starbucks(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("star 진입");
		
		List<Object> starList = starService.searchStarList();
		System.out.println(starList);
		
		ModelAndView mov = new ModelAndView("test/star/star");
		mov.addObject("starList", starList);
		return mov;
		
	}
	
	

}
