package com.crm.cp.standard.board.dao;

import java.util.List;
import java.util.Map;

public interface BNoticeDao {
	
	
	public int getNoticeListCount(Map<String, Object> boardMap); // 보드 리스트 개수
	public List<Object> list(Map map);							//전체 리스트

}
