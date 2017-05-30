package com.crm.cp.sales.oppt.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.dao.OpptDao;
import com.crm.cp.sales.oppt.vo.OpptChartVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.sales.oppt.vo.pipeLineVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;


@Service
public class OpptServiceImpl implements OpptService {
	
	@Resource
	OpptDao dao;

	//영업기회 리스트 출력(사용)
	@Override
	public List<OpptVO> opptList(Map<String, String> map) {
		System.out.println("검색어 Map : " + map);
		return dao.opptList(map); 
	}
	
	//영업기회 삭제된 데이터 리스트 출력(사용)
	@Override
	public List<OpptVO> DelopptList(Map<String, String> map) {
		System.out.println("검색어 Map : " + map);
		return dao.DelopptList(map); 
	}
	//홈화면 영업기회 리스트 출력
	@Override
	public List<OpptVO> opptList() {
		// TODO Auto-generated method stub
		return dao.opptList(); 
	}
	//영업기회 상세정보(사용)
	@Override
	public OpptVO opptDetail(String opptId) {
		
		// TODO Auto-generated method stub
		OpptVO detail = dao.opptDetail(opptId);
		return detail;
	}

	//영업기회 삭제 데이터 상세정보(사용)
	@Override
	public OpptVO opptDelDetail(String opptId) {
		// TODO Auto-generated method stub
		OpptVO detail = dao.opptDelDetail(opptId);
		return detail;
	}
	// 영업기회 상태 코드 가져오기(사용)
	@Override
	public List<OpptVO> opptOscList() {
		// TODO Auto-generated method stub
		return dao.opptOscList();
	}
	// 영업단계 코드 가져오기(사용)
	@Override
	public List<OpptVO> opptOtlList() {
		// TODO Auto-generated method stub
		return dao.opptOtlList();
	}

	//페이지 표시 갯수
	@Override
	public PagerVO opptPageCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		
		int totalRowCount = dao.opptPageCount(map);		
		PagerVO page = new PagerVO(Integer.parseInt(map.get("pageNum")), totalRowCount, 10, 10);
		return page;
	}
	//삭제된 페이지 표시 갯수
	@Override
	public PagerVO DeletedOpptPageCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		int totalRowCount = dao.DeletedOpptPageCount(map);		
		PagerVO page = new PagerVO(Integer.parseInt(map.get("pageNum")), totalRowCount, 10, 10);
		return page;
	}


	@Override
	public List<ActVO> actList(Map<String, String> map) {
		// TODO Auto-generated method stub
		System.out.println("actList Map :  "+ map );
		return dao.actList(map);
	}
//영업기회 데이터 수정
	@Override
	public int opptModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return dao.opptModify(detail);
	}
	//영업기회 데이터 복원
	@Override
	public int opptDelModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return dao.opptDelModify(detail);
	}
