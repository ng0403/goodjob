package com.crm.cp.standard.prod.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PageUtil;
import com.crm.cp.utils.PagerVO;
  
public interface ProdService {

	List<ProdVO> prodAllList(Map<String, Object> prodMap);

	PagerVO getProdListCount(Map<String, Object> prodMap);

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

	ProdVO imgList(String prod_id);

	ProdVO catalList(String prod_id);

	int prodDelete(String prod_id);
	
	List<ProdVO> fileList(String prod_id);

}