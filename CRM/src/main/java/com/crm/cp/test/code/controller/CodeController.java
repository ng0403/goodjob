package com.crm.cp.test.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.code.service.CodeService;
import com.crm.cp.test.code.vo.CodeVo;

@Controller
@RequestMapping(value="/code")
public class CodeController {
	
	@Autowired
	CodeService codeService;
	
	@RequestMapping(value="/list", method={RequestMethod.GET,RequestMethod.POST})
	public ModelAndView codeListPage(){
		
		List<CodeVo> list = codeService.codeListPage();
		
		ModelAndView mav = new ModelAndView("test/code/code_list");

		mav.addObject("codeList", list);
		
		return mav;
	}
	
	@RequestMapping(value="/insertPop", method={RequestMethod.GET,RequestMethod.POST})
	public ModelAndView insertPop(){
		
		ModelAndView mav = new ModelAndView("test/code/code_insertform_pop");
		
		return mav;
	}
	
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public ModelAndView codeinsert(@ModelAttribute("CodeVo")CodeVo cvo, BindingResult result){
		
		ModelAndView mav = new ModelAndView();
		
		int result1 = codeService.codeinsert(cvo);
		
		mav.setViewName("test/code/code_insertform_pop");
		
		return mav;
	}
	
	@RequestMapping(value="/updatePop", method={RequestMethod.GET,RequestMethod.POST})
	public ModelAndView updatePop(@RequestParam(value="code") String code){
		
		List<CodeVo> list = codeService.codeUpdatePage(code);
		
		ModelAndView mav = new ModelAndView("test/code/code_updateform_pop");
		
		mav.addObject("codeInfo", list);
		System.out.println("mav??" + mav);
		return mav;
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public ModelAndView codeupdate(@ModelAttribute("CodeVo")CodeVo cvo, BindingResult result){
		
		ModelAndView mav = new ModelAndView();
		
		int result1 = codeService.codeupdate(cvo);
		
		mav.setViewName("test/code/code_updateform_pop");
		
		return mav;
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public ModelAndView codedelete(@RequestParam(value="del_code") String del_code){
		
		String[] delcode = del_code.split(",");
		
		ModelAndView mav = new ModelAndView();
		
		for(int i = 0; i < delcode.length; i++)
		{
			String dc = delcode[i];
			
			int result1 = codeService.codedelete(del_code);
		}
		
		mav.setViewName("redirect:/code/list");
		
		return mav;
	}

}
