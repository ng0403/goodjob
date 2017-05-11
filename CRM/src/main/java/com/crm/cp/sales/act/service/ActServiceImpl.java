package com.crm.cp.sales.act.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.dao.ActDao;
import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

@Service("ActService")
public class ActServiceImpl implements ActService{
	
	@Resource
	ActDao actDao;

	@Override
	public List<ActVO> actAllList(Map<String, Object> actMap) {
		return actDao.actList(actMap);
	}
	
	@Override
	public List<Object> actSchList() {
		// TODO Auto-generated method stub
		return actDao.actSchList();
	}
	
	@Override
	public PagerVO getActListCount(Map<String, Object> actMap) {
		int actPageNum = (Integer) actMap.get("actPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(actPageNum, 0, 5, 5);
		// 전체 글의 갯수 구하기
		int totalRowCount = actDao.getActListCount(actMap);
				
		page = new PagerVO(actPageNum, totalRowCount, 5, 5);
	
		return page;
	}

	@Override
	public List<ActVO> actTypeCdList() {
		return actDao.actTypeCdList();
	}

	@Override
	public List<ActVO> actStatCdList() {
		return actDao.actStatCdList();
	}

	@Override
	public List<ActVO> actDivCdList() {
		return actDao.actDivCdList();
	}
	
	@Override
	public List<Object> actOpptList() {
		return actDao.actOpptList();
	}
	
	@Override
	public List<Object> actOpptList(Map<String, Object> map) {
		return actDao.actOpptList(map);
	}

	@Override
	public List<Object> custcompList() {
		return actDao.custcompList();
	}

	@Override
	public List<Object> custcompList(Map<String, Object> map) {
		return actDao.custcompList(map);
	}

	@Override
	public ActVO actDetail(String sales_actvy_id) {
		ActVO actVO = actDao.actDetail(sales_actvy_id);
		return actVO;
	}

	@Override
	public int actInsert(ActVO actvo) {
		return actDao.actInsert(actvo);
	}

	@Override
	public Object actOneSelectId(String sales_actvy_id) {
		Object obj = actDao.actOneSelectId(sales_actvy_id);
		return obj;
	}

	@Override
	public int actEdit(ActVO actvo) {
		return actDao.actEdit(actvo);
	}
	
	@Override
	public int actDelete(String sales_actvy_id) {
		return actDao.actDelete(sales_actvy_id);
	}
	
	/*영화씨가 봐야할 부분.*/
	/**
	 * 상세보기 화면
	 * 영업기회 리스트 출력
	 * */
	@Override
	public List<OpptVO> opptList(String cust_id) {
		// TODO Auto-generated method stub
		return actDao.opptList(cust_id);
	}

	// 상품 삭제
	@Override
	public int opptProdDelete(String opptId) {
		// TODO Auto-generated method stub
		return actDao.opptProdDelete(opptId);
	}

	// 영업기회 수정
	@Override
	public int opptTabModify(OpptVO detail) {
		// TODO Auto-generated method stub
		return actDao.opptTabModify(detail);
	}

	// 상품 수정
	@Override
	public int opptTabPrdtModfy(List<OpptVO> opptList) {
		// TODO Auto-generated method stub
		return actDao.opptTabPrdtModfy(opptList);
	}


/*	@Override
	public PagerVO getActListCount(Map<String, Object> actMap) {
		int totalRowCount = actDao.getActListCount(actMap);	
		PagerVO page = new PagerVO();
		if(actMap.get("actPageNum").toString()!=null){		
			page = new PagerVO(Integer.parseInt((String) actMap.get("actPageNum")), 0, 3, 10);
			page = new PagerVO(Integer.parseInt((String) actMap.get("actPageNum")), totalRowCount, 3, 10);
		}else{
			page = new PagerVO(1, totalRowCount, 3, 10);
			
		}
		return page;
	}*/

	/*@Override
	public List<ActVO> actAllList(Map<String, Object> actMap) {
		System.out.println("ServiceImpl : " + actMap.toString());
		return actDao.actList(actMap);
	}*/

}
