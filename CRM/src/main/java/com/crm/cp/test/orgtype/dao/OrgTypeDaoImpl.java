package com.crm.cp.test.orgtype.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.test.orgtype.vo.OrgTypeVO;

@Repository
public class OrgTypeDaoImpl implements OrgTypeDao {

	@Autowired
	SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> searchListOrgType() {
		// TODO Auto-generated method stub
		List<Object> obj = sqlSession.selectList("selectOrgType");
		
		return obj;
	}
	
	@Override
	public List<Object> searchListOrgTypeOne(String org_type_id) {
		// TODO Auto-generated method stub
		List<Object> obj = sqlSession.selectList("selectOrgTypeOne", org_type_id);
		
		return obj;
	}

	@Override
	public void insertOrgType(OrgTypeVO orgtypeVO) {
		// TODO Auto-generated method stub
		sqlSession.insert("insertOrgType", orgtypeVO);
	}

	@Override
	public void modifyOrgType(OrgTypeVO orgtypeVo) {
		// TODO Auto-generated method stub
		sqlSession.update("modifyOrgType", orgtypeVo);
	}

	@Override
	public void deleteOrgType(String org_type_id) {
		// TODO Auto-generated method stub
		sqlSession.update("deleteOrgType", org_type_id);
	}

}
