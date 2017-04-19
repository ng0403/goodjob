package com.crm.cp.sales.act.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

public interface ActDao {

	List<ActVO> actList(Map<String, Object> actMap);
	List<Object> actSchList();

	int getActListCount(Map<String, Object> actMap);
	
	List<ActVO> actTypeCdList();

	List<ActVO> actStatCdList();

	List<ActVO> actDivCdList();
	
	List<Object> actOpptList();
	
	List<Object> actOpptList(Map<String, Object> map);

	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

	ActVO actDetail(String sales_actvy_id);

	void actInsert(ActVO actvo);

	Object actOneSelectId(String sales_actvy_id);

	void actEdit(ActVO actvo);
	
	void actDelete(String sales_actvy_id);
	
	/**
	 * 영화씨가 봐야할 곳.
	 * */
	// 상세보기 화면 영업기회리스트 출력 
	List<OpptVO> opptList(String cust_id);
	
	// 상품 삭제 (해야됨.)
	int opptProdDelete(String opptId);
	
	int opptTabModify(OpptVO detail);
	
	int opptTabPrdtModfy(List<OpptVO> opptList);
	
}
