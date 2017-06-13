package com.crm.cp.sales.custcomp.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.context.request.SessionScope;

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
			System.out.println("고객사 리스트 DAOImple : " + pMap.get("page"));
			ccListVO = sqlSession.selectList("custcomp.custcompList", pMap);
			System.out.println("고객사 리스트 ccListVO" + ccListVO.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccListVO;
	}

	// 기업고객 상세정보
	@Override
	public CustCompVO selectDetail(String cust_id) {
		CustCompVO ccVO = null;
		try {
			ccVO = sqlSession.selectOne("custCompDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccVO;
	}

	// 기업고객 추가
	@Override
	public int insertCustComp(CustCompVO ccVO) {
//		int inputResultTemp = 0;
//		int inputResult = 0;
//		try {
//			inputResultTemp = sqlSession.insert("custInput", ccVO);
//			inputResult += inputResultTemp;
//			//inputResultTemp = 0;
//			//inputResultTemp = sqlSession.insert("custCompInput", ccVO);
//			//inputResult += inputResultTemp;
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return inputResult;
		int seq = sqlSession.insert("custInput", ccVO);
		return seq;
	}
	
	// 기업고객 수정
	@Override
	public int updateCustComp(CustCompVO ccVO) {
		int updateResultTemp = 0;
		int updateResult = 0;
		try {
			updateResultTemp = sqlSession.update("custUpdate", ccVO);
			updateResult += updateResultTemp;
			//updateResultTemp = 0;
			//updateResultTemp = sqlSession.update("custCompUpdate", ccVO);
			//updateResult += updateResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updateResult;
	}
	
	// 기업고객 삭제
	@Override
	public int deleteCustComp(List<String> cust_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < cust_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("custDelete", cust_idList.get(i));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
	
	 // 고객사 상세보기
	@Override
	public CustCompVO custcompDetail(String nowCust_id) {
		CustCompVO ccVO = null;
		System.out.println("DAO : " + nowCust_id);
		ccVO = sqlSession.selectOne("custcomp.custcompDetail", nowCust_id);
		return ccVO;
	}
	
	
	// 기업고객 추가 
	@Override
	public int custcompAdd(CustCompVO ccVO) {
		int seq = sqlSession.insert("custcomp.custcompAdd", ccVO);
		return seq;
	}

	// 기업고객 수정
	@Override
	public int custcompModify(CustCompVO ccVO) {
		return sqlSession.update("custcomp.custUpdate", ccVO);
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
			System.out.println("영업기회 삭제");
			sqlSession.update("custcomp.custcompActDel", ccVO.getCust_id());
			System.out.println("영업활동 삭제");
			sqlSession.update("custcomp.custcompEstDel", ccVO.getCust_id());
			System.out.println("견적 삭제");
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
	
	
	//고객사 담당자 리스트 가져오기
	@Override
	public List<PocVO> getPocList(String cust_id) {
		List<PocVO> pocVOList = null;
		try {
			pocVOList = sqlSession.selectList("custcomp.pocList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return pocVOList;
	}
	
	
	//영업 담당자 리스트
	@Override
	public List<PosVO> getPosList(String cust_id) {
		List<PosVO> posVOList = null;
		try {
			posVOList = sqlSession.selectList("custcomp.posList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return posVOList;
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
/*			for (int i = 0; i < keyman_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("keymanDelete", keyman_idList.get(i));
				deleteResult += deleteResultTemp;
			}*/
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
	
	// 영업기회 리스트 가져오기
	@Override
	public List<OpptVO> getOpptList(String cust_id) {
		List<OpptVO> opptVOList = null;
		try {
			opptVOList = sqlSession.selectList("ccOpptList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVOList;
	}
	
	// 영업기회 고객정보 가져오기
	@Override
	public OpptVO ccOpptCustDetail(String cust_id) {
		OpptVO opptVO = null;
		try {
			opptVO = sqlSession.selectOne("ccOpptCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVO;
	}
	
	// 영업기회 리스트 팝업
		@Override
		public List<OpptVO> ccOpptPopList(String cust_id) {
			List<OpptVO> opptList = null;
			try {
				opptList = sqlSession.selectList("ccOpptPopList", cust_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return opptList;
		}
		
	// 영업기회 삭제
	@Override
	public int deleteOppt(List<String> oppt_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < oppt_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("ccOpptDelete", oppt_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 영업기회 상세정보
	@Override
	public OpptVO ccOpptDetail(String sales_oppt_id) {
		OpptVO opptVO = null;
		try {
			opptVO = sqlSession.selectOne("ccOpptDetail", sales_oppt_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVO;
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
	
	// 영업활동 고객정보
	@Override
	public ActVO ccActCustDetail(String cust_id) {
		ActVO ccActVO = null;
		try {
			ccActVO = sqlSession.selectOne("ccActCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccActVO;
	}

	// 영업활동 추가
	@Override
	public int custActAdd(List<ActVO> actList) {
		
		int result = 0;

		result += sqlSession.insert("custcomp.estimateAdd", actList.get(0));
		System.out.println("result 1: " + result);
		if (result == 1) {

			for (int i = 1; i < actList.size(); i++) {
				System.out.println("custEstimdd : " + actList.get(i).toString());
				//actList.get(i).setEstim_seq(actList.get(0).getEstim_seq());
				result += sqlSession.insert("custcomp.actListAdd",	actList.get(i));
				System.out.println("result 2: " + result);

			}
		}
		return result;
	}
	
	
	// 영업활동 삭제
	@Override
	public int deleteAct(List<String> act_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < act_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("ccActDelete", act_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
	
	
	// 견적 리스트 가져오기
//	@Override
//	public List<EstVO> getEstList(String cust_id) {
//		List<EstVO> estVOList = null;
//		try {
//			estVOList = sqlSession.selectList("ccEstList", cust_id);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return estVOList;
//	}
	
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

		System.out.println("고객 아이디 : " + estList);
		result += sqlSession.insert("custcomp.estimateAdd", estList.get(0));
		System.out.println("result 1: " + result);
		if (result == 1) {

			for (int i = 1; i < estList.size(); i++) {
				System.out.println("custEstimdd : " + estList.get(i).toString());
				estList.get(i).setEstim_seq(estList.get(0).getEstim_seq());
				result += sqlSession.insert("custcomp.estimateListAdd",	estList.get(i));
				System.out.println("result 2: " + result);

			}
		}
		if (result > 1) {
			result += sqlSession.insert("custcomp.soeAdd", estList.get(0));
			System.out.println("result 3: " + result);
			String sales_oppt_id = estList.get(0).getSales_oppt_id();
			sqlSession.update("estimate.opptLevMdfy",sales_oppt_id);
		}
		System.out.println("result sum: " + result);
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
//	@Override
//	public int custEstimDelete(String estim_id) {
//		int result = 0;
//
//		result += sqlSession.update("custcomp.estimateDelete", estim_id);
//		result += sqlSession.update("custcomp.estListDelete", estim_id);
//		System.out.println("delete result : " + result);
//
//		return result;
//	}
	
	
	// 계약 리스트 가져오기
	@Override
	public List<contrVO> getContList(String cust_id) {
		List<contrVO> contVOList = null;
		try {
			contVOList = sqlSession.selectList("ccContList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contVOList;
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

	
	// 계약 기업고객 정보 가져오기
	@Override
	public contrVO getContCust(String cust_id) {
		contrVO contrVO = null;
		try {
			contrVO = sqlSession.selectOne("ccContCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contrVO;
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

	// 영업담당자 추가
	@Override
	public int custPosAdd(PosVO pos) {
		return sqlSession.insert("custcomp.posListAdd", pos);
	}

	//영업담당자에서 영업활동 리스트 
	@Override
	public List<Object> custSaleActList(Map<String, Object> map) {
		return sqlSession.selectList("custcomp.actList",map);
	}

	//영업담당자 상세보기
	@Override
	public PosVO posDetail(Map<String, String> map) {
		return sqlSession.selectOne("custcomp.posDetail", map);
	}

	
	@Override
	public List<Object> searchList(String root, Map<String, Object> map)
			throws Exception {
		List<Object> lists = null;
		try {
			lists = (List<Object>)sqlSession.selectList(root, map);
		} catch (Exception e) {
			System.out.println(e.toString());
			
			throw e;
		}		
		return lists;
	}

	//영업 담당자 수정
	@Override
	public int custSaleActUpdate(PosVO pos) {
		return sqlSession.update("custcomp.custSaleActUpdate", pos);
	}

	//영업 담당자 삭제
//	@Override
//	public int custSaleActDelete(String sales_actvy_id) {
//		return sqlSession.update("custcomp.custSaleActDelete", sales_actvy_id);
//	}

	//영업 담당자 삭제
	@Override
	public int custSaleActDelete(PosVO pos) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
				deleteResultTemp = sqlSession.delete("custcomp.custSaleActDelete", pos);
				deleteResult += deleteResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
	
	// 고객사 삭제된 데이터 리스트
	@Override
	public List<CustCompVO> getCCDelList(Map<String, Object> pMap) {
		System.out.println("custcompDelList");
		List<CustCompVO> ccListVO = null;
		try {
			System.out.println("DAOImple : " + pMap.get("page"));
			ccListVO = sqlSession.selectList("custcomp.custcompDelList", pMap);
			System.out.println("custcompDelList: " + ccListVO.toString());
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
		System.out.println("복원시 데이터 ccVO :" + ccVO);
		sqlSession.update("custcomp.custcompDelEdit", ccVO);
		sqlSession.update("custcomp.custcompOpptRb", ccVO);
		sqlSession.update("custcomp.custcompActRb", ccVO);
		sqlSession.update("custcomp.custcompEstRb", ccVO);
		
	}

	// 고객사 삭제된 데이터 완전삭제
	@Override
	public int custcompDelDelete(String cust_id) {
		System.out.println("고객사 완전삭제 : " + cust_id);
		int result = sqlSession.update("custcomp.custcompDelDelete", cust_id);
		return result;
	}

	
	// 담당사원 전체 리스트 개수
	@Override
	public int custcompMngListCount(Map<String, Object> pMap) {
		System.out.println("custcompMng Map Dao "  + pMap.toString());
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
//		System.out.println(pocVOList);
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
	public List<CustCompVO> custcompExcel(Map<String, Object> ccMap) {
		
		List<CustCompVO> custcompExcel = null;
		
		try {
			
			custcompExcel = sqlSession.selectList("custcomp.custcompExcel", ccMap);
			System.out.println("custcompExcel Dao Impl : " + custcompExcel);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return custcompExcel;
	}

	
	
	
	
}
