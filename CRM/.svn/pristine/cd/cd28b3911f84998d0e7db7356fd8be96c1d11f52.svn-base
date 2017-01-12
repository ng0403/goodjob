package com.crm.cp.standard.iuser.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.iuser.dao.IuserDao;



@Service
public class IuserServiceImpl implements IuserService{
	
	@Resource
	IuserDao dao;

	@Override
	public List<Object> iuserList() {
		
		List<Object> list =dao.selectAll("user.userSelect");
		return list;
	}

	@Override
	public void insertUser(Object user) {
		
		dao.insert("user.iuserInsert", user);
		
	}

	@Override
	public Object iuserDetail(String temp) {
		Object iuser = (Object)dao.selectOne("user.iuserDetail",temp);
		return iuser;
	}
	
	@Override
	public void removeIuser(String iuser_id) {
		dao.checkUpdate("user.iuserDelete", iuser_id);
	}

	@Override
	public void iuserEdit(Object obj) {
		dao.checkUpdate("user.iuserEdit", obj);
		dao.checkUpdate("user.iuserAuthEdit", obj);
	}

	@Override
	public List<Object> iuserList(Map<String, Object> map) {
       
		List<Object> list=null;
		
		try{
			list=dao.searchList("user.userSelect", map);
		} catch(Exception e) {
			System.out.println(e.toString());
		}
		
		return list;
	}

	@Override
	public List<Object> iuserType() {
		List<Object> typeList = dao.selectAll("user.iuserTypeSelect");
		return typeList;
	}

	@Override
	public List<Object> iuserOrgName() {
		List<Object> orgName = dao.selectAll("user.iuserOrgSelect");
		return orgName;
	}

	@Override
	public List<Object> iuserAuthName() {
		List<Object> authName = dao.selectAll("user.iuserAuthSelect");
		return authName;
	}
	
	@Override
	public Object iuserAuthDetail(String temp) {

		Object obj = dao.selectOne("iuserAuth.userAuthSelect", temp);
		return obj;
		
	}

	@Override
	public Object iuserSelectById(String userId) {
		Object obj = dao.selectOne("user.iuserSelectById", userId);
		return obj;
	}
	
	@Override
	public List<Object> codeList(Map<String, Object> map) {
		List<Object> codeList = dao.selectAll("user.codeSelect", map);
		return codeList;
	}

	@Override
	public List<Object> orgList(Map<String, Object> map) {
		List<Object> orgList = dao.selectAll("user.orgSelect", map);
		return orgList;
	}

	@Override
	public Object iuserOneSelectById(Object userId) {
		Object obj = dao.selectOnes("user.userOneSelect", userId);
		return obj;
	}

	@Override
	public Object iuserOneSelectByIdNM(Object id_nm) {
		Object obj = dao.selectOnes("user.userIDOneSelect", id_nm);
		return obj;
	}
}
