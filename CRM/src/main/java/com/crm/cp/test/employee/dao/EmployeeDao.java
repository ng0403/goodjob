package com.crm.cp.test.employee.dao;

import java.util.List;

import com.crm.cp.test.employee.vo.EmployeeVO;

public interface EmployeeDao {
	
	public List<Object> searchListEmployee();
	public List<Object> employeeCheck(String check);
	public void insertEmployee(EmployeeVO employeeVO);
	public void updateEmployee(EmployeeVO employeeVO);
	public void deleteEmployee(String dc);

}
