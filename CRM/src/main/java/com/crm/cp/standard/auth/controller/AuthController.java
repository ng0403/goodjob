package com.crm.cp.standard.auth.controller;


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
import com.crm.cp.standard.auth.vo.AuthVO;
import com.crm.cp.standard.authIuser.service.AuthIuserService;
import com.crm.cp.standard.authMenu.service.AuthMenuService;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;

@Controller
public class AuthController {
	
	@Resource
	AuthService authSerivce;
	
	@Resource
	MenuService menuService;
	
	@Resource
	AuthIuserService authIuserService;
	
	@Resource
	AuthMenuService authMenuService;
		
	@RequestMapping(value="/auth", method=RequestMethod.GET)
	public ModelAndView AuthMain(HttpSession session,
			@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
			@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc,
			@RequestParam Map<String, String> map){
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
		List<Object> authList = authSerivce.authList();
		List<MenuVO> menuList = menuService.selectAll(session);
		List<Object> authIuserList = authIuserService.authUserList();
		List<Object> authMenuList = authMenuService.authMenuList();
		
		map.put("order_by", order_by);
		map.put("order_sc", order_sc);
		System.out.println("authlist c??? " + authList.toString());
		System.out.println("authIuserList ? " + authIuserList.toString());
		ModelAndView mov = new ModelAndView ("auth", "authList", authList);
		mov.addObject("menuList", menuList);
		mov.addObject("authIuserList", authIuserList);
		mov.addObject("authMenuList", authMenuList);
		mov.addObject("data", map);
		return mov;
		
	}
	
	@RequestMapping(value = "/auth", method= RequestMethod.POST)
	public @ResponseBody List<Object> authSelect(@RequestBody Map<String,Object> JSON){
		List<Object> obj= authSerivce.authList(JSON);

		return obj;
	}
	
	//권한에 대한 상세,수정 팝업창
	@RequestMapping(value="/authViewPopup")
	public ModelAndView authViewPopup(HttpSession session, @RequestParam(value="auth") String authId){
		Object obj = authSerivce.authDetail(authId);
		System.out.println("rnjsdjfkldjfdldsl : "+obj);
		return new ModelAndView("/standard/auth/authViewPopup", "auth", obj);
	}
	
	//권한수정
	@RequestMapping(value = "/authEdit", method = RequestMethod.POST)
	public @ResponseBody List<Object> authEdit(@RequestBody AuthVO vo, HttpSession session) {
		vo.setFin_mdfy_id(session.getAttribute("user").toString());
		authSerivce.authEdit(vo);
		List<Object> authList= authSerivce.authList();
		return authList;
	}
	
	@RequestMapping(value="/authwritePopup")
	public String authWritePopup(){	
		return "/standard/auth/authPopup";
	}
	
	@RequestMapping(value = "/authInsertForm", method = RequestMethod.GET)
	public ModelAndView userInsertPage(HttpSession session) { 
		List<Object> authList = authSerivce.authList();
		ModelAndView mov = new ModelAndView ("authInsert", "authList", authList);
		List<MenuVO> menuList = menuService.selectAll(session);
		mov.addObject("menuList", menuList);
		
		return mov;

	}
	
	@RequestMapping(value = "/authInsert", method = RequestMethod.POST)
	public @ResponseBody List<Object> authInsert(@RequestBody AuthVO JSON, HttpSession session) {
		JSON.setFst_reg_id(session.getAttribute("user").toString());
		JSON.setFin_mdfy_id(session.getAttribute("user").toString());
		authSerivce.authInsert(JSON);
		
		List<Object> authList= authSerivce.authList();
		return authList;

	}
	
	@RequestMapping(value="/authDelete", method=RequestMethod.POST)
	 public @ResponseBody List<Object> AuthDelete(@RequestBody List<Object> JSON, HttpSession session){
		for (Object auth_id : JSON) {
			System.out.println(auth_id.toString());
			authSerivce.authDelete(new AuthVO(auth_id.toString(), session.getAttribute("user").toString()));
		}
		List<Object> objList = authSerivce.authList();
		return objList;
	 }
}
