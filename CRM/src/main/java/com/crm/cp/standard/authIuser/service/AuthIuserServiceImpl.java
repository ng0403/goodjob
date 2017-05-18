package com.crm.cp.standard.authIuser.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.authIuser.dao.AuthIuserDao;
import com.crm.cp.standard.authIuser.vo.AuthIuserVO;

@Service
public class AuthIuserServiceImpl implements AuthIuserService{
	
	@Resource
	AuthIuserDao dao;

	@Override
	public List<Object> authUserList() {
		List<Object> authUserList = dao.selectAll("authIuser.authIuserSelect");
		return authUserList;
	}

//	@Override
//	public Object authUserDetail(Object obj) {
//		Object authUserDetail = (Object)dao.selectOne("authIuser.authIuserDetail",obj);
//		return authUserDetail;
//	}
	
	@Override
	public List<Object> authUserListSearch(Map<String, Object> map) {
		List<Object> authUserListSearch = dao.selectAll("authIuser.authIuserSelectSearch", map);
		return authUserListSearch;
	}
	
	@Override
	public void authUserInsert(Object obj) {
		System.out.println("authUserInsert obj : " + obj);
		dao.insert("authIuser.userInsert", obj);
		
	}
	
	@Override
	public void authUserEdit(AuthIuserVO authUser) {
		dao.checkUpdate("authIuser.authIuserEdit", authUser);	
	}
	
	@Override
	public int searchUserAuth(AuthIuserVO authUser) {
		int result = dao.selectCount("authIuser.searchUserAuth", authUser);
		return result;
	}
	
	@Override
	public void authUserDelete(Object authUser) {
		dao.authUserDelete("authIuser.authIuserDelete", authUser);
	}

	@Override
	public List<AuthIuserVO> userAuthList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		List<AuthIuserVO> userAuthList = dao.selectList("authIuser.authIuserDetail",map);
		return userAuthList;
	}

	@Override
	public List<AuthIuserVO> authList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}
}
