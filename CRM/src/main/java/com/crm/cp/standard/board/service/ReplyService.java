package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.standard.board.vo.ReplyVO;
import com.crm.cp.utils.PagerVO;


 
public interface ReplyService {

	  public List<ReplyVO> listReply(Integer bno) throws Exception;
	  public void addReply(ReplyVO vo) throws Exception;
	  public void removeReply(String REPLY_NO);
	  PagerVO getReplyListCount(Map<String, Object> map);
	  public List<ReplyVO> SearchList(Map<String, Object> map);

	  
	  public PagerVO replyListCount(Map<String, Object> boardMap); //댓글 페이징
	  public List<ReplyVO> replyAllList(Map<String,Object> boardMap); //댓글 리스트 
	  public void AnswerFlg(int BOARD_NO); 

}
