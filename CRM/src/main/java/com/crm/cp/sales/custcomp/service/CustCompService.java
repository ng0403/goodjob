package com.crm.cp.sales.custcomp.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.custcomp.vo.PosVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

public interface CustCompService {
	
	// 기업고객 리스트 전체 개수 조회(페이징에 사용)
	PagerVO getCCListCount(Map<String, Object> pMap);
	
	List<CustCompVO> getCCList(Map<String, Object> pMap); 						// 기존고객 리스트
	CustCompVO getCCDetail(String cust_id); 									// 기존고객 상세정보 가져오기
	String insertCustComp(CustCompVO ccVO);										// 기존고객 추가
	String updateCustComp(CustCompVO ccVO); 									// 기존고객 수정
	String deleteCustComp(List<String> cust_idList); 							// 기존고객 삭제
	
	List<CustCompVO> selectSSC(); 												// 매출규모 코드 리스트
	List<CustCompVO> selectIDC(); 												// 산업군 코드 리스트
	List<CustCompVO> selectCCS(); 												// 기업상태 코드 리스트
	List<CustCompVO> selectCDC();												// 고객사구분 코드 리스트	
	
	List<PocVO> getPocList(String cust_id);										//고객사 담당자 리스트
	
	List<PosVO> getPosList(String cust_id);										//영업 담당자 리스트
	
	List<contrVO> getContList(String cust_id);									// 계약 리스트
	PagerVO getEmpListNum(int iuserPageNum, String iuser_nm); 					// 직원검색 리스트 개수
	List<CustCompVO> getEmpList(Map<String, Object> iuserMap, PagerVO page); 	// 직원 리스트
	
	List<KeymanVO> getKeymanList(String cust_id);								// 키맨 리스트
	String insertKeyman(KeymanVO kVO); 											// 키맨 추가
 	KeymanVO keymanDetail(Map<String, Object> map); 							// 키맨 상세정보
	String mdfyKeyman(KeymanVO kVO);											// 키맨 수정
	String deleteKeyman(KeymanVO kVO); 											// 키맨 삭제
	
	List<Object> contactList();													//연락처 리스트 팝업
	List<Object> contactList(Map<String, Object> map);							//연락처 리스트 팝업
	
	
	List<OpptVO> getOpptList(String cust_id);									// 영업기회 리스트
	OpptVO ccOpptCustDetail(String cust_id); 									// 영업기회 팝업 고객정보 가져오기
	List<OpptVO> ccOpptPopList(String cust_id); 								// 영업기회 리스트 팝업
	String deleteOppt(List<String> oppt_idList); 								// 영업기회 삭제
	OpptVO ccOpptDetail(String sales_oppt_id); 									// 영업기회 상세정보
	
	List<ActVO> getActList(String cust_id);										// 영업활동 리스트
	ActVO ccActCustDetail(String cust_id); 										// 영업활동 고객 정보
	int custActAdd(List<ActVO> actList);										// 영업활동 추가
	String deleteAct(List<String> act_idList); 									// 영업활동 삭제
	
	//List<EstVO> getEstList(String cust_id);										// 견적 리스트
	List<EstVO> getEstimList(String cust_id);									// 견적 리스트
	List<EstVO> elcList();														// 견적 단계 코드
	List<EstVO> eduList();														//
	List<EstVO> custEstimDetail(String estim_id);								// 견적 상세정보
	List<ProdVO> prodList(Map<String, Object> map);								// 상품 리스트
	int custEstimAdd(List<EstVO> estList);										// 견적 추가
	List<Object> custEestActOpptList(Map<String, Object> map);					// 견적에서 영업기회 팝업리스트
	int custEstimUpdate(Map<String, Object> map);								// 견적 수정
	String deleteEst(List<String> est_idList); 									// 견적 삭제
//	int custEstimDelete(String estim_id);										//견적 삭제
	
	contrVO getContCust(String cust_id); 										// 계약 기업고객 정보 가져오기
	
	
	CustCompVO custcompDetail(String nowCust_id);								
	int custcompAdd(CustCompVO ccVO);
	int custcompModify(CustCompVO ccVO);
	void custcompInsert(CustCompVO ccVO);
	void custcompEdit(CustCompVO ccVO);
	void custcompDelete(String cust_id);

	List<ActVO> actTypeCdList();												// 영업활동 유형코드
	List<ActVO> actStatCdList();												// 영업활동 상태코드
	List<ActVO> actDivCdList();													// 영업활동 구분코드

	int custActiveAdd(ActVO act);												// 영업활동 추가
	int custActiveUpdate(ActVO act);											// 영업활동 수정
	//int custActiveDelete(String cust_id);										// 영업활동 삭제
	int custtActiveDelete(String sales_actvy_id);								//// 영업활동 삭제

	ActVO actDetail(String actvyId);											// 영업활동 상세정보
	ActVO posDetail(String sales_actvy_id);										// 영업담당자 상세보기
	int custPosAdd(PosVO pos);													// 영업담당자 추가
	List<Object> custSaleActList(Map<String, Object> map);						// 영업담당자에서 영업활동리스트






}
