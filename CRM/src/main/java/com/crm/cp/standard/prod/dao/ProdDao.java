package com.crm.cp.standard.prod.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PageUtil;

public interface ProdDao {

	List<ProdVO> prodList(Map<String, Object> prodMap);

	int getProdListCount();	

	int prodInsert(ProdVO dto);
	
	int prodUpdateData(ProdVO dto);
	
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

	int imgFileInsert(ProdVO dto);

	int prodImgFileInsert(ProdVO dto);

	int catalFileInsert(ProdVO dto);

	int prodCatalFileInsert(ProdVO dto);

	int imgFileUpdateData(ProdVO dto);

	int catalFileUpdateData(ProdVO dto);

	ProdVO imgList(String prod_id);

	ProdVO catalList(String prod_id);

	int prodImgFileDelete(ProdVO dto);

	int prodCatalFileDelete(ProdVO dto);

	int prodDelete(String prod_id);

	int fileDelete(String attach_id);

	void prodFileDelete(String prod_id);

	List<ProdVO> fileList(String prod_id);

}
