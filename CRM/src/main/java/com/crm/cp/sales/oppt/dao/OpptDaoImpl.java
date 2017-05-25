package com.crm.cp.sales.oppt.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptChartVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.sales.oppt.vo.pipeLineVO;
import com.crm.cp.standard.prod.vo.ProdVO;

@Repository
public class OpptDaoImpl implements OpptDao {

	@Autowired
	SqlSession sqlsession;

	//영업기회 리스트 출력(사용)
	@Override
	public List<OpptVO> opptList(Map<String, String> map) {
		// TODO Auto-generated method stub
		System.out.println("리스트 검색조건 DaoImpl map : " + map);
		return sqlsession.selectList("oppt.list", map);
	}
	//영업기회 삭제된 데이터 리스트 출력(사용)
	@Override
	public List<OpptVO> DelopptList(Map<String, String> map) {
		System.out.println("삭제된 데이터 리스트 검색조건 DaoImpl map : " + map);
		return sqlsession.selectList("oppt.Dellist", map);
	}
	//홈화면 리스트 출력
	@Override
	public List<OpptVO> opptList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.list_for_home");
	}
	//영업기회 상세정보(사용)
	@Override
	public OpptVO opptDetail(String opptId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.detail", opptId);
	}
	@Override
	public OpptVO opptDelDetail(String opptId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.Deldetail", opptId);
	}
	// 영업기회 상태 코드 가져오기(사용)
	@Override
	public List<OpptVO> opptOscList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.osclist");
	}
	// 영업단계 코드 가져오기(사용)
	@Override
	public List<OpptVO> opptOtlList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.otllist");
	}

	@Override
	public int opptPageCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.pagecount", map);
	}

	@Override
	public List<ActVO> actList(Map<String, String> map) {
		// TODO Auto-generated method stub
		System.out.println("actList Dao Impl Map :  "+ map );
		return sqlsession.selectList("oppt.actList", map);
	}
//영업기회 수정
	@Override
	public int opptModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return sqlsession.update("oppt.modify", detail);
	}
	
//영업기회 복원
	@Override
	public int opptDelModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return sqlsession.update("oppt.DelRollBack", detail);
	}
	//영업기회 추가(사용)
	@Override
	public int opptAdd(OpptVO add) {
		// TODO Auto-generated method stub
		int seq = sqlsession.insert("oppt.add", add);
		return seq;
	}
	//영업기회단계 추가(사용)
	@Override
	public int addOpptStep(OpptVO add) {
		System.out.println("add : " + add);
		int seq = sqlsession.insert("oppt.addOpptStep", add);
		System.out.println("seq : " + seq);
		return seq;
	}
	@Override
	public List<Object> opptCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.customerList", map);
	}

	@Override
	public List<Object> opptSearchCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.opptSearchCustComp", map);
	}

	@Override
	public int opptActiveAdd(ActVO act) {
		// TODO Auto-generated method stub
		return sqlsession.insert("oppt.actInsert", act);
	}

	@Override
	public List<ActVO> actTypeCdList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.actTypeCdList");
	}

	@Override
	public List<ActVO> actStatCdList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.actStatCdList");
	}

	@Override
	public List<ActVO> actDivCdList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.actDivCdList");
	}

	@Override
	public int actCount(String opptId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.actCount", opptId);
	}

	@Override
	public int opptActiveDelete(String sales_actvy_id) {
		// TODO Auto-generated method stub
		return sqlsession.update("oppt.opptActiveDelete", sales_actvy_id);
	}

	@Override
	public List<EstVO> estimList(String sales_oppt_id) {
		// TODO Auto-generated method stub
		System.out.println("영업기회 견적 탭 Dao sales_oppt_id : " + sales_oppt_id);
		return sqlsession.selectList("oppt.estimList", sales_oppt_id);
	}
	//상품리스트 가져오기(사용)
	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.prodList", map);
	}

	@Override
	public List<EstVO> elcList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.elcList");
	}

	//견적 고객리스트 (사용안함)
	@Override
	public List<Object> estimCustomList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.estimCustomList", map);
	}

	//영업기회별 견적 추가
	@Override
	public int opptEstimAdd(List<EstVO> estList) {
		// TODO Auto-generated method stub
		int result = 0;

		System.out.println("영업기회별 견적 추가할 때 고객 아이디 확인해라 : " + estList);
		result += sqlsession.insert("oppt.estimateAdd", estList.get(0));
		System.out.println("result 1: " + result);
		if (result == 1) {

			for (int i = 1; i < estList.size(); i++) {
				System.out.println("opptEstimdd : " + estList.get(i).toString());
				estList.get(i).setEstim_seq(estList.get(0).getEstim_seq());
				result += sqlsession.insert("oppt.estimateListAdd",	estList.get(i));
				System.out.println("result 2: " + result);

			}
		}
		if (result > 1) {
			result += sqlsession.insert("oppt.soeAdd", estList.get(0));
			System.out.println("result 3: " + result);
			String sales_oppt_id = estList.get(0).getSales_oppt_id();
			sqlsession.update("estimate.opptLevMdfy",sales_oppt_id);
		}
		

		System.out.println("result sum: " + result);
		return result;
	}

	//영업기회별 견적 삭제
	@Override
	public int opptEstimDelete(String estim_id) {
		// TODO Auto-generated method stub

		int result = 0;

		result += sqlsession.update("oppt.estimateDelete", estim_id);
		result += sqlsession.update("oppt.estListDelete", estim_id);
		System.out.println("delete result : " + result);

		return result;

	}
	//영업기회 삭제 (사용)
	@Override
	public int opptDelete(String opptId) {
		// TODO Auto-generated method stub
		return sqlsession.update("oppt.opptDelete", opptId);
	}

	//영업기회별 활동 상세정보
	@Override
	public ActVO actDetail(String actvyId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.actDetail", actvyId);
	}

	//영업기회별 활동 수정
	@Override
	public int opptActiveUpdate(ActVO act) {
		// TODO Auto-generated method stub
		return sqlsession.update("oppt.opptActiveUpdate", act);
	}

	//영업기회별 견적 상세정보
	@Override
	public List<EstVO> opptEstimDetail(String estimId) {
		// TODO Auto-generated method stub
		EstVO detail = sqlsession.selectOne("oppt.opptEstimDetail", estimId);
		List<EstVO> prod = sqlsession.selectList("oppt.opptEstimProdList",
				estimId);
		prod.add(detail);

		return prod;
	}

	//영업기회별 견적 수정
	@Override
	public int opptEstimUpdate(Map<String, Object> map) {
		List<EstVO> estList = (List<EstVO>) map.get("estList");
		List<String> prodAddId = (List<String>) map.get("prodAddId");
		List<String> prodDeleteProdId = (List<String>) map	.get("prodDeleteProdId");
		List<String> prodDeleteEstimId = (List<String>) map.get("prodDeleteEstimId");

		int result = 0;
		int insertResult = 0;
		int updateResult = 0;
		result += sqlsession.update("estimate.estimateUpdate", estList.get(0));
		if (result == 1) {

			for (int i = 1; i < estList.size(); i++) {
				estList.get(i).setEstim_id(estList.get(0).getEstim_id());
				int sw = 0;
				if (prodAddId != null && !prodAddId.isEmpty()) {
					for (int j = 0; j < prodAddId.size(); j++) {
						String id = prodAddId.get(j);
						if (estList.get(i).getProd_id().equals(id)) {
							insertResult += sqlsession.insert(
									"estimate.estimateListMdfyAdd",
									estList.get(i));
							sw = 1;
						}
					}
				}
				if (sw != 1) {
					result += sqlsession.update("estimate.estimateListUpdate",	estList.get(i));
				}
			}

			if (prodDeleteProdId != null && !prodDeleteProdId.isEmpty()) {
				String estim_id = prodDeleteEstimId.get(0);
				for (String prod_id : prodDeleteProdId) {
					Map<String, Object> idMap = new HashMap<String, Object>(0);
					idMap.put("prod_id", prod_id);
					idMap.put("estim_id", estim_id);
					updateResult += sqlsession.update("estimate.estimateListDelete", idMap);
				}
			}
		}
		return result;
	}

	@Override
	public List<EstVO> eduList() {
		// TODO Auto-generated method stub
		return sqlsession.selectList("oppt.eduList");
	}

	@Override
	public OpptVO searchOneRecentOppt(String userId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.searchOneRecentOppt", userId);
	}

	@Override
	public String findEmpCd(String userId) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.opptfindEmpCd",userId);
	}

	@Override
	public List<pipeLineVO> pipeLineList(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectList("pipeLine",map);
	}

	@Override
	public pipeLineVO pipeLineSum(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlsession.selectOne("oppt.pipeLineSum",map);
	}
	//영업기회상태 차트 데이터(사용)
	@Override
	public List<OpptChartVO> C_oppt_status() {
		List<OpptChartVO> result = sqlsession.selectList("chart.C_oppt_status");
		System.out.println("영업기회상태 차트 정보 DAO : " + result);
		return result;
	}
	
