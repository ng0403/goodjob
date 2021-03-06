package com.crm.cp.standard.authIuser.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.authIuser.vo.AuthIuserVO;

public interface AuthIuserService {
	List<Object> authUserList();
	List<Object> authUserListSearch(Map<String, Object> map);
	void authUserInsert(Object obj);
	void authUserEdit(AuthIuserVO authUser);
	int searchUserAuth(AuthIuserVO authUser);
	void authUserDelete(Object authUser);
	List<AuthIuserVO> userAuthList(Map<String, Object> map);
	List<AuthIuserVO> authList(Map<String, Object> map);
}
