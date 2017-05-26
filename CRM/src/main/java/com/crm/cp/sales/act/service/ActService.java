package com.crm.cp.sales.act.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

public interface ActService {

	List<ActVO> actAllList(Map<String, Object> actMap);
	List<ActVO> delActAllList(Map<String, Object> actMap);
	List<Object> actSchList();

	PagerVO getActListCount(Map<String, Object> actMap);

	List<ActVO> actTypeCdList();

	List<ActVO> actStatCdList();

	List<ActVO> actDivCdList();
	
	List<OpptVO> actOpptList( OpptVO opptvo);

	List<Object> actOpptList(Map<String, Object> map);
	
	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

	ActVO actDetail(String sales_actvy_id);
	
	ActVO delActDetail(String sales_actvy_id);

	Object actOneSelectId(String sales_actvy_id);
	
	int actInsert(ActVO actvo);

	int actEdit(ActVO actvo);
	
	int delActRestore(ActVO actvo);
	
	int actDelete(String sales_actvy_id);
	
	int delActDelete(ActVO actvo);

	/**
	 * 영화씨가 봐야할 곳.
	 * */
	// 상세보기 화면 영업기회리스트 출력 
	List<OpptVO> opptList(String cust_id);
	
	// 상품 삭제 (해야됨.)
	int opptProdDelete(String opptId);
	
	int opptTabModify(OpptVO detail);
	
	int opptTabPrdtModfy(List<OpptVO> opptList);
	
	

	/*PagerVO getActListCount(Map<String, Object> actMap);*/

	/*List<ActVO> actAllList(Map<String, Object> actMap);*/

	

}