package com.crm.cp.test.employee.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.test.employee.service.EmployeeService;
import com.crm.cp.test.employee.vo.EmployeeVO;

@Controller
@RequestMapping(value="/employee")
public class EmployeeController { 
	
	@Autowired
	EmployeeService employeeService; 
	
	@RequestMapping(value="/employeelist", method=RequestMethod.GET)
	public ModelAndView employeeLisgPage(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("employee 진입");
		
//		if(session.getAttribute("user") == null){
//			 //ModelAndView mov = new ModelAndView("redirect:/");
//			employeeService.searchListEmployee();   
//			//return mov;
//		}
		
		List<Object> employeeList = employeeService.searchListEmployee();
 
		ModelAndView mov = new ModelAndView("/test/employee/employee");
		mov.addObject("employeeList", employeeList);
		System.out.println("리스트" + mov);
		return mov;
		
	}
	
	
	@RequestMapping(value="/employee_pop", method=RequestMethod.GET)
	public ModelAndView employeePop(HttpSession session, Locale locale) {
 		ModelAndView mov = new ModelAndView("/test/employee/employee_pop");
		
		return mov; 
	}
	
	
	@RequestMapping(value="/employee_write", method=RequestMethod.POST)
	public ModelAndView employeeInsertPage(EmployeeVO employeeVO){
		System.out.println("write입성" + employeeVO.toString());
	    employeeService.insertEmployee(employeeVO);
	    
	    ModelAndView mov = new ModelAndView("/test/employee/employee_pop");
	   
	    mov.addObject("result", "success");
 	    return mov; 
	}
	
	
	
}
