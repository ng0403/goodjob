package com.crm.cp.test.menu.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.crm.cp.test.menu.vo.MenuVO;

@Repository
public class Menu1DaoImpl implements Menu1Dao {
    
	@Resource(name = "sqlSession")
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//메뉴 리스트 조회
	@Override
    public List<MenuVO> menuSearchList(Map<String, Object> map) {
    	List<MenuVO> list = null;
    	try {
    		list = sqlSession.selectList("menu1.menuSearchList", map);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	return list;
    }
    
	//메뉴 리스트 행 수
    @Override
	public int getMenuCount(Map<String, Object> map) {
		
		int count = sqlSession.selectOne("menu1.menuCount", map);
		
		return count;
	}
    
    //메뉴 상세 확인
    @Override
    public MenuVO openMenuDetail(String menu_id){
    	MenuVO mv = new MenuVO();
		try{
			mv=sqlSession.selectOne("menu1.menuDetail",menu_id);
		}catch(Exception e){
			e.printStackTrace();
		}
		return mv;
	}
    
    //새 메뉴 등록
    @Override
	public int createMenu(MenuVO menuVO) {
		int result=0;
		try {
			 result = sqlSession.insert("menu1.createMenu", menuVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
    
    //메뉴 수정
    @Override
	public int updateMenu(MenuVO menuVO) {
		int result=0;
		try {
			 result = sqlSession.update("menu1.updateMenu", menuVO);
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return result;
	}
    
    //메뉴 삭제
    @Override
    public int deleteMenu(MenuVO menuVO) {
    	int result=0;
    	try {
    		result = sqlSession.update("menu1.deleteMenu", menuVO);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}		
    	return result;
    }
    
    //메뉴ID 확인
	@Override
	public MenuVO getMenuId(Map<String, Object> map){
		MenuVO mv = new MenuVO();
		try{
			mv=sqlSession.selectOne("menu1.getMenuId",map);
		}catch(Exception e){
			e.printStackTrace();
		}
		return mv;
	}
	
	
}
