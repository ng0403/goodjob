package com.crm.cp.test.menu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.menu.dao.Menu1Dao;
import com.crm.cp.test.menu.service.Menu1Service;
import com.crm.cp.test.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
@RequestMapping(value = "/menu")
public class Menu1Controller {
	
	@Autowired Menu1Service menu1Service;
	@Autowired Menu1Dao menu1Dao;
	//@Autowired CommonDao commonDao;
	//@Autowired CommonService commonService;

	/** 
	 * @category  Menu - 화면 호출
	 * @author	   공재원
	 * @since	  2017. 1. 12
	 * @version
	 *
	 */
	@RequestMapping(value = "/view", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView menuList(HttpServletRequest request,@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) throws Exception {
		
		Map<String,Object> map = new HashMap<String,Object>();
		ModelAndView mav = new ModelAndView("/test/menu/menuList");
		MenuVO mv = menu1Service.getMenuId(map);
		String menu_id5 = mv.getMenu_id();
		//System.out.println(menu_id5);
		map.put("pageNum", pageNum);
		
		//페이징 처리
		PagerVO page = menu1Service.getMenuCount(map);
		if(page.getEndRow()==1){
			page.setEndRow(0);
		}
		
		int startRow = page.getStartRow();
		int endRow = page.getEndRow();
		
		map.put("startRow", startRow);
		map.put("endRow", endRow);
		
		//검색 결과 list
		List<MenuVO> list= menu1Service.menuSearchList(map);
		
		mav.addObject("page", page);
		mav.addObject("pageNum", pageNum);
		mav.addObject("menu_id5", menu_id5);
		mav.addObject("list", list);

		return mav;
	}
	
	/** 
	 * @category  Menu - 검색 list
	 * @author	   공재원
	 * @since	  2017. 1. 12
	 * @version
	 *
	 */
     @RequestMapping(value = "/menuSearchList")
	 public @ResponseBody Map<String, Object> menuSearchList(ModelMap model,
				HttpServletRequest request,@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		    String menu_id=request.getParameter("menu_id");                      
		    String menu_name=request.getParameter("menu_name");                      
		    //String userNo=request.getParameter("userNo");
		    
		    if(menu_id == null){
		    	menu_id ="";
		    }
		    if(menu_name == null){
		    	menu_name ="";
		    }
		    
		    Map<String,Object> map = new HashMap<String,Object>();
		    
			map.put("menu_id", menu_id);
			map.put("menu_name", menu_name);
			map.put("pageNum", pageNum);
			
			//페이징 처리
			PagerVO page = menu1Service.getMenuCount(map);
			if(page.getEndRow()==1){
				page.setEndRow(0);
			}
			
			int startRow = page.getStartRow();
			int endRow = page.getEndRow();
			
			map.put("startRow", startRow);
			map.put("endRow", endRow);
			
			//검색 결과 list
			List<MenuVO> list= menu1Service.menuSearchList(map);

			model.addAttribute("list", list);
			model.addAttribute("page", page);
			model.addAttribute("pageNum", pageNum);
			return model;
	 }
     
     @RequestMapping(value = "/openMenuDetail")
     public @ResponseBody Map<String, Object> openMenuDetail(HttpServletRequest request,
    		 Locale locale, ModelMap model) {
  	    Map<String,Object> map = new HashMap<String,Object>();
  	    String menu_id = request.getParameter("menu_id"); 
  	    //promotion 상세정보 호출
  	    MenuVO mv = menu1Service.openMenuDetail(menu_id);
  	    
        String menu_name = mv.getMenu_name();							
        String p_menu_id = mv.getP_menu_id();							
        String menu_level = mv.getMenu_level();					
        String menu_url = mv.getMenu_url();						
        String default_flg = mv.getDefault_flg();				
        String active_flg = mv.getActive_flg();			
        String c_user_id = mv.getC_user_id();			
        String cdate = mv.getCdate();			
        String u_user_id = mv.getU_user_id();			
        String udate = mv.getUdate();
        if(u_user_id == null){
        	u_user_id = "";
        }
        if(udate == null){
        	udate = "";
        }
        if(p_menu_id == null){
        	p_menu_id = "";
        }
        
        model.addAttribute("menu_id", menu_id);
        model.addAttribute("menu_name", menu_name);
        model.addAttribute("p_menu_id", p_menu_id);
        model.addAttribute("menu_level", menu_level);
        model.addAttribute("menu_url", menu_url);
        model.addAttribute("default_flg", default_flg);
        model.addAttribute("active_flg", active_flg);
        model.addAttribute("c_user_id", c_user_id);
        model.addAttribute("cdate", cdate);
        model.addAttribute("u_user_id", u_user_id);
        model.addAttribute("udate", udate);
        
        return model;
     }
     
     /*메뉴 등록*/
     @RequestMapping(value = "/createMenu", method = RequestMethod.POST)
     public String createMenu(Locale locale, Model model, HttpServletRequest request) {
         String menu_id = request.getParameter("menu_id3");                  	
         String menu_name = request.getParameter("menu_name3");				
         String p_menu_id = request.getParameter("p_menu_id3");					
         String menu_level = request.getParameter("menu_level3");					
         String menu_url=request.getParameter("menu_url3");				
         String default_flg = request.getParameter("default_flg3");			
         String active_flg = request.getParameter("active_flg3");			
       
         //Map<String,Object> map = new HashMap<String,Object>();
        
         MenuVO mv = new MenuVO();
               
         mv.setMenu_id(menu_id);
         mv.setMenu_name(menu_name);
         mv.setP_menu_id(p_menu_id);
         mv.setMenu_level(menu_level);
         mv.setMenu_url(menu_url);
         mv.setDefault_flg(default_flg);
         mv.setActive_flg(active_flg);

         menu1Service.createMenu(mv);
        return "redirect:"+"/menu/view";
     }
     
     @RequestMapping(value = "/updateMenu", method = RequestMethod.POST)
     public String updateMenu(Locale locale, Model model, 
           HttpServletRequest request) {
    	String menu_id = request.getParameter("menu_id1");
        String menu_name=request.getParameter("menu_name1");			
        String p_menu_id=request.getParameter("p_menu_id1");			
        String menu_level=request.getParameter("menu_level1");			
        String menu_url=request.getParameter("menu_url1");			
        String default_flg=request.getParameter("default_flg1");			
        String active_flg=request.getParameter("active_flg1");			
        MenuVO mv = menu1Service.openMenuDetail(menu_id);
        
        mv.setMenu_id(menu_id);
        mv.setMenu_name(menu_name);
        mv.setP_menu_id(p_menu_id);
        mv.setMenu_level(menu_level);
        mv.setMenu_url(menu_url);
        mv.setDefault_flg(default_flg);
        mv.setActive_flg(active_flg);
        menu1Service.updateMenu(mv);
        return "redirect:" + "/menu/view";
     }
     
     // menu list 중 삭제
 	 @RequestMapping(value = "/deleteMenu", method = RequestMethod.POST)
 	 public String deleteMenu(Locale locale, Model model, 
 			 HttpServletRequest request) {
 		 String[] checks = request.getParameterValues("chk");
 		 for(int i=0;i<checks.length;i++){
 			 MenuVO mv = menu1Service.openMenuDetail(checks[i]);
 			
 			 menu1Service.deleteMenu(mv);
 		 }
 		 
 		 System.out.println("삭제가 완료되었습니다.");

 		 return "redirect:" + "/menu/view";
 	 }
}
