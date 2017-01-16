package com.crm.cp.test.star.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StarDaoImpl implements StarDao {
	
	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public List<Object> searchStarList() {
		
		List<Object> obj = sqlSession.selectList("searchStarList");
		
		return obj;
		
	}

}
