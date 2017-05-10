package com.crm.cp.standard.board.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BNoticeDaoImpl implements BNoticeDao {
	
	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//전체리스트 개수
	@Override
	public int getNoticeListCount(Map<String, Object> boardMap) {
		System.out.println("board Map Dao "  + boardMap.toString());
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("bnotice.selectTotalCount", boardMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}
	
	//전체 리스트
	@Override
	public List<Object> list(Map map) {	
		 System.out.println("notice Dao List ? " + map.toString());
		 List<Object> qwer = sqlSession.selectList("bnotice.selectAll", map);
		 System.out.println("qwerqwer ?? " + qwer.toString());
		return qwer ;
	}
	
}
