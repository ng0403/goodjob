package com.crm.cp.standard.authIuser.controller;

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
import com.crm.cp.standard.authIuser.service.AuthIuserService;
import com.crm.cp.standard.authIuser.vo.AuthIuserVO;
import com.crm.cp.standard.iuser.service.IuserService;
import com.crm.cp.standard.menu.service.MenuService;

@Controller
public class AuthIuserController {
	
	@Resource
	MenuService menuService;
	
	@Resource
	AuthService authService;
	
	@Resource
	IuserService iuserService;
	
	@Resource
	AuthIuserService authIuserService;
	
	@RequestMapping(value="/authUserViewPopup", method=RequestMethod.GET)
	public ModelAndView AuthUserDetail(HttpSession session,
			@RequestParam (value="authUser") String authId, 
			@RequestParam (value="userId") String user_id){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("auth_id", authId);
		map.put("id_nm", user_id);
		
		Object obj = authIuserService.authUserDetail(map);
		return new ModelAndView("/standard/authUser/authUserViewPopup","authUser",obj);
		
	}
	
	@RequestMapping(value="/searchAuthIuser_authId", method=RequestMethod.GET)
	public ModelAndView AuthSearchList(HttpSession session){
		List<Object> auth = authService.authList();
		ModelAndView mov = new ModelAndView("/standard/authUser/authUserSearchList");
		mov.addObject("auth", auth);
		return mov;
		
	}
	
	@RequestMapping(value="/searchAuthIuser_iuserId", method=RequestMethod.GET)
	public ModelAndView UserSearchList(HttpSession session){
		List<Object> userListPop = iuserService.iuserList();
		ModelAndView mov = new ModelAndView("/standard/authUser/userSearchList");
		mov.addObject("user", userListPop);
		return mov;
		
	}
	
	@RequestMapping(value = "/userSearch", method = RequestMethod.POST)
	public ModelAndView UserMain(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="u_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword
			) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		
		List<Object> list = iuserService.iuserList(map);
		for (Object object : list) {
			System.out.println(object.toString());
		}
		ModelAndView mov = new ModelAndView("/standard/authUser/userSearchList", "user", list);
		return mov;
	}
	
	//권한수정
	@RequestMapping(value = "/authIuserEdit", method = RequestMethod.POST)
	public @ResponseBody Map<String,Object> authEdit(@RequestBody AuthIuserVO vo, HttpSession session) {
		Map<String,Object> map = new HashMap<String, Object>();
		vo.setFst_reg_id_nm(session.getAttribute("user").toString());
		int result = authIuserService.searchUserAuth(vo);
		if(result == 0){
			map.put("checkResult", false);
			authIuserService.authUserEdit(vo);
		}else{
			map.put("checkResult", true);
		}
		List<Object> userAuthList= authIuserService.authUserList();
		map.put("userAuthList", userAuthList);
		return map;
	}
	
	@RequestMapping(value = "/authUserWritePopup", method=RequestMethod.GET)
	public ModelAndView AuthMenuDetail(HttpSession session){
		return new ModelAndView("/standard/authUser/authUserWritePopup");
	}
	
	@RequestMapping(value="/authUserInsertData", method=RequestMethod.POST)
	public @ResponseBody List<Object> authUserInsertData(@RequestBody AuthIuserVO authUser, HttpSession session){
		authUser.setFst_reg_id_nm(session.getAttribute("user").toString());
		int result = authIuserService.searchUserAuth(authUser);
		
		if(result == 1){
			return null;
		}else{
			authIuserService.authUserInsert(authUser);
			List<Object> obj= authIuserService.authUserList();
			return obj;
		}
	}
	
	@RequestMapping(value="/authUserDelete", method=RequestMethod.POST)
		public @ResponseBody List<Object> AuthUserDelete(@RequestBody List<Object> list){
		for (Object authUser : list) {
			authIuserService.authUserDelete(authUser);
		}
		List<Object> obj= authIuserService.authUserList();
		return obj;
	}
	
	@RequestMapping(value="/authUser", method=RequestMethod.POST)
	public @ResponseBody List<Object> AuthUserMain(@RequestBody Map<String,Object> jsonData){
		List<Object> obj= authIuserService.authUserListSearch(jsonData);

		return obj;
		
	}
	
}

