package com.crm.cp.standard.menu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.menu.dao.MenuDao;
import com.crm.cp.standard.menu.vo.MenuVO;

@Service
public class MenuServiceImpl implements MenuService{
	
	@Resource
	MenuDao dao;
	
	@Override
	public List<MenuVO> selectAll(HttpSession session) {
		String id_nm = session.getAttribute("user").toString();
		List<Object> menu = dao.selectAll("menu.selectNaviMenu",new MenuVO("0001",id_nm));
		List<Object> subMenu = dao.selectAll("menu.selectNaviMenu",new MenuVO("0002",id_nm));
		List<MenuVO> list = new ArrayList<MenuVO>();
		
		//상위메뉴에 속하는 하위메뉴 리스트 넣기
		for(Object menuvo : menu) {
			ArrayList<MenuVO> subList = new ArrayList<MenuVO>();
			MenuVO me = (MenuVO) menuvo;

			for(Object submenu : subMenu){
				MenuVO subme = (MenuVO) submenu;
				if(me.getMenu_id().equals(subme.getUp_menu_id())){
					subList.add(subme);
				}
			}
			
			list.add(new MenuVO(me.getMenu_id(), me.getMenu_nm(), me.getMenu_url(),
					me.getMenu_lev(), me.getUp_menu_id(), me.getDeflt_yn(),
					me.getCreat_yn(), me.getMdfy_yn(), me.getDel_yn(), me.getRetrv_yn(), subList));
		}		
		return list;
	}
	
	@Override
	public List<MenuVO> selectMenuTree() {
		List<Object> menu = dao.selectAll("menu.selectMenuTree","0001");
		List<Object> subMenu = dao.selectAll("menu.selectMenuTree","0002");
		List<MenuVO> list = new ArrayList<MenuVO>();
		
		//상위메뉴에 속하는 하위메뉴 리스트 넣기
		for(Object menuvo : menu) {
			ArrayList<MenuVO> subList = new ArrayList<MenuVO>();
			MenuVO me = (MenuVO) menuvo;
			
			for(Object submenu : subMenu){
				MenuVO subme = (MenuVO) submenu;
			
				if(me.getMenu_id().equals(subme.getUp_menu_id())){
					subList.add(subme);
				}
			}
					
			list.add(new MenuVO(me.getMenu_id(), me.getMenu_nm(),  me.getMenu_url(),
					me.getMenu_lev(), me.getUp_menu_id(), me.getFst_reg_id(), 
					me.getFst_reg_dt(), me.getFin_mdfy_id(), me.getFin_mdfy_dt(), me.getAct_yn(), subList));
		}		
		return list;
	}
	
	@Override
	public List<Object> selectAll(Map<String, Object> map) {
		List<Object> result = dao.selectAll("menu.searchMenu", map);
		return result;
	}

	@Override
	public List<Object> selectPmenu() {
		List<Object> obj = dao.selectAll("menu.selectPmenu");
		return obj;
	}

	//메뉴명 중복확인
	@Override
	public Object menuNameCount(Map<String, Object> obj) {
		Object result = dao.selectOne("menu.menuNameCount", obj);
		return result;
	}

	@Override
	public Object selectDetail(Object obj) {
		Object result = dao.selectOne("menu.selectDetail", obj);
		return result;
	}

	//메뉴 등록
	@Override
	public Map<String,Object> insertMenu(HttpSession session, MenuVO data) {
		Map<String,Object> map = new HashMap<String, Object>();
		data.setFst_reg_id(session.getAttribute("user").toString());
		data.setFin_mdfy_id(session.getAttribute("user").toString());
		try {
			int result = dao.insert("menu.insertMenu", data);	//메뉴등록
			Object menuId = dao.selectOne("menu.selectInsertMenuId", data);	//저장한 메뉴의 menu_id 검색
			map.put("insertMenuOk", result);
			map.put("menu_id", menuId);
		} catch (Exception e) {
			map.put("insertMenuOk", "-1");
		}			
		return map;			
	}

	//메뉴권한 등록
	@Override
	public int insertMenuAuth(HttpSession session, MenuVO data) {
		data.setFst_reg_id(session.getAttribute("user").toString());
		int result = dao.insert("menu.authMenuInsert", data);
		return result;
	}

	@Override
	public int updateMenu(HttpSession session, MenuVO data) {
		data.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("메뉴 수정정보:"+data.toString());
		int result = dao.update("menu.updateMenu", data);
		return result;
	}

	@Override
	public int deleteMenu(List<Object> data) {
		int result=1;
		List<Object> list = data;
		try{
			for (Object obj : list) {
				Map<String,Object> map = (Map<String,Object>) obj;
				List<String> sub = (List<String>) map.get("sub_menu_id");
				Map<String, Object> masterMap = new HashMap<String, Object>();
				masterMap.put("menu_id", map.get("p_menu_id"));
					//dao.delete("menu.deleteAuthMenu", masterMap);
				dao.update("menu.deleteMenu", masterMap);
				if(sub != null){
					for (String sub_menu_id : sub) {
						Map<String, Object> subMap = new HashMap<String, Object>();
						subMap.put("menu_id", sub_menu_id);
						//dao.delete("menu.deleteAuthMenu", subMap);
						dao.update("menu.deleteMenu", subMap);
					}
				}
			}
		}catch (Exception e){
			return 0;
		}		
		return result;
	}	
}
