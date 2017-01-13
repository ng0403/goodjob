package com.crm.cp.test.org.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.org.vo.OrganizationVO;
import com.crm.cp.test.org.vo.OrganVO;

public interface OrganDao {

	public List<Object> searchOrganList();
	public void insertOrgan(OrganVO organVO);


}
