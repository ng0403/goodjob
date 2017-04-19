package com.crm.cp.sales.custcomp.dao;

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

public interface CustCompDao {
	
	// 기업고객 리스트 전체 개수 조회(페이징에 사용)
	int getCCListCount(Map<String, Object> pMap);
	
	List<CustCompVO> getCCList(Map<String, Object> pMap); 	// 기업고객 리스트 가져오기
	CustCompVO selectDetail(String cust_id);			  	// 기업고객 상세정보 가져오기
	int insertCustComp(CustCompVO ccVO); 					// 기업고객 추가
	int updateCustComp(CustCompVO ccVO); 					// 기업고객 수정
	int deleteCustComp(List<String> cust_idList); 			// 기업고객 삭제
	CustCompVO custcompDetail(String nowCust_id);
	int custcompAdd(CustCompVO ccVO);
	int custcompModify(CustCompVO ccVO);
	void custcompInsert(CustCompVO ccVO);
	void custcompEdit(CustCompVO ccVO);
	void custcompDelete(String cust_id);
	
	List<CustCompVO> selectIDC();	// 산업군 코드 가져오기
	List<CustCompVO> selectSSC(); 	// 매출규모 코드 가져오기
	List<CustCompVO> selectCCS(); 	// 기업상태 코드 가져오기
	List<CustCompVO> selectCDC(); 	// 고객사구분 코드 가져오기
	
	List<PocVO> getPocList(String cust_id);		//고객사 담당자 리스트
	
	List<PosVO> getPosList(String cust_id);		//영업 담당자 리스트
	
	List<KeymanVO> getKeymanList(String cust_id); 	// 키맨 리스트
	int insertKeyman(KeymanVO kVO); 				// 키맨 추가
	KeymanVO keymanDetail(String kmn_id); 			// 키맨 상세정보
	int deleteKeyman(KeymanVO kVO); 				// 키맨 수정
	int deleteKeyman(List<String> keyman_idList); 	// 키맨 삭제
	
	List<OpptVO> getOpptList(String cust_id); 		// 영업기회 리스트
	OpptVO ccOpptCustDetail(String cust_id); 		// 영업기회 팝업 고객정보 가져오기
	List<OpptVO> ccOpptPopList(String cust_id); 	// 영업기회 리스트 팝업
	int deleteOppt(List<String> oppt_idList); 		// 영업기회 삭제
	OpptVO ccOpptDetail(String sales_oppt_id); 		// 영업기회 상세정보
	
	List<ActVO> getActList(String cust_id); 		// 영업활동 리스트
	ActVO ccActCustDetail(String cust_id); 			// 영업활동 고객 정보
	int custActAdd(List<ActVO> actList);			// 영업활동 추가
	int deleteAct(List<String> act_idList); 		// 영업활동 삭제
	
	List<EstVO> elcList();
	List<EstVO> eduList();
	//List<EstVO> getEstList(String cust_id); 		// 견적 리스트
	List<EstVO> custEstimDetail(String estim_id);	// 견적 상상세보기
	List<ProdVO> prodList(Map<String, Object> map);	// 상품 목록
	int custEstimAdd(List<EstVO> estList);			// 견적 추가
	List<Object> custEstActOpptList(Map<String, Object> map); //견적추가에서 영업기회 팝업리스트
	int custEstimUpdate(Map<String, Object> map);   // 견적 수정
	int deleteEst(List<String> est_idList);	 		// 견적 삭제
//	int custEstimDelete(String estim_id);
	
	List<contrVO> getContList(String cust_id); 		// 계약 리스트
	contrVO getContCust(String cust_id); 			// 계약 기업고객 정보 가져오기
	
	int getEmpListNum(String iuser_nm); 						// 직원검색 리스트 개수
	List<CustCompVO> getEmpList(Map<String, Object> iuserMap); 	// 직원검색 리스트
	
	List<EstVO> getEstimList(String cust_id);

	List<ActVO> actTypeCdList();
	List<ActVO> actStatCdList();
	List<ActVO> actDivCdList();

	int custActiveAdd(ActVO act);			// 영업활동 추가
	int custActiveUpdate(ActVO act);		// 영업활동 수정
	int custActiveDelete(String sales_actvy_id);	// 영업활동 삭제
	ActVO actDetail(String sales_actvy_id);		// 영업활동 상세보기





	
	

	
 
} 
