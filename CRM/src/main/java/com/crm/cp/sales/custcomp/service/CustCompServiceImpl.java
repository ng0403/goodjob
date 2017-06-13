package com.crm.cp.sales.custcomp.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.dao.CustCompDao;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custcomp.vo.OrganizationVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.custcomp.vo.PosVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Service
public class CustCompServiceImpl implements CustCompService {

	@Resource
	CustCompDao ccDao;

	// 기존고객 리스트 전체 개수 조회(페이징에 사용)
	@Override
	public PagerVO getCCListCount(Map<String, Object> pMap) {
		int ccPageNum = (Integer) pMap.get("ccPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(ccPageNum, 0, 10, 10);
		// 전체 글의 갯수 구하기
		int totalRowCount = ccDao.getCCListCount(pMap);
		page = new PagerVO(ccPageNum, totalRowCount, 10, 10);

		return page;
	}

	// 고객사 삭제된 데이터 리스트 
	@Override
	public PagerVO getCCDelListCount(Map<String, Object> pMap) {
		int ccPageNum = (Integer) pMap.get("ccPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(ccPageNum, 0, 10, 10);
		// 전체 글의 갯수 구하기
		int totalRowCount = ccDao.getCCDelListCount(pMap);
		page = new PagerVO(ccPageNum, totalRowCount, 10, 10);

		return page;
	}
	
	// 기존고객 리스트
	@Override
	public List<CustCompVO> getCCList(Map<String, Object> pMap) {
		List<CustCompVO> ccVOList = ccDao.getCCList(pMap);
		return ccVOList;
	}

	// 기존고객 상세정보+코드
	@Override
	public CustCompVO getCCDetail(String cust_id) {
		// 상세정보
		CustCompVO ccVO = ccDao.selectDetail(cust_id);
		String zip_cd = ccVO.getCust_zip_cd();
		ccVO.setCust_zip_cd1(zip_cd.substring(0, 2));
		ccVO.setCust_zip_cd2(zip_cd.substring(3, 5));

		return ccVO;
	}

	// 기존고객 추가
	@Override
	public String insertCustComp(CustCompVO ccVO) {
		//ccVO.setCust_zip_cd(ccVO.getCust_zip_cd1()+ccVO.getCust_zip_cd2());
		int inputResult = ccDao.insertCustComp(ccVO);
		
		String resultStr = null;
		if(inputResult == 2){
			resultStr = "새로운 기업고객 등록이 완료 되었습니다.";
		} else {
			resultStr = "기업고객 등록에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 기존고객 수정
	@Override
	public String updateCustComp(CustCompVO ccVO) {
		ccVO.setCust_zip_cd(ccVO.getCust_zip_cd1()+ccVO.getCust_zip_cd2());
		
		int updateResult = ccDao.updateCustComp(ccVO);
		
		String resultStr = null;
		if(updateResult == 2){
			resultStr = "기업고객 수정이 완료 되었습니다.";
		} else {
			resultStr = "기업고객 수정에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 기존고객 삭제
	@Override
	public String deleteCustComp(List<String> cust_idList) {
		int deleteResult = ccDao.deleteCustComp(cust_idList);
		String resultStr = null;
		if(deleteResult == cust_idList.size()){
			resultStr = "기업고객 삭제가 완료 되었습니다.";
		} else {
			resultStr = "기업고객 삭제에 실패 했습니다.";
		}
		return resultStr;
	}
	
	//기존고객 추가
	@Override
	public int custcompAdd(CustCompVO ccVO) {
		return ccDao.custcompAdd(ccVO);
	}
	
	//기존고객 수정
	@Override
	public int custcompModify(CustCompVO ccVO) {
		return ccDao.custcompModify(ccVO);
	}
	
	//기존고객 추가
	@Override
	public void custcompInsert(CustCompVO ccVO) {
		ccDao.custcompInsert(ccVO);
		
	}

	//기존고객 수정
	@Override
	public void custcompEdit(CustCompVO ccVO) {
		ccDao.custcompEdit(ccVO);
		
	}

	//기존고객 삭제
	@Override
	public int custcompDelete(CustCompVO ccVO) {
		
		return ccDao.custcompDelete(ccVO);
	}

	
	// 매출규모 코드
	@Override
	public List<CustCompVO> selectSSC() {
		List<CustCompVO> SSCCodeList = ccDao.selectSSC();
		return SSCCodeList;
	}

	// 산업군 코드
	@Override
	public List<CustCompVO> selectIDC() {
		List<CustCompVO> IDCCodeList = ccDao.selectIDC();
		return IDCCodeList;
	}

	// 기업 상태 코드
	@Override
	public List<CustCompVO> selectCCS() {
		List<CustCompVO> CCSCodeList = ccDao.selectCCS();
		return CCSCodeList;
	}
	
	// 고객사구분 코드
	@Override
	public List<CustCompVO> selectCDC() {
		List<CustCompVO> CDCCodeList = ccDao.selectCDC();
		return CDCCodeList;
	}


	//고객사 담당자 리스트
	@Override
	public List<PocVO> getPocList(String cust_id) {
		List<PocVO> pocVOList = ccDao.getPocList(cust_id);
		return pocVOList;
	}
	
	
	//영업 담당자 리스트
	@Override
	public List<PosVO> getPosList(String cust_id) {
		List<PosVO> posVOList = ccDao.getPosList(cust_id);
		return posVOList;
	}

	// 키맨 삭제
//	@Override
//	public String deleteKeyman(List<String> keyman_idList) {
//		int deleteResult = ccDao.deleteKeyman(keyman_idList);
//		String resultStr = null;
//		if(deleteResult == keyman_idList.size()){
//			resultStr = "키맨 삭제가 완료 되었습니다.";
//		} else {
//			resultStr = "키맨 삭제에 실패 했습니다.";
//		}
//		return resultStr;
//	}

	// 키맨 리스트
	@Override
	public List<KeymanVO> getKeymanList(String cust_id) {
		List<KeymanVO> kmVOList = ccDao.getKeymanList(cust_id);
		return kmVOList;
	}
	// 키맨 추가
	@Override
	public String insertKeyman(KeymanVO kVO) {
		int kmRst = ccDao.insertKeyman(kVO);
		
		String kmRstStr = null;
		if(kmRst == 1){
			kmRstStr = "새로운 키맨 등록이 완료되었습니다.";
		}else {
			kmRstStr = "키맨 등록에 실패했습니다.";
		}
		return kmRstStr;
	}

	// 키맨 삭제
	@Override
	public String deleteKeyman(KeymanVO kVO) {
		int deleteResult = ccDao.deleteKeyman(kVO);
		System.out.println("과연 무엇일까" + deleteResult);
		String resultStr = null;
		/*if(deleteResult == keyman_idList.size()){
			resultStr = "키맨 삭제가 완료 되었습니다.";
		} else {
			resultStr = "키맨 삭제에 실패 했습니다.";
		}*/
		if(deleteResult == 1)
		{
			resultStr = "키맨 삭제가 완료 되었습니다.";
		}
		else{
			resultStr = "키맨 삭제에 실패 했습니다.";
					
		}
		return resultStr;
	}

	// 키맨 상세정보
			@Override
			public KeymanVO keymanDetail(Map<String, Object> map) {
				KeymanVO kmVO = ccDao.keymanDetail(map);
				return kmVO;
			}
	
	// 키맨 수정
	@Override
	public String mdfyKeyman(KeymanVO kVO) {
		int mdfyResult = ccDao.mdfyKeyman(kVO);
		String resultStr = null;
		if(mdfyResult == 1){
			resultStr = "키맨 수정이 완료 되었습니다.";
		} else {
			resultStr = "키맨 수정에 실패 했습니다.";
		}
		return resultStr;
	}
	
	
	//연락처 리스트 팝업
	@Override
	public List<Object> contactList() {
		return ccDao.contactList();
	}
	
	//연락처 리스트 팝업
	@Override
	public List<Object> contactList(Map<String, Object> map) {
		return ccDao.contactList(map);
	}
	
	// 영업기회 리스트
	@Override
	public List<OpptVO> getOpptList(String cust_id) {
		List<OpptVO> opptVOList = ccDao.getOpptList(cust_id);
		return opptVOList;
	}
	
	// 영업기회 리스트 팝업
	@Override
	public List<OpptVO> ccOpptPopList(String cust_id) {
		List<OpptVO> opptList = ccDao.ccOpptPopList(cust_id);
		return opptList;
	}

	@Override
	public CustCompVO custcompDetail(String nowCust_id) {
		CustCompVO ccVO = ccDao.custcompDetail(nowCust_id);
		return ccVO;
	}
	
	// 영업기회 팝업 고객정보 가져오기
	@Override
	public OpptVO ccOpptCustDetail(String cust_id) {
		OpptVO opptVO = ccDao.ccOpptCustDetail(cust_id);
		return opptVO;
	}

	// 영업기회 삭제
	@Override
	public String deleteOppt(List<String> oppt_idList) {
		int deleteResult = ccDao.deleteOppt(oppt_idList);
		String resultStr = null;
		if(deleteResult == oppt_idList.size()){
			resultStr = "영업기회 삭제가 완료 되었습니다.";
		} else {
			resultStr = "영업기회 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	// 영업기회 상세정보
	@Override
	public OpptVO ccOpptDetail(String sales_oppt_id) {
		OpptVO opptVO = ccDao.ccOpptDetail(sales_oppt_id);
		return opptVO;
	}
	
	// 영업활동 리스트
	@Override
	public List<ActVO> getActList(String cust_id) {
		List<ActVO> actVOList = ccDao.getActList(cust_id);
		return actVOList;
	}

	// 영업활동 고객 정보
	@Override
	public ActVO ccActCustDetail(String cust_id) {
		ActVO ccActVO = ccDao.ccActCustDetail(cust_id);
		return ccActVO;
	}
	
	// 영업활동 추가
	@Override
	public int custActAdd(List<ActVO> actList) {
		return ccDao.custActAdd(actList);
	}
	
	// 영업활동 삭제
	@Override
	public String deleteAct(List<String> act_idList) {
		int deleteResult = ccDao.deleteAct(act_idList);
		String resultStr = null;
		if(deleteResult == act_idList.size()){
			resultStr = "영업활동 삭제가 완료 되었습니다.";
		} else {
			resultStr = "영업활동 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	
	
	@Override
	public List<EstVO> elcList() {
		return ccDao.elcList();
	}

	@Override
	public List<EstVO> eduList() {
		return ccDao.eduList();
	}

	// 견적 리스트
//	@Override
//	public List<EstVO> getEstList(String cust_id) {
//		List<EstVO> estVOList = ccDao.getEstList(cust_id);
//		return estVOList;
//	}
	//견적 리스트
	@Override
	public List<EstVO> getEstimList(String cust_id) {
		List<EstVO> estVOList = ccDao.getEstimList(cust_id);
		return estVOList;
	}
	
	//견적 상세보기
	@Override
	public List<EstVO> custEstimDetail(String estim_id) {
		System.out.println("service : " + estim_id);
		List<EstVO> result = ccDao.custEstimDetail(estim_id); 
		System.out.println("service result : "+ result);
		return result;
	}

	//상품 목록 보기
	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		return ccDao.prodList(map);
	}

	//견적 추가
	@Override
	public int custEstimAdd(List<EstVO> estList) {
		return ccDao.custEstimAdd(estList);
	}
	
	//견적 추가에서 영업기회 팝업 리스트
	@Override
	public List<Object> custEestActOpptList(Map<String, Object> map) {
		return ccDao.custEstActOpptList(map);
	}

	//견적 수정
	@Override
	public int custEstimUpdate(Map<String, Object> map) {
		return ccDao.custEstimUpdate(map);
	}

	// 견적 삭제
	@Override
	public String deleteEst(List<String> est_idList) {
		int deleteResult = ccDao.deleteEst(est_idList);
		String resultStr = null;
		if(deleteResult > 0){
			resultStr = "견적 삭제가 완료 되었습니다.";
		} else {
			resultStr = "견적 삭제에 실패 했습니다.";
		}
		return resultStr;
	}
//	@Override
//	public int custEstimDelete(String estim_id) {
//		return ccDao.custEstimDelete(estim_id);
//	}
	
	
	// 계약 리스트
	@Override
	public List<contrVO> getContList(String cust_id) {
		List<contrVO> contVOList = ccDao.getContList(cust_id);

		return contVOList;
	}

	// 직원검색 리스트 개수
	@Override
	public PagerVO getEmpListNum(int iuserPageNum, String iuser_nm) {
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(iuserPageNum, 0, 15, 10);
		// 전체 글의 갯수 구하기
		int empListNum = ccDao.getEmpListNum(iuser_nm);
		
		page = new PagerVO(iuserPageNum, empListNum, 15, 10);
		page.setTotalCount(empListNum);
				
		return page;
	}

	// 직원검색 리스트
	@Override
	public List<CustCompVO> getEmpList(Map<String, Object> iuserMap, PagerVO page) {
		
		iuserMap.put("startRow", page.getStartRow());
		iuserMap.put("endRow", page.getEndRow());
		List<CustCompVO> empVOList = ccDao.getEmpList(iuserMap);

		return empVOList;
	}


	// 계약 기업고객 정보 가져오기
	@Override
	public contrVO getContCust(String cust_id) {
		contrVO contVO = ccDao.getContCust(cust_id);
		return contVO;
	}

	@Override
	public List<ActVO> actTypeCdList() {
		return ccDao.actTypeCdList();
	}

	@Override
	public List<ActVO> actStatCdList() {
		return ccDao.actStatCdList();
	}

	@Override
	public List<ActVO> actDivCdList() {
		return ccDao.actDivCdList();
	}

	// 영업활동 추가 
	@Override
	public int custActiveAdd(ActVO act) {
		return ccDao.custActiveAdd(act);
	}

	// 영업활동 수정
	@Override
	public int custActiveUpdate(ActVO act) {
		return ccDao.custActiveUpdate(act);
	}

	// 영업활동 삭제
//	@Override
//	public int custActiveDelete(String cust_id) {
//		return ccDao.custActiveDelete(cust_id);
//	}

	// 영업활동 상세정보
	@Override
	public ActVO actDetail(String sales_actvy_id) {
		return ccDao.actDetail(sales_actvy_id);
	}

	@Override
	public int custtActiveDelete(String sales_actvy_id) {
		return ccDao.custActiveDelete(sales_actvy_id);
	}

	//영업담당자 상세보기
//	@Override
//	public PosVO posDetail(String sales_actvy_id) {
//		return ;
//	}

	//영업담당자 추가
	@Override
	public int custPosAdd(PosVO pos) {
		return ccDao.custPosAdd(pos);
	}

	//영업담당자에서 영업활동 리스트 팝업
	@Override
	public List<Object> custSaleActList(Map<String, Object> map) {
		return ccDao.custSaleActList(map);
	}

	//영업담당자에서 사원 리스트
//	@Override
//	public List<Object> custSaleActIuserList(Map<String, Object> map) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	//영업담당자에서 사원 리스트
	@Override
	public List<Object> iuserList(Map<String, Object> map) {
		List<Object> list=null;
		
		try{
			list=ccDao.searchList("custcomp.userSelect", map);
		} catch(Exception e) {
			System.out.println(e.toString());
		}
		
		return list;
	}
	
	//영업담당자 수정
	@Override
	public int custSaleActUpdate(PosVO pos) {
		return ccDao.custSaleActUpdate(pos);
	}

	//영업담당자 삭제
//	@Override
//	public int custSaleActDelete(String sales_actvy_id) {
//		return ccDao.custSaleActDelete(sales_actvy_id);
//	}

	@Override
	public PosVO posDetail(Map<String, String> map) {
		// TODO Auto-generated method stub
		return ccDao.posDetail(map);
	}

	//영업담당자 삭제
	@Override
	public String custSaleActDelete(PosVO pos) {
		int deleteResult = ccDao.custSaleActDelete(pos);
		System.out.println("과연 무엇일까" + deleteResult);
		String resultStr = null;
		if(deleteResult == 1)
		{
			resultStr = "삭제가 완료 되었습니다.";
		}
		else{
			resultStr = "삭제에 실패 했습니다.";
					
		}
		return resultStr;
	}

	//고객사 삭제된 데이터 리스트
	@Override
	public List<CustCompVO> getCCDelList(Map<String, Object> pMap) {
		List<CustCompVO> ccVOList = ccDao.getCCDelList(pMap);
		return ccVOList;
	}

	//고객사 삭제된 데이터 상세보기
	@Override
	public CustCompVO custcompDelDetail(String cust_id) {
		// 상세정보
		CustCompVO ccVO = ccDao.selectDelDetail(cust_id);
//		String zip_cd = ccVO.getCust_zip_cd();
//		ccVO.setCust_zip_cd1(zip_cd.substring(0, 2));
//		ccVO.setCust_zip_cd2(zip_cd.substring(3, 5));

		return ccVO;
	}
	
	// 고객사 삭제된 데이터 복원(수정)
	@Override
	public void custcompDelEdit(CustCompVO ccVO) {
		ccDao.custcompDelEdit(ccVO);
		
	}

	// 고객사 삭제된 데이터 완전삭제
	@Override
	public int custcompDelDelete(String cust_id) {
		
		int result = ccDao.custcompDelDelete(cust_id);
		
		System.out.println("고객사삭제 result : " + result);
		
		return result;
	}

	// 담당사원 전체 리스트 개수 
	@Override
	public PagerVO custcompMngListCount(Map<String, Object> pMap) {
		System.out.println("custcompMngListCount service " +  pMap.toString());
		int ccPageNum = (Integer) pMap.get("ccPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(ccPageNum, 0, 5, 5);
		// 전체 글의 갯수 구하기
		System.out.println("ccPageNum Num " + ccPageNum);
		int totalRowCount = ccDao.custcompMngListCount(pMap);
		System.out.println("totalRowCount ? " + totalRowCount);		
		page = new PagerVO(ccPageNum, totalRowCount, 5, 5);
		
		return page;
	}

	// 담당사원 전체 리스트
	@Override
	public List<PocVO> custcompMngAllList(Map<String, Object> pMap) {
		return ccDao.custcompMngAllList(pMap);
	}

	// 담당사원 고객사 있는 리스트 
	@Override
	public List<PocVO> custcompMngCklList(Map<String, Object> pMap) {
		return ccDao.custcompMngCklList(pMap);
	}
	
	// 담당사원 부서 가져오기
	@Override
	public List<OrganizationVO> orgCdList() {
		return ccDao.orgCdList();
	}

	// 담당사원 상세보기
	@Override
	public PocVO custcompMngDetail(PocVO pocVO) {
		PocVO pocVOList = ccDao.custcompMngDetail(pocVO);
		System.out.println(pocVOList);
		return pocVOList;
	}
	
	// 담당사원 등록
	@Override
	public void custcompMngInsert(PocVO pocVO) {
		ccDao.custcompMngInsert(pocVO);
		
	}

	// 담당사원 수정
	@Override
	public String ccMngEdit(IuserVO iuserVo) {
		
		int updateResult = ccDao.ccMngEdit(iuserVo);
		
		String resultStr = null;
		if(updateResult == 2){
			resultStr = "담당사원 수정이 완료 되었습니다.";
		} else {
			resultStr = "담당사원 수정에 실패 했습니다.";
		}
		return resultStr;
		
	}

	// 엑셀 출력
	@Override
	public List<CustCompVO> custcompExcel(Map<String, Object> ccMap) {
		
		List<CustCompVO> custcompExcel = ccDao.custcompExcel(ccMap);
		
		System.out.println("custcompExcel Service Impl : "  + custcompExcel);
		
		return custcompExcel;
	}
	
	
}
