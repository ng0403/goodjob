package com.crm.cp.sales.cont.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.cont.vo.contrResultVO;
import com.crm.cp.sales.cont.vo.contrVO;

public interface contrDAO {

	List<contrVO> getcContrList();
	List<contrVO> getcContrMap(Map<String, Object>map);
	List<Object> contActOpptList(String cust_id);
	List<Object> contActOpptList(Map<String, Object> map);
	List<Object> contCustcompList();
	List<Object> contCustcompList(Map<String, Object> map);

	contrVO getcContrInfo(String contr_id);
	int contInsert(contrVO contVO);
	int contPageCount(Map<String, Object> map);
	int contUpdate(contrVO contVO);
	int deleteCont(List<String> cont_id_list);
	List<Object> contrResult(Map<String, String> map);
	contrResultVO findEmpCd(String userId);
	contrResultVO contrResultSum(Map<String, String> map);

}
