package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.board.dao.QnABoardDao;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.PagerVO;
 

@Service
public class QnaBoardServiceImpl implements QnABoardService {
	  
	@Autowired
	QnABoardDao qnaboardDao;

	@Override
	public List<Object> list(Map map) {
		System.out.println("qnaService map ? " +map.toString());
 		return qnaboardDao.list(map);

	}

	@Override
	public PagerVO getQnaListCount(Map<String, Object> map) {
		
		int boardPageNum = (Integer)map.get("pageNum");
		int totalRowCount = qnaboardDao.QnaListCount("boardListCount", map);
		
		PagerVO page = new PagerVO(boardPageNum, totalRowCount, 10, 999);
		
		return page;
	}

	@Override
	public BoardVO detail(int BOARD_NO) {
  		return qnaboardDao.detail(BOARD_NO);
	}

	@Override
	public BoardVO read(int BOARD_NO) {
		// TODO Auto-generated method stub
		return qnaboardDao.read(BOARD_NO);
	}

	@Override
	public void modify(BoardVO vo) {
		qnaboardDao.modify(vo);		
	}

	@Override
	public PagerVO getQnACount(Map<String, Object> map) {
		
		int PageNum = (Integer) map.get("pageNum");
		int pageListCount = qnaboardDao.getQnACount(map);
		
		PagerVO page = new PagerVO(PageNum, pageListCount, 10, 20);
		return page; 
		 
	}

	@Override
	public List<BoardVO> QnAList(Map<String, Object> map) {
		List<BoardVO> list = qnaboardDao.QnAList(map);
		return list;
	}

	@Override
	public void insert(BoardVO vo) {
		
		qnaboardDao.insert(vo);
		
	}

	@Override
	public BoardVO CODE(String QUESTION_TYPE_CD) {
		 
		return qnaboardDao.CODE(QUESTION_TYPE_CD);
	}

	@Override
	public void viewadd(int BOARD_NO) {
		
		qnaboardDao.viewadd(BOARD_NO);
		
	}

	@Override
	public List<BoardVO> QnAList2(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return qnaboardDao.QnAList2(map);
	}
	
	
	//전체리스트 개수 
	@Override
	public PagerVO boardListCount(Map<String, Object> boardMap) {
		System.out.println("BoardListCount service " +  boardMap.toString());
		int actPageNum = (Integer) boardMap.get("boardPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(actPageNum, 0, 10, 10);
		// 전체 글의 갯수 구하기
		System.out.println("actPage Num " + actPageNum);
		int totalRowCount = qnaboardDao.boardListCount(boardMap);
		System.out.println("totalRowCount ? " + totalRowCount);		
		page = new PagerVO(actPageNum, totalRowCount, 10, 10);
	
		return page;
	}
 

	//전체리스트 
	@Override
	public List<BoardVO> boardAllList(Map<String,Object> boardMap) {
		return qnaboardDao.boardAllList(boardMap);
	}
	

}