//영업기회 추가(사용)
	@Override
	public int opptAdd(OpptVO add) {
		// TODO Auto-generated method stub
		return dao.opptAdd(add);
	}
	//영업기회단계 추가(사용)
	@Override
	public int addOpptStep(OpptVO add) {
		System.out.println("add : " + add);
		return dao.addOpptStep(add);
	}

	@Override
	public List<Object> opptCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.opptCustComp(map);
	}

	@Override
	public List<Object> opptSearchCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.opptSearchCustComp(map);
	}

	@Override
	public int opptActiveAdd(ActVO act) {
		// TODO Auto-generated method stub
		return dao.opptActiveAdd(act);
	}

	@Override
	public List<ActVO> actTypeCdList() {
		// TODO Auto-generated method stub
		return dao.actTypeCdList();
	}

	@Override
	public List<ActVO> actStatCdList() {
		// TODO Auto-generated method stub
		return dao.actStatCdList();
	}

	@Override
	public List<ActVO> actDivCdList() {
		// TODO Auto-generated method stub
		return dao.actDivCdList();
	}

	@Override
	public PagerVO actCount(Map<String,String> map) {
		// TODO Auto-generated method stub
		
		int totalRowCount = dao.actCount(map.get("opptId"));
		PagerVO page = new PagerVO(Integer.parseInt(map.get("actPageNum")),totalRowCount,5,5);	
		return page;
	}

	@Override
	public int opptActiveDelete(String sales_actvy_id) {
		// TODO Auto-generated method stub
		return dao.opptActiveDelete(sales_actvy_id);
	}

	@Override
	public List<EstVO> estimList(String sales_oppt_id) {
		// TODO Auto-generated method stub
		System.out.println("영업기회 견적 탭 Service sales_oppt_id : " + sales_oppt_id);
		return dao.estimList(sales_oppt_id);
	}
	//상품리스트 가져오기(사용)
	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.prodList(map);
	}

	@Override
	public List<EstVO> elcList() {
		// TODO Auto-generated method stub
		return dao.elcList();
	}

	//견적 고객리스트 (사용안함)
	@Override
	public List<Object> estimCustomList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.estimCustomList(map);
	}

	@Override
	public int opptEstimAdd(List<EstVO> estList) {
		// TODO Auto-generated method stub
		return dao.opptEstimAdd(estList);
	}

	@Override
	public int opptEstimDelete(String estim_id) {
		// TODO Auto-generated method stub
		return dao.opptEstimDelete(estim_id);
	}
	//영업기회 삭제 (사용)
	@Override
	public int opptDelete(String opptId) {
		// TODO Auto-generated method stub
		return dao.opptDelete(opptId);
	}

	@Override
	public ActVO actDetail(String actvyId) {
		// TODO Auto-generated method stub
		return dao.actDetail(actvyId);
	}

	@Override
	public int opptActiveUpdate(ActVO act) {
		// TODO Auto-generated method stub
		return dao.opptActiveUpdate(act);
	}

	@Override
	public List<EstVO> opptEstimDetail(String estimId) {
		// TODO Auto-generated method stub
		return dao.opptEstimDetail(estimId);
	}

	@Override
	public int opptEstimUpdate(Map<String,Object> map) {
		// TODO Auto-generated method stub
		return dao.opptEstimUpdate(map);
	}

	@Override
	public List<EstVO> eduList() {
		// TODO Auto-generated method stub
		return dao.eduList();
	}

	@Override
	public OpptVO searchOneRecentOppt(String userId) {
		// TODO Auto-generated method stub
		return dao.searchOneRecentOppt(userId);
	}

	@Override
	public String findEmpCd(String userId) {
		// TODO Auto-generated method stub
		return dao.findEmpCd(userId);
	}

	@Override
	public List<pipeLineVO> pipeLineList(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.pipeLineList(map);
	}

	@Override
	public pipeLineVO pipeLineSum(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.pipeLineSum(map);
	}
	//영업기회상태 차트 데이터(사용)
	@Override
	public List<OpptChartVO> C_oppt_status() {
		List<OpptChartVO> result = dao.C_oppt_status();
		System.out.println("영업기회상태 차트정보 Service :  " +result);
		return result;
	}
//	@Override
//	public List<OpptPrdtVO> opptprdtList(String sales_oppt_id) {
//		// TODO Auto-generated method stub
//		System.out.println("영업기회 상품 탭 Service sales_oppt_id : " + sales_oppt_id);
//		List<OpptPrdtVO> result =dao.opptprdtList(sales_oppt_id);
//		System.out.println("영업기회 상품 탭 Service result : " + result);
//		return result;
//	}
	//영업기회상세정보페이지-상품리스트 가져오기
	@Override
	public List<OpptVO> opptPrdtDetail(String opptId) {
		System.out.println("영업기회별 상품 상세정보 opptId : " + opptId);
		return dao.opptPrdtDetail(opptId);
	}
	//영업기회-상품 테이블 추가(사용)
	@Override
	public int opptPrdtAdd(List<OpptVO> estList) {
		System.out.println("영업기회상품 추가 Service opptPrdtList : " +estList );
		return dao.opptPrdtAdd(estList);
	}
	//영업기회-상품리스트 삭제(사용)
	@Override
	public int opptPrdtDel(String sales_oppt_id) {
		System.out.println("영업기회삭제 sales_oppt_id : " + sales_oppt_id);
		int result = dao.opptPrdtDel(sales_oppt_id);
		System.out.println("영업기회삭제 result : " + result);
		return result;
	}

	//영업기회 완전삭제 
	@Override
	public int opptDelDelete(String sales_oppt_id) {
		// TODO Auto-generated method stub
		System.out.println("영업기회삭제 sales_oppt_id : " + sales_oppt_id);
		int result = dao.opptDelDelete(sales_oppt_id);
		System.out.println("영업기회삭제 result : " + result);
		return result;
	}

}
