package com.crm.cp.test.org.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.test.org.vo.OrganVO;

@Repository
public class OrganDaoImpl implements OrganDao {
	
	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> searchOrganList() {
		
		List<Object> obj = sqlSession.selectList("searchOrganList");
		return obj;
	}
	
	@Override
	public void insertOrgan(OrganVO organVO) {
		System.out.println("다오임플 등장");
		sqlSession.insert("insertOrgan", organVO);
		
	}
	

}
