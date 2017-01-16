package com.crm.cp.test.menu.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.test.menu.vo.MenuVO;

public interface Menu1Dao {
	
	public List<MenuVO> menuSearchList(Map<String, Object> map);
	public int getMenuCount(Map<String, Object> map);
	public MenuVO openMenuDetail(String menu_id);
	public int createMenu(MenuVO menuVO);
	public int updateMenu(MenuVO menuVO);
	public int deleteMenu(MenuVO menuVO);
	public MenuVO getMenuId(Map<String, Object> map);

}
