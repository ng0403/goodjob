package com.crm.cp.sales.cont.dao;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.cont.service.contrServiceImpl;
import com.crm.cp.sales.cont.vo.contrResultVO;
import com.crm.cp.sales.cont.vo.contrVO;

@Repository
public class contrDAOImpl implements contrDAO {

	@Resource
	contrServiceImpl contrServiceImpl;

	@Autowired
	private SqlSession sqlSession;

	public void serSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	// 계약 리스트
	@Override
	public List<contrVO> getcContrList() {

		List<contrVO> getcContrList = sqlSession.selectList("cContrList");

		return getcContrList;
	}

	// 계약 상세정보
	@Override
	public contrVO getcContrInfo(String contr_id) {
		contrVO getcContrInfo = sqlSession.selectOne("cContrInfo", contr_id);

		return getcContrInfo;
	}

	@Override
	public List<contrVO> getcContrMap(Map<String, Object> map) {
		List<contrVO> getcContrMap = sqlSession.selectList("cContrList", map);
		return getcContrMap;
	}

	// 계약 추가
	@Override
	public int contInsert(contrVO contVO) {
		int contInsert = sqlSession.update("contInsert", contVO);
		if( contInsert == 1 )
		{
			System.out.println("contrinsert entering");
			Date d = new Date();
	        
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			contVO.setContr_num(sdf.format(d)+'-'+contVO.getContr_id());
			contVO.setContr_id(contVO.getContr_id());
			System.out.println("contr_num???" + contVO.getContr_num());
			sqlSession.update("contNumInsert", contVO);
		}
		contInsert += sqlSession.update("contOpptComplete", contVO.getSales_oppt_id());
		System.out.println("contInsert" + contInsert);
		return contInsert;
	}

	// 전체 페이지 개수
	@Override
	public int contPageCount(Map<String, Object> map) {
		int num = sqlSession.selectOne("cContrCount", map);
		return num;
	}

	@Override
	public List<Object> contActOpptList(String cust_id) {
		return sqlSession.selectList("contActOpptList",cust_id);//namespace가 앞에 있는것 뒤에는 쿼리문 아이디
	}

	@Override
	public List<Object> contActOpptList(Map<String, Object> map) {
		return sqlSession.selectList("contActOpptList",map);
	}

	@Override
	public List<Object> contCustcompList() {
		return sqlSession.selectList("contCustomerList");
	}

	@Override
	public List<Object> contCustcompList(Map<String, Object> map) {
		return sqlSession.selectList("contCustomerList",map);
	}

	@Override
	public int contUpdate(contrVO contVO) {
		int contUpdate = 0;
		try {
			contUpdate = sqlSession.update("contUpdate", contVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contUpdate;
	}

	@Override
	public int deleteCont(List<String> cont_id_list) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < cont_id_list.size(); i++) {
				deleteResultTemp = sqlSession.update("contListDelete", cont_id_list.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}
	
	@Override
	public List<Object> contrResult(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("contrResult", map);
	}

	@Override
	public contrResultVO findEmpCd(String userId) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("findEmpCd",userId);
	}

	@Override
	public contrResultVO contrResultSum(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("contrResultSum",map);
	}

}
