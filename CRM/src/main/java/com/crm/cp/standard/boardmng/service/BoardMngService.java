package com.crm.cp.standard.boardmng.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.boardmng.vo.BoardMngVO;
import com.crm.cp.utils.PagerVO;

public interface BoardMngService {
	  PagerVO getBoardMngListCount(Map<String, Object> map);
	  public List<Object> list(Map map);
	  public BoardMngVO detail(String BOARD_MNG_NO);
	  public void modify(BoardMngVO vo);
	  public void add(BoardMngVO vo);
	  public void remove(String dc);
	  public List<BoardMngVO> ajaxlist();
	  public List<Object> codetxt(String CODE_TXT);
}
