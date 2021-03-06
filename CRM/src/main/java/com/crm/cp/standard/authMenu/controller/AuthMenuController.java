package com.crm.cp.standard.authMenu.controller;

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

import com.crm.cp.standard.auth.service.AuthService;
import com.crm.cp.standard.authMenu.service.AuthMenuService;
import com.crm.cp.standard.authMenu.vo.AuthMenuVO;
import com.crm.cp.standard.menu.service.MenuService;

@Controller
public class AuthMenuController {
	
	@Resource
	AuthService authService;
	
	@Resource
	MenuService menuService;
	
	@Resource
	AuthMenuService authmenuService;
	
	@RequestMapping(value="/authMenuViewPopup", method=RequestMethod.GET)
	public ModelAndView AuthDetail(HttpSession session, 
			@RequestParam (value="auth_id") String auth_id, 
			@RequestParam (value="menu_id") String menu_id)
	{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("auth_id", auth_id);
		map.put("menu_id", menu_id);
		
		System.out.println("autd_id : " + auth_id);
		System.out.println("menu_id : " + menu_id);
		System.out.println("MAP : " + map);
		
		Object obj = authmenuService.authMenuDetail(map);
		
		return new ModelAndView("/standard/authMenu/authMenuViewPopup", "auth", obj);
		
	}
	
	@RequestMapping(value="/authmenuSearchList", method=RequestMethod.GET)
	public ModelAndView AuthMenuSearchList(HttpSession session){
		List<Object> menu = authmenuService.menuList();
		ModelAndView mov = new ModelAndView("/standard/authMenu/authMenuSearchList");
		mov.addObject("menu", menu);
		return mov;
		
	}
	
	@RequestMapping(value="/authMenuSearchList", method=RequestMethod.POST)
	public ModelAndView AuthMenuSearchList(
			@RequestParam(value="keyfield", defaultValue="m_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", (Object) keyfield);
		map.put("keyword", (Object) keyword);
		List<Object> menu = authmenuService.authMenuSearchList(map);
		ModelAndView mov = new ModelAndView("/standard/authMenu/authMenuSearchList");
		mov.addObject("menu", menu);
		return mov;
	}
	
	@RequestMapping(value="/authmenuEdit", method=RequestMethod.POST)
	public @ResponseBody List<Object> AuthMenuUpdateConfrim(HttpSession session,@RequestBody AuthMenuVO vo){
		vo.setFst_reg_id(session.getAttribute("user").toString());
		authmenuService.authMenuPopUpdate(vo);
		List<Object> obj= authmenuService.authMenuList();

		return obj;
		
	}
	
	@RequestMapping(value="/authMenu", method=RequestMethod.POST)
	public @ResponseBody List<Object> AuthMain(@RequestBody Map<String,Object> JSON){
		List<Object> obj= authmenuService.authMenuList(JSON);
		return obj;
	}
	
	@RequestMapping(value = "/authmenuwritePopup", method=RequestMethod.GET)
	public ModelAndView AuthMenuDetail(HttpSession session){
		return new ModelAndView("/standard/authMenu/authMenuWritePopup");
	}
	
	@RequestMapping(value="/authMenuInsert", method=RequestMethod.POST)
	public @ResponseBody List<Object> authMenuInsertByJSON(@RequestBody AuthMenuVO authMenu, HttpSession session){
		authMenu.setFst_reg_id(session.getAttribute("user").toString());
		System.out.println(authMenu.toString());		
		try {
			authmenuService.authMenuInsert(authMenu);
			List<Object> obj= authmenuService.authMenuList();
			return obj;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("중복 데이터 존재합니다.");
			return null;
		}	
	}
	
	@RequestMapping(value="/authMenuDelete", method=RequestMethod.POST)
	public @ResponseBody List<Object> AuthMenuDelete(@RequestBody List<Object> list){
		for (Object obj : list) {
			authmenuService.authMenuDelete(obj);
		}
		List<Object> obj= authmenuService.authMenuList();
		return obj;
	}
}
