	package com.crm.cp.standard.boardmng.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.boardmng.dao.BoardMngDao;
import com.crm.cp.standard.boardmng.vo.BoardMngVO;
import com.crm.cp.utils.PagerVO;

@Service
public class BoardMngServiceImpl implements BoardMngService {

	@Autowired
	BoardMngDao boardmngDao;
	
	@Override
	public PagerVO getBoardMngListCount(Map<String, Object> map) {
		int boardPageNum = (Integer)map.get("pageNum");
		int totalRowCount = boardmngDao.BoardMngListCount("boardmngListCount", map);
		
		PagerVO page = new PagerVO(boardPageNum, totalRowCount, 10, 999);
		
		return page;
	}

	@Override
	public List<Object> list(Map map) {
		// TODO Auto-generated method stub
 		return boardmngDao.list(map);

	}

	@Override
	public BoardMngVO detail(String BOARD_MNG_NO) {
			
		return boardmngDao.detail(BOARD_MNG_NO);
	}

	@Override
	public void modify(BoardMngVO vo) {
		boardmngDao.modify(vo);
	}

	@Override
	public void add(BoardMngVO vo) {

		boardmngDao.add(vo);
	}

	@Override
	public void remove(String dc) {

		boardmngDao.remove(dc);
		
	}

	@Override
	public List<BoardMngVO> ajaxlist() {

		return boardmngDao.ajaxlist();
	}

	@Override
	public List<Object> codetxt(String CODE_TXT) {
		
		return boardmngDao.codetxt(CODE_TXT);
		
	}

}
