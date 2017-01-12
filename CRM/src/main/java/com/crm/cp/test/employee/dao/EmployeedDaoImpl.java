package com.crm.cp.test.employee.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeedDaoImpl implements EmployeeDao {

	@Autowired
	
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> searchListEmployee() {
		
		List<Object> obj = sqlSession.selectList("searchListEmployee");
		
		return obj;
	}
	
	

}
