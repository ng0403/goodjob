package com.crm.cp.standard.home.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;

@Repository
public class HomeDaoImpl implements HomeDAO{

	@Autowired
	SqlSession sqlSession;
	
	@Override
	public List<ActVO> opptActList() {
		List<ActVO> list = sqlSession.selectList("act.homeActList");
		System.out.println("홈화면 영업활동 DAO Imple 결과값  : " + list);
		return list;
	}
	
}
