package com.crm.cp.standard.board.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.board.vo.ReplyVO;

public interface ReplyDao {

	  public List<ReplyVO> listReply(Integer BOARD_NO) throws Exception;
	  public void addReply(ReplyVO vo) throws Exception;
	  public void removeReply(String REPLY_NO);
	  int ReplyListCount(String string, Map<String, Object> map);
	 public List<ReplyVO> SearchList(Map<String, Object> map); 

}
