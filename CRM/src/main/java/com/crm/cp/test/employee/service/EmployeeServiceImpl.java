package com.crm.cp.test.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.employee.dao.EmployeeDao;
import com.crm.cp.test.employee.vo.EmployeeVO;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeDao employeeDao;

	@Override
	public List<Object> searchListEmployee() {
		
		List<Object> obj = employeeDao.searchListEmployee();
		return obj;
	}

	@Override
	public void insertEmployee(EmployeeVO employeeVO) {
		 System.out.println("서비스 임플 등장");
		employeeDao.insertEmployee(employeeVO);
		
	}
	

}
