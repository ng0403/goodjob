package com.crm.cp.sales.est.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;


public interface EstService {

	List<EstVO> getList(Map<String,String> map); //기업의 전체 리스트가져오기

	List<EstVO> getProdList(Map<String,String> map);

	List<EstVO> elcList();
	
		
		//영업기회 상세정보 조회
		List<EstVO> estDetail(String opptId);
		
		
		//영업기회 수정 
		int estModify(EstVO detail);
		
		//영업기회 추가
		int estAdd(List<EstVO> add);
		
		//영업기회 상세정보 고객 리스트
		List<Object> estCustComp(Map<String, Object> map);
		
		//영업기회 검색창 고객 리스트
		List<Object> estSearchCustComp(Map<String, Object> map);
		
		/*//영업활동 추가
		int opptActiveAdd(ActVO act);*/
		
		/*//영업활동 삭제
		int opptActiveDelete(String sales_actvy_id);

		//견적 리스트 조회
		List<EstVO> estimList(String sales_oppt_id);*/

		//상품 목록 조회
		List<ProdVO> prodList(Map<String, Object> map);
	
	
	// 페이지 정보 얻어오기
	PagerVO getCCListCount(Map<String, String> ccPageNum);

	List<EstVO> eduList();

	List<Object> estActOpptList(Map<String, Object> map);

	int estUpdate(Map<String, Object> map);

	int estDelete(EstVO est);

	PagerVO actCount(Map<String, String> map);

	List<ActVO> actList(Map<String, String> map);

	PagerVO opptCount(Map<String, String> map);

	List<OpptVO> opptList(Map<String, String> map);

	int opptAdd(OpptVO opptVo);

	List<OpptVO> estHistoryList(Map<String, String> map);

	// 삭제 데이터 관리 해주는 부분.
	List<EstVO> getDelList(Map<String, String> map);

	List<EstVO> delEstDetail(String estim_id);

	int delEstDelete(EstVO evo);

	int delEstRestore(EstVO est);

	PagerVO getDelCCListCount(Map<String, String> ccPageNum);

}
