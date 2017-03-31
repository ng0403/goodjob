package com.crm.cp.standard.prod.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PageUtil;
  
public interface ProdService {

	List<ProdVO> prodAllList(Map<String, Object> prodMap);

	PageUtil getProdListCount(Map<String, Object> prodMap);

	void prodInsert(ProdVO dto);
	
	ProdVO prodRead(String prod_id);
	
	void prodUpdate(ProdVO dto);
	
	List<ProdVO> prodCateList();
	
	List<ProdVO> prodServiceCodeList();

	List<ProdVO> prodTypeCdList();

	List<ProdVO> prodStatCdList();

	List<ProdVO> prodDivCdList();

	List<Object> prodOpptList();

	List<Object> prodOpptList(Map<String, Object> map);
	
	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

}