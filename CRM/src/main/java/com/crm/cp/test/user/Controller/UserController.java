package com.crm.cp.test.user.Controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.user.Service.UserService;

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
	public ModelAndView userTabListPage(HttpSession session, Locale locale,
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
		ModelAndView mov = new ModelAndView("/test/user/userTab", "list", list);
		
		return mov;
		
	}
}
