package com.crm.cp.standard.code.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.contact.vo.ContactVO;
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

	//코드 그룹 검색
		@Override
		public List<Object> codegrpList(Map<String, Object> map) {
			
			 return sqlSession.selectList("cdgrpSelect", map);
			
		}
		
	
//코드 리스트
	@Override
	public List<CodeVO> codeList(String cd_grp_id) {
		
		return sqlSession.selectList("codeList", cd_grp_id);
	}
	
	
	//코드 검색
			@Override
			public List<Object> codeList(Map<String, Object> map) {
				
				 return sqlSession.selectList("codeSelect1", map);
				
			}
	
	 

	//코드 그룹 등록
	@Override
	public void cdgrpInsert(CodeVO codevo) {
		
		sqlSession.insert("cdgrpInsert", codevo);
		
	}

	//코드 그룹 삭제
	@Override
	public void cdgrpDelete(CodeVO codevo) {
		
		sqlSession.update("cdgrpDelete", codevo); 

	}

	//코드 추가
	@Override
	public void codeInsert(CodeVO codevo) {
		
		sqlSession.insert("codeInsert", codevo);
		
	}

	//코드 삭제
	@Override
	public void codeDelete(Object code) {
		
		sqlSession.update("codeDelete", code); 

	}

	@Override
	public CodeVO codeDetail(Map map) {
 		return sqlSession.selectOne("codeDetail", map);
	}
	
	@Override
	public CodeVO cdgrpDetail(String cdgrp) {
 		return sqlSession.selectOne("cdgrpDetail", cdgrp);
	}

	//코드 수정
			@Override
			public int codeModify(CodeVO codeVO) {
				int codeUpdate = 0;
				try {
					codeUpdate = sqlSession.update("codeModify", codeVO);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return codeUpdate;
			}
			//코드그룹 수정
			@Override
			public int cdgrpModify(CodeVO codeVO) {
				int cdgrpUpdate = 0;
				try {
					cdgrpUpdate = sqlSession.update("cdgrpModify", codeVO);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return cdgrpUpdate;
			}

			@Override
			public int cdgrpChk(String cd_grp_id) {
				
 				return sqlSession.selectOne("cdgrpChk", cd_grp_id);
			}

}
