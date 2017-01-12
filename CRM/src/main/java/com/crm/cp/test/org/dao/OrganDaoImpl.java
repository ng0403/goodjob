package com.crm.cp.test.org.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrganDaoImpl implements OrganDao {
	
	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public void searchOrganList() {
		
		sqlSession.selectList("searchOrganList");
		
		return;
	}
	

}
