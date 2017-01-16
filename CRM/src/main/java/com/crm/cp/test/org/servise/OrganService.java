package com.crm.cp.test.org.servise;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.crm.cp.test.employee.vo.EmployeeVO;
import com.crm.cp.test.org.vo.OrganVO;

public interface OrganService {

	public List<Object> searchOrganList();
	public List<Object> organCheck(String check);
	
	public void insertOrgan(OrganVO organVO);
	public void updateOrgan(OrganVO organVO);
	public void deleteOrgan(String dc);

}
