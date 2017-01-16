package com.crm.cp.test.orgtype.dao;

import java.util.List;

import com.crm.cp.test.orgtype.vo.OrgTypeVO;

public interface OrgTypeDao {

	public List<Object> searchListOrgType();
	public List<Object> searchListOrgTypeOne(String org_type_id);
	public void insertOrgType(OrgTypeVO orgtypeVo);
	public void modifyOrgType(OrgTypeVO orgtypeVo);
	public void deleteOrgType(String org_type_id);
}
