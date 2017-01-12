package com.crm.cp.test.orgtype.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.orgtype.dao.OrgTypeDao;

@Service
public class OrgTypeServiceImpl implements OrgTypeService {

	@Autowired
	OrgTypeDao orgtypeDao;
	
	@Override
	public List<Object> searchListNotice() {
		// TODO Auto-generated method stub
		
		List<Object> obj = orgtypeDao.searchListNotice();
		
		return obj;
	}

}
