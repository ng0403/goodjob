package com.crm.cp.test.orgtype.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.orgtype.dao.OrgTypeDao;
import com.crm.cp.test.orgtype.vo.OrgTypeVO;

@Service
public class OrgTypeServiceImpl implements OrgTypeService {

	@Autowired
	OrgTypeDao orgtypeDao;
	
	@Override
	public List<Object> searchListOrgType() {
		// TODO Auto-generated method stub
		List<Object> obj = orgtypeDao.searchListOrgType();
		
		return obj;
	}
	
	@Override
	public List<Object> searchListOrgTypeOne(String org_type_id) {
		// TODO Auto-generated method stub
		List<Object> obj = orgtypeDao.searchListOrgTypeOne(org_type_id);
		
		return obj;
	}

	@Override
	public void insertOrgType(OrgTypeVO orgtypeVo) {
		// TODO Auto-generated method stub
		orgtypeDao.insertOrgType(orgtypeVo);
	}

	@Override
	public void modifyOrgType(OrgTypeVO orgtypeVo) {
		// TODO Auto-generated method stub
		orgtypeDao.modifyOrgType(orgtypeVo);
	}

	@Override
	public void deleteOrgType(OrgTypeVO orgtypeVo) {
		// TODO Auto-generated method stub
		orgtypeDao.deleteOrgType(orgtypeVo);
	}

	

}
