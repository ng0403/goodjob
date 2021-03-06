package com.crm.cp.sales.est.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.dao.EstDao;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;


@Service
public class EstServiceImpl implements EstService {

	@Resource
	EstDao estDaoi;

	public List<EstVO> getList(Map<String,String> map) {
		List<EstVO> list = estDaoi.getList(map);

		return list;
	}

	@Override
	public List<EstVO> getProdList(Map<String,String> map) {
		List<EstVO> prodlist = estDaoi.getProdList(map);
		return prodlist;
	}
	
	@Override
	public List<EstVO> elcList() {
		// TODO Auto-generated method stub
		return estDaoi.elcList();
	}
	
	 

	@Override
	public List<EstVO> estDetail(String estim_id) {
		
		// TODO Auto-generated method stub
		List<EstVO> detail = estDaoi.estDetail(estim_id);
		return detail;
	}



	@Override
	public int estModify(EstVO detail) {
		// TODO Auto-generated method stub
		return estDaoi.estModify(detail);
	}

	@Override
	public int estAdd(List<EstVO> add) {
		// TODO Auto-generated method stub
		return estDaoi.estAdd(add);
	}

	@Override
	public List<Object> estCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return estDaoi.estCustComp(map);
	}

	@Override
	public List<Object> estSearchCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return estDaoi.estSearchCustComp(map);
	}

	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return estDaoi.prodList(map);
	}
	/*@Override
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
	}*/

	/*@Override
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
		return dao.estimList(sales_oppt_id);
	}*/


	/*@Override
	public List<EstVO> elcList() {
		// TODO Auto-generated method stub
		return dao.elcList();
	}*/

	/*@Override
	public List<Object> estimCustomList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return dao.estimCustomList(map);
	}

	@Override
	public int opptEstimAdd(EstVO est) {
		// TODO Auto-generated method stub
		return dao.opptEstimAdd(est);
	}

	@Override
	public int opptEstimDelete(String estim_id) {
		// TODO Auto-generated method stub
		return dao.opptEstimDelete(estim_id);
	}*/


	// 페이지 정보 가져오기
	@Override
	public PagerVO getCCListCount(Map<String, String> ccPageNum) {
		// 현재 페이지 얻어오기
/*		PageUtil page = new PageUtil(ccPageNum, 0, 5, 5);
*/
		int totalRowCount = estDaoi.getCCListCount(ccPageNum);

		PagerVO page = new PagerVO(Integer.parseInt(ccPageNum.get("pageNum")), totalRowCount, 10, 10);

		return page;
	}

	@Override
	public List<EstVO> eduList() {
		// TODO Auto-generated method stub
		return estDaoi.eduList();
	}

	@Override
	public List<Object> estActOpptList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return estDaoi.estActOpptList(map);
	}

	@Override
	public int estUpdate(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return estDaoi.estUpdate(map);
	}

	@Override
	public int estDelete(EstVO est) {
		// TODO Auto-generated method stub
		return estDaoi.estDelete(est);
	}

	@Override
	public PagerVO actCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		int totalRowCount = estDaoi.actCount(map.get("estim_id"));
		PagerVO page = new PagerVO(Integer.parseInt(map.get("actPageNum")),totalRowCount,5,5);	
		return page;
	}

	@Override
	public List<ActVO> actList(Map<String, String> map) {
		// TODO Auto-generated method stub
		return estDaoi.actList(map);
	}

	@Override
	public PagerVO opptCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		int totalRowCount = estDaoi.opptCount(map.get("estim_id"));
		PagerVO page = new PagerVO(Integer.parseInt(map.get("opptPageNum")),totalRowCount,5,5);	
		return page;
	}

	@Override
	public List<OpptVO> opptList(Map<String, String> map) {
		// TODO Auto-generated method stub
		return estDaoi.opptList(map);
	}

	@Override
	public int opptAdd(OpptVO opptVo) {
		// TODO Auto-generated method stub
		return estDaoi.opptAdd(opptVo);
	}

	@Override
	public List<OpptVO> estHistoryList(Map<String, String> map) {
		// TODO Auto-generated method stub
		System.out.println("map : " + map);
		return estDaoi.estHistoryList(map);
	}

	// 삭제 데이터 관리해주는 부분.
	@Override
	public List<EstVO> getDelList(Map<String, String> map) {
		// TODO Auto-generated method stub
		List<EstVO> list = estDaoi.getDelList(map);

		return list;
	}

	@Override
	public List<EstVO> delEstDetail(String estim_id) {
		// TODO Auto-generated method stub
		List<EstVO> detail = estDaoi.delEstDetail(estim_id);
		return detail;
	}

	@Override
	public int delEstDelete(EstVO evo) {
		// TODO Auto-generated method stub
		return estDaoi.delEstDelete(evo);
	}

	@Override
	public int delEstRestore(EstVO est) {
		// TODO Auto-generated method stub
		return estDaoi.delEstRestore(est);
	}

	@Override
	public PagerVO getDelCCListCount(Map<String, String> ccPageNum) {
		// TODO Auto-generated method stub
		int totalRowCount = estDaoi.getDelCCListCount(ccPageNum);

		PagerVO page = new PagerVO(Integer.parseInt(ccPageNum.get("pageNum")), totalRowCount, 10, 10);

		return page;
	}


}
