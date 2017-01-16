package com.crm.cp.test.menu.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.test.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

public interface Menu1Service {
	
	public List<MenuVO> menuSearchList(Map<String,Object> map);
	public PagerVO getMenuCount(Map<String, Object> map);
	public MenuVO openMenuDetail(String menu_id);
	public int createMenu(MenuVO menuVO);
	public int updateMenu(MenuVO menuVO);
	public int deleteMenu(MenuVO menuVO);
	public MenuVO getMenuId(Map<String, Object> map);

}
