package com.crm.cp.standard.notice.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.notice.vo.NoticeVO;

@Repository
public class NoticeDaoImpl implements NoticeDAO{
	
	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public Object searchOneRecentNotice(String root, String userId) {
		
		Object obj= sqlSession.selectOne(root, userId);
		return obj;
		
	}

	@Override
	public List<Object> searchListNotice() {
		
		List<Object> obj = sqlSession.selectList("searchListNotice");
		
		return obj;
	}

	@Override
	public List<Object> searchRowNumListNotice(String root, Map<?, ?> map) {
		
		List<Object> obj = sqlSession.selectList(root, map);
		return obj;
	}

	@Override
	public int countNotice(String root, Map<?, ?> map) {

		int totalCount = sqlSession.selectOne(root, map);
		return totalCount;
	}

	@Override
	public Object searchOneNotice(String root, String notice_id) {
		
		Object obj = sqlSession.selectOne(root, notice_id);
		return obj;
	}

	@Override
	public void increasechknumNotice(String root, String notice_id) {
		
		sqlSession.update(root, notice_id);
		
	}

	@Override
	public void deleteOneNotice(String root, String notice_id) {
		
		sqlSession.update(root, notice_id);
		
	}

	@Override
	public void insertOneNotice(String root, NoticeVO noticeVO) {

		sqlSession.insert(root, noticeVO);
		
	}

	@Override
	public List<Object> searchListOrg(String root) {
		
		List<Object> obj = sqlSession.selectList(root);
		return obj;
	}

	@Override
	public void modifyNotice(String root, Map<?, ?> json) {
		
		sqlSession.update(root, json);
		
	}

}
