package com.crm.cp.test.user.Dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.test.user.vo.userVO;

@Repository
public class UserDaoImpl implements UserDao {

	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> searchListUser() {
		
		List<Object> obj = sqlSession.selectList("searchListUser");
		System.out.println(obj);
		
		return obj;

	}

	@Override
	public Object selectOnes(String root, Object obj) {
		try {
			Object result = sqlSession.selectOne(root,  obj);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public void insert(userVO vo) {
		sqlSession.insert("user.userInsert", vo);
		System.out.println("insert success DaoImpl");
		
	}
}

