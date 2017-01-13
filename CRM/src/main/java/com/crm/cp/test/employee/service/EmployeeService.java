package com.crm.cp.test.employee.service;

import java.util.List;

import com.crm.cp.test.employee.vo.EmployeeVO;

public interface EmployeeService {
	
	public List<Object> searchListEmployee();
	public void insertEmployee(EmployeeVO employeeVO);


}
