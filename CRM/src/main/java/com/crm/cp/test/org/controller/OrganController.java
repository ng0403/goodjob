package com.crm.cp.test.org.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.employee.vo.EmployeeVO;
import com.crm.cp.test.org.servise.OrganService;
import com.crm.cp.test.org.vo.OrganVO;
import com.crm.cp.test.orgtype.vo.OrgTypeVO;

@Controller
@RequestMapping(value="/organ")
public class OrganController {
	
	@Autowired
	OrganService organService;
	
	@RequestMapping(value="/organList", method=RequestMethod.GET)
	public ModelAndView noticeListPage(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("organ 진입");
		
//		if(session.getAttribute("user") == null){
//			 //ModelAndView mov = new ModelAndView("redirect:/");
//			employeeService.searchListEmployee();   
//			//return mov;
//		}
		
		//리스트 출력
		List<Object> organList = organService.searchOrganList();
		System.out.println(organList);
		
		ModelAndView mov = new ModelAndView("/test/organ/organ");
		mov.addObject("List", organList);
		
 		return mov;
		
	}

	@RequestMapping(value="/organ_pop", method=RequestMethod.GET)
	public ModelAndView organPop(HttpSession session, Locale locale, OrganVO organVO,  HttpServletRequest req) {
 	  
		ModelAndView mov = new ModelAndView("/test/organ/organ_pop");
  		return mov; 
	}
	
	@RequestMapping(value="/organ_update_pop", method=RequestMethod.GET)
	public ModelAndView organUpdatePop(HttpSession session, Locale locale, OrganVO organVO, HttpServletRequest req) {
		
		String check = req.getParameter("ORG_ID");
		
		System.out.println("check" + check);

		List<Object> organCheck = organService.organCheck(check);
		System.out.println("ccccc"+organCheck);
		ModelAndView mov = new ModelAndView("/test/organ/organ_update_pop");
 		mov.addObject("organCheck",organCheck);
 		System.out.println(mov);
 		return mov; 
	}
	
	@RequestMapping(value="/organ_write", method=RequestMethod.POST)
	public ModelAndView organInsertPage(OrganVO organVO){
		System.out.println("write입성" + organVO.toString());
		organService.insertOrgan(organVO);
	    
	    ModelAndView mov = new ModelAndView("/test/organ/organ_pop");
	    mov.addObject("result", "success");
	    
 	    return mov; 
	}
		
	@RequestMapping(value="/organ_update", method=RequestMethod.POST)
	public ModelAndView organUpdatePage(OrganVO organVO){
		System.out.println("uuuuu" + organVO.toString());
		organService.updateOrgan(organVO);
		ModelAndView mov = new ModelAndView("/test/organ/organ_pop");
		
		mov.addObject("result", "success");
		
		return mov;
	}
	
	@RequestMapping(value="organ_delete", method=RequestMethod.POST)
	public String oeganDeletePage(String del_code) { 
		
	String[] delcode = del_code.split(",");
	
	for(int i = 0; i < delcode.length; i++)
	{
		String dc = delcode[i];
		System.out.println("dc? "+ dc);
		organService.deleteOrgan(dc);
	}
	
	System.out.println("+++");
	return "redirect:/organ/organList";
		 
	}
}
