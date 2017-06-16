package com.crm.cp.sales.custcomp.dao;

import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custcomp.vo.OrganizationVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.custcomp.vo.PosVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.prod.vo.ProdVO;

public interface CustCompDao {
	
	int getCCListCount(Map<String, Object> pMap);					// 고객사 리스트 전체 개수 조회(페이징에 사용)
	int getCCDelListCount(Map<String, Object> pMap);				// 고객사 삭제된 데이터 리스트 갯수 조회(페이징에 사용)
	List<CustCompVO> getCCList(Map<String, Object> pMap); 			// 기업고객 리스트 가져오기
	
	List<CustCompVO> selectIDC();									// 산업군 코드 가져오기
	List<CustCompVO> selectSSC(); 									// 매출규모 코드 가져오기
	List<CustCompVO> selectCCS(); 									// 기업상태 코드 가져오기
	List<CustCompVO> selectCDC(); 									// 고객사구분 코드 가져오기
	
	int getEmpListNum(String iuser_nm); 							// 직원검색 리스트 개수
	List<CustCompVO> getEmpList(Map<String, Object> iuserMap); 		// 직원검색 리스트
	
	List<KeymanVO> getKeymanList(String cust_id); 					// 키맨 리스트
	int insertKeyman(KeymanVO kVO); 								// 키맨 추가
	KeymanVO keymanDetail(Map<String, Object> map); 				// 키맨 상세정보
	int mdfyKeyman(KeymanVO kVO); 									// 키맨 수정
	int deleteKeyman(KeymanVO kVO); 								// 키맨 삭제
	List<Object> contactList();										// 연락처 리스트 팝업
	List<Object> contactList(Map<String, Object> map);				// 연락처 리스트 팝업
	
	List<EstVO> elcList();											// 견적 단계 코드
	List<EstVO> eduList();											// 견적 코드
	List<EstVO> getEstimList(String cust_id);						// 견적 리스트
	List<EstVO> custEstimDetail(String estim_id);					// 견적 상상세보기
	List<ProdVO> prodList(Map<String, Object> map);					// 상품 목록
	int custEstimAdd(List<EstVO> estList);							// 견적 추가
	List<Object> custEstActOpptList(Map<String, Object> map); 		// 견적추가에서 영업기회 팝업리스트
	int custEstimUpdate(Map<String, Object> map);   				// 견적 수정
	int deleteEst(List<String> est_idList);	 						// 견적 삭제

	CustCompVO custcompDetail(String nowCust_id);					// 고객사 상세보기
	void custcompInsert(CustCompVO ccVO);							// 고객사 추가
	void custcompEdit(CustCompVO ccVO);								// 고객사 수정
	int custcompDelete(CustCompVO ccVO);							// 고객사 삭제
	
	List<ActVO> actTypeCdList();									// 영업활동 유형코드
	List<ActVO> actStatCdList();									// 영업활동 상태코드
	List<ActVO> actDivCdList();										// 영업활동 구분코드
	
	List<ActVO> getActList(String cust_id); 						// 영업활동 리스트
	int custActiveAdd(ActVO act);									// 영업활동 추가
	int custActiveUpdate(ActVO act);								// 영업활동 수정
	int custActiveDelete(String sales_actvy_id);					// 영업활동 삭제
	ActVO actDetail(String sales_actvy_id);							// 영업활동 상세보기
	
	List<CustCompVO> getCCDelList(Map<String, Object> pMap);		// 고객사 삭제된 데이터 리스트
	CustCompVO selectDelDetail(String cust_id);						// 고객사 삭제된 데이터 상세보기
	void custcompDelEdit(CustCompVO ccVO);							// 고객사 삭제된 데이터 복원(수정)
	int custcompDelDelete(String cust_id);							// 고객사 삭제된 데이터 완전삭제
	
	int custcompMngListCount(Map<String, Object> ccMngMap);			// 담당사원 전체 리스트 개수 
	List<PocVO> custcompMngCklList(Map<String, Object> pMap);		// 담당사원 고객사 있는 리스트	
	List<PocVO> custcompMngAllList(Map<String, Object> ccMngMap);   // 담당사원 전체 리스트
	List<OrganizationVO> orgCdList();								// 담당사원 부서 가져오기		
	PocVO custcompMngDetail(PocVO pocVO);							// 담당사원 상세보기
	void custcompMngInsert(PocVO pocVO);							// 담당사원 등록
	int ccMngEdit(IuserVO iuserVo);									// 담당사원 수정
	
	List<CustCompVO> custcompExcel(Map<String, Object> pMap);		// 엑셀 출력
	List<CustCompVO> custcompSchExcel(Map<String, Object> ccMap);	// 엑셀 출력(검색조건에 맞는 리스트)
	
} 
