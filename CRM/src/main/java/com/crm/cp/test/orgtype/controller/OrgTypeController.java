package com.crm.cp.test.orgtype.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
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
import com.crm.cp.test.orgtype.vo.OrgTypeVO;

@Controller("orgtype.OrgTypeController")
@RequestMapping(value="/orgtype")
public class OrgTypeController {
	
	@Autowired
	OrgTypeService orgtypeService;

	@RequestMapping(value="/orgtypeInqr", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView orgTypeListPage(HttpSession session, Locale locale, @RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice, @RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		List<Object> list =  orgtypeService.searchListOrgType();
		
		ModelAndView mov = new ModelAndView("test/orgType/orgtype_list");
		
		mov.addObject("list", list);
		
		return mov;
		
	}
	
	@RequestMapping(value="/orgtypeAddPop", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView orgTypeInsertPopup(HttpSession session, Locale locale)
	{		
		ModelAndView mov = new ModelAndView("test/orgType/orgtype_pop");
		
		return mov;	
	}
	
	@RequestMapping(value="/orgtypeAdd", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView orgTypeInsert(OrgTypeVO orgtypeVo)
	{
		System.out.println("VO : " + orgtypeVo.toString());
		
		orgtypeService.insertOrgType(orgtypeVo);

		ModelAndView mov = new ModelAndView("test/orgType/orgtype_pop");
		
		mov.addObject("result", "success");
		
		return mov;
		
	}
	
	@RequestMapping(value="/orgtypeMdfyPop", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView orgTypeModifyPopup(HttpSession session, Locale locale, HttpServletRequest req, OrgTypeVO orgtypeVo)
	{
		String org_type_id = req.getParameter("org_type_id");
		
		orgtypeVo.setOrg_type_id(org_type_id);		
		System.out.println(orgtypeVo.getOrg_type_id());
		
		List<Object> select = orgtypeService.searchListOrgTypeOne(org_type_id);
		
		System.out.println("리스트 : " + select);
		ModelAndView mov = new ModelAndView("test/orgType/orgtype_mdfy_pop");
		
		mov.addObject("select", select);
		
		return mov;
	}
	
	//orgtypeMdfy
	@RequestMapping(value="/orgtypeMdfy", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView orgTypeModify(OrgTypeVO orgtypeVo, HttpServletRequest req)
	{
		String org_type_id = req.getParameter("org_type_id");
		
		orgtypeVo.setOrg_type_id(org_type_id);		
		System.out.println(orgtypeVo.getOrg_type_name());
		orgtypeService.modifyOrgType(orgtypeVo);
		
		ModelAndView mov = new ModelAndView("test/orgType/orgtype_mdfy_pop");
		
		mov.addObject("result", "success");
		
		return mov;
		
	}
	
	@RequestMapping(value="/orgtypedel", method={RequestMethod.GET, RequestMethod.POST})
	public String orgTypedel(OrgTypeVO orgtypeVo, HttpServletRequest req, String del_code)
	{
		String[] delcode = del_code.split(",");
		
		for(int i = 0; i < delcode.length; i++)
		{
			String dc = delcode[i];
			System.out.println("dc? "+ dc);
			
			orgtypeService.deleteOrgType(dc);
		}
		
		return "redirect:/orgtype/orgtypeInqr";
		
	}
	
}
		
