package com.crm.cp.standard.board.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.board.vo.BoardVO;

@Repository
public class BoardDaoImpl implements BoardDao {
	
	@Autowired
	SqlSession sqlSession;
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public List<Object> list(Map map) {	
		 
		return sqlSession.selectList("BoardList", map);
	}

	@Override
	public BoardVO detail(int BOARD_NO) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("board.ReadPage", BOARD_NO);
	}

	@Override
	public void insert(BoardVO vo) {
		 
 		 sqlSession.insert("InsertBoard",vo);
	}

	@Override
	public void modify(BoardVO vo) {
		
		sqlSession.update("ModifyBoard" ,vo);
		
	}

	@Override
	public void removeBoard(String dc) {
 		sqlSession.update("removeBoard", dc);
	}

	@Override
	public BoardVO read(int BOARD_NO) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("readBoard", BOARD_NO);
	}

	@Override
	public List<BoardVO> ajaxlist() {
		 
		return sqlSession.selectList("board.ajaxList");
	}

	@Override
	public int BoardListCount(String string, Map<String, Object> map) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("board.boardListCount", map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return totalCount;
	}

	@Override
	public List<BoardVO> SearchList(Map<String, Object> map) {
		
		return sqlSession.selectList("board.SearchList", map);

	}

	@Override
	public void insertAttachData(BoardVO attach) {
		
		sqlSession.insert("board.insertAttachData", attach);
		
	}

	@Override
	public Object searchOneFiledata(String FILE_CD) {
  		Object obj = sqlSession.selectOne("board.searchOneFiledata", FILE_CD);
  		return obj;
	}

	@Override
	public BoardVO ReadFilePage(int BOARD_NO) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("board.ReadFilePage", BOARD_NO);
		 
	}

	@Override
	public BoardVO readFileModify(int BOARD_NO) {
		 
		return sqlSession.selectOne("readBoardFile", BOARD_NO);
	}

	@Override
	public void removeDetail(int BOARD_NO) {
		sqlSession.update("removeDetail", BOARD_NO);
		
	}

	@Override
	public List<BoardVO> QnAajaxlist() {
		 
		return sqlSession.selectList("QnAajaxlist");
	}

	@Override
	public void viewadd(int BOARD_NO) {
		
		sqlSession.update("viewadd",BOARD_NO);
		
	}
 



 

}
