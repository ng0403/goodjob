package com.crm.cp.test.org.servise;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.employee.vo.EmployeeVO;
import com.crm.cp.test.org.dao.OrganDao;
import com.crm.cp.test.org.vo.OrganVO;

@Service
public class OrganServiceImpl implements OrganService {
	
	@Autowired
	OrganDao organDao;
	
	@Override
	public List<Object> searchOrganList() {
		
		List<Object> obj = organDao.searchOrganList();
		return obj;
	}

	@Override
	public void insertOrgan(OrganVO organVO) {
		 System.out.println("서비스 임플 등장");
		 organDao.insertOrgan(organVO);
	}
	
}
