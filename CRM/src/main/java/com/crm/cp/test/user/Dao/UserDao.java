package com.crm.cp.test.user.Dao;

import java.util.List;

import com.crm.cp.test.user.vo.userVO;

public interface UserDao {
	public List<Object> searchListUser();

	public Object selectOnes(String root, Object obj);

	public void insert(userVO vo);
}