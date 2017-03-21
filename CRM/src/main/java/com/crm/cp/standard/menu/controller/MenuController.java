package com.crm.cp.standard.menu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.auth.service.AuthService;
import com.crm.cp.standard.authMenu.service.AuthMenuService;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;

@Controller
public class MenuController {
	
	@Resource
	MenuService menuService;
	
	@Resource
	AuthMenuService authMenuService;
	
	@Resource
	AuthService authService;
		
	//메뉴
	@RequestMapping(value="/menu", method=RequestMethod.GET)
	public ModelAndView menuMain(HttpSession session){
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		List<MenuVO> menuTree = menuService.selectMenuTree();
		ModelAndView mov = new ModelAndView ("menu", "menuTree", menuTree);
		List<MenuVO> menuList = menuService.selectAll(session);
		mov.addObject("menuList", menuList);
		return mov;
	}
	
	//메뉴
	@RequestMapping(value="/navi", method={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody Map<String, Object> menuNavi(ModelMap model, HttpSession session){
			
		List<MenuVO> menuList = menuService.selectAll(session);
		model.addAttribute("menuList", menuList);
		return model;
	}
	
	//권한 찾는 팝업창
	@RequestMapping(value="/menu_authId", method=RequestMethod.GET)
	public ModelAndView menu_authId(){
		List<Object> authList = authService.authList();
		ModelAndView mov = new ModelAndView ("/standard/menu/menuAuthIDPopup", "authList", authList);
		return mov;
	}
	
	//상위메뉴 찾는 팝업창
	@RequestMapping(value="/menu_pMenuName", method=RequestMethod.GET)
	public ModelAndView menu_pMenuName(){
		List<Object> menuList = menuService.selectPmenu();
		ModelAndView mov = new ModelAndView ("/standard/menu/menuPMenuNamePopup", "menuList", menuList);
		return mov;
	}
	
	//권한검색
	@RequestMapping(value = "/menuAuthSearch", method = RequestMethod.POST)
	public ModelAndView menuAuthSearch(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="a_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> authList = authService.authList(map);
		
		ModelAndView mov = new ModelAndView ("/standard/menu/menuAuthIDPopup", "authList", authList);
		
		return mov;
	}
	
	//상위메뉴 팝업 검색창
	@RequestMapping(value = "/menuPmenuSearch", method = RequestMethod.POST)
	public ModelAndView menuPmenuSearch(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="a_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> menuList = menuService.selectAll(map);
		
		ModelAndView mov = new ModelAndView ("/standard/menu/menuPMenuNamePopup", "menuList", menuList);
		
		return mov;
	}
	
	//메뉴저장
	@RequestMapping(value="/menuInsert", method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> menuInsert(HttpSession session, @RequestBody MenuVO vo){
		Map<String,Object> map = menuService.insertMenu(session,vo);
		vo.setMenu_id(map.get("menu_id").toString());
		int insertMenuAuthOk = menuService.insertMenuAuth(session,vo);
		map.put("insertMenuAuthOk", insertMenuAuthOk);
		
		return map;
	}
	
	//메뉴 수정
	@RequestMapping(value="/menuUpdate", method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> menuUpdate(HttpSession session, @RequestBody MenuVO data){
		int updateMenuOk = menuService.updateMenu(session, data);
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("updateMenuOk", updateMenuOk);
		
		return map;
	}
	
	//메뉴명 중복검사
	@RequestMapping(value = "/menuNameValidate", method = RequestMethod.POST)
	public @ResponseBody Object menuNameValidate(HttpSession session, @RequestBody Map<String, Object> data){
		Object obj = menuService.menuNameCount(data);
		return obj;
	}
	
	//메뉴 상세정보
	@RequestMapping(value = "/menuDetail", method = RequestMethod.POST)
	public @ResponseBody Object menuDetail(HttpSession session, @RequestBody Object menu_id){
		Object obj = menuService.selectDetail(menu_id);
		return obj;
	}
	
	//메뉴 삭제(act_yn N으로 전환)
	@RequestMapping(value="/menuDelete", method=RequestMethod.POST)
	public @ResponseBody Object menuDelete(@RequestBody List<Object> data){
		int result = menuService.deleteMenu(data);	
		return result;
	}
	
	//메뉴별 권한
	@RequestMapping(value="/authMenuTabList", method=RequestMethod.POST)
	public @ResponseBody List<Object> authMenuTabList(){
		List<Object> list = authMenuService.authMenuList();
		return list;
	}
	
	//메뉴별 권한 검색
	@RequestMapping(value = "/authMenuSearch", method = RequestMethod.POST)
	public @ResponseBody List<Object> menuSearch(@RequestBody Map<String,Object> obj){
		List<Object> list = authMenuService.authMenuList(obj);
		return list;
	}
}
