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
	
	@Override
	public List<MenuVO> menuSearchList(Map<String,Object> map){
		List<MenuVO> list = menu1Dao.menuSearchList(map);
		return list;
	}
	
	@Override
	public PagerVO getMenuCount(Map<String, Object> map) {
		int PageNum = (Integer) map.get("pageNum");
		int pageListCount = menu1Dao.getMenuCount(map);
		
		PagerVO page = new PagerVO(PageNum, pageListCount, 15, 10);
		
		return page;
	}
	
	@Override
	public MenuVO openMenuDetail(String menu_id){
		MenuVO menuVO = menu1Dao.openMenuDetail(menu_id);
		return menuVO;
	}
	
	@Override
	public int createMenu(MenuVO menuVO){
		int result=0;
		menu1Dao.createMenu(menuVO);
		return result;
	}
	
	@Override
	public int updateMenu(MenuVO menuVO) {		
		int result = 0;
		menu1Dao.updateMenu(menuVO);
		return result;
	}
	
	@Override
	public int deleteMenu(MenuVO menuVO) {		
		int result = 0;
		menu1Dao.deleteMenu(menuVO);
		return result;
	}
	
	@Override
	public MenuVO getMenuId(Map<String, Object> map){
		MenuVO menuVO = menu1Dao.getMenuId(map);
		menu1Dao.getMenuId(map);
		return menuVO;
	}

}
