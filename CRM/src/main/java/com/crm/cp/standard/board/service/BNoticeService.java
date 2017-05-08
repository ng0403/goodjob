package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.utils.PagerVO;

public interface BNoticeService {
	
	PagerVO getNoticeListCount(Map<String, Object> map); // 리스트 갯수 구하기.
	public List<Object> list(Map map);

}
