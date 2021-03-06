package com.crm.cp.standard.org.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

public interface OrganizationService {
	public List<Object> selectTreeOne();
	public List<Object> selectTreeTwo();
	public List<Object> selectTreeThird();
	public List<Object> selectTreeFourth();
	public Object orgNameCount(Map<String, Object> obj);
	public Object insertOrg(HttpSession session, Map<String,String> data);
	public Object orgDetailOne(HttpSession session, Map<String,String> data);
	public List<Object> selectOAll(Map<String,Object> map);
	public int orgUpdate(HttpSession session, Map<String,String> data);
	public int orgDelete(Map<String,Object> data);
	public List<Object> selectOrgUser();
	public List<Object> selectOrgUser(Map<String,Object> map);
}
