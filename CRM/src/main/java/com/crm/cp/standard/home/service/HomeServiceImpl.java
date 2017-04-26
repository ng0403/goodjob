package com.crm.cp.standard.home.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.standard.home.dao.HomeDAO;

@Service("HomeService")
public class HomeServiceImpl implements HomeService{

	@Resource
	HomeDAO homeDao;
	
	//홈화면 영업활동 리스트 출력
	@Override
	public List<ActVO> opptActList() {
		List<ActVO> list = homeDao.opptActList();
		System.out.println("홈화면 영업활동 리스트 Service 결과값 : " + list);
		return list;
	}

}
