package com.crm.cp.sales.custcomp.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.context.request.SessionScope;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custcomp.vo.OrganizationVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.custcomp.vo.PosVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.prod.vo.ProdVO;

@Repository
public class CustCompDaoImpl implements CustCompDao {

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	// 고객사 리스트 전체 개수 조회(페이징에 사용)
	@Override
	public int getCCListCount(Map<String, Object> pMap) {
		 
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("custcomp.ccListTotalCount", pMap);
			System.out.println("리스트 갯수 : " + pMap.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return totalCount;
	}
	
	// 고객사 삭제된 데이터 리스트 갯수 
	@Override
	public int getCCDelListCount(Map<String, Object> pMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("custcomp.ccListTotalCount_N", pMap);
			System.out.println("리스트 갯수 " + pMap.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return totalCount;
	}

	// 고객사 리스트 가져오기
	@Override
	public List<CustCompVO> getCCList(Map<String, Object> pMap) {
		
		List<CustCompVO> ccListVO = null;
		
		try {
			ccListVO = sqlSession.selectList("custcomp.custcompList", pMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccListVO;
	}

	// 고객사 상세보기
	@Override
	public CustCompVO custcompDetail(String nowCust_id) {
		CustCompVO ccVO = null;
		System.out.println("DAO : " + nowCust_id);
		ccVO = sqlSession.selectOne("custcomp.custcompDetail", nowCust_id);
		return ccVO;
	}

	// 고객사 추가
	@Override
	public void custcompInsert(CustCompVO ccVO) {
		sqlSession.insert("custcomp.custcompInsert", ccVO);
		
	}

	// 고객사 수정
	@Override
	public void custcompEdit(CustCompVO ccVO) {
		sqlSession.update("custcomp.custcompEdit", ccVO);
	}
	
	// 고객사 삭제
	@Override
	public int custcompDelete(CustCompVO ccVO) {
		
		int result = 0;
		result = sqlSession.update("custcomp.custcompDelete", ccVO);
		
		if (result == 1) {
			sqlSession.update("custcomp.custcompOpptDel", ccVO.getCust_id());
			sqlSession.update("custcomp.custcompActDel", ccVO.getCust_id());
			sqlSession.update("custcomp.custcompEstDel", ccVO.getCust_id());
		}
		return result;
	}

	// 매출규모 코드
	@Override
	public List<CustCompVO> selectSSC() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getSSC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}
	
	// 산업군 코드
	@Override
	public List<CustCompVO> selectIDC() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getIDC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}

	// 기업상태 코드
	@Override
	public List<CustCompVO> selectCCS() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getCCS");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}
	
	// 고객사구분 코드
	@Override
	public List<CustCompVO> selectCDC() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getCDC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}
	
	// 키맨 리스트 가져오기
	@Override
	public List<KeymanVO> getKeymanList(String cust_id) {
		List<KeymanVO> kmVOList = null;
		try {
			kmVOList = sqlSession.selectList("keymanList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return kmVOList;
	}

	// 키맨 추가
	@Override
	public int insertKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.insert("custcomp.addKeyman", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}

	// 키맨 삭제
	@Override
	public int deleteKeyman(KeymanVO kVO) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
				deleteResultTemp = sqlSession.delete("keymanDelete", kVO);
				deleteResult += deleteResultTemp;
		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
 
	// 키맨 상세정보
	@Override
	public KeymanVO keymanDetail(Map<String, Object> map) {
		KeymanVO kmVO = null;
		try {
			kmVO = sqlSession.selectOne("kmDetail", map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return kmVO;
	}

	// 키맨 수정
	@Override
	public int mdfyKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.update("mdyKeyman", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}
	
	//연락처 리스트 팝업
	@Override
	public List<Object> contactList() {
		System.out.println("연락처 리스트 dao get " );
		return sqlSession.selectList("contactListPop");
	}

	//연락처 리스트 팝업
	@Override
	public List<Object> contactList(Map<String, Object> map) {
		System.out.println("연락처 리스트 dao post");
		return sqlSession.selectList("contactListPop",map);
		
	}
	
	// 영업활동 리스트 가져오기
	@Override
	public List<ActVO> getActList(String cust_id) {
		List<ActVO> actVOList = null;
		try {
			actVOList = sqlSession.selectList("ccActList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return actVOList;
	}
	

	// 견적 리스트
	@Override
	public List<EstVO> getEstimList(String cust_id) {
		List<EstVO> estVOList = null;
		try {
			estVOList = sqlSession.selectList("custcomp.estimList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return estVOList;
	}
	
	// 견적단계 코드
	@Override
	public List<EstVO> elcList() {
		return sqlSession.selectList("custcomp.elcList");
	}

	@Override
	public List<EstVO> eduList() {
		return sqlSession.selectList("custcomp.eduList");
	}
	
	// 견적 상세보기
	@Override
	public List<EstVO> custEstimDetail(String estim_id) {
		System.out.println("++++여기닷 " + estim_id);
		EstVO detail = sqlSession.selectOne("custcomp.custEstimDetail", estim_id);
		List<EstVO> prod = sqlSession.selectList("custcomp.custEstimProdList", estim_id);
		prod.add(detail);

		return prod;
	}

	//상품 목록 
	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		return sqlSession.selectList("custcomp.prodList", map);
	}
	
	// 견적 추가
	@Override
	public int custEstimAdd(List<EstVO> estList) {
		
		int result = 0;

		result += sqlSession.insert("custcomp.estimateAdd", estList.get(0));
		if (result == 1) {

			for (int i = 1; i < estList.size(); i++) {
				estList.get(i).setEstim_seq(estList.get(0).getEstim_seq());
				result += sqlSession.insert("custcomp.estimateListAdd",	estList.get(i));
			}
		}
		if (result > 1) {
			result += sqlSession.insert("custcomp.soeAdd", estList.get(0));
			String sales_oppt_id = estList.get(0).getSales_oppt_id();
			sqlSession.update("estimate.opptLevMdfy",sales_oppt_id);
		}
		return result;
	}

	//견적 추가에서 영업기회 팝업 리스트
	@Override
	public List<Object> custEstActOpptList(Map<String, Object> map) {
		return sqlSession.selectList("estimate.estActOpptList",map);
	}
	
	// 견적 수정
	@Override
	public int custEstimUpdate(Map<String, Object> map) {
		List<EstVO> estList = (List<EstVO>) map.get("estList");
		List<String> prodAddId = (List<String>) map.get("prodAddId");
		List<String> prodDeleteProdId = (List<String>) map	.get("prodDeleteProdId");
		List<String> prodDeleteEstimId = (List<String>) map.get("prodDeleteEstimId");

		int result = 0;
		int insertResult = 0;
		int updateResult = 0;
		result += sqlSession.update("estimate.estimateUpdate", estList.get(0));
		if (result == 1) {

			for (int i = 1; i < estList.size(); i++) {
				estList.get(i).setEstim_id(estList.get(0).getEstim_id());
				int sw = 0;
				if (prodAddId != null && !prodAddId.isEmpty()) {
					for (int j = 0; j < prodAddId.size(); j++) {
						String id = prodAddId.get(j);
						if (estList.get(i).getProd_id().equals(id)) {
							insertResult += sqlSession.insert(
									"estimate.estimateListMdfyAdd",
									estList.get(i));
							sw = 1;
						}
					}
				}
				if (sw != 1) {
					result += sqlSession.update("estimate.estimateListUpdate",	estList.get(i));
				}
			}

			if (prodDeleteProdId != null && !prodDeleteProdId.isEmpty()) {
				String estim_id = prodDeleteEstimId.get(0);
				for (String prod_id : prodDeleteProdId) {
					Map<String, Object> idMap = new HashMap<String, Object>(0);
					idMap.put("prod_id", prod_id);
					idMap.put("estim_id", estim_id);
					updateResult += sqlSession.update("estimate.estimateListDelete", idMap);
				}
			}
		}
		return result;
	}
	

	// 견적 삭제
	@Override
	public int deleteEst(List<String> est_idList) {
		int deleteResult = 0;
		try {
			for (int i = 0; i < est_idList.size(); i++) {
				deleteResult += sqlSession.update("custcomp.estimateDelete", est_idList.get(i));
				deleteResult += sqlSession.update("custcomp.estListDelete", est_idList.get(i));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
	
	// 직원검색 리스트 개수
	@Override
	public int getEmpListNum(String iuser_nm) {
		int empListNum = 0;
		try {
			empListNum = sqlSession.selectOne("empListNum", iuser_nm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empListNum;
	}

	// 직원 검색 리스트
	@Override
	public List<CustCompVO> getEmpList(Map<String, Object> iuserMap) {
		List<CustCompVO> empVOList = null;
		try {
			empVOList = sqlSession.selectList("custcomp.empList", iuserMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empVOList;
	}
	
	@Override
	public List<ActVO> actTypeCdList() {
		return sqlSession.selectList("custcomp.actTypeCdList");
	}

	@Override
	public List<ActVO> actStatCdList() {
		return sqlSession.selectList("custcomp.actStatCdList");
	}

	@Override
	public List<ActVO> actDivCdList() {
		return sqlSession.selectList("custcomp.actDivCdList");
	}

	// 영업활동 추가
	@Override
	public int custActiveAdd(ActVO act) {
		return sqlSession.insert("custcomp.actListAdd", act);
	}
	
	// 영업활동 수정
	@Override
	public int custActiveUpdate(ActVO act) {
		return sqlSession.update("custcomp.custActiveUpdate", act);
	}

	// 영업활동 삭제
	@Override
	public int custActiveDelete(String sales_actvy_id) {
		return sqlSession.update("custcomp.ccActDelete", sales_actvy_id);
	}

	// 영업활동 상세보기
	@Override
	public ActVO actDetail(String sales_actvy_id) {
		return sqlSession.selectOne("custcomp.actDetail", sales_actvy_id);
	}

	// 고객사 삭제된 데이터 리스트
	@Override
	public List<CustCompVO> getCCDelList(Map<String, Object> pMap) {
		List<CustCompVO> ccListVO = null;
		try {
			ccListVO = sqlSession.selectList("custcomp.custcompDelList", pMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccListVO;
	}

	// 고객사 삭제된 데이터 상세보기
	@Override
	public CustCompVO selectDelDetail(String cust_id) {
		CustCompVO ccVO = null;
		try {
			ccVO = sqlSession.selectOne("custcomp.custcompDelDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccVO;
	}

	// 고객사 삭제된 데이터 복원(수정)
	@Override
	public void custcompDelEdit(CustCompVO ccVO) {
		sqlSession.update("custcomp.custcompDelEdit", ccVO);
		sqlSession.update("custcomp.custcompOpptRb", ccVO);
		sqlSession.update("custcomp.custcompActRb", ccVO);
		sqlSession.update("custcomp.custcompEstRb", ccVO);
	}

	// 고객사 삭제된 데이터 완전삭제
	@Override
	public int custcompDelDelete(String cust_id) {
		int result = sqlSession.update("custcomp.custcompDelDelete", cust_id);
		return result;
	}

	// 담당사원 전체 리스트 개수
	@Override
	public int custcompMngListCount(Map<String, Object> pMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("custcomp.selectMngTotalCount", pMap);
			 
		} catch (Exception e) {
			e.printStackTrace();
		}
		return totalCount;
	}

	// 담당사원 전체 리스트
	@Override
	public List<PocVO> custcompMngAllList(Map<String, Object> pMap) {
		List<PocVO> obj = sqlSession.selectList("custcomp.custcompMngAllList", pMap);
		return obj;
	}
	
	// 담당사원 고객사 있는 리스트 
	@Override
	public List<PocVO> custcompMngCklList(Map<String, Object> pMap) {
		List<PocVO> obj = sqlSession.selectList("custcomp.custcompMngCklList", pMap);
		return obj;
	}
	
	// 담당사원 부서 가져오기
	@Override
	public List<OrganizationVO> orgCdList() {
		return sqlSession.selectList("custcomp.orgList");
	}

	// 담당사원 상세보기
	@Override
	public PocVO custcompMngDetail(PocVO pocVO) {
		PocVO pocVOList = null;
		pocVOList =sqlSession.selectOne("custcomp.custcompMngDetail", pocVO);
		return pocVOList;
	}
	
	// 담당사원 등록
	@Override
	public void custcompMngInsert(PocVO pocVO) {
		sqlSession.insert("custcomp.custcompMngInsert", pocVO);
	}

	// 담당사원 수정
	@Override
	public int ccMngEdit(IuserVO iuserVo) {
		
		int result = sqlSession.update("custcomp.custcompMngEdit", iuserVo);
		return result;
	}

	// 엑셀 출력
	@Override
	public List<CustCompVO> custcompExcel(Map<String, Object> pMap) {
		
		List<CustCompVO> custcompExcel = null;
		
		try {
			
			custcompExcel = sqlSession.selectList("custcomp.custcompExcel", pMap);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return custcompExcel;
	}

	// 엑셀 출력(검색조건에 맞는 리스트)
	@Override
	public List<CustCompVO> custcompSchExcel(Map<String, Object> ccMap) {
		
		List<CustCompVO> custcompSchExcel = null;
		
		try {
			custcompSchExcel = sqlSession.selectList("custcomp.custcompExcel", ccMap);
			System.out.println("custcompSchExcel Dao Impl : " + custcompSchExcel);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return custcompSchExcel;
	}
}
