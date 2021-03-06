package com.crm.cp.sales.call.service;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.call.dao.CallDao;
import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.lead.vo.LeadVo;
import com.crm.cp.utils.PagerVO;

@Service
public class CallServiceImpl implements CallService{

	@Resource
	CallDao callDao;
	
	//전체리스트 
	@Override
	public List<CallVO> callAllList(Map<String,Object> callMap) {
		return callDao.callAllList(callMap);
	}

	//초성검색
	@Override
	public List<CallVO> callSearchAll(Map<String,Object> callMap){
		return callDao.callSearchAll(callMap);
	}

	//전체리스트 개수 
	@Override
	public PagerVO CallListCount(Map<String, Object> callMap) {
		int actPageNum = (Integer) callMap.get("callPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(actPageNum, 0, 4, 10);
		// 전체 글의 갯수 구하기
		int totalRowCount = callDao.callListCount(callMap);
				
		page = new PagerVO(actPageNum, totalRowCount, 4, 10);
	
		return page;
	}

	//상태리스트
    @Override
	public List<CustPsonVO> compStatList() {
		return callDao.compStatList();
	}
	
	// 회사명리스트
	@Override
	public List<Object> compList() {
		return callDao.compList();
	}

	//연락처 상세정보
	@Override
	public CallVO callDetail(String call_id) {
		return callDao.callDetail(call_id);
	}

	//연락처 키맨추가
	@Override
	public String callAddKeyman(KeymanVO kVO) {
        int addKey = callDao.callAddtKeyman(kVO);
		
		String kmRstStr = null;
		if(addKey == 1){
			kmRstStr = "새로운 키맨 등록이 완료되었습니다.";
		}else {
			kmRstStr = "키맨 등록에 실패했습니다.";
		}
		return kmRstStr;
	}

	//연락처 개인고객 추가
	@Override
	public String callAddCust(LeadVo leadVo) {
		leadVo.setCust_zip_cd(leadVo.getCust_zip_cd1() + leadVo.getCust_zip_cd2());
		int result = callDao.callAddCust(leadVo);
		
		String resultStr = null;
		if(result == 3){  //쿼리문 3개 추가했기 떄문에!
			resultStr = "개인고객 등록이 완료 되었습니다.";
		} else {
			resultStr = "개인고객 등록에 실패 했습니다.";
		}
		return resultStr;
	}

	//연락처 키맨 수정
	@Override
	public String CallKeymanMdfy(KeymanVO kVO) {
		int mdfyResult = callDao.editCallKeyman(kVO);
		String resultStr = null;
		if(mdfyResult == 1){
			resultStr = "키맨 수정이 완료 되었습니다.";
		} else {
			resultStr = "키맨 수정에 실패 했습니다.";
		}
		return resultStr;
	}

	//연락처 개인추가 수정
	@Override
	public String editCallCustPson(CustPsonVO cpvo) {
		cpvo.setCust_zip_cd(cpvo.getCust_zip_cd1()+cpvo.getCust_zip_cd2());
		
		int updateResult = callDao.editCallCustPson(cpvo);
		
		String resultStr = null;
		if(updateResult == 2){
			resultStr = "개인고객 수정이 완료 되었습니다.";
		} else {
			resultStr = "개인고객 수정에 실패 했습니다.";
		}
		return resultStr;
	}

	//연락처 키맨, 개인고객 삭제
	@Override
	public String deleteCall(List<String> call_idList) {
		System.out.println("call_idList : " + call_idList.get(0));
		
		int deleteResult=0;
		
		for(int i=0; i<call_idList.size(); i++){
			String call_id = call_idList.get(i).substring(0,2);
			if(call_id.equalsIgnoreCase("KE")){
				deleteResult += callDao.keymanDelete(call_idList.get(i));
			}else if(call_id.equalsIgnoreCase("CU")){
				deleteResult += callDao.CustDelete(call_idList.get(i));
			}
		}
		
		String resultStr = null;
		if(deleteResult == call_idList.size()){
			resultStr = "연락처 삭제가 완료 되었습니다.";
		} else {
			resultStr = "연락처 삭제가 실패 했습니다.";
		}
		return resultStr;
	}
}
