package com.crm.cp.standard.data_board.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.data_board.vo.AttachVO;
import com.crm.cp.standard.data_board.vo.Data_boardVO;

@Repository
public class Data_boardDaoImpl implements Data_boardDAO{
	
	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public Object searchOneRecentData_board(String root) {
		return sqlSession.selectOne(root);
	}

	@Override
	public List<Object> searchListData_board(String root) {
		
		return sqlSession.selectList(root);
	}

	@Override
	public int countData_board(String root, Map<?, ?> map) {
		
		int obj = sqlSession.selectOne(root, map);
		return obj;
	}

	@Override
	public List<Object> searchRowNumListData_board(String root, Map<?, ?> map) {
		
		List<Object> obj = sqlSession.selectList(root, map);
		return obj;
	}

	@Override
	public List<Object> searchListCode(String root) {
		
		List<Object> obj = sqlSession.selectList(root);
		return obj;
	}

	@Override
	public Object searchOneData_board(String root, String dboard_id) {

		Object obj = sqlSession.selectOne(root, dboard_id);
		return obj;
	}

	@Override
	public void increasechknumData_board(String root, String dboard_id) {
		
		sqlSession.update(root, dboard_id);
		
	}

	@Override
	public void deleteOneData_board(String root, String data_board_id) {
		
		sqlSession.update(root, data_board_id);
		
	}

	@Override
	public void modifyData_board(String root, Map<?, ?> json) {

		sqlSession.update(root, json);
		
	}

	@Override
	public List<Object> searchListFileById(String root, String dboard_id) {
		
		List<Object> obj= sqlSession.selectList(root, dboard_id);
		return obj;
		
	}

	@Override
	public Object searchOneFiledata(String root, String attach_id) {
		
		Object obj = sqlSession.selectOne(root, attach_id);
		return obj;
		
	}

	@Override
	public Object searchOneUser(String root, String userId) {
		
		Object obj = sqlSession.selectOne(root, userId);
		return obj;
	}

	@Override
	public void insertOneData_board(String root, Map map) {

		sqlSession.insert(root, map);
		
	}

	@Override
	public void insertAttachData(String root, AttachVO attach) {
		
		sqlSession.insert(root, attach);
		
	}

	@Override
	public List<Object> searchFileList(String root, String boardId) {

		List<Object> obj = sqlSession.selectList(root, boardId);
		return obj;
	}

}
