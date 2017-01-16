package com.crm.cp.test.menu.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.test.menu.dao.Menu1Dao;
import com.crm.cp.test.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Service("MenuService")
public class Menu1ServiceImpl implements Menu1Service {
	
	@Resource
	Menu1Dao menu1Dao;
	
	//메뉴 리스트 조회
	@Override
	public List<MenuVO> menuSearchList(Map<String,Object> map){
		List<MenuVO> list = menu1Dao.menuSearchList(map);
		return list;
	}
	
	//메뉴 행 수
	@Override
	public PagerVO getMenuCount(Map<String, Object> map) {
		int PageNum = (Integer) map.get("pageNum");
		int pageListCount = menu1Dao.getMenuCount(map);
		
		PagerVO page = new PagerVO(PageNum, pageListCount, 15, 10);
		
		return page;
	}
	
	//메뉴 상세정보 확인
	@Override
	public MenuVO openMenuDetail(String menu_id){
		MenuVO menuVO = menu1Dao.openMenuDetail(menu_id);
		return menuVO;
	}
	
	//메뉴 등록
	@Override
	public int createMenu(MenuVO menuVO){
		int result=0;
		menu1Dao.createMenu(menuVO);
		return result;
	}
	
	//메뉴 수정
	@Override
	public int updateMenu(MenuVO menuVO) {		
		int result = 0;
		menu1Dao.updateMenu(menuVO);
		return result;
	}
	
	//메뉴 삭제
	@Override
	public int deleteMenu(MenuVO menuVO) {		
		int result = 0;
		menu1Dao.deleteMenu(menuVO);
		return result;
	}
	
	//메뉴ID 확인
	@Override
	public MenuVO getMenuId(Map<String, Object> map){
		MenuVO menuVO = menu1Dao.getMenuId(map);
		menu1Dao.getMenuId(map);
		return menuVO;
	}
}