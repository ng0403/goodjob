package com.crm.cp.sales.oppt.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.dao.OpptDao;
import com.crm.cp.sales.oppt.vo.OpptChartVO;
import com.crm.cp.sales.oppt.vo.OpptPrdtVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.sales.oppt.vo.pipeLineVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;


@Service
public class OpptServiceImpl implements OpptService {
	
	@Resource
	OpptDao dao;

	//영업기회 메인화면 리스트 출력
	@Override
	public List<OpptVO> opptList(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.opptList(map); 
	}
	//홈화면 영업기회 리스트 출력
	@Override
	public List<OpptVO> opptList() {
		// TODO Auto-generated method stub
		return dao.opptList(); 
	}

	@Override
	public OpptVO opptDetail(String opptId) {
		
		// TODO Auto-generated method stub
		OpptVO detail = dao.opptDetail(opptId);
		return detail;
	}

	@Override
	public List<OpptVO> opptOscList() {
		// TODO Auto-generated method stub
		return dao.opptOscList();
	}

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

	@Override
	public List<ActVO> actList(Map<String, String> map) {
		// TODO Auto-generated method stub
		System.out.println("actList Map :  "+ map );
		return dao.actList(map);
	}

	@Override
	public int opptModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return dao.opptModify(detail);
	}
//영업기회 추가
	@Override
	public int opptAdd(OpptVO add) {
		// TODO Auto-generated method stub
		return dao.opptAdd(add);
	}
	//영업기회단계 추가
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
	@Override
	public List<OpptChartVO> C_oppt_status() {
		List<OpptChartVO> result = dao.C_oppt_status();
		System.out.println("영업기회상태 차트정보 Service :  " +result);
		return result;
	}
	@Override
	public List<OpptPrdtVO> opptprdtList(String sales_oppt_id) {
		// TODO Auto-generated method stub
		System.out.println("영업기회 상품 탭 Service sales_oppt_id : " + sales_oppt_id);
		List<OpptPrdtVO> result =dao.opptprdtList(sales_oppt_id);
		System.out.println("영업기회 상품 탭 Service result : " + result);
		return result;
	}
	//영업기회별 상품 상세정보
	@Override
	public List<OpptPrdtVO> opptPrdtDetail(String prdtId) {
		System.out.println("영업기회별 상품 상세정보 prdtId : " + prdtId);
		return dao.opptPrdtDetail(prdtId);
	}


}
