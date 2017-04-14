package com.crm.cp.standard.prod.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.prod.vo.ProdVO;

@Repository
public class ProdDaoImpl implements ProdDao{
	
	@Autowired
    SqlSession sqlSession;

	
	public List<ProdVO> prodList(Map<String, Object> prodMap) {
		return sqlSession.selectList("prod.prodList",prodMap);
	}

	@Override
	public int getProdListCount() {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("prod.prodListTotalCount");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}
	
	@Override
	public ProdVO prodRead(String prod_id) {		
		return sqlSession.selectOne("prod.prodRead",prod_id);
	}
	
	@Override
	public int prodUpdateData(ProdVO dto) {
		return sqlSession.update("prod.prodUpdate", dto);
	}
	
	@Override
	public int prodInsert(ProdVO dto) {
		return sqlSession.insert("prod.prodInsert", dto);
	}
	
	@Override
	public List<ProdVO> prodCateList() {
		return sqlSession.selectList("prod.cateName");
	}
	
	@Override
	public List<ProdVO> prodServiceCodeList() {
		return sqlSession.selectList("prod.prodServiceCodeList");
	}

	@Override
	public List<ProdVO> prodTypeCdList() {
		return sqlSession.selectList("prod.prodTypeCdList");
	}

	@Override
	public List<ProdVO> prodStatCdList() {
		return sqlSession.selectList("prod.prodStatCdList");
	}

	@Override
	public List<ProdVO> prodDivCdList() {
		return sqlSession.selectList("prod.prodDivCdList");
	}

	@Override
	public List<Object> prodOpptList() {
		return sqlSession.selectList("prod.prodOpptList");
	}
	
	@Override
	public List<Object> prodOpptList(Map<String, Object> map) {
		return sqlSession.selectList("prod.prodOpptList",map);
	}

	@Override
	public List<Object> custcompList() {
		return sqlSession.selectList("prod.customerList");
	}

	@Override
	public List<Object> custcompList(Map<String, Object> map) {
		return sqlSession.selectList("prod.customerList",map);
	}

	@Override
	public int imgFileInsert(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.insert("prod.imgFileInsert", dto);
	}

	@Override
	public int prodImgFileInsert(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.insert("prod.prodImgFileInsert", dto);
	}

	@Override
	public int catalFileInsert(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.insert("prod.catalFileInsert", dto);
	}
	@Override
	public int prodCatalFileInsert(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.insert("prod.prodCatalFileInsert", dto);
	}

	@Override
	public int imgFileUpdateData(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.update("prod.prodCatalFileUpdateData", dto);
	}

	@Override
	public int catalFileUpdateData(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.update("prod.prodCatalFileUpdateData", dto);
	}

	@Override
	public ProdVO imgList(String prod_id) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("prod.imgList",prod_id);
	}

	@Override
	public ProdVO catalList(String prod_id) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("prod.catalList",prod_id);
	}

	@Override
	public int prodImgFileDelete(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.delete("prod.prodImgFileDelete", dto);
	}

	@Override
	public int prodCatalFileDelete(ProdVO dto) {
		// TODO Auto-generated method stub
		return sqlSession.delete("prod.prodCatalFileDelete", dto);
	}

	@Override
	public int prodDelete(String prod_id) {
		// TODO Auto-generated method stub
		return sqlSession.update("prod.prodDelete", prod_id);
	}

	@Override
	public int fileDelete(String attach_id) {
		// TODO Auto-generated method stub
		return sqlSession.delete("prod.fileDelete", attach_id);
	}

	@Override
	public void prodFileDelete(String prod_id) {
		// TODO Auto-generated method stub
		sqlSession.delete("prod.prodFileDelete", prod_id);
	}

	@Override
	public List<ProdVO> fileList(String prod_id) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("prod.fileList",prod_id);
	}

}
