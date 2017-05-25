package com.crm.cp.standard.code.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.code.vo.CodeVO;

@Repository
public class CCodeDaoImpl implements CCodeDao {

	
	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Object> codegrpList() {
 		
		return sqlSession.selectList("codegrpList");
	}

	@Override
	public List<CodeVO> codeList(String cd_grp_id) {
		
		return sqlSession.selectList("codeList", cd_grp_id);
	}

	//코드 그룹 등록
	@Override
	public void cdgrpInsert(CodeVO codevo) {
		
		sqlSession.insert("cdgrpInsert", codevo);
		
	}

	@Override
	public void cdgrpDelete(CodeVO codevo) {
		
		sqlSession.update("cdgrpDelete", codevo); 

	}

}
