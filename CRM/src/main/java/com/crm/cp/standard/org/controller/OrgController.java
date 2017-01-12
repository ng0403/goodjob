package com.crm.cp.standard.org.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.org.service.OrganizationService;

@Controller
public class OrgController {
	
	@Resource
	OrganizationService orgService;
	
	@Resource
	MenuService menuService;
	
	@RequestMapping(value="/org", method=RequestMethod.GET)
	public ModelAndView Treelist(HttpSession session){
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
   	    
		// Tree 1-2-3단
		List<Object> TreeList =orgService.selectTreeOne();
		List<Object> TreeListTwo =orgService.selectTreeTwo();
/*		List<Object> TreeListThird =orgService.selectTreeThird();
		List<Object> TreeListFourth =orgService.selectTreeFourth();*/

   	    List<MenuVO> menuList = menuService.selectAll(session);
   	    ModelAndView mav=new ModelAndView("org");
		mav.addObject("menuList", menuList);
		mav.addObject("TreeList", TreeList);
		mav.addObject("TreeListTwo", TreeListTwo);
/*		mav.addObject("TreeListThird", TreeListThird);
		mav.addObject("TreeListFourth", TreeListFourth);*/

		return mav;
	}
	
	//메뉴명 중복확인
	@RequestMapping(value = "/orgNameValidate", method = RequestMethod.POST)
	public @ResponseBody Object orgNameValidate(HttpSession session, @RequestBody Map<String, Object> data){
		Object obj = orgService.orgNameCount(data);
		return obj;
	}
	
	@RequestMapping(value="/orgInsert", method=RequestMethod.POST)
	public @ResponseBody Object orginsert(HttpSession session, @RequestBody Map<String,String> data)throws Exception {
		Object result = orgService.insertOrg(session, data);
		return result;
	}
	
	@RequestMapping(value="/orgDetail", method=RequestMethod.POST)
	public @ResponseBody Object orgDetail(HttpSession session, @RequestBody Map<String,String> data)throws Exception {
		Object vo = orgService.orgDetailOne(session, data);
		return vo;
	}
	
	@RequestMapping(value="/oOrgList", method=RequestMethod.GET)
	public ModelAndView OOrgList(
			@RequestParam(value="searchKey", defaultValue="iuser_nm") String searchKey,
			@RequestParam(value="searchValue", defaultValue="") String searchValue){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("searchKey", searchKey);
		map.put("searchValue", searchValue);
		List<Object> orgOlist=orgService.selectOAll(map);
		return new ModelAndView("/standard/org/oOrgList","orgOlist",orgOlist);
	}
	
	@RequestMapping(value="/oOrgList", method=RequestMethod.POST)
	public ModelAndView oorgList(
			@RequestParam(value="searchKey", defaultValue="iuser_nm") String searchKey,
			@RequestParam(value="searchValue", defaultValue="") String searchValue){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("searchKey", searchKey);
		map.put("searchValue", searchValue);
		List<Object> orgOlist=orgService.selectOAll(map);	
		return new ModelAndView("/standard/org/oOrgList","orgOlist",orgOlist);
	}
	
	@RequestMapping(value="/orgUpdate", method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> orgUpdate(HttpSession session, @RequestBody Map<String,String> data)throws Exception {
		Map<String,Object> map = new HashMap<String, Object>();
		int result = orgService.orgUpdate(session, data);
		List<Object> TreeList =orgService.selectTreeOne();
		List<Object> TreeListTwo =orgService.selectTreeTwo();
		List<Object> TreeListThird =orgService.selectTreeThird();
		List<Object> TreeListFourth =orgService.selectTreeFourth();
		map.put("result", result);
		map.put("TreeList", TreeList);
		map.put("TreeListTwo", TreeListTwo);
		map.put("TreeListThird", TreeListThird);
		map.put("TreeListFourth", TreeListFourth);
		return map;
	}
	
	@RequestMapping(value="/orgDelete", method=RequestMethod.POST)
	public @ResponseBody Object orgDelete(@RequestBody Map<String,Object> data)throws Exception {
		System.out.println(data.toString());
		int result = orgService.orgDelete(data);
		return result;
	}
	
	@RequestMapping(value="/orgUser", method=RequestMethod.GET)
	public @ResponseBody List<Object> orgUser()throws Exception {
		List<Object> list = orgService.selectOrgUser();
		return list;
	}
	
	@RequestMapping(value="/orgUserAuthSearch", method=RequestMethod.POST)
	public @ResponseBody List<Object> orgUserAuthSearch(@RequestBody Map<String,Object> map){
		List<Object> list = orgService.selectOrgUser(map);
		return list;
	}
	
}
