package com.crm.cp.sales.cont.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.crm.cp.sales.cont.dao.contrDAO;
import com.crm.cp.sales.cont.vo.contrResultVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.utils.PagerVO;

@Repository
public class contrServiceImpl implements contrService {

	@Resource
	contrDAO dao;

	@Override
	public List<contrVO> getcContrList() {
		List<contrVO> getcContrList = dao.getcContrList();
		return getcContrList;
	}

	@Override
	public contrVO getcContrInfo(String contr_id) {
		contrVO getcContrInfo = dao.getcContrInfo(contr_id);
		return getcContrInfo;
	}

	@Override
	public List<contrVO> getcContrMap(Map<String, Object> map) {
		List<contrVO> getcContrMap = dao.getcContrMap(map);
		return getcContrMap;
	}

	@Override
	public String contInsert(contrVO contVO) {
		int contInsert = dao.contInsert(contVO);// 여기서 가져온 값을 판별하여
		System.out.println("contr insert service" + contInsert);

		String contResult = null;
		if(contInsert == 2) {
			contResult = "새로운 계약을 등록했습니다.";
		} else {
			contResult = "계약 추가에 실패했습니다.";
		}
		
		return contResult;//요기서 반환한 값을 컨트롤이 받는다.
	}
	@Override
	public String contUpdate(contrVO contVO) {
		int contUpdate = dao.contUpdate(contVO);// 여기서 가져온 값을 판별하여 
		String contResult = null;
		if(contUpdate == 1) {
			contResult = "계약 수정에 성공했습니다.";
		} else {
			contResult = "계약 수정에 실패했습니다.";
		}
		return contResult;//요기서 반환한 값을 컨트롤이 받는다.
	}

	@Override
	public PagerVO contPageCount(Map<String, Object> map) {
		int totalRowCount = dao.contPageCount(map);
	    int pageNum = Integer.parseInt(map.get("pageNum").toString());
	    PagerVO page = new PagerVO(pageNum, totalRowCount, 10, 10);
	    return page;
	}

	@Override
	public List<Object> contActOpptList(String cust_id) {
		return dao.contActOpptList(cust_id);
	}

	@Override
	public List<Object> contActOpptList(Map<String, Object> map) {
		return dao.contActOpptList(map);
	}

	@Override
	public List<Object> contCustcompList() {
		return dao.contCustcompList();
	}

	@Override
	public List<Object> contCustcompList(Map<String, Object> map) {
		return dao.contCustcompList(map);
	}

	@Override
	public String deleteCont(List<String> cont_id_list) {
		int deleteResult = dao.deleteCont(cont_id_list);
		String resultStr = null;
		if(deleteResult == cont_id_list.size()){
			resultStr = "계약 삭제가 완료 되었습니다.";
		} else {
			resultStr = "계약 삭제에 실패 했습니다.";
		}
		return resultStr;
	}
	
	@Override
	public List<Object> contrResult(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.contrResult(map);
	}

	@Override
	public contrResultVO findEmpCd(String userId) {
		// TODO Auto-generated method stub
		return dao.findEmpCd(userId);
	}

	@Override
	public contrResultVO contrResultSum(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.contrResultSum(map);
	}
}
