package com.crm.cp.test.org.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.org.dao.OrganDao;

@Service
public class OrganServiceImpl implements OrganService {
	
	@Autowired
	OrganDao orgDao;
	
	@Override
	public void searchOrganList() {
		
		orgDao.searchOrganList();
		
	}

	
}
