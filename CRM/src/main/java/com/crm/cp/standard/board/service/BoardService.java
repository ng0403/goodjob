package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.PagerVO;
  
public interface BoardService {
	
	  public List<Object> list(Map map);
	  public List<BoardVO> ajaxlist();
	  public List<BoardVO> QnAajaxlist();

	  public BoardVO detail(int BOARD_NO);
	  public void viewadd(int BOARD_NO);
	  public BoardVO ReadFilePage(int BOARD_NO);
	  public BoardVO read(int BOARD_NO); 
	  public BoardVO readFileModify(int BOARD_NO);
	  public void modify(BoardVO vo);
	  public void insert(BoardVO vo);
	  public void removeBoard(String dc);
	  public void removeDetail(int BOARD_NO);
	  
	  PagerVO getBoardListCount(Map<String, Object> map);
 	  
	  public List<BoardVO> SearchList(Map<String, Object> map);

	  
	  public void insertAttachData(BoardVO attach);
	  public Object searchOneFiledata(String FILE_CD); 
 
}