//	//영업기회별 상품 리스트 출력
//	@Override
//	public List<OpptPrdtVO> opptprdtList(String sales_oppt_id) {
//		// TODO Auto-generated method stub
//				System.out.println("영업기회 상품 탭 Dao sales_oppt_id : " + sales_oppt_id);
//				List<OpptPrdtVO> result = sqlsession.selectList("oppt.opptprdtList", sales_oppt_id);
//				System.out.println("영업기회 상품 탭 Dao result : " + result);
//				return result;
//	}
	
	//영업기회상세정보페이지-상품리스트 가져오기
	@Override
	public List<OpptVO> opptPrdtDetail(String opptId) {
		String prod_id = opptId;
		System.out.println("opptId :" + prod_id);
		List<OpptVO> result = sqlsession.selectList("oppt.opptPrdtDetail", prod_id);
		System.out.println("영업기회별 상품 상세정보 DAOImpl : " + result);
		return result;
	}
	
	//영업기회상품 테이블 추가(사용)
	@Override
	public int opptPrdtAdd(List<OpptVO> estList) {
		System.out.println("영업기회별상품 추가 Dao opptPrdtList : " +estList );
		int result = 0;

		System.out.println("result 1: " + result);
			for (int i = 0; i < estList.size(); i++) {
				result += sqlsession.insert("oppt.opptprdtInsert",  estList.get(i));
				System.out.println("result 2: " + result);
			}
		System.out.println("result sum: " + result);
		return result;
	}
	
	//영업기회상품리스트 삭제(사용)
	@Override
	public int opptPrdtDel(String sales_oppt_id) {
		System.out.println("영업기회상품 삭제 sales_oppt_id : " + sales_oppt_id);
		int result = sqlsession.delete("oppt.opptPrdtDel", sales_oppt_id);
		System.out.println("영업기회상품 삭제 result : " + result);
		return result;
	}
	//영업기회완전삭제
	@Override
	public int opptDelDelete(String sales_oppt_id) {
		System.out.println("영업기회상품 삭제 sales_oppt_id : " + sales_oppt_id);
		int result = sqlsession.delete("oppt.opptDelDelete", sales_oppt_id);
		System.out.println("영업기회상품 삭제 result : " + result);
		return result;
	}



}
