package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.board.vo.ReplyVO;
import com.crm.cp.utils.PagerVO;


 
public interface ReplyService {

	  public List<ReplyVO> listReply(Integer bno) throws Exception;
	  public void addReply(ReplyVO vo) throws Exception;
	  public void removeReply(String REPLY_NO);
	  PagerVO getReplyListCount(Map<String, Object> map);
	  public List<ReplyVO> SearchList(Map<String, Object> map);

}