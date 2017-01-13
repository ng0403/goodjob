package com.crm.cp.test.user.Controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.user.Service.UserService;
import com.crm.cp.test.user.vo.userVO;

@Controller
@RequestMapping(value="/usertest")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/userlist", method=RequestMethod.GET)
	public ModelAndView userListPage(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("user Controller");
		
		List<Object> list = userService.searchListUser();
//		if(session.getAttribute("user") == null){
//			 //ModelAndView mov = new ModelAndView("redirect:/");
//			employeeService.searchListEmployee();   
//			//return mov;
//		}
		//userService.searchListUser();
		System.out.println(list);
		ModelAndView mov = new ModelAndView("/test/user/user", "list", list);
		
		return mov;
		
	}

	@RequestMapping(value="/userTab", method=RequestMethod.GET)
	public ModelAndView userTabListPage(HttpSession session, Locale locale)
	{
		System.out.println("userTab Controller");
		ModelAndView mov = new ModelAndView("/test/user/userTab");
		
		return mov;
	}
	
	@RequestMapping(value="/userInsert", method=RequestMethod.POST)
	public ModelAndView userInsert(userVO vo, HttpSession session) {
		System.out.println("userInsert Controller" + vo.toString());
		userService.insertUser(vo);
		System.out.println("insert success");
		ModelAndView mov = new ModelAndView("/test/user/userTab");
		int result = 1;
		mov.addObject("result", result);
		System.out.println(mov);
		return mov;
	}
}
