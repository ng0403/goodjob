package com.crm.cp.test.star.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.star.dao.StarDao;

@Service
public class StarServiceImpl implements StarService {
	
	@Autowired
	StarDao starDao;

	@Override
	public List<Object> searchStarList() {
		
		List<Object> obj = starDao.searchStarList();
		
		return obj;
	}



}
