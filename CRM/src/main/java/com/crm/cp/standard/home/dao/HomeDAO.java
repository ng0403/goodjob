package com.crm.cp.standard.home.dao;

import java.util.List;

import com.crm.cp.sales.act.vo.ActVO;

public interface HomeDAO {

	//홈화면 영업활동(당일) 리스트 출력
	List<ActVO> opptActList();

	
	
}
