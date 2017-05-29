package com.crm.cp.sales.act.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

@Repository
public class ActDaoImpl implements ActDao{
	
	@Autowired
    SqlSession sqlSession;

	public List<ActVO> actList(Map<String, Object> actMap) {
		System.out.println("DAO : " + actMap);
		return sqlSession.selectList("act.actList",actMap);
	}
	
	@Override
	public List<ActVO> delActAllList(Map<String, Object> actMap) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("act.delActList",actMap);
	}
	
	@Override
	public List<Object> actSchList() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("act.actSchList");
	}

	@Override
	public int getActListCount(Map<String, Object> actMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("actListTotalCount",actMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}

	@Override
	public List<ActVO> actTypeCdList() {
		return sqlSession.selectList("act.actTypeCdList");
	}

	@Override
	public List<ActVO> actStatCdList() {
		return sqlSession.selectList("act.actStatCdList");
	}

	@Override
	public List<ActVO> actDivCdList() {
		return sqlSession.selectList("act.actDivCdList");
	}
	
	@Override
	public List<OpptVO> actOpptList(OpptVO oppt) {
		return sqlSession.selectList("act.actOpptCustList", oppt);
	}
	
	@Override
	public List<Object> actOpptList(Map<String, Object> map) {
		return sqlSession.selectList("act.actOpptList",map);
	}

	@Override
	public List<Object> custcompList() {
		return sqlSession.selectList("act.customerList");
	}

	@Override
	public List<Object> custcompList(Map<String, Object> map) {
		return sqlSession.selectList("act.customerList",map);
	}

	@Override
	public ActVO actDetail(String sales_actvy_id) {
		ActVO actVO = null;		
		List<ActVO> tmp = sqlSession.selectList("act.actListTemp", sales_actvy_id);
		
		if(tmp.get(0).getSales_oppt_id() == null && tmp.get(0).getCust_id() == null)
		{
			System.out.println("Detail 2 : " + sales_actvy_id);
			actVO = sqlSession.selectOne("act.actDetail2", sales_actvy_id);
		}
		else
		{
			actVO = sqlSession.selectOne("act.actDetail", sales_actvy_id);
		}
		return actVO;
	}
	
	@Override
	public ActVO delActDetail(String sales_actvy_id) {
		ActVO actVO = null;		
		List<ActVO> tmp = sqlSession.selectList("act.actListTemp", sales_actvy_id);
		
		actVO = sqlSession.selectOne("act.delActDetail", sales_actvy_id);
		
		return actVO;
	}

	@Override
	public int actInsert(ActVO actvo) {
		return sqlSession.insert("act.actInsert", actvo);
	}

	@Override
	public Object actOneSelectId(String sales_actvy_id) {
		Object obj = sqlSession.selectOne("act.actOneSelectId", sales_actvy_id);
		return obj;
	}

	@Override
	public int actEdit(ActVO actvo) {
		return sqlSession.update("act.actEdit", actvo);
	}
	
	@Override
	public int delActRestore(ActVO actvo) {
		// TODO Auto-generated method stub
		return sqlSession.update("act.delActRestore", actvo);
	}
	
	@Override
	public int actDelete(ActVO actvo) {
		return sqlSession.update("act.actDelete", actvo);
		
	}
	
	@Override
	public int delActDelete(ActVO actvo) {
		// TODO Auto-generated method stub
		return sqlSession.update("act.delActDelete", actvo);
	}
	
	
	
	
	
	/*영화씨가 봐야할 부분.*/
	/**
	 * 상세보기 화면
	 * 영업기회 리스트 출력
	 * */
	@Override
	public List<OpptVO> opptList(String cust_id) {
		// TODO Auto-generated method stub
		System.out.println(cust_id);
		List<OpptVO> test = sqlSession.selectList("act.detailOpptList", cust_id);
		
		return test;
	}

	@Override
	public int opptProdDelete(String opptId) {
		// TODO Auto-generated method stub
		int result = 0;
		
		// 영업기회를 지우고 난 뒤에 해당 영업기회의 상품들을 지원야한다.
		// 상품과 단계이력은 delete로 아예 지워야한다.
		result += sqlSession.update("act.opptTabDelete", opptId);
		
		System.out.println("actDaoImpl - opptProdDelete (result) : " + result);
		
		if(result == 1)
		{
			System.out.println("영업기회는 삭제됨.");
			sqlSession.delete("act.opptProdDelete", opptId);
			System.out.println("영업기회별 상품도 삭제됨.");
		}
		else
		{
			System.out.println("ERROR " + result);
		}
		
		return result;
	}

	@Override
	public int opptTabModify(OpptVO detail) {
		// TODO Auto-generated method stub
		//opptTabDelete
		return sqlSession.update("act.opptTabModfy", detail);
	}
	
	@Override
	public int opptTabPrdtModfy(List<OpptVO> opptList) {
		// TODO Auto-generated method stub
		System.out.println("영업기회별상품 추가 Dao opptPrdtList : " + opptList );
		int result = 0;

		String opptId = opptList.get(0).getSales_oppt_id();
		sqlSession.delete("act.opptProdDelete", opptId);
		
		for (int i = 0; i < opptList.size(); i++) 
		{
			result += sqlSession.insert("act.opptprdtInsert",  opptList.get(i));
			System.out.println("result 2: " + result);
		}
		
		System.out.println("result sum: " + result);
		
		return result;
	}



/*	@Override
	public List<ActVO> actList(Map<String, Object> actMap) {
		return sqlSession.selectList("act.actList",actMap);
	}

	@Override
	public int getActListCount(Map<String, Object> actMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("act.actListTotalCount",actMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}*/

}
