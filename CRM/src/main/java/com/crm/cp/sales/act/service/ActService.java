package com.crm.cp.sales.act.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

public interface ActService {

	List<ActVO> actAllList(Map<String, Object> actMap);

	PagerVO getActListCount(Map<String, Object> actMap);

	List<ActVO> actTypeCdList();

	List<ActVO> actStatCdList();

	List<ActVO> actDivCdList();
	
	// 상세보기 화면 영업기회리스트 출력 
	List<OpptVO> opptList(String cust_id);

	List<Object> actOpptList();

	List<Object> actOpptList(Map<String, Object> map);
	
	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

	ActVO actDetail(String sales_actvy_id);

	Object actOneSelectId(String sales_actvy_id);
	
	void actInsert(ActVO actvo);

	void actEdit(ActVO actvo);
	
	void actDelete(String sales_actvy_id);



	/*PagerVO getActListCount(Map<String, Object> actMap);*/

	/*List<ActVO> actAllList(Map<String, Object> actMap);*/

	

}