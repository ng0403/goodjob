package com.crm.cp.test.user.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.user.Dao.UserDao;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userDao;

	@Override
	public List<Object> searchListUser() {
		
		List<Object> obj = userDao.searchListUser();
		return obj;
	}
}