package com.crm.cp.standard.authIuser.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.authIuser.vo.AuthIuserVO;

public interface AuthIuserService {
	List<Object> authUserList();
	Object authUserDetail(Object obj);
	List<Object> authUserListSearch(Map<String, Object> map);
	void authUserInsert(Object obj);
	void authUserEdit(AuthIuserVO authUser);
	int searchUserAuth(AuthIuserVO authUser);
	void authUserDelete(Object authUser);
}
