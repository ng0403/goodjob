package com.crm.cp.test.menu.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.test.menu.vo.MenuVO;

public interface Menu1Dao {
	
	public List<MenuVO> menuSearchList(Map<String, Object> map);  //메뉴 리스트 조회
	public int getMenuCount(Map<String, Object> map);             //메뉴 행 수 
	public MenuVO openMenuDetail(String menu_id);                 //메뉴 상세정보 확인
	public int createMenu(MenuVO menuVO);                         //메뉴 등록
	public int updateMenu(MenuVO menuVO);                         //메뉴 수정
	public int deleteMenu(MenuVO menuVO);                         //메뉴 삭제
	public MenuVO getMenuId(Map<String, Object> map);             //메뉴 ID확인

}
