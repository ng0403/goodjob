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

	/* -----------------------------
	 * 업 무 명 : menu 리스트 화면
	    작 성 자 : 공재원 (jwjy0223@naver.com)
	    작 성 일 : 2017/01/12
	    수 정 자 : 공재원 (jwjy0223@naver.com)
	    수 정 일 : 2017/01/16
	    내 용 : menu list 화면을 보여준다.
	   *참고사항 :
	  -------------------------------*/ 
	@RequestMapping(value = "/view", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView menuList(HttpServletRequest request,@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) throws Exception {
		
		Map<String,Object> map = new HashMap<String,Object>();
		ModelAndView mav = new ModelAndView("/test/menu/menuList");
		MenuVO mv = menu1Service.getMenuId(map);
		String menu_id5 = mv.getMenu_id();
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
	
	/* -----------------------------
	 * 업 무 명 : menu 조회 화면
	    작 성 자 : 공재원 (jwjy0223@naver.com)
	    작 성 일 : 2017/01/12
	    수 정 자 : 공재원 (jwjy0223@naver.com)
	    수 정 일 : 2017/01/16
	    내 용 : menu list의 조회한 결과 화면을 보여준다.
	   *참고사항 :
	  -------------------------------*/ 
     @RequestMapping(value = "/menuSearchList")
	 public @ResponseBody Map<String, Object> menuSearchList(ModelMap model,
				HttpServletRequest request,@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		    String menu_id=request.getParameter("menu_id").trim();                      
		    String menu_name=request.getParameter("menu_name").trim();                      
		    
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
     
     /* -----------------------------
 	 * 업 무 명 : menu 상세 화면
 	    작 성 자 : 공재원 (jwjy0223@naver.com)
 	    작 성 일 : 2017/01/12
 	    수 정 자 : 공재원 (jwjy0223@naver.com)
 	    수 정 일 : 2017/01/16
 	    내 용 : 선택한 menu 상세화면을 보여준다.
 	   *참고사항 :
 	   -------------------------------*/ 
     @RequestMapping(value = "/openMenuDetail")
     public @ResponseBody Map<String, Object> openMenuDetail(HttpServletRequest request,
    		 Locale locale, ModelMap model) {
  	    String menu_id = request.getParameter("menu_id").trim(); 
  	    //메뉴 상세정보 호출
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
     
     /* -----------------------------
 	 * 업 무 명 : menu 등록
 	    작 성 자 : 공재원 (jwjy0223@naver.com)
 	    작 성 일 : 2017/01/12
 	    수 정 자 : 공재원 (jwjy0223@naver.com)
 	    수 정 일 : 2017/01/16
 	    내 용 : menu를 등록, 저장한다.
 	   *참고사항 :
 	 -------------------------------*/ 
     @RequestMapping(value = "/createMenu", method = RequestMethod.POST)
     public String createMenu(Locale locale, Model model, HttpServletRequest request) {
         String menu_id = request.getParameter("menu_id3").trim();                  	
         String menu_name = request.getParameter("menu_name3").trim();				
         String p_menu_id = request.getParameter("p_menu_id3").trim();					
         String menu_level = request.getParameter("menu_level3").trim();					
         String menu_url=request.getParameter("menu_url3").trim();				
         String default_flg = request.getParameter("default_flg3").trim();			
         String active_flg = request.getParameter("active_flg3").trim();			
       
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
     
     /* -----------------------------
 	 * 업 무 명 : menu 수정
 	    작 성 자 : 공재원 (jwjy0223@naver.com)
 	    작 성 일 : 2017/01/12
 	    수 정 자 : 공재원 (jwjy0223@naver.com)
 	    수 정 일 : 2017/01/16
 	    내 용 : 선택한 menu를 수정하고 저장한다.
 	   *참고사항 :
 	-------------------------------*/ 
     @RequestMapping(value = "/updateMenu", method = RequestMethod.POST)
     public String updateMenu(Locale locale, Model model, 
           HttpServletRequest request) {
    	String menu_id = request.getParameter("menu_id1").trim();
        String menu_name=request.getParameter("menu_name1").trim();			
        String p_menu_id=request.getParameter("p_menu_id1").trim();			
        String menu_level=request.getParameter("menu_level1").trim();			
        String menu_url=request.getParameter("menu_url1").trim();			
        String default_flg=request.getParameter("default_flg1").trim();			
        String active_flg=request.getParameter("active_flg1").trim();			
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
     
     /* -----------------------------
 	 * 업 무 명 : menu 삭제
 	    작 성 자 : 공재원 (jwjy0223@naver.com)
 	    작 성 일 : 2017/01/12
 	    수 정 자 : 공재원 (jwjy0223@naver.com)
 	    수 정 일 : 2017/01/16
 	    내 용 : 선택한 menu를 삭제한다.
 	   *참고사항 :
 	-------------------------------*/ 
 	 @RequestMapping(value = "/deleteMenu", method = RequestMethod.POST)
 	 public String deleteMenu(Locale locale, Model model, 
 			 HttpServletRequest request) {
 		 String[] checks = request.getParameterValues("chk");
 		 if(checks.length == 0){
 			System.out.println("삭제할 데이터가 없습니다.");
 		 }else{
 		     for(int i=0;i<checks.length;i++){
 			     MenuVO mv = menu1Service.openMenuDetail(checks[i]);
 			
 			     menu1Service.deleteMenu(mv);
 		     }
 		     System.out.println("삭제가 완료되었습니다.");
 		 }
 		 return "redirect:" + "/menu/view";
 	 }
}