package com.crm.cp.standard.prod.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PageUtil;

public interface ProdDao {

	List<ProdVO> prodList(Map<String, Object> prodMap);

	int getProdListCount();	

	int prodInsert(ProdVO dto);
	
	void prodUpdateData(ProdVO dto);
	
	ProdVO prodRead(String prod_id);
	
	List<ProdVO> prodCateList();
	
	List<ProdVO> prodServiceCodeList();
	
	List<ProdVO> prodTypeCdList();

	List<ProdVO> prodStatCdList();

	List<ProdVO> prodDivCdList();

	List<Object> prodOpptList();
	
	List<Object> prodOpptList(Map<String, Object> map);

	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

	int fileInsert(ProdVO dto);

	int prodFileInsert(ProdVO dto);

}
