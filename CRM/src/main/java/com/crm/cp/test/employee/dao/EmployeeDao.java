package com.crm.cp.test.employee.dao;

import java.util.List;

import com.crm.cp.test.employee.vo.EmployeeVO;

public interface EmployeeDao {
	
	public List<Object> searchListEmployee();
	public void insertEmployee(EmployeeVO employeeVO);

}
