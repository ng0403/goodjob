package com.crm.cp.standard.board.dao;

 

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.standard.board.vo.BoardVO;

public interface BoardDao {
	
	public List<BoardVO> fileboardList();
	public List<Object> list(Map map);
	public List<BoardVO> ajaxlist();
	public List<BoardVO> QnAajaxlist();
	public BoardVO detail(int BOARD_NO);
	public void viewadd(int BOARD_NO);
	public BoardVO read(int BOARD_NO);  
	public BoardVO readFileModify(int BOARD_NO);
	public void modify(BoardVO vo);
	public void AnswerFlg(int BOARD_NO);
	public void insert(BoardVO vo);
	public BoardVO ReadFilePage(int BOARD_NO);
	public List<BoardVO> SearchList(Map<String, Object> map); 
	
	public void removeBoard(String dc);
	 public void removeDetail(int BOARD_NO);
	 
	int BoardListCount(String string, Map<String, Object> map);
 	
	public void insertAttachData(BoardVO attach);
    public Object searchOneFiledata(String FILE_CD);

	public int boardListCount(Map<String, Object> boardMap);
	public List<BoardVO> boardAllList(Map<String, Object> boardMap); 

 
}
