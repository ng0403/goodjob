package com.crm.cp.sales.oppt.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptChartVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.sales.oppt.vo.pipeLineVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;



public interface OpptService {
	
	//영업기회 리스트 조회
	List<OpptVO> opptList(Map<String,String> map);
	//영업기회 삭제 데이터 리스트 조회
	List<OpptVO> DelopptList(Map<String, String> map);
	//영업기회 리스트 조회
	List<OpptVO> opptList();
	
	//영업기회 상세정보 조회
	OpptVO opptDetail(String opptId);
	//영업기회 삭제된 데이터 상세정보 조회
	OpptVO opptDelDetail(String opptId);
	//영업기회 상태코드 가져오기
	List<OpptVO> opptOscList();
	
	//영업기회단계 코드 가져오기
	List<OpptVO> opptOtlList();
	
	//영업기회 리스트 page정보 가져오기
	PagerVO opptPageCount(Map<String, String> map);
	
	//삭제된 영업기회 리스트 page정보 가져오기
	PagerVO DeletedOpptPageCount(Map<String, String> map);
	//영업활동 리스트 조회
	List<ActVO> actList(Map<String, String> map);
	
	//영업기회 수정
	int opptModify(OpptVO detail);
	
	//영업기회 복원
	int opptDelModify(OpptVO detail);

	//영업기회 추가
	int opptAdd(OpptVO add);
	//영업기회 단계 리스트 추가
	int addOpptStep(OpptVO add);
	
	//영업기회 상세정보 고객 리스트
	List<Object> opptCustComp(Map<String, Object> map);
	
	//영업기회 검색창 고객 리스트
	List<Object> opptSearchCustComp(Map<String, Object> map);
	
	//영업활동 추가
	int opptActiveAdd(ActVO act);
	
	//영업활동 유형코드 가져오기
	List<ActVO> actTypeCdList();
	
	//영업활동 상태코드 가져오기
	List<ActVO> actStatCdList();
	
	//영업활동 구분코드 가져오기
	List<ActVO> actDivCdList();
	
	//영업활동 리스트 row 개수 가져오기
	PagerVO actCount(Map<String, String> map);
	
	//영업활동 삭제
	int opptActiveDelete(String sales_actvy_id);

	//견적 리스트 조회
	List<EstVO> estimList(String sales_oppt_id);

	//상품 목록 조회
	List<ProdVO> prodList(Map<String, Object> map);

	//견적 단계 코드
	List<EstVO> elcList();
	
	//견적 고객 리스트(사용안함)
	List<Object> estimCustomList(Map<String, Object> map);

	//견적 추가
	int opptEstimAdd(List<EstVO> estList);

	//견적 삭제
	int opptEstimDelete(String estim_id);

	int opptDelete(OpptVO opptVO);

	ActVO actDetail(String actvyId);

	int opptActiveUpdate(ActVO act);

	//영입기회별 견적 상세정보
	List<EstVO> opptEstimDetail(String estimId);

	int opptEstimUpdate(Map<String,Object> map);

	List<EstVO> eduList();

	OpptVO searchOneRecentOppt(String userId);

	String findEmpCd(String userId);

	List<pipeLineVO> pipeLineList(Map<String, String> map);

	pipeLineVO pipeLineSum(Map<String, String> map);
	
	//영업기회상태 차트 정보
	List<OpptChartVO> C_oppt_status();
	//영업기회별 상품 리스트 
//	List<OpptPrdtVO> opptprdtList(String sales_oppt_id);
	//영업기회별 상품 상세정보
	List<OpptVO> opptPrdtDetail(String opptId);
	//영업기회별 상품 추가
	int opptPrdtAdd(List<OpptVO> estList);
	//영업기회상품 삭제
	int opptPrdtDel(String sales_oppt_id);
//영업기회완전 삭제
	int opptDelDelete(String sales_oppt_id);
	


	
	
}
