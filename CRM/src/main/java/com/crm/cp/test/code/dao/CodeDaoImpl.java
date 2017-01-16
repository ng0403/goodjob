package com.crm.cp.test.code.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.test.code.vo.CodeVo;

@Repository
public class CodeDaoImpl implements CodeDao{
	
	@Autowired
	SqlSession sqlSession;

	@Override
	public List<CodeVo> codeListPage() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("selectCodeList");
	}

	@Override
	public int codeinsert(CodeVo cvo) {
		// TODO Auto-generated method stub
		return sqlSession.insert("insertCode", cvo);
	}

	@Override
	public List<CodeVo> codeUpdatePage(String code) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("selectCode", code);
	}

	@Override
	public int codeupdate(CodeVo cvo) {
		// TODO Auto-generated method stub
		return sqlSession.update("updateCode", cvo);
	}

	@Override
	public int codedelete(String del_code) {
		// TODO Auto-generated method stub
		return sqlSession.delete("deleteCode", del_code);
	}

}
