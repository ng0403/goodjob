package com.crm.cp.test.orgtype.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrgTypeDaoImpl implements OrgTypeDao {

	@Autowired
	SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> searchListNotice() {
		// TODO Auto-generated method stub
		
		List<Object> obj = sqlSession.selectList("selectOrgType");
		
		return obj;
	}

}
